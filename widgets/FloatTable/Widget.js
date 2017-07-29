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
        "esri/geometry/Polygon",
        "jimu/magicgis/dijit/SpaceQueryTable",
        'jimu/magicgis/lib/echarts'
    ],
    function(
        declare,
        html,
        _WidgetsInTemplateMixin,
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
        LoadingIndicator,Polygon,SpaceQueryTable,echarts) {
        var clazz = declare([BaseWidget, _WidgetsInTemplateMixin], {
            /* global apiUrl */
            name: 'FloatTable',
            baseClass: 'jimu-widget-floatTable',
            normalHeight: 0,
            openHeight: 0,
            arrowDivHeight: null,

            postMixInProperties: function() {

            },

            postCreate: function() {
                this.inherited(arguments);
                utils.loadStyleLink("dgrid", apiUrl + "dgrid/css/dgrid.css");
                this.floatTableDiv = null;

                this.moveMode = false;
                this.moveY = 0;
                this.previousDomHeight = 0;
                this.noGridHeight = 0;
                this.bottomPosition = 0;

                this.showing = false;

                // set initial position
                this.openHeight = this.normalHeight = this._getNormalHeight();
                this.arrowDivHeight = 0;

                // event handlers on draging
                this._dragingHandlers = [];

                this._createUtilitiesUI();
                this.own(topic.subscribe('changeMapPosition', lang.hitch(this, this._onMapPositionChange)));
                topic.subscribe("FloatTable", lang.hitch(this, this._FloatTableHandler));//创建Tab面板
            },

            startup: function () {
                this.inherited(arguments);
            },

            _onMapPositionChange: function(pos) {
                if (isFinite(pos.left) && typeof pos.left === 'number') {
                    if (window.isRTL) {
                        html.setStyle(this.domNode, 'right', parseFloat(pos.left) + 'px');
                    } else {
                        html.setStyle(this.domNode, 'left', parseFloat(pos.left) + 'px');
                    }
                }
                if (isFinite(pos.right) && typeof pos.right === 'number') {
                    if (window.isRTL) {
                        html.setStyle(this.domNode, 'left', parseFloat(pos.right) + 'px');
                    } else {
                        html.setStyle(this.domNode, 'right', parseFloat(pos.right) + 'px');
                    }
                }

            },

            _createUtilitiesUI: function() {
                this._createArrowUI();
                this._createBarUI();
            },

            _createArrowUI: function() {
                this.arrowDiv = html.create("div");
                html.addClass(this.arrowDiv, "jimu-widget-floatTable-move");
                html.create('div', {
                    'class': "jimu-widget-floatTable-thumb"
                }, this.arrowDiv);
                html.place(this.arrowDiv, this.domNode);

                if (!this.arrowDivHeight) {
                    var arrowDivBox = html.getMarginBox(this.arrowDiv);
                    this.arrowDivHeight = arrowDivBox && arrowDivBox.h ? arrowDivBox.h : 7;
                }

                this.own(on(this.arrowDiv, 'mousedown', lang.hitch(this, this._onDragStart)));
                this.own(on(this.arrowDiv, touch.press, lang.hitch(this, this._onDragStart)));
            },

            _isOnlyTable: function() {
                return this.closeable || !this.isOnScreen;
            },

            _createBarUI: function() {
                if (!this._isOnlyTable()) {
                    this.switchBtn = html.create("div", {
                        className: "jimu-widget-floatTable-switch"
                    }, this.domNode);

                    this.own(on(this.switchBtn, 'click', lang.hitch(this, this._switchTable)));
                }
            },

            _processOpenBarUI: function() {
                if (!this._isOnlyTable()) {
                    html.removeClass(this.switchBtn, 'close');
                    html.addClass(this.switchBtn, 'open');
                    html.setAttr(this.switchBtn, 'title', this.nls.closeTableTip);
                }
            },

            _processCloseBarUI: function() {
                if (!this._isOnlyTable()) {
                    html.removeClass(this.switchBtn, 'open');
                    html.addClass(this.switchBtn, 'close');
                    html.setAttr(this.switchBtn, 'title', this.nls.openTableTip);
                }
            },

            _switchTable: function() {
                if (!this.showing) {
                    this._openTable();
                } else {
                    this._closeTable();
                }
            },

            _openTable: function() {
                if(!this.floatTableDiv){
                    /*if (!this.loading) {
                        this.loading = new LoadingIndicator();
                    }
                    this.loading.placeAt(this.domNode);
                    this.loading.show();*/

                    this._init();
                    this.showRefreshing(false);

                    this.showing = true;

                    this._changeHeight(this.openHeight);
                    this._processOpenBarUI();
                }else{
                    this.showing = true;
                    this._changeHeight(this.openHeight);
                    this._processOpenBarUI();
                }
            },

            _onCloseBtnClicked: function() {
                if (this.showing && this._isOnlyTable()) {
                    this.widgetManager.closeWidget(this);
                } else if (this.showing) {
                    this._closeTable();
                }
            },

            _closeTable: function() {
                this._changeHeight(0);
                this.showRefreshing(false);
                this._processCloseBarUI();

                this.showing = false;

                // if (this.highlightLine) {
                //   html.setStyle(this.highlightLine, 'display', '');
                // }
                // fix arrowDiv display bug on bottom when close table (only mobile)
                html.setStyle(this.arrowDiv, 'display', 'none');
                html.setStyle(this.domNode, 'overflow', 'hidden');
                setTimeout(lang.hitch(this, function() {
                    if (!this.domNode) {
                        return;
                    }
                    html.setStyle(this.domNode, 'overflow', 'visible');
                    html.setStyle(this.arrowDiv, 'display', 'block');
                }), 10);
            },

            _init: function() {
                this.initDiv();
                this._changeHeight(this.openHeight);
                this.resize();

                this.own(on(window.document, "mouseup", lang.hitch(this, this._onDragEnd)));
                this.own(on(window.document, "mousemove", lang.hitch(this, this._onDraging)));
                this.own(on(window.document, touch.move, lang.hitch(this, this._onDraging)));
                this.own(on(window.document, touch.release, lang.hitch(this, this._onDragEnd)));
            },

            destroy: function() {
                if (this._destroyed) {
                    return;
                }

                this.floatTableDiv = null;
                this._loadInfoDef = null;
                this.inherited(arguments);
            },

            onOpen: function() {
                if (!this.showing && this._isOnlyTable()) {
                    this._openTable();
                }
            },

            onClose: function() {
                if (this.showing) {
                    this._closeTable();
                }
            },

            _changeHeight: function(h) {
                if(this.myChart)this.myChart.resize('auto','auto');
                html.setStyle(this.domNode, "height", h + "px");

                topic.publish('changeMapPosition', {
                    bottom: h + this.bottomPosition
                });
            },

            setPosition: function(position) {
                this.position = position;
                if (this._isOnlyTable()) {
                    this.bottomPosition = 0;
                } else {
                    if ("bottom" in position) {
                        this.bottomPosition = parseInt(position.bottom, 10);
                    } else {
                        this.bottomPosition = 0;
                    }
                }
                if (!this.domNode.parentNode || this.domNode.parentNode.id !== window.jimuConfig.layoutId) {
                    html.place(this.domNode, window.jimuConfig.layoutId);
                    this.setInitialPosition(position);

                    this.showRefreshing(false);
                }
                html.setStyle(this.domNode, "bottom", this.bottomPosition + "px");
                setTimeout(lang.hitch(this, function() {
                    var ngHeight = this._getGridTopSectionHeight();
                    var domHeight = html.getStyle(this.domNode, 'height');
                    if (ngHeight > 0) {
                        this.noGridHeight = ngHeight;
                    }
                    if (domHeight > 0) {
                        this._changeHeight(domHeight);
                    }
                }), 20);
            },

            _getGridTopSectionHeight: function() {
                var tabPageWrapper = domQuery('.dijitTabPaneWrapper', this.domNode)[0];
                if (tabPageWrapper) {
                    var widgetTop = html.position(this.domNode).y;
                    var tabPaneTop = html.position(tabPageWrapper).y;
                    return tabPaneTop - widgetTop;
                } else {
                    return 0;
                }
            },

            showRefreshing: function(refresh) {
                /*if (!this.loading) {
                    return;
                }

                if (refresh) {
                    this.loading.show();
                } else {
                    this.loading.hide();
                }*/
            },

            _onDragStart: function(evt) {
                this.moveMode = true;
                this.moveY = evt.clientY;
                this.previousDomHeight = html.getStyle(this.domNode, "height");
                html.addClass(this.arrowDiv, "draging");

                this._dragingHandlers = this._dragingHandlers.concat([
                    on(this.ownerDocument, 'dragstart', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }),
                    on(this.ownerDocumentBody, 'selectstart', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    })
                ]);
            },

            _onDraging: function(evt) {
                if (this.moveMode && (evt.clientY >= 125)) {
                    var y = this.moveY - evt.clientY;
                    this._changeHeight(y + this.previousDomHeight);
                }
            },

            _onDragEnd: function() {
                this.moveMode = false;
                html.removeClass(this.arrowDiv, "draging");

                var h = this._dragingHandlers.pop();
                while (h) {
                    h.remove();
                    h = this._dragingHandlers.pop();
                }
            },

            _getNormalHeight: function() {
                var h = document.body.clientHeight;
                return window.appInfo.isRunInMobile ? h / 2 : h / 3;
            },

            setInitialPosition: function() {
                // Attribute Table decide position by itself.
                html.setStyle(this.domNode, "top", "auto");
                html.setStyle(this.domNode, "left", "0px");
                html.setStyle(this.domNode, "right", "0px");
                html.setStyle(this.domNode, "position", "absolute");

                if (!this._isOnlyTable()) {
                    if (this.config && this.config.initiallyExpand) {
                        this._openTable();
                    } else {
                        this._closeTable();
                    }
                } // else use openAtStart by widgetManager or controller
            },

            initDiv: function() {
                this.floatTableDiv = html.create("div", {}, this.domNode);
                html.addClass(this.floatTableDiv, "jimu-widget-floatTable-main");
                this.floatTableDiv.innerHTML =
                    '<ul class="nav nav-tabs" role="tablist">'+
                        '<li role="presentation" class="active"><a href="#tabHome" aria-controls="tabHome" role="tab" data-toggle="tab">里程图</a></li>'+
                        '<li role="presentation"><a href="#tabQuery" aria-controls="profile" role="tabQuery" data-toggle="tab">空间查询</a></li>'+
                    '</ul>';

                this.contentDiv = document.createElement("div");
                this.contentDiv.innerHTML =
                    '<div role="tabpanel" style="height:100%;width:100%;" class="tab-pane active" id="tabHome">1</div>'+
                    '<div role="tabpanel" style="height:100%;width:100%;" class="tab-pane" id="tabQuery"></div>';
                this.floatTableDiv.appendChild(this.contentDiv);
                this.floatTableDiv.setAttribute("id", "myTabs");
                this.contentDiv.setAttribute("class", "tab-content");
                html.setStyle(this.contentDiv, "height", "calc(100% - 39px)");

                $('#myTabs a[href="#tabHome"]').on('shown.bs.tab', lang.hitch(this,function (e) {
                    this.myChart.resize('auto','auto');
                }));
                // 基于准备好的dom，初始化echarts实例
                this.myChart = echarts.init(document.getElementById('tabHome'));
                // 指定图表的配置项和数据
                option = {
                    title: {
                        text: '堆叠区域图'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                this.myChart.setOption(option);

                $('#myTabs a[href="#tabQuery"]').on('shown.bs.tab', lang.hitch(this,function (e) {
                    $("#tabQuery").empty();
                    this.spaceQueryTable =new SpaceQueryTable({
                        map:this.map,
                        data:this.map.extent
                    });
                    $("#tabQuery").append(this.spaceQueryTable.domNode);
                }));
            },

            _FloatTableHandler:function(tableId,dataObj)
            {
                if (!this.showing) {
                    this._openTable();
                }
                $('#myTabs a[href="#tabQuery"]').tab('show');
                $("#tabQuery").empty();
                this.spaceQueryTable =new SpaceQueryTable({
                    map:this.map,
                    data:dataObj
                });
                $("#tabQuery").append(this.spaceQueryTable.domNode);
            }
        });

        clazz.inPanel = false;
        clazz.hasUIFile = false;
        return clazz;
    });