///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
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
    'dojo/_base/declare',
    'dojo/_base/html',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/BaseWidget',
    'dojo/dom-construct',
    "dojo/dom-style",
    'dojo/dom-class',
    'dojo/_base/lang',
    "dojo/on",
    "dojo/topic",
    'esri/toolbars/draw','jimu/magicgis/util/commonUtils',
    'esri/graphic',"esri/symbols/PictureMarkerSymbol",
     "esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer",
        "jimu/magicgis/configProject",
        'jimu/dijit/LoadingIndicator',
        "jimu/dijit/CheckBox","jimu/WidgetManager","esri/graphicsUtils",
    'jimu/PanelManager'
  ],
  function(
    declare,
    html,
    _WidgetsInTemplateMixin,
    BaseWidget,
    domConstruct,
    domStyle,
    domClass,
    lang,
    on,topic,Draw,commonUtils,Graphic,PictureMarkerSymbol,GraphicsLayer,SimpleRenderer,configProject,LoadingIndicator,
    CheckBox,WidgetManager,graphicsUtils,
    PanelManager) {
    var clazz = declare([BaseWidget], {
      name: 'DockedPanel',
      baseClass: 'jimu-widget-dockedpanel',
      //创建面板
      //templateString:'<div data-dojo-attach-point="Dockedontainer"></div>',
        openedId: '',
        tb:null,
        picMarker:new PictureMarkerSymbol("jimu.js/magicgis/images/locationPt.png", 32, 32),
        ptFeatures: [
            //{ "geometry": { x: 116.711, y: 39.520 }, "attributes": { url: 'pano.jpg', attitudez: 55.289144260282690 } },
            { "geometry": { x: 116.508920823701940, y: 39.781302035780023 }, "attributes": { url: 'posed000001.jpg', attitudez: 55.246842316635963 } },
            { "geometry": { x: 116.508949641533680, y: 39.781316209547128 }, "attributes": { url: 'posed000002.jpg', attitudez: 55.874884884498464 } },
            { "geometry": { x: 116.508981190043740, y: 39.781332084527953 }, "attributes": { url: 'posed000003.jpg', attitudez: 55.913043217177162 } },
            { "geometry": { x: 116.509015177998340, y: 39.781349308774409 }, "attributes": { url: 'posed000004.jpg', attitudez: 56.079101007834431 } },
            { "geometry": { x: 116.509051284301580, y: 39.781367598279552 }, "attributes": { url: 'posed000005.jpg', attitudez: 56.166601018622252 } },
            { "geometry": { x: 116.509089316013540, y: 39.781386712481641 }, "attributes": { url: 'posed000006.jpg', attitudez: 56.531510400582995 } },
            { "geometry": { x: 116.509128535098780, y: 39.781406157656114 }, "attributes": { url: 'posed000007.jpg', attitudez: 56.638851227636252 } },
            { "geometry": { x: 116.509168238755590, y: 39.781425642076314 }, "attributes": { url: 'posed000008.jpg', attitudez: 57.943444060464728 } },
            { "geometry": { x: 116.509207440508520, y: 39.781444951733938 }, "attributes": { url: 'posed000009.jpg', attitudez: 57.924252013995300 } }
        ],
        ptLayer:null,

       startup:function(){
           this.inherited(arguments);
           if (!this.loading) {
               this.loading = new LoadingIndicator({
                   hidden: true
               });
           }
           this.loading.placeAt(window.jimuConfig.layoutId);
           topic.subscribe('openFloatTool', lang.hitch(this, this.openFloatTool));
           //高度设置
           /*domStyle.set(this.domNode,"height",this.currentHeight+"px");*/
           this.tb = new Draw(this.map);
           this.tb.on("draw-end", lang.hitch(this,this.addGraphic));
           this.ptLayer = new GraphicsLayer({ id: "streetViewLayer" });
       },

        openFloatTool:function(widgetType){
            //dojo.empty(this.Dockedontainer);
            this._removeDiv();
            if(widgetType == '巡检管理'){
                /*var floatDiv=domConstruct.create("div");
                domClass.add(floatDiv,"floattool");
                domConstruct.place(floatDiv,this.Dockedontainer);
                var separatorDiv1=domConstruct.create("div");
                domClass.add(separatorDiv1,"v_separator");
                var iconDiv1=domConstruct.create("div");
                domClass.add(iconDiv1,"icon");
                var monitorDiv=domConstruct.create("div");
                monitorDiv.setAttribute("title", "巡检人员");
                domClass.add(monitorDiv,"monitor_nav");
                domConstruct.place(monitorDiv,floatDiv);
                domConstruct.place(iconDiv1,monitorDiv);
                domConstruct.place(separatorDiv1,floatDiv);
                this.own(on(monitorDiv,'click',lang.hitch(this,this._onMonitorClicked)));
                var separatorDiv2=domConstruct.create("div");
                domClass.add(separatorDiv2,"v_separator");
                var iconDiv2=domConstruct.create("div");
                domClass.add(iconDiv2,"icon");
                var keypointDiv=domConstruct.create("div");
                keypointDiv.setAttribute("title", "巡检点");
                domClass.add(keypointDiv,"keypoint_nav");
                domConstruct.place(keypointDiv,floatDiv);
                domConstruct.place(iconDiv2,keypointDiv);
                domConstruct.place(separatorDiv2,floatDiv);
                this.own(on(keypointDiv,'click',lang.hitch(this,this._onKeypointClicked)));
                var separatorDiv3=domConstruct.create("div");
                domClass.add(separatorDiv3,"v_separator");
                var iconDiv3=domConstruct.create("div");
                domClass.add(iconDiv3,"icon");
                var matterDiv=domConstruct.create("div");
                matterDiv.setAttribute("title", "问题上报");
                domClass.add(matterDiv,"matter_nav");
                domConstruct.place(matterDiv,floatDiv);
                domConstruct.place(iconDiv3,matterDiv);
                domConstruct.place(separatorDiv3,floatDiv);
                this.own(on(matterDiv,'click',lang.hitch(this,this._onMatterClicked)));
                var iconDiv4=domConstruct.create("div");
                domClass.add(iconDiv4,"icon");
                var alarmDiv=domConstruct.create("div");
                alarmDiv.setAttribute("title", "紧急上报");
                domClass.add(alarmDiv,"alarm_nav");
                domConstruct.place(alarmDiv,floatDiv);
                domConstruct.place(iconDiv4,alarmDiv);
                this.own(on(alarmDiv,'click',lang.hitch(this,this._onAlarmClicked)));*/
                html.setStyle(this.MonitorDiv, "display", "block");
            }else if(widgetType == '数据采集'){
                html.setStyle(this.GPSMarkerInfoDiv, "display", "block");
            }else if(widgetType == '全景测试'){
                html.setStyle(this.PanoramaDiv, "display", "block");
            }else if(widgetType == '行政区划'){
                html.setStyle(this.MediumChatDiv, "display", "block");
            }
        },
        _removeDiv:function(){
            html.setStyle(this.MonitorDiv, "display", "none");
            html.setStyle(this.GPSMarkerInfoDiv, "display", "none");
            html.setStyle(this.PanoramaDiv, "display", "none");
            html.setStyle(this.MediumChatDiv, "display", "none");
        },

        _onMonitorClicked:function(){
            //topic.publish('openWidget', "Monitor");
            this.setOpenedId("Monitor");
        },
        _onKeypointClicked:function(){
            //topic.publish('openWidget', "KeyPoint");
            this.setOpenedId("KeyPoint");
        },
        _onMatterClicked:function(){
            //topic.publish('openWidget', "Matter");
            this.setOpenedId("Matter");
        },
        _onAlarmClicked:function(){
            //topic.publish('openWidget', "Alarm");
            this.setOpenedId("Alarm");
        },
        _onGPSMarkerInfoClicked:function(){
            //topic.publish('openWidget', "GPSMarkerInfo");
            this.setOpenedId("GPSMarkerInfo");
        },
        _onGPSMarkerDepthClicked:function(){
            //topic.publish('openWidget', "GPSMarkerInfo");
            this.setOpenedId("GPSMarkerDepth");
        },
        _onupPanoramaClicked:function(event){
            this.setOpenedId("UploadPanorama");
        },
        _onbdPanoramaClicked:function(event){
            var target = event.target || event.srcElement;
            var isSelected = html.hasClass(target, 'active');

            //toggle tools on and off
            if(isSelected){
                html.removeClass(this.bdPanoramaDiv,'active');
                if(this.tb){
                    this.tb.deactivate();
                }
            }else{
                html.addClass(this.bdPanoramaDiv, 'active');
                this.tb.activate(Draw.POINT);
            }
        },
        _ongdPanoramaClicked:function(){
            this.loading.show();
            //从服务器获取数据来的
            /*dojo.xhrPost({
                url:configProject.queryPictures,
                handleAs:"text",
                content:{"auditFlag":"0"},
                load:lang.hitch(this,function(response){
                    var dataJson = response;
                    console.log("查询上传图片服务成功：");
                    var list= dojo.fromJson(dataJson);
                    this.loading.hide();
                    if (list.topics && list.topics.length > 0 && list.totalCount != 0) {
                        var graphicsArr = [];
                        //for (var i = 0, m = this.ptFeatures.length; i < m; i++) {
                        //    var graphics = new Graphic(this.ptFeatures[i]);
                        //    graphicsArr.push(graphics);
                        //    this.ptLayer.add(graphics);
                        //}
                        for (var i = 0, m = list.topics.length; i < m; i++) {
                            var geometry = { x: Number(list.topics[i].LON), y: Number(list.topics[i].LAT) };
                            var attributes = {url: list.topics[i].URL, attitudez: Number(list.topics[i].ATTITUDEZ)};
                            var ptFeature = { "geometry": geometry, "attributes": attributes }
                            var graphics = new Graphic(ptFeature);
                            graphicsArr.push(graphics);
                            this.ptLayer.add(graphics);
                        }
                        this.map.setExtent(graphicsUtils.graphicsExtent(graphicsArr).expand(1.2));
                        var symbol = new PictureMarkerSymbol({
                            'angle': 0, 'xoffset': 0, 'yoffset': 1,
                            'type': 'esriPMS', 'url': 'images/blue-dot-small.png',
                            'contentType': 'image/png', 'width': 12, 'height': 12
                        });
                        this.ptLayer.renderer = new SimpleRenderer(symbol);

                        dojo.connect(this.ptLayer, "onClick", this.showStreetScape);
                        this.map.addLayer(this.ptLayer);
                    }else{
                        layer.msg("查询上传图片服务失败");
                    }
                }),
                error:lang.hitch(this,function(response){
                    console.log("查询上传图片服务失败："+response);
                    layer.msg("查询上传图片服务失败："+response);
                    this.loading.hide();
                }),
            });*/
            this.loading.hide();
            var graphicsArr = [];
            for (var i = 0, m = this.ptFeatures.length; i < m; i++) {
             var graphics = new Graphic(this.ptFeatures[i]);
             graphicsArr.push(graphics);
             this.ptLayer.add(graphics);
             }
            this.map.setExtent(graphicsUtils.graphicsExtent(graphicsArr).expand(1.2));
            var symbol = new PictureMarkerSymbol({
                'angle': 0, 'xoffset': 0, 'yoffset': 1,
                'type': 'esriPMS', 'url': 'images/blue-dot-small.png',
                'contentType': 'image/png', 'width': 12, 'height': 12
            });
            this.ptLayer.renderer = new SimpleRenderer(symbol);

            dojo.connect(this.ptLayer, "onClick", this.showStreetScape);
            this.map.addLayer(this.ptLayer);
        },

        _onmediumChartClicked:function(event){
          this.setOpenedId("MediumChart");
        },

        setOpenedId: function(widgetId) {
            if(this.openedId){
                PanelManager.getInstance().closePanel(this.openedId+"_panel");
            }
            this.openedId = widgetId;
            for(var i=0;i<WidgetManager.getInstance().appConfig.widgetPool.widgets.length;i++){
                var widget=WidgetManager.getInstance().appConfig.widgetPool.widgets[i];
                if(widget.id==widgetId){
                    PanelManager.getInstance().showPanel(widget);
                }
            }
        },

        addGraphic:function(evt){
            //deactivate the toolbar and clear existing graphics
            this.tb.deactivate();
            this.map.graphics.clear();
            this.map.graphics.add(new Graphic(evt.geometry, this.picMarker));
            html.removeClass(this.bdPanoramaDiv,'active');
            var lonStr,latStr;
            if(this.map.spatialReference.wkid==4326)
            {
                lonStr=(evt.geometry.x).toFixed(10);
                latStr=(evt.geometry.y).toFixed(10);
            }
            else if(this.map.spatialReference.isWebMercator())
            {
                lonStr=(commonUtils._MercatorToLon(evt.geometry.x)).toFixed(10);
                latStr=(commonUtils._MercatorToLat(evt.geometry.y)).toFixed(10);
            }
            $.ajax({
                url: "http://api.map.baidu.com/panorama/v2?ak=oMvdENGYZmsGBZlo8MFffrQb&coordtype=wgs84ll&width=1024&height=512&location="+lonStr+","+latStr+"&fov=360",
                type:'POST',
                success: lang.hitch(this,function(data){
                    if(data&&data.indexOf("status")>=0&&JSON.parse(data)&&JSON.parse(data).status!=0){
                        layer.msg("请求街景服务失败 "+JSON.parse(data).message);
                        return;
                    }
                    this.PicWindow = window.open("http://api.map.baidu.com/panorama/v2?ak=oMvdENGYZmsGBZlo8MFffrQb&coordtype=wgs84ll&width=1024&height=512&location="+lonStr+","+latStr+"&fov=360","PicWindow")
                    this.PanoramaWindow = window.open("Panorama.html"+"?"+lonStr+","+latStr,"PanoramaWindow");
                }),
                error: function() {
                    layer.msg("请求街景服务失败");
                }
            });
        },

        // 由二维地图进入街景视图
        showStreetScape:function(evt) {
            this.StreetViewWindow = window.open("StreetView.html"+"?"+evt.graphic.geometry["x"]+","+evt.graphic.geometry["y"]+","+evt.graphic.attributes["url"]+","+evt.graphic.attributes["attitudez"],"StreetViewWindow");
        },

        destory:function(){
        },

        onOpen:function(){
        },

        onClose:function(){
        }
    });

    clazz.inPanel = false;
    clazz.hasUIFile = true;
    return clazz;
  });