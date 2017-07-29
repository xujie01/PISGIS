define(['dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'jimu/BaseWidget',
        'dojox/grid/DataGrid',
        'dojo/data/ItemFileWriteStore',
        'jimu/dijit/LoadingShelter',
        'dojo/dom-style',
        'dojo/_base/html',
        'esri/graphic',
        'esri/layers/GraphicsLayer',
        "jimu/magicgis/dijit/MUserInfoWindow",
        'esri/Color','esri/InfoTemplate',
        'esri/symbols/TextSymbol',
        'esri/geometry/Point',"esri/symbols/PictureMarkerSymbol",
        'dojo/query','jimu/magicgis/util/commonUtils',
        "dijit/layout/ContentPane",
        'jimu/magicgis/util/PipelineOperation/MapPipelineStatus',
        "jimu/magicgis/configProject","jimu/magicgis/util/services/GetInspectionInfoDataService",
        'jimu/magicgis/util/services/HistoryPointsService'
    ],
    function (lang,_WidgetsInTemplateMixin, declare, BaseWidget,DataGrid,ItemFileWriteStore,LoadingShelter,domStyle,html,
        Graphic,GraphicsLayer,MUserInfoWindow,Color,InfoTemplate,TextSymbol,Point,PictureMarkerSymbol,query,commonUtils,ContentPane,
              MapPipelineStatus,configProject) {
        return declare([BaseWidget, _WidgetsInTemplateMixin], {
            //templateString:template,
            baseClass: 'jimu-widget-inspection',
            name: 'Inspection',
            inspectionDateTimer:null,
            inspectionInfoSearch:null,
            ws:null,
            inspectorLocationWS:null,
            inspectorObj:null,
            historyPoints:null,
            _personGraphicsLayer: null,

            postCreate: function () {
                this.inherited(arguments);
                this.inspectionInfoSearch=configProject.inspectionInfoSearch;
                this.historyPoints=configProject.historyPoints;
                this.shelter = new LoadingShelter({
                    hidden: true
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();
            },

            startup: function () {
                this.inherited(arguments);
                this.connect(this, "resize", function () {
                    if(this.grid)this.grid.resize();
                });

                var date = new Date();
                var day = date.getDate().toString();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var showDate =year+"/"+month+"/"+day;
                this.inspectionDate.setDisplayedValue(showDate);

                var targetNode = this.personsDiv;
                targetNode.onclick=lang.hitch(this,function(evt){//事件代理
                    var e=event||evt;
                    var obj=e.srcElement||e.target;
                    if(obj.tagName=='LI'){
                        this.activePersonDiv(obj.getAttribute("data-id"));
                        this.activePerson(obj.parentNode.getAttribute("data-id"),obj.parentNode.getAttribute("data-name"));
                    }else if(obj.parentNode.tagName=='LI'){
                        this.activePersonDiv(obj.parentNode.getAttribute("data-id"));
                        this.activePerson(obj.parentNode.getAttribute("data-id"),obj.parentNode.getAttribute("data-name"));
                    }});

                if(!this._personGraphicsLayer){
                    this._personGraphicsLayer = new GraphicsLayer();
                    this.map.addLayer(this._personGraphicsLayer);
                    this._personGraphicsLayer.on("click", lang.hitch(this,function(event){
                        if(event.graphic.attributes){
                            this._personPoint=event.graphic.geometry;
                            this.map.infoWindow.setTitle(this.nls.personDetail);
                            /*this.map.infoWindow.setContent(this.nls.querying);
                            this.map.infoWindow.show(_personPoint);*/
                            var layerInfoTemplate =new InfoTemplate(this.nls.personDetail,this.nls.querying);//自定义地图info内容
                            var infoGraphics=[new Graphic(this._personPoint, null, null, layerInfoTemplate)];
                            this.map.infoWindow.setFeatures(infoGraphics);
                            this.map.infoWindow.show(this._personPoint);
                            this._personGraphicClick(event.graphic.attributes);
                        }
                    }));
                }
            },


            onOpen: function () {
                //if(this.inspectionDateTimer)this.loadInspectionList();
                if(this.inspectionDateTimer)this.processResponse(null);
            },

            _onDateChange:function(event){
                var currentDate = this.inspectionDate.get("value") || "";
                if(currentDate!=""){
                    this.inspectionDateTimer = dojo.date.locale.format( currentDate, {selector:"date", datePattern:'yyyy-MM-dd' } );
                }
                this.loadInspectionList();
            },

            loadInspectionList:function(){
                //创建WebService对象
                if(this.ws==null)
                {
                    this.ws = new def_service_cnpc_com__IGetInspectionInfoData();
                    this.ws.url = this.inspectionInfoSearch;
                }
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                this.shelter.show();
                //调用方法，使用参数
                this.ws.getInspectionPersonData(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),mapPipelineStatus.CenterPoint.LineLoopEventID,this.inspectionDateTimer,mapPipelineStatus.CenterPoint.CenterStation);
            },

            processResponse:function(response){
                this.shelter.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"AttributeTable":{"personInfo1":{"resultmap":[{"INSVEHICLE":"步巡","SKEYPOINT":"","DETERMINANT":"","LOGTIME":"至","CURENTKEYNUM":"","PROWAY":"","LOGPOSITION":" 至（）","POSITION":"中沧南线 首站南-CSZ-01 -40.157至南线L210 +62.899","ALLLENGTH":"88.305","EXECUNITNAME":"中原输油气分公司","AVGSPEED":"","RLENGTH":"","USERNAME":"位保延","INSYIELD":"","TRACKPOINTS":"","TASKPOSITION":"中沧南线 南线L085至南线L093","INSBDATE":"2017-07-20 00:00:00.0","INSDEVICE":"","CREATEDATE":"2016-12-26","ALLLKEYNUM":"","DATERANGE":"长期:2017-01-01至","UNITNAME":"中原输油气分公司_北杨集输气站","INSTYPE":"日常巡线","PLANNO":"20161226102649","INSFREQUNIT":"1次/1天","RKEYPOINT":"","CURENTLENGTH":"","SLENGTH":""}],"pointlist":[{"POINTPOSITION":"","BUFFERRANGE":"27.29","ARRIVALTIME":"2017-07-21 07:51:35.0","TYPE":"必到点","NAME":"中沧南线-L093"},{"POINTPOSITION":"","BUFFERRANGE":"49.32","ARRIVALTIME":"2017-07-21 08:02:59.0","TYPE":"必到点","NAME":"中沧南线-L092"},{"POINTPOSITION":"","BUFFERRANGE":"137.2","ARRIVALTIME":"2017-07-21 07:59:52.0","TYPE":"必到点","NAME":"中沧南线-L092+200米"},{"POINTPOSITION":"","BUFFERRANGE":"99.98","ARRIVALTIME":"2017-07-21 09:19:34.0","TYPE":"必到点","NAME":"中沧南线-L087"},{"POINTPOSITION":"","BUFFERRANGE":"80.34","ARRIVALTIME":"2017-07-21 09:33:00.0","TYPE":"必到点","NAME":"中沧南线-L086"},{"POINTPOSITION":"","BUFFERRANGE":"376.28","ARRIVALTIME":"2017-07-21 09:46:28.0","TYPE":"必到点","NAME":"中沧南线-L085"},{"POINTPOSITION":"","BUFFERRANGE":"205.27","ARRIVALTIME":"2017-07-21 09:10:15.0","TYPE":"必到点","NAME":"中沧南线-L088"},{"POINTPOSITION":"","BUFFERRANGE":"12.79","ARRIVALTIME":"2017-07-21 08:56:47.0","TYPE":"必到点","NAME":"中沧南线-L089+200米"},{"POINTPOSITION":"","BUFFERRANGE":"28.77","ARRIVALTIME":"2017-07-21 08:42:17.0","TYPE":"必到点","NAME":"中沧南线-L090"},{"POINTPOSITION":"","BUFFERRANGE":"207.87","ARRIVALTIME":"2017-07-21 08:14:22.0","TYPE":"必到点","NAME":"中沧南线-L091"},{"POINTPOSITION":"","BUFFERRANGE":"169.2","ARRIVALTIME":"2017-07-21 09:45:25.0","TYPE":"必到点","NAME":"中沧南线L085+400"},{"POINTPOSITION":"","BUFFERRANGE":"84.47","ARRIVALTIME":"2017-07-21 09:29:54.0","TYPE":"必到点","NAME":"中沧南线L086+450"},{"POINTPOSITION":"","BUFFERRANGE":"119.23","ARRIVALTIME":"2017-07-21 09:26:48.0","TYPE":"必到点","NAME":"中沧南线L086+750"},{"POINTPOSITION":"","BUFFERRANGE":"152.94","ARRIVALTIME":"2017-07-21 09:19:34.0","TYPE":"必到点","NAME":"中沧南线L087+200"},{"POINTPOSITION":"","BUFFERRANGE":"120.36","ARRIVALTIME":"2017-07-21 09:17:29.0","TYPE":"必到点","NAME":"中沧南线L087+300"},{"POINTPOSITION":"","BUFFERRANGE":"136.7","ARRIVALTIME":"2017-07-21 09:15:26.0","TYPE":"必到点","NAME":"中沧南线L087+550"},{"POINTPOSITION":"","BUFFERRANGE":"160.55","ARRIVALTIME":"2017-07-21 09:13:21.0","TYPE":"必到点","NAME":"中沧南线L087+700"},{"POINTPOSITION":"","BUFFERRANGE":"206.22","ARRIVALTIME":"2017-07-21 09:12:19.0","TYPE":"必到点","NAME":"中沧南线L087+760"},{"POINTPOSITION":"","BUFFERRANGE":"208.65","ARRIVALTIME":"2017-07-21 09:05:04.0","TYPE":"必到点","NAME":"中沧南线L088+500"},{"POINTPOSITION":"","BUFFERRANGE":"50","ARRIVALTIME":"2017-07-21 15:58:53.0","TYPE":"必到点","NAME":"中沧南线L089+800"},{"POINTPOSITION":"","BUFFERRANGE":"161.97","ARRIVALTIME":"2017-07-21 08:40:13.0","TYPE":"必到点","NAME":"中沧南线L090+200"},{"POINTPOSITION":"","BUFFERRANGE":"54.28","ARRIVALTIME":"2017-07-21 08:22:39.0","TYPE":"必到点","NAME":"中沧南线L090+860"},{"POINTPOSITION":"","BUFFERRANGE":"159.04","ARRIVALTIME":"2017-07-21 08:17:28.0","TYPE":"必到点","NAME":"中沧南线L091+100"},{"POINTPOSITION":"","BUFFERRANGE":"135.51","ARRIVALTIME":"2017-07-21 08:14:22.0","TYPE":"必到点","NAME":"中沧南线L091+200"},{"POINTPOSITION":"","BUFFERRANGE":"133.48","ARRIVALTIME":"2017-07-21 08:14:22.0","TYPE":"必到点","NAME":"中沧南线L091+400"},{"POINTPOSITION":"","BUFFERRANGE":"147.83","ARRIVALTIME":"2017-07-21 08:13:20.0","TYPE":"必到点","NAME":"中沧南线L091+550"},{"POINTPOSITION":"","BUFFERRANGE":"142.15","ARRIVALTIME":"2017-07-21 07:58:50.0","TYPE":"必到点","NAME":"中沧南线L092+800"},{"POINTPOSITION":"","BUFFERRANGE":"112.81","ARRIVALTIME":"2017-07-21 09:31:58.0","TYPE":"必到点","NAME":"中沧南线L086+100"}],"columnInfo":[{"INSPECTORID":"8ca5ae17-5407-11e4-90ac-809b2037abed","NAME":"位保延"}],"persontype":"01"}}}';
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    dojo.empty(this.personsDiv);
                    var inspectorData=dojo.fromJson(dataJson);
                    this.inspectorObj=inspectorData.AttributeTable.personInfo1;
                    /*var columninfoList=inspectorObj["columnInfo"];//Array
                    var persontype=inspectorObj["persontype"];//String
                    var pointlist=inspectorObj["pointlist"];//Array
                    var resultmap=inspectorObj["resultmap"];//Array*/
                    var columninfoList=this.inspectorObj["columnInfo"];
                    for(var i=0;i<columninfoList.length;i++){
                        var li = document.createElement("li");
                        li.setAttribute("class", "ui-tab-item");
                        li.setAttribute("data-id", columninfoList[i]["INSPECTORID"]);
                        li.setAttribute("data-name", columninfoList[i]["NAME"]);
                        this.personsDiv.appendChild(li);
                        var span = document.createElement("span");
                        span.innerHTML = columninfoList[i]["NAME"];
                        li.appendChild(span);
                    }
                    this.activePersonDiv(columninfoList[0]["INSPECTORID"]);
                    this.activePerson(columninfoList[0]["INSPECTORID"],columninfoList[0]["NAME"]);
                }

            },
            reportError:function(response){
                this.shelter.hide();
                console.log("webservice失败"+response);
                dojo.empty(this.personsDiv);
                this.inspectorObj=null;
                this.divNAME.innerHTML="";
                this.divUNITNAME.innerHTML="";
                this.divUSERNAME.innerHTML="";
                this.divPROWAY.innerHTML="";
                this.divINSVEHICLE.innerHTML="";
                this.divINSDEVICE.innerHTML="";
                this.divINSFREQUNIT.innerHTML="";
                this.divALLLENGTH.innerHTML="";
                this.divCURENTLENGTH.innerHTML="";
                this.divALLLKEYNUM.innerHTML="";
                this.divCURENTKEYNUM.innerHTML="";

                this.divPLANNO.innerHTML="";
                this.divEXECUNITNAME.innerHTML="";
                this.divPOSITION.innerHTML="";
                this.divINSTYPE.innerHTML="";
                this.divDATERANGE.innerHTML="";
                this.divDETERMINANT.innerHTML="";
                this.divCREATEDATE.innerHTML="";

                this.divINSBDATE.innerHTML="";
                this.divINSTYPE.innerHTML="";
                this.divTASKPOSITION.innerHTML="";

                this.divLOGTIME.innerHTML="";
                this.divINSYIELD.innerHTML=="";
                this.divTRACKPOINTS.innerHTML=="";
                this.divAVGSPEED.innerHTML=="";
                this.divLOGPOSITION.innerHTML=="";
                this.divSLENGTH.innerHTML=="";
                this.divRLENGTH.innerHTML=="";
                this.divSKEYPOINT.innerHTML=="";
                this.divRKEYPOINT.innerHTML=="";

                this.getData2Grid([]);
            },

            activePerson:function(activePersonId,activePersonName){
                var resultmap=this.inspectorObj["resultmap"];
                for(var i=0; i<resultmap.length;i++){
                    if(resultmap[i].USERNAME==activePersonName){
                        //var mapPipelineStatus=MapPipelineStatus.getInstance();
                        //this.divNAME.innerHTML=mapPipelineStatus.CenterPoint.LineLoopName+" "+mapPipelineStatus.CenterPoint.CenterMarkerName+" "+mapPipelineStatus.CenterPoint.CenterMarkerOffset;
                        this.divNAME.innerHTML="中沧南线 南线L091-JM-05 87.25";
                        this.divUNITNAME.innerHTML=resultmap[i].UNITNAME;
                        this.divUSERNAME.innerHTML=resultmap[i].USERNAME;
                        this.divPROWAY.innerHTML=resultmap[i].PROWAY;
                        this.divINSVEHICLE.innerHTML=resultmap[i].INSVEHICLE;
                        this.divINSDEVICE.innerHTML=resultmap[i].INSDEVICE;
                        this.divINSFREQUNIT.innerHTML=resultmap[i].INSFREQUNIT;
                        this.divALLLENGTH.innerHTML=resultmap[i].ALLLENGTH;
                        this.divCURENTLENGTH.innerHTML=resultmap[i].CURENTLENGTH;
                        this.divALLLKEYNUM.innerHTML=resultmap[i].ALLLKEYNUM;
                        this.divCURENTKEYNUM.innerHTML=resultmap[i].CURENTKEYNUM;

                        this.divPLANNO.innerHTML=resultmap[i].PLANNO;
                        this.divEXECUNITNAME.innerHTML=resultmap[i].EXECUNITNAME;
                        this.divPOSITION.innerHTML=resultmap[i].POSITION;
                        this.divINSTYPE.innerHTML=resultmap[i].INSTYPE;
                        this.divDATERANGE.innerHTML=resultmap[i].DATERANGE;
                        this.divDETERMINANT.innerHTML=resultmap[i].DETERMINANT;
                        this.divCREATEDATE.innerHTML=resultmap[i].CREATEDATE;

                        this.divINSBDATE.innerHTML=resultmap[i].INSBDATE;
                        this.divINSTYPE.innerHTML=resultmap[i].INSTYPE;
                        this.divTASKPOSITION.innerHTML=resultmap[i].TASKPOSITION;

                        this.divLOGTIME.innerHTML=resultmap[i].LOGTIME;
                        this.divINSYIELD.innerHTML=resultmap[i].INSYIELD;
                        this.divTRACKPOINTS.innerHTML=resultmap[i].TRACKPOINTS;
                        this.divAVGSPEED.innerHTML=resultmap[i].AVGSPEED;
                        this.divLOGPOSITION.innerHTML=resultmap[i].LOGPOSITION;
                        this.divSLENGTH.innerHTML=resultmap[i].SLENGTH;
                        this.divRLENGTH.innerHTML=resultmap[i].RLENGTH;
                        this.divSKEYPOINT.innerHTML=resultmap[i].SKEYPOINT;
                        this.divRKEYPOINT.innerHTML=resultmap[i].RKEYPOINT;

                        this.getData2Grid(this.inspectorObj["pointlist"]);
                        break;
                    }
                }
            },
            activePersonDiv:function(activePersonId){
                var oLis=query(".ui-tab-item", "personsUL");
                for(var i=0; i<oLis.length;i++){
                    if(oLis[i].getAttribute("data-id")==activePersonId){
                        html.addClass(oLis[i],"ui-tab-item-active");
                    }else{
                        html.removeClass(oLis[i],"ui-tab-item-active");
                    }
                }
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
                    {'name':this.nls.keypointname,'field':'NAME','width':'120px'},
                    {'name':this.nls.locationdescription,'field':'POINTPOSITION','width':'100px'},
                    {'name':this.nls.bufferzone,'field':'BUFFERANGE','width':'100px'},
                    {'name':this.nls.types,'field':'TYPE','width':'60px'},
                    {'name':this.nls.totime,'field':'ARRIVALTIME','width':'120px'}
                ]];

                if(!this.grid){
                    this.grid=new DataGrid({
                            store:store,
                            structure:layout,
                            autoHeight:true,
                            rowSelector:'20px',
                            rowsPerPage:10
                        },
                        this.gridDivNode);
                    this.grid.startup();
                }else{
                    this.grid.setStore(store);
                }

            },

            _onLocaion:function(){
                /*if(this.inspectorLocationWS==null)
                {
                    this.inspectorLocationWS = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.inspectorLocationWS.url = this.historyPoints;
                }
                this.inspectorLocationWS.queryCurrentUserLocation(lang.hitch(this,this.inspectorResponse),lang.hitch(this,this.inspectorError),this.inspectorObj["columnInfo"][0]["INSPECTORID"],"","");*/
                this.inspectorResponse(null);
            },
            inspectorResponse:function(response){
                //this.shelter.hide();
                //var dataJson = response.getReturn();
                var dataJson = "115.93183;36.465356";
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    this._personGraphicsLayer.clear();
                    var strArray = dataJson.split(";");
                    var lc_p_X = commonUtils._lonToMercator(strArray[0]);
                    var lc_p_Y = commonUtils._latToMercator(Number(strArray[1]));

                    var mp = new Point(lc_p_X,lc_p_Y,this.map.spatialReference);
                    this.map.centerAt(mp);
                    var symbol = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/im1.png", 32, 32);
                    /*if (personData.STATUS == "02") {
                     symbol =  new PictureMarkerSymbol("assets/gps/images/monitor/im3.png",32,32);
                     }*/
                    var g = new Graphic(mp, symbol, {"PERSONID":this.inspectorObj["columnInfo"][0]["INSPECTORID"]});
                    //g.toolTip = personData.PERSONNAME;
                    this._personGraphicsLayer.add(g);

                    //文字样式，赋值，设置偏移
                    var labelSymbol = new TextSymbol(this.inspectorObj["columnInfo"][0]["NAME"]);
                    labelSymbol.setOffset(25, 5);
                    labelSymbol.setColor(new Color([255, 0, 255,0.9]));

                    // 创建名称标注
                    //增加personData，实现点击人员图标和人名标注都可以查询详细信息息
                    var graphic = new Graphic(mp, labelSymbol,  {"PERSONID":this.inspectorObj["columnInfo"][0]["INSPECTORID"]});
                    // 将标注添加到要素中
                    this._personGraphicsLayer.add(graphic);
                }

            },
            inspectorError:function(response){
                //this.shelter.hide();
                console.log("queryCurrentUserLocation getPersonInfo失败"+response);
            },

            _personGraphicClick:function(obj) {
                /*if(this.inspectorLocationWS==null)
                {
                    this.inspectorLocationWS = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.inspectorLocationWS.url = this.historyPoints;
                }
                this.inspectorLocationWS.getPersonInfo(lang.hitch(this,this.personResponse),lang.hitch(this,this.inspectorError),obj.PERSONID);*/
                this.personResponse(null);
            },
            personResponse:function(response){
                //this.loading.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"PERSONID":"8ca58705-5407-11e4-90ac-809b2037abed","BATTERY":"87","LOCATION":"中沧南线：南线L133 至 南线L140","OKPOINT":0,"DEVTYPE":"普通(2095130)","PHONE":"11800000000","SEX":"男","ALLPOINT":14,"LOCATIONDATE":"2017-04-17 08:04:16","SPEED":0,"UNITNAME":"濮阳输气站","WORKTIME":"5:00-20:00","USERTYPE":"巡线工","SUBLOCATION":"中沧南线：南线L133 至  ....","USERNAME":"虞丁来"}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    var inspectorData=dojo.fromJson(dataJson);
                    //将查询日期加入到人员信息中，用于在定位人员后，回显指定日期下的轨迹
                    inspectorData["selectDate"] = this.inspectionDateTimer;

                    var layerInfoTemplateStr="";
                    for(var ikey in inspectorData){//用javascript的for/in循环遍历对象的属性
                        switch(ikey)
                        {
                            case "USERNAME":
                                layerInfoTemplateStr+=("<b>"+this.nls.fullname+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "LOCATIONDATE":
                                layerInfoTemplateStr+=("<b>"+this.nls.positiontime+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "SPEED":
                                layerInfoTemplateStr+=("<b>"+this.nls.speed+"：</b>"+inspectorData[ikey]+"km/h<br/>");
                                break;
                            case "BATTERY":
                                layerInfoTemplateStr+=("<b>"+this.nls.battery+"：</b>"+inspectorData[ikey]+"%<br/>");
                                break;
                            case "PHONE":
                                layerInfoTemplateStr+=("<b>"+this.nls.phone+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "UNITNAME":
                                layerInfoTemplateStr+=("<b>"+this.nls.department+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "USERTYPE":
                                layerInfoTemplateStr+=("<b>"+this.nls.persontype+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "DEVTYPE":
                                layerInfoTemplateStr+=("<b>"+this.nls.devicetype+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "WORKTIME":
                                layerInfoTemplateStr+=("<b>"+this.nls.worktime+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "SUBLOCATION":
                                layerInfoTemplateStr+=("<b>"+this.nls.scope+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "ALLPOINT":
                                layerInfoTemplateStr+=("<b>"+this.nls.keypoints+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            case "OKPOINT":
                                layerInfoTemplateStr+=("<b>"+this.nls.seepoints+"：</b>"+inspectorData[ikey]+"<br/>");
                                break;
                            default:
                            //layerInfoTemplateStr+=("<b>"+"${"+ikey+"}</b>"+inspectorData[ikey]);
                        }
                    }
                    var layerInfoTemplate =new InfoTemplate(this.nls.personDetail, layerInfoTemplateStr);//自定义地图info内容
                    this.map.infoWindow.setTitle(this.nls.personDetail);
                    var muserInfoWindow=new MUserInfoWindow({
                        map:this.map,
                        data:inspectorData
                    });
                    /*this.map.infoWindow.setContent(muserInfoWindow.domNode);
                    this.map.infoWindow.show(this._personPoint);*/
                    var windowContent= function() {
                        var divContent = new ContentPane({
                            content:muserInfoWindow.domNode,
                            style:"padding:0px"
                        });
                        return muserInfoWindow.domNode;
                    };
                    var layerInfoTemplate =new InfoTemplate(this.nls.personDetail,windowContent);//自定义地图info内容
                    var infoGraphics=[new Graphic(this._personPoint, null, null, layerInfoTemplate)];
                    this.map.infoWindow.setFeatures(infoGraphics);
                    this.map.infoWindow.show(this._personPoint);
                }
            },

            onClose: function () {
                if(this._personGraphicsLayer){
                    this._personGraphicsLayer.clear();
                    //this.map.removeLayer(this._personGraphicsLayer);
                    //this._personGraphicsLayer = null;
                }
            },

            onMinimize: function () {
            },

            onMaximize: function () {
            },

            onSignIn: function (credential) {
            },

            onSingnOut: function () {
            }
        });
    });