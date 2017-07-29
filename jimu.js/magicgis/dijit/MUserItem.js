define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'esri/graphic',
        'dojo/_base/array',
        'dojox/xml/parser',
        'esri/geometry/Point',
        'esri/geometry/Polygon',
        'esri/geometry/Polyline',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        'esri/Color',
        'dojo/on','dojo/Deferred','esri/symbols/TextSymbol','dojo/query',"esri/symbols/PictureMarkerSymbol",'dijit/_WidgetBase',
        'dijit/_TemplatedMixin','jimu/magicgis/util/commonUtils',"dijit/form/HorizontalSlider","../util/services/HistoryPointsService",'dojo/dom-style',
        'jimu/dijit/LoadingIndicator',
        "jimu/magicgis/configProject",
        'dojo/text!./templates/MUserItem.html',
        'dijit/form/NumberSpinner',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               Graphic,array,parser,Point,Polygon,Polyline,
               SimpleLineSymbol,SimpleFillSymbol,
               Color,on,Deferred,TextSymbol,query,PictureMarkerSymbol,_WidgetBase,_TemplatedMixin,commonUtils,HorizontalSlider,
               HistoryPointsService,domStyle,LoadingIndicator,configProject,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-museritem',
            name: 'MUserItem',
            slider:null,
            ws:null,
            mapPoints:[],
            moveTally:null,
            moveRunning:null,
            pathPersonIcon:null,
            textGraphic:null,
            labelSymbol:null,
            pathLineGraphics:[],
            pathLineLengths:null,//计算长度
            pointList:null,
            personSymbol:null,

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
                if(this.data.GETPOINT>0){
                    this.playLine.src="jimu.js/magicgis/images/monitor/play_red.png";
                    this.playLine.title=this.nls.trakplay;
                }else{
                    this.playLine.src="jimu.js/magicgis/images/monitor/play_gray.png";
                    this.playLine.title=this.nls.noreach;
                }
                this.personName.innerHTML=this.data.PERSONNAME;
                this.personLength.innerHTML=this.data.PERSONLENGTH+"("+this.nls.kilometer+")";
                this.ginspectTimer.innerHTML=this.data.INSPECTTIME;
                this.getPoint.innerHTML=this.data.GETPOINT+"/"+this.data.ALLPOINT;
                this.personNamePLAY.innerHTML=this.data.PERSONNAME;

                if (!this.mapLoading) {
                    this.mapLoading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.mapLoading.placeAt(dojo.byId("minitorSettingContent"));
                this.slider= new HorizontalSlider({
                    name: "slider",
                    value: 0,
                    minimum: 0,
                    maximum: 100,
                    showButtons:false,
                    intermediateChanges: true,
                    clickSelect:false,
                    style: "width:100%;height:20px;"
                }, this.sliderDiv);
                this.slider.startup();
                this.connect(this, "resize", function () {
                    this.slider.resize();
                });

                domStyle.set(this.devShowLine,"visibility","hidden");
                domStyle.set(this.appShowLine,"visibility","hidden");

                this.moveTally=0;
            },

            startup: function () {
                this.inherited(arguments);
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(window.jimuConfig.layoutId);
                this._changeStates("NORMAL");
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

            _onUserKeyPointClick:function(){
                topic.publish('UserKeyPointChange',this.data);
            },

            _showLineClick:function(){
                if(this.data.STATUS=='02'){ //状态为离线时，不允许回放轨迹（因为还未有GPS信息）
                    return;
                }
                this._onStopPath();
                this._allToNormal();
                this._changeStates("PLAY");
                //topic.publish('TrackChange',this.data,"0");
                this.showGpsLine(this.data,"0");
            },

            //data是巡线工属性数据 isApp用于区分app=1还是普通设备=0
            showGpsLine:function(data,isApp){
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.ws.url = configProject.historyPoints;
                }
                this.mapLoading.show();
                this.map.infoWindow.hide();
                this.isApp=isApp;
                this.ws.queryHistoryPoints(lang.hitch(this,this.trackResponse),lang.hitch(this,this.reportError),data.PERSONID,data.selectDate,isApp);*/
                this.trackResponse(null);
            },

            trackResponse:function(response){
                //var dataJson = response.getReturn();
                var dataJson = '{"hasApp":"0","topics":[{"X":116.796988,"Y":36.327638,"T":"2017-07-29 00:50:19"},{"X":116.796938,"Y":36.3277,"T":"2017-07-29 00:51:12"},{"X":116.796938,"Y":36.3277,"T":"2017-07-29 00:51:53"},{"X":116.796893,"Y":36.327615,"T":"2017-07-29 00:52:36"},{"X":116.79696,"Y":36.327688,"T":"2017-07-29 00:53:17"},{"X":116.796973,"Y":36.327668,"T":"2017-07-29 00:53:59"},{"X":116.796945,"Y":36.327678,"T":"2017-07-29 00:54:41"},{"X":116.796855,"Y":36.3276,"T":"2017-07-29 00:55:17"},{"X":116.796855,"Y":36.3276,"T":"2017-07-29 07:22:19"},{"X":116.796921,"Y":36.327596,"T":"2017-07-29 07:23:43"},{"X":116.796873,"Y":36.327585,"T":"2017-07-29 07:24:25"},{"X":116.796875,"Y":36.327566,"T":"2017-07-29 07:25:06"},{"X":116.796971,"Y":36.327485,"T":"2017-07-29 07:25:48"},{"X":116.79683,"Y":36.32756,"T":"2017-07-29 07:26:30"},{"X":116.796901,"Y":36.327511,"T":"2017-07-29 07:27:12"},{"X":116.796876,"Y":36.327675,"T":"2017-07-29 07:27:48"},{"X":116.797051,"Y":36.327536,"T":"2017-07-29 07:34:34"},{"X":116.796975,"Y":36.327533,"T":"2017-07-29 07:35:17"},{"X":116.797475,"Y":36.327501,"T":"2017-07-29 07:35:58"},{"X":116.797501,"Y":36.326555,"T":"2017-07-29 07:36:40"},{"X":116.797516,"Y":36.326438,"T":"2017-07-29 07:37:22"},{"X":116.79777,"Y":36.326343,"T":"2017-07-29 07:38:03"},{"X":116.79766,"Y":36.326455,"T":"2017-07-29 07:38:45"},{"X":116.797408,"Y":36.326673,"T":"2017-07-29 07:39:22"},{"X":116.797718,"Y":36.326378,"T":"2017-07-29 07:41:49"},{"X":116.797476,"Y":36.326566,"T":"2017-07-29 07:42:29"},{"X":116.797528,"Y":36.326578,"T":"2017-07-29 07:43:11"},{"X":116.797548,"Y":36.326565,"T":"2017-07-29 07:43:53"},{"X":116.797358,"Y":36.326541,"T":"2017-07-29 07:44:34"},{"X":116.797541,"Y":36.326528,"T":"2017-07-29 07:45:16"},{"X":116.79745,"Y":36.326608,"T":"2017-07-29 07:45:58"},{"X":116.79747,"Y":36.326546,"T":"2017-07-29 07:46:34"},{"X":116.798463,"Y":36.326516,"T":"2017-07-29 07:48:19"},{"X":116.798333,"Y":36.326771,"T":"2017-07-29 07:49:06"},{"X":116.797515,"Y":36.326555,"T":"2017-07-29 07:49:47"},{"X":116.797518,"Y":36.327288,"T":"2017-07-29 07:50:29"},{"X":116.797051,"Y":36.327475,"T":"2017-07-29 07:51:11"},{"X":116.797065,"Y":36.327611,"T":"2017-07-29 07:51:52"},{"X":116.797,"Y":36.327603,"T":"2017-07-29 07:52:34"},{"X":116.79695,"Y":36.327643,"T":"2017-07-29 07:53:11"},{"X":116.797003,"Y":36.327691,"T":"2017-07-29 08:13:34"},{"X":116.79703,"Y":36.327656,"T":"2017-07-29 08:14:17"},{"X":116.797108,"Y":36.327511,"T":"2017-07-29 08:14:59"},{"X":116.79706,"Y":36.327611,"T":"2017-07-29 08:15:40"},{"X":116.796885,"Y":36.327778,"T":"2017-07-29 08:16:22"},{"X":116.797111,"Y":36.327466,"T":"2017-07-29 08:17:04"},{"X":116.796848,"Y":36.327698,"T":"2017-07-29 08:17:46"},{"X":116.797033,"Y":36.327508,"T":"2017-07-29 08:18:22"},{"X":116.796976,"Y":36.327568,"T":"2017-07-29 08:20:55"},{"X":116.797005,"Y":36.327483,"T":"2017-07-29 08:21:36"},{"X":116.796965,"Y":36.327476,"T":"2017-07-29 08:22:18"},{"X":116.796916,"Y":36.32759,"T":"2017-07-29 08:23:00"},{"X":116.798083,"Y":36.328865,"T":"2017-07-29 08:23:41"},{"X":116.7983,"Y":36.328896,"T":"2017-07-29 08:24:23"},{"X":116.79896,"Y":36.329871,"T":"2017-07-29 08:25:05"},{"X":116.799343,"Y":36.330328,"T":"2017-07-29 08:25:42"},{"X":116.797575,"Y":36.33071,"T":"2017-07-29 08:27:29"},{"X":116.797591,"Y":36.330696,"T":"2017-07-29 08:28:13"},{"X":116.796365,"Y":36.330295,"T":"2017-07-29 08:28:54"},{"X":116.796338,"Y":36.331595,"T":"2017-07-29 08:29:36"},{"X":116.796395,"Y":36.331975,"T":"2017-07-29 08:30:18"},{"X":116.796401,"Y":36.332738,"T":"2017-07-29 08:30:59"},{"X":116.79644,"Y":36.332825,"T":"2017-07-29 08:31:41"},{"X":116.796321,"Y":36.332128,"T":"2017-07-29 08:32:18"},{"X":116.794705,"Y":36.328743,"T":"2017-07-29 08:34:09"},{"X":116.793671,"Y":36.328265,"T":"2017-07-29 08:34:49"},{"X":116.79005,"Y":36.328406,"T":"2017-07-29 08:35:31"},{"X":116.789645,"Y":36.330673,"T":"2017-07-29 08:36:12"},{"X":116.788868,"Y":36.33401,"T":"2017-07-29 08:36:55"},{"X":116.787211,"Y":36.337571,"T":"2017-07-29 08:37:36"},{"X":116.787948,"Y":36.33923,"T":"2017-07-29 08:38:18"},{"X":116.791366,"Y":36.339796,"T":"2017-07-29 08:38:55"},{"X":116.792741,"Y":36.340586,"T":"2017-07-29 08:41:29"},{"X":116.792831,"Y":36.340566,"T":"2017-07-29 08:42:07"},{"X":116.791638,"Y":36.339915,"T":"2017-07-29 08:42:49"},{"X":116.788833,"Y":36.339393,"T":"2017-07-29 08:43:31"},{"X":116.78653,"Y":36.338553,"T":"2017-07-29 08:44:12"},{"X":116.787348,"Y":36.337116,"T":"2017-07-29 08:44:54"},{"X":116.788325,"Y":36.335068,"T":"2017-07-29 08:45:36"},{"X":116.78946,"Y":36.332543,"T":"2017-07-29 08:46:13"},{"X":116.7895,"Y":36.328218,"T":"2017-07-29 08:47:59"},{"X":116.789548,"Y":36.328163,"T":"2017-07-29 08:48:44"},{"X":116.78956,"Y":36.328141,"T":"2017-07-29 08:49:26"},{"X":116.789563,"Y":36.32756,"T":"2017-07-29 08:50:08"},{"X":116.789426,"Y":36.32493,"T":"2017-07-29 08:50:49"},{"X":116.789758,"Y":36.3226,"T":"2017-07-29 08:51:31"},{"X":116.792211,"Y":36.32246,"T":"2017-07-29 08:52:13"},{"X":116.79452,"Y":36.322371,"T":"2017-07-29 08:52:50"},{"X":116.799138,"Y":36.321645,"T":"2017-07-29 08:54:39"},{"X":116.799176,"Y":36.321751,"T":"2017-07-29 08:55:25"},{"X":116.799303,"Y":36.321555,"T":"2017-07-29 08:56:07"},{"X":116.800583,"Y":36.319718,"T":"2017-07-29 08:56:48"},{"X":116.801915,"Y":36.317863,"T":"2017-07-29 08:57:30"},{"X":116.802083,"Y":36.317041,"T":"2017-07-29 08:58:12"},{"X":116.80026,"Y":36.317145,"T":"2017-07-29 08:58:53"},{"X":116.799726,"Y":36.317018,"T":"2017-07-29 08:59:30"},{"X":116.799725,"Y":36.317,"T":"2017-07-29 09:02:34"},{"X":116.799725,"Y":36.317035,"T":"2017-07-29 09:03:17"},{"X":116.801806,"Y":36.317045,"T":"2017-07-29 09:03:59"},{"X":116.803815,"Y":36.316391,"T":"2017-07-29 09:04:40"},{"X":116.803411,"Y":36.314333,"T":"2017-07-29 09:05:22"},{"X":116.803333,"Y":36.312685,"T":"2017-07-29 09:06:04"},{"X":116.803028,"Y":36.311383,"T":"2017-07-29 09:06:45"},{"X":116.802076,"Y":36.310976,"T":"2017-07-29 09:07:22"},{"X":116.801901,"Y":36.310435,"T":"2017-07-29 09:09:14"},{"X":116.80194,"Y":36.310331,"T":"2017-07-29 09:09:54"},{"X":116.801945,"Y":36.31048,"T":"2017-07-29 09:10:36"},{"X":116.802063,"Y":36.310846,"T":"2017-07-29 09:11:17"},{"X":116.8026,"Y":36.31122,"T":"2017-07-29 09:11:59"},{"X":116.803828,"Y":36.310721,"T":"2017-07-29 09:12:41"},{"X":116.804696,"Y":36.310488,"T":"2017-07-29 09:13:23"},{"X":116.805828,"Y":36.310358,"T":"2017-07-29 09:13:59"},{"X":116.80907,"Y":36.30939,"T":"2017-07-29 09:15:54"},{"X":116.808548,"Y":36.308283,"T":"2017-07-29 09:16:37"},{"X":116.808043,"Y":36.307371,"T":"2017-07-29 09:17:18"},{"X":116.808083,"Y":36.307361,"T":"2017-07-29 09:18:00"},{"X":116.808166,"Y":36.307313,"T":"2017-07-29 09:18:42"},{"X":116.80806,"Y":36.307338,"T":"2017-07-29 09:19:23"},{"X":116.80817,"Y":36.307283,"T":"2017-07-29 09:20:05"},{"X":116.807876,"Y":36.30501,"T":"2017-07-29 09:20:42"},{"X":116.80735,"Y":36.30057,"T":"2017-07-29 09:22:34"},{"X":116.807138,"Y":36.300106,"T":"2017-07-29 09:23:13"},{"X":116.807148,"Y":36.299768,"T":"2017-07-29 09:23:55"},{"X":116.807805,"Y":36.299215,"T":"2017-07-29 09:24:37"},{"X":116.808566,"Y":36.299065,"T":"2017-07-29 09:25:18"},{"X":116.808843,"Y":36.300555,"T":"2017-07-29 09:26:00"},{"X":116.809271,"Y":36.301898,"T":"2017-07-29 09:26:42"},{"X":116.809883,"Y":36.3017,"T":"2017-07-29 09:27:19"},{"X":116.809746,"Y":36.299118,"T":"2017-07-29 09:29:09"},{"X":116.809483,"Y":36.298378,"T":"2017-07-29 09:29:51"},{"X":116.808595,"Y":36.297065,"T":"2017-07-29 09:30:32"},{"X":116.807816,"Y":36.296986,"T":"2017-07-29 09:31:14"},{"X":116.80881,"Y":36.296925,"T":"2017-07-29 09:31:56"},{"X":116.808758,"Y":36.295533,"T":"2017-07-29 09:32:38"},{"X":116.808545,"Y":36.294586,"T":"2017-07-29 09:33:19"},{"X":116.808361,"Y":36.293131,"T":"2017-07-29 09:33:56"},{"X":116.80928,"Y":36.292071,"T":"2017-07-29 09:35:54"},{"X":116.809146,"Y":36.292066,"T":"2017-07-29 09:36:36"},{"X":116.808956,"Y":36.292108,"T":"2017-07-29 09:37:18"},{"X":116.808445,"Y":36.293396,"T":"2017-07-29 09:38:00"},{"X":116.808523,"Y":36.293738,"T":"2017-07-29 09:38:42"},{"X":116.80856,"Y":36.293803,"T":"2017-07-29 09:39:24"},{"X":116.808575,"Y":36.294205,"T":"2017-07-29 09:40:05"},{"X":116.808966,"Y":36.295853,"T":"2017-07-29 09:40:42"},{"X":116.81012,"Y":36.299818,"T":"2017-07-29 09:42:29"},{"X":116.810645,"Y":36.300571,"T":"2017-07-29 09:43:14"},{"X":116.810066,"Y":36.301691,"T":"2017-07-29 09:43:56"},{"X":116.809325,"Y":36.302798,"T":"2017-07-29 09:44:37"},{"X":116.809181,"Y":36.30419,"T":"2017-07-29 09:45:19"},{"X":116.808935,"Y":36.305506,"T":"2017-07-29 09:46:01"},{"X":116.808731,"Y":36.306553,"T":"2017-07-29 09:46:42"},{"X":116.808713,"Y":36.308493,"T":"2017-07-29 09:47:20"},{"X":116.804281,"Y":36.316305,"T":"2017-07-29 09:49:09"},{"X":116.801936,"Y":36.318031,"T":"2017-07-29 09:49:51"},{"X":116.799006,"Y":36.321818,"T":"2017-07-29 09:50:34"},{"X":116.794783,"Y":36.322538,"T":"2017-07-29 09:51:16"},{"X":116.794546,"Y":36.32525,"T":"2017-07-29 09:51:57"},{"X":116.796078,"Y":36.326355,"T":"2017-07-29 09:52:39"},{"X":116.796983,"Y":36.327196,"T":"2017-07-29 09:53:21"},{"X":116.796808,"Y":36.32759,"T":"2017-07-29 09:53:58"}]}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    this.mapLoading.hide();
                    var jsonObj=dojo.fromJson(dataJson);
                    if(jsonObj.hasApp != "0"){
                        domStyle.set(this.devShowLine,"visibility","visible");//有app轨迹数据，则同时显示黑盒和app图标
                        domStyle.set(this.appShowLine,"visibility","visible");
                    }else{
                        domStyle.set(this.devShowLine,"visibility","hidden");
                        domStyle.set(this.appShowLine,"visibility","hidden");
                    }
                    //轨迹数据
                    this.pointList = jsonObj.topics;//JSON.parse(event.result as String) as Array;
                    var path = new Array();
                    // 将轨迹数据放入点集合中[轨迹回放所需要的点]【轨迹回放】
                    this.mapPoints.splice(0,this.mapPoints.length);
                    this.slider.maximum=this.pointList.length;
                    if(this.pointList.length>0){
                        for(var j=0; j<this.pointList.length; j++) {
                            var obj= this.pointList[j];
                            var lc_turn_X = commonUtils._lonToMercator(Number(obj.X));
                            var lc_turn_Y = commonUtils._latToMercator(Number(obj.Y));
                            // 将轨迹数据放入点集合中【轨迹回放】
                            this.mapPoints[j] = new Point(lc_turn_X, lc_turn_Y,this.map.spatialReference);
                            //this.mapPoints_len[j++] = new Point(Number(obj.X), Number(obj.Y),this.map.spatialReference);
                            //path[0][i++] = new Point(lc_turn_X,lc_turn_Y,this.map.spatialReference);
                            path[j] = [lc_turn_X,lc_turn_Y];
                        }

                        var line = new Polygon(this.map.spatialReference);
                        line.addRing(path);
                        var lineColor;
                        //当显示app轨迹时，不清空图层，保留黑盒的轨迹，用于对比
                        if(this.isApp != "1"){
                            this.map.graphics.clear();
                            lineColor = "#FF9900";//0xE100;//0x5D5D5D;
                        }else{
                            lineColor = "#E100";//0xC600;//0xE120E;//0x389A00;
                        }
                        var g = new Graphic(line,new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH,new Color(lineColor),3));
                        this.map.graphics.add(g);
                        this.map.setExtent(line.getExtent());
                        this.createFlagGraphic("b", new Point(path[0][0],path[0][1],this.map.spatialReference));
                        this.createFlagGraphic("e", new Point(path[this.pointList.length-1][0],path[this.pointList.length-1][1],this.map.spatialReference));
                    } else {
                        layer.msg(this.nls.traktips);
                    }
                }
            },

            createFlagGraphic:function(flag,mp){
                var url = "jimu.js/magicgis/images/monitor/";
                var pym;
                if (flag == "b") {
                    url += "m1.png";
                    pym = new PictureMarkerSymbol(url, 32, 44);
                } else {
                    url += "m2.png";
                    pym = new PictureMarkerSymbol(url, 22, 30);
                }
                var gp = new Graphic(mp, pym);
                this.map.graphics.add(gp);
            },

            reportError:function(response){
                this.mapLoading.hide();
                console.log("webservice失败"+response);
            },

            _onStopPath:function(){
                if(this.stop.src.indexOf("disabled")>0){
                    return;
                };
                this.play.src="jimu.js/magicgis/images/monitor/play.png";
                this.pause.src="jimu.js/magicgis/images/monitor/pause_disabled.png";
                this.stop.src="jimu.js/magicgis/images/monitor/stop_disabled.png";

                this.map.graphics.remove(this.pathPersonIcon);
                this.map.graphics.remove(this.textGraphic);
                for(var i=0;i<this.pathLineGraphics.length;i++){
                    this.map.graphics.remove(this.pathLineGraphics[i]);
                }
                this.pathLineGraphics.splice(0,this.pathLineGraphics.length);
                this.pathLineLengths=0;
                this.moveTally=0;
                this.slider.setValue(this.moveTally);
                this.sliderTimer.innerHTML="";
                this.stopMove();
            },

            _onPausePath:function(){
                if(this.pause.src.indexOf("disabled")>0){
                    return;
                };
                this.play.src="jimu.js/magicgis/images/monitor/play.png";
                this.pause.src="jimu.js/magicgis/images/monitor/pause_disabled.png";
                this.stop.src="jimu.js/magicgis/images/monitor/stop.png";

                this.stopMove();
            },

            _onStartPath:function(){
                if(this.play.src.indexOf("disabled")>0){
                    return;
                };
                this.play.src="jimu.js/magicgis/images/monitor/play_disabled.png";
                this.pause.src="jimu.js/magicgis/images/monitor/pause.png";
                this.stop.src="jimu.js/magicgis/images/monitor/stop.png";

                this.moveRunning = true;
                if(this.moveTally == 0){
                    this.map.graphics.remove(this.pathPersonIcon);
                    this.map.graphics.remove(this.textGraphic);
                    for(var i=0;i<this.pathLineGraphics.length;i++){
                        this.map.graphics.remove(this.pathLineGraphics[i]);
                    }
                    this.pathLineGraphics.splice(0,this.pathLineGraphics.length);
                    this.pathLineLengths=0;
                }
                this._moveCurrent();
            },

            _moveCurrent: function () {
                if (!this.moveRunning)
                    return;
                var start;
                if (this.moveTally == 0) {
                    this._createPathIcon(this.mapPoints[0]);
                }
                this.moveTally++;
                this.slider.value=this.moveTally;
                this.slider.setValue(this.moveTally);
                this.sliderTimer.innerHTML=this.pointList[this.moveTally].T;
                //this.slider.resize();
                $('#pathIcon').css({
                    top : this.mapPoints[this.moveTally - 1].y,
                    left : this.mapPoints[this.moveTally - 1].x
                });

                if (this.moveTally == (this.mapPoints.length - 1)) {
                    this.map.graphics.remove(this.pathPersonIcon);
                    this.map.graphics.remove(this.textGraphic);
                    this.moveTally=0;
                    this.slider.setValue(this.moveTally);
                    this.sliderTimer.innerHTML="";
                    //this.map.graphics.add(Typhoon.current.incidenceArea);
                    return;
                }

                this._drawPersonPath(this.moveTally);
                // }
                $('#pathIcon').animate({
                    top : this.mapPoints[this.moveTally].y,
                    left : this.mapPoints[this.moveTally].x
                }, {
                    duration : 600 + (-(this.playSpeed.value) * 60),
                    // easing : 'linear',
                    step : lang.hitch(this,this._updatePathIcon),
                    complete : lang.hitch(this,function() {
                        if (this.moveTally != (this.mapPoints - 1)) {
                            this._moveCurrent();
                        } else {
                            this.map.graphics.remove(this.pathPersonIcon);
                            this.map.graphics.remove(this.textGraphic);
                            this.stopMove();
                        }
                    })
                });
            },

            stopMove: function () {
                $('#pathIcon').stop();
                this.moveRunning = true;
            },

            _createPathIcon: function (point) {
                var pt = new Point(point.x, point.y, this.map.spatialReference);
                this.personSymbol = new PictureMarkerSymbol('jimu.js/magicgis/images/monitor/fontPer.png', 32, 32);
                this.pathPersonIcon = new Graphic(pt, this.personSymbol);
                this.map.graphics.add(this.pathPersonIcon);
                this.labelSymbol = new TextSymbol("");
                this.labelSymbol.setOffset(0, 25);
                this.labelSymbol.setColor(new Color([255, 0, 0,0.9]));
                this.textGraphic = new Graphic(pt, this.labelSymbol);
                this.map.graphics.add(this.textGraphic);
            },

            _updatePathIcon: function (now, fx) {
                var newPoint = this.pathPersonIcon.geometry;
                if (fx.prop == 'left') {
                    newPoint.setX(now);

                } else if (fx.prop == 'top') {
                    newPoint.setY(now);
                }
                //计算方向
                for(var i=this.moveTally; i < this.mapPoints.length-1; i++) {
                    var imgP = "jimu.js/magicgis/images/monitor/";
                    var cp1 = this.map.toScreen(this.mapPoints[this.moveTally]);
                    var cp2 = this.map.toScreen(this.mapPoints[this.moveTally+1]);
                    if (cp1.x == cp2.x && cp1.y == cp2.y) {
                        continue;
                    } else {
                        if (Math.abs(cp1.x-cp2.x) > Math.abs(cp1.y-cp2.y)) {
                            if(Math.abs(cp1.x - cp2.x)<2){
                                continue
                            }
                            if(cp1.x - cp2.x < 0) {
                                imgP += "rightPer.png";
                                this.personSymbol.setUrl(imgP);
                            } else {
                                imgP += "leftPer.png";
                                this.personSymbol.setUrl(imgP);
                            }
                        } else {
                            if (Math.abs(cp1.y - cp2.y)<2){
                                continue;
                            }
                            if (cp1.y - cp2.y < 0) {
                                imgP += "fontPer.png";
                                this.personSymbol.setUrl(imgP);
                            } else {
                                imgP += "backPer.png";
                                this.personSymbol.setUrl(imgP);
                            }
                        }
                        this.pathPersonIcon.setSymbol(this.personSymbol);
                    }
                }

                this.pathPersonIcon.setGeometry(newPoint);
                this.textGraphic.setGeometry(newPoint);
            },

            _drawPersonPath: function (moveTally) {
                var sls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 3);
                var polyline = new Polyline({
                    "paths" : [[[this.mapPoints[this.moveTally - 1].x, this.mapPoints[this.moveTally - 1].y], [this.mapPoints[this.moveTally].x, this.mapPoints[this.moveTally].y]]],
                    "spatialReference" : {
                        "wkid" : this.map.spatialReference
                    }
                });
                var lineGraphic = new Graphic(polyline, sls);
                this.pathLineGraphics.push(lineGraphic);
                this.map.graphics.add(lineGraphic);
                //显示标注（需计算长度）
                var distance=this.GetDistance(commonUtils._MercatorToLon(this.mapPoints[this.moveTally - 1].x), commonUtils._MercatorToLat(this.mapPoints[this.moveTally - 1].y),commonUtils._MercatorToLon(this.mapPoints[this.moveTally].x), commonUtils._MercatorToLat(this.mapPoints[this.moveTally].y));
                this.pathLineLengths+=distance;
                if(this.pathLineLengths < 1000) {
                    this.labelSymbol.setText(this.pointList[this.moveTally].T+" "+this.pathLineLengths.toFixed(0) + this.nls.meter);
                }else {
                    this.labelSymbol.setText(this.pointList[this.moveTally].T+" "+(this.pathLineLengths/1000).toFixed(2)+this.nls.kilometer);
                }
            },

            GetDistance:function(lat1,lng1,lat2,lng2){
                var radLat1 = this.rad(lat1);
                var radLat2 = this.rad(lat2);
                var a = radLat1 - radLat2;
                var b = this.rad(lng1) - this.rad(lng2);
                var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
                s = s * 6378137;
                s = Math.round(s * 10000) / 10000;
                return s;
            },
            rad:function(d){
                return d * Math.PI / 180.0;
            },

            //状态视图切换
            _changeStates:function(geoTypes){
                var items = query('.draw-item', this.domNode);
                items.style('display', 'none');
                array.forEach(items, lang.hitch(this, function(item){
                    var geoType = item.getAttribute('data-geotype');
                    var display = (geoTypes==geoType);
                    html.setStyle(item, 'display', display ? 'block' : 'none');
                }));
            },

            _allToNormal:function(){
                var items = query('.draw-item', dojo.byId("minitorSettingContent"));
                items.style('display', 'none');
                array.forEach(items, lang.hitch(this, function(item){
                    var geoType = item.getAttribute('data-geotype');
                    var display = ("NORMAL"==geoType);
                    html.setStyle(item, 'display', display ? 'block' : 'none');
                }));
            },

            _onBackClick:function(){
                this._changeStates("NORMAL");
                this.map.graphics.clear();
                this._onStopPath();
            },

            _onShowLineDev: function () {
                if(this.data.STATUS=='02'){ //状态为离线时，不允许回放轨迹（因为还未有GPS信息）
                    return;
                }
                this.showGpsLine(this.data,"0");
            },

            _onShowLineApp: function () {
                if(this.data.STATUS=='02'){ //状态为离线时，不允许回放轨迹（因为还未有GPS信息）
                    return;
                }
                this.showGpsLine(this.data,"1");
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