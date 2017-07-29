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
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",'esri/Color',
        'dojo/on',"esri/symbols/SimpleMarkerSymbol",
        'jimu/magicgis/util/services/GetTableDataService',
        'jimu/magicgis/util/services/ApdmSearchService',
        'jimu/magicgis/util/CommonParams','esri/toolbars/draw',
        'jimu/magicgis/util/APDMOperation',"jimu/WidgetManager",'jimu/PanelManager',
        'jimu/magicgis/util/PipelineOperation/MapPipelineOperation',
        "jimu/magicgis/util/commonUtils",
        'jimu/magicgis/util/PipelineOperation/MapPipelineStatus',
        'jimu/magicgis/util/PipelineObserver',
        'esri/geometry/Polyline',
        'esri/geometry/Point',
        'jimu/dijit/LoadingIndicator',
        "jimu/magicgis/configProject",
        "jimu/magicgis/dijit/PileDijit/UnitComboxDijit","jimu/magicgis/dijit/PileDijit/LineloopComboxDijit",
        "jimu/magicgis/dijit/PileDijit/MarkerComboxDijit",
        "jimu/magicgis/dijit/PileDijit/SiteComboxDijit","dijit/form/ComboBox"
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,connect,BaseWidget,html,domConstruct,topic,
               GraphicsLayer,Graphic,array,parser,
               SimpleLineSymbol,SimpleFillSymbol,Color,on,SimpleMarkerSymbol,GetTableDataService,ApdmSearchService,CommonParams,Draw,
               APDMOperation,WidgetManager,PanelManager,
               MapPipelineOperation,commonUtils,MapPipelineStatus,PipelineObserver,Polyline,Point,LoadingIndicator,
               configProject) {
        var clazz=declare([BaseWidget, _WidgetsInTemplateMixin],{
            baseClass: 'jimu-widget-locationquery',
            name: 'LocationQuery',
            apdmSearchWS:null,
            ws:null,
            _graphicsLayer: null,
            btnContainer:null,
            locationContainer:null,
            tabType:null,
            sitemarker:null,
            linepoint:null,
            drawTool:null,
            addPoint:null,
            noRefreshSite:null,//不更新站场控件(SOE没返回站场信息，故点击查询时不更新)
            noRefreshBESite:null,//不更新站场控件(SOE没返回站场信息，故点击查询时不更新)
            markerResult:null,
            beginMarkerResult:null,
            endMarkerResult:null,
            siteResult:null,
            beginSiteResult:null,
            endSiteResult:null,
            locationContainer:null,
            mapCurson:null,
            mapDBPoint:null,
            pointSymbol:new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10,
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([79, 129, 189]), 2),new Color([255,255,0,0.25])),
            lineSymbol:new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([79, 129, 189]),3),
            fillSymbol:new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                new Color([79, 129, 189]),2),new Color([255,255,0,0.25])),

            postCreate:function(){
                this.inherited(arguments);
                //this.getWebserviceData();

                var pipelineObserver=PipelineObserver.getInstance();
                pipelineObserver.regist('changePipelineStatus',this.changePipelineStatus,this);

                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(window.jimuConfig.layoutId);
                this.map.disableDoubleClickZoom();
                this.classCheck.checked=false;
                this.own(on(this.map, "dbl-click", lang.hitch(this, this.onMapDBClick)));
                topic.subscribe('changeMapCurson', lang.hitch(this,function(mapCurson){
                    this.mapCurson=mapCurson;
                }));

                /*this.unitSeclect.initUnitComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.unitSeclect.setUnitComboxValue(CommonParams.getInstance().unitEventid,CommonParams.getInstance().unitName,false);
                this.lineloopSeclect.initLineloopComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.markerSeclect.initMarkerComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.beginMarkerSeclect.initMarkerComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.endMarkerSeclect.initMarkerComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.siteSeclect.initSiteComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.beginSiteSeclect.initSiteComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.endSiteSeclect.initSiteComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.own(on(this.unitSeclect,"unitComboxChange",lang.hitch(this, this._unitComboxChange)));
                this.own(on(this.lineloopSeclect,"lineloopComboxChange",lang.hitch(this, this._lineloopComboxChange)));
                this.own(on(this.markerSeclect,"markerComboxChange",lang.hitch(this, this._markerComboxChange)));
                this.own(on(this.beginMarkerSeclect,"markerComboxChange",lang.hitch(this, this._beginMarkerComboxChange)));
                this.own(on(this.endMarkerSeclect,"markerComboxChange",lang.hitch(this, this._endMarkerComboxChange)));
                this.own(on(this.siteSeclect,"siteComboxChange",lang.hitch(this, this._siteComboxChange)));
                this.own(on(this.beginSiteSeclect,"siteComboxChange",lang.hitch(this, this._beginSiteComboxChange)));
                this.own(on(this.endSiteSeclect,"siteComboxChange",lang.hitch(this, this._endSiteComboxChange)));*/
                topic.subscribe("activePointClick",lang.hitch(this,this.activePointClick));

                this._graphicsLayer = new GraphicsLayer();
                this.map.addLayer(this._graphicsLayer);
                this.drawTool=new Draw(this.map,{
                    tooltipOffset:20,
                    drawTime:90
                });
                //this.drawTool.pointSymbol=this.pointSymbol;
                //this.drawTool.fillSymbol=this.fillSymbol;
                this.drawTool.on("draw-end",lang.hitch(this,this._drawEnd));

                this.addPoint=esri.bundle?esri.bundle.toolbars.draw.addPoint:"单击以添加点";
            },

            startup: function () {
                this.inherited(arguments);
                this.own(on(this.classCheck,"Change",lang.hitch(this,this.classCheckClick)));
                this.own(on(this.classSelect,"Change",lang.hitch(this,this.classSelectClick)));

                this.sitemarker="marker";
                this.linepoint="point";
                //this._changeTab(this.sitemarker,this.linepoint);
                var sitemarkerTypeDiv = this.sitemarkerTypeDiv;
                sitemarkerTypeDiv.onclick=lang.hitch(this,function(evt){//事件代理
                    var e=event||evt;
                    var obj=e.srcElement||e.target;
                    if(obj.tagName=='LI'){
                        this.sitemarker=obj.getAttribute("data-key");
                        this._tabSitemarkerType(this.sitemarker);
                        this._changeTab(this.sitemarker,this.linepoint);
                    }else if(obj.parentNode.tagName=='LI'){
                        this.sitemarker=obj.parentNode.getAttribute("data-key");
                        this._tabSitemarkerType(this.sitemarker);
                        this._changeTab(this.sitemarker,this.linepoint);
                    }
                });
                var linepointTypeDiv = this.linepointTypeDiv;
                linepointTypeDiv.onclick=lang.hitch(this,function(evt){//事件代理
                    var e=event||evt;
                    var obj=e.srcElement||e.target;
                    if(obj.tagName=='LI'){
                        this.linepoint=obj.getAttribute("data-key");
                        this._tabLinepointTypeType(this.linepoint);
                        this._changeTab(this.sitemarker,this.linepoint);
                        //this._setContainerMaxHeight();
                    }else if(obj.parentNode.tagName=='LI'){
                        this.linepoint=obj.parentNode.getAttribute("data-key");
                        this._tabLinepointTypeType(this.linepoint);
                        this._changeTab(this.sitemarker,this.linepoint);
                        //this._setContainerMaxHeight();
                    }
                });
            },

            onOpen: function () {
            },

            onClose:function(){
                this.unitSeclect.hideMenu();
                this.lineloopSeclect.hideMenu();
                this.markerSeclect.hideMenu();
                this.beginMarkerSeclect.hideMenu();
                this.endMarkerSeclect.hideMenu();
                this.siteSeclect.hideMenu();
                this.beginSiteSeclect.hideMenu();
                this.endSiteSeclect.hideMenu();
                if(this._graphicsLayer){
                    this._graphicsLayer.clear();
                    this.map.removeLayer(this._graphicsLayer);
                }
                /*if(this.drawTool){
                    this.drawTool.deactivate();
                }*/
            },

            destroy:function(){
                this.inherited(arguments);
                if(this._graphicsLayer){
                    this._graphicsLayer.clear();
                    this.map.removeLayer(this._graphicsLayer);
                }
                /*if(this.drawTool){
                    this.drawTool.deactivate();
                }*/
            },

            classCheckClick:function(state){
            },
            classSelectClick:function(evt){
                CommonParams.getInstance().activeFeatureClass=evt;
            },

            _tabSitemarkerType:function(type){
                if(type=="marker"){
                    html.addClass(this.markerTypeDiv, 'ui-tab-item-active');
                    html.removeClass(this.siteTypeDiv, 'ui-tab-item-active');
                }else if(type=="site"){
                    html.removeClass(this.markerTypeDiv, 'ui-tab-item-active');
                    html.addClass(this.siteTypeDiv, 'ui-tab-item-active');
                }
            },
            _tabLinepointTypeType:function(type){
                if(type=="point"){
                    html.addClass(this.pointTypeDiv, 'ui-tab-item-active');
                    html.removeClass(this.lineTypeDiv, 'ui-tab-item-active');
                }else if(type=="line"){
                    html.removeClass(this.pointTypeDiv, 'ui-tab-item-active');
                    html.addClass(this.lineTypeDiv, 'ui-tab-item-active');
                }
            },
            _changeTab:function(sitemarkerType,linepointType){
                this.setDisplayNone();
                if(sitemarkerType=="marker"&&linepointType=="point"){
                    html.setStyle(this.markerpointDiv, 'display', '');
                }else if(sitemarkerType=="marker"&&linepointType=="line"){
                    html.setStyle(this.markerlineDiv, 'display', '');
                }else if(sitemarkerType=="site"&&linepointType=="point"){
                    html.setStyle(this.sitepointDiv, 'display', '');
                }else if(sitemarkerType=="site"&&linepointType=="line"){
                    html.setStyle(this.sitelineDiv, 'display', '');
                }
            },
            setDisplayNone:function(){
                html.setStyle(this.markerpointDiv, 'display', 'none');
                html.setStyle(this.markerlineDiv, 'display', 'none');
                html.setStyle(this.sitepointDiv, 'display', 'none');
                html.setStyle(this.sitelineDiv, 'display', 'none');
            },

            getWebserviceData:function(){
                //创建WebService对象
                if(this.ws==null)
                {
                    this.ws = new def_service_cnpc_com__IGetTableData();
                    this.ws.url = configProject.getTableData;

                }
                //调用方法，使用参数
                this.ws.getTableData(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),"zh");
            },
            processResponse:function(response){
                var commonParams=CommonParams.getInstance();
                var dataJson = response.getReturn();
                console.log("getTableData webService成功");
                var json = dojo.fromJson(dataJson);
                if(this.classSelect.options.length==0){
                    array.forEach(json.topics, lang.hitch(this, function(table){
                        var option = {
                            label:table.NAME,
                            value:table.TABLENAME
                        };
                        commonParams.featureClass.push(option);
                        this.classSelect.addOption(option);
                    }));
                }
                commonParams.activeFeatureClass=commonParams.featureClass[0].value;
            },
            reportError:function(response){
                this.loading.hide();
                console.log("getTableData webservice失败"+response);
                layer.msg("getTableData webservice failed"+response);
            },

            onMapDBClick: function(evt) {
                if (window.appInfo.isRunInMobile||this.mapCurson) {
                    return;
                }
                var apdmOperation=APDMOperation.getInstance({
                    map:this.map
                });
                this.mapDBPoint=evt.mapPoint;
                this.loading.show();
                apdmOperation.getPipePoint3byPoint(evt.mapPoint,commonUtils.pixelTpMapDistanceX(100,this.map),CommonParams.getInstance().unitEventid,
                    lang.hitch(this,this.getPipePoint3byPointComplete),lang.hitch(this,this.executeDBFault));
            },

            _onLocaion:function(){
                if(html.hasClass(this.btnLocation, 'active')){
                    html.removeClass(this.btnLocation,'active');
                    dojo.empty(this.settingContent);
                }else{
                    html.addClass(this.btnLocation, 'active');

                    require(['jimu/magicgis/dijit/Location'], lang.hitch(this, function(Location) {//动态引入js文件
                        this.locationContainer=new Location({
                            map:this.map
                        });
                        this.locationContainer.startup();
                        //this._setContainerMaxHeight();
                        this.locationContainer.placeAt(this.settingContent);
                    }));
                }
            },

            //查询按钮代码-----------------------------------------------------------------------------------------------
            activePointClick:function(actived){
                if(actived){
                    esri.bundle.toolbars.draw.addPoint = this.nls.pointselect;
                    this.drawTool.activate(Draw.POINT);
                }else{
                    esri.bundle.toolbars.draw.addPoint = this.addPoint;
                    this.drawTool.deactivate();
                }
            },
            //SOE查询
            _onQueryBtnClick:function(){
                if(this.sitemarker=="marker"&&this.linepoint=="point"){
                    if(!this.markerResult||!this.markerResult.lineloopEventid||!this.markerResult.makerStation){
                        layer.msg(this.nls.markererror);
                        return;
                    }
                    this.loading.show();
                    var apdmOperation=APDMOperation.getInstance({
                        map:this.map
                    });
                    var beginMarkerStation=(this.markerResult.makerStation-2500>=0)?this.markerResult.makerStation-2500:0;
                    var endMarkerStation=this.markerResult.makerStation+2500;
                    apdmOperation.getPipePoint3byLineStation3(this.markerResult.lineloopEventid,beginMarkerStation,endMarkerStation,this.markerResult.makerStation,
                        lang.hitch(this,this.getPipePoint3byLineStation3Complete),lang.hitch(this,this.executeFault));
                }else if(this.sitemarker=="marker"&&this.linepoint=="line"){
                    if(!this.beginMarkerResult||!this.beginMarkerResult.lineloopEventid||!this.beginMarkerResult.makerStation){
                        layer.msg(this.nls.beginmarkererror);
                        return;
                    }
                    if(!this.endMarkerResult||!this.endMarkerResult.lineloopEventid||!this.endMarkerResult.makerStation){
                        layer.msg(this.nls.endmarkererror);
                        return;
                    }
                    this.loading.show();
                    var apdmOperation=APDMOperation.getInstance({
                        map:this.map
                    });
                    apdmOperation.getPipePoint3byLineStation(this.beginMarkerResult.lineloopEventid,this.beginMarkerResult.makerStation,this.endMarkerResult.makerStation,
                        lang.hitch(this,this.getPipePoint3byLineStationComplete),lang.hitch(this,this.executeFault));
                }else if(this.sitemarker=="site"&&this.linepoint=="point"){
                    if(!this.siteResult||!this.siteResult.lineloopEventid||!this.siteResult.siteStation){
                        layer.msg(this.nls.siteerror);
                        return;
                    }
                    this.loading.show();
                    var apdmOperation=APDMOperation.getInstance({
                        map:this.map
                    });
                    var beginSiteStation=(this.siteResult.siteStation-2500>=0)?this.siteResult.siteStation-2500:0;
                    var endSiteStation=this.siteResult.siteStation+2500;
                    this.noRefreshSite=true;
                    apdmOperation.getPipePoint3byLineStation3(this.siteResult.lineloopEventid,beginSiteStation,endSiteStation,this.siteResult.siteStation,
                        lang.hitch(this,this.getPipePoint3byLineStation3Complete),lang.hitch(this,this.executeFault));
                }else if(this.sitemarker=="site"&&this.linepoint=="line"){
                    if(!this.beginSiteResult||!this.beginSiteResult.lineloopEventid||!this.beginSiteResult.siteStation){
                        layer.msg(this.nls.beginsiteerror);
                        return;
                    }
                    if(!this.endSiteResult||!this.endSiteResult.lineloopEventid||!this.endSiteResult.siteStation){
                        layer.msg(this.nls.endsiteerror);
                        return;
                    }
                    this.loading.show();
                    var apdmOperation=APDMOperation.getInstance({
                        map:this.map
                    });
                    this.noRefreshBESite=true;
                    apdmOperation.getPipePoint3byLineStation(this.beginSiteResult.lineloopEventid,this.beginSiteResult.siteStation,this.endSiteResult.siteStation,
                        lang.hitch(this,this.getPipePoint3byLineStationComplete),lang.hitch(this,this.executeFault));
                }

            },
            //起始里程、终止里程获取选中管段信息
            getPipePoint3byLineStationComplete:function(event){
                this.loading.hide();
                var lc_soeResult=event.mPosSoeResult;
                var lc_centerResult=event.mCenterResult;
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                var polylineJson = {
                    "paths":lc_soeResult.mLine.paths,
                    "spatialReference":this.map.spatialReference//结果返回3857，转换成标准写法102100
                };
                //mapPipelineStatus.mUnitEventID=CommonParams.getInstance().unitEventid;
                mapPipelineStatus.mUnitName=this.unitSeclect.unitResult.unitName;
                mapPipelineStatus.mUnitEventID=this.unitSeclect.unitResult.unitEventid;
                mapPipelineStatus.mPolyline=new Polyline(polylineJson);
                this.map.setExtent(mapPipelineStatus.mPolyline.getExtent().expand(1.5));
                mapPipelineStatus.BeginPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.BeginPoint[0],lc_soeResult.BeginPoint[1],this.map.spatialReference),
                    BeginStationSeriesEventID:lc_soeResult.BeginSsEventID,
                    BeginStation:lc_soeResult.BeginStation,
                    BeginMarkerEventID:lc_soeResult.mBeginMarkerEventID,
                    BeginMarkerName:lc_soeResult.mBeginMarkerName,
                    BeginMarkerOffset:lc_soeResult.mBeginMarkerOffset
                };
                mapPipelineStatus.EndPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.EndPoint[0],lc_soeResult.EndPoint[1],this.map.spatialReference),
                    EndStationSeriesEventID:lc_soeResult.EndSsEventID,
                    EndStation:lc_soeResult.EndStation,
                    EndMarkerEventID:lc_soeResult.mEndMarkerEventID,
                    EndMarkerName:lc_soeResult.mEndMarkerName,
                    EndMarkerOffset:lc_soeResult.mEndMarkerOffset
                };
                mapPipelineStatus.CenterPoint={
                    LineLoopEventID:lc_centerResult.LineLoopEventID,
                    LineLoopName:lc_centerResult.LineLoopName,
                    Point:new Point(lc_centerResult.mPoint.x,lc_centerResult.mPoint.y,this.map.spatialReference),
                    CenterStationSeriesEventID:lc_centerResult.BeginSsEventID,
                    CenterStation:lc_centerResult.BeginStation,
                    CenterMarkerEventID:lc_centerResult.mBeginMarkerEventID,
                    CenterMarkerName:lc_centerResult.mBeginMarkerName,
                    CenterMarkerOffset:lc_centerResult.mBeginMarkerOffset
                };
                var pipelineObserver=PipelineObserver.getInstance();
                pipelineObserver.fire('changePipelineStatus',{
                    mapPipelineStatus:mapPipelineStatus
                });
            },
            //起始里程、终止里程、中点里程获取选中管段信息
            getPipePoint3byLineStation3Complete:function(event){
                this.loading.hide();
                var lc_soeResult=event.mPosSoeResult;
                var lc_centerResult=event.mCenterResult;
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                var polylineJson = {
                    "paths":lc_soeResult.mLine.paths,
                    "spatialReference":this.map.spatialReference//结果返回3857，转换成标准写法102100
                };
                //mapPipelineStatus.mUnitEventID=CommonParams.getInstance().unitEventid;
                mapPipelineStatus.mUnitName=this.unitSeclect.unitResult.unitName;
                mapPipelineStatus.mUnitEventID=this.unitSeclect.unitResult.unitEventid;
                mapPipelineStatus.mPolyline=new Polyline(polylineJson);
                this.map.setExtent(mapPipelineStatus.mPolyline.getExtent().expand(1.5));
                mapPipelineStatus.BeginPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.BeginPoint[0],lc_soeResult.BeginPoint[1],this.map.spatialReference),
                    BeginStationSeriesEventID:lc_soeResult.BeginSsEventID,
                    BeginStation:lc_soeResult.BeginStation,
                    BeginMarkerEventID:lc_soeResult.mBeginMarkerEventID,
                    BeginMarkerName:lc_soeResult.mBeginMarkerName,
                    BeginMarkerOffset:lc_soeResult.mBeginMarkerOffset
                };
                mapPipelineStatus.EndPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.EndPoint[0],lc_soeResult.EndPoint[1],this.map.spatialReference),
                    EndStationSeriesEventID:lc_soeResult.EndSsEventID,
                    EndStation:lc_soeResult.EndStation,
                    EndMarkerEventID:lc_soeResult.mEndMarkerEventID,
                    EndMarkerName:lc_soeResult.mEndMarkerName,
                    EndMarkerOffset:lc_soeResult.mEndMarkerOffset
                };
                mapPipelineStatus.CenterPoint={
                    LineLoopEventID:lc_centerResult.LineLoopEventID,
                    LineLoopName:lc_centerResult.LineLoopName,
                    Point:new Point(lc_centerResult.mPoint.x,lc_centerResult.mPoint.y,this.map.spatialReference),
                    CenterStationSeriesEventID:lc_centerResult.BeginSsEventID,
                    CenterStation:lc_centerResult.BeginStation,
                    CenterMarkerEventID:lc_centerResult.mBeginMarkerEventID,
                    CenterMarkerName:lc_centerResult.mBeginMarkerName,
                    CenterMarkerOffset:lc_centerResult.mBeginMarkerOffset
                };
                var pipelineObserver=PipelineObserver.getInstance();
                pipelineObserver.fire('changePipelineStatus',{
                    mapPipelineStatus:mapPipelineStatus
                });
            },

            //拉框查询
            _onRectQuery:function(){
                html.removeClass(this.btnPoint,'btnOn');
                if(html.hasClass(this.btnRect,'btnOn')){
                    html.removeClass(this.btnRect,'btnOn');
                    this.drawTool.deactivate();
                }else{
                    html.addClass(this.btnRect,'btnOn');
                    this.drawTool.activate(Draw.RECTANGLE);
                }
            },
            //点击查询
            _onPointQuery:function(){
                html.removeClass(this.btnRect,'btnOn');
                if(html.hasClass(this.btnPoint,'btnOn')){
                    html.removeClass(this.btnPoint,'btnOn');
                    esri.bundle.toolbars.draw.addPoint = this.addPoint;
                    this.drawTool.deactivate();
                }else{
                    html.addClass(this.btnPoint,'btnOn');
                    esri.bundle.toolbars.draw.addPoint = this.nls.pointselect;
                    this.drawTool.activate(Draw.POINT);
                }
            },

            _drawEnd:function(evt){
                esri.bundle.toolbars.draw.addPoint = this.addPoint;
                this.loading.show();
                var geometry=evt.geometry;
                this.map.graphics.clear();
                html.removeClass(this.btnPoint,'btnOn');
                html.removeClass(this.btnRect,'btnOn');
                this.drawTool.deactivate();
                WidgetManager.getInstance().closeWidget("widgets_PointClick_Widget");

                var apdmOperation=APDMOperation.getInstance({
                    map:this.map
                });
                if(geometry.type=="polygon"){
                    var graphic=new Graphic(geometry,commonUtils.getDefaultSymbol("esriGeometryPolygon"));
                    this.map.graphics.add(graphic);
                    apdmOperation.apdmSearchbyEnvelop(geometry.getExtent(),this.classSelect.value,CommonParams.getInstance().unitEventid,
                        lang.hitch(this,function (responses) {
                            this.loading.hide();
                            if(responses.mPosSoeResult.TaskStatus==1&&responses.mPosSoeResult.AttributeTable&&JSON.parse(responses.mPosSoeResult.AttributeTable)["Rows"].length>=1){
                                topic.publish('openWidget', "widgets_FeatureQuery_Widget");
                                topic.publish('attributeTable',responses.mPosSoeResult.AttributeTable);
                            }else{
                                layer.msg(this.nls.noresult);
                            }
                        }),lang.hitch(this,this.executeFault));
                }else if(geometry.type=="point"){
                    apdmOperation.getPipePoint3byPoint(geometry,commonUtils.pixelTpMapDistanceX(100,this.map),CommonParams.getInstance().unitEventid,
                        lang.hitch(this,this.getPipePoint3byPointComplete),lang.hitch(this,this.executeFault));
                }
            },

            getAPDMSearchData:function(classSelect,LineLoopEventID,BeginStation,EndStation){
                this.loading.show();
                //创建WebService对象
                if(this.apdmSearchWS==null)
                {
                    this.apdmSearchWS = new def_service_pif_ApdmSearch_inf_pis_cnpc_com__IApdmSearch();
                    this.apdmSearchWS.url = configProject.apdmSearch;

                }
                //调用方法，使用参数
                this.apdmSearchWS.ApdmSearchByLineStation(lang.hitch(this,this.apdmSearchResponse),lang.hitch(this,this.reportError),
                    classSelect,LineLoopEventID,BeginStation,EndStation);
            },
            apdmSearchResponse:function(response){
                this.loading.hide();
                var dataJson = response.getReturn();
                if(dataJson&&JSON.parse(dataJson).AttributeTable&&JSON.parse(JSON.parse(dataJson).AttributeTable)["Rows"].length>=1){
                    topic.publish('openWidget', "widgets_FeatureQuery_Widget");
                    topic.publish('attributeTable',JSON.parse(dataJson).AttributeTable);
                }else{
                    layer.msg(this.nls.noresult);
                }
                console.log("webService成功");
            },

            getPipePoint3byPointComplete:function(event) {
                this.loading.hide();
                var lc_soeResult=event.mPosSoeResult;
                var lc_centerResult=event.mCenterResult;
                //过滤显示
                if(lc_soeResult.TaskStatus==0||lc_centerResult.TaskStatus==0){
                    //layer.msg("桩不在管理范围内");
                    this.map.setExtent(this.map.extent.expand(0.5));
                    this.map.centerAt(this.mapDBPoint);
                    return;
                }else if(lc_soeResult.TaskStatus==2||lc_centerResult.TaskStatus==2){
                    //layer.msg("无桩");
                    this.map.setExtent(this.map.extent.expand(0.5));
                    this.map.centerAt(this.mapDBPoint);
                    return;
                }
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                var polylineJson = {
                    "paths":lc_soeResult.mLine.paths,
                    "spatialReference":this.map.spatialReference//结果返回3857，转换成标准写法102100
                };
                mapPipelineStatus.mUnitEventID=CommonParams.getInstance().unitEventid;
                mapPipelineStatus.mUnitName=CommonParams.getInstance().unitName;
                mapPipelineStatus.mPolyline=new Polyline(polylineJson);
                this.map.setExtent(mapPipelineStatus.mPolyline.getExtent().expand(1.5));
                mapPipelineStatus.BeginPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.BeginPoint[0],lc_soeResult.BeginPoint[1],this.map.spatialReference),
                    BeginStationSeriesEventID:lc_soeResult.BeginSsEventID,
                    BeginStation:lc_soeResult.BeginStation,
                    BeginMarkerEventID:lc_soeResult.mBeginMarkerEventID,
                    BeginMarkerName:lc_soeResult.mBeginMarkerName,
                    BeginMarkerOffset:lc_soeResult.mBeginMarkerOffset
                };
                mapPipelineStatus.EndPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.EndPoint[0],lc_soeResult.EndPoint[1],this.map.spatialReference),
                    EndStationSeriesEventID:lc_soeResult.EndSsEventID,
                    EndStation:lc_soeResult.EndStation,
                    EndMarkerEventID:lc_soeResult.mEndMarkerEventID,
                    EndMarkerName:lc_soeResult.mEndMarkerName,
                    EndMarkerOffset:lc_soeResult.mEndMarkerOffset
                };
                mapPipelineStatus.CenterPoint={
                    LineLoopEventID:lc_centerResult.mLineLoopEventID,
                    LineLoopName:lc_centerResult.mLineLoopName,
                    Point:new Point(lc_centerResult.BeginPoint.x,lc_centerResult.BeginPoint.y,this.map.spatialReference),
                    CenterStationSeriesEventID:lc_centerResult.mBeginStationSeriesEventID,
                    CenterStation:lc_centerResult.mBeginStation,
                    CenterMarkerEventID:lc_centerResult.mBeginMarkerEventID,
                    CenterMarkerName:lc_centerResult.mBeginMarkerName,
                    CenterMarkerOffset:lc_centerResult.mBeginMarkerOffset
                };
                var pipelineObserver=PipelineObserver.getInstance();
                pipelineObserver.fire('changePipelineStatus',{
                    mapPipelineStatus:mapPipelineStatus
                });
                if(this.classCheck.checked){
                    this.getAPDMSearchData(this.classSelect.value,mapPipelineStatus.BeginPoint.LineLoopEventID,
                        mapPipelineStatus.BeginPoint.BeginStation,mapPipelineStatus.EndPoint.EndStation);//查询在线要素
                }
            },
            executeFault:function(event){
                this.noRefreshSite=false;
                this.noRefreshBESite=false;
                this.loading.hide();
                console.log(event.toString());
                layer.msg(event.toString());
            },
            executeDBFault:function(event){
                this.noRefreshSite=false;
                this.noRefreshBESite=false;
                this.loading.hide();
                console.log(event.toString());
                //layer.msg(event.toString());
                this.map.setExtent(this.map.extent.expand(0.5));
                this.map.centerAt(this.mapDBPoint);
            },
            //----------------------------------------------------------------------------------------------------------

            //桩选控件相关-----------------------------------------------------------------------------------------------
            //订阅观察者类
            changePipelineStatus:function(e){
                this.mapPipelineStatus= e.args.mapPipelineStatus;
                if(this.mapPipelineStatus){
                    this.unitSeclect.setUnitComboxValue(this.mapPipelineStatus.mUnitEventID,this.mapPipelineStatus.mUnitName,false);
                    this.lineloopSeclect.setLineloopComboxValue(this.mapPipelineStatus.mUnitEventID,this.mapPipelineStatus.CenterPoint.LineLoopEventID,this.mapPipelineStatus.CenterPoint.LineLoopName,false);
                    this.markerSeclect.setMarkerComboxValue({unitEventid:CommonParams.getInstance().unitEventid,
                        lineloopEventid:this.mapPipelineStatus.CenterPoint.LineLoopEventID,
                        lineloopName:this.mapPipelineStatus.CenterPoint.LineLoopName,
                        markerEventid:this.mapPipelineStatus.CenterPoint.CenterMarkerEventID,
                        markerName:this.mapPipelineStatus.CenterPoint.CenterMarkerName,
                        markerOffset:this.mapPipelineStatus.CenterPoint.CenterMarkerOffset,
                        ssEventid:this.mapPipelineStatus.CenterPoint.CenterStationSeriesEventID,
                        makerStation:this.mapPipelineStatus.CenterPoint.CenterStation
                    },true);
                    this.beginMarkerSeclect.setMarkerComboxValue({unitEventid:CommonParams.getInstance().unitEventid,
                        lineloopEventid:this.mapPipelineStatus.BeginPoint.LineLoopEventID,
                        lineloopName:this.mapPipelineStatus.BeginPoint.LineLoopName,
                        markerEventid:this.mapPipelineStatus.BeginPoint.BeginMarkerEventID,
                        markerName:this.mapPipelineStatus.BeginPoint.BeginMarkerName,
                        markerOffset:this.mapPipelineStatus.BeginPoint.BeginMarkerOffset,
                        ssEventid:this.mapPipelineStatus.BeginPoint.BeginStationSeriesEventID,
                        makerStation:this.mapPipelineStatus.BeginPoint.BeginStation
                    },true);
                    this.endMarkerSeclect.setMarkerComboxValue({unitEventid:CommonParams.getInstance().unitEventid,
                        lineloopEventid:this.mapPipelineStatus.EndPoint.LineLoopEventID,
                        lineloopName:this.mapPipelineStatus.EndPoint.LineLoopName,
                        markerEventid:this.mapPipelineStatus.EndPoint.EndMarkerEventID,
                        markerName:this.mapPipelineStatus.EndPoint.EndMarkerName,
                        markerOffset:this.mapPipelineStatus.EndPoint.EndMarkerOffset,
                        ssEventid:this.mapPipelineStatus.EndPoint.EndStationSeriesEventID,
                        makerStation:this.mapPipelineStatus.EndPoint.EndStation
                    },true);
                    if(!this.noRefreshSite){
                        this.siteSeclect.setSiteComboxValue({unitEventid:CommonParams.getInstance().unitEventid,
                            lineloopEventid:this.mapPipelineStatus.CenterPoint.LineLoopEventID,
                            lineloopName:this.mapPipelineStatus.CenterPoint.LineLoopName,
                            siteEventid:"",
                            siteName:"",
                            siteOffset:"",
                            ssEventid:"",
                            siteStation:""
                        },true);
                    }
                    if(!this.noRefreshBESite){
                        this.beginSiteSeclect.setSiteComboxValue({unitEventid:CommonParams.getInstance().unitEventid,
                            lineloopEventid:this.mapPipelineStatus.BeginPoint.LineLoopEventID,
                            lineloopName:this.mapPipelineStatus.BeginPoint.LineLoopName,
                            siteEventid:"",
                            siteName:"",
                            siteOffset:"",
                            ssEventid:"",
                            siteStation:""
                        },true);
                        this.endSiteSeclect.setSiteComboxValue({unitEventid:CommonParams.getInstance().unitEventid,
                            lineloopEventid:this.mapPipelineStatus.EndPoint.LineLoopEventID,
                            lineloopName:this.mapPipelineStatus.EndPoint.LineLoopName,
                            siteEventid:"",
                            siteName:"",
                            siteOffset:"",
                            ssEventid:"",
                            siteStation:""
                        },true);
                    }
                    this.noRefreshSite=false;
                    this.noRefreshBESite=false;
                }
            },

            _unitComboxChange:function(unitResult){
                this.lineloopSeclect.setLineloopComboxValue(unitResult.unitEventid,"","",true);
            },
            _lineloopComboxChange:function(lineloopResult){
                //选择管线后直接定位
                if(lineloopResult.unitEventid&&lineloopResult.lineloopEventid){
                    $.ajax({
                        url: configProject.baseUrl+configProject.stationSeriesUrl+"?departmentId="+lineloopResult.unitEventid+"&lineLoopId="+lineloopResult.lineloopEventid,
                        type : "POST",
                        async : true, //异步执行
                        data : {},
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: lang.hitch(this,function(data){
                            for(var iKey in data){
                                var lineInfo = data[iKey][0];
                                var makerStation = Number(lineInfo["lineEndStation"])/2;
                                var beginMarkerStation=(makerStation-2500>=0)?makerStation-2500:0;
                                var endMarkerStation=makerStation+2500;
                                this.markerResult = {"lineloopEventid":lineInfo.eventId,"makerStation":makerStation};
                                this.beginMarkerResult = {"lineloopEventid":lineInfo.eventId,"makerStation":beginMarkerStation};
                                this.endMarkerResult = {"lineloopEventid":lineInfo.eventId,"makerStation":endMarkerStation};
                                this.siteResult = {"lineloopEventid":lineInfo.eventId,"siteStation":makerStation};
                                this.beginSiteResult = {"lineloopEventid":lineInfo.eventId,"siteStation":beginMarkerStation};
                                this.endSiteResult = {"lineloopEventid":lineInfo.eventId,"siteStation":endMarkerStation};
                            }
                        }),
                        error: lang.hitch(this,function(response) {
                            layer.msg('queryLineStationseries action error');
                        })
                    });
                }
                //layer.msg(lineloopResult.unitEventid+lineloopResult.lineloopName+lineloopResult.lineloopEventid);
                this.markerSeclect.setMarkerComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    markerEventid:"",
                    markerName:"",
                    markerOffset:"",
                    ssEventid:"",
                    makerStation:""
                },true);
                this.beginMarkerSeclect.setMarkerComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    markerEventid:"",
                    markerName:"",
                    markerOffset:"",
                    ssEventid:"",
                    makerStation:""
                },true);
                this.endMarkerSeclect.setMarkerComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    markerEventid:"",
                    markerName:"",
                    markerOffset:"",
                    ssEventid:"",
                    makerStation:""
                },true);
                this.siteSeclect.setSiteComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    siteEventid:"",
                    siteName:"",
                    siteOffset:"",
                    ssEventid:"",
                    siteStation:""
                },true);
                this.beginSiteSeclect.setSiteComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    siteEventid:"",
                    siteName:"",
                    siteOffset:"",
                    ssEventid:"",
                    siteStation:""
                },true);
                this.endSiteSeclect.setSiteComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    siteEventid:"",
                    siteName:"",
                    siteOffset:"",
                    ssEventid:"",
                    siteStation:""
                },true);
            },
            _markerComboxChange:function(markerResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.markerResult=markerResult;
            },
            _beginMarkerComboxChange:function(markerResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.beginMarkerResult=markerResult;
            },
            _endMarkerComboxChange:function(markerResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.endMarkerResult=markerResult;
            },
            _siteComboxChange:function(siteResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.siteResult=siteResult;
            },
            _beginSiteComboxChange:function(siteResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.beginSiteResult=siteResult;
            },
            _endSiteComboxChange:function(siteResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.endSiteResult=siteResult;
            },
            //---------------------------------------------------------------------------------------------------------
        });
        return clazz;
    });