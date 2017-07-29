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
        'esri/Color','esri/InfoTemplate',
        'esri/symbols/TextSymbol',
        'esri/geometry/Point',"esri/symbols/PictureMarkerSymbol",
        'dojo/query','jimu/magicgis/util/commonUtils',
        'jimu/magicgis/util/CommonParams',"esri/tasks/GeometryService",
        "esri/tasks/BufferParameters",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/config",
        'dojo/_base/array',
        "dojo/topic",
        'jimu/magicgis/util/APDMOperation',
        'jimu/magicgis/util/PipelineOperation/MapPipelineStatus',
        "jimu/magicgis/configProject","jimu/magicgis/util/services/GetPipeInfoTableDataService",
        'jimu/magicgis/util/services/HistoryPointsService'
    ],
    function (lang,_WidgetsInTemplateMixin, declare, BaseWidget,DataGrid,ItemFileWriteStore,LoadingShelter,domStyle,html,
        Graphic,GraphicsLayer,Color,InfoTemplate,TextSymbol,Point,PictureMarkerSymbol,query,commonUtils,
              CommonParams,GeometryService,BufferParameters,SimpleLineSymbol,SimpleFillSymbol,
              esriConfig,array,topic,APDMOperation,MapPipelineStatus,
              configProject) {
        return declare([BaseWidget, _WidgetsInTemplateMixin], {
            //templateString:template,
            baseClass: 'jimu-widget-functionanalysis',
            name: 'FunctionAnalysis',
            pipeInfoTableData:null,
            ws:null,
            locationPoint:null,
            _graphicsLayer: null,
            inradius1:0,//内半径
            outradius1:0,//外半径
            severe1:0,//重度
            watersevere1:0,//减去浮力后的重力
            projectionspeed1:0,//投影速度
            flowpressure1:0,//绕流压强
            resistance1:0,//单位长度阻力
            complexload1:"",//重度（-浮力）和阻力复合载荷
            inertiasquare1:0,//惯性矩
            hoopstress1:0,//环向应力
            axialstress1:0,//屈服时的轴向应力
            axialstress2:0,//屈服时的轴向应力
            floatlength1:"",//允许悬空长度
            ultimatefloatlength1:"",//允许极限悬空长度
            tensilestrain1:0.01,   //极限拉伸应变

            postCreate: function () {
                this.inherited(arguments);
                this.pipeInfoTableData=configProject.pipeInfoTableData;
                this.shelter = new LoadingShelter({
                    hidden: true
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();
                this.apdmOperation=APDMOperation.getInstance({
                    map:this.map
                });

                this._graphicsLayer = new GraphicsLayer();
                this.map.addLayer(this._graphicsLayer);
            },

            startup: function () {
                this.inherited(arguments);
                this.connect(this, "resize", function () {
                    if(this.grid)this.grid.resize();
                });

                var targetNode = this.typeBtn;
                targetNode.onclick=lang.hitch(this,function(evt){//事件代理
                    var e=event||evt;
                    var obj=e.srcElement||e.target;
                    if(obj.tagName=='LI'){
                        this.activeTabDiv(obj.getAttribute("data-id"));
                    }else if(obj.parentNode.tagName=='LI'){
                        this.activeTabDiv(obj.parentNode.getAttribute("data-id"));
                    }});
            },

            onOpen: function () {
                this.loadPipeInfoList();
                //this.getDepth();
                this.locationPoint=new Point(12878732.249323312,4335822.400463457,this.map.spatialReference);
                this.divELEVATION.innerHTML=37.97;
                this.divDEPTH.innerHTML=0.01;
            },

            activeTabDiv:function(activePersonId){
                var oLis=query(".ui-tab-item", "functionAnalysisUL");
                for(var i=0; i<oLis.length;i++){
                    if(oLis[i].getAttribute("data-id")==activePersonId){
                        html.addClass(oLis[i],"ui-tab-item-active");
                    }else{
                        html.removeClass(oLis[i],"ui-tab-item-active");
                    }
                }
                if(activePersonId=="boom"){
                    html.setStyle(this.boomTab, 'display', 'block');
                    html.setStyle(this.analysisTab, 'display', 'none');
                }else if(activePersonId=="analysis"){
                    html.setStyle(this.boomTab, 'display', 'none');
                    html.setStyle(this.analysisTab, 'display', 'block');
                }
            },

            //获取高程等基本信息
            getDepth:function(){
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                this.apdmOperation.getDepthByLineStation(mapPipelineStatus.CenterPoint.LineLoopEventID,mapPipelineStatus.CenterPoint.CenterStation,
                    mapPipelineStatus.mUnitEventID,lang.hitch(this,this.getDepthByLineStationComplete),lang.hitch(this,this.executeFault));
            },
            getDepthByLineStationComplete:function(event){
                var lc_soeResult=event.mPosSoeResult;
                var jsonPoint=JSON.parse(JSON.parse(lc_soeResult.mPoint));
                this.locationPoint=new Point(jsonPoint.x,jsonPoint.y,this.map.spatialReference);
                this.divELEVATION.innerHTML=lc_soeResult.Elevation;
                this.divDEPTH.innerHTML=lc_soeResult.Depth;
            },
            executeFault:function(event){
                //this.loading.hide();
                console.log(event.toString());
                layer.msg(event.toString());
                this.locationPoint=null,
                this.divELEVATION.innerHTML="";
                this.divDEPTH.innerHTML="";
            },

            loadPipeInfoList:function(){
                //创建WebService对象
                if(this.ws==null)
                {
                    this.ws = new def_service_cnpc_com__IGetPipeInfoTableData();
                    this.ws.url = this.pipeInfoTableData;
                }
                var mapPipelineStatus=MapPipelineStatus.getInstance();
                this.shelter.show();
                //调用方法，使用参数
                /*this.ws.getPipeInfoData(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),mapPipelineStatus.CenterPoint.LineLoopEventID,
                    mapPipelineStatus.BeginPoint.BeginStation,mapPipelineStatus.EndPoint.EndStation,mapPipelineStatus.CenterPoint.CenterStation,
                    CommonParams.getInstance().lang);*/
                this.processResponse("模拟服务器请求");
            },
            processResponse:function(response){
                this.shelter.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"AttributeTable":{"RowsNext":[{"POINTPOSITION":"中沧南线 南线L136-JS-04+162.859","SITENAME":"莘县清管站","CONTACT":"宁晓东","STATION":"132150.364"}],"RowsLineLoop":[{"MEDIUMTYPE":"天然气"}],"PersonInfo":[{"XPHONE":"11800000000","GPHONE":"0534-2656752","GNAME":"宁晓东","XNAME":"寇广其"}],"RowsPressure":[],"RowsValveNext":[{"VALVENUMBER":"","PRESENTPOSITION":"未知","AUTOMATED":"未知","OPERATORTYPE":"未知","VALVETYPE":"未知","VALVEFUNCTION":"未知"}],"RowsRisk":[],"RowsPipeInfo":[{"DIAMETER":"426","PIPENUM":"","PIPETYPE":"","WALLTHICKNESS":"7","PIPELINENAME":"中沧南线","MANUPIPESEAMTYPE":"螺旋焊缝","GRADE":"","MATERIAL":"钢材"}],"RowsValve":[{"VALVENUMBER":"","PRESENTPOSITION":"常开","AUTOMATED":"是","OPERATORTYPE":"气液联动","VALVETYPE":"球阀","VALVEFUNCTION":"截断"}],"Rows":[{"POINTPOSITION":"中沧南线 南线L110+12.611","SITENAME":"田庄阀室","CONTACT":"宁晓东","STATION":"108448.842"}]}}';
                if (dataJson==null||dataJson=="") {
                    layer.msg("Data is empty");
                } else {
                    var pipelineData=dojo.fromJson(dataJson);
                    var mapPipelineStatus=MapPipelineStatus.getInstance();
                    //this.pipelineObj=JSON.parse(pipelineData.AttributeTable);
                    this.pipelineObj=pipelineData.AttributeTable;
                    //this.divNAME.innerHTML=mapPipelineStatus.CenterPoint.LineLoopName+" "+mapPipelineStatus.CenterPoint.CenterMarkerName+" "+mapPipelineStatus.CenterPoint.CenterMarkerOffset;
                    this.divNAME.innerHTML="中沧南线 南线L131-JM-02 -0.265";
                    this.divMEDIUMTYPE.innerHTML=this.pipelineObj["RowsLineLoop"][0]?this.pipelineObj["RowsLineLoop"][0]["MEDIUMTYPE"]:"";
                    this.divISHCA.innerHTML=this.pipelineObj["RowsRisk"][0]?this.pipelineObj["RowsRisk"][0]["ISHCA"]:"";
                    this.divRISKGRADE.innerHTML=this.pipelineObj["RowsRisk"][0]?this.pipelineObj["RowsRisk"][0]["RISKGRADE"]:"";
                    this.divPIPETYPE.innerHTML=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["PIPETYPE"]:"";
                    this.divMANUPIPESEAMTYPE.innerHTML=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["MANUPIPESEAMTYPE"]:"";
                    this.divGRADE.innerHTML=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["GRADE"]:"";
                    this.divPRESSURE.innerHTML=this.pipelineObj["RowsPressure"][0]?this.pipelineObj["RowsPressure"][0]["PRESSURE"]:"";
                    this.divDIAMETER.innerHTML=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["DIAMETER"]:"";
                    this.divWALLTHICKNESS.innerHTML=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["WALLTHICKNESS"]:"";
                    this.divGNAME.innerHTML=this.pipelineObj["PersonInfo"][0]?this.pipelineObj["PersonInfo"][0]["GNAME"]:"";
                    this.divGPHONE.innerHTML=this.pipelineObj["PersonInfo"][0]?this.pipelineObj["PersonInfo"][0]["GPHONE"]:"";
                    this.divXNAME.innerHTML=this.pipelineObj["PersonInfo"][0]?this.pipelineObj["PersonInfo"][0]["XNAME"]:"";
                    this.divXPHONE.innerHTML=this.pipelineObj["PersonInfo"][0]?this.pipelineObj["PersonInfo"][0]["XPHONE"]:"";

                    this.divDIAMETER1.value=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["DIAMETER"]:"";
                    var wallthickness=this.pipelineObj["RowsPipeInfo"][0]?this.pipelineObj["RowsPipeInfo"][0]["WALLTHICKNESS"]:0;
                    var wallthick=Number((Math.round(Number(wallthickness)*1000000)/1000000).toFixed(6));
                    this.divWALLTHICKNESS1.value=wallthick;
                    this.divDENSITY.value=860;
                    this.divWATERDENSITY.value=1000;
                    this.divFLOWWATERDENSITY.value=1000;
                    this.divFLOWWATER.value=10;
                    this.divPIPEANGLE.value=90;
                    this.divYIEDSTRENGT.value=358;
                    this.divMODULUS.value=210000;
                    this.divINPRESSURE.value=7;

                    var presite={SITE:"上游截断阀",SITENAME:this.pipelineObj["Rows"][0]["SITENAME"],POINTPOSITION:this.pipelineObj["Rows"][0]["POINTPOSITION"],
                        CONTACT:this.pipelineObj["Rows"][0]["CONTACT"],STATION:this.pipelineObj["Rows"][0]["STATION"],
                        VALVENUMBER:this.pipelineObj["RowsValve"][0]["VALVENUMBER"],VALVEFUNCTION:this.pipelineObj["RowsValve"][0]["VALVEFUNCTION"],
                        VALVETYPE:this.pipelineObj["RowsValve"][0]["VALVETYPE"],OPERATORTYPE:this.pipelineObj["RowsValve"][0]["OPERATORTYPE"],
                        AUTOMATED:this.pipelineObj["RowsValve"][0]["AUTOMATED"],PRESENTPOSITION:this.pipelineObj["RowsValve"][0]["PRESENTPOSITION"]};
                    var nextsite={SITE:"下游截断阀",SITENAME:this.pipelineObj["RowsNext"][0]["SITENAME"],POINTPOSITION:this.pipelineObj["RowsNext"][0]["POINTPOSITION"],
                        CONTACT:this.pipelineObj["RowsNext"][0]["CONTACT"],STATION:this.pipelineObj["RowsNext"][0]["STATION"],
                        VALVENUMBER:this.pipelineObj["RowsValveNext"][0]["VALVENUMBER"],VALVEFUNCTION:this.pipelineObj["RowsValveNext"][0]["VALVEFUNCTION"],
                        VALVETYPE:this.pipelineObj["RowsValveNext"][0]["VALVETYPE"],OPERATORTYPE:this.pipelineObj["RowsValveNext"][0]["OPERATORTYPE"],
                        AUTOMATED:this.pipelineObj["RowsValveNext"][0]["AUTOMATED"],PRESENTPOSITION:this.pipelineObj["RowsValveNext"][0]["PRESENTPOSITION"]};
                    this.getData2Grid([presite,nextsite]);
                }

            },
            reportError:function(response){
                this.shelter.hide();
                console.log("webservice失败"+response);
                this.pipelineObj=null;
                this.divNAME.innerHTML="";
                this.divMEDIUMTYPE.innerHTML="";
                this.divISHCA.innerHTML="";
                this.divRISKGRADE.innerHTML="";
                this.divPIPETYPE.innerHTML="";
                this.divMANUPIPESEAMTYPE.innerHTML="";
                this.divGRADE.innerHTML="";
                this.divPRESSURE.innerHTML="";
                this.divDIAMETER.innerHTML="";
                this.divWALLTHICKNESS.innerHTML="";
                this.divGNAME.innerHTML="";
                this.divGPHONE.innerHTML="";
                this.divXNAME.innerHTML="";
                this.divXPHONE.innerHTML="";

                this.divDIAMETER1.value="";
                this.divWALLTHICKNESS1.value="";
                this.divDENSITY.value="";
                this.divWATERDENSITY.value="";
                this.divFLOWWATERDENSITY.value="";
                this.divFLOWWATER.value="";
                this.divPIPEANGLE.value="";
                this.divYIEDSTRENGT.value="";
                this.divMODULUS.value="";
                this.divINPRESSURE.value="";

                this.getData2Grid([]);
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
                    {'name':this.nls.siteName,'field':'SITE','width':'120px'},
                    {'name':this.nls.siteName,'field':'SITENAME','width':'120px'},
                    {'name':this.nls.position,'field':'POINTPOSITION','width':'120px'},
                    {'name':this.nls.contactPeople,'field':'CONTACT','width':'120px'},
                    {'name':this.nls.mileageValue,'field':'STATION','width':'120px'},
                    {'name':this.nls.valvenumber,'field':'VALVENUMBER','width':'120px'},
                    {'name':this.nls.valveFunction,'field':'VALVEFUNCTION','width':'120px'},
                    {'name':this.nls.valveType,'field':'VALVETYPE','width':'120px'},
                    {'name':this.nls.driveType,'field':'OPERATORTYPE','width':'120px'},
                    {'name':this.nls.autoValve,'field':'AUTOMATED','width':'120px'},
                    {'name':this.nls.status,'field':'PRESENTPOSITION','width':'120px'}
                ]];

                if(!this.grid){
                    this.grid=new DataGrid({
                            store:store,
                            structure:layout,
                            rowSelector:'20px',
                            rowsPerPage:10
                        },
                        this.gridDivNode);
                    this.grid.startup();
                }else{
                    this.grid.setStore(store);
                }

            },

            _onQueryBtnClick: function () {
                if(!this.locationPoint)return;
                this.shelter.show();
                this._graphicsLayer.clear();
                var params = new BufferParameters();
                params.distances = [ this.distanceText.value ];
                params.outSpatialReference = this.map.spatialReference;
                params.unit = GeometryService['UNIT_METER'];
                params.geometries = [this.locationPoint];
                esriConfig.defaults.geometryService.buffer(params, lang.hitch(this,this.showBufferOperation),lang.hitch(this,this.errback));
            },
            showBufferOperation:function(bufferedGeometries) {
                this.shelter.hide();
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
                topic.publish('FloatTable',"SpaceQueryTable",bufferedGeometries[0]);
                this.map.centerAndZoom(this.locationPoint,12);

            },

            errback:function(evt) {
                this.shelter.hide();
                layer.msg(evt);
            },

            _onCalculate: function () {
                this.computecomplexload();
                this.computefloatlength();
            },

            computecomplexload: function () {
                var complexload3=0;
                this.outradius1=Number(this.divDIAMETER1.value)*0.5*0.001;
                this.inradius1=this.outradius1-Number(this.divWALLTHICKNESS1.value)*0.001;
                this.severe1=3.1416*this.inradius1*this.inradius1*Number(this.divDENSITY.value)*9.8+3.1416*(this.outradius1*this.outradius1-this.inradius1*this.inradius1)*7900*9.8;
                this.watersevere1=this.severe1-3.1416*this.outradius1*this.outradius1*1000*9.8;
                this.projectionspeed1=Number(this.divFLOWWATER.value)*Math.sin(Number(this.divPIPEANGLE.value)*3.1416/180);
                this.projectionspeed1=Number((Math.round(this.projectionspeed1*1000000)/1000000).toFixed(6));
                this.flowpressure1=Math.round(1000*this.projectionspeed1*this.projectionspeed1/2);

                this.resistance1=Math.round(this.flowpressure1*Number(this.divDIAMETER1.value)*0.001);
                this.flowpressure1=Number((Math.round(this.flowpressure1*1000000)/1000000).toFixed(6));

                complexload3=Math.sqrt(this.watersevere1*this.watersevere1+this.resistance1*this.resistance1);
                this.severe1=Number((Math.round(this.severe1*1000000)/1000000).toFixed(6));
                this.watersevere1=Number((Math.round(this.watersevere1*1000000)/1000000).toFixed(6));
                this.resistance1=Number((Math.round(this.resistance1*1000000)/1000000).toFixed(6));
                this.complexload1=(Math.round(complexload3*1000000)/1000000).toFixed(6);
                this.divCOMPLEXLOAD.value=this.complexload1;
            },

            computefloatlength: function () {
                var floatlength3=0;
                var ultimatefloatlength3=0;
                this.inertiasquare1=3.1416*(this.outradius1*this.outradius1*this.outradius1*this.outradius1-this.inradius1*this.inradius1*this.inradius1*this.inradius1)/4;
                if(Number(this.divWALLTHICKNESS1.value)==0)
                {
                    this.hoopstress1=0;
                }
                else
                {
                    this.hoopstress1=Number(this.divINPRESSURE.value)*1000000*Number(this.divDIAMETER1.value)*0.5*0.001/(Number(this.divWALLTHICKNESS1.value)*0.001);
                }

                this.axialstress1=(this.hoopstress1+Math.sqrt(4*Number(this.divYIEDSTRENGT.value)*1000000*Number(this.divYIEDSTRENGT.value)*1000000-3*this.hoopstress1*this.hoopstress1))*0.5;
                this.axialstress2=(this.hoopstress1+Math.sqrt(4*((Number(this.divMODULUS.value)*1000000*this.tensilestrain1)*(Number(this.divMODULUS.value)*1000000*this.tensilestrain1))-3*this.hoopstress1*this.hoopstress1))*0.5;
                if(Number(this.divDIAMETER1.value)==0)
                {
                    floatlength3=0;
                    ultimatefloatlength3=0;
                }
                else
                {
                    floatlength3=Math.sqrt(16*this.inertiasquare1*this.axialstress1/(Number(this.divDIAMETER1.value)*0.001)/Number(this.complexload1));
                    ultimatefloatlength3=Math.sqrt(16*this.inertiasquare1*this.axialstress2/(Number(this.divDIAMETER1.value)*0.001)/Number(this.complexload1));
                }
                if(Number(floatlength3)>Number(ultimatefloatlength3))
                {
                    layer.msg(this.nls.analysisTip);
                }
                else
                {
                    this.inertiasquare1=Number((Math.round(this.inertiasquare1*1000000)/1000000).toFixed(6));
                    this.hoopstress1=Number((Math.round(this.hoopstress1*1000000)/1000000).toFixed(6));
                    this.axialstress1=Number((Math.round(this.axialstress1*1000000)/1000000).toFixed(6));
                    this.axialstress2=Number((Math.round(this.axialstress2*1000000)/1000000).toFixed(6));
                    this.floatlength1=(Math.round(floatlength3*1000000)/1000000).toFixed(6);
                    this.ultimatefloatlength1=(Math.round(ultimatefloatlength3*1000000)/1000000).toFixed(6);
                    this.divFLOATLENTH.value=this.floatlength1;
                    this.divUFLOATLENTH.value=this.ultimatefloatlength1;
                }

            },

            onClose: function () {
                if(this._graphicsLayer){
                    this._graphicsLayer.clear();
                    //this.map.removeLayer(this._graphicsLayer);
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