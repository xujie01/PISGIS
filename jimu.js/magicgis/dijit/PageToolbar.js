define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'esri/layers/GraphicsLayer',
        'esri/graphic',
        'dojo/_base/array',
        'dojox/xml/parser',
        'esri/geometry/Point',
        'esri/geometry/Polygon',
        'esri/geometry/Polyline',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        'dijit/Menu','dijit/MenuItem','dijit/MenuSeparator',
        'esri/toolbars/draw','esri/Color',
        'esri/geometry/geodesicUtils','esri/units','esri/geometry/webMercatorUtils',
        'dojo/on','dojo/Deferred','jimu/SpatialReference/wkidUtils','esri/units','esri/symbols/Font',
        'jimu/utils','esri/symbols/TextSymbol','dojo/query',"esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol",
        "esri/config","esri/geometry/normalizeUtils","esri/tasks/GeometryService",
        "esri/tasks/BufferParameters",'jimu/PanelManager','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus",
        'jimu/dijit/LoadingIndicator',
        'dojo/text!./templates/PageToolbar.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               GraphicsLayer,Graphic,array,parser,Point,Polygon,Polyline,
               SimpleLineSymbol,SimpleFillSymbol,Menu,MenuItem,MenuSeparator,
               Draw,Color,GeodesicUtils,Units,WebMercatorUtils,on,Deferred,wkidUtils,esriUnits,
               Font,jimuUtils,TextSymbol,query,SimpleMarkerSymbol,PictureMarkerSymbol,esriConfig,normalizeUtils,
               GeometryService,BufferParameters,PanelManager,_WidgetBase,_TemplatedMixin,focusUtil,LoadingIndicator,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-pagetoolbar',
            name: 'PageToolbar',
            // 表示每页记录的条数,默认10条,可以由用户自行定义
            pageCount:null,
            // 当前的页码 ,页码从1开始
            curPage:null,
            // 一共的页数
            totalPage:null,
            // 一共的记录条数
            totalCount:null,
            start:null,

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
                this.pageCount = params.pageCount;
                this.curPage = params.curPage;
                this.totalPage = params.totalPage;
                this.totalCount = params.totalCount;
                this.start = params.start;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.pagetollbar;
            },

            setMap:function(map){
                if(map){
                    this.map = map;
                }
            },

            postCreate:function(){
                this.inherited(arguments);
                this.init();
                this.own(on(this.inputPage, 'change', lang.hitch(this, this._onPageChange)));
            },

            startup: function () {
                this.inherited(arguments);
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(window.jimuConfig.layoutId);

            },

            _onPageFirstClick: function () {
            },

            _onPageFirstClick: function () {
            },

            init: function () {
                // 记录条数大于0，则计算共有多少页
                if (this.totalCount > 0) {
                    this.totalPage = Math.ceil(this.totalCount / this.pageCount);
                    this.curPage = 1;
                    this.inputPage.constraints.min=1;
                    this.inputPage.constraints.max=this.totalPage;
                    this.inputPage.setValue(this.curPage);
                    this.next.src = "jimu.js/magicgis/images/keypoints/page-next.gif";
                    this.last.src = "jimu.js/magicgis/images/keypoints/page-last.gif";
                } else {
                    this.totalCount = 0;
                    this.totalPage = 0;
                    this.curPage = 1;
                    this.inputPage.constraints.min=0;
                    this.inputPage.constraints.max=0;
                    this.inputPage.setValue(0);
                    this.first.src = "jimu.js/magicgis/images/keypoints/page-first-disabled.gif";
                    this.prev.src = "jimu.js/magicgis/images/keypoints/page-prev-disabled.gif";
                    this.next.src = "jimu.js/magicgis/images/keypoints/page-next-disabled.gif";
                    this.last.src = "jimu.js/magicgis/images/keypoints/page-last-disabled.gif";
                }
                this.inputPage.innerHTML=this.curPage;
                this.lbTotalPage.innerHTML=this.totalPage;
                this.lbTotalCount.innerHTML=this.totalCount;
            },

            _onPageFirstClick: function () {
                if(this.first.src.indexOf("disabled")>0){
                    return;
                };
                this.setPager(1);
            },

            _onPagePrevClick: function () {
                if(this.prev.src.indexOf("disabled")>0){
                    return;
                };
                this.setPager(this.curPage-1);
            },

            _onPageNextClick: function () {
                if(this.next.src.indexOf("disabled")>0){
                    return;
                };
                this.setPager(this.curPage+1);
            },

            _onPageLastClick: function () {
                if(this.last.src.indexOf("disabled")>0){
                    return;
                };
                this.setPager(this.totalPage);
            },

            _onPageRefreshClick: function () {
                this.emit("page-refreshed","");
            },

            setPager: function (value) {
                if (value < 1 || value > this.totalPage) return;// value不能大于等于totalPage
                if (value == 1 && value != this.totalPage) {
                    this.first.src = "jimu.js/magicgis/images/keypoints/page-first-disabled.gif";
                    this.prev.src = "jimu.js/magicgis/images/keypoints/page-prev-disabled.gif";
                    this.next.src = "jimu.js/magicgis/images/keypoints/page-next.gif";
                    this.last.src = "jimu.js/magicgis/images/keypoints/page-last.gif";
                } else if (value > 1 && value == this.totalPage) {
                    this.first.src = "jimu.js/magicgis/images/keypoints/page-first.gif";
                    this.prev.src = "jimu.js/magicgis/images/keypoints/page-prev.gif";
                    this.next.src = "jimu.js/magicgis/images/keypoints/page-next-disabled.gif";
                    this.last.src = "jimu.js/magicgis/images/keypoints/page-last-disabled.gif";
                } else {
                    this.first.src = "jimu.js/magicgis/images/keypoints/page-first.gif";
                    this.prev.src = "jimu.js/magicgis/images/keypoints/page-prev.gif";
                    this.next.src = "jimu.js/magicgis/images/keypoints/page-next.gif";
                    this.last.src = "jimu.js/magicgis/images/keypoints/page-last.gif";
                }
                this.curPage = value;
                this.inputPage.setValue(this.curPage);
                this.start = (value - 1) * this.pageCount;   // 计算出要跳转到的页面种的第一条记录在所有的记录种是第几条记录
                var data={flag:"r"};
                this.emit("page-prevdata",data);
            },
            _onPageChange: function (event) {
                this.setPager(event);
            },

            onOpen: function () {
            },

            onClose:function(){
            },

            /*destroy:function(){
                this.inherited(arguments);
            },*/
        });
        return clazz;
    });