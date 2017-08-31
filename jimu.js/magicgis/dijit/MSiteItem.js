define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'esri/graphic',
        'esri/geometry/Point',"esri/symbols/PictureMarkerSymbol",'dijit/_WidgetBase',
        'dijit/_TemplatedMixin','jimu/magicgis/util/commonUtils',
        'jimu/dijit/LoadingIndicator',
        'dojo/text!./templates/MSiteItem.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               Graphic,Point,PictureMarkerSymbol,_WidgetBase,_TemplatedMixin,commonUtils,LoadingIndicator,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-msiteitem',
            name: 'MSiteItem',

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
                this.data=params.data;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.monitor;
            },

            setMap:function(map){
                if(map){
                    this.map = map;
                }
            },

            postCreate:function(){
                this.inherited(arguments);
                this.siteName.innerHTML=this.data.UNITNAME;
                this.getPerson.innerHTML=this.data.GETPERSON+"/"+this.data.ALLPERSON;
                this.getDevice.innerHTML=this.data.ZXDEV+"/"+this.data.SUMDEV;
                this.getPoint.innerHTML=this.data.GETPOINT+"/"+this.data.ALLPOINT;
                this.inspectionLen.innerHTML=this.data.INSPECTIONLEN+this.nls.kilometer;
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

            _onUnitClick:function(){
                topic.publish('UnitChange',this.data);
            },

            _onUnitKeyPointClick:function(){
                topic.publish('UnitKeyPointChange',this.data);
            },

            _onLocationClick:function(){
                var xc = commonUtils._lonToMercator(Number(this.data.X));
                var yc = commonUtils._latToMercator(Number(this.data.Y));
                if(this.data.X!="" && this.data.X!=0 && this.data.X!=null){
                    var mp = new Point(xc,yc,this.map.spatialReference);
                    var symbol = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/mapZoom.png", 32, 32);
                    var g = new Graphic(mp, symbol);
                    this.map.centerAt(mp);
                    commonUtils.flashGraphic(g,this.map.graphics);
                }else{
                    layer.msg(this.nls.positiontip);
                }
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