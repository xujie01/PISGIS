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
        './MeasureGraphicsLayer','esri/toolbars/draw','dojo/_base/Color',
        'esri/geometry/geodesicUtils','esri/units','esri/geometry/webMercatorUtils',
        'dojo/on','dojo/Deferred','jimu/SpatialReference/wkidUtils','esri/units','esri/symbols/Font',
        'jimu/utils','esri/symbols/TextSymbol','dojo/query','jimu/dijit/DrawBox',
        'dijit/form/Select'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               GraphicsLayer,Graphic,array,parser,Point,Polygon,Polyline,
               SimpleLineSymbol,SimpleFillSymbol,Menu,MenuItem,MenuSeparator,
               MeasureGraphicsLayer,Draw,Color,GeodesicUtils,Units,WebMercatorUtils,on,Deferred,wkidUtils,esriUnits,
               Font,jimuUtils,TextSymbol,query) {
        var clazz=declare([BaseWidget, _WidgetsInTemplateMixin],{
            baseClass: 'jimu-widget-measurement',
            name: 'Measurement',
            currentType:"xian",//默认是线测量
            measureGraphicLayer:null,//自定义测量图层类
            drawGraphicLayer:null,//自定义测量GraphicLayer,测量图层类中graphicsLayer
            sierialId:0,//测距标识码
            drawTool:null,
            selectedAreaUnits:{data:Units.SQUARE_METERS,label:"平方米"},
            selectdLinearUnits:{data:Units.METERS,label:"米"},
            start:true,//计数器 用于记录用户点了多少次鼠标
            lineSymbol:new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new dojo.Color([79, 129, 189]),3),
            fillSymbol:new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                new dojo.Color([54, 93, 141]),2),new Color([79, 129, 189,0.5])),

            drawLine:null,
            handle:null,
            drawMeasure:null,
            _graphicsLayer: null,//公共测量GraphicLayer

            postMixInProperties: function(){
                this.inherited(arguments);
                this._resetUnitsArrays();
            },

            _resetUnitsArrays: function(){
                this.defaultDistanceUnits = [];
                this.defaultAreaUnits = [];
                this.configDistanceUnits = [];
                this.configAreaUnits = [];
                this.distanceUnits = [];
                this.areaUnits = [];
            },

            postCreate:function(){
                this.inherited(arguments);
                this.drawBox.setMap(this.map);
                this._initUnitSelect();
                this._bindEvents();
            },

            startup: function () {
                this.inherited(arguments);
                this.initMeasure();
                this._graphicsLayer = new GraphicsLayer();
            },

            onOpen: function () {
                this.sierialId=0;
                this.map.addLayer(this._graphicsLayer);
                this.map.addLayer(this.drawGraphicLayer);
                this.map.addLayer(this.measureGraphicLayer);
            },

            _bindEvents: function() {
                this.own(on(this.drawBox, 'icon-selected', lang.hitch(this, this._onIconSelected)));
                this.own(on(this.drawBox, 'DrawEnd', lang.hitch(this, this._onDrawEnd)));
                this.own(on(this.drawBox, 'draw-deactivate', lang.hitch(this, this._onDrawDeactive)));
            },

            _onDrawDeactive:function(){
                topic.publish('changeMapCurson',false);
                this.drawTool.deactivate();
            },

            _onIconSelected:function(target, geotype, commontype){
                topic.publish('changeMapCurson',true);
                /*jshint unused: false*/
                html.setStyle(this.measureSection, 'display', 'none');
                html.setStyle(this.areaMeasure, 'display', 'none');
                html.setStyle(this.distanceMeasure, 'display', 'none');
                if(commontype === 'polyline'){
                    html.setStyle(this.measureSection, 'display', 'block');
                    html.setStyle(this.distanceMeasure, 'display', 'block');
                }
                else if(commontype === 'polygon'){
                    html.setStyle(this.measureSection, 'display', 'block');
                    html.setStyle(this.areaMeasure, 'display', 'block');
                    html.setStyle(this.distanceMeasure, 'display', 'block');
                }
                this.drawTool.deactivate();
                //自定义测量工具
                if(geotype=="POLYLINE"){
                    this.drawBox.deactivateDrawToolBar();
                    this.startDrawLine();//线测量
                }else if(geotype=="POLYGON"){
                    this.drawBox.deactivateDrawToolBar();
                    this.startDrawPolygon();//面测量
                }
            },

            _onDrawEnd:function(graphic, geotype, commontype){
                topic.publish('changeMapCurson',false);
                /*jshint unused: false*/
                //this.drawBox.clear();

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
                    //this._addLineMeasure(geometry, graphic);
                    if(geotype=="POLYLINE"){

                    }else{
                        this._addLineMeasure(geometry, graphic);
                    }
                }
                else if(commontype === 'polygon'){
                    //this._addPolygonMeasure(geometry, graphic);
                    if(geotype=="POLYGON"){

                    }else{
                        this._addPolygonMeasure(geometry, graphic);
                    }
                }
            },

            _addLineMeasure:function(geometry, graphic){
                this._getLengthAndArea(geometry, false).then(lang.hitch(this, function(result){
                    if(!this.domNode){
                        return;
                    }
                    var length = result.length;
                    var a = Font.STYLE_ITALIC;
                    var b = Font.VARIANT_NORMAL;
                    var c = Font.WEIGHT_BOLD;
                    var symbolFont = new Font("16px", a, b, c, "Courier");
                    var fontColor = new Color([0, 0, 0, 1]);
                    var ext = geometry.getExtent();
                    var center = ext.getCenter();

                    var unit = this.distanceUnitSelect.value;
                    var abbr = this._getDistanceUnitInfo(unit).label;
                    var localeLength = jimuUtils.localizeNumber(length.toFixed(3));
                    var lengthText = localeLength + " " + abbr;

                    var textSymbol = new TextSymbol(lengthText, symbolFont, fontColor);
                    var labelGraphic = new Graphic(center, textSymbol, null, null);
                    this._pushAddOperation([graphic, labelGraphic]);
                }), lang.hitch(this, function(err){
                    console.log(err);
                    if(!this.domNode){
                        return;
                    }
                    this._pushAddOperation([graphic]);
                }));
            },

            _getLengthAndArea: function(geometry, isPolygon){
                var def = new Deferred();
                var defResult = {
                    length: null,
                    area: null
                };
                var wkid = geometry.spatialReference.wkid;
                var areaUnit = this.areaUnitSelect.value;
                var esriAreaUnit = esriUnits[areaUnit];
                var lengthUnit = this.distanceUnitSelect.value;
                var esriLengthUnit = esriUnits[lengthUnit];
                if(wkidUtils.isWebMercator(wkid)){
                    defResult = this._getLengthAndArea3857(geometry, isPolygon, esriAreaUnit, esriLengthUnit);
                    def.resolve(defResult);
                }else if(wkid === 4326){
                    defResult = this._getLengthAndArea4326(geometry, isPolygon, esriAreaUnit, esriLengthUnit);
                    def.resolve(defResult);
                }else{
                    def = this._getLengthAndAreaByGS(geometry, isPolygon, esriAreaUnit, esriLengthUnit);
                }
                return def;
            },

            _getLengthAndArea4326: function(geometry, isPolygon, esriAreaUnit, esriLengthUnit){
                var result = {
                    area: null,
                    length: null
                };

                var lengths = null;

                if(isPolygon){
                    var areas = GeodesicUtils.geodesicAreas([geometry], esriAreaUnit);
                    var polyline = this._getPolylineOfPolygon(geometry);
                    lengths = GeodesicUtils.geodesicLengths([polyline], esriLengthUnit);
                    result.area = areas[0];
                    result.length = lengths[0];
                }else{
                    lengths = GeodesicUtils.geodesicLengths([geometry], esriLengthUnit);
                    result.length = lengths[0];
                }

                return result;
            },

            _getLengthAndArea3857: function(geometry3857, isPolygon, esriAreaUnit, esriLengthUnit){
                var geometry4326 = WebMercatorUtils.webMercatorToGeographic(geometry3857);
                var result = this._getLengthAndArea4326(geometry4326,
                    isPolygon,
                    esriAreaUnit,
                    esriLengthUnit);
                return result;
            },

            _getLengthAndAreaByGS: function(geometry, isPolygon, esriAreaUnit, esriLengthUnit){
                var def = new Deferred();
                var defResult = {
                    area: null,
                    length: null
                };
                var gsAreaUnit = this._getGeometryServiceUnitByEsriUnit(esriAreaUnit);
                var gsLengthUnit = this._getGeometryServiceUnitByEsriUnit(esriLengthUnit);
                if(isPolygon){
                    var areasAndLengthParams = new AreasAndLengthsParameters();
                    areasAndLengthParams.lengthUnit = gsLengthUnit;
                    areasAndLengthParams.areaUnit = gsAreaUnit;
                    this._gs.simplify([geometry]).then(lang.hitch(this, function(simplifiedGeometries){
                        if(!this.domNode){
                            return;
                        }
                        areasAndLengthParams.polygons = simplifiedGeometries;
                        this._gs.areasAndLengths(areasAndLengthParams).then(lang.hitch(this, function(result){
                            if(!this.domNode){
                                return;
                            }
                            defResult.area = result.areas[0];
                            defResult.length = result.lengths[0];
                            def.resolve(defResult);
                        }), lang.hitch(this, function(err){
                            def.reject(err);
                        }));
                    }), lang.hitch(this, function(err){
                        def.reject(err);
                    }));
                }else{
                    var lengthParams = new LengthsParameters();
                    lengthParams.polylines = [geometry];
                    lengthParams.lengthUnit = gsLengthUnit;
                    lengthParams.geodesic = true;
                    this._gs.lengths(lengthParams).then(lang.hitch(this, function(result){
                        if(!this.domNode){
                            return;
                        }
                        defResult.length = result.lengths[0];
                        def.resolve(defResult);
                    }), lang.hitch(this, function(err){
                        console.error(err);
                        def.reject(err);
                    }));
                }

                return def;
            },

            _getGeometryServiceUnitByEsriUnit: function(unit){
                var gsUnit = -1;
                switch(unit){
                    case esriUnits.KILOMETERS:
                        gsUnit = GeometryService.UNIT_KILOMETER;
                        break;
                    case esriUnits.MILES:
                        gsUnit = GeometryService.UNIT_STATUTE_MILE;
                        break;
                    case esriUnits.METERS:
                        gsUnit = GeometryService.UNIT_METER;
                        break;
                    case esriUnits.FEET:
                        gsUnit = GeometryService.UNIT_FOOT;
                        break;
                    case esriUnits.YARDS:
                        gsUnit = GeometryService.UNIT_INTERNATIONAL_YARD;
                        break;
                    case esriUnits.SQUARE_KILOMETERS:
                        gsUnit = GeometryService.UNIT_SQUARE_KILOMETERS;
                        break;
                    case esriUnits.SQUARE_MILES:
                        gsUnit = GeometryService.UNIT_SQUARE_MILES;
                        break;
                    case esriUnits.ACRES:
                        gsUnit = GeometryService.UNIT_ACRES;
                        break;
                    case esriUnits.HECTARES:
                        gsUnit = GeometryService.UNIT_HECTARES;
                        break;
                    case esriUnits.SQUARE_METERS:
                        gsUnit = GeometryService.UNIT_SQUARE_METERS;
                        break;
                    case esriUnits.SQUARE_FEET:
                        gsUnit = GeometryService.UNIT_SQUARE_FEET;
                        break;
                    case esriUnits.SQUARE_YARDS:
                        gsUnit = GeometryService.UNIT_SQUARE_YARDS;
                        break;
                }
                return gsUnit;
            },

            _getPolylineOfPolygon: function(polygon){
                var polyline = new Polyline(polygon.spatialReference);
                var points = polygon.rings[0];
                polyline.addPath(points);
                return polyline;
            },

            _addPolygonMeasure:function(geometry, graphic){
                this._getLengthAndArea(geometry, true).then(lang.hitch(this, function(result){
                    if(!this.domNode){
                        return;
                    }
                    var length = result.length;
                    var area = result.area;

                    var a = Font.STYLE_ITALIC;
                    var b = Font.VARIANT_NORMAL;
                    var c = Font.WEIGHT_BOLD;
                    var symbolFont = new Font("16px", a, b, c, "Courier");
                    var fontColor = new Color([0, 0, 0, 1]);
                    var ext = geometry.getExtent();
                    var center = ext.getCenter();

                    var areaUnit = this.areaUnitSelect.value;
                    var areaAbbr = this._getAreaUnitInfo(areaUnit).label;
                    var localeArea = jimuUtils.localizeNumber(area.toFixed(3));
                    var areaText = localeArea + " " + areaAbbr;

                    var lengthUnit = this.distanceUnitSelect.value;
                    var lengthAbbr = this._getDistanceUnitInfo(lengthUnit).label;
                    var localeLength = jimuUtils.localizeNumber(length.toFixed(3));
                    var lengthText = localeLength + " " + lengthAbbr;

                    var text = areaText + "    " + lengthText;
                    var textSymbol = new TextSymbol(text, symbolFont, fontColor);
                    var labelGraphic = new Graphic(center, textSymbol, null, null);
                    this._pushAddOperation([graphic, labelGraphic]);
                }), lang.hitch(this, function(err){
                    if(!this.domNode){
                        return;
                    }
                    console.log(err);
                    this._pushAddOperation([graphic]);
                }));
            },

            _pushAddOperation: function(graphics){
                array.forEach(graphics, lang.hitch(this, function(g){
                    var attrs = g.attributes || {};
                    attrs[this._objectIdName] = this._objectIdCounter++;
                    g.setAttributes(attrs);
                    this._graphicsLayer.add(g);
                }));
            },

            _initUnitSelect:function(){
                this._initDefaultUnits();
                this._initConfigUnits();
                var a = this.configDistanceUnits;
                var b = this.defaultDistanceUnits;
                this.distanceUnits = a.length > 0 ? a : b;
                var c = this.configAreaUnits;
                var d = this.defaultAreaUnits;
                this.areaUnits = c.length > 0 ? c : d;
                array.forEach(this.distanceUnits, lang.hitch(this, function(unitInfo){
                    var option = {
                        value:unitInfo.unit,
                        label:unitInfo.label
                    };
                    this.distanceUnitSelect.addOption(option);
                }));

                array.forEach(this.areaUnits, lang.hitch(this, function(unitInfo){
                    var option = {
                        value:unitInfo.unit,
                        label:unitInfo.label
                    };
                    this.areaUnitSelect.addOption(option);
                }));
            },

            _initDefaultUnits:function(){
                this.defaultDistanceUnits = [{
                    unit: 'KILOMETERS',
                    label: this.nls.kilometers
                }, {
                    unit: 'MILES',
                    label: this.nls.miles
                }, {
                    unit: 'METERS',
                    label: this.nls.meters
                }, {
                    unit: 'FEET',
                    label: this.nls.feet
                }, {
                    unit: 'YARDS',
                    label: this.nls.yards
                }];

                this.defaultAreaUnits = [{
                    unit: 'SQUARE_KILOMETERS',
                    label: this.nls.squareKilometers
                }, {
                    unit: 'SQUARE_MILES',
                    label: this.nls.squareMiles
                }, {
                    unit: 'ACRES',
                    label: this.nls.acres
                }, {
                    unit: 'HECTARES',
                    label: this.nls.hectares
                }, {
                    unit: 'SQUARE_METERS',
                    label: this.nls.squareMeters
                }, {
                    unit: 'SQUARE_FEET',
                    label: this.nls.squareFeet
                }, {
                    unit: 'SQUARE_YARDS',
                    label: this.nls.squareYards
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

                array.forEach(this.config.areaUnits, lang.hitch(this, function(unitInfo){
                    var unit = unitInfo.unit;
                    if(esriUnits[unit]){
                        var defaultUnitInfo = this._getDefaultAreaUnitInfo(unit);
                        unitInfo.label = defaultUnitInfo.label;
                        this.configAreaUnits.push(unitInfo);
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

            _getDefaultAreaUnitInfo:function(unit){
                for(var i = 0; i < this.defaultAreaUnits.length; i++){
                    var unitInfo = this.defaultAreaUnits[i];
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

            _getAreaUnitInfo:function(unit){
                for(var i = 0; i < this.areaUnits.length; i++){
                    var unitInfo = this.areaUnits[i];
                    if(unitInfo.unit === unit){
                        return unitInfo;
                    }
                }
                return null;
            },

            onClose:function(){
                topic.publish('changeMapCurson',false);
                if(this.drawBox){
                    this.drawBox.deactivate();
                    this.drawBox.clear();
                }
                if(this._graphicsLayer){
                    this._graphicsLayer.clear();
                    this.map.removeLayer(this._graphicsLayer);
                }
                if(this.drawTool){
                    this.drawTool.deactivate();
                }
                if(this.drawGraphicLayer){
                    this.drawGraphicLayer.clear();
                    this.map.removeLayer(this.drawGraphicLayer);
                }
                if(this.measureGraphicLayer){
                    this.measureGraphicLayer.clear();
                    this.measureGraphicLayer.graphicsArray.splice(0,this.measureGraphicLayer.graphicsArray.length);
                    this.map.removeLayer(this.measureGraphicLayer);
                }
            },

            destroy:function(){
                this.onClose();
                this.inherited(arguments);
            },

            _onClearClick:function(){
                this.drawBox.clear();
                this._graphicsLayer.clear();
                this.drawGraphicLayer.clear();
                this.measureGraphicLayer.clear();
            },

            //自定义测量长度面积----------------------------------------------------------------------------------------
            initMeasure:function(){//初始化测量的东西，如果需要调用，注销事件
                //初始化测量图层
                this.measureGraphicLayer=new MeasureGraphicsLayer(this.folderUrl);
                this.drawGraphicLayer=new GraphicsLayer();
                this.measureGraphicLayer.graphicsLayer=this.drawGraphicLayer;

                this.drawTool=new Draw(this.map,{
                    tooltipOffset:20,
                    drawTime:90
                });
                this.drawTool.on("draw-end",lang.hitch(this,this._drawEnd));
            },

            startDrawPolygon:function(){
                topic.publish('changeMapCurson',true);
                //监听住click事件
                this.handle=connect.connect(this.map,"onClick",lang.hitch(this,this.mapClick));
                this.drawTool.activate(Draw.POLYGON);
                this.drawTool.fillSymbol=this.fillSymbol;
                this.currentType="mian";
            },

            startDrawLine:function(){
                topic.publish('changeMapCurson',true);
                //监听住click事件
                this.handle=connect.connect(this.map,"onClick",lang.hitch(this,this.mapClick));
                this.drawTool.activate(Draw.POLYLINE);
                this.drawTool.lineSymbol=this.lineSymbol;
                this.currentType="xian";
            },

            mapClick:function(evt){
                this.measureGraphicLayer.showPoint(evt.mapPoint,this.sierialId);

                if(this.start){
                    this.measureGraphicLayer.showText(evt.mapPoint,this.nls.startPoint,false,this.sierialId);

                    this.line=new Polyline();
                    this.line.setSpatialReference(this.map.spatialReference)
                    this.line.addPath([evt.mapPoint,evt.mapPoint]);
                    this.drawLine=new Graphic(this.line,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new dojo.Color([255,0,0]),3));
                }
                else{
                    this.drawLine.geometry.insertPoint(0,this.drawLine.geometry.paths[0].length,evt.mapPoint);
                    var gra=this.drawLine;

                    if(this.currentType=="xian"){
                        this.showTextSymbol(evt.mapPoint,gra,false);
                    }else{
                        this.showTextSymbol3(evt.mapPoint,gra,false);
                    }
                }
                this.start=false;
            },

            _drawEnd:function(evt){
                topic.publish('changeMapCurson',false);
                query('.draw-item', this.domNode).removeClass('jimu-state-active');//清除自定义测量按钮的样式
                console.log("drawend");
                //draw完成之后就消失了，需要自己再叠加到地图上
                var gra;
                if(this.currentType=="mian"){
                    gra=new Graphic(evt.geometry,this.fillSymbol);
                    gra.id=this.sierialId;
                    this.drawGraphicLayer.add(gra);
                }else{
                    gra=new Graphic(evt.geometry,this.lineSymbol);
                    gra.id=this.sierialId;
                    this.drawGraphicLayer.add(gra);
                }

                this.start=true;
                this.drawTool.deactivate();
                this.handle.remove();//移除监听
                if(this.currentType=="xian"){
                    var pointArray=gra.geometry.paths[0];
                    var mp=pointArray[pointArray.length-1];
                    var mpNew=new Point(mp[0],mp[1],this.map.spatialReference);
                    this.showTextSymbol(mpNew,gra,true);
                }else{
                    var pointArray=gra.geometry.rings[0];
                    var mp=pointArray[1];
                    var mpNew=new Point(mp[0],mp[1],this.map.spatialReference);
                    this.showTextSymbol2(mpNew,gra,true);
                }
                this.sierialId+=1;
            },

            showTextSymbol:function(mp,gra,end){
                if(gra==undefined)return;
                /*var len=this.MeasureLength(gra.geometry);
                 var str="";
                 if(len/1000>1){
                 if(end){
                 str=Math.round(len/10)/100+"公里";
                 }else{
                 str=Math.round(len/10)/100+"公里";
                 }
                 }
                 else{
                 if(end){
                 str=Number(len).toFixed(2)+"米";
                 }else{
                 str=Number(len).toFixed(2)+"米";
                 }
                 }
                 if(end){
                 str="总长"+str;
                 this.graphicsLayer.showDeleteSymbol(mp,gra);
                 return;
                 }
                 this.graphicsLayer.showText(mp,str,end);*/
                this._getLengthAndArea(gra.geometry, false).then(lang.hitch(this, function(result){
                    if(!this.domNode){
                        return;
                    }
                    var length = result.length;
                    var unit = this.distanceUnitSelect.value;
                    var abbr = this._getDistanceUnitInfo(unit).label;
                    var localeLength = jimuUtils.localizeNumber(length.toFixed(3));
                    var length = localeLength + " " + abbr;
                    //var area = result.area;
                    if(end){
                        length=this.nls.totleDistance+length;
                        this.measureGraphicLayer.showDeleteSymbol(mp,gra,this.sierialId);
                        return;
                    }
                    this.measureGraphicLayer.showText(mp,length,end,this.sierialId);
                }), lang.hitch(this, function(err){
                    if(!this.domNode){
                        return;
                    }
                    console.log(err);
                }));
            },

            showTextSymbol2:function(mp,gra,end){
                /*var len=this.MeasureArea(gra.geometry);
                var str="";
                if(len/1000000>1){
                    if(end){
                        str=Math.round(len/10)/10000+"平方公里";
                    }else{
                        str=Math.round(len/10)/10000+"平方公里";
                    }
                }
                else{
                    if(end){
                        str=Number(len).toFixed(2)+"平方米";
                    }else{
                        str=Number(len).toFixed(2)+"平方米";
                    }
                }
                if(end){
                    str="总面积"+str;
                    this.graphicsLayer.showDeleteSymbol(mp,gra);
                    mp=gra.geometry.getCentroid();
                }
                this.graphicsLayer.showText(mp,str,end);*/
                this._getLengthAndArea(gra.geometry, true).then(lang.hitch(this, function(result){
                    if(!this.domNode){
                        return;
                    }
                    var length = result.length;
                    var area = result.area;

                    var areaUnit = this.areaUnitSelect.value;
                    var areaAbbr = this._getAreaUnitInfo(areaUnit).label;
                    var localeArea = jimuUtils.localizeNumber(area.toFixed(3));
                    var areaText = localeArea + " " + areaAbbr;

                    var lengthUnit = this.distanceUnitSelect.value;
                    var lengthAbbr = this._getDistanceUnitInfo(lengthUnit).label;
                    var localeLength = jimuUtils.localizeNumber(length.toFixed(3));
                    var lengthText = localeLength + " " + lengthAbbr;

                    var text = areaText + "    "+this.nls.totleDistance + lengthText;

                    if(end){
                        lengthText=this.nls.totleArea+text;
                        this.measureGraphicLayer.showDeleteSymbol(mp,gra,this.sierialId);
                        mp=gra.geometry.getCentroid();
                    }
                    this.measureGraphicLayer.showText(mp,lengthText,end,this.sierialId);
                }), lang.hitch(this, function(err){
                    if(!this.domNode){
                        return;
                    }
                    console.log(err);
                }));

            },

            showTextSymbol3:function(mp,gra,end){
                if(gra==undefined)return;
                /*var len=this.MeasureLength(gra.geometry);
                var str="";
                if(len/1000>1){
                    if(end){
                        str=Math.round(len/10)/100+"公里";
                    }else{
                        str=Math.round(len/10)/100+"公里";
                    }
                }
                else{
                    if(end){
                        str=Number(len).toFixed(2)+"米";
                    }else{
                        str=Number(len).toFixed(2)+"米";
                    }
                }
                if(end){
                    str="总长"+str;
                    this.graphicsLayer.showDeleteSymbol(mp,gra);
                    return;
                }
                this.graphicsLayer.showText(mp,str,end);*/
                this._getLengthAndArea(gra.geometry, false).then(lang.hitch(this, function(result){
                    if(!this.domNode){
                        return;
                    }
                    var length = result.length;
                    var unit = this.distanceUnitSelect.value;
                    var abbr = this._getDistanceUnitInfo(unit).label;
                    var localeLength = jimuUtils.localizeNumber(length.toFixed(3));
                    var length = localeLength + " " + abbr;
                    //var area = result.area;
                    if(end){
                        length=this.nls.totleDistance+length;
                        this.measureGraphicLayer.showDeleteSymbol(mp,gra,this.sierialId);
                        return;
                    }
                    this.measureGraphicLayer.showText(mp,length,end,this.sierialId);
                }), lang.hitch(this, function(err){
                    if(!this.domNode){
                        return;
                    }
                    console.log(err);
                }));
            },

            MeasureLength:function(geometry){
                //判断地图投影
                if(this.map.spatialReference.wikd==102113||this.map.spatialReference.wkid==102100){
                    geometry=WebMercatorUtils.webMercatorToGeographic(geometry);
                }
                else if(this.map.spatialReference.wikd==4326){
                }
                var lengthsArr=new Array();
                lengthsArr=GeodesicUtils.geodesicLengths([geometry],this.selectedAreaUnits.data);
                return Number(lengthsArr[0]);
            },

            MeasureArea:function(geometry){
                //判断地图投影
                if(this.map.spatialReference.wikd==102113||this.map.spatialReference.wkid==102100){
                    geometry=WebMercatorUtils.webMercatorToGeographic(geometry);
                }
                else if(this.map.spatialReference.wikd==4326){
                }
                var areasArr=new Array();
                areasArr=GeodesicUtils.geodesicAreas([geometry],this.selectedAreaUnits.data);
                return Number(areasArr[0]);
            }
            //----------------------------------------------------------------------------------------------------------
        });

        /*clazz.inPanel = false;
        clazz.hasUIFile = false;*/
        return clazz;
    });