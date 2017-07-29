/**
 * 地图选中管线操作类
 */
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'esri/geometry/Point',
    'esri/geometry/Polyline',
    "esri/symbols/SimpleLineSymbol",
    'esri/Color',
    "dojo/on",
    'dojo/_base/html',
    "esri/symbols/PictureMarkerSymbol",
    "esri/layers/GraphicsLayer",
    "esri/graphic",
    "esri/toolbars/edit",
    'jimu/magicgis/util/APDMOperation',
    'jimu/magicgis/util/commonUtils',
    'jimu/magicgis/util/PipelineOperation/MapPipelineStatus',
    'dojo/dom-style',
    'jimu/magicgis/util/PipelineObserver',
    "jimu/magicgis/util/CommonParams",
    "jimu/magicgis/dijit/CinfoWindow",
    'jimu/magicgis/dijit/PopContextMenu',
    'jimu/dijit/LoadingIndicator',
    'esri/InfoTemplate',
    "dijit/layout/ContentPane",
    "jimu/magicgis/configProject",
    "esri/symbols/SimpleMarkerSymbol"
], function (declare,lang,Point,Polyline,SimpleLineSymbol,Color,on,html,PictureMarkerSymbol,GraphicsLayer,Graphic,Edit,APDMOperation,commonUtils,
             MapPipelineStatus,domStyle,PipelineObserver,CommonParams,CinfoWindow,PopContextMenu,LoadingIndicator,InfoTemplate,ContentPane,
             configProject,SimpleMarkerSymbol) {
    var instance = null, clazz;
    clazz = declare(null, {
        map:null,
        mapPipelineStatus:null,
        beginMarkerSymbol:null,
        endMarkerSymbol:null,
        centerMarkerSymbol:null,
        lineSymbol:null,
        beginGraphic:null,
        endGraphic:null,
        centerGraphic:null,
        lineGraphic:null,
        pipePointGraphicLayer:null,//选中管线点图层
        pipeLineGraphicLayer:null,//选中管线线图层
        editToolbar:null,
        activeGraphic:null,//正在拖动移动的Graphic
        moveActive:null,//是否处于拖动移动状态
        activePoint:null,//当前选中点
        popContextMenu:null,
        apdmOperation:null,
        unitEventid:null,
        DGISWindow:null,

        constructor: function(params) {
            this.map = params && params.map;
            this.nls = window.jimuNls.mappipeline;
            this.unitEventid=CommonParams.getInstance().unitEventid;

            var pipelineObserver=PipelineObserver.getInstance();
            pipelineObserver.regist('changePipelineStatus',this.changePipelineStatus,this);

            this.pipePointGraphicLayer=new GraphicsLayer();
            this.pipeLineGraphicLayer=new GraphicsLayer();
            this.lineSymbol=new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([0, 255, 255]),5);
            this.beginMarkerSymbol=new PictureMarkerSymbol("jimu.js/magicgis/images/marker_begin.png", 25, 40);
            this.endMarkerSymbol=new PictureMarkerSymbol("jimu.js/magicgis/images/marker_end.png", 25, 40);
            this.centerMarkerSymbol=new PictureMarkerSymbol("jimu.js/magicgis/images/marker_center.png", 25, 40);
            this.beginMarkerSymbol.setOffset(0, 20);
            this.endMarkerSymbol.setOffset(0, 20);
            this.centerMarkerSymbol.setOffset(0, 20);
            this.lineGraphic=new Graphic();
            this.lineGraphic.setSymbol(this.lineSymbol);
            this.pipeLineGraphicLayer.add(this.lineGraphic);
            this.centerGraphic=new Graphic();
            this.centerGraphic.setSymbol(this.centerMarkerSymbol);
            this.pipePointGraphicLayer.add(this.centerGraphic);
            this.beginGraphic=new Graphic();
            this.beginGraphic.setSymbol(this.beginMarkerSymbol);
            this.pipePointGraphicLayer.add(this.beginGraphic);
            this.endGraphic=new Graphic();
            this.endGraphic.setSymbol(this.endMarkerSymbol);
            this.pipePointGraphicLayer.add(this.endGraphic);

            this.apdmOperation=APDMOperation.getInstance({
                map:this.map
            });
            this.popContextMenu=new PopContextMenu({
                map:this.map
            });
            this.popContextMenu.startup();
            this.popContextMenu.placeAt(dojo.byId("map"));
            this.editToolbar = new Edit(this.map);
            var options = {
                allowAddVertices: false,
                allowDeleteVertices: false,
                uniformScaling: false
            };
            this.pipePointGraphicLayer.on("mouse-over", lang.hitch(this,function(evt) {
                //var selected = evt.graphic.getDojoShape().getNode();
                // Let's bind to the graphic underneath the mouse cursor
                //ctxMenuForGraphics.bindDomNode(evt.graphic.getDojoShape().getNode());
                if(this.editToolbar.getCurrentState().tool==0||(!this.moveActive&&this.activeGraphic!=evt.graphic)){//初次移入Graphic或移入新Graphic
                    this.editToolbar.activate(Edit.MOVE, evt.graphic, options);
                    this.activeGraphic=evt.graphic;
                }
            }));

           /* this.pipePointGraphicLayer.on("mouse-out", lang.hitch(this,function(evt) {
                //ctxMenuForGraphics.unBindDomNode(evt.graphic.getDojoShape().getNode());
            }));*/

            this.editToolbar.on("graphic-move", lang.hitch(this,function (evt) {
                this.moveActive=true;
            }));
            this.editToolbar.on("graphic-move-stop", lang.hitch(this,function (evt) {
                var tolerance=commonUtils.pixelTpMapDistanceX(100,this.map);
                if(evt.graphic==this.centerGraphic){//改变中点
                    this.loading.show();
                    this.apdmOperation.getPipePointbyPoint(this.centerGraphic.geometry,tolerance,this.unitEventid,lang.hitch(this,this.getPipePointbyPointComplete),lang.hitch(this,this.executeFault));
                }else{//改变起点终点
                    this.loading.show();
                    this.apdmOperation.getPipePoint3byPoint2(this.beginGraphic.geometry,this.endGraphic.geometry,tolerance,this.unitEventid,lang.hitch(this,this.getPipePoint3byPoint2Complete),lang.hitch(this,this.executeFault));
                }
                //this.editToolbar.deactivate();
                this.moveActive=false;
            }));
            this.editToolbar.on("graphic-click", lang.hitch(this,function (evt) {
                this.map.infoWindow.hide();
                this._popContextMenu(evt.graphic);
                //$("body").bind("mousedown",{thisObj:this,graphic:evt.graphic},this.onBodyDown);
            }));
            /*this.pipePointGraphicLayer.on("click",lang.hitch(this,function(evt) {
                this._popContextMenu(evt.graphic);
                $("body").bind("mousedown",{thisObj:this,graphic:evt.graphic},this.onBodyDown);
            }));*/

            on(this.map, 'extent-change', lang.hitch(this, '_onExtentChange'));
            if (!this.loading) {
                this.loading = new LoadingIndicator({
                    hidden: true
                });
            }
            this.loading.placeAt(window.jimuConfig.layoutId);

            //postMessage传值监听消息反馈
            window.addEventListener('message',lang.hitch(this,function(event) {
                var dataGeometry = JSON.parse(event.data);
                if(dataGeometry&&dataGeometry.type=="3DGIS"&&this.DGISWindow){
                    this.DGISWindow.postMessage('{"type":"2Dto3D","x":"'+commonUtils._MercatorToLon(this.activePoint.Graphic.geometry.x)+'","y":"'+commonUtils._MercatorToLat(this.activePoint.Graphic.geometry.y)+'"}',"*");
                }else if(dataGeometry&&dataGeometry.type=="3Dto2D") {
                    this.map.centerAndZoom(new Point(Number(dataGeometry.x),Number(dataGeometry.y),this.map.spatialReference),18);
                }
            }),false);
        },

        _onExtentChange: function(params) {
            this._removeContextMenu();
        },

        onBodyDown: function(event) {
            event.stopPropagation();
            event.data.thisObj._removeContextMenu();
            var obj=event.srcElement||event.target;
            if(html.hasClass(obj, "mapContextInfo")){
                event.data.thisObj.mapContextHander(event.data.graphic,"mapContextInfo");
            }else if(html.hasClass(obj, "mapContextQuery")){
                event.data.thisObj.mapContextHander(event.data.graphic,"mapContextQuery");
            }else if(html.hasClass(obj, "mapContextLocation")){
                event.data.thisObj.mapContextHander(event.data.graphic,"mapContextLocation");
            }else if(html.hasClass(obj, "mapContextDLocation")){
                event.data.thisObj.mapContextHander(event.data.graphic,"mapContextDLocation");
            }
            $("body").unbind("mousedown", event.data.thisObj.onBodyDown);//这样传参才能解除绑定
        },
        //弹出菜单
        _popContextMenu: function(graphic){
            var screenPoint = this.map.toScreen(graphic.geometry);
            domStyle.set(this.popContextMenu.domNode,"left",(screenPoint.x-50)+"px");
            domStyle.set(this.popContextMenu.domNode,"top",(screenPoint.y-140)+"px");
            domStyle.set(this.popContextMenu.domNode,"display","block");
            $("body").bind("mousedown",{thisObj:this,graphic:graphic},this.onBodyDown);
        },
        _removeContextMenu: function(){
            domStyle.set(this.popContextMenu.domNode,"display","none");
        },
        //菜单响应事件
        mapContextHander: function(graphic,contextType){
            this.activePoint=new Object();
            if(graphic==this.beginGraphic){
                this.activePoint.LineLoopEventID=this.mapPipelineStatus.BeginPoint.LineLoopEventID;
                this.activePoint.BeginStation=this.mapPipelineStatus.BeginPoint.BeginStation;
                this.activePoint.SsEventID=this.mapPipelineStatus.BeginPoint.BeginStationSeriesEventID;
                this.activePoint.MarkerOffset=this.mapPipelineStatus.BeginPoint.BeginMarkerOffset;
            }else if(graphic==this.centerGraphic){
                this.activePoint.LineLoopEventID=this.mapPipelineStatus.CenterPoint.LineLoopEventID;
                this.activePoint.BeginStation=this.mapPipelineStatus.CenterPoint.CenterStation;
                this.activePoint.SsEventID=this.mapPipelineStatus.CenterPoint.CenterStationSeriesEventID;
                this.activePoint.MarkerOffset=this.mapPipelineStatus.CenterPoint.CenterMarkerOffset;
            }else if(graphic==this.endGraphic){
                this.activePoint.LineLoopEventID=this.mapPipelineStatus.EndPoint.LineLoopEventID;
                this.activePoint.BeginStation=this.mapPipelineStatus.EndPoint.EndStation;
                this.activePoint.SsEventID=this.mapPipelineStatus.EndPoint.EndStationSeriesEventID;
                this.activePoint.MarkerOffset=this.mapPipelineStatus.EndPoint.EndMarkerOffset;
            }
            this.activePoint.Graphic=graphic;

            switch(contextType){
                case "mapContextInfo":
                    this.apdmOperation.getDepthByLineStation(this.activePoint.LineLoopEventID,this.activePoint.BeginStation,this.unitEventid,lang.hitch(this,this.getDepthByLineStationComplete),lang.hitch(this,this.executeFault));
                    break;
                case "mapContextQuery":
                    if(this.activePoint.SsEventID){
                        this.apdmOperation.apdmSearchPointbySsStation(CommonParams.getInstance().activeFeatureClass,this.activePoint.SsEventID,this.activePoint.BeginStation,50,this.unitEventid,lang.hitch(this,this.apdmSearchPointbySsStationComplete),lang.hitch(this,this.executeFault));
                    }else if(this.activePoint.LineLoopEventID){
                        this.apdmOperation.getNearMarkerbyLineStation(this.activePoint.LineLoopEventID,this.activePoint.BeginStation,lang.hitch(this,function(event){
                            var mPosSoeResult=event.mPosSoeResult;
                            this.apdmOperation.apdmSearchPointbySsStation(CommonParams.getInstance().activeFeatureClass,mPosSoeResult.BeginSsEventID,mPosSoeResult.BeginStation,50,this.unitEventid,lang.hitch(this,this.apdmSearchPointbySsStationComplete),lang.hitch(this,this.executeFault));
                        }),lang.hitch(this,this.executeFault));
                    }else{
                        layer.msg("It has not SsEventID or LineLoopEventID");
                    }
                    break;
                case "mapContextLocation":
                    this.apdmOperation.getNearMarkerbyLineStation(this.activePoint.LineLoopEventID,(this.activePoint.BeginStation-this.activePoint.MarkerOffset),lang.hitch(this,this.getNearMarkerbyLineStationComplete),lang.hitch(this,this.executeFault));
                    break;
                case "mapContextDLocation":
                    var language=CommonParams.getInstance().lang=="zh"?"zh-cn":CommonParams.getInstance().lang
                    var dgisURL=configProject.DGIS+"?locale="+language+"&unitEventid="+CommonParams.getInstance().unitEventid+
                        "&unitId="+CommonParams.getInstance().unitId+"&unitName="+CommonParams.getInstance().unitName;
                    //window.open(DGIS+'?type=pointlocation&x='+graphic.geometry.x+"&y="+graphic.geometry.y,"3DGISWindow");
                    //HTML5的postMessage方式实现静态HTML间的传值
                    this.DGISWindow = window.open(dgisURL,"3DGISWindow");
                    /*if(this.DGISWindow==null || this.DGISWindow.closed){
                        this.DGISWindow = window.open(dgisURL,"3DGIS");
                    }else{
                        this.DGISWindow.focus();
                    }*/
                    break;
                default:

            }
        },

        //初始化选中管线图层（包括点及线）
        creatPipeGraphicLayer:function(){
            //this.map.removeLayer(this.pipeLineGraphicLayer);
            //this.map.removeLayer(this.pipePointGraphicLayer);
            this.map.addLayer(this.pipeLineGraphicLayer);
            this.map.addLayer(this.pipePointGraphicLayer);
            if(this.pipeLineGraphicLayer.graphics.length==0){
                this.pipeLineGraphicLayer.add(this.lineGraphic);
            }
            if(this.pipePointGraphicLayer.graphics.length==0){
                this.pipePointGraphicLayer.add(this.centerGraphic);
                this.pipePointGraphicLayer.add(this.beginGraphic);
                this.pipePointGraphicLayer.add(this.endGraphic);
            }
        },

        /**
         * 改变管线状态，起点或终点改变（订阅观察者类）
         * @param e
         */
        changePipelineStatus:function(e){
            this.mapPipelineStatus= e.args.mapPipelineStatus;
            if(this.mapPipelineStatus){
                //this.map.setExtent(this.mapPipelineStatus.mPolyline.getExtent().expand(1.5));
                this.creatPipeGraphicLayer();
                this.lineGraphic.setGeometry(this.mapPipelineStatus.mPolyline);
                this.centerGraphic.setGeometry(this.mapPipelineStatus.CenterPoint.Point);
                this.endGraphic.setGeometry(this.mapPipelineStatus.EndPoint.Point);
                this.beginGraphic.setGeometry(this.mapPipelineStatus.BeginPoint.Point);
            }
        },

        getPipePoint3byPoint2Complete:function(event){
            this.loading.hide();
            var lc_soeResult=event.mPosSoeResult;
            var lc_centerResult=event.mCenterResult;
            var mapPipelineStatus=MapPipelineStatus.getInstance();
            var polylineJson = {
                "paths":lc_soeResult.mLine.paths,
                "spatialReference":this.map.spatialReference//结果返回3857，转换成标准写法102100
            };
            mapPipelineStatus.mUnitEventID=CommonParams.getInstance().unitEventid;
            mapPipelineStatus.mUnitName=CommonParams.getInstance().unitName;
            mapPipelineStatus.mPolyline=new Polyline(polylineJson);
            mapPipelineStatus.BeginPoint={
                LineLoopEventID:lc_soeResult.mLineLoopEventID,
                LineLoopName:lc_soeResult.mLineLoopName,
                Point:new Point(lc_soeResult.BeginPoint[0],lc_soeResult.BeginPoint[1],this.map.spatialReference),
                BeginStationSeriesEventID:lc_soeResult.mBeginStationSeriesEventID,
                BeginStation:lc_soeResult.mBeginStation,
                BeginMarkerEventID:lc_soeResult.mBeginMarkerEventID,
                BeginMarkerName:lc_soeResult.mBeginMarkerName,
                BeginMarkerOffset:lc_soeResult.mBeginMarkerOffset
            };
            mapPipelineStatus.EndPoint={
                LineLoopEventID:lc_soeResult.mLineLoopEventID,
                LineLoopName:lc_soeResult.mLineLoopName,
                Point:new Point(lc_soeResult.EndPoint[0],lc_soeResult.EndPoint[1],this.map.spatialReference),
                EndStationSeriesEventID:lc_soeResult.mEndStationSeriesEventID,
                EndStation:lc_soeResult.mEndStation,
                EndMarkerEventID:lc_soeResult.mEndMarkerEventID,
                EndMarkerName:lc_soeResult.mEndMarkerName,
                EndMarkerOffset:lc_soeResult.mEndMarkerOffset
            };
            if(!mapPipelineStatus.CenterPoint||mapPipelineStatus.CenterPoint.CenterStation<mapPipelineStatus.BeginPoint.BeginStation||mapPipelineStatus.CenterPoint.CenterStation>mapPipelineStatus.EndPoint.EndStation)
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
        getPipePointbyPointComplete:function(event){
            this.loading.hide();
            var lc_soeResult=event.mPosSoeResult;
            var mapPipelineStatus=MapPipelineStatus.getInstance();
            if(lc_soeResult.mLineLoopEventID==mapPipelineStatus.CenterPoint.LineLoopEventID&&lc_soeResult.mBeginStation<mapPipelineStatus.EndPoint.EndStation&&lc_soeResult.mBeginStation>mapPipelineStatus.BeginPoint.BeginStation){
                //必须在同一管网且在管网里程范围内
                mapPipelineStatus.CenterPoint={
                    LineLoopEventID:lc_soeResult.mLineLoopEventID,
                    LineLoopName:lc_soeResult.mLineLoopName,
                    Point:new Point(lc_soeResult.BeginPoint.x,lc_soeResult.BeginPoint.y,this.map.spatialReference),
                    CenterStationSeriesEventID:lc_soeResult.mBeginStationSeriesEventID,
                    CenterStation:lc_soeResult.mBeginStation,
                    CenterMarkerEventID:lc_soeResult.mBeginMarkerEventID,
                    CenterMarkerName:lc_soeResult.mBeginMarkerName,
                    CenterMarkerOffset:lc_soeResult.mBeginMarkerOffset
                };
                var pipelineObserver=PipelineObserver.getInstance();
                pipelineObserver.fire('changePipelineStatus',{
                    mapPipelineStatus:mapPipelineStatus
                });
            }else{
                //复原管线状态
                this.creatPipeGraphicLayer();
                this.lineGraphic.setGeometry(this.mapPipelineStatus.mPolyline);
                this.centerGraphic.setGeometry(this.mapPipelineStatus.CenterPoint.Point);
                this.beginGraphic.setGeometry(this.mapPipelineStatus.BeginPoint.Point);
                this.endGraphic.setGeometry(this.mapPipelineStatus.EndPoint.Point);
            }
        },
        //获取高程等基本信息
        getDepthByLineStationComplete:function(event){
            var lc_soeResult=event.mPosSoeResult;
            var jsonPoint=JSON.parse(JSON.parse(lc_soeResult.mPoint));
            var locationPoint=new Point(jsonPoint.x,jsonPoint.y,this.map.spatialReference);
            var alianValues={
                lineLoopName:this.nls.lineLoopName,
                markername:this.nls.markername,
                elevation:this.nls.elevation,
                depth:this.nls.depth,
                station:this.nls.station
            };
            var dataValues={lineLoopName:lc_soeResult.LineLoopName,
                markername:lc_soeResult.mBeginMarkerName,
                elevation:lc_soeResult.Elevation,
                depth:lc_soeResult.Depth,
                station:this.activePoint.BeginStation,
            };
            var cinfoData={
                dataValues:dataValues,
                alianValues:alianValues,
                viewsPanel:"1,2,3",
                location:locationPoint
            };
            this.map.infoWindow.setTitle(this.nls.pipeinfo);
            var cinfoWindow=new CinfoWindow({
                map:this.map,
                data:cinfoData
            });
            /*this.map.infoWindow.setContent(cinfoWindow.domNode);
            this.map.infoWindow.show(locationPoint);*/
            var windowContent= function() {
                var divContent = new ContentPane({
                    content:cinfoWindow.domNode,
                    style:"padding:0px"
                });
                return cinfoWindow.domNode;
            };
            var layerInfoTemplate =new InfoTemplate(this.nls.pipeinfo,windowContent);//自定义地图info内容
            var infoGraphics=[new Graphic(locationPoint, null, null, layerInfoTemplate)];
            this.map.infoWindow.setFeatures(infoGraphics);
            this.map.infoWindow.show(locationPoint);
        },
        //查询点前后一段范围内的要素
        apdmSearchPointbySsStationComplete:function(event){
            var lc_soeResult=event.mPosSoeResult;
            var attributeTable=lc_soeResult.AttributeTable;
            if (attributeTable) {
                var attributeTableObj=JSON.parse(attributeTable);
                var TableName=attributeTableObj["TableName"];//String,查询类别
                var ShapeType=attributeTableObj["ShapeType"];//String，结果图形类别
                var Fields=attributeTableObj["Fields"];//Object，结果字段别名
                var rowsArr=attributeTableObj["Rows"];//Array，结果

                var graphicSymbol;
                var locationPoint;
                if(ShapeType=="1")
                {
                    graphicSymbol=new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE,
                        16, null, new Color("#00FFFF"));
                }else if(ShapeType=="2")
                {
                    graphicSymbol=new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color("#00FFFF"), 10);
                }

                if(rowsArr.length>=1)
                {
                    this.map.graphics.clear();
                    //构造结果Graphic
                    for(var j=0;j<rowsArr.length;j++)
                    {
                        var rowObj=rowsArr[j];
                        var graphicQuery=new Graphic();
                        graphicQuery.setSymbol(graphicSymbol);//构造symbol
                        var geometryObj=rowObj["Coord"];
                        if(ShapeType=="1")//构造geometry
                        {
                            graphicQuery.setGeometry(new Point(geometryObj)); //在线点
                            locationPoint=new Point(geometryObj);
                        }else if(ShapeType=="2")
                        {
                            graphicQuery.setGeometry(new Polyline(geometryObj));
                            locationPoint=new Polyline(geometryObj).getExtent().getCenter();
                        }
                        this.map.graphics.add(graphicQuery);
                    }
                    var cinfoData={
                        dataValues:rowObj,
                        alianValues:Fields,
                        location:locationPoint
                    };
                    this.map.infoWindow.setTitle(this.nls.attribute);
                    var cinfoWindow=new CinfoWindow({
                        map:this.map,
                        data:cinfoData
                    });
                    /*this.map.infoWindow.setContent(cinfoWindow.domNode);
                    this.map.infoWindow.show(locationPoint);*/
                    var windowContent= function() {
                        var divContent = new ContentPane({
                            content:cinfoWindow.domNode,
                            style:"padding:0px"
                        });
                        return cinfoWindow.domNode;
                    };
                    var layerInfoTemplate =new InfoTemplate(this.nls.attribute,windowContent);//自定义地图info内容
                    var infoGraphics=[new Graphic(locationPoint, null, null, layerInfoTemplate)];
                    this.map.infoWindow.setFeatures(infoGraphics);
                    this.map.infoWindow.show(locationPoint);
                }else if(rowsArr.length==0)
                {
                    layer.msg(this.nls.querynoresult);
                }
            }
        },
        //获取最近桩
        getNearMarkerbyLineStationComplete:function(event){
            var lc_soeResult=event.mPosSoeResult;
            var tolerance=commonUtils.pixelTpMapDistanceX(100,this.map);
            if(this.activePoint.Graphic==this.centerGraphic){//改变中点
                //var centerPoint=new Point(lc_soeResult.mPoint.x,lc_soeResult.mPoint.y,this.map.spatialReference);
                //this.apdmOperation.getPipePointbyPoint(centerPoint,tolerance,this.unitEventid,lang.hitch(this,this.getPipePointbyPointComplete),lang.hitch(this,this.executeFault));
                //必须在同一管网且在管网里程范围内
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                mapPipelineStatus.CenterPoint={
                    LineLoopEventID:lc_soeResult.LineLoopEventID,
                    LineLoopName:lc_soeResult.LineLoopName,
                    Point:new Point(lc_soeResult.mPoint.x,lc_soeResult.mPoint.y,this.map.spatialReference),
                    CenterStationSeriesEventID:lc_soeResult.BeginSsEventID,
                    CenterStation:lc_soeResult.BeginStation,
                    CenterMarkerEventID:lc_soeResult.mBeginMarkerEventID,
                    CenterMarkerName:lc_soeResult.mBeginMarkerName,
                    CenterMarkerOffset:lc_soeResult.mBeginMarkerOffset
                };
                var pipelineObserver=PipelineObserver.getInstance();
                pipelineObserver.fire('changePipelineStatus',{
                    mapPipelineStatus:mapPipelineStatus
                });
            }else if(this.activePoint.Graphic==this.beginGraphic){//改变起点
                var beginPoint=new Point(lc_soeResult.mPoint.x,lc_soeResult.mPoint.y,this.map.spatialReference);
                this.loading.show();
                this.apdmOperation.getPipePoint3byPoint2(beginPoint,this.endGraphic.geometry,tolerance,this.unitEventid,lang.hitch(this,this.getPipePoint3byPoint2Complete),lang.hitch(this,this.executeFault));
            }else if(this.activePoint.Graphic==this.endGraphic){//改变终点
                var endPoint=new Point(lc_soeResult.mPoint.x,lc_soeResult.mPoint.y,this.map.spatialReference);
                this.loading.show();
                this.apdmOperation.getPipePoint3byPoint2(this.beginGraphic.geometry,endPoint,tolerance,this.unitEventid,lang.hitch(this,this.getPipePoint3byPoint2Complete),lang.hitch(this,this.executeFault));
            }
        },
        executeFault:function(event){
            this.loading.hide();
            console.log(event.toString());
            layer.msg(event.toString());
            //复原管线状态
            this.creatPipeGraphicLayer();
            this.lineGraphic.setGeometry(this.mapPipelineStatus.mPolyline);
            this.centerGraphic.setGeometry(this.mapPipelineStatus.CenterPoint.Point);
            this.beginGraphic.setGeometry(this.mapPipelineStatus.BeginPoint.Point);
            this.endGraphic.setGeometry(this.mapPipelineStatus.EndPoint.Point);
        },
    });
    clazz.getInstance = function (params) {
        if (instance === null) {
            instance = new clazz(params);
        }else{
            instance.params = params;
        }
        return instance;
    };
    return clazz;
});