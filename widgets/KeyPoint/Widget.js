define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/html',
        "dojo/topic",
        'jimu/BaseWidget',
        'esri/layers/GraphicsLayer',
        'esri/graphic',
        'esri/geometry/Point',
        'esri/geometry/Polygon',
        "esri/symbols/SimpleFillSymbol",'esri/Color',
        'dojo/on','esri/symbols/TextSymbol',"esri/symbols/PictureMarkerSymbol",
        'jimu/PanelManager','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus","jimu/magicgis/util/services/KeyPointsService","jimu/magicgis/dijit/PageToolbar", 'dojox/grid/DataGrid','dojo/data/ItemFileWriteStore',
        "esri/graphicsUtils", 'jimu/magicgis/util/commonUtils', 'dojo/dom-style','jimu/PanelManager',
        'esri/InfoTemplate',"dijit/layout/ContentPane",
        "dijit/Dialog",'jimu/dijit/LoadingIndicator',
        'jimu/magicgis/util/CommonParams',
        "jimu/magicgis/configProject",
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, html,topic,BaseWidget,
               GraphicsLayer,Graphic,Point,Polygon,SimpleFillSymbol,Color,on,TextSymbol,PictureMarkerSymbol,
               PanelManager,_WidgetBase,_TemplatedMixin,focusUtil,KeyPointsService,
               PageToolbar,DataGrid,ItemFileWriteStore,graphicsUtils,commonUtils,domStyle,PanelManager,InfoTemplate,ContentPane,
               Dialog,LoadingIndicator,CommonParams,configProject) {
        var clazz=declare([BaseWidget,_TemplatedMixin, _WidgetsInTemplateMixin],{
            //templateString:template,
            baseClass: 'jimu-widget-keypoints',
            name: 'KeyPoints',
            ws:null,
            queryObj:null,
            //current_unitId:null,
            pageTool:null,
            kpLoadFlag:null,//判断是否初次加载
            _keyPointGraphicsLayer:null,
            _keyPointTextGraphicsLayer:null,//为了控制关键点标注的显示比例范围
            gridItemIndex:null,
            keyPoints:null,

            postCreate:function(){
                this.inherited(arguments);
                this.keyPoints=configProject.keyPoints;
                //this.current_unitId = "a1112be8-4e3c-4c79-be77-d345f38f0d21";
                this.queryObj={ags_departmentId:CommonParams.getInstance().unitEventid,ags_lineLoopEventId:"",searchMode:"1",
                    station:"",ags_beginStation:"",ags_endStation:"",ags_keyPointType:"",ags_keyPointName:""};
                this.pageTool=new PageToolbar({
                    map:this.map,
                    pageCount:10,
                    curPage:1,
                    totalPage:0,
                    totalCount:0,
                    start:0
                });
                this.pageTool.startup();
                this.pageTool.placeAt(this.pageToolDiv);
                this.own(on(this.pageTool, 'page-refreshed', lang.hitch(this, this._onRefreshed)));
                this.own(on(this.pageTool, 'page-prevdata', lang.hitch(this, this._onLoadData)));
            },

            startup: function () {
                this.inherited(arguments);
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(this.domNode);
                if(!this._keyPointTextGraphicsLayer) {
                    this._keyPointTextGraphicsLayer = new GraphicsLayer();
                    this._keyPointTextGraphicsLayer.setMinScale(72223.819286);
                    this.map.addLayer(this._keyPointTextGraphicsLayer);
                }
                if(!this._keyPointGraphicsLayer){
                    this._keyPointGraphicsLayer = new GraphicsLayer();
                    this.map.addLayer(this._keyPointGraphicsLayer);
                    this._keyPointGraphicsLayer.on("click", lang.hitch(this,function(event){
                        if(event.graphic.attributes){
                            var _keyPoint=event.graphic.geometry;
                            this.map.infoWindow.setTitle(this.nls.keypointdetail);
                            var layerInfoTemplateStr="";
                            var keyPointData=event.graphic.attributes;
                            for(var ikey in keyPointData){//用javascript的for/in循环遍历对象的属性
                                switch(ikey)
                                {
                                    case "NAME":
                                        layerInfoTemplateStr+=("<b>"+this.nls.name+"：</b>"+keyPointData[ikey]+"<br/>");
                                        break;
                                    case "TYPE":
                                        layerInfoTemplateStr+=("<b>"+this.nls.type+"：</b>"+keyPointData[ikey]+"<br/>");
                                        break;
                                    case "BUF":
                                        layerInfoTemplateStr+=("<b>"+this.nls.radius+"：</b>"+keyPointData[ikey]+"(米)<br/>");
                                        break;
                                    case "LN":
                                        layerInfoTemplateStr+=("<b>"+this.nls.pipeliename+"：</b>"+keyPointData[ikey]+"<br/>");
                                        break;
                                    case "X":
                                        layerInfoTemplateStr+=("<b>"+this.nls.lon+"：</b>"+keyPointData[ikey]+"<br/>");
                                        break;
                                    case "Y":
                                        layerInfoTemplateStr+=("<b>"+this.nls.lat+"：</b>"+keyPointData[ikey]+"<br/>");
                                        break;
                                    case "DES":
                                        layerInfoTemplateStr+=("<b>"+this.nls.describ+"：</b>"+keyPointData[ikey]+"<br/>");
                                        break;
                                    default:
                                    //layerInfoTemplateStr+=("<b>"+"${"+ikey+"}</b>"+inspectorData[ikey]);
                                }
                            }
                            /*this.map.infoWindow.setContent(layerInfoTemplateStr);
                            this.map.infoWindow.show(_keyPoint);*/
                            var layerInfoTemplate =new InfoTemplate(this.nls.keypointdetail,layerInfoTemplateStr);//自定义地图info内容
                            var infoGraphics=[new Graphic(_keyPoint, null, null, layerInfoTemplate)];
                            this.map.infoWindow.setFeatures(infoGraphics);
                            this.map.infoWindow.show(_keyPoint);
                        }
                    }));
                }
                this.kpLoadFlag="f";
                this.queryKeyPoint();
            },

            _keypressHandler:function(event){
                if(event.keyCode==13){
                    this.queryClick();
                }
            },

            _onRefreshed:function(data){
                this.queryClick();
            },

            _onLoadData:function(data){
                this.kpLoadFlag = data.flag;
                //this.queryObj.ags_keyPointName=this.queryWord.value;
                this.queryKeyPoint();
            },

            queryClick: function () {
                //this.queryObj.ags_keyPointName=this.queryWord.value;
                this.queryObj.ags_keyPointName=this.queryWord.displayedValue;
                this.kpLoadFlag = "f";
                this.pageTool.start=0;
                this.queryKeyPoint();
            },

            addClick: function () {
                topic.subscribe("initedKeyPointsQuery", function (flag) {
                    if(flag=="initedKeyPointsQuery"){
                        topic.publish('KeyPointsTable',{flag:"insert"});
                    }
                });
                for(var i=0;i<this.appConfig.widgetPool.widgets.length;i++){
                    var widget=this.appConfig.widgetPool.widgets[i];
                    if(widget.id=="KeyPointsPanel"){
                        PanelManager.getInstance().showPanel(widget);
                        topic.publish('KeyPointsTable',{flag:"insert"});
                    }
                }
            },

            queryKeyPoint: function () {
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints();
                    this.ws.url = this.keyPoints;
                }
                this.loading.show();
                this.ws.searchKeyPoints(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),
                    this.queryObj.ags_departmentId,this.queryObj.ags_lineLoopEventId,this.queryObj.searchMode,
                    this.queryObj.station,this.queryObj.ags_beginStation,this.queryObj.ags_endStation,this.queryObj.ags_keyPointType,
                    this.queryObj.ags_keyPointName,this.pageTool.start,this.pageTool.pageCount,"POINTPOSITION,CREATEDATE","DESC");*/
                this.processResponse(null);
            },

            processResponse:function(response){
                this.loading.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"msg":"查询成功!","success":1,"topics":[{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"d2f1e8b6-d3fd-4ab2-9cdd-2b9578cd49dd","MODIFYDATE":"","POINTPOSITION":"#4+5m","DELETE":"0","R":0,"DESCRIPTION":"","EFFECTIVEBEGINDATE":"07-14","UPDATE":"0","SHOW":1,"TYPE":"02","TYPEVALUE":"02","STATION":4752.57,"LINELOOPNAME":"津华线","UNITID":"c0264840-a8a6-11e5-af30-e41f13e34b20","MODIFYBY":"","CREATEDATE":"2017-07-14","EVENTID":"6d962760-6832-11e7-8422-5cf3fc946ca6","LON":117.70291833333334,"BUFFER":100,"NAME":"4#测试桩","UNITNAME":"青县输油站","CREATEBY":"031bb610-a560-11e6-a455-e41f13e34d4c","EFFECTIVEENDDATE":"07-14","LAT":38.95064833333333},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0015+630m","DELETE":"0","R":1,"DESCRIPTION":"","EFFECTIVEBEGINDATE":"09-07","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":14308.899,"LINELOOPNAME":"兰郑长干线","UNITID":"48c11ac0-3098-11dd-8471-001302c7dffa","MODIFYBY":"","CREATEDATE":"2016-09-07","EVENTID":"9ce67c10-74a7-11e6-a888-40f2e9636934","LON":103.616637,"BUFFER":200,"NAME":"15+630","UNITNAME":"兰州输油站","CREATEBY":"7ce0a2c0-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"12-30","LAT":35.977672},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0105+150m","DELETE":"0","R":2,"DESCRIPTION":"定西所辖管道起点，第三方施工高发段","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":101780.891,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"505d6230-6fe5-11e6-b5bc-40f2e9636934","LON":104.307895,"BUFFER":100,"NAME":"起点","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.601622},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0107+200m","DELETE":"0","R":3,"DESCRIPTION":"河滩，第三方施工高发期。","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":103768.807,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"6606b430-6fe8-11e6-b5bc-40f2e9636934","LON":104.319273,"BUFFER":150,"NAME":"107+100","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.589002},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0108+100m","DELETE":"0","R":4,"DESCRIPTION":"人口密集区，容易出现第三方施工","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":104645.871,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"35422810-6fe9-11e6-b5bc-40f2e9636934","LON":104.326128,"BUFFER":100,"NAME":"108","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.581655},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0109+150m","DELETE":"0","R":5,"DESCRIPTION":"第三方施工高发地段。","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":105672.935,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"072192d0-6fea-11e6-b5bc-40f2e9636934","LON":104.337198,"BUFFER":150,"NAME":"109+200","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.577753},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0110+150m","DELETE":"0","R":6,"DESCRIPTION":"高后果区，第三方施工高发地段。","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":105973,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"fa355b50-6fea-11e6-b5bc-40f2e9636934","LON":104.342933,"BUFFER":150,"NAME":"110+200","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.575373},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0112+100m","DELETE":"0","R":7,"DESCRIPTION":"农田地，易发第三方施工。","EFFECTIVEBEGINDATE":"09-10","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":106600,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-10","EVENTID":"5cf4afa0-76fa-11e6-a888-40f2e9636934","LON":104.367512,"BUFFER":50,"NAME":"112+900","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.561647},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0112+100m","DELETE":"0","R":8,"DESCRIPTION":"高后果区，第三方施工高发地段。","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":106600,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"a9b989d0-7012-11e6-b5bc-40f2e9636934","LON":104.358933,"BUFFER":100,"NAME":"112+200","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.568095},{"LOCATION":1,"ACTIVE":1,"LINELOOPEVENTID":"a347b54b-df9d-43f4-bece-4065804d1ec1","MODIFYDATE":"","POINTPOSITION":"0113+100m","DELETE":"0","R":9,"DESCRIPTION":"好后果区，第三方施工高发地段。","EFFECTIVEBEGINDATE":"09-01","UPDATE":"0","SHOW":1,"TYPE":"","TYPEVALUE":"","STATION":107527.604,"LINELOOPNAME":"兰郑长干线","UNITID":"59fc4fa0-bd4e-11de-a644-02004c4f4f50","MODIFYBY":"","CREATEDATE":"2016-09-01","EVENTID":"c65668a0-7013-11e6-b5bc-40f2e9636934","LON":104.367612,"BUFFER":100,"NAME":"113+200","UNITNAME":"定西减压站","CREATEBY":"0a87b790-5e86-11e0-ba5b-e41f13e31d04","EFFECTIVEENDDATE":"01-01","LAT":35.561492}],"totalCount":"64465"}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("result is 0");
                } else {
                    var objData=dojo.fromJson(dataJson);
                    if (objData != null) {
                        if (objData.topics && objData.topics.length > 0 && objData.totalCount != 0) {
                            domStyle.set(this.gridDiv,"visibility","visible");
                            this.pageTool.totalCount = objData.totalCount;
                            if (this.kpLoadFlag == "f") {// 判断是否首次加载
                                this.pageTool.init();
                            }
                            //kpGrid.dataProvider = new ArrayCollection(objData.topics as Array);//result.topics;
                            this.getData2Grid(objData.topics);
                            this.showKeyPointCommon(objData.topics, true);
                        }else{
                            //this.grid.setStore(null);
                            domStyle.set(this.gridDiv,"visibility","hidden");
                            /* domStyle.set(this.gridDivLabel,"visibility","visible");*/
                            this._keyPointGraphicsLayer.clear();
                            this._keyPointTextGraphicsLayer.clear();
                            this.pageTool.totalCount = 0;
                            this.pageTool.totalPage = 0;
                            this.pageTool.init();
                        }
                    }else{
                        this.gridDiv.innerHTMl="no result";
                    }
                }
            },
            reportError:function(response){
                this.loading.hide();
                console.log("searchKeyPoints失败"+response);
                layer.msg("searchKeyPoints error"+response);
            },

            getData2Grid:function(list){
                var data={
                    identifier:"id",
                    items:[]
                };
                for(var i= 0,l=list.length;i<l;i++){
                    data.items.push(lang.mixin({id:i+1},list[i%l]));
                }
                var store=new ItemFileWriteStore({data:data});
                var layout=[[
                    {'name':"",'width':'20px',
                        formatter: lang.hitch(this, this.fetchImg, "edit")
                    },
                    {'name':"",'width':'20px',
                        formatter: lang.hitch(this, this.fetchImg, "delete")
                    },
                    {'name':this.nls.keypointname,'field':'NAME','width':'150px'},
                    {'name':this.nls.position,'field':'POINTPOSITION','width':'150px'},
                    {'name':this.nls.datetime,'fields':["EFFECTIVEBEGINDATE", "EFFECTIVEENDDATE"],'width':'100px',
                        formatter: function(fields){
                            var first = fields[0],
                                last = fields[1];
                            return last + "至 " + first;
                        }
                    },
                    {'name':this.nls.buffer,'field':'BUFFER','width':'80px'},
                    {'name':this.nls.department,'field':'UNITNAME','width':'100px'}
                ]];

                if(typeof(this.grid)=="undefined"){
                    this.grid=new DataGrid({
                        store:store,
                        structure:layout,
                        rowSelector:'20px',
                        rowsPerPage:10
                    },this.gridDivNode);
                    this.grid.startup();
                    this.grid.set("onRowDblClick",lang.hitch(this,this.cellClickGrid));
                    this.connect(this, "resize", function () {
                        this.grid.resize();
                    });
                }else{
                    this.grid.setStore(store);
                }
            },

            fetchImg:function(flag, cellValue, rowIndex, object){//flag，后面的三个参数是formatter传入的
                //var name = grid.getItem(rowIndex).name;// 取本行的name字段值
                var imgUrl,imgTitle;
                if(flag=="edit"){
                    imgUrl='jimu.js/magicgis/images/keypoints/e.png';
                    imgTitle=this.nls.edit;
                }else if(flag=="delete"){
                    imgUrl='jimu.js/magicgis/images/keypoints/d.png';
                    imgTitle=this.nls.delete;
                }
                //return "<img data-dojo-attach-event='onclick:_onOkClick' style='cursor: pointer' title='"+imgTitle+"' src='"+imgUrl+"'>";
                var imgCont=new ContentPane({
                    content:"<img style='cursor: pointer' title='"+imgTitle+"' src='"+imgUrl+"'>",
                    style:"width:16px;padding:0px",
                    onClick: lang.hitch(this,function() {
                        this._itemClick(flag,rowIndex);
                    })
                });
                return imgCont;
            },

            _itemClick: function (flag,rowIndex) {
                this.gridItemIndex=rowIndex;
                var item = this.grid.getItem(this.gridItemIndex);
                if(flag=="edit"){
                    topic.subscribe("initedKeyPointsQuery", function (flag) {
                        if(flag=="initedKeyPointsQuery"){
                            topic.publish('KeyPointsTable',{flag:"edit",item:item});
                        }
                    });
                    for(var i=0;i<this.appConfig.widgetPool.widgets.length;i++){
                        var widget=this.appConfig.widgetPool.widgets[i];
                        if(widget.id=="KeyPointsPanel"){
                            PanelManager.getInstance().showPanel(widget);
                            topic.publish('KeyPointsTable',{flag:"edit",item:item});
                        }
                    }
                }else if(flag=="delete"){
                    this.deleteDialog.show();
                }
            },

            _onDeleteClick:function() {
                var item = this.grid.getItem(this.gridItemIndex);
                if (item.EVENTID[0]) {
                    layer.msg("正式库不允许删除,模拟删除成功");//正式发布注释掉
                    /*var oid=item.EVENTID[0];
                     if(this.ws==null)
                     {
                     this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints();
                     this.ws.url = 'http://10.100.1.173:8080/cxfWebService/webservice/KeyPoints';
                     }
                     this.loading.show();
                     this.ws.deleteKeyPoint(lang.hitch(this,this.deleteKyesResponse),lang.hitch(this,this.reportError),oid);*/
                }
            },

            deleteKyesResponse:function(response){
                this.deleteDialog.hide();
                this.loading.hide();
                var dataJson = response.getReturn();
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("result is 0");
                } else {
                    var objData=dojo.fromJson(dataJson);
                    if (objData != null) {
                        if (objData.success == "1") {
                            this.queryClick();
                            layer.msg(this.nls.deletesuccess);
                        } else {
                            layer.msg(this.nls.deletefail+objData.msg);
                        }
                    }else{
                        this.gridDiv.innerHTMl="no result";
                    }
                }
            },

            _onDeleteCancel:function() {
                this.deleteDialog.hide();
            },

            cellClickGrid:function(e){
                var item=this.grid.getItem(e.rowIndex);
                var lc_xc = commonUtils._lonToMercator(Number(item.LON[0]));
                var lc_yc = commonUtils._latToMercator(Number(item.LAT[0]));
                var mp = new Point(lc_xc,lc_yc,this.map.spatialReference);
                var symbol = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/mapZoom.png", 32, 32);
                var g = new Graphic(mp, symbol);
                //this.map.centerAt(mp);
                //commonUtils.flashGraphic(g,this.map.graphics);

                this.map.infoWindow.setTitle(this.nls.keypointdetail);
                var layerInfoTemplateStr="";
                for(var ikey in item){//用javascript的for/in循环遍历对象的属性
                    switch(ikey)
                    {
                        case "NAME":
                            layerInfoTemplateStr+=("<b>"+this.nls.name+"：</b>"+item[ikey][0]+"<br/>");
                            break;
                        case "TYPE":
                            layerInfoTemplateStr+=("<b>"+this.nls.type+"：</b>"+item[ikey][0]+"<br/>");
                            break;
                        case "BUF":
                            layerInfoTemplateStr+=("<b>"+this.nls.radius+"：</b>"+item[ikey][0]+"(米)<br/>");
                            break;
                        case "LINELOOPNAME":
                            layerInfoTemplateStr+=("<b>"+this.nls.pipeliename+"：</b>"+item[ikey][0]+"<br/>");
                            break;
                        case "LON":
                            layerInfoTemplateStr+=("<b>"+this.nls.lon+"：</b>"+item[ikey][0]+"<br/>");
                            break;
                        case "LAT":
                            layerInfoTemplateStr+=("<b>"+this.nls.lat+"：</b>"+item[ikey][0]+"<br/>");
                            break;
                        case "DESCRIPTION":
                            layerInfoTemplateStr+=("<b>"+this.nls.describ+"：</b>"+item[ikey][0]+"<br/>");
                            break;
                        default:
                        //layerInfoTemplateStr+=("<b>"+"${"+ikey+"}</b>"+inspectorData[ikey]);
                    }
                }
                /*this.map.infoWindow.setContent(layerInfoTemplateStr);
                this.map.infoWindow.show(mp);*/
                var layerInfoTemplate =new InfoTemplate(this.nls.keypointdetail,layerInfoTemplateStr);//自定义地图info内容
                var infoGraphics=[new Graphic(mp, null, null, layerInfoTemplate)];
                this.map.infoWindow.setFeatures(infoGraphics);
                this.map.infoWindow.show(mp);
                this.map.centerAt(mp);
            },

            /**
             * 显示巡线工的关键点
             * dataObj 单位数据对象或个人数据对象
             * isShowBuffer 是否显示缓冲区
             */
            showKeyPointCommon:function(dataObj,isShowBuffer){
                //画关键点
                var garr = new Array();
                var line = null;
                var xmin = -180,ymin=-90,xmax=180,ymax=90;

                this._keyPointGraphicsLayer.clear();
                this._keyPointTextGraphicsLayer.clear();

                for (var i=0;i<dataObj.length;i++) {
                    //var obj = dataObj[i];
                    var obj ={
                        "LN":dataObj[i].LINELOOPNAME,
                        "NAME":dataObj[i].NAME,
                        "X":dataObj[i].LON,
                        "Y":dataObj[i].LAT,
                        "BUF":dataObj[i].BUFFER,
                        "DES":dataObj[i].DESCRIPTION
                    };
                    var lc_turn_X = commonUtils._lonToMercator(Number(obj.X));
                    var lc_turn_Y = commonUtils._latToMercator(Number(obj.Y));

                    //是否绘制缓冲范围
                    if (isShowBuffer == true) {
                        this.DrawCirclePolygonCommon(lc_turn_X, lc_turn_Y, obj.BUF,0.5,"ff3300",20);
                    }
                    var symmark = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/kp1.png", 40, 40);
                    if(obj.PS == "1"){ ///已巡的关键点，采用别的颜色
                        symmark = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/kp2.png", 32, 32);
                    }
                    //加气泡图标
                    var mpoint=new Point(lc_turn_X, lc_turn_Y,this.map.spatialReference);
                    var graphic = new Graphic(mpoint,symmark,obj);
                    this._keyPointGraphicsLayer.add(graphic);
                    //graphic.toolTip = "名称："+obj.NAME+"\n类型："+obj.TYPE+"\n缓冲范围："+obj.BUF+"(米)\n管线："+obj.LN;

                    //为地图上小关键点增加名字标注
                    // 创建要素
                    var gl = new Graphic(mpoint);
                    gl.checkForMouseListeners = false;
                    gl.buttonMode = false;
                    var labelSymbol = new TextSymbol(obj.NAME);
                    labelSymbol.setOffset(1, -13);
                    labelSymbol.setColor(new Color([255, 0, 255,0.9]));
                    gl.symbol = labelSymbol;
                    this._keyPointTextGraphicsLayer.add(gl);
                    //graphic.addEventListener(MouseEvent.CLICK, infowinOpen);
                    garr[i] = graphic;
                }
                if(garr.length >2) {
                    var myFeatureExtent = graphicsUtils.graphicsExtent(garr).expand(1.2);
                    this.map.setExtent(myFeatureExtent);
                }
            },

            DrawCirclePolygonCommon:function(x,y,r,alpha,color,n){
                var paths= new Array();
                var rightTopPaths= new Array();
                var rightBottomPaths= new Array();
                var leftTopPaths= new Array();
                var leftBottomPaths= new Array();
                for(var i=0; i<n; i++) {
                    var mappoint1x = x + Math.cos(i*Math.PI/(2*n))*r;
                    var mappoint1y = y + Math.sin(i*Math.PI/(2*n))*r;
                    var mappoint1= new Point(mappoint1x,mappoint1y,this.map.spatialReference);
                    rightTopPaths.push(mappoint1);

                    var mappoint2x = x + Math.cos(i*Math.PI/(2*n))*r;
                    var mappoint2y = y - Math.sin(i*Math.PI/(2*n))*r;
                    var mappoint2 = new Point(mappoint2x,mappoint2y,this.map.spatialReference);
                    rightBottomPaths.push(mappoint2);

                    var mappoint3x = x - Math.cos(i*Math.PI/(2*n))*r;
                    var mappoint3y = y + Math.sin(i*Math.PI/(2*n))*r;
                    var mappoint3 = new Point(mappoint3x,mappoint3y,this.map.spatialReference);
                    leftTopPaths.push(mappoint3);

                    var mappoint4x = x - Math.cos(i*Math.PI/(2*n))*r;
                    var mappoint4y = y - Math.sin(i*Math.PI/(2*n))*r;
                    var mappoint4 = new Point(mappoint4x,mappoint4y,this.map.spatialReference);
                    leftBottomPaths.push(mappoint4);
                }
                //纠正吻合误差
                rightTopPaths.push(new Point(x,y+r));
                rightBottomPaths.push(new Point(x,y-r));
                leftBottomPaths.push(new Point(x,y-r));
                leftTopPaths.push(new Point(x,y+r));
                rightTopPaths.push(new Point(x,y));
                rightBottomPaths.push(new Point(x,y));
                leftBottomPaths.push(new Point(x,y));
                leftTopPaths.push(new Point(x,y));

                /*paths.push(rightTopPaths);
                 paths.push(rightBottomPaths);
                 paths.push(leftBottomPaths);
                 paths.push(leftTopPaths);*/
                for(var j=0; j<rightTopPaths.length; j++) {
                    paths.push([rightTopPaths[j].x,rightTopPaths[j].y]);
                }
                for(var x=0; x<rightBottomPaths.length; x++) {
                    paths.push([rightBottomPaths[x].x,rightBottomPaths[x].y]);
                }
                for(var y=0; y<leftBottomPaths.length; y++) {
                    paths.push([leftBottomPaths[y].x,leftBottomPaths[y].y]);
                }
                for(var z=0; z<leftTopPaths.length; z++) {
                    paths.push([leftTopPaths[z].x,leftTopPaths[z].y]);
                }

                //var circle = new Polygon(paths);
                var circle = new Polygon(this.map.spatialReference);
                circle.addRing(paths);
                var graphic = new Graphic();
                graphic.setGeometry(circle);
                var sm = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,null,new Color([255,51,0,0.5]));
                //sm.color = new uint("0x"+color);
                graphic.symbol= sm;
                sm.alpha = alpha;
                this._keyPointGraphicsLayer.add(graphic);
            },

            /*setMaxHeight:function(maxHeight){
                html.setStyle(this.h_groupGrid, 'height', (maxHeight+70)+'px');
                if(this.grid)this.grid.resize();
            },*/

            onOpen: function () {
            },

            onClose:function(){
                this.grid=null;
                dojo.empty(this.gridDivNode);
                if(this._keyPointGraphicsLayer){
                    this._keyPointGraphicsLayer.clear();
                    this.map.removeLayer(this._keyPointGraphicsLayer);
                    this._keyPointGraphicsLayer = null;
                }
                if(this._keyPointTextGraphicsLayer){
                    this._keyPointTextGraphicsLayer.clear();
                    this.map.removeLayer(this._keyPointTextGraphicsLayer);
                    this._keyPointTextGraphicsLayer = null;
                }
            },

            /*destroy:function(){
             this.inherited(arguments);
             },*/
        });
        return clazz;
    });