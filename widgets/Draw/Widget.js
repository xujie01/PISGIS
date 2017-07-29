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
    'dojo/_base/declare',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/BaseWidget',
    'dojo/on',
    'dojo/Deferred',
    'dojo/_base/html',
    'dojo/_base/lang',
    'dojo/_base/Color',
    'dojo/_base/array',
    'dojo/dom-style',
    'esri/config',
    'esri/graphic',
    'esri/geometry/Polyline',
    'esri/geometry/Polygon',
    'esri/symbols/TextSymbol',
    'esri/symbols/Font',
    'esri/units',
    'esri/geometry/webMercatorUtils',
    'esri/geometry/geodesicUtils',
    'esri/tasks/GeometryService',
    'esri/tasks/AreasAndLengthsParameters',
    'esri/tasks/LengthsParameters',
    'esri/undoManager',
    'esri/OperationBase',
    'esri/layers/GraphicsLayer',
    'esri/layers/FeatureLayer',
    'jimu/dijit/ViewStack',
    'jimu/utils',
    'jimu/SpatialReference/wkidUtils',
    'jimu/LayerInfos/LayerInfos',
    'jimu/dijit/LoadingIndicator',
    'dojo/topic',
    'jimu/dijit/LoadingShelter',
    "dojox/grid/EnhancedGrid",
    "dojox/grid/enhanced/plugins/IndirectSelection",
    "dijit/Dialog",
    "esri/toolbars/edit",
    "dojo/_base/event",
    'esri/symbols/jsonUtils',
    'esri/geometry/jsonUtils',
    'dojo/data/ItemFileWriteStore',
    'jimu/magicgis/util/commonUtils',
    'dojo/request/xhr',
    "jimu/magicgis/dijit/EditContextMenu",
    "jimu/magicgis/dijit/EditInfoWindow",
    'jimu/dijit/Message',
    'jimu/dijit/Popup',
    'esri/InfoTemplate',
    "dijit/layout/ContentPane",
    "jimu/magicgis/configProject",
    'jimu/dijit/DrawBox',
    'jimu/dijit/SymbolChooser',
    'dijit/form/Select',
    'dijit/form/NumberSpinner',
    "dojox/grid/enhanced/plugins/Pagination",
    "dijit/form/Button"
  ],
  function(declare, _WidgetsInTemplateMixin, BaseWidget, on, Deferred, html, lang, Color, array, domStyle,
    esriConfig, Graphic, Polyline, Polygon, TextSymbol, Font, esriUnits, webMercatorUtils,
    geodesicUtils, GeometryService, AreasAndLengthsParameters, LengthsParameters, UndoManager,
    OperationBase, GraphicsLayer, FeatureLayer, ViewStack, jimuUtils, wkidUtils, LayerInfos,
    LoadingIndicator,topic,LoadingShelter,EnhancedGrid,IndirectSelection,Dialog,
    Edit,event,esriSymJsonUtils,esriGeoJsonUtils,ItemFileWriteStore,commonUtils,xhr,EditContextMenu,EditInfoWindow,
    Message,Popup,InfoTemplate,ContentPane,configProject) {
    //custom operations
    var customOp = {};
    customOp.Add = declare(OperationBase, {
      label: 'Add Graphic',
      constructor: function(/*graphicsLayer, addedGraphics*/ params){
        this._graphicsLayer = params.graphicsLayer;
        this._addedGraphics = params.addedGraphics;
      },

      performUndo: function () {
        array.forEach(this._addedGraphics, lang.hitch(this, function(g){
          this._graphicsLayer.remove(g);
        }));
      },

      performRedo: function () {
        array.forEach(this._addedGraphics, lang.hitch(this, function(g){
          this._graphicsLayer.add(g);
        }));
      }
    });
    customOp.Delete = declare(OperationBase, {
      label: 'Delete Graphic',
      constructor: function(/*graphicsLayer, deletedGraphics*/ params){
        this._graphicsLayer = params.graphicsLayer;
        this._deletedGraphics = params.deletedGraphics;
      },

      performUndo: function(){
        array.forEach(this._deletedGraphics, lang.hitch(this, function(g){
          this._graphicsLayer.add(g);
        }));
      },

      performRedo: function(){
        array.forEach(this._deletedGraphics, lang.hitch(this, function(g){
          this._graphicsLayer.remove(g);
        }));
      }
    });

    return declare([BaseWidget, _WidgetsInTemplateMixin], {
      name: 'Draw',
      baseClass: 'jimu-widget-draw',
      _gs: null,
      _defaultGsUrl: '//tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer',
      _undoManager: null,
      _graphicsLayer: null,
      _objectIdCounter: 1,
      _objectIdName: 'OBJECTID',
      _objectIdType: 'esriFieldTypeOID',
      _pointLayer: null,
      _polylineLayer: null,
      _polygonLayer: null,
      _labelLayer: null,

        grid:null,
        layer:null,
        editToolbar:null,
        base64JsonSyms:null,
        editContextMenu:null,
        deleteUIDArr:null,//删除标绘id数组
        isOpenEditTip:null,
        activeEditPlot:null,//编辑标绘
        editInfoWindow:null,

      postMixInProperties: function(){
        this.inherited(arguments);
        this.config.isOperationalLayer = !!this.config.isOperationalLayer;

        if(esriConfig.defaults.geometryService){
          this._gs = esriConfig.defaults.geometryService;
        }else{
          this._gs = new GeometryService(this._defaultGsUrl);
        }

        this._resetUnitsArrays();
        this._undoManager = new UndoManager({
          maxOperations: 0
        });
      },

      postCreate: function() {
        this.inherited(arguments);
        this._initLayers();
        jimuUtils.combineRadioCheckBoxWithLabel(this.showMeasure, this.showMeasureLabel);
        this.drawBox.setMap(this.map);

        this.viewStack = new ViewStack({
          viewType: 'dom',
          views: [this.pointSection, this.lineSection, this.polygonSection, this.textSection]
        });
        html.place(this.viewStack.domNode, this.settingContent);

        this._initUnitSelect();
        this._bindEvents();
        //let all buttons disable-like
        this._enableBtn(this.btnUndo, false);
        this._enableBtn(this.btnRedo, false);
        this._enableBtn(this.btnClear, false);
      },

      _initLayers: function(){
        this._graphicsLayer = new GraphicsLayer();

        if(this.config.isOperationalLayer){
          var layerDefinition = {
            "name": "",
            "geometryType": "",
            "fields": [{
              "name": this._objectIdName,
              "type": this._objectIdType,
              "alias": this._objectIdName
            }]
          };
          var pointDefinition = lang.clone(layerDefinition);
          pointDefinition.name = this.nls.points;//this.label + "_" +
          pointDefinition.geometryType = "esriGeometryPoint";
          this._pointLayer = new FeatureLayer({
            layerDefinition: pointDefinition,
            featureSet: null
          });

          var polylineDefinition = lang.clone(layerDefinition);
          polylineDefinition.name = this.nls.lines;
          polylineDefinition.geometryType = "esriGeometryPolyline";
          this._polylineLayer = new FeatureLayer({
            layerDefinition: polylineDefinition,
            featureSet: null
          });

          var polygonDefinition = lang.clone(layerDefinition);
          polygonDefinition.name = this.nls.areas;
          polygonDefinition.geometryType = "esriGeometryPolygon";
          this._polygonLayer = new FeatureLayer({
            layerDefinition: polygonDefinition,
            featureSet: null
          });

          var labelDefinition = lang.clone(layerDefinition);
          labelDefinition.name = this.nls.text;
          labelDefinition.geometryType = "esriGeometryPoint";
          this._labelLayer = new FeatureLayer({
            layerDefinition: labelDefinition,
            featureSet: null
          });

          var loading = new LoadingIndicator();

          loading.placeAt(this.domNode);

          LayerInfos.getInstance(this.map, this.map.itemInfo)
          .then(lang.hitch(this, function(layerInfos){
            if(!this.domNode){
              return;
            }

            loading.destroy();
            var layers = [this._polygonLayer, this._polylineLayer,
                          this._pointLayer, this._labelLayer];
            layerInfos.addFeatureCollection(layers, this.label + "_" + this.nls.results);
          }), lang.hitch(this, function(err){
            loading.destroy();
            console.error("Can not get LayerInfos instance", err);
          }));
        }else{
          this._pointLayer = new GraphicsLayer();
          this._polylineLayer = new GraphicsLayer();
          this._polygonLayer = new GraphicsLayer();
          this._labelLayer = new GraphicsLayer();
          this.map.addLayer(this._polygonLayer);
          this.map.addLayer(this._polylineLayer);
          this.map.addLayer(this._pointLayer);
          this.map.addLayer(this._labelLayer);
        }
      },

      onActive: function(){
        this.map.setInfoWindowOnClick(false);
      },

      onDeActive: function(){
        this._closeColorPicker();
        this.drawBox.deactivate();
        this.map.setInfoWindowOnClick(true);
      },

      _closeColorPicker: function () {
        var choosers = ["pointSymChooser", "lineSymChooser", "fillSymChooser", "textSymChooser"];
        for (var i = 0, len = choosers.length; i < len; i++) {
          var chooserStr = choosers[i];
          if (this[chooserStr]) {
            this[chooserStr].hideColorPicker();
          }
        }
      },

      _resetUnitsArrays: function(){
        this.defaultDistanceUnits = [];
        this.defaultAreaUnits = [];
        this.configDistanceUnits = [];
        this.configAreaUnits = [];
        this.distanceUnits = [];
        this.areaUnits = [];
      },

      _bindEvents: function() {
        //bind DrawBox
        this.own(on(this.drawBox, 'icon-selected', lang.hitch(this, this._onIconSelected)));
        this.own(on(this.drawBox, 'DrawEnd', lang.hitch(this, this._onDrawEnd)));
        this.own(on(this.drawBox, 'draw-deactivate', lang.hitch(this, function(){
            topic.publish('changeMapCurson',false);
        })));

        //bind symbol change events
        this.own(on(this.pointSymChooser, 'change', lang.hitch(this, function() {
          this._setDrawDefaultSymbols();
        })));
        this.own(on(this.lineSymChooser, 'change', lang.hitch(this, function() {
          this._setDrawDefaultSymbols();
        })));
        this.own(on(this.fillSymChooser, 'change', lang.hitch(this, function() {
          this._setDrawDefaultSymbols();
        })));
        this.own(on(this.textSymChooser, 'change', lang.hitch(this, function(symbol) {
          this.drawBox.setTextSymbol(symbol);
        })));

        //bind unit events
        this.own(on(this.showMeasure, 'click', lang.hitch(this, this._setMeasureVisibility)));

        //bind UndoManager events
        this.own(on(this._undoManager, 'change', lang.hitch(this, this._onUndoManagerChanged)));
      },

      _onIconSelected:function(target, geotype, commontype){
        topic.publish('changeMapCurson',true);
        /*jshint unused: false*/
        this._setDrawDefaultSymbols();
        if(commontype === 'point'){
          this.viewStack.switchView(this.pointSection);
        }
        else if(commontype === 'polyline'){
          this.viewStack.switchView(this.lineSection);
        }
        else if(commontype === 'polygon'){
          this.viewStack.switchView(this.polygonSection);
        }
        else if(commontype === 'text'){
          this.viewStack.switchView(this.textSection);
        }
        this._setMeasureVisibility();
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
        /*if(commontype === 'polyline'){
          if(this.showMeasure.checked){
            this._addLineMeasure(geometry, graphic);
          }else{
            this._pushAddOperation([graphic]);
          }
        }
        else if(commontype === 'polygon'){
          if(this.showMeasure.checked){
            this._addPolygonMeasure(geometry, graphic);
          }else{
            this._pushAddOperation([graphic]);
          }
        }else{
          this._pushAddOperation([graphic]);
        }*/

          this.addDrawGraphic(graphic);
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

      _setMeasureVisibility:function(){
        /*html.setStyle(this.measureSection, 'display', 'none');
        html.setStyle(this.areaMeasure, 'display', 'none');
        html.setStyle(this.distanceMeasure, 'display', 'none');
        var lineDisplay = html.getStyle(this.lineSection, 'display');
        var polygonDisplay = html.getStyle(this.polygonSection, 'display');
        if (lineDisplay === 'block') {
          html.setStyle(this.measureSection, 'display', 'block');
          if (this.showMeasure.checked) {
            html.setStyle(this.distanceMeasure, 'display', 'block');
          }
        } else if (polygonDisplay === 'block') {
          html.setStyle(this.measureSection, 'display', 'block');
          if (this.showMeasure.checked) {
            html.setStyle(this.areaMeasure, 'display', 'block');
            html.setStyle(this.distanceMeasure, 'display', 'block');
          }
        }*/
      },

      _getPointSymbol: function() {
        return this.pointSymChooser.getSymbol();
      },

      _getLineSymbol: function() {
        return this.lineSymChooser.getSymbol();
      },

      _getPolygonSymbol: function() {
        return this.fillSymChooser.getSymbol();
      },

      _getTextSymbol: function() {
        return this.textSymChooser.getSymbol();
      },

      _setDrawDefaultSymbols: function() {
        this.drawBox.setPointSymbol(this._getPointSymbol());
        this.drawBox.setLineSymbol(this._getLineSymbol());
        this.drawBox.setPolygonSymbol(this._getPolygonSymbol());
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
          var localeLength = jimuUtils.localizeNumber(length.toFixed(1));
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
          var localeArea = jimuUtils.localizeNumber(area.toFixed(1));
          var areaText = localeArea + " " + areaAbbr;

          var lengthUnit = this.distanceUnitSelect.value;
          var lengthAbbr = this._getDistanceUnitInfo(lengthUnit).label;
          var localeLength = jimuUtils.localizeNumber(length.toFixed(1));
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
          var areas = geodesicUtils.geodesicAreas([geometry], esriAreaUnit);
          var polyline = this._getPolylineOfPolygon(geometry);
          lengths = geodesicUtils.geodesicLengths([polyline], esriLengthUnit);
          result.area = areas[0];
          result.length = lengths[0];
        }else{
          lengths = geodesicUtils.geodesicLengths([geometry], esriLengthUnit);
          result.length = lengths[0];
        }

        return result;
      },

      _getLengthAndArea3857: function(geometry3857, isPolygon, esriAreaUnit, esriLengthUnit){
        var geometry4326 = webMercatorUtils.webMercatorToGeographic(geometry3857);
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

      destroy: function() {
        if(this._undoManager){
          this._undoManager.destroy();
          this._undoManager = null;
        }
        if(this.drawBox){
          this.drawBox.destroy();
          this.drawBox = null;
        }
        if(this._graphicsLayer){
          this._graphicsLayer.clear();
          this.map.removeLayer(this._graphicsLayer);
          this._graphicsLayer = null;
        }
        if(this._pointLayer){
          this.map.removeLayer(this._pointLayer);
          this._pointLayer = null;
        }
        if(this._polylineLayer){
          this.map.removeLayer(this._polylineLayer);
          this._polylineLayer = null;
        }
        if(this._polygonLayer){
          this.map.removeLayer(this._polygonLayer);
          this._polygonLayer = null;
        }
        if(this._labelLayer){
          this.map.removeLayer(this._labelLayer);
          this._labelLayer = null;
        }
        if(this.pointSymChooser){
          this.pointSymChooser.destroy();
          this.pointSymChooser = null;
        }
        if(this.lineSymChooser){
          this.lineSymChooser.destroy();
          this.lineSymChooser = null;
        }
        if(this.fillSymChooser){
          this.fillSymChooser.destroy();
          this.fillSymChooser = null;
        }
        if(this.textSymChooser){
          this.textSymChooser.destroy();
          this.textSymChooser = null;
        }
        this.inherited(arguments);
      },

      startup: function() {
        this.inherited(arguments);
        this.viewStack.startup();
        this.viewStack.switchView(null);

          //动态绑定事件
          this.own(on(this.btnCancel,"click",lang.hitch(this,this._onDeleteCancel)));
          this.own(on(this.btnOk,"click",lang.hitch(this,this._onDeleteClick)));
          this.own(topic.subscribe("edit-completed", lang.hitch(this, this._onEditEnd)));

          this.shelter = new LoadingShelter({
              hidden: true
          });
          this.shelter.placeAt(this.domNode);
          this.shelter.startup();

          this.editContextMenu=new EditContextMenu({
              map:this.map
          });
          this.editContextMenu.startup();
          this.editContextMenu.placeAt(dojo.byId("map"));

          this.editToolbar = new Edit(this.map);
          this.editToolbar.on("graphic-move-stop", lang.hitch(this,function () {//解决移动时不能点击
              this.editToolbar.deactivate();
          }));

          this.layer=new GraphicsLayer();
          this.layer.on("click",lang.hitch(this,function(evt) {
              event.stop(evt);
              //this.activateToolbar(evt.graphic);
              this._switchToResultTab();
              if(evt.graphic.attributes.editFlag==1){
                  this._popContextMenu(evt.graphic,evt.pageX,evt.pageY);
              }else{
                  layer.msg(this.nls.noEditTip);
              }
              var  length = this.grid.store._arrayOfAllItems.length;
              for(var i = 0;i<length;i++) {
                  var uid = this.grid.store.getValue(this.grid.getItem(i), "uid");
                  if(uid==evt.graphic.attributes.EVENTID){
                      this.grid.rowSelectCell.toggleRow(this.grid.getItem(i), true);
                      break;
                  }
              }
          }));
      },

        onClose: function () {
            this._closeColorPicker();

            if(this.layer){
                this.map.removeLayer(this.layer);
            }
            this._enableOperationBtn(0);
            this.activeEditPlot=null;
            if(this.editToolbar){
                this.editToolbar.deactivate();
            }
            this.drawBox.clear();
            topic.publish('changeMapCurson',false);
        },

      _getAllGraphics: function(){
        //return a new array
        return array.map(this._graphicsLayer.graphics, lang.hitch(this, function(g){
          return g;
        }));
      },

      _onUndoManagerChanged: function(){
        this._enableBtn(this.btnUndo, this._undoManager.canUndo);
        this._enableBtn(this.btnRedo, this._undoManager.canRedo);
        var graphics = this._getAllGraphics();
        this._enableBtn(this.btnClear, graphics.length > 0);
        this._syncGraphicsToLayers();
      },

      _syncGraphicsToLayers: function(){
        /*global isRTL*/
        this._pointLayer.clear();
        this._polylineLayer.clear();
        this._polygonLayer.clear();
        this._labelLayer.clear();
        var graphics = this._getAllGraphics();
        array.forEach(graphics, lang.hitch(this, function(g){
          var graphicJson = g.toJson();
          var clonedGraphic = new Graphic(graphicJson);
          var geoType = clonedGraphic.geometry.type;
          var layer = null;
          var isNeedRTL = false;

          if(geoType === 'point'){
            if(clonedGraphic.symbol && clonedGraphic.symbol.type === 'textsymbol'){
              layer = this._labelLayer;
              isNeedRTL = isRTL;
            }else{
              layer = this._pointLayer;
            }
          }else if(geoType === 'polyline'){
            layer = this._polylineLayer;
          }else if(geoType === 'polygon' || geoType === 'extent'){
            layer = this._polygonLayer;
          }
          if (layer) {
            var graphic = layer.add(clonedGraphic);
            if (true === isNeedRTL && graphic.getNode) {
              var node = graphic.getNode();
              if (node) {
                //SVG <text>node can't set className by domClass.add(node, "jimu-rtl"); so set style
                //It's not work that set "direction:rtl" to SVG<text>node in IE11, it is IE's bug
                domStyle.set(node, "direction", "rtl");
              }
            }
          }
        }));
      },

      _pushAddOperation: function(graphics){
        array.forEach(graphics, lang.hitch(this, function(g){
          var attrs = g.attributes || {};
          attrs[this._objectIdName] = this._objectIdCounter++;
          g.setAttributes(attrs);
          this._graphicsLayer.add(g);
        }));
        var addOperation = new customOp.Add({
          graphicsLayer: this._graphicsLayer,
          addedGraphics: graphics
        });
        this._undoManager.add(addOperation);
      },

      _pushDeleteOperation: function(graphics){
        var deleteOperation = new customOp.Delete({
          graphicsLayer: this._graphicsLayer,
          deletedGraphics: graphics
        });
        this._undoManager.add(deleteOperation);
      },

      _enableBtn: function(btn, isEnable){
        if(isEnable){
          html.removeClass(btn, 'jimu-state-disabled');
        }else{
          html.addClass(btn, 'jimu-state-disabled');
        }
      },

      _onBtnUndoClicked: function(){
        this._undoManager.undo();
      },

      _onBtnRedoClicked: function(){
        this._undoManager.redo();
      },

      _onBtnClearClicked: function(){
        var graphics = this._getAllGraphics();
        if(graphics.length > 0){
          this._graphicsLayer.clear();
          this._pushDeleteOperation(graphics);
        }
        this._enableBtn(this.btnClear, false);
      },

        //自定义标注----------------------------------------------------------------------------------------------------
        onOpen: function () {
            this.isOpenEditTip=true;
            this.map.addLayer(this.layer);

            domStyle.set(this.draw_groupGrid,"visibility","hidden");//隐藏
            this.shelter.show();
            if(this.base64JsonSyms){
                this.queryPlot();
            }else{
                var module = "jimu/dijit/SymbolsInfo/base64.json";//BAES64编码图片
                var def;
                if (def) {return;}
                var url = window.location.protocol + "//" + window.location.host +  require.toUrl(module);;
                def = xhr(url, {
                    handleAs: 'json'
                });
                def.then(lang.hitch(this, function(jsonSyms) {
                    this.base64JsonSyms=jsonSyms;
                    this.queryPlot();
                }), lang.hitch(this, function(error) {
                    console.error('get point symbol failed', error);
                }));
            }
        },

        //弹出编辑菜单
        _popContextMenu: function(graphic,pageX,pageY){
            this.editContextMenu.setGraphic(graphic);
            domStyle.set(this.editContextMenu.domNode,"left",(pageX-this.map.position.x)+"px");
            domStyle.set(this.editContextMenu.domNode,"top",(pageY-this.map.position.y)+"px");
            domStyle.set(this.editContextMenu.domNode,"display","block");
            $("body").bind("mousedown",{thisObj:this,graphic:graphic},this.onBodyDown);
        },
        _removeContextMenu: function(){
            domStyle.set(this.editContextMenu.domNode,"display","none");
        },
        onBodyDown: function(event) {
            event.data.thisObj._removeContextMenu();
            var obj=event.srcElement||event.target;
            if(html.hasClass(obj, "cmitem_item")){
                event.data.thisObj.editPlot(event.data.graphic,obj.id);
            }
            $("body").unbind("mousedown", event.data.thisObj.onBodyDown);//这样传参才能解除绑定
        },

        //切换Tab视图
        _onTabHeaderClicked: function(event){
            var target = event.target || event.srcElement;
            if(target === this.drawQueryItem){
                this._switchToTaskTab();
            }else if(target === this.infoQueryItem){
                this._switchToResultTab();
            }
        },
        _switchToTaskTab: function(){
            html.removeClass(this.infoQueryItem, 'selected');
            html.removeClass(this.infoTabView, 'selected');
            html.addClass(this.drawQueryItem, 'selected');
            html.addClass(this.drawTabView, 'selected');
        },
        _switchToResultTab: function(){
            html.removeClass(this.drawQueryItem, 'selected');
            html.removeClass(this.drawTabView, 'selected');
            html.addClass(this.infoQueryItem, 'selected');
            html.addClass(this.infoTabView, 'selected');
            this.grid.resize();
            this._popEditTip(this.isOpenEditTip);
            this.isOpenEditTip=false;
        },

        _onPopEditTip: function(){
            this._popEditTip(1);
        },
        _popEditTip: function(isOpenEditTip){
            if(isOpenEditTip){
                layer.msg(this.nls.editTip, {
                    time: 20000, //20s后自动关闭
                    btn: [this.nls.knownLabel]
                });
            }
        },

        //查询标绘
        queryPlot:function(){
            this.shelter.show();
            //从服务器获取数据来的
            /*dojo.xhrPost({
                url:configProject.mapFeatureQueryList,
                handleAs:"text",
                content:{name:"标绘查询"},
                load:lang.hitch(this,function(response){
                    //var dataJson = "[{\"dataType\":1,\"dataList\":[{\"text\":\"穿越桩\",\"type\":\"point\",\"cpoints\":[13086047.287785465,4444367.495902104],\"attrs\":{\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"isAudited\":0,\"editFlag\":1,\"unitName\":\"中国石油天然气股份有限公司\",\"describ\":\"\",\"isTOGIS\":0,\"isAllVisible\":1,\"textFormat\":{\"bold\":false,\"leftMargin\":null,\"tabStops\":null,\"italic\":false,\"rightMargin\":null,\"size\":24,\"indent\":null,\"kerning\":null,\"leading\":null,\"blockIndent\":null,\"color\":16711680,\"bullet\":null,\"font\":\"微软雅黑\",\"display\":\"block\",\"letterSpacing\":null,\"underline\":false,\"target\":null,\"url\":null,\"align\":null},\"plotName\":\"穿越桩\",\"contacts\":\"\",\"unitCode\":\"01\",\"uid\":\"BFD8D211-5CE9-CF5A-527D-3205E4744AA0\",\"isTextVisible\":0,\"featureType\":\"1\",\"phoneNumber\":\"\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\"},\"textformat\":{\"size\":24,\"font\":\"微软雅黑\",\"weight\":\"normal\",\"style\":\"normal\",\"decoration\":\"none\",\"color\":16711680},\"wkid\":102113,\"symbol\":{\"size\":11.25,\"type\":\"esriSMS\",\"style\":\"esriSMSCircle\",\"outline\":{\"color\":[0,0,0,255],\"width\":1.5},\"color\":[255,0,0,255]},\"editFlag\":1},{\"attrs\":{\"featureType\":\"0\",\"isAudited\":0,\"contacts\":\"\",\"unitCode\":\"01\",\"isTextVisible\":1,\"unitName\":\"PIS项目组\",\"plotName\":\"警示牌\",\"isTOGIS\":0,\"unitID\":\"25c85e40-4b04-4151-903f-a45af2e21e7f\",\"describ\":\"\",\"isAllVisible\":1,\"uid\":\"51D790B5-6A6E-A78E-40C9-061CDC3934D7\",\"editFlag\":1,\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"phoneNumber\":\"\"},\"wkid\":102113,\"text\":\"警示牌\",\"textformat\":{\"size\":18,\"color\":16711680,\"style\":\"normal\",\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"cpoints\":[13071190.87825754,4477829.00084878],\"symbol\":{\"width\":26.25,\"url\":\"assets/images/drawicos/warnBoard.png\",\"height\":26.25,\"type\":\"esriPMS\"},\"type\":\"picpoint\",\"editFlag\":1},{\"symbol\":{\"outline\":{\"width\":0.75,\"style\":\"esriSLSSolid\",\"color\":[255,0,0,128],\"type\":\"esriSLS\"},\"style\":\"esriSFSSolid\",\"color\":[0,255,0,128],\"type\":\"esriSFS\"},\"wkid\":102113,\"text\":\"分队方向\",\"cpoints\":[13083448.428823773,4385358.110065994,13094149.612783693,4427551.349679391],\"attrs\":{\"describ\":\"\",\"isAudited\":0,\"phoneNumber\":\"\",\"uid\":\"309E5A0C-1888-287F-80FF-C382751D05A1\",\"isAllVisible\":1,\"plotName\":\"分队方向\",\"isTextVisible\":1,\"contacts\":\"\",\"unitCode\":\"01\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"isTOGIS\":0,\"featureType\":\"0\",\"unitName\":\"中国石油天然气股份有限公司\"},\"textformat\":{\"size\":18,\"style\":\"normal\",\"color\":65535,\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"type\":\"squadcombat\",\"editFlag\":1},{\"text\":\"\",\"wkid\":102113,\"cpoints\":[12958506.542276833,4662039.21669011,12859444.15361927,4534114.206152073,12855163.680035302,4665463.5955572855],\"type\":\"multipoint\",\"attrs\":{\"describ\":\"\",\"featureType\":\"2\",\"unitCode\":\"01\",\"contacts\":\"\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"isAllVisible\":1,\"uid\":\"BA929818-98F9-4D2A-51AF-6C195642604B\",\"isTextVisible\":0,\"unitName\":\"中国石油天然气股份有限公司\",\"isAudited\":0,\"phoneNumber\":\"\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"isTOGIS\":0,\"plotName\":\"自定义多点\"},\"symbol\":{\"style\":\"esriSMSCircle\",\"outline\":{\"width\":1.5,\"color\":[0,0,0,255]},\"size\":18.75,\"type\":\"esriSMS\",\"color\":[255,0,0,255]},\"textformat\":{\"weight\":\"normal\",\"size\":18,\"color\":16711680,\"font\":\"微软雅黑\",\"style\":\"normal\",\"decoration\":\"none\"},\"editFlag\":1},{\"cpoints\":[13053190.831177108,4429699.23017418,13060375.911835903,4423890.016024515],\"wkid\":102113,\"text\":\"\",\"type\":\"rectangle\",\"attrs\":{\"unitCode\":\"01\",\"isTOGIS\":0,\"isTextVisible\":0,\"featureType\":\"0\",\"isAllVisible\":1,\"unitName\":\"中国石油天然气股份有限公司\",\"contacts\":\"\",\"plotName\":\"圆形\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"describ\":\"\",\"phoneNumber\":\"\",\"isAudited\":0,\"uid\":\"C243799D-01A2-0D82-CCE4-334702FDEE1D\",\"textFormat\":{\"kerning\":null,\"leading\":null,\"blockIndent\":null,\"color\":16711680,\"bullet\":null,\"font\":\"微软雅黑\",\"display\":\"block\",\"letterSpacing\":null,\"underline\":false,\"target\":null,\"url\":null,\"align\":null,\"bold\":false,\"leftMargin\":null,\"tabStops\":null,\"italic\":false,\"rightMargin\":null,\"size\":18,\"indent\":null},\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\"},\"textformat\":{\"style\":\"normal\",\"color\":16711680,\"font\":\"微软雅黑\",\"weight\":\"normal\",\"size\":24,\"decoration\":\"none\"},\"symbol\":{\"type\":\"esriSFS\",\"outline\":{\"type\":\"esriSLS\",\"style\":\"esriSLSSolid\",\"color\":[255,0,0,128],\"width\":0.75},\"style\":\"esriSFSSolid\",\"color\":[0,255,0,128]},\"editFlag\":1},{\"symbol\":{\"width\":1.5,\"style\":\"esriSLSSolid\",\"color\":[0,255,0,255],\"type\":\"esriSLS\"},\"wkid\":102113,\"text\":\"自定义折线\",\"cpoints\":[13046147.159020634,4449259.465712375,13093843.864670582,4416238.66949318,13042478.181662949,4355700.54309132,12942804.29677908,4400951.2638361445],\"attrs\":{\"describ\":\"\",\"isAudited\":0,\"phoneNumber\":\"\",\"uid\":\"5DD06C08-7512-29E2-1B5F-371292D5F5F0\",\"isAllVisible\":1,\"plotName\":\"自定义折线\",\"isTextVisible\":1,\"contacts\":\"\",\"unitCode\":\"01\",\"textFormat\":{\"bullet\":null,\"size\":24,\"kerning\":null,\"font\":\"微软雅黑\",\"letterSpacing\":null,\"underline\":null,\"italic\":null,\"url\":null,\"align\":null,\"rightMargin\":null,\"leftMargin\":null,\"tabStops\":null,\"color\":16711680,\"bold\":null,\"leading\":null,\"target\":null,\"blockIndent\":null,\"display\":\"block\",\"indent\":null},\"editFlag\":1,\"isTOGIS\":0,\"featureType\":\"0\",\"unitName\":\"中国石油天然气股份有限公司\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\"},\"textformat\":{\"size\":24,\"style\":\"normal\",\"color\":153,\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"type\":\"polyline\",\"editFlag\":1}],\"dataCount\":6}]";
                    var dataJson = response;
                    console.log("查询标绘成功");
                    var list= dojo.fromJson(dataJson)[0].dataList;
                    var dataType= dojo.fromJson(dataJson)[0].dataType;
                    var dataCount= dojo.fromJson(dataJson)[0].dataCount;

                    this.shelter.hide();
                    domStyle.set(this.draw_groupGrid,"visibility","visible");
                    //派发获取数据
                    this.getPlotData2Grid(list);
                }),
                error:lang.hitch(this,function(response){
                    console.log("查询标绘失败："+response);

                    this.shelter.hide();
                    domStyle.set(this.draw_groupGrid,"visibility","visible");
                    if(this.grid) this.grid.setStore(null);
                }),
            });*/
            var dataJson = '[{"dataType":1,"dataList":[{"geometry":{"x":1.2703829746979982E7,"y":3621177.0114985043,"spatialReference":{"wkid":102100}},"symbol":{"angle":0,"xoffset":0,"yoffset":0,"type":"esriPMS","url":"http://static.arcgis.com/images/Symbols/Transportation/Seaplane.png","imageData":"imageData","contentType":"image/png","width":18,"height":18},"attributes":{"EVENTID":"e6208b02-b2c6-4767-a627-171342db2e24","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司"},"editFlag":1},{"geometry":{"x":1.268426186773898E7,"y":5088767.954573497,"spatialReference":{"wkid":102100}},"symbol":{"angle":0,"xoffset":0,"yoffset":0,"type":"esriPMS","url":"http://static.arcgis.com/images/Symbols/OutdoorRecreation/PartlySunny.png","imageData":"imageData","contentType":"image/png","width":18,"height":18},"attributes":{"EVENTID":"d1e7cd3c-a34c-497b-8674-c70a9672db05","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司"},"editFlag":1},{"geometry":{"x":1.1184938035939002E7,"y":3582041.2530165035,"spatialReference":{"wkid":102100}},"attributes":{"EVENTID":"8d30f3c7-541d-4fda-8446-81e230951add","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司","editFlag":1},"symbol":{"color":[255,69,0,255],"type":"esriTS","haloSize":0,"haloColor":null,"horizontalAlignment":"center","angle":0,"xoffset":0,"yoffset":0,"text":"嘿，你好吗","rotated":false,"kerning":true,"font":{"size":15.6675,"style":"normal","variant":"normal","weight":"normal","family":"serif"}},"editFlag":1},{"geometry":{"rings":[[[1.1361048949108E7,6051642.662026015],[1.1864470436265998E7,5179691.068646486],[1.0857627461950008E7,5179691.068646486],[1.1361048949108E7,6051642.662026015]]],"spatialReference":{"wkid":102100}},"attributes":{"EVENTID":"02bc98fc-b507-46a1-8f19-b58ddcb1d9ea","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司","editFlag":1},"symbol":{"color":[155,187,89,128],"outline":{"color":[115,140,61,255],"width":1.5,"type":"esriSLS","style":"esriSLSSolid","marker":null},"type":"esriSFS","style":"esriSFSSolid"},"editFlag":1},{"geometry":{"paths":[[[9893458.006033007,3992966.7170775025],[1.0441358624781005E7,4971360.679127498]]],"spatialReference":{"wkid":102100}},"symbol":{"color":[155,187,89,255],"width":2.25,"type":"esriSLS","style":"esriSLSSolid","marker":null},"attributes":{"EVENTID":"d0afb77d-cb4c-4563-b010-5bebc38c7ec1","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司"},"editFlag":1},{"geometry":{"x":1.1282777432144001E7,"y":4472379.758482,"spatialReference":{"wkid":102100}},"attributes":{"EVENTID":"84ab1a6e-a440-45a9-b452-66185b2e6459","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司","editFlag":1},"symbol":{"angle":0,"xoffset":0,"yoffset":12,"type":"esriPMS","url":"http://static.arcgis.com/images/Symbols/Basic/LightBlueStickpin.png","imageData":"imageData","contentType":"image/png","width":18,"height":18},"editFlag":1},{"geometry":{"x":1.2290523213055497E7,"y":4364756.422656501,"spatialReference":{"wkid":102100}},"symbol":{"color":[0,0,128,128],"size":18,"angle":0,"xoffset":0,"yoffset":0,"type":"esriSMS","style":"esriSMSCircle","outline":{"color":[0,0,128,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid","marker":null}},"attributes":{"EVENTID":"4a9dc4a4-d0e9-419d-af7b-0597ad01765e","MAPFEATURENAME":"JS测试","MAPFEATURETYPE":"1","MAPFEATUREDESCRIB":"","VISIBLERANGE":1,"AUDITFLAG":0,"TOGISFLAG":0,"DEPARTMENTID":"01","DEPARTMENTNAME":"中国石油天然气股份有限公司"},"editFlag":1}],"dataCount":7}]';
            console.log("查询标绘成功");
            var list= dojo.fromJson(dataJson)[0].dataList;
            var dataType= dojo.fromJson(dataJson)[0].dataType;
            var dataCount= dojo.fromJson(dataJson)[0].dataCount;

            this.shelter.hide();
            domStyle.set(this.draw_groupGrid,"visibility","visible");
            //派发获取数据
            this.getPlotData2Grid(list);
        },
        getPlotData2Grid:function(list){
            this.layer.clear();
            var data={
                identifier:"id",
                items:[]
            };
            for(var i= 0,l=list.length;i<l;i++){
                var listItem=list[i%l];
                var featureType=this.nls.featureType0;
                switch(listItem.attributes.MAPFEATURETYPE)
                {
                    case "0":
                    {
                        featureType=this.nls.featureType0;
                        break;
                    }
                    case "1":
                    {
                        featureType=this.nls.featureType1;
                        break;
                    }
                    case "2":
                    {
                        featureType=this.nls.featureType2;
                        break;
                    }
                    case "3":
                    {
                        featureType=this.nls.featureType3;
                        break;
                    }
                    case "4":
                    {
                        featureType=this.nls.featureType4;
                        break;
                    }
                    default:
                    {
                        break;
                    }
                }
                listItem.attributes.editFlag=listItem.editFlag;//属性增加可编辑状态
                if(listItem.symbol.imageData="imageData"){//如果是BASE64编码图片
                    array.forEach(this.base64JsonSyms, lang.hitch(this, function(jsonSym, index) {
                        if(jsonSym.url==listItem.symbol.url){
                            listItem.symbol.imageData=jsonSym.imageData;
                            return;
                        }
                    }));
                }
                var g = new Graphic({
                    "geometry":listItem.geometry,
                    "symbol":listItem.symbol,
                    "attributes":listItem.attributes,
                });
                this.layer.add(g);
                var listObj={"plotName":listItem.attributes.MAPFEATURENAME,"featureType":featureType,"unitName":listItem.attributes.DEPARTMENTNAME,
                    "uid":listItem.attributes.EVENTID}
                data.items.push(lang.mixin({id:i+1},listObj));
            }
            var store=new ItemFileWriteStore({data:data});

            var layout=[[
                {'name':this.nls.featureName,'field':'plotName','width':'80px'},
                {'name':this.nls.featureType,'field':'featureType','width':'75px'},
                {'name':this.nls.featureUnit,'field':'unitName','width':'180px'}
            ]];

            if(this.grid==null){
                /*grid=new DataGrid({
                 id:'DrawGrid',
                 store:store,
                 structure:layout,
                 rowSelector:'20px',
                 autoWidth:true,
                 rowsPerPage:10
                 },
                 this.gridDivNode);*/
                this.grid = new EnhancedGrid({
                        id: 'DrawGrid',
                        store: store,
                        structure: layout,
                        rowSelector: '20px',
                        rowsPerPage:10,
                        plugins: {indirectSelection: {headerSelector:true, width:"40px",
                            styles:"text-align: center;"}/*,
                         pagination: {
                         pageSizes: ["2", "4", "10", "All"],
                         description: true,
                         sizeSwitch: true,
                         pageStepper: true,
                         gotoButton: true,
                         /!*page step to be displayed*!/
                         maxPageStep: 4,
                         /!*position of the pagination bar*!/
                         position: "top"
                         }*/
                        }},
                    this.gridDivNode);
                this.grid.startup();
                this.grid.set("onRowClick",lang.hitch(this,this.cellClickGrid));
                /*dojo.connect(grid.selection, 'onSelected', function(rowIndex){alert(grid.getItem(rowIndex).uid);});
                 dojo.connect(grid.selection, 'onDeselected', function(rowIndex){alert(grid.getItem(rowIndex).uid);});
                 dojo.connect(grid.rowSelectCell, 'toggleAllSelection', function(newValue){alert(newValue);});*/
                this.connect(this, "resize", function () {
                    this.grid.resize();
                });
            }else{
                this.grid.setStore(store);
            }
        },
        //插入标绘
        addDrawGraphic:function(graphic) {
            this.shelter.show();
            var guid=commonUtils._creatUUID();
            var graphicJson=graphic.toJson();
            var attributesJson={
                "EVENTID":guid,
                "MAPFEATURENAME":"JS测试",
                "MAPFEATURETYPE":"1",
                "MAPFEATUREDESCRIB":"",
                "VISIBLERANGE":1,
                "AUDITFLAG":0,
                "TOGISFLAG":0,
                "DEPARTMENTID":"01",
                "DEPARTMENTNAME":"中国石油天然气股份有限公司",
            };
            graphicJson.attributes=attributesJson;
            if(graphicJson.symbol.imageData){//如果是BASE64编码图片
                graphicJson.symbol.imageData = "imageData";
            }
            var plotJson={
                "uid":guid,
                "plotName":"JS测试",
                "featureType":"1",
                "describ":"",
                "isAllVisible":1,
                "graphicJson":graphicJson
            }
            //增加标绘时数据结构相差太大，应重写
            this.insertPlot(JSON.stringify(plotJson));//插入数据库
            graphic.attributes=attributesJson;
            this.layer.add(graphic);
        },
        insertPlot:function(plotJson){
            //从服务器获取数据来的
            /*dojo.xhrPost({
                url:configProject.mapFeatureInsert,
                postData: {"plotJson": plotJson},
                handleAs:"text",
                content:{name:"标绘添加"},
                load:lang.hitch(this,function(response){
                    var dataJson = response;
                    console.log("插入标绘成功："+dataJson);
                    layer.msg(this.nls.insertSuccess);
                    this.shelter.hide();
                    if(dataJson==1){
                        this.queryPlot();
                    }
                }),
                error:lang.hitch(this,function(response){
                    console.log("插入标绘失败："+response);
                    layer.msg(this.nls.insertFail)
                    this.shelter.hide();
                }),
            });*/
            console.log("模拟插入标绘成功");
            layer.msg(this.nls.insertSuccess);
            this.shelter.hide();
            this.queryPlot();
        },
        //删除标绘
        _onDeleteCancel:function() {
            this.deleteDialog.hide();
        },
        _onDeleteClick:function() {
            this.shelter.show();
            if (this.deleteUIDArr.length > 0) {
                this.shelter.show();
                /*dojo.xhrPost({
                    url: configProject.mapFeatureDelete,
                    postData: {eventid: this.deleteUIDArr.toString()},
                    handleAs: "text",
                    content: {name: "标绘删除"},
                    load: lang.hitch(this, function (response) {
                        //var dataJson = "[{\"dataType\":1,\"dataList\":[{\"text\":\"穿越桩\",\"type\":\"point\",\"cpoints\":[13086047.287785465,4444367.495902104],\"attrs\":{\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"isAudited\":0,\"editFlag\":1,\"unitName\":\"中国石油天然气股份有限公司\",\"describ\":\"\",\"isTOGIS\":0,\"isAllVisible\":1,\"textFormat\":{\"bold\":false,\"leftMargin\":null,\"tabStops\":null,\"italic\":false,\"rightMargin\":null,\"size\":24,\"indent\":null,\"kerning\":null,\"leading\":null,\"blockIndent\":null,\"color\":16711680,\"bullet\":null,\"font\":\"微软雅黑\",\"display\":\"block\",\"letterSpacing\":null,\"underline\":false,\"target\":null,\"url\":null,\"align\":null},\"plotName\":\"穿越桩\",\"contacts\":\"\",\"unitCode\":\"01\",\"uid\":\"BFD8D211-5CE9-CF5A-527D-3205E4744AA0\",\"isTextVisible\":0,\"featureType\":\"1\",\"phoneNumber\":\"\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\"},\"textformat\":{\"size\":24,\"font\":\"微软雅黑\",\"weight\":\"normal\",\"style\":\"normal\",\"decoration\":\"none\",\"color\":16711680},\"wkid\":102113,\"symbol\":{\"size\":11.25,\"type\":\"esriSMS\",\"style\":\"esriSMSCircle\",\"outline\":{\"color\":[0,0,0,255],\"width\":1.5},\"color\":[255,0,0,255]},\"editFlag\":1},{\"attrs\":{\"featureType\":\"0\",\"isAudited\":0,\"contacts\":\"\",\"unitCode\":\"01\",\"isTextVisible\":1,\"unitName\":\"PIS项目组\",\"plotName\":\"警示牌\",\"isTOGIS\":0,\"unitID\":\"25c85e40-4b04-4151-903f-a45af2e21e7f\",\"describ\":\"\",\"isAllVisible\":1,\"uid\":\"51D790B5-6A6E-A78E-40C9-061CDC3934D7\",\"editFlag\":1,\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"phoneNumber\":\"\"},\"wkid\":102113,\"text\":\"警示牌\",\"textformat\":{\"size\":18,\"color\":16711680,\"style\":\"normal\",\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"cpoints\":[13071190.87825754,4477829.00084878],\"symbol\":{\"width\":26.25,\"url\":\"assets/images/drawicos/warnBoard.png\",\"height\":26.25,\"type\":\"esriPMS\"},\"type\":\"picpoint\",\"editFlag\":1},{\"symbol\":{\"outline\":{\"width\":0.75,\"style\":\"esriSLSSolid\",\"color\":[255,0,0,128],\"type\":\"esriSLS\"},\"style\":\"esriSFSSolid\",\"color\":[0,255,0,128],\"type\":\"esriSFS\"},\"wkid\":102113,\"text\":\"分队方向\",\"cpoints\":[13083448.428823773,4385358.110065994,13094149.612783693,4427551.349679391],\"attrs\":{\"describ\":\"\",\"isAudited\":0,\"phoneNumber\":\"\",\"uid\":\"309E5A0C-1888-287F-80FF-C382751D05A1\",\"isAllVisible\":1,\"plotName\":\"分队方向\",\"isTextVisible\":1,\"contacts\":\"\",\"unitCode\":\"01\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"isTOGIS\":0,\"featureType\":\"0\",\"unitName\":\"中国石油天然气股份有限公司\"},\"textformat\":{\"size\":18,\"style\":\"normal\",\"color\":65535,\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"type\":\"squadcombat\",\"editFlag\":1},{\"text\":\"\",\"wkid\":102113,\"cpoints\":[12958506.542276833,4662039.21669011,12859444.15361927,4534114.206152073,12855163.680035302,4665463.5955572855],\"type\":\"multipoint\",\"attrs\":{\"describ\":\"\",\"featureType\":\"2\",\"unitCode\":\"01\",\"contacts\":\"\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"isAllVisible\":1,\"uid\":\"BA929818-98F9-4D2A-51AF-6C195642604B\",\"isTextVisible\":0,\"unitName\":\"中国石油天然气股份有限公司\",\"isAudited\":0,\"phoneNumber\":\"\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"isTOGIS\":0,\"plotName\":\"自定义多点\"},\"symbol\":{\"style\":\"esriSMSCircle\",\"outline\":{\"width\":1.5,\"color\":[0,0,0,255]},\"size\":18.75,\"type\":\"esriSMS\",\"color\":[255,0,0,255]},\"textformat\":{\"weight\":\"normal\",\"size\":18,\"color\":16711680,\"font\":\"微软雅黑\",\"style\":\"normal\",\"decoration\":\"none\"},\"editFlag\":1},{\"cpoints\":[13053190.831177108,4429699.23017418,13060375.911835903,4423890.016024515],\"wkid\":102113,\"text\":\"\",\"type\":\"rectangle\",\"attrs\":{\"unitCode\":\"01\",\"isTOGIS\":0,\"isTextVisible\":0,\"featureType\":\"0\",\"isAllVisible\":1,\"unitName\":\"中国石油天然气股份有限公司\",\"contacts\":\"\",\"plotName\":\"圆形\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"describ\":\"\",\"phoneNumber\":\"\",\"isAudited\":0,\"uid\":\"C243799D-01A2-0D82-CCE4-334702FDEE1D\",\"textFormat\":{\"kerning\":null,\"leading\":null,\"blockIndent\":null,\"color\":16711680,\"bullet\":null,\"font\":\"微软雅黑\",\"display\":\"block\",\"letterSpacing\":null,\"underline\":false,\"target\":null,\"url\":null,\"align\":null,\"bold\":false,\"leftMargin\":null,\"tabStops\":null,\"italic\":false,\"rightMargin\":null,\"size\":18,\"indent\":null},\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\"},\"textformat\":{\"style\":\"normal\",\"color\":16711680,\"font\":\"微软雅黑\",\"weight\":\"normal\",\"size\":24,\"decoration\":\"none\"},\"symbol\":{\"type\":\"esriSFS\",\"outline\":{\"type\":\"esriSLS\",\"style\":\"esriSLSSolid\",\"color\":[255,0,0,128],\"width\":0.75},\"style\":\"esriSFSSolid\",\"color\":[0,255,0,128]},\"editFlag\":1},{\"symbol\":{\"width\":1.5,\"style\":\"esriSLSSolid\",\"color\":[0,255,0,255],\"type\":\"esriSLS\"},\"wkid\":102113,\"text\":\"自定义折线\",\"cpoints\":[13046147.159020634,4449259.465712375,13093843.864670582,4416238.66949318,13042478.181662949,4355700.54309132,12942804.29677908,4400951.2638361445],\"attrs\":{\"describ\":\"\",\"isAudited\":0,\"phoneNumber\":\"\",\"uid\":\"5DD06C08-7512-29E2-1B5F-371292D5F5F0\",\"isAllVisible\":1,\"plotName\":\"自定义折线\",\"isTextVisible\":1,\"contacts\":\"\",\"unitCode\":\"01\",\"textFormat\":{\"bullet\":null,\"size\":24,\"kerning\":null,\"font\":\"微软雅黑\",\"letterSpacing\":null,\"underline\":null,\"italic\":null,\"url\":null,\"align\":null,\"rightMargin\":null,\"leftMargin\":null,\"tabStops\":null,\"color\":16711680,\"bold\":null,\"leading\":null,\"target\":null,\"blockIndent\":null,\"display\":\"block\",\"indent\":null},\"editFlag\":1,\"isTOGIS\":0,\"featureType\":\"0\",\"unitName\":\"中国石油天然气股份有限公司\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\"},\"textformat\":{\"size\":24,\"style\":\"normal\",\"color\":153,\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"type\":\"polyline\",\"editFlag\":1}],\"dataCount\":6}]";
                        var dataJson = response;
                        console.log("标绘删除action成功：" + dataJson);
                        //this.deleteDialog.hide();
                        /!*var myDialog = new Dialog({
                         title: this.nls.dialogTitle,
                         style: "width: 200px"
                         });
                         myDialog.set("content", this.nls.clearSucc);
                         myDialog.show();*!/
                        layer.msg(this.nls.clearSucc);
                        this.shelter.hide();
                        this.queryPlot();
                        this.grid.rowSelectCell.toggleAllSelection(false);
                    }),
                    error: lang.hitch(this, function (response) {
                        console.log("删除失败：" + response);
                        //this.deleteDialog.hide();
                        layer.msg(this.nls.deleteFail);
                        this.shelter.hide();
                    }),
                });*/
                console.log("模拟标绘删除action成功");
                layer.msg(this.nls.clearSucc);
                this.shelter.hide();
                this.queryPlot();
                this.grid.rowSelectCell.toggleAllSelection(false);
            }
        },
        //编辑标绘
        editPlot:function(graphic,oprationType){
            if(oprationType=="cmitem_edit"){
                this.map.infoWindow.setTitle(this.nls.property);
                this.editInfoWindow=new EditInfoWindow({
                    map:this.map,
                    graphic:graphic
                });
                /*this.map.infoWindow.setContent(this.editInfoWindow.domNode);
                this.map.infoWindow.show(this._getGraphicCentrePoint(graphic));*/
                var windowContent= lang.hitch(this,function() {
                    var divContent = new ContentPane({
                        content:this.editInfoWindow.domNode,
                        style:"padding:0px"
                    });
                    return this.editInfoWindow.domNode;
                });
                var layerInfoTemplate =new InfoTemplate(this.nls.property,windowContent);//自定义地图info内容
                var infoGraphics=[new Graphic(this._getGraphicCentrePoint(graphic), null, null, layerInfoTemplate)];
                this.map.infoWindow.setFeatures(infoGraphics);
                this.map.infoWindow.show(this._getGraphicCentrePoint(graphic));
            }else{
                this.activateToolbar(graphic,oprationType);
            }
        },
        activateToolbar: function (graphic,oprationType) {
            var tool = 0;
            //tool = tool | Edit.MOVE;
            //tool = tool | Edit.EDIT_VERTICES;
            //tool = tool | Edit.SCALE;
            //tool = tool | Edit.ROTATE;
            switch(oprationType){
                case "cmitem_shap":
                    if(graphic.geometry.type!="ponit"){
                        tool = tool | Edit.EDIT_VERTICES;
                    }
                    break;
                case "cmitem_move":
                    tool = tool | Edit.MOVE;
                    break;
                case "cmitem_rotate":
                    if(graphic.geometry.type!="ponit"){
                        tool = tool | Edit.ROTATE | Edit.SCALE;
                    }
                    break;
                case "cmitem_edit":

                    break;
                case "cmitem_delete":
                    this.deleteUIDArr=[];
                    this.deleteUIDArr.push(graphic.attributes.EVENTID);
                    if (this.deleteUIDArr.length>0) {
                        //this.deleteDialog.show();
                        var popup = new Message({
                            message: this.nls.dialogLabel,
                            titleLabel: this.nls.dialogTitle,
                            autoHeight: true,
                            buttons: [{
                                label: this.nls.okLabel,
                                onClick: lang.hitch(this, function() {
                                    this._onDeleteClick();
                                    popup.close();
                                })
                            }, {
                                label: this.nls.cancelLabel
                            }]
                        });
                        /*var popup = new Popup({
                            width: 340,
                            autoHeight: true,
                            titleLabel: this.nls.dialogTitle,
                            content: this.nls.dialogLabel,
                            onClose: lang.hitch(this, function(){
                                //sortFields.destroy();
                            }),
                            buttons: [{
                                label: this.nls.okLabel,
                                onClick: lang.hitch(this, function(){
                                    this._onDeleteClick();
                                    popup.close();
                                })
                            }, {
                                label: this.nls.cancelLabel,
                                classNames: ['jimu-btn-vacation'],
                                onClick: lang.hitch(this, function(){
                                    popup.close();
                                })
                            }]
                        });*/
                    }
                    break;
                case "delete_ico":
                    this.deleteUIDArr=[];
                    this.deleteUIDArr.push(graphic.attributes.EVENTID);
                    if (this.deleteUIDArr.length>0) {
                        //this.deleteDialog.show();
                        var popup = new Message({
                            message: this.nls.dialogLabel,
                            titleLabel: this.nls.dialogTitle,
                            autoHeight: true,
                            buttons: [{
                                label: this.nls.okLabel,
                                onClick: lang.hitch(this, function() {
                                    this._onDeleteClick();
                                    popup.close();
                                })
                            }, {
                                label: this.nls.cancelLabel
                            }]
                        });
                    }
                    break;
            }

            // enable text editing if a graphic uses a text symbol
            if (graphic.symbol.declaredClass === "esri.symbol.TextSymbol") {
                tool = tool | Edit.EDIT_TEXT;
            }
            //specify toolbar options
            var options = {
                allowAddVertices: false,
                allowDeleteVertices: false,
                uniformScaling: false
            };
            this.editToolbar.activate(tool, graphic, options);
            this.activeEditPlot=graphic;
            this._enableOperationBtn(1);
        },
        cancelEdit:function(){
            this._enableOperationBtn(0);
            this.activeEditPlot=null;
            this.editToolbar.deactivate();
            this.map.infoWindow.hide();
            this.queryPlot();
        },
        _onSaveEdit:function(){
            if(this.activeEditPlot){
                this.saveEdit(this.activeEditPlot);
            }
        },
        saveEdit:function(activeEditPlot){
            if(activeEditPlot){
                this.shelter.show();
                /*dojo.xhrPost({
                    url: configProject.mapFeatureUpdate,
                    postData: {eventid: activeEditPlot.attributes.EVENTID,
                        plotJson:this.getGraphicJson(activeEditPlot)},
                    handleAs: "text",
                    content: {name: "标绘编辑"},
                    load: lang.hitch(this, function (response) {
                        //var dataJson = "[{\"dataType\":1,\"dataList\":[{\"text\":\"穿越桩\",\"type\":\"point\",\"cpoints\":[13086047.287785465,4444367.495902104],\"attrs\":{\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"isAudited\":0,\"editFlag\":1,\"unitName\":\"中国石油天然气股份有限公司\",\"describ\":\"\",\"isTOGIS\":0,\"isAllVisible\":1,\"textFormat\":{\"bold\":false,\"leftMargin\":null,\"tabStops\":null,\"italic\":false,\"rightMargin\":null,\"size\":24,\"indent\":null,\"kerning\":null,\"leading\":null,\"blockIndent\":null,\"color\":16711680,\"bullet\":null,\"font\":\"微软雅黑\",\"display\":\"block\",\"letterSpacing\":null,\"underline\":false,\"target\":null,\"url\":null,\"align\":null},\"plotName\":\"穿越桩\",\"contacts\":\"\",\"unitCode\":\"01\",\"uid\":\"BFD8D211-5CE9-CF5A-527D-3205E4744AA0\",\"isTextVisible\":0,\"featureType\":\"1\",\"phoneNumber\":\"\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\"},\"textformat\":{\"size\":24,\"font\":\"微软雅黑\",\"weight\":\"normal\",\"style\":\"normal\",\"decoration\":\"none\",\"color\":16711680},\"wkid\":102113,\"symbol\":{\"size\":11.25,\"type\":\"esriSMS\",\"style\":\"esriSMSCircle\",\"outline\":{\"color\":[0,0,0,255],\"width\":1.5},\"color\":[255,0,0,255]},\"editFlag\":1},{\"attrs\":{\"featureType\":\"0\",\"isAudited\":0,\"contacts\":\"\",\"unitCode\":\"01\",\"isTextVisible\":1,\"unitName\":\"PIS项目组\",\"plotName\":\"警示牌\",\"isTOGIS\":0,\"unitID\":\"25c85e40-4b04-4151-903f-a45af2e21e7f\",\"describ\":\"\",\"isAllVisible\":1,\"uid\":\"51D790B5-6A6E-A78E-40C9-061CDC3934D7\",\"editFlag\":1,\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"phoneNumber\":\"\"},\"wkid\":102113,\"text\":\"警示牌\",\"textformat\":{\"size\":18,\"color\":16711680,\"style\":\"normal\",\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"cpoints\":[13071190.87825754,4477829.00084878],\"symbol\":{\"width\":26.25,\"url\":\"assets/images/drawicos/warnBoard.png\",\"height\":26.25,\"type\":\"esriPMS\"},\"type\":\"picpoint\",\"editFlag\":1},{\"symbol\":{\"outline\":{\"width\":0.75,\"style\":\"esriSLSSolid\",\"color\":[255,0,0,128],\"type\":\"esriSLS\"},\"style\":\"esriSFSSolid\",\"color\":[0,255,0,128],\"type\":\"esriSFS\"},\"wkid\":102113,\"text\":\"分队方向\",\"cpoints\":[13083448.428823773,4385358.110065994,13094149.612783693,4427551.349679391],\"attrs\":{\"describ\":\"\",\"isAudited\":0,\"phoneNumber\":\"\",\"uid\":\"309E5A0C-1888-287F-80FF-C382751D05A1\",\"isAllVisible\":1,\"plotName\":\"分队方向\",\"isTextVisible\":1,\"contacts\":\"\",\"unitCode\":\"01\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"isTOGIS\":0,\"featureType\":\"0\",\"unitName\":\"中国石油天然气股份有限公司\"},\"textformat\":{\"size\":18,\"style\":\"normal\",\"color\":65535,\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"type\":\"squadcombat\",\"editFlag\":1},{\"text\":\"\",\"wkid\":102113,\"cpoints\":[12958506.542276833,4662039.21669011,12859444.15361927,4534114.206152073,12855163.680035302,4665463.5955572855],\"type\":\"multipoint\",\"attrs\":{\"describ\":\"\",\"featureType\":\"2\",\"unitCode\":\"01\",\"contacts\":\"\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"isAllVisible\":1,\"uid\":\"BA929818-98F9-4D2A-51AF-6C195642604B\",\"isTextVisible\":0,\"unitName\":\"中国石油天然气股份有限公司\",\"isAudited\":0,\"phoneNumber\":\"\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"isTOGIS\":0,\"plotName\":\"自定义多点\"},\"symbol\":{\"style\":\"esriSMSCircle\",\"outline\":{\"width\":1.5,\"color\":[0,0,0,255]},\"size\":18.75,\"type\":\"esriSMS\",\"color\":[255,0,0,255]},\"textformat\":{\"weight\":\"normal\",\"size\":18,\"color\":16711680,\"font\":\"微软雅黑\",\"style\":\"normal\",\"decoration\":\"none\"},\"editFlag\":1},{\"cpoints\":[13053190.831177108,4429699.23017418,13060375.911835903,4423890.016024515],\"wkid\":102113,\"text\":\"\",\"type\":\"rectangle\",\"attrs\":{\"unitCode\":\"01\",\"isTOGIS\":0,\"isTextVisible\":0,\"featureType\":\"0\",\"isAllVisible\":1,\"unitName\":\"中国石油天然气股份有限公司\",\"contacts\":\"\",\"plotName\":\"圆形\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\",\"describ\":\"\",\"phoneNumber\":\"\",\"isAudited\":0,\"uid\":\"C243799D-01A2-0D82-CCE4-334702FDEE1D\",\"textFormat\":{\"kerning\":null,\"leading\":null,\"blockIndent\":null,\"color\":16711680,\"bullet\":null,\"font\":\"微软雅黑\",\"display\":\"block\",\"letterSpacing\":null,\"underline\":false,\"target\":null,\"url\":null,\"align\":null,\"bold\":false,\"leftMargin\":null,\"tabStops\":null,\"italic\":false,\"rightMargin\":null,\"size\":18,\"indent\":null},\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\"},\"textformat\":{\"style\":\"normal\",\"color\":16711680,\"font\":\"微软雅黑\",\"weight\":\"normal\",\"size\":24,\"decoration\":\"none\"},\"symbol\":{\"type\":\"esriSFS\",\"outline\":{\"type\":\"esriSLS\",\"style\":\"esriSLSSolid\",\"color\":[255,0,0,128],\"width\":0.75},\"style\":\"esriSFSSolid\",\"color\":[0,255,0,128]},\"editFlag\":1},{\"symbol\":{\"width\":1.5,\"style\":\"esriSLSSolid\",\"color\":[0,255,0,255],\"type\":\"esriSLS\"},\"wkid\":102113,\"text\":\"自定义折线\",\"cpoints\":[13046147.159020634,4449259.465712375,13093843.864670582,4416238.66949318,13042478.181662949,4355700.54309132,12942804.29677908,4400951.2638361445],\"attrs\":{\"describ\":\"\",\"isAudited\":0,\"phoneNumber\":\"\",\"uid\":\"5DD06C08-7512-29E2-1B5F-371292D5F5F0\",\"isAllVisible\":1,\"plotName\":\"自定义折线\",\"isTextVisible\":1,\"contacts\":\"\",\"unitCode\":\"01\",\"textFormat\":{\"bullet\":null,\"size\":24,\"kerning\":null,\"font\":\"微软雅黑\",\"letterSpacing\":null,\"underline\":null,\"italic\":null,\"url\":null,\"align\":null,\"rightMargin\":null,\"leftMargin\":null,\"tabStops\":null,\"color\":16711680,\"bold\":null,\"leading\":null,\"target\":null,\"blockIndent\":null,\"display\":\"block\",\"indent\":null},\"editFlag\":1,\"isTOGIS\":0,\"featureType\":\"0\",\"unitName\":\"中国石油天然气股份有限公司\",\"unitID\":\"3d1352d3-56d8-4674-9049-fe72b2811ee4\",\"userEventid\":\"37954ef0-f3ac-11de-b510-001c25a2b092\"},\"textformat\":{\"size\":24,\"style\":\"normal\",\"color\":153,\"weight\":\"normal\",\"font\":\"微软雅黑\",\"decoration\":\"none\"},\"type\":\"polyline\",\"editFlag\":1}],\"dataCount\":6}]";
                        var dataJson = response;
                        if(dataJson){
                            console.log("编辑成功：" + dataJson);
                            layer.msg(this.nls.editSuccess);
                            this.shelter.hide();
                            this.grid.rowSelectCell.toggleAllSelection(false);
                            this.cancelEdit();
                        }
                    }),
                    error: lang.hitch(this, function (response) {
                        console.log("编辑失败：" + response);
                        layer.msg(this.nls.editFail);
                        this.shelter.hide();
                        this.cancelEdit();
                    }),
                });*/
                console.log("编辑成功");
                layer.msg(this.nls.editSuccess);
                this.shelter.hide();
                this.grid.rowSelectCell.toggleAllSelection(false);
                this.cancelEdit();
            }
        },
        getGraphicJson:function(graphic){
            var graphicJson=graphic.toJson();
            if(graphicJson.symbol.imageData){//如果是BASE64编码图片
                graphicJson.symbol.imageData = "imageData";
            }
            var plotJson={
                "plotName":"JS测试",
                "featureType":"1",
                "describ":"",
                "isAllVisible":1,
                "graphicJson":graphicJson
            }
            return JSON.stringify(plotJson);
        },
        _onEditEnd:function(graphic){
            this.saveEdit(graphic);
        },

        cellClickGrid:function(e){
            var item=this.grid.getItem(e.rowIndex);
            var graphic;
            for(var i= 0,l=this.layer.graphics.length;i<l;i++){
                if(this.layer.graphics[i].attributes.EVENTID==item.uid){
                    graphic=this.layer.graphics[i];
                }
            }
            if(graphic){
                if(graphic.geometry.type=="point"){
                    //this.map.setLevel(6);
                    this.map.centerAt(graphic.geometry);
                }else if(graphic.geometry.type=="multipoint"||graphic.geometry.type=="multipoint"||graphic.geometry.type=="polyline"||graphic.geometry.type=="polygon"||graphic.symbol.declaredClass === "esri.symbol.TextSymbol"){
                    //this.map.setExtent(graphic.geometry.getExtent());
                    this.map.centerAt(graphic.geometry.getExtent().getCenter());
                }
                commonUtils.flashGraphic(graphic,this.layer,true);
            }
        },

        _getGraphicCentrePoint:function(graphic){
            var graphicPoint;
            if(graphic.geometry.type=="point"){
                graphicPoint=graphic.geometry;
            }else if(graphic.geometry.type=="multipoint"||graphic.geometry.type=="multipoint"||graphic.geometry.type=="polyline"||graphic.geometry.type=="polygon"||graphic.symbol.declaredClass === "esri.symbol.TextSymbol"){
                graphicPoint=graphic.geometry.getExtent().getCenter();
            }
            return graphicPoint;
        },

        _onClearClick:function(){
            this.deleteUIDArr = [];
            var items = this.grid.selection.getSelected();
            for(var i=0;i<items.length;i++){
                this.deleteUIDArr.push(items[i].uid[0]);
            }
            if (this.deleteUIDArr.length>0) {
                //this.deleteDialog.show();
                var popup = new Message({
                    message: this.nls.dialogLabel,
                    titleLabel: this.nls.dialogTitle,
                    autoHeight: true,
                    buttons: [{
                        label: this.nls.okLabel,
                        onClick: lang.hitch(this, function() {
                            this._onDeleteClick();
                            popup.close();
                        })
                    }, {
                        label: this.nls.cancelLabel
                    }]
                });
            }
        },

        _enableOperationBtn: function(isEnable){
            if(isEnable){
                html.removeClass(this.saveBtn, 'jimu-state-disabled');
                html.removeClass(this.cancelBtn, 'jimu-state-disabled');
            }else{
                html.addClass(this.saveBtn, 'jimu-state-disabled');
                html.addClass(this.cancelBtn, 'jimu-state-disabled');
            }
        },
        //--------------------------------------------------------------------------------------------------------------
    });
  });