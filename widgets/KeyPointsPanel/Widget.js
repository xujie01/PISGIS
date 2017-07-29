define(['dojo/_base/lang',
        'dojo/_base/declare',
        'jimu/BaseWidget',
        'dojox/grid/DataGrid',
        'dojo/data/ItemFileWriteStore',
        "dojo/topic",
        'jimu/dijit/LoadingShelter',
        'dojo/dom-style',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/html',
        'dojo/on','jimu/PanelManager',
        "jimu/magicgis/configProject",
        'jimu/magicgis/util/CommonParams',"jimu/magicgis/util/services/KeyPointsService",
        "jimu/magicgis/dijit/PileDijit/UnitComboxDijit","jimu/magicgis/dijit/PileDijit/LineloopComboxDijit",
        "jimu/magicgis/dijit/PileDijit/MarkerComboxDijit","dijit/form/ComboBox"
    ],
    function (lang, declare, BaseWidget,DataGrid,ItemFileWriteStore,topic,LoadingShelter,domStyle,_WidgetsInTemplateMixin,html,
              on,PanelManager,configProject,CommonParams,KeyPointsService) {
        return declare([BaseWidget,_WidgetsInTemplateMixin], {
            //templateString:template,
            baseClass: 'jimu-widget-keypointspanel',
            name: 'KeyPointsPanel',
            unitResult:{},
            lineloopResult:{},
            markerResult:{},
            editFlag:null,
            keypointItem:null,
            ws:null,
            keyPoints:null,

            postCreate: function () {
                this.inherited(arguments);
                this.shelter = new LoadingShelter({
                    hidden: true
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();

                var typeArrayCol=[
                    {label:this.nls.startingPointLabel,value:"01"},
                    {label:this.nls.needPointLabel,value:"02"},
                    {label:this.nls.specialPointLabel,value:"03"},
                    {label:this.nls.testPileLabel,value:"04"},
                    {label:this.nls.patrolPointLabel,value:"05"},
                    {label:this.nls.observationSPointLabel,value:"06"},
                    {label:this.nls.agriculturalRoadLabel,value:"07"},
                    {label:this.nls.observationPointLabel,value:"08"},
                    {label:this.nls.endLabel,value:"09"}];
                for(var i=0;i<typeArrayCol.length;i++){
                    var option = {
                        label:typeArrayCol[i].label,
                        value:typeArrayCol[i].value
                    };
                    this.classSelect.addOption(option);
                }
                this.keyPoints=configProject.keyPoints;
            },

            startup: function () {
                this.inherited(arguments);
               /* this.unitSeclect.initUnitComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.lineloopSeclect.initLineloopComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.markerSeclect.initMarkerComboxValue({
                    dataServerUrl:configProject.RedisPIS,
                    unitEventid:CommonParams.getInstance().unitEventid
                });
                this.own(on(this.unitSeclect,"unitComboxChange",lang.hitch(this, this._unitComboxChange)));
                this.own(on(this.lineloopSeclect,"lineloopComboxChange",lang.hitch(this, this._lineloopComboxChange)));
                this.own(on(this.markerSeclect,"markerComboxChange",lang.hitch(this, this._markerComboxChange)));*/

                topic.subscribe("KeyPointsTable", lang.hitch(this, this.getKeyPointsTable));
                topic.publish('initedKeyPointsQuery',"initedKeyPointsQuery");
            },

            getKeyPointsTable: function(KeyPointsTable) {
                if(KeyPointsTable.flag)this.editFlag=KeyPointsTable.flag;
                if(KeyPointsTable.item){
                    /*this.keypointItem=KeyPointsTable.item;
                    this.unitSeclect.setUnitComboxValue(KeyPointsTable.item.UNITID[0],KeyPointsTable.item.UNITNAME[0],false);
                    this.unitResult.unitEventid=KeyPointsTable.item.UNITID[0];
                    this.lineloopSeclect.setLineloopComboxValue(KeyPointsTable.item.UNITID[0],KeyPointsTable.item.LINELOOPEVENTID[0],KeyPointsTable.item.LINELOOPNAME[0],false);
                    this.lineloopResult.lineloopEventid=KeyPointsTable.item.LINELOOPEVENTID[0];
                    this.lineloopResult.lineloopName=KeyPointsTable.item.LINELOOPNAME[0];
                    var lc_position = KeyPointsTable.item.POINTPOSITION[0].split(" ");
                    var lc_markerposition = lc_position[1].split("+");
                    var lc_markerName = lc_markerposition[0];
                    var lc_markerPy = lc_markerposition[1];
                    this.markerSeclect.setMarkerComboxValue({unitEventid:KeyPointsTable.item.UNITID[0],
                        lineloopEventid:KeyPointsTable.item.LINELOOPEVENTID[0],
                        lineloopName:KeyPointsTable.item.LINELOOPNAME[0],
                        markerEventid:"",
                        markerName:lc_markerName,
                        markerOffset:lc_markerPy,
                        ssEventid:"",
                        makerStation:KeyPointsTable.item.STATION[0]
                    },true);

                    this.keypointStation.setValue(KeyPointsTable.item.STATION[0]);
                    this.keypointRadius.setValue(KeyPointsTable.item.BUFFER[0]);
                    this.classSelect.setValue(KeyPointsTable.item.TYPE[0]);
                    this.keypointName.setValue(KeyPointsTable.item.NAME[0]);
                    this.monitorBeginDate.set("value",KeyPointsTable.item.EFFECTIVEBEGINDATE[0]);
                    this.monitorEndDate.set("value",KeyPointsTable.item.EFFECTIVEENDDATE[0]);
                    this.lonSec.value=KeyPointsTable.item.LON[0];
                    this.latSec.value=KeyPointsTable.item.LAT[0];
                    this.keypointDescrib.value=KeyPointsTable.item.DESCRIPTION[0];*/
                }else{
                    this.resetClick();
                }
            },

            _unitComboxChange:function(unitResult){
                this.unitResult=unitResult;
                this.lineloopSeclect.setLineloopComboxValue(unitResult.unitEventid,"","",true);
            },
            _lineloopComboxChange:function(lineloopResult){
                //layer.msg(lineloopResult.unitEventid+lineloopResult.lineloopName+lineloopResult.lineloopEventid);
                this.lineloopResult=lineloopResult;
                this.markerSeclect.setMarkerComboxValue({unitEventid:lineloopResult.unitEventid,
                    lineloopEventid:lineloopResult.lineloopEventid,
                    lineloopName:lineloopResult.lineloopName,
                    markerEventid:"",
                    markerName:"",
                    markerOffset:"",
                    ssEventid:"",
                    makerStation:""
                },true);
            },
            _markerComboxChange:function(markerResult){
                //layer.msg(markerResult.unitEventid+markerResult.lineloopName+markerResult.lineloopEventid);
                this.markerResult=markerResult;
                this.keypointStation.setValue(markerResult.makerStation);
            },

            saveClick: function () {
                if (!this.unitResult.unitEventid||!this.lineloopResult.lineloopEventid||!this.markerResult.markerEventid||
                !this.keypointStation.value||!this.keypointRadius.value||!this.classSelect.value||!this.keypointName.value||
                !this.monitorBeginDate.get("value")||!this.monitorEndDate.get("value")||!this.lonSec.value||!this.latSec.value||
                !this.keypointDescrib.value) {
                    layer.msg("填入项不能有空值");
                    return;
                }
                var kpObject = new Object();
                kpObject.NAME = this.keypointName.value;// 关键点名称
                kpObject.UNITID = this.unitResult.unitEventid;// 关键点所属部门
                kpObject.LINENAME = this.lineloopResult.lineloopName;// 管线ID
                kpObject.LINEID = this.lineloopResult.lineloopEventid;// 管线ID
                kpObject.STATION = this.keypointStation.value;// 里程值
                kpObject.POINTPOSITION = this.lineloopResult.lineloopName+" "+this.markerResult.markerEventid+" "+this.markerResult.markerOffset; //位置描述
                kpObject.BUFFER = this.keypointRadius.value;// 缓冲范围
                var currentBeginDate = dojo.date.locale.format( this.monitorBeginDate.get("value"), {selector:"date", datePattern:'yyyy-MM-dd' } );
                var currentEndDate = dojo.date.locale.format( this.monitorEndDate.get("value"), {selector:"date", datePattern:'yyyy-MM-dd' } );
                kpObject.EFFECTIVEBEGINDATE = currentBeginDate;// 有效起始日期
                kpObject.EFFECTIVEENDDATE = currentEndDate;// 有效结束日期
                kpObject.LON = this.lonSec.value;// 经度
                kpObject.LAT = this.latSec.value;// 纬度
                kpObject.DESCRIPTION = this.keypointDescrib.value;// 描述信息
                kpObject.CREATEBY = CommonParams.unitEventid; //创建人（当前登录用户）
                kpObject.TYPEVALUE=this.classSelect.label;//关键点类型
                kpObject.TYPE=this.classSelect.value;	//关键点类型

                var jsonStr = "";
                /*if (this.editFlag == "insert") {
                    jsonStr = JSON.stringify(kpObject); //可以将json对象转换成json对符串
                    this.insertKeyPoint(jsonStr);
                } else if (this.editFlag == "edit"){
                    kpObject.MODIFYBY = CommonParams.unitEventid;
                    kpObject.EVENTID = this.keypointItem.EVENTID; //根据关键点的eventid进行编辑
                    jsonStr = JSON.stringify(kpObject);
                    this.editKeyPoint(jsonStr);
                }*/
                layer.msg("模拟更新数据成功");
                this.cancelClick();
            },

            insertKeyPoint: function (jsonStr) {
                if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints();
                    this.ws.url = this.keyPoints;
                }
                this.loading.show();
                this.ws.addKeyPoint(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),jsonStr);
            },
            editKeyPoint: function (jsonStr) {
                if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IKeyPoints();
                    this.ws.url = this.keyPoints;
                }
                this.loading.show();
                this.ws.editKeyPoint(lang.hitch(this,this.editResponse),lang.hitch(this,this.reportError),jsonStr);
            },
            processResponse:function(response){
                this.loading.hide();
                var dataJson = response.getReturn();
                console.log("addKeyPoint成功");
                var objData=dojo.fromJson(dataJson);
                if (objData != null) {
                    if (objData.success == "1") {
                        layer.msg(this.nls.addsuccess);
                    }else{
                        layer.msg("webService error"+response);
                    }
                }
            },
            editResponse:function(response){
                this.loading.hide();
                var dataJson = response.getReturn();
                console.log("editKeyPoint成功");
                var objData=dojo.fromJson(dataJson);
                if (objData != null) {
                    if (objData.success == "1") {
                        layer.msg(this.nls.editsuccess);
                    }else{
                        layer.msg("webService error"+response);
                    }
                }
            },
            reportError:function(response){
                this.loading.hide();
                console.log("addKeyPoint失败"+response);
                layer.msg("webService error"+response);
            },

            resetClick: function () {
                /*this.unitSeclect.setUnitComboxValue("","",false);
                this.lineloopSeclect.setLineloopComboxValue("","","",false);
                this.markerSeclect.setMarkerComboxValue({unitEventid:"",
                    lineloopEventid:"",
                    lineloopName:"",
                    markerEventid:"",
                    markerName:"",
                    markerOffset:"",
                    ssEventid:"",
                    makerStation:""
                },true);

                this.keypointStation.setValue("");
                this.keypointRadius.setValue("");
                this.classSelect.setValue("");
                this.keypointName.setValue("");
                this.monitorBeginDate.set("value","");
                this.monitorEndDate.set("value","");
                this.lonSec.value="";
                this.latSec.value="";
                this.keypointDescrib.value="";*/
            },

            cancelClick: function () {
                for(var i=0;i<this.appConfig.widgetPool.widgets.length;i++){
                    var widget=this.appConfig.widgetPool.widgets[i];
                    if(widget.id=="KeyPointsPanel"){
                        PanelManager.getInstance().closePanel(widget.id+"_panel");
                    }
                }
            },

            onOpen: function () {
            },

            onClose: function () {
                this.unitSeclect.hideMenu();
                this.lineloopSeclect.hideMenu();
                this.markerSeclect.hideMenu();
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