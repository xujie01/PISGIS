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
    'dijit/_WidgetBase',
    'jimu/BaseWidget',
    'dijit/layout/TabContainer',
    "dijit/layout/ContentPane",
    'jimu/utils',
    'jimu/dijit/Message',
    "dojo/Deferred",
    "dojo/promise/all",
    "esri/layers/FeatureLayer",
    "esri/lang",
    'dojo/_base/lang',
    "dojo/on",
    'dojo/touch',
    'dojo/topic',
    'dojo/aspect',
    "dojo/_base/array",
    "dojo/query",
    'jimu/dijit/LoadingIndicator',
    'jimu/FilterManager',
    './SpaceQueryTable/_ResourceManager',
    // './_TableFunctionController',
    './SpaceQueryTable/utils',
    'jimu/LayerInfos/LayerInfos',
    'dojo/request/xhr',
    'dojo/dom-style'
  ],
  function(
    declare,
    html,
    _WidgetsInTemplateMixin,
    _WidgetBase,
    BaseWidget,
    TabContainer,
    ContentPane,
    utils,
    Message,
    Deferred,
    all,
    FeatureLayer,
    esriLang,
    lang,
    on,
    touch,
    topic,
    aspect,
    array,
    domQuery,
    LoadingIndicator,
    FilterManager,
    _ResourceManager,
    attrUtils,LayerInfos,xhr,domStyle) {
    var clazz = declare([_WidgetBase, _WidgetsInTemplateMixin], {
      /* global apiUrl */
      name: 'SpaceQueryTable',
      baseClass: 'jimu-widget-spacequerytable',

        map:null,
        data:null,
        _geometryExtent:null,
        _resourceManager: null,
        showLayerInfos:null,
        _activeLayerInfoId: null,
        layerTabPages:[],
        // TODO: layerType: FeatureLayer,  RelationshipTable
        _layerTypes: {
            FEATURELAYER: 'FeatureLayerTable',
            RELATIONSHIPTABLE: 'RelationshipTable'
        },

        constructor: function(/*graphicsLayer, deletedGraphics*/ params){
            this.map = params.map;
            this.data = params.data;
        },

        postMixInProperties:function(){
            this.nls = window.jimuNls.spacquerytable;
        },

        setMap:function(map){
            if(map){
                this.map = map;
            }
        },

      postCreate: function() {
          this.inherited(arguments);
          if (!this.loading) {
              this.loading = new LoadingIndicator();
          }
          this.loading.placeAt(this.domNode);
          var jsonData="jimu.js/magicgis/dijit/config/SpaceQueryTable.json";
          //var containers=[];
          return xhr(jsonData, {
              handleAs: 'json',
              headers: {
                  "X-Requested-With": null
              }
          }).then(lang.hitch(this, function(configObj){
              this.config=configObj;
              utils.loadStyleLink("dgrid", apiUrl + "dgrid/css/dgrid.css");
              this._activeTable = null;
              this._activeTableHandles = [];
              this._resourceManager = new _ResourceManager({
                  map: this.map,
                  nls: this.nls
              });
              this._resourceManager.setConfig(this.config);
              this._initDiv();

              if (this.data) {
                  this._geometryExtent=this.data;
                  this.loading.show();
                  this._openTable();
                  this.loading.hide();
              }
          }))
      },

        onClose: function() {
        },

      destroy: function() {
          var len, i;
          if (this.layerTabPages && this.layerTabPages.length > 0) {
              len = this.layerTabPages.length;
              for (i = 0; i < len; i++) {
                  var paneId = this.layerTabPages[i].paneId;
                  var table = lang.getObject('_resourceManager.featureTableSet.' + paneId, false, this);
                  if (table) {
                      var filterObj = table.getFilterObj();
                      if (filterObj && esriLang.isDefined(filterObj.expr)) {
                          this.filterManager.applyWidgetFilter(paneId, this.id, "");
                      }
                  }
                  this.layerTabPages[i].destroy();
              }
              this.layerTabPages = null;
          }

        this.inherited(arguments);
      },

        _initDiv: function() {
            if (!this.loading) {
                this.loading = new LoadingIndicator();
            }
            this.loading.placeAt(this.domNode);
            this.loading.show();
            this.AttributeTableDiv = html.create("div", {}, this.domNode);
            html.addClass(this.AttributeTableDiv, "jimu-widget-spacequerytable-main");
            domStyle.set(this.AttributeTableDiv,"visibility","hidden");//隐藏

            var tabDiv = html.create("div");
            html.setStyle(tabDiv, 'height',  '100%');
            html.place(tabDiv, this.AttributeTableDiv);

            this.tabContainer = new TabContainer({
                style: "width: 100%;height:100%"
            }, tabDiv);
            //html.setStyle(this.tabContainer.domNode, 'height',  '100%');
            this.connect(this, "resize", function () {
                this.tabContainer.resize();
            });
            this.loading.hide();
        },

        //初始化加载Tab
        _openTable: function() {
            //每次重新加载
            this._resourceManager.empty();
            this._resourceManager.setMap(this.map);
            this._resourceManager.nls=this.nls;
            this._resourceManager.setConfig(this.config);

            this._resourceManager.updateLayerInfoResources(true)
                .then(lang.hitch(this, function() {
                    if (!this.domNode) {
                        return;
                    }

                    //重新初始化
                    if(this.onHandle)this.onHandle.remove();
                    array.forEach(this.layerTabPages, lang.hitch(this, function (layerTabPage) {
                        this.tabContainer.removeChild(layerTabPage);
                    }));
                    this.layerTabPages=[];
                    this._activeLayerInfoId=null;
                    this._activeTable=null;
                    var configInfos = this._resourceManager.getConfigInfos();

                    var len = configInfos.length;
                    for (var j = 0; j < len; j++) {
                        var configInfo = configInfos[j];
                        if (configInfo.show) {
                            var json = lang.clone(configInfo);
                            var paneJson = {};

                            paneJson.paneId = json.id;
                            paneJson.title = json.name;
                            paneJson.name = json.name;
                            paneJson.layerType = this._layerTypes.FEATURELAYER;
                            paneJson.style = "height: 100%; width: 100%; overflow: visible;";
                            var cp = new ContentPane(paneJson);
                            this.layerTabPages[j] = cp;
                            this.tabContainer.addChild(cp);
                        }
                    }

                    this.tabContainer.startup();
                    // vertical center
                    utils.setVerticalCenter(this.tabContainer.domNode);
                    this.tabChanged();
                    this.onHandle =aspect.after(this.tabContainer, "selectChild", lang.hitch(this, this.tabChanged));
                    html.setStyle(this.domNode, "height", "100%");
                    this.resize();
                    domStyle.set(this.AttributeTableDiv,"visibility","visible");
                }), lang.hitch(this, function(err) {
                    console.error(err);
                    domStyle.set(this.AttributeTableDiv,"visibility","visible");
                }));
        },

        tabChanged: function() {
            if (this.tabContainer && this.tabContainer.selectedChildWidget) {
                var params = this.tabContainer.selectedChildWidget.params;

                var layerType = params.layerType;
                var infoId = params.paneId;

                if (layerType === this._layerTypes.FEATURELAYER &&
                        // change tab or the lasest operate is queryRelatedRecords
                    (this._activeLayerInfoId !== infoId || params.oids || params.featureSet)) {
                    this.setActiveTable(null);
                    delete params.oids;
                    this._activeLayerInfoId = infoId;
                    this._startQueryOnLayerTab(infoId, params.featureSet);
                }
            }
        },

        //激活刷新表格
        setActiveTable: function(table, options) {
            if (this._activeTable) {
                this._activeTable.cancelThread();
                this._activeTable.deactive();
                this._unbindActiveTableEvents();
            }
            if (table) {
                this._activeTable = table;
                this._activeTable.active();
                if (!this._activeTable.tableCreated ||
                    (this._activeTable.tableCreated && this._activeTable.matchingMap) ||
                    (this._activeTable.tableCreated &&
                    !this._activeTable.matchingMap && options.featureSet) ||
                    (options.layer && options.selectedIds)) {// queryRecordsByRelationship
                    var validFeatureSet = lang.getObject('featureSet.features.length', false, options);
                    if (options.layer && options.selectedIds) {
                        this._activeTable.queryRecordsByRelationship(options);
                    } else if (validFeatureSet) {
                        var primaryId = options.featureSet.displayFieldName;
                        var featureIds = array.map(options.featureSet.features, function(f) {
                            return f.attributes[primaryId];
                        });
                        this._activeTable.startQuery(featureIds);//调用table即为_FeatureTable中的startQuery，开始查询图层信息
                    } else {
                        this._activeTable.startQuery();
                    }
                }
                this._bindActiveTableEvents();
                this._activeTable.changeToolbarStatus();
            }
        },

        //开始查询
        _startQueryOnLayerTab: function(tabId, featureSet) {
            var layerInfo = this._resourceManager.getLayerInfoById(tabId);
            var tabPage = this.getExistLayerTabPage(tabId);

            if (layerInfo && tabPage) {
                this.showRefreshing(true);
                this._resourceManager.getQueryTable(
                    tabId,
                    this.config.filterByMapExtent,
                    this.config.hideExportButton,this._geometryExtent).then(lang.hitch(this, function(result) {
                    //prevent overwrite by another asynchronous callback
                    if (this._activeLayerInfoId !== tabId || !result) {
                        return;
                    }
                    //prevent overwrite by another asynchronous callback
                    tabPage = this.getExistLayerTabPage(tabId);

                    //核心代码，创建加载tab，table即为_FeatureTable，在此类里创建grid
                    if (result.isSupportQuery) {
                        var table = result.table;
                        if (table.getParent() !== tabPage) {
                            table.placeAt(tabPage);
                        }

                        this.setActiveTable(table, {//加载当前要查询的表格
                            featureSet: featureSet
                        });
                    } else {
                        var tip = html.toDom('<div>' + this.nls.unsupportQueryWarning + '</div>');
                        tabPage.set('content', tip);

                        if (this._activeTable) {
                            this._activeTable.changeToolbarStatus();
                        }
                    }
                    this.showRefreshing(false);
                }), lang.hitch(this, function(err) {
                    new Message({
                        message: err.message || err
                    });
                    this.showRefreshing(false);
                }));
            }
        },

        getExistLayerTabPage: function(paneId) {
            var len = this.layerTabPages.length;
            for (var i = 0; i < len; i++) {
                if (this.layerTabPages[i] && this.layerTabPages[i].get('paneId') === paneId) {
                    return this.layerTabPages[i];
                }
            }
            return null;
        },

        showRefreshing: function(refresh) {
            if (!this.loading) {
                return;
            }

            if (refresh) {
                this.loading.show();
            } else {
                this.loading.hide();
            }
        },

        _bindActiveTableEvents: function (){
            var that = this;
            if (that._activeTable) {
                that._activeTableHandles.push(on(that._activeTable,
                    'show-related-records', function(evt) {
                        that._showRelatedRecords(evt);
                    })
                );
                that._activeTableHandles.push(on(that._activeTable,
                    'show-all-records', function(evt) {
                        var page = that.getExistLayerTabPage(evt.layerInfoId);
                        page.params.layerType = that._layerTypes.FEATURELAYER;
                    })
                );
                that._activeTableHandles.push(on(that._activeTable,
                    'refresh', function(evt) {
                        var page = that.getExistLayerTabPage(evt.layerInfoId);
                        // page.params.layerType = that._layerTypes.FEATURELAYER;
                        delete page.params.featureSet;
                    })
                );
                /* that._activeTableHandles.push(on(that._activeTable,
                   'row-click', function() {
                     var tables = that._resourceManager.featureTableSet;
                     for (var p in tables) {
                       var t = tables[p];
                       if (t !== that._activeTable) {
                         t.clearSelection(false);
                       }
                     }
                   }));*/
                that._activeTableHandles.push(on(that._activeTable, 'apply-filter', function(events) {
                    that.filterManager.applyWidgetFilter(events.layerInfoId, that.id, events.expr);
                    that._activeTable.startQuery();
                }));
            }
        },

        _unbindActiveTableEvents: function (){
            var that = this;
            var handlers = that._activeTableHandles;
            while(handlers.length > 0) {
                var h = handlers.pop();
                if (h && h.remove) {
                    h.remove();
                }
            }
        },

        _showRelatedRecords: function() {
            var activeTable = this._activeTable;
            if (activeTable) {
                var layerInfo = activeTable.layerInfo;
                if (layerInfo && layerInfo.layerObject) {
                    var _layer = layerInfo.layerObject;
                    var ships = _layer.relationships;
                    var objIds = activeTable.getSelectedRows();

                    for (var i = 0, len = ships.length; i < len; i++) {
                        this.addNewRelationTab(objIds, ships[i], layerInfo.id);
                    }
                }
            }
        },

        addNewRelationTab: function(oids, relationShip, originalInfoId) {
            var lInfo = relationShip && relationShip.shipInfo;
            if (!lInfo) {
                return;
            }
            var page = this.getExistLayerTabPage(relationShip.shipInfo.id);

            var json = {};
            json.oids = oids;
            var paneTitle = lInfo.title || lInfo.name || relationShip.name;
            json.title = paneTitle;
            json.name = json.title;
            json.paneId = lInfo.id;
            json.relKey = relationShip._relKey;
            json.originalInfoId = originalInfoId;
            json.closable = true;
            json.layerType = this._layerTypes.RELATIONSHIPTABLE;

            if (page) {
                lang.mixin(page.params, json);
            } else {
                if (!this._resourceManager.getConfigInfoById(lInfo.id)) {
                    this._resourceManager.addConfigInfo(lInfo);
                }
                if (!this._resourceManager.getLayerInfoById(lInfo.id)) {
                    this._resourceManager.addLayerInfo(lInfo);
                }
                json.style = "height: 100%; width: 100%; overflow: visible";
                page = new ContentPane(json);
                this.layerTabPages.push(page);
                page.set("title", json.name);
                this.own(on(page, "close", lang.hitch(this, this.layerTabPageClose, json.paneId, true)));

                this.tabContainer.addChild(page);
            }
            this.tabContainer.selectChild(page);
        },

    });

    clazz.inPanel = false;
    clazz.hasUIFile = false;
    return clazz;
  });