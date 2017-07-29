define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/html',
        'esri/layers/GraphicsLayer',
        'esri/graphic',
        'esri/geometry/Point',
        'dojo/on',"esri/symbols/PictureMarkerSymbol",'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/form/RadioButton","jimu/magicgis/util/services/EventReportService","jimu/magicgis/dijit/PageToolbar",
        "jimu/magicgis/dijit/MatterItem",'dojo/dom-style',"esri/graphicsUtils",'jimu/magicgis/util/commonUtils',"jimu/magicgis/dijit/CinfoWindow",
        'dojox/grid/DataGrid','dojo/data/ItemFileWriteStore',"dijit/layout/ContentPane",'jimu/dijit/LoadingIndicator',
        'jimu/magicgis/util/CommonParams',
        'esri/InfoTemplate',
        "jimu/magicgis/configProject",
        'jimu/BaseWidget',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,html,
               GraphicsLayer,Graphic,Point,on,PictureMarkerSymbol,_WidgetBase,_TemplatedMixin,RadioButton,EventReportService,
               PageToolbar,MatterItem,domStyle,graphicsUtils,commonUtils,CinfoWindow,DataGrid,ItemFileWriteStore,ContentPane,LoadingIndicator,
               CommonParams,InfoTemplate,configProject,BaseWidget) {
        var clazz=declare([BaseWidget,_TemplatedMixin, _WidgetsInTemplateMixin],{
            //templateString:template,
            baseClass: 'jimu-widget-matter',
            name: 'Matter',
            infoCountFlag:null,//查看类别标志
            kpLoadFlag:null,//初次加载标志
            ws:null,
            LP_UNITEVENTID:null,
            LP_UNITLEVEL:null,
            LP_UNIT_LOGIN:null,
            LP_CURRENT_YEAR:null,
            _matterGraphicsLayer: null,
            eventReport:null,

            postCreate:function(){
                this.inherited(arguments);

                this.eventReport=configProject.eventReport;
                //this.LP_UNITEVENTID="a1112be8-4e3c-4c79-be77-d345f38f0d21";
                this.LP_UNITEVENTID=CommonParams.getInstance().unitEventid;
                this.LP_UNITLEVEL= "0";
                this.LP_UNIT_LOGIN = CommonParams.getInstance().unitEventid;
                this.LP_CURRENT_YEAR = "";
                this.pageTool=new PageToolbar({
                    map:this.map,
                    pageCount:10,
                    curPage:1,
                    totalPage:0,
                    totalCount:0,
                    start:0
                });
                this.pageTool.startup();
                this.pageTool.placeAt(this.matterPageToolDiv);
                this.own(on(this.pageTool, 'page-refreshed', lang.hitch(this, this._onRefreshed)));
                this.own(on(this.pageTool, 'page-prevdata', lang.hitch(this, this._onLoadData)));
            },

            startup: function () {
                this.inherited(arguments);
                domStyle.set(this.matterShow,"visibility","hidden");
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(this.domNode);

                if(!this._matterGraphicsLayer){
                    this._matterGraphicsLayer = new GraphicsLayer();
                    this.map.addLayer(this._matterGraphicsLayer);
                    this._matterGraphicsLayer.on("click", lang.hitch(this,function(event){
                        if(event.graphic.attributes){
                            this._personPoint=event.graphic.geometry;
                            var alianValues={
                                TYPE:"类型",
                                NAME:"人员",
                                PHONE:"联系电话",
                                LON:"经度",
                                LAT:"纬度",
                                OCCURRENCETIME:"发生时间",
                                ADDRESS:"发生地点",
                                DESCRIPTION:"描述"
                                //ISIMAGE
                            };
                            var cinfoData={
                                dataValues:event.graphic.attributes,
                                alianValues:alianValues,
                                viewsPanel:"1,2,3",
                                location:this._personPoint,
                                imgUrl:event.graphic.attributes.ISIMAGE
                            };
                            this.map.infoWindow.setTitle(this.nls.infomation);
                            var cinfoWindow=new CinfoWindow({
                                map:this.map,
                                data:cinfoData
                            });
                            /*this.map.infoWindow.setContent(cinfoWindow.domNode);
                            this.map.infoWindow.show(this._personPoint);*/
                            var windowContent= function() {
                                var divContent = new ContentPane({
                                    content:cinfoWindow.domNode,
                                    style:"padding:0px"
                                });
                                return cinfoWindow.domNode;
                            };
                            var layerInfoTemplate =new InfoTemplate(this.nls.infomation,windowContent);//自定义地图info内容
                            var infoGraphics=[new Graphic(this._personPoint, null, null, layerInfoTemplate)];
                            this.map.infoWindow.setFeatures(infoGraphics);
                            this.map.infoWindow.show(this._personPoint);
                        }
                    }));
                }

                this.kpLoadFlag = "f";
                this.infoCountFlag='';
                this.loadMatterList();
            },

            _onRefreshed:function(data){
                this.kpLoadFlag = "f";
                this.loadMatterList();
            },

            _onLoadData:function(data){
                this.kpLoadFlag = data.flag;
                this.loadMatterList();
            },

            _onTypeClick: function (event) {
                this.infoCountFlag=event.target.value;
                this.kpLoadFlag = "f";
                this.loadMatterList();
            },

            _onTabHeaderClicked: function () {
                var target = event.target || event.srcElement;
                if(target === this.queryItem){
                    this._switchToQueryTab();
                }else if(target === this.infoItem){
                    this._switchToInfoTab();
                }
            },
            _switchToQueryTab: function(){
                html.removeClass(this.infoItem, 'selected');
                html.removeClass(this.infoTabView, 'selected');
                html.addClass(this.queryItem, 'selected');
                html.addClass(this.queryTabView, 'selected');
            },
            _switchToInfoTab: function(){
                html.removeClass(this.queryItem, 'selected');
                html.removeClass(this.queryTabView, 'selected');
                html.addClass(this.infoItem, 'selected');
                html.addClass(this.infoTabView, 'selected');
                if(this.grid){
                    this.grid.resize();
                }else{
                    this.getAllDataByWebService("1");
                }
            },

            /*setMaxHeight:function(maxHeight){
                html.setStyle(this.matterSettingContent, 'max-height', (maxHeight+40)+'px');
                html.setStyle(this.matterSettingContent, 'height', (maxHeight+40)+'px');
                html.setStyle(this.h_groupGrid, 'height', (maxHeight+70)+'px');
                if(this.grid)this.grid.resize();
            },*/

            loadMatterList: function () {
                this.loading.show();
                //创建WebService对象
                /*if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport();
                    this.ws.url = this.eventReport;
                }
                //单位eventid(0:未查看；1：已查看；""全部)    问题类型 id     年份selectYear  _urlParamObj.ID
                this.ws.queryEventReportList_mini(lang.hitch(this,this.processResponse),lang.hitch(this,this.reportError),this.LP_UNITEVENTID,"",this.infoCountFlag,this.pageTool.start,this.pageTool.pageCount,"OCCURRENCETIME","desc");*/
                this.processResponse(null);
            },
            processResponse:function(response){
                domStyle.set(this.matterShow,"visibility","visible");
                this.loading.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"topics":[{"ISIMAGE":"","OCCURRENCETIME":"2017-07-29 09:20","DESCRIPTION":"CCTVfxvoxucuyc,fyiPhone4uucy","PHONE":"15303246890","ADDRESS":"","PROCESSED":0,"EVENTID":"22291500-73fc-11e7-a5e0-5cf3fc946ca6","LON":118.09896621,"TYPE":"交叉施工点","LAT":39.75350803,"NAME":"黄跃亮"},{"ISIMAGE":"/pano.jpg","OCCURRENCETIME":"2017-07-28 10:12","DESCRIPTION":"","PHONE":"13612128988","ADDRESS":"","PROCESSED":0,"EVENTID":"01bb77d0-733a-11e7-ba27-5cf3fc946f2c","LON":116.97941108,"TYPE":"交叉施工点","LAT":38.77837778,"NAME":"李振川"},{"ISIMAGE":"/pano.jpg","OCCURRENCETIME":"2017-07-27 09:09","DESCRIPTION":"","PHONE":"13019461030","ADDRESS":"","PROCESSED":0,"EVENTID":"08130940-7268-11e7-9bee-5cf3fc946f2c","LON":122.10393369197845,"TYPE":"交叉施工点","LAT":39.58495795726776,"NAME":"田日东"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 11:13","DESCRIPTION":"。。精辟灰常","PHONE":"13780387985","ADDRESS":"","PROCESSED":0,"EVENTID":"edceb940-701d-11e7-9bee-5cf3fc946f2c","LON":119.45851148,"TYPE":"交叉施工点","LAT":39.99905737,"NAME":"崔海生"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 11:13","DESCRIPTION":"。。精辟灰常","PHONE":"13780387985","ADDRESS":"","PROCESSED":0,"EVENTID":"ede74a50-701d-11e7-ba27-5cf3fc946f2c","LON":119.45851148,"TYPE":"交叉施工点","LAT":39.99905737,"NAME":"崔海生"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 11:13","DESCRIPTION":"。。精辟灰常","PHONE":"13780387985","ADDRESS":"","PROCESSED":0,"EVENTID":"0a305940-701e-11e7-a5e0-5cf3fc946ca6","LON":119.45851148,"TYPE":"交叉施工点","LAT":39.99905737,"NAME":"崔海生"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 11:13","DESCRIPTION":"。。","PHONE":"13780387985","ADDRESS":"","PROCESSED":0,"EVENTID":"e583c4b0-701d-11e7-ba27-5cf3fc946f2c","LON":119.45851148,"TYPE":"交叉施工点","LAT":39.99905737,"NAME":"崔海生"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 08:45","DESCRIPTION":"xmxt","PHONE":"15833986902","ADDRESS":"","PROCESSED":0,"EVENTID":"560a9480-7009-11e7-8422-5cf3fc946ca6","LON":115.27067234,"TYPE":"交叉施工点","LAT":38.26293886,"NAME":"王立辉"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 08:45","DESCRIPTION":"xmxt","PHONE":"15833986902","ADDRESS":"","PROCESSED":0,"EVENTID":"37e76e60-7009-11e7-9bee-5cf3fc946f2c","LON":115.27067234,"TYPE":"交叉施工点","LAT":38.26293886,"NAME":"王立辉"},{"ISIMAGE":"","OCCURRENCETIME":"2017-07-24 08:45","DESCRIPTION":"xmx","PHONE":"15833986902","ADDRESS":"","PROCESSED":0,"EVENTID":"551a4110-7009-11e7-a5e0-5cf3fc946ca6","LON":115.27067234,"TYPE":"交叉施工点","LAT":38.26293886,"NAME":"王立辉"}],"totalCount":405}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("获取数据为空");
                } else {
                    var jsonObj=dojo.fromJson(dataJson);
                    if (jsonObj != null) {
                        //分页工具栏初始化
                        this.pageTool.totalCount = jsonObj.totalCount;
                        if (this.kpLoadFlag == "f") {// 判断是否首次加载
                            this.pageTool.init();
                            //记录问题总数
                            //this.ws.queryEventReportCount(lang.hitch(this,this.getCountResponse),lang.hitch(this,this.reportError),this.LP_UNITEVENTID,"","");
                            this.getCountResponse(null);
                            /*this.matterAll.innerHTML = ("全部：["+jsonObj.totalCount+"]");
                             this.matterNo.innerHTML =("未处理：["+jsonObj.info_un+"]");
                             this.matterYes.innerHTML =("已处理：["+(Number(jsonObj.info_all)-Number(jsonObj.info_un))+"]");*/
                        }
                        this._switchPanelAndMap(jsonObj)
                    }
                }
            },
            reportError:function(response){
                this.loading.hide();
                console.log("webservice失败"+response);
            },
            getCountResponse:function(response){
                //var dataJson = response.getReturn();
                var dataJson = "398";
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("获取数据为空");
                } else {
                    var wcl_count = Number(dataJson);
                    //按已处理和未处理类别过滤显示时，不需要更新顶部的count信息
                    if(this.infoCountFlag == null || this.infoCountFlag == ""){
                        this.matterAll.innerHTML = (this.nls.all+"：["+this.pageTool.totalCount+"]");
                        this.matterNo.innerHTML =(this.nls.no+"：["+wcl_count+"]");
                        this.matterYes.innerHTML =(this.nls.yes+"：["+(Number(this.pageTool.totalCount)-Number(wcl_count))+"]");
                    }
                }
            },

            _switchPanelAndMap:function(currData){
                dojo.empty(this.matterSettingContent);
                for(var j=0;j<currData.topics.length;j++)
                {
                    var activeContainer=new MatterItem({
                        map:this.map,
                        data:currData.topics[j],
                        matterType:"matter",
                    });
                    activeContainer.startup();
                    activeContainer.placeAt(this.matterSettingContent);
                }
                //显示当前位置集合
                this.mapShowPoints(currData);
            },

            //显示当前位置集合
            mapShowPoints:function(currData){
                if (currData != null) {
                    this._matterGraphicsLayer.clear();
                    var p_array = currData.topics;
                    var garr = new Array();
                    for (var i = 0; i < p_array.length; i++) {
                        var personData = p_array[i];
                        if (personData.LON != null && personData.LAT != null) {
                            var lc_p_X = commonUtils._lonToMercator(Number(personData.LON));
                            var lc_p_Y = commonUtils._latToMercator(Number(personData.LAT));

                            var mp = new Point(lc_p_X,lc_p_Y,this.map.spatialReference);
                            var symbol = new PictureMarkerSymbol("jimu.js/magicgis/images/monitor/qicon.png", 32, 32);
                            var g = new Graphic(mp, symbol, personData);
                            garr[i] = g;
                            this._matterGraphicsLayer.add(g);
                        }
                    }
                    if(garr.length >2) {
                        var myFeatureExtent = graphicsUtils.graphicsExtent(garr).expand(1.2);
                        this.map.setExtent(myFeatureExtent);
                    }
                }
            },

            getAllDataByWebService:function(flag){
                this.loading.show();
                //创建WebService对象
                if(this.ws==null)
                {
                    this.ws = new def_service_pif_gispatrol_inf_pis_cnpc_com__IEventReport();
                    this.ws.url = this.eventReport;
                }
                /*
                 参数：
                 当前要汇总的单位eventid
                 当前系统登录用户的单位eventid
                 当前汇总表格切换的层级 0\1\2\3 (传表格行中单位节点中的UNITLEVEL)
                 年份
                 是否需要更新年份串(1需要，后台会返回问题中所有的年份串，有小到达的排列字符串；0为不需要)
                 */
                //this.ws.queryStaticsForUnit(lang.hitch(this,this.allDataResponse),lang.hitch(this,this.reportError),this.LP_UNITEVENTID,this.LP_UNIT_LOGIN,this.LP_UNITLEVEL,this.LP_CURRENT_YEAR,flag);
                this,this.allDataResponse(null);
            },
            allDataResponse:function(response){
                this.loading.hide();
                //var dataJson = response.getReturn();
                var dataJson = '{"PROCESSNUM":336,"maxYear":"2017","yearStr":"2014,2015,2016,2017","topics":[{"UNITNAME":"勘探与生产分公司","DATACOUNT":5,"UNITLEVEL":1,"UNITEVENTID":"da130890-3f0e-11e4-a861-e41f13e34b24","PROCESSCOUNT":5,"LINECOUNT":1,"ISLEAF":"null"},{"UNITNAME":"天然气与管道分公司","DATACOUNT":332,"UNITLEVEL":1,"UNITEVENTID":"c6f8ee80-41e2-11dd-aec3-0019bbcb2a46","PROCESSCOUNT":331,"LINECOUNT":2,"ISLEAF":"null"}],"totalCount":337}';
                console.log("webService成功");
                if (dataJson==null||dataJson=="") {
                    layer.msg("获取数据为空");
                } else {
                    var jsonObj=dojo.fromJson(dataJson);
                    if (jsonObj != null) {
                        var lc_yearStr = jsonObj.yearStr; //"2013,2014,2015,2016";//
                        var strs= new Array(); //定义一数组
                        strs=lc_yearStr.split(","); //字符分割
                        if(this.yearSelect.options.length==0){
                            for (var i=0;i<strs.length ;i++ )
                            {
                                var option = {
                                    label:strs[i],
                                    value:strs[i]
                                };
                                this.yearSelect.addOption(option);
                            }
                            this.yearSelect.setValue(strs[strs.length-1]);
                        }
                        this.getData2Grid(jsonObj.topics)
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
                    {'name':this.nls.departmentname,'width':'150px',
                        formatter: lang.hitch(this, this.fetchItem, "href")
                    },
                    {'name':this.nls.pipelines,'field':'LINECOUNT','width':'60px'},
                    {'name':this.nls.qiestions,'field':'DATACOUNT','width':'60px'}
                ]];

                if(typeof(this.grid)=="undefined"){
                    this.grid=new DataGrid({
                        store:store,
                        structure:layout,
                        rowSelector:'20px',
                        rowsPerPage:10
                    },this.gridDivNode);
                    this.grid.startup();
                    this.connect(this, "resize", function () {
                        this.grid.resize();
                    });
                    //this.grid.set("onRowDblClick",lang.hitch(this,this.cellClickGrid));
                }else{
                    this.grid.setStore(store);
                }
            },

            fetchItem:function(flag, cellValue, rowIndex, object){//flag，后面的三个参数是formatter传入的
                //var name = this.grid.getItem(rowIndex).name;// 取本行的name字段值
                //return "<img data-dojo-attach-event='onclick:_onOkClick' style='cursor: pointer' title='"+imgTitle+"' src='"+imgUrl+"'>";
                var imgCont=new ContentPane({
                    content:'<a href="#">'+this.grid.getItem(rowIndex).UNITNAME[0]+'</a>',
                    style:"width:150px;padding:0px",
                    onClick: lang.hitch(this,function() {
                        this._itemClick(rowIndex);
                    })
                });
                return imgCont;
            },

            _itemClick: function (rowIndex) {
                this.LP_UNITEVENTID = this.grid.getItem(rowIndex).UNITEVENTID[0]==null?"":this.grid.getItem(rowIndex).UNITEVENTID[0];
                this.LP_UNITLEVEL = this.grid.getItem(rowIndex).UNITLEVEL[0]==null?"0":this.grid.getItem(rowIndex).UNITLEVEL[0];
                var lc_isLeaf = this.grid.getItem(rowIndex).ISLEAF[0]==null?"":this.grid.getItem(rowIndex).ISLEAF[0];

                if((this.LP_UNITLEVEL == "3" )||lc_isLeaf == "1"){
                    return;
                }
                this.getAllDataByWebService("0");
            },

            _onYearChange: function (event) {
                this.LP_CURRENT_YEAR=event;
                this.getAllDataByWebService("0");
            },

            _onBackClick: function () {
                this.LP_UNITEVENTID=CommonParams.getInstance().unitEventid;
                this.LP_UNITLEVEL= "0";
                this.LP_UNIT_LOGIN = CommonParams.getInstance().unitEventid;
                this.LP_CURRENT_YEAR = "";
                this.getAllDataByWebService("1");
            },

            onOpen: function () {
            },

            onClose:function(){
                if(this._matterGraphicsLayer){
                    this._matterGraphicsLayer.clear();
                    this.map.removeLayer(this._matterGraphicsLayer);
                    this._matterGraphicsLayer = null;
                }
            },

            /*destroy:function(){
             this.inherited(arguments);
             },*/
        });
        return clazz;
    });