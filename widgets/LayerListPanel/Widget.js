///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'jimu/BaseWidget',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/_base/html',
    'dojo/dom',
    'dojo/on',
    'dojo/query',
    'dijit/registry',
    './LayerListView',
    './NlsStrings',
    'jimu/LayerInfos/LayerInfos',
    'jimu/WidgetManager',
    'dojo/topic',
    'jimu/dijit/LoadingIndicator',
    "jimu/magicgis/configProject",
    'jimu/magicgis/util/PipelineOperation/MapPipelineStatus',
    'jimu/magicgis/util/APDMOperation',
    'jimu/PanelManager',
    'jimu/magicgis/util/services/GetTableDataService'
  ],
  function(BaseWidget, declare, lang, array, html, dom, on,
  query, registry, LayerListView, NlsStrings, LayerInfos,WidgetManager,topic,LoadingIndicator,configProject,MapPipelineStatus,APDMOperation,PanelManager) {

    var clazz = declare([BaseWidget], {
      //these two properties is defined in the BaseWiget
      baseClass: 'jimu-widget-layerListPanel',
      name: 'layerListpanel',
      _denyLayerInfosReorderResponseOneTime: null,
      //layerListView: Object{}
      //  A module is responsible for show layers list
      layerListView: null,

      //operLayerInfos: Object{}
      //  operational layer infos
      operLayerInfos: null,
        weatherinfowidget:null,
      startup: function() {
        this.inherited(arguments);
          if (!this.loading) {
              this.loading = new LoadingIndicator({
                  hidden: true
              });
          }
          this.loading.placeAt(window.jimuConfig.layoutId);
        NlsStrings.value = this.nls;
        this._denyLayerInfosReorderResponseOneTime = false;
        // summary:
        //    this function will be called when widget is started.
        // description:
        //    according to webmap or basemap to create LayerInfos instance
        //    and initialize operLayerInfos;
        //    show layers list;
        //    bind events for layerLis;

        if (this.map.itemId) {
          LayerInfos.getInstance(this.map, this.map.itemInfo)
            .then(lang.hitch(this, function(operLayerInfos) {
              this.operLayerInfos = operLayerInfos;
              this.showLayers();
              this.bindEvents();
              dom.setSelectable(this.layersSection, false);
            }));
        } else {
          var itemInfo = this._obtainMapLayers();
          LayerInfos.getInstance(this.map, itemInfo)
            .then(lang.hitch(this, function(operLayerInfos) {
              this.operLayerInfos = operLayerInfos;
              this.showLayers();
              this.bindEvents();
              dom.setSelectable(this.layersSection, false);
            }));
        }

          html.setStyle(this.LayerlistPanel, 'height', (document.documentElement.clientHeight-160)+'px');
          this.own(on(this.specialNavLI,"click",lang.hitch(this,this._onspecialNavClick)));
          this.own(on(this.layerNavLI,"click",lang.hitch(this,this._onlayerNavClick)));
          this.own(on(this.queryNavLI,"click",lang.hitch(this,this._onqueryNavClick)));

          this.own(on(this.queryListBody, 'mouseover', lang.hitch(this, this.queryListBodyOver)));
          this.own(on(this.queryListBody, 'mouseout', lang.hitch(this, this.queryListBodyOut)));
          this.own(on(this.queryListBody, 'click', lang.hitch(this, this.queryListBodyClick)));
          this.own(on(this.queryListBody, 'mouseenter', lang.hitch(this, this.queryListBodyEnter)));
          this.own(on(this.queryListBody, 'mouseleave', lang.hitch(this, this.queryListBodyLeave)));
          this.queryType.onclick=lang.hitch(this,function(evt){//事件代理
              var e=event||evt;
              var obj=e.srcElement||e.target;
              if(obj.tagName=='A'){
                  //topic.publish("highQueryFeature",obj.getAttribute("typecode"),this.queryListFloatDesc.innerHTML);
                  var activeFeatureClass=this.queryListFloatDesc.innerHTML;
                  var queryType=obj.getAttribute("typecode");
                  var mapPipelineStatus=MapPipelineStatus.getInstance();
                  var apdmOperation=APDMOperation.getInstance({map:this.map});
                  if(!mapPipelineStatus.CenterPoint.CenterStation){
                      layer.msg(this.nls.queryTip);
                      return;
                  }
                  this.loading.show();
                  if(queryType=="point"){
                      apdmOperation.apdmSearchPointbySsStation(activeFeatureClass,mapPipelineStatus.CenterPoint.CenterStationSeriesEventID,mapPipelineStatus.CenterPoint.CenterStation,50,mapPipelineStatus.mUnitEventID,lang.hitch(this,this.apdmSearchComplete),lang.hitch(this,this.executeFault));
                  }else if(queryType=="polyline"){
                      apdmOperation.apdmSearchByLineStation(activeFeatureClass,mapPipelineStatus.CenterPoint.LineLoopEventID,mapPipelineStatus.BeginPoint.BeginStation,mapPipelineStatus.EndPoint.EndStation,mapPipelineStatus.mUnitEventID,lang.hitch(this,this.apdmSearchComplete),lang.hitch(this,this.executeFault));
                  }else if(queryType=="polygon"){
                      apdmOperation.apdmSearchbyEnvelop(this.map.extent,activeFeatureClass,mapPipelineStatus.mUnitEventID,lang.hitch(this,this.apdmSearchComplete),lang.hitch(this,this.executeFault));
                  }
              }});

          this.initSpecialmaps();
          this.getWebserviceData();
      },

      destroy: function() {
        this._clearLayers();
        this.inherited(arguments);
      },

      _obtainMapLayers: function() {
        // summary:
        //    obtain basemap layers and operational layers if the map is not webmap.
        var basemapLayers = [],
          operLayers = [];
        // emulate a webmapItemInfo.
        var retObj = {
          itemData: {
            baseMap: {
              baseMapLayers: []
            },
            operationalLayers: []
          }
        };
        array.forEach(this.map.graphicsLayerIds, function(layerId) {
          var layer = this.map.getLayer(layerId);
          if (layer.isOperationalLayer) {
            operLayers.push({
              layerObject: layer,
              title: layer.label || layer.title || layer.name || layer.id || " ",
              id: layer.id || " "
            });
          }
        }, this);
        array.forEach(this.map.layerIds, function(layerId) {
          var layer = this.map.getLayer(layerId);
          if (layer.isOperationalLayer) {
            operLayers.push({
              layerObject: layer,
              title: layer.label || layer.title || layer.name || layer.id || " ",
              id: layer.id || " "
            });
          } else {
            basemapLayers.push({
              layerObject: layer,
              id: layer.id || " "
            });
          }
        }, this);

        retObj.itemData.baseMap.baseMapLayers = basemapLayers;
        retObj.itemData.operationalLayers = operLayers;
        return retObj;
      },

      showLayers: function() {
        // summary:
        //    create a LayerListView module used to draw layers list in browser.
        this.layerListView = new LayerListView({
          operLayerInfos: this.operLayerInfos,
          layerListWidget: this,
          config: this.config
        }).placeAt(this.layerListBody);
      },

      _clearLayers: function() {
        // summary:
        //   clear layer list
        //domConstruct.empty(this.layerListTable);
        if (this.layerListView && this.layerListView.destroyRecursive) {
          this.layerListView.destroyRecursive();
        }
      },

      _refresh: function() {
        this._clearLayers();
        this.showLayers();
      },

      /****************
       * Event
       ***************/
      bindEvents: function() {
        // summary:
        //    bind events are listened by this module
        this.own(on(this.operLayerInfos,
          'layerInfosChanged',
          lang.hitch(this, this._onLayerInfosChanged)));

        this.own(on(this.operLayerInfos,
          'tableInfosChanged',
          lang.hitch(this, this._onLayerInfosChanged)));

        this.own(this.operLayerInfos.on('layerInfosIsVisibleChanged',
          lang.hitch(this, this._onLayerInfosIsVisibleChanged)));

        this.own(on(this.operLayerInfos,
          'updated',
          lang.hitch(this, this._onLayerInfosObjUpdated)));

        this.own(on(this.operLayerInfos,
          'layerInfosReorder',
          lang.hitch(this, this._onLayerInfosReorder)));

        this.own(on(this.map,
          'zoom-end',
          lang.hitch(this, this._onZoomEnd)));

        this.own(on(this.operLayerInfos,
          'layerInfosRendererChanged',
          lang.hitch(this, this._onLayerInfosRendererChanged)));
      },

      _onLayerInfosChanged: function(/*layerInfo, changedType*/) {
        this._refresh();
      },

      _onLayerInfosIsVisibleChanged: function(changedLayerInfos) {
        array.forEach(changedLayerInfos, function(layerInfo) {
          query("[class~='visible-checkbox-" + layerInfo.id + "']", this.domNode)
          .forEach(function(visibleCheckBoxDomNode) {
            var visibleCheckBox = registry.byNode(visibleCheckBoxDomNode);
            if(layerInfo.isVisible()) {
              visibleCheckBox.check();
            } else {
              visibleCheckBox.uncheck();
            }
          }, this);

        }, this);
      },

      _onLayerInfosObjUpdated: function() {
        this._refresh();
      },

      _onZoomEnd: function() {
        this.operLayerInfos.traversal(lang.hitch(this, function(layerInfo) {
          query("[class~='layer-title-div-" + layerInfo.id + "']", this.domNode)
          .forEach(function(layerTitleDivIdDomNode) {
            try {
              if (layerInfo.isInScale()) {
                html.removeClass(layerTitleDivIdDomNode, 'grayed-title');
              } else {
                html.addClass(layerTitleDivIdDomNode, 'grayed-title');
              }
            } catch (err) {
              console.warn(err.message);
            }
          }, this);
        }));
      },

      _onLayerInfosReorder: function() {
        if(this._denyLayerInfosReorderResponseOneTime) {
          // denies one time
          this._denyLayerInfosReorderResponseOneTime = false;
        } else {
          this._refresh();
        }
      },

      _onLayerInfosRendererChanged: function(changedLayerInfos) {
        try {
          array.forEach(changedLayerInfos, function(layerInfo) {
            this.layerListView.redrawLegends(layerInfo);
          }, this);
        } catch (err) {
          this._refresh();
        }
      },

        onAppConfigChanged: function(appConfig, reason, changedData){
            /*jshint unused: false*/
            this.appConfig = appConfig;
        },

        //专题图相关代码-------------------------------------------------------------------------------------------------
        initSpecialmaps: function() {
            var specialmaps = lang.clone(this.map.itemInfo.itemData.operationalLayers);
            if (specialmaps || specialmaps.length > 0) {
                for(var j = 0; j < specialmaps.length; j++) {
                    if(!specialmaps[j].icon)continue;
                    var specailmapDiv = html.create("div");
                    html.addClass(specailmapDiv, "specialMap");
                    var img=new Image();
                    img.src=specialmaps[j].icon;
                    img.url=specialmaps[j].url;
                    img.label=specialmaps[j].label;
                    this.own(on(img,"click",lang.hitch(this,this._onImageClick)));
                    html.addClass(img, "imageMap");
                    /*html.setStyle(img, 'width', '90px');
                     html.setStyle(img, 'height', '69px');
                     html.setStyle(img, 'cursor', 'pointer');*/
                    specailmapDiv.appendChild(img);
                    var newNode = document.createElement("p");
                    newNode.innerHTML = specialmaps[j].label;
                    html.setStyle(newNode, 'text-align', 'center');
                    specailmapDiv.appendChild(newNode);
                    this.specialsMapDiv.appendChild(specailmapDiv);
                }
            }
        },

        _onImageClick:function(evt) {
            WidgetManager.getInstance().closeWidget(this.id);
            var sdSon=this.specialsMapDiv.getElementsByTagName('div');
            for(var i=0;i<sdSon.length;i++){
                if(sdSon[i].innerText.indexOf(evt.currentTarget.label)>0)
                {
                    sdSon[i].style.color = "#5e71ff";
                }
                else
                {
                    html.setStyle(sdSon[i], 'color', '#000000');
                }
            }

            var config = lang.clone(this.config.basemapGallery);
            for (var i = this.map.layerIds.length -1; i >= 0; i--)
            {
                var layer=this.map.getLayer(this.map.layerIds[i]);
                if(layer.declaredClass == "esri.layers.ArcGISDynamicMapServiceLayer")
                {
                    if(layer.label=="美国地图"||layer.label==evt.currentTarget.label)
                    {
                        layer.setVisibility(true);
                    }
                    else
                    {
                        //this.map.removeLayer(layer);
                        layer.setVisibility(false);
                    }
                }
            }
            /*if(evt.currentTarget.label!="管道走向图"){
             var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer(evt.currentTarget.url);
             dynamicMapServiceLayer.label =  evt.currentTarget.label;
             dynamicMapServiceLayer.title = evt.currentTarget.label;
             this.map.addLayer(dynamicMapServiceLayer);
             }*/
            topic.publish('setSubTitle',evt.currentTarget.label);
            topic.publish('openFloatTool',evt.currentTarget.label);
        },
        //--------------------------------------------------------------------------------------------------------------

        //高级查询相关代码------------------------------------------------------------------------------------------------
        _onspecialNavClick:function(evt){
            this._removeBtnClass();
            html.addClass(this.specialNav,'active');
            html.addClass(this.specialNavLI,'active');
            html.setStyle(this.thamaticContent, 'display', 'block');
        },
        _onlayerNavClick:function(evt){
            this._removeBtnClass();
            html.addClass(this.layerNav,'active');
            html.addClass(this.layerNavLI,'active');
            html.setStyle(this.layersSection, 'display', 'block');
        },
        _onqueryNavClick:function(evt){
            this._removeBtnClass();
            html.addClass(this.queryNav,'active');
            html.addClass(this.queryNavLI,'active');
            html.setStyle(this.querySection, 'display', 'block');
        },
        _removeBtnClass:function(){
            html.removeClass(this.specialNav,'active');
            html.removeClass(this.layerNav,'active');
            html.removeClass(this.queryNav,'active');
            html.removeClass(this.specialNavLI,'active');
            html.removeClass(this.layerNavLI,'active');
            html.removeClass(this.queryNavLI,'active');
            html.setStyle(this.thamaticContent, 'display', 'none');
            html.setStyle(this.layersSection, 'display', 'none');
            html.setStyle(this.querySection, 'display', 'none');
        },

        getWebserviceData:function(){
            //创建WebService对象
            /*if(this.ws==null)
            {
                //this.ws=new com_cnpc_service_IGetTableData();
                this.ws = new def_service_cnpc_com__IGetTableData();
                this.ws.url = configProject.getTableData;

            }
            //调用方法，使用参数
            this.ws.getTableData(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),"zh");*/
            this.processResponse(null);
        },
        processResponse:function(response){
            //var dataJson = response.getReturn();
            var dataJson = '{"topics":[{"TABLENAME":"EME_REPAIRRECORD","NAME":"抢修记录"},{"TABLENAME":"DIS_POINTINFO_HIS","NAME":"灾害点历史调查信息表"},{"TABLENAME":"PRO_GPS_KEYPOINT","NAME":"巡检关键点"},{"TABLENAME":"ENG_DEALEMERGENCY","NAME":"防汛抢险报告表"},{"TABLENAME":"BASIC_ALIGNMENTMATCH","NAME":"工程图信息表"},{"TABLENAME":"DIS_POINTINFO","NAME":"灾害点信息表"},{"TABLENAME":"VALVE","NAME":"阀门"},{"TABLENAME":"INTPOORQUACOATINGSEGMENT","NAME":"防腐层质量较差管段"},{"TABLENAME":"INTPOORQCSEGHISTORICAL","NAME":"防腐层质量较差管段副本"},{"TABLENAME":"INTLESSPROSEGHISTORICAL","NAME":"阴极保护欠保护段副本"},{"TABLENAME":"CRACKHISTORICAL","NAME":"裂纹缺陷副本"},{"TABLENAME":"ELLIPTICDEFHISTORICAL","NAME":"椭圆变形缺陷副本"},{"TABLENAME":"CAL_DAYREPORTSON","NAME":"防汛日报子表"},{"TABLENAME":"ANT_ANTISEPSISSON","NAME":"防腐层检漏副表"},{"TABLENAME":"CAL_WEEKREPORTSON","NAME":"站队防汛周报副表"},{"TABLENAME":"HD_CROSSINGRECTIFY","NAME":"隐患整改"},{"TABLENAME":"HD_SITEGASRECTIFY","NAME":"隐患整改"},{"TABLENAME":"MAI_PIPEREPAIR","NAME":"管体修复记录"},{"TABLENAME":"WORK_QUESTION","NAME":"问题上报"},{"TABLENAME":"PLAN_FAULTITEM","NAME":"缺陷修复计划项表"},{"TABLENAME":"PLAN_GEOITEM","NAME":"地质灾害治理计划项表"},{"TABLENAME":"PRO_OCCUPANCY","NAME":"管道占压清理表"},{"TABLENAME":"PRO_THEFTCASE","NAME":"反打孔盗油气信息"},{"TABLENAME":"INSPFEATURES","NAME":"内检测记录"},{"TABLENAME":"INTINTERFERENCE","NAME":"杂散电流干扰评价结果"},{"TABLENAME":"INTINTERFERENCEHISTORICAL","NAME":"杂散电流干扰评价结果副本"},{"TABLENAME":"INTCOATINGBREAKAGEPOINT","NAME":"防腐层破损点"},{"TABLENAME":"HCAHISTORICAL","NAME":"高后果区副本"},{"TABLENAME":"DENTHISTORICAL","NAME":"凹陷缺陷副本"},{"TABLENAME":"GEODISASTEREASILYAREA","NAME":"管道地质灾害易发区段"},{"TABLENAME":"BURIEDSIGN","NAME":"埋地标识"},{"TABLENAME":"INSPMARKERTABLE","NAME":"内检测定位信息表"},{"TABLENAME":"MISCCROSSING","NAME":"其它穿跨越"},{"TABLENAME":"INTEXCAVATION","NAME":"开挖检查评价结果"},{"TABLENAME":"INTCOATINGBAPNTHISTORICAL","NAME":"防腐层破损点副本"},{"TABLENAME":"INTEXCAVATIONHISTORICAL","NAME":"开挖检查评价结果副本"},{"TABLENAME":"METALLOSSHISTORICAL","NAME":"金属损失缺陷副本"},{"TABLENAME":"BENDINGSTRAIN","NAME":"弯曲应变"},{"TABLENAME":"INTLESSPROTECTIONSEGMENT","NAME":"阴极保护欠保护段"},{"TABLENAME":"WELDABNORMALHISTORICAL","NAME":"焊缝缺陷副本"},{"TABLENAME":"CLASSAREA","NAME":"地区等级"},{"TABLENAME":"INDIVIDUALRISK","NAME":"个人风险"},{"TABLENAME":"SOILZONE","NAME":"管道沿线土壤"},{"TABLENAME":"RISKLINELOOP","NAME":"风险管道"}],"totalCount":"44"}';
            console.log("getTableData webService成功");
            var json = dojo.fromJson(dataJson);
            array.forEach(json.topics, lang.hitch(this, function(table){
                var queryListDiv = document.createElement("div");
                html.addClass(queryListDiv,"queryListDiv");
                queryListDiv.setAttribute("data-value", table.TABLENAME);
                queryListDiv.innerHTML=table.NAME;
                this.queryListBody.appendChild(queryListDiv);
            }));
        },
        reportError:function(response){
            //this.loading.hide();
            console.log("getTableData webservice失败"+response);
            //layer.msg("getTableData webservice failed"+response);
        },

        queryListBodyOver:function(evt)
        {
            if($(evt.target).hasClass("queryListDiv")){
                //html.setStyle(this.highQueryListFloat,"display","block");
                $("#highQueryListFloat").offset({top:evt.clientY-10});
                this.queryListFloatTitle.innerHTML=evt.target.innerHTML;
                this.queryListFloatDesc.innerHTML=evt.target.getAttribute("data-value");
            }
        },
        queryListBodyOut:function(evt)
        {
            //html.setStyle(this.highQueryListFloat,"display","none");
        },
        queryListBodyClick:function(evt)
        {
            if($(evt.target).hasClass("queryListDiv")){
                html.setStyle(this.highQueryListFloat,"display","block");
                $("#highQueryListFloat").offset({top:evt.clientY-10});
                this.queryListFloatTitle.innerHTML=evt.target.innerHTML;
                this.queryListFloatDesc.innerHTML=evt.target.getAttribute("data-value");
            }
        },
        queryListBodyEnter:function(evt)
        {
            html.setStyle(this.highQueryListFloat,"display","block");
        },
        queryListBodyLeave:function(evt)
        {
            html.setStyle(this.highQueryListFloat,"display","none");
        },

        //查询的要素
        apdmSearchComplete:function(event) {
            this.loading.hide();
            var lc_soeResult = event.mPosSoeResult;
            var attributeTable = lc_soeResult.AttributeTable;
            if (attributeTable&&JSON.parse(attributeTable)["Rows"].length>=1) {
                topic.publish('openWidget', "widgets_FeatureQuery_Widget");
                topic.publish('attributeTable',attributeTable);
            }else{
                layer.msg("QUery noresult");
            }
        },
        executeFault:function(event){
            this.loading.hide();
            console.log(event.toString());
            layer.msg(event.toString());
        },
        //--------------------------------------------------------------------------------------------------------------

    });

    return clazz;
  });
