define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'jimu/BaseWidget',
        'dojo/_base/html',
        "dojo/topic",
        'esri/layers/GraphicsLayer',
        'esri/graphic',
        'dojo/_base/array',
        'dojox/xml/parser',
        'esri/geometry/Polygon',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        'esri/toolbars/draw','esri/Color',
        'dojo/on','esri/units',"esri/symbols/SimpleMarkerSymbol",
        "esri/config","esri/geometry/normalizeUtils","esri/tasks/GeometryService",
        "esri/tasks/BufferParameters",'jimu/PanelManager',
        'jimu/dijit/LoadingIndicator',
        'jimu/dijit/DrawBox',
        "jimu/dijit/CheckBox",
        'dijit/form/Select'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,BaseWidget,html,topic,
               GraphicsLayer,Graphic,array,parser,Polygon,
               SimpleLineSymbol,SimpleFillSymbol,
               Draw,Color,on,esriUnits,
               SimpleMarkerSymbol,esriConfig,normalizeUtils,
               GeometryService,BufferParameters,PanelManager,LoadingIndicator) {
        var clazz=declare([BaseWidget, _WidgetsInTemplateMixin],{
            baseClass: 'jimu-widget-spacequery',
            name: 'SpaceQuery',
            pointSymbol:new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10,
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([79, 129, 189]), 2),new Color([255,255,0,0.25])),
            lineSymbol:new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([79, 129, 189]),3),
            fillSymbol:new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                new Color([54, 93, 141]),2),new Color([79, 129, 189,0.5])),

            _graphicsLayer: null,
            isBuffered:false,

            postMixInProperties: function(){
                this.inherited(arguments);
                this._resetUnitsArrays();
            },

            _resetUnitsArrays: function(){
                this.defaultDistanceUnits = [];
                this.configDistanceUnits = [];
                this.distanceUnits = [];
            },

            postCreate:function(){
                this.inherited(arguments);
                this.drawBox.setMap(this.map);
                this._initUnitSelect();
                this._bindEvents();

                esriConfig.defaults.geometryService = new GeometryService(this.appConfig.geometryService);
                esriConfig.defaults.io.proxyUrl = "/proxy/";
                esriConfig.defaults.io.alwaysUseProxy = false;

                this._graphicsLayer = new GraphicsLayer();
                this.map.addLayer(this._graphicsLayer);
            },

            startup: function () {
                this.inherited(arguments);
                this.own(on(this.divCheck,"Change",lang.hitch(this,this.chkClick)));
            },

            onOpen: function () {
                /*this.drawTool=new Draw(this.map,{
                    tooltipOffset:20,
                    drawTime:90
                });
                this.drawTool.on("draw-end",lang.hitch(this,this._drawEnd));*/

            },

            _bindEvents: function() {
                this.own(on(this.drawBox, 'icon-selected', lang.hitch(this, this._onIconSelected)));
                this.own(on(this.drawBox, 'DrawEnd', lang.hitch(this, this._onDrawEnd)));
                this.own(on(this.drawBox, 'draw-deactivate', lang.hitch(this, function(){
                    topic.publish('changeMapCurson',false);
                })));
            },

            _onIconSelected:function(target, geotype, commontype) {
                topic.publish('changeMapCurson',true);
                this.drawBox.setPointSymbol(this.pointSymbol);
                this.drawBox.setLineSymbol(this.lineSymbol);
                this.drawBox.setPolygonSymbol(this.fillSymbol);
            },

            _onDrawEnd:function(graphic, geotype, commontype){
                topic.publish('changeMapCurson',false);
                /*jshint unused: false*/
                this.drawBox.clear();

                var geometry = graphic.geometry;
                if(geometry.type === 'extent'){
                    var a = geometry;
                    var polygon = new Polygon(a.spatialReference);
                    var r = [
                        [a.xmin, a.ymin],
                        [a.xmin, a.ymax],
                        [a.xmax, a.ymax],
                        [a.xmax, a.ymin],
                        [a.xmin, a.ymin]
                    ];
                    polygon.addRing(r);
                    geometry = polygon;
                    commontype = 'polygon';
                }
                if(commontype === 'polyline'){
                    this._bufferOperation(geometry, graphic);
                }
                else if(commontype === 'polygon'){
                    this._bufferOperation(geometry, graphic);
                }else{
                    this._bufferOperation(geometry, graphic);
                }
            },

            _bufferOperation:function(geometry, graphic){
                this._graphicsLayer.clear();
                this._graphicsLayer.add(graphic);

                //setup the buffer parameters
                var params = new BufferParameters();
                params.distances = [ this.distanceText.value ];
                params.outSpatialReference = this.map.spatialReference;
                params.unit = GeometryService[this.distanceUnitSelect.value];
                //normalize the geometry

                this.loading = new LoadingIndicator();
                this.loading.placeAt(window.jimuConfig.layoutId);
                if(this.isBuffered){
                    normalizeUtils.normalizeCentralMeridian([geometry]).then(lang.hitch(this,function(normalizedGeometries){
                        var normalizedGeometry = normalizedGeometries[0];
                        if (normalizedGeometry.type === "polygon") {
                            //if geometry is a polygon then simplify polygon.  This will make the user drawn polygon topologically correct.
                            esriConfig.defaults.geometryService.simplify([normalizedGeometry], lang.hitch(this,function(geometries) {
                                params.geometries = geometries;
                                esriConfig.defaults.geometryService.buffer(params, lang.hitch(this,this.showBufferOperation),lang.hitch(this,this.errback));
                            }));
                        } else {
                            params.geometries = [normalizedGeometry];
                            esriConfig.defaults.geometryService.buffer(params, lang.hitch(this,this.showBufferOperation),lang.hitch(this,this.errback));
                        }
                    }));
                }else{
                    this.showBufferOperation([geometry]);
                }

            },

            showBufferOperation:function(bufferedGeometries) {
                this.loading.destroy();
                if(this.isBuffered){
                    var symbol = new SimpleFillSymbol(
                        SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(
                            SimpleLineSymbol.STYLE_SOLID,
                            new Color([255,0,0,0.65]), 2
                        ),
                        new Color([255,0,0,0.35])
                    );

                    array.forEach(bufferedGeometries, lang.hitch(this,function(geometry) {
                        var graphic = new Graphic(geometry, symbol);
                        this._graphicsLayer.add(graphic);
                    }));
                }

                /*for(var i=0;i<this.appConfig.widgetPool.widgets.length;i++){
                    var widget=this.appConfig.widgetPool.widgets[i];
                    if(widget.id=="PopupAttributeTable"){
                        PanelManager.getInstance().showPanel(widget);
                        this.publishData({
                            geometryExtent: bufferedGeometries[0]
                        });
                    }
                }*/
                topic.publish('FloatTable',"SpaceQueryTable",bufferedGeometries[0]);

            },

            errback:function(evt) {
                layer.msg(evt);
            },

            _initUnitSelect:function(){
                this._initDefaultUnits();
                this._initConfigUnits();
                var a = this.configDistanceUnits;
                var b = this.defaultDistanceUnits;
                this.distanceUnits = a.length > 0 ? a : b;
                array.forEach(this.distanceUnits, lang.hitch(this, function(unitInfo){
                    var option = {
                        value:unitInfo.unit,
                        label:unitInfo.label
                    };
                    this.distanceUnitSelect.addOption(option);
                }));
            },

            chkClick:function(state){
                this.isBuffered=state;
            },

            _initDefaultUnits:function(){
                this.defaultDistanceUnits = [{
                    unit: 'UNIT_KILOMETER',
                    label: this.nls.kilometers
                }, {
                    unit: 'UNIT_STATUTE_MILE',
                    label: this.nls.miles
                }, {
                    unit: 'UNIT_METER',
                    label: this.nls.meters
                }, {
                    unit: 'UNIT_FOOT',
                    label: this.nls.feet
                }];
            },

            _initConfigUnits:function(){
                array.forEach(this.config.distanceUnits, lang.hitch(this, function(unitInfo){
                    var unit = unitInfo.unit;
                    if(esriUnits[unit]){
                        var defaultUnitInfo = this._getDefaultDistanceUnitInfo(unit);
                        unitInfo.label = defaultUnitInfo.label;
                        this.configDistanceUnits.push(unitInfo);
                    }
                }));
            },

            _getDefaultDistanceUnitInfo:function(unit){
                for(var i = 0; i < this.defaultDistanceUnits.length; i++){
                    var unitInfo = this.defaultDistanceUnits[i];
                    if(unitInfo.unit === unit){
                        return unitInfo;
                    }
                }
                return null;
            },

            _getDistanceUnitInfo:function(unit){
                for(var i = 0; i < this.distanceUnits.length; i++){
                    var unitInfo = this.distanceUnits[i];
                    if(unitInfo.unit === unit){
                        return unitInfo;
                    }
                }
                return null;
            },

            onClose:function(){
                topic.publish('changeMapCurson',false);
                this.drawBox.deactivate();
                this.drawBox.clear();
                if(this._graphicsLayer){
                    this._graphicsLayer.clear();
                    //this.map.removeLayer(this._graphicsLayer);
                }
            },

            destroy:function(){
                this.drawBox.deactivate();
                this.drawBox.clear();
                if(this.drawBox){
                    this.drawBox.destroy();
                    this.drawBox = null;
                }
                if(this._graphicsLayer){
                    this._graphicsLayer.clear();
                    //this.map.removeLayer(this._graphicsLayer);
                }
                this.inherited(arguments);
            }
        });
        return clazz;
    });