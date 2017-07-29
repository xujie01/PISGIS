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
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        'esri/Color',
        'jimu/magicgis/util/CommonParams',
        'dojo/on','dojo/Deferred','esri/symbols/TextSymbol',"esri/symbols/PictureMarkerSymbol",
        "dijit/focus",
        "dijit/layout/ContentPane",
        "jimu/magicgis/dijit/MCompanyItem",'jimu/magicgis/util/commonUtils',"esri/geometry/Extent",
        "jimu/magicgis/dijit/MSiteItem","jimu/magicgis/dijit/MUserItem",'esri/InfoTemplate',"jimu/magicgis/dijit/MUserInfoWindow",
        "esri/graphicsUtils",'dojo/dom-style',
        'jimu/dijit/LoadingIndicator','dojo/request/xhr',
        "jimu/magicgis/configProject",
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               GraphicsLayer,Graphic,array,parser,Point,Polygon,
               SimpleLineSymbol,SimpleFillSymbol,
               Color,CommonParams,on,Deferred,TextSymbol,PictureMarkerSymbol,
               focusUtil,ContentPane,
               MCompanyItem,commonUtils,Extent,MSiteItem,MUserItem,InfoTemplate,MUserInfoWindow,
               graphicsUtils,domStyle,LoadingIndicator,xhr,configProject) {
        var clazz=declare([BaseWidget, _WidgetsInTemplateMixin],{
            //templateString:template,
            baseClass: 'jimu-widget-monitor',
            name: 'Monitor',
            _urlParamObj:null,
            ws:null,
            monitorLevel:null,
            monitorUnitEventID:null,
            monitorName:null,
            monitorDateTimer:null,
            buttonBarIdArray:null,
            _personGraphicsLayer: null,
            _keyPointGraphicsLayer:null,
            _pathGraphicsLayer:null,//动态演示轨迹
            _keyPointTextGraphicsLayer:null,//为了控制关键点标注的显示比例范围
            _personPoint: null,
            mapPoints:[],
            isApp:null,
            historyPoints:null,

            postCreate:function(){
                this.inherited(arguments);

                this.historyPoints=configProject.historyPoints;
                this.buttonBarIdArray=[];

                topic.subscribe("UnitChange", lang.hitch(this, this.unitChange));
                topic.subscribe("UnitKeyPointChange", lang.hitch(this, this.unitKeyPointChange));
                topic.subscribe("UserKeyPointChange", lang.hitch(this, this.userKeyPointChange));
                topic.subscribe("KeyPointChange", lang.hitch(this, this.keyPointChange));
                topic.subscribe("TrackChange", lang.hitch(this, this.trackChange));

                domStyle.set(this.monitorShow,"visibility","hidden");
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(this.monitorPanel);
                if (!this.mapLoading) {
                    this.mapLoading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.mapLoading.placeAt(window.jimuConfig.layoutId);
                //this.loading.show();
                this._urlParamObj=new Object();
                this._urlParamObj["UNITEVENTID"] = CommonParams.getInstance().unitEventid;
                this._urlParamObj["UNITNAME"] = CommonParams.getInstance().unitName;
                this._urlParamObj["LEVEL"] = "1";
                /*this._urlParamObj["UNITEVENTID"] = "3d1352d3-56d8-4674-9049-fe72b2811ee4";
                 this._urlParamObj["UNITNAME"] = "中国石油天然气股份有限公司";
                 this._urlParamObj["LEVEL"] = "0";*/
                this.monitorLevel=this._urlParamObj["LEVEL"];
                this.monitorUnitEventID=this._urlParamObj["UNITEVENTID"];
                this.monitorName=this._urlParamObj["UNITNAME"];
                var buttonBarIdObj={UNITEVENTID:this._urlParamObj["UNITEVENTID"],UNITNAME:this._urlParamObj["UNITNAME"],LEVEL:this._urlParamObj["LEVEL"]};
                this.buttonBarIdArray.push(buttonBarIdObj)
                this._initMonitorNav(this.buttonBarIdArray.length);

                if(!this._personGraphicsLayer){
                    this._personGraphicsLayer = new GraphicsLayer();
                    this.map.addLayer(this._personGraphicsLayer);
                    this._personGraphicsLayer.on("click", lang.hitch(this,function(event){
                        if(event.graphic.attributes){
                            this._personPoint=event.graphic.geometry;
                            this.map.infoWindow.setTitle(this.nls.personDetail);
                            /*this.map.infoWindow.setContent(this.nls.querying);
                            this.map.infoWindow.show(this._personPoint);*/
                            var layerInfoTemplate =new InfoTemplate(this.nls.querying,this.nls.querying);//自定义地图info内容
                            var infoGraphics=[new Graphic(this._personPoint, null, null, layerInfoTemplate)];
                            this.map.infoWindow.setFeatures(infoGraphics);
                            this.map.infoWindow.show(this._personPoint);

                            this._personGraphicClick(event.graphic.attributes);
                        }
                    }));
                }
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
                            this.map.infoWindow.setTitle(this.nls.keyPointDetail);
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
                                        layerInfoTemplateStr+=("<b>"+this.nls.buffer+"：</b>"+keyPointData[ikey]+"(米)<br/>");
                                        break;
                                    case "LN":
                                        layerInfoTemplateStr+=("<b>"+this.nls.pipelinename+"：</b>"+keyPointData[ikey]+"<br/>");
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
                            var layerInfoTemplate =new InfoTemplate(this.nls.keyPointDetail,layerInfoTemplateStr);//自定义地图info内容
                            var infoGraphics=[new Graphic(_keyPoint, null, null, layerInfoTemplate)];
                            this.map.infoWindow.setFeatures(infoGraphics);
                            this.map.infoWindow.show(_keyPoint);
                        }
                    }));
                }
                if(!this._pathGraphicsLayer) {
                    this._pathGraphicsLayer = new GraphicsLayer();
                    this.map.addLayer(this._pathGraphicsLayer);
                }

                var date = new Date();
                var day = date.getDate().toString();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var showDate =year+"/"+month+"/"+day;
                this.monitorDate.setDisplayedValue(showDate);
            },

            startup: function () {
                this.inherited(arguments);

            },

            _personGraphicClick:function(obj) {
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.ws.url = this.historyPoints;
                }
                this.ws.getPersonInfo(lang.hitch(this,this.personResponse),lang.hitch(this,this.reportError),obj.PERSONID);*/
                this.personResponse(null);
            },

            personResponse:function(response){
                //this.loading.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"PERSONID":"6e94b0e2-71be-11e3-a66b-1c6f6546f439","BATTERY":"79","LOCATION":"漠大线干线：040Km+622m 至 048Km+831m","OKPOINT":8,"DEVTYPE":"普通(2095956)","PHONE":"13845743862","SEX":"男","ALLPOINT":9,"LOCATIONDATE":"2017-04-17 09:04:58","SPEED":0,"UNITNAME":"漠河输油站","WORKTIME":"04:00-19:00","USERTYPE":"巡线工","SUBLOCATION":"漠大线干线：040Km+622m 至  ....","USERNAME":"齐君"}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    var inspectorData=dojo.fromJson(dataJson);
                    //将查询日期加入到人员信息中，用于在定位人员后，回显指定日期下的轨迹
                    inspectorData["selectDate"] = this.monitorDateTimer;

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

            loadMonitorList: function (dpid,level,name,currentDate) {
                this.loading.show();
                /*if(level == "0" || level == "1" || level == "2" || level == "3"){
                    //创建WebService对象
                    if(this.ws==null)
                    {
                        this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                        this.ws.url = this.historyPoints;
                    }
                    //调用方法，使用参数
                    this.ws.queryHisPointsForUnit(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),dpid,this._urlParamObj.UNITEVENTID,currentDate,"");
                }
                else if(level == "4"){
                    if(this.ws==null)
                    {
                        this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                        this.ws.url =this.historyPoints;
                    }
                    //LEVEL后的''是要传递的当前登录用户所属板块的eventid，这里传空即可，后台会自动获取
                    this.ws.queryPersonPoints(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),dpid,this._urlParamObj.LEVEL,"",currentDate,"");
                }*/
                this.processResponse(null);
            },

            processResponse:function(response){
                this.loading.hide();
                domStyle.set(this.monitorShow,"visibility","visible");
                //var dataJson = response.getReturn();
                var dataJson = '{"count_nodes":[{"ALL":16,"ON":0,"OUT":16}],"topics":[{"PERSONID":"15580180-e340-11e6-9d92-6c3be5a55003","STATUS":"01","ISHASHISTORY":"1","X":"117.471931","PERSONNAME":"王庆伟","Y":"34.897816","PERSONLENGTH":"4.849","ALLPOINT":"9","GETPOINT":"9","INSPECTTIME":"2时43分","selectDate":"2017-07-23"},{"PERSONID":"8ca47590-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.676385","PERSONNAME":"王克军","Y":"34.541106","PERSONLENGTH":"4.083","ALLPOINT":"6","GETPOINT":"6","INSPECTTIME":"2时41分","selectDate":"2017-07-23"},{"PERSONID":"8ca47591-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.642033","PERSONNAME":"李敦奇","Y":"34.57133","PERSONLENGTH":"6.689","ALLPOINT":"8","GETPOINT":"8","INSPECTTIME":"3时9分","selectDate":"2017-07-23"},{"PERSONID":"8ca47592-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.615615","PERSONNAME":"孔凡飞","Y":"34.634196","PERSONLENGTH":"7.502","ALLPOINT":"8","GETPOINT":"8","INSPECTTIME":"2时47分","selectDate":"2017-07-23"},{"PERSONID":"8ca47593-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.542385","PERSONNAME":"盛士锋","Y":"34.714408","PERSONLENGTH":"6.942","ALLPOINT":"8","GETPOINT":"8","INSPECTTIME":"3时22分","selectDate":"2017-07-23"},{"PERSONID":"8ca47594-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.52458","PERSONNAME":"郭艳","Y":"34.727531","PERSONLENGTH":"7.208","ALLPOINT":"10","GETPOINT":"10","INSPECTTIME":"2时47分","selectDate":"2017-07-23"},{"PERSONID":"8ca47595-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.497436","PERSONNAME":"于秀伦","Y":"34.843785","PERSONLENGTH":"8.28","ALLPOINT":"14","GETPOINT":"14","INSPECTTIME":"3时51分","selectDate":"2017-07-23"},{"PERSONID":"8ca47596-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.481641","PERSONNAME":"张庆梅","Y":"34.896205","PERSONLENGTH":"6.692","ALLPOINT":"12","GETPOINT":"12","INSPECTTIME":"3时42分","selectDate":"2017-07-23"},{"PERSONID":"8ca47599-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.37785","PERSONNAME":"侯以传","Y":"34.96309","PERSONLENGTH":"4.162","ALLPOINT":"7","GETPOINT":"7","INSPECTTIME":"3时21分","selectDate":"2017-07-23"},{"PERSONID":"8ca4759a-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.371426","PERSONNAME":"郭艳营","Y":"34.984163","PERSONLENGTH":"7.166","ALLPOINT":"8","GETPOINT":"8","INSPECTTIME":"3时30分","selectDate":"2017-07-23"},{"PERSONID":"8ca4759b-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.339055","PERSONNAME":"李兴合","Y":"35.073985","PERSONLENGTH":"6.007","ALLPOINT":"13","GETPOINT":"13","INSPECTTIME":"3时2分","selectDate":"2017-07-23"},{"PERSONID":"8ca4759c-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.33599","PERSONNAME":"郭峰","Y":"35.077863","PERSONLENGTH":"7.941","ALLPOINT":"12","GETPOINT":"12","INSPECTTIME":"3时39分","selectDate":"2017-07-23"},{"PERSONID":"8ca4759e-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.257531","PERSONNAME":"徐利元","Y":"35.211865","PERSONLENGTH":"5.012","ALLPOINT":"7","GETPOINT":"7","INSPECTTIME":"4时26分","selectDate":"2017-07-23"},{"PERSONID":"8ca4759f-5407-11e4-90ac-809b2037abed","STATUS":"01","ISHASHISTORY":"1","X":"117.24825","PERSONNAME":"贺兴文","Y":"35.235696","PERSONLENGTH":"5.048","ALLPOINT":"8","GETPOINT":"8","INSPECTTIME":"11时6分","selectDate":"2017-07-23"}],"selectDate":"2017-07-23"}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    var objData=dojo.fromJson(dataJson);
                    //更新人员统计数据
                    if(objData.count_nodes+"" != ""){
                        this.monitorOn.innerHTML = objData.count_nodes[0].ON;
                        this.monitorOff.innerHTML = objData.count_nodes[0].OUT;
                        this.monitorAll.innerHTML = objData.count_nodes[0].ALL;
                    }
                    if(objData.topics+"" == ""){
                        dojo.empty(this.settingContent);
                        layer.msg(this.nls.tips);
                        return;
                    }
                    this._switchPanelAndMap(this.monitorLevel,objData)
                }
            },
            reportError:function(response){
                this.loading.hide();
                this.mapLoading.hide();
                domStyle.set(this.monitorShow,"visibility","visible");
                console.log("webservice失败"+response);
                this.map.infoWindow.hide();
            },

            _onDateChange:function(event){
                var currentDate = this.monitorDate.get("value") || "";
                if(currentDate!=""){
                    this.monitorDateTimer = dojo.date.locale.format( currentDate, {selector:"date", datePattern:'yyyy-MM-dd' } );
                }
                this.loadMonitorList(this.monitorUnitEventID,this.monitorLevel,this.monitorName,this.monitorDateTimer);
            },

            _switchPanelAndMap:function(level,currData){
                dojo.empty(this.settingContent);
                switch(level) {
                    case "0":// 表明列表显示的是分公司
                        for(var j=0;j<currData.topics.length;j++)
                        {
                            var activeContainer=new MCompanyItem({
                                map:this.map,
                                data:currData.topics[j]
                            });
                            activeContainer.startup();
                            activeContainer.placeAt(this.settingContent);
                        }
                        break;
                    case "1":// 表明列表显示的是分公司
                        for(var j=0;j<currData.topics.length;j++)
                        {
                            var activeContainer=new MCompanyItem({
                                map:this.map,
                                data:currData.topics[j]
                            });
                            activeContainer.startup();
                            activeContainer.placeAt(this.settingContent);
                        }
                        break;
                    case "2":// 表名列表显示的站队
                        for(var j=0;j<currData.topics.length;j++)
                        {
                            var activeContainer=new MCompanyItem({
                                map:this.map,
                                data:currData.topics[j]
                            });
                            activeContainer.startup();
                            activeContainer.placeAt(this.settingContent);
                        }
                        break;
                    case "3":// 表名列表显示的站队
                        for(var j=0;j<currData.topics.length;j++)
                        {
                            var activeContainer=new MSiteItem({
                                map:this.map,
                                data:currData.topics[j]
                            });
                            activeContainer.startup();
                            activeContainer.placeAt(this.settingContent);
                        }
                        break;
                    case "4":// 表明列表显示的巡检人员
                        for(var j=0;j<currData.topics.length;j++)
                        {
                            var activeContainer=new MUserItem({
                                map:this.map,
                                data:currData.topics[j],
                                pathGraphicsLayer:this._pathGraphicsLayer
                            });
                            activeContainer.startup();
                            activeContainer.placeAt(this.settingContent);
                        }
                        //显示人员当前位置
                        this.mapShowPerson(currData);
                        break;
                    default:
                        break;
                }
            },

            //显示人员当前位置
            mapShowPerson:function(currData){
                if (currData != null) {
                    this._personGraphicsLayer.clear();
                    var p_array = currData.topics;
                    for (var i = 0; i < p_array.length; i++) {
                        var personData = p_array[i];
                        if (personData.X != null && personData.Y != null) {
                            var lc_p_X = commonUtils._lonToMercator(Number(personData.X));
                            var lc_p_Y = commonUtils._latToMercator(Number(personData.Y));

                            var mp = new Point(lc_p_X,lc_p_Y,this.map.spatialReference);
                            var symbol = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/im1.png", 32, 32);
                            /*if (personData.STATUS == "02") {
                             symbol =  new PictureMarkerSymbol("assets/gps/images/monitor/im3.png",32,32);
                             }*/
                            var g = new Graphic(mp, symbol, personData);
                            //g.toolTip = personData.PERSONNAME;
                            this._personGraphicsLayer.add(g);

                            //文字样式，赋值，设置偏移
                            var labelSymbol = new TextSymbol(personData.PERSONNAME);
                            labelSymbol.setOffset(25, 5);
                            labelSymbol.setColor(new Color([255, 0, 255,0.9]));

                            // 创建名称标注
                            //增加personData，实现点击人员图标和人名标注都可以查询详细信息息
                            var graphic = new Graphic(mp, labelSymbol, personData);
                            // 将标注添加到要素中
                            this._personGraphicsLayer.add(graphic);
                        }
                    }
                }
            },

            setMaxHeight:function(maxHeight){
                /*html.setStyle(this.nav_container, 'max-height', (document.documentElement.clientHeight-310)+'px');*/
                html.setStyle(this.settingContent, 'height', (maxHeight+40)+'px');
                html.setStyle(this.settingContent, 'max-height', (maxHeight+40)+'px');
            },

            _initMonitorNav:function(index){
                dojo.empty(this.monitorNav);
                var ol = document.createElement("ol");
                ol.setAttribute("class", "breadcrumb");
                this.monitorNav.appendChild(ol);
                index=5;
                this.buttonBarIdArray=
                    [{LEVEL:"1",UNITEVENTID:"3d1352d3-56d8-4674-9049-fe72b2811ee4",UNITNAME:"中国石油天然气股份有限公司"},
                    {LEVEL:"1",UNITEVENTID:"c6f8ee80-41e2-11dd-aec3-0019bbcb2a46",UNITNAME:"天然气与管道分公司"},
                    {LEVEL:"2",UNITEVENTID:"a1112be8-4e3c-4c79-be77-d345f38f0d21",UNITNAME:"管道公司"},
                    {LEVEL:"3",UNITEVENTID:"db1cff50-b2aa-11e0-b41f-e41f13e31d04",UNITNAME:"加格达奇输油气分公司"},
                    {LEVEL:"4",UNITEVENTID:"7ee2dc70-ba7d-11e0-8f29-e61f13e45347",UNITNAME:"漠河输油站"}];
                for(var i=0;i<this.buttonBarIdArray.length;i++){
                    if(i<index){
                        var a = document.createElement("a");
                        a.setAttribute("href", "#");
                        a.setAttribute("data-index", i);
                        a.innerHTML=this.buttonBarIdArray[i].UNITNAME;
                        /*this.monitorNav.appendChild(a);
                         this.monitorNav.innerHTML+=" &gt;";*/
                        var li = document.createElement("li");
                        li.appendChild(a);
                        ol.appendChild(li);
                    }else{
                        this.buttonBarIdArray.splice(index);
                    }
                }
            },

            _onMonitorNavClick: function (evt) {
                var e=event||evt;
                var obj=e.srcElement||e.target;
                var dataIndex;
                if(obj.tagName=='A'){
                    dataIndex=Number(obj.getAttribute("data-index"));
                    this._initMonitorNav(dataIndex+1);
                }
                this.monitorLevel=this.buttonBarIdArray[dataIndex].LEVEL;
                this.monitorUnitEventID=this.buttonBarIdArray[dataIndex].UNITEVENTID;
                this.monitorName=this.buttonBarIdArray[dataIndex].UNITNAME;
                this.loadMonitorList(this.monitorUnitEventID,this.monitorLevel,this.monitorName,this.monitorDateTimer);
            },

            unitChange:function(data){
                var xc = 0;
                var yc = 0;
                var lc_minX = 0;
                var lc_minY = 0;
                var lc_maxX = 0;
                var lc_maxY = 0;

                if(data.X!="" && data.X!=0 && data.X!=null && data.Y!="" && data.Y!=0 && data.Y!=null){
                    xc = commonUtils._lonToMercator(Number(data.X));
                    yc = commonUtils._latToMercator(Number(data.Y));
                }
                if (data.LEVEL != null) {
                    this.monitorLevel = data.LEVEL;
                    var buttonBarIdObj={UNITEVENTID:data["UNITEVENTID"],UNITNAME:data["UNITNAME"],LEVEL:data["LEVEL"]};
                    this.buttonBarIdArray.push(buttonBarIdObj);
                    this._initMonitorNav(this.buttonBarIdArray.length);

                    if(data.MINX != null && data.MINX != "") {
                        lc_minX = commonUtils._lonToMercator(Number(data.MINX));
                        lc_minY = commonUtils._latToMercator(Number(data.MINY));
                        lc_maxX = commonUtils._lonToMercator(Number(data.MAXX));
                        lc_maxY = commonUtils._latToMercator(Number(data.MAXY));
                        this.map.setExtent(new Extent(lc_minX,lc_minY,lc_maxX,lc_maxY,this.map.spatialReference).expand(1.2));
                    }

                    this.monitorLevel=data.LEVEL;
                    this.monitorUnitEventID=data.UNITEVENTID;
                    this.monitorName=data.UNITNAME;
                    this.loadMonitorList(this.monitorUnitEventID,this.monitorLevel,this.monitorName,this.monitorDateTimer);
                }
            },

            keyPointChange:function(personID,selectDate){
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.ws.url =this.historyPoints;
                }
                this.mapLoading.show();
                this.map.infoWindow.hide();
                this.ws.UserPointList(lang.hitch(this,this.keyPointResponse),lang.hitch(this,this.reportError),personID,selectDate);*/
                this.keyPointResponse(null);
            },

            keyPointResponse:function(response){
                //var dataJson = response.getReturn();
                var dataJson = '{"topics":[{"PP":"中沧南线 南线L099+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"人口密集区。穿越文轩中学。","X":115.91950999999999,"Y":36.43134833333333,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"1","ID":"bf31fdd1-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L099"},{"PP":"中沧南线 南线L098-BZ-03+113.01","BUF":100,"LN":"中沧南线","PS":1,"DES":"文轩中学门卫","X":115.92084833333332,"Y":36.433146666666666,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"2","ID":"779121f0-f3d2-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L098+800"},{"PP":"中沧南线 南线L098+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"人口密集区","X":115.92329999999998,"Y":36.44034333333333,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"3","ID":"bf3447c1-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L098"},{"PP":"中沧南线 南线L098-BZ-01+91.35","BUF":100,"LN":"中沧南线","PS":1,"DES":"八东粉条厂南，鸡棚。","X":115.92301666666665,"Y":36.43920666666667,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"4","ID":"4f9298b0-f3d1-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L098+150"},{"PP":"中沧南线 南线L097-JM-03+200.00","BUF":100,"LN":"中沧南线","PS":1,"DES":"八东粉条厂后，排水渠边。","X":115.92326333333334,"Y":36.440666666666665,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"5","ID":"dc51e590-f3d0-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L097+900"},{"PP":"中沧南线 南线L097-JM-03+57.36","BUF":100,"LN":"中沧南线","PS":1,"DES":"八东花砖厂","X":115.92322666666665,"Y":36.44314,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"6","ID":"f38b9860-f3cf-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L097+600"},{"PP":"中沧南线 南线L097+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"人口密集区。","X":115.92438833333333,"Y":36.44929833333333,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"7","ID":"bf3447c0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L097"},{"PP":"中沧南线 南线L097-JM-01+200.00","BUF":100,"LN":"中沧南线","PS":1,"DES":"八东原小学。","X":115.92422333333334,"Y":36.44817833333333,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"8","ID":"0f241170-f3cf-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L097+130"},{"PP":"中沧南线 南线L093+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"","X":115.93283000000001,"Y":36.480689999999996,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"9","ID":"bf402ea0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L093"},{"PP":"中沧南线 南线L093-BZ-01+66.66","BUF":100,"LN":"中沧南线","PS":1,"DES":"后田村，高速南。","X":115.93104166666666,"Y":36.47701666666667,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"10","ID":"7818ad00-f3c8-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L093+500"},{"PP":"中沧南线 南线L093-JM-04+40.41","BUF":100,"LN":"中沧南线","PS":1,"DES":"后田村南，海源路东。","X":115.93053666666668,"Y":36.47463166666667,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"11","ID":"f9617270-f3c8-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L093+850"},{"PP":"中沧南线 南线L094+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"人口密集区","X":115.92954666666668,"Y":36.473123333333334,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"12","ID":"bf3de4b0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L094"},{"PP":"中沧南线 南线L094-BZ-03+14.79","BUF":100,"LN":"中沧南线","PS":1,"DES":"前田绿化带。","X":115.92707333333334,"Y":36.465745,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"13","ID":"b4797430-f3ca-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L094+850"},{"PP":"中沧南线 南线L095+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"人口密集区","X":115.92648833333332,"Y":36.464648333333336,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"14","ID":"bf3b73b0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L095"},{"PP":"中沧南线 南线L095-JM-02+24.81","BUF":100,"LN":"中沧南线","PS":1,"DES":"八里庄东路牌。","X":115.92602666666669,"Y":36.463033333333335,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"15","ID":"5e21c410-f3cb-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L095+150"},{"PP":"中沧南线 南线L095-JM-03+81.98","BUF":100,"LN":"中沧南线","PS":1,"DES":"前田新村排水渠。","X":115.92485166666665,"Y":36.45970666666666,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"16","ID":"a2d6eb20-f3cc-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L095+550"},{"PP":"中沧南线 南线L096+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"人口密集区。","X":115.92389333333334,"Y":36.457595,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"17","ID":"bf4510a0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L096"},{"PP":"中沧南线 南线L096-BZ-02+77.74","BUF":100,"LN":"中沧南线","PS":1,"DES":"八东村集贤新村","X":115.92436000000001,"Y":36.451143333333334,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"18","ID":"52dbd7a0-f3ce-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L096+600"},{"PP":"中沧南线 南线L100+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"","X":115.912685,"Y":36.421548333333334,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"19","ID":"bf31fdd0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L100"},{"PP":"中沧南线 南线L100-JM-01+200.00","BUF":100,"LN":"中沧南线","PS":1,"DES":"前八村西南露管处。","X":115.90713333333333,"Y":36.41809833333333,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"20","ID":"4ae83bc0-f3d7-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L100+600"},{"PP":"中沧南线 南线L101+0.00","BUF":200,"LN":"中沧南线","PS":1,"DES":"","X":115.90311333333332,"Y":36.416378333333334,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"21","ID":"bf2f8cd0-6fd1-11e4-b54c-d89d671833b7","TYPE":"必到点","NAME":"中沧南线-L101"},{"PP":"中沧南线 南线L094-BZ-01+119.09","BUF":100,"LN":"中沧南线","PS":1,"DES":"前田村路牌","X":115.92798499999999,"Y":36.46826,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"22","ID":"13e200f0-f3ca-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L094+600"},{"PP":"中沧南线 南线L096-BZ-02+77.74","BUF":100,"LN":"中沧南线","PS":1,"DES":"聊唐璐南库房。","X":115.92309333333333,"Y":36.45455166666667,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"23","ID":"a3070660-f3cd-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L096+280"},{"PP":"中沧南线 南线L098-BZ-03+113.01","BUF":100,"LN":"中沧南线","PS":1,"DES":"老聊张璐，后十村东。","X":115.918815,"Y":36.42662166666666,"LE":"6cf1b24a-2bf5-4525-bbfa-f6d9d2fda9db","INDEX":"24","ID":"eef88970-f3d4-11e5-b0e0-6c3be5a553ff","TYPE":"必到点","NAME":"中沧南线L099+400"}]}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    var dataObj=dojo.fromJson(dataJson);
                    if(dataObj.topics.length>0){
                        this.showKeyPointCommon(dataObj.topics,true);
                        this.mapLoading.hide();
                    }

                }
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
                    var obj = dataObj[i];
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
                    var labelSymbol = new TextSymbol(obj.INDEX+"【"+obj.NAME+"】");
                    labelSymbol.setOffset(1, -13);
                    labelSymbol.setColor(new Color([255, 0, 255,0.9]));
                    gl.symbol = labelSymbol;
                    this._keyPointTextGraphicsLayer.add(gl);
                    //graphic.addEventListener(MouseEvent.CLICK, infowinOpen);
                    garr[i] = graphic;
                }
                if(garr.length >2) {
                    var myFeatureExtent = graphicsUtils.graphicsExtent(garr);
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

            trackChange:function(data,isApp){
                this.showGpsLineCommon(data,isApp);
            },

            //data是巡线工属性数据 isApp用于区分app=1还是普通设备=0
            showGpsLineCommon:function(data,isApp){
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.ws.url = this.historyPoints;
                }
                this.mapLoading.show();
                this.map.infoWindow.hide();
                this.isApp=isApp;
                this.ws.queryHistoryPoints(lang.hitch(this,this.trackResponse),lang.hitch(this,this.reportError),data.PERSONID,data.selectDate,isApp);*/
                this.trackResponse(null);
            },

            trackResponse:function(response){
                //var dataJson = response.getReturn();
                var dataJson = '{"hasApp":"0","topics":[{"X":124.306705,"Y":53.137753,"T":"2017-07-29 04:41:53"},{"X":124.306823,"Y":53.137666,"T":"2017-07-29 04:42:26"},{"X":124.306765,"Y":53.137706,"T":"2017-07-29 04:43:27"},{"X":124.306718,"Y":53.137666,"T":"2017-07-29 04:44:29"},{"X":124.307363,"Y":53.13933,"T":"2017-07-29 04:45:31"},{"X":124.307616,"Y":53.141441,"T":"2017-07-29 04:46:33"},{"X":124.31198,"Y":53.141656,"T":"2017-07-29 04:47:35"},{"X":124.319426,"Y":53.143478,"T":"2017-07-29 04:48:38"},{"X":124.330436,"Y":53.13942,"T":"2017-07-29 04:49:41"},{"X":124.336181,"Y":53.135066,"T":"2017-07-29 04:50:42"},{"X":124.33837,"Y":53.133715,"T":"2017-07-29 04:51:45"},{"X":124.339298,"Y":53.130931,"T":"2017-07-29 04:52:48"},{"X":124.339741,"Y":53.128151,"T":"2017-07-29 04:53:50"},{"X":124.345946,"Y":53.12788,"T":"2017-07-29 04:54:54"},{"X":124.351498,"Y":53.126408,"T":"2017-07-29 04:55:55"},{"X":124.355955,"Y":53.124145,"T":"2017-07-29 04:56:57"},{"X":124.363346,"Y":53.123191,"T":"2017-07-29 04:58:00"},{"X":124.364606,"Y":53.123088,"T":"2017-07-29 04:59:02"},{"X":124.365356,"Y":53.122418,"T":"2017-07-29 05:00:03"},{"X":124.365026,"Y":53.12253,"T":"2017-07-29 05:01:05"},{"X":124.364803,"Y":53.122408,"T":"2017-07-29 05:02:09"},{"X":124.364735,"Y":53.122351,"T":"2017-07-29 05:03:10"},{"X":124.364941,"Y":53.12257,"T":"2017-07-29 05:04:13"},{"X":124.36493,"Y":53.122545,"T":"2017-07-29 05:05:15"},{"X":124.364595,"Y":53.122523,"T":"2017-07-29 05:06:18"},{"X":124.364561,"Y":53.122515,"T":"2017-07-29 05:07:20"},{"X":124.364693,"Y":53.122608,"T":"2017-07-29 05:08:22"},{"X":124.364561,"Y":53.12297,"T":"2017-07-29 05:09:23"},{"X":124.365253,"Y":53.123141,"T":"2017-07-29 05:10:25"},{"X":124.372181,"Y":53.122118,"T":"2017-07-29 05:11:28"},{"X":124.37717,"Y":53.121753,"T":"2017-07-29 05:12:30"},{"X":124.37707,"Y":53.12189,"T":"2017-07-29 05:13:31"},{"X":124.37707,"Y":53.12189,"T":"2017-07-29 05:14:32"},{"X":124.38538,"Y":53.121933,"T":"2017-07-29 05:15:36"},{"X":124.390958,"Y":53.117903,"T":"2017-07-29 05:16:39"},{"X":124.395646,"Y":53.116928,"T":"2017-07-29 05:17:41"},{"X":124.403725,"Y":53.11666,"T":"2017-07-29 05:18:44"},{"X":124.407248,"Y":53.113548,"T":"2017-07-29 05:19:46"},{"X":124.410191,"Y":53.11062,"T":"2017-07-29 05:20:48"},{"X":124.411935,"Y":53.106645,"T":"2017-07-29 05:21:49"},{"X":124.414998,"Y":53.102413,"T":"2017-07-29 05:22:52"},{"X":124.41875,"Y":53.099563,"T":"2017-07-29 05:23:55"},{"X":124.425026,"Y":53.097105,"T":"2017-07-29 05:24:57"},{"X":124.431578,"Y":53.092538,"T":"2017-07-29 05:26:24"},{"X":124.43496,"Y":53.088641,"T":"2017-07-29 05:27:25"},{"X":124.43622,"Y":53.08772,"T":"2017-07-29 05:28:42"},{"X":124.438648,"Y":53.080206,"T":"2017-07-29 05:29:30"},{"X":124.453248,"Y":53.074468,"T":"2017-07-29 05:31:45"},{"X":124.453395,"Y":53.074421,"T":"2017-07-29 05:32:45"},{"X":124.468115,"Y":53.069025,"T":"2017-07-29 05:33:51"},{"X":124.47323,"Y":53.066483,"T":"2017-07-29 05:34:53"},{"X":124.477976,"Y":53.062595,"T":"2017-07-29 05:35:55"},{"X":124.482875,"Y":53.058856,"T":"2017-07-29 05:36:57"},{"X":124.486476,"Y":53.054758,"T":"2017-07-29 05:37:59"},{"X":124.492395,"Y":53.049928,"T":"2017-07-29 05:39:02"},{"X":124.500675,"Y":53.049761,"T":"2017-07-29 05:40:04"},{"X":124.50067,"Y":53.04971,"T":"2017-07-29 05:41:19"},{"X":124.490976,"Y":53.050573,"T":"2017-07-29 05:42:09"},{"X":124.484463,"Y":53.056715,"T":"2017-07-29 05:43:35"},{"X":124.477943,"Y":53.062511,"T":"2017-07-29 05:44:37"},{"X":124.477943,"Y":53.062511,"T":"2017-07-29 05:44:49"},{"X":124.469738,"Y":53.068205,"T":"2017-07-29 05:45:40"},{"X":124.462806,"Y":53.072365,"T":"2017-07-29 05:46:43"},{"X":124.451646,"Y":53.074893,"T":"2017-07-29 05:47:46"},{"X":124.441951,"Y":53.077835,"T":"2017-07-29 05:48:48"},{"X":124.4379,"Y":53.083101,"T":"2017-07-29 05:49:51"},{"X":124.432873,"Y":53.091736,"T":"2017-07-29 05:51:52"},{"X":124.432873,"Y":53.091736,"T":"2017-07-29 05:52:10"}]}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("获取数据为空");
                } else {
                    this.mapLoading.hide();
                    var jsonObj=dojo.fromJson(dataJson);
                    //轨迹数据
                    var pointList = jsonObj.topics;//JSON.parse(event.result as String) as Array;
                    var path = new Array();
                    // 将轨迹数据放入点集合中[轨迹回放所需要的点]【轨迹回放】
                    this.mapPoints.splice(0,this.mapPoints.length);
                    if(pointList.length>0){
                        for(var j=0; j<pointList.length; j++) {
                            var obj= pointList[j];
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
                        this.createFlagGraphic("e", new Point(path[pointList.length-1][0],path[pointList.length-1][1],this.map.spatialReference));
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

            onOpen: function () {
            },

            onClose:function(){
                if(this._personGraphicsLayer){
                    this._personGraphicsLayer.clear();
                    //this.map.removeLayer(this._personGraphicsLayer);
                    //this._personGraphicsLayer = null;
                }
                if(this._pathGraphicsLayer){
                    this._pathGraphicsLayer.clear();
                    //this.map.removeLayer(this._pathGraphicsLayer);
                    //this._pathGraphicsLayer = null;
                }
                if(this._keyPointGraphicsLayer){
                    this._keyPointGraphicsLayer.clear();
                    //this.map.removeLayer(this._keyPointGraphicsLayer);
                    //this._keyPointGraphicsLayer = null;
                }
                if(this._keyPointTextGraphicsLayer){
                    this._keyPointTextGraphicsLayer.clear();
                    //this.map.removeLayer(this._keyPointTextGraphicsLayer);
                    //this._keyPointTextGraphicsLayer = null;
                }
            },

            unitKeyPointChange:function(selectData){
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.ws.url = this.historyPoints;
                }
                this.mapLoading.show();
                this.ws.UnitKeyPointList(lang.hitch(this,this.keyPointResponse),lang.hitch(this,this.reportError),selectData.UNITEVENTID,this.monitorDateTimer);*/
                this.keyPointResponse(null);
            },

            userKeyPointChange:function(selectData){
               /* if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IHistoryPoints();
                    this.ws.url = this.historyPoints;
                }
                this.mapLoading.show();
                this.ws.UserPointList(lang.hitch(this,this.keyPointResponse),lang.hitch(this,this.reportError),selectData.PERSONID,this.monitorDateTimer);*/
                this.keyPointResponse(null);
            },

            /*destroy:function(){
             this.inherited(arguments);
             },*/
        });
        return clazz;
    });