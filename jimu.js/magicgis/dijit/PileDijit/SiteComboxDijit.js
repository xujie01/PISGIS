define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/on','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus",
        "dijit/popup", "dijit/Tree","dijit/tree/ObjectStoreModel",'dojo/store/Memory',
        "dojox/grid/DataGrid",
        "dojo/data/ItemFileWriteStore",
        "dojo/store/Observable",
        "dijit/layout/ContentPane",
        'jimu/dijit/LoadingIndicator',
        'jimu/magicgis/util/commonUtils',
        'dojo/text!./templates/SiteComboxDijit.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,on,_WidgetBase,_TemplatedMixin,focusUtil,popup,Tree,ObjectStoreModel,
               Memory,DataGrid,ItemFileWriteStore,Observable,ContentPane,LoadingIndicator,commonUtils,template,Evented) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin,Evented],{
            templateString:template,
            baseClass: 'jimu-widget-sitecomboxdijit',
            name: 'SiteComboxDijit',
            _isShow:null,//是否弹出
            _sitePanel:null,//弹出面板
            _dataJsonObj:null,//返回总的JSON对象
            _gridList:[],
            _siteEventid:null,
            _siteName:null,
            _siteStation:null,//偏移量变化前的里程值
            _ssEventid:null,

            dataServerUrl:null,//数据缓存服务器的URL
            unitEventid:null,//管网所属的单位单位EVNETID
            lineLoopEventid:null,//站场数据的管网EVENTID
            lineLoopName:null,//桩数据的管网名称
            siteType:"site",//站场类型（site）
            filterStr:"",
            siteResult:null,
            //发出结果unitEventid,lineloopEventid,lineloopName,siteEventid,siteName,siteOffset,ssEventid,siteStation

            /**请求数据
             * unitEventid:管网所属的单位单位EVNETID
             * siteType:站场类型
             *            markerStation桩过滤条件 - 选站场
             *            site选站场控件数据
             *            pigsite选站场控件数据 - 清管站
             * lineLoopEventid:桩数据的管网EVENTID获取桩回显数据
             * filterStr:过滤条件
             * isToJson：是否转JSON
             */
            /**
             返回结果：
             id:站id,n:站名称,s:里程,t:站类型,ssid:id,pt:位置,o
             */

            /*constructor: function(params){
                this.dataServerUrl = params.dataServerUrl;
                this.unitEventid = params.unitEventid;
                this.unitLevel = params.unitLevel?params.unitLevel:this.unitLevel;
                this.unitType = params.unitType?params.unitType:this.unitType;
                this.filterStr = params.filterStr?params.filterStr:this.filterStr;
                this.isOnlyLeafNode = params.isOnlyLeafNode?params.isOnlyLeafNode:this.isOnlyLeafNode;
                this.languageType = params.languageType?params.languageType:this.languageType;
            },*/

            //初始化控件值(未管网联动,在setSiteComboxValue里)
            initSiteComboxValue: function(params){
                this.dataServerUrl = params.dataServerUrl;
                this.unitEventid = params.unitEventid;
                this.siteType = params.siteType?params.siteType:this.siteType;
                this.filterStr = params.filterStr?params.filterStr:this.filterStr;
            },

            /**
             * 设置站控件的值
             * param unitEventid 单位eventid
             * param lineloopEventid 管网eventid
             * param lineloopName 管网name
             * param siteEventid 站的EVENTID
             * param sitName 站名称
             * param siterOffset 站偏移
             * param ssEventid 站列id
             * param siteStation 管网里程
             * param isEmited 是否发送事件
             */
            setSiteComboxValue: function (params,isEmited) {
                if(params.siteName){
                    this.SiteComboxDiv.setValue(params.siteName);
                }else if(params.siteEventid&&this._dataJsonObj[params.siteEventid]["n"]){
                    this.SiteComboxDiv.setValue(this._dataJsonObj[params.siteEventid]["id"]);
                    params.siteName=this._dataJsonObj[params.siteEventid]["n"];
                }else{
                    this.SiteComboxDiv.setValue("");
                }
                this.siteOffsetDiv.value=params.siteOffset;

                this.siteResult.unitEventid = params.unitEventid;
                this.siteResult.lineloopEventid = params.lineloopEventid;
                this.siteResult.lineloopName = params.lineloopName;
                this.siteResult.siteEventid = params.siteEventid;
                this.siteResult.siteName = params.siteName;
                this.siteResult.siteOffset = params.siteOffset;
                this.siteResult.ssEventid = params.ssEventid;
                this.siteResult.siteStation = params.siteStation;

                //更新管网联动
                this.unitEventid = params.unitEventid;
                this.lineLoopEventid = params.lineloopEventid;
                this.lineLoopName = params.lineloopName;
                if(this.lineLoopEventid){
                    this.createGrid();
                }else{
                    this._gridList=[];
                }
                if(isEmited)this.emit("siteComboxChange",this.siteResult);
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.pipedijit;
            },

            postCreate:function(){
                this.inherited(arguments);

                this.siteResult=new Object();
                this._sitePanel = new ContentPane({
                    content:this.SitePanelDiv,
                    style:"padding:0px"
                });
                popup.close(this._sitePanel);
                this._isShow=false;

                if("\v"=="v") {//判断是否IE
                    this.own(on(this.siteOffsetDiv,"propertychange",lang.hitch(this,this.siterOffsetChange)));
                }else{
                    this.own(on(this.siteOffsetDiv,"input",lang.hitch(this,this.siterOffsetChange)));
                }

                if("\v"=="v") {//判断是否IE
                    this.own(on(this.queryDiv,"propertychange",lang.hitch(this,this.queryChange)));
                }else{
                    this.own(on(this.queryDiv,"input",lang.hitch(this,this.queryChange)));
                }
            },

            startup: function () {
                this.inherited(arguments);
            },

            createGrid:function()
            {
                dojo.empty(this.gridDivNode);
                //"http://10.100.24.5:8082/RedisPIS"   "10.100.1.162:8080/PisControl"
                $.ajax({
                    url: this.dataServerUrl+"/getdataSite?actionFrom="+this.siteType+"&unitEventid="+this.unitEventid+
                    "&lineLoopEventid="+this.lineLoopEventid+"&isToJson=n&filterStr="+this.filterStr,
                    type : "POST",
                    async : true, //异步执行
                    data : {},
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: lang.hitch(this,function(data){
                        this._gridList=data;
                        //this.getData2Grid(this._gridList);
                    }),
                    error: lang.hitch(this,function(response) {
                        this._gridList=[];
                        //this.getData2Grid(this._gridList);
                        layer.msg('getdataSite action error');
                    })
                });
/*
                //从服务器获取数据来的
                dojo.xhrPost({
                    url:this.dataServerUrl+"/getdataSite?actionFrom="+this.siteType+"&unitEventid="+this.unitEventid+
                    "&lineLoopEventid="+this.lineLoopEventid+"&isToJson=n&filterStr="+this.filterStr,
                    handleAs:"text",
                    content:{},
                    load:lang.hitch(this,function(response){
                        this._gridList=data;
                    }),
                    error:lang.hitch(this,function(response){
                        this._gridList=[];
                        //this.getData2Grid(this._gridList);
                        layer.msg('getdataSite action error');
                    }),
                });*/
            },
            getData2Grid:function(list){
                var data={
                    identifier:"",
                    items:[]
                };
                if(list!=null)
                {
                    //this.lineloopnum.innerHTML="共["+list.length+"]条";
                    this._dataJsonObj=new Object();
                    for(var i= 0,l=list.length;i<l;i++)
                    {
                        data.items.push(lang.mixin({id:i+1},list[i%l]));
                        this._dataJsonObj[list[i]["id"]]=list[i];
                    }
                }
                var store=new ItemFileWriteStore({data:data});
                store.comparatorMap = {};
                store.comparatorMap["s"] = function (a, b) {
                    return a.localeCompare(b);
                };

                var layout=[[
                    {'name':this.nls.name,'field':'n','width':'100px'},
                    {'name':this.nls.station,'field':'s','width':'85px'},
                    {'name':this.nls.type,'field':'t','width':'50px'}/*,
                    {'name':'位置','field':'pt','width':'50px'}*/
                ]];

                if(this.grid==null){
                     this.grid=new DataGrid({
                     store:store,
                     structure:layout,
                     rowSelector:'20px',
                     autoWidth:true,
                     rowsPerPage:10
                     },
                     this.gridDivNode);
                    this.grid.startup();
                    this.grid.set("onRowClick",lang.hitch(this,this.rowClickGrid));
                    this.grid.set("onRowDblClick",lang.hitch(this,this.rowDblClickGrid));
                    this.connect(this, "resize", function () {
                        this.grid.resize();
                    });
                }else{
                    this.grid.setStore(store);
                }
            },

            _popupSitePanel:function()
            {
                if(!this._isShow)
                {
                    popup.open({
                        parent:this,
                        popup: this._sitePanel,
                        around: this.SiteComboxDiv.domNode
                    });
                    this._isShow=true;
                    $("body").bind("mousedown",{thisObj:this},this.onBodyDown);
                }
                else {
                    popup.close(this._sitePanel);
                    this._isShow=false;
                    $("body").unbind("mousedown", this.onBodyDown);
                }
                this.getData2Grid(this._gridList);//必须在弹出后再初始化对象

            },
            onBodyDown: function(event) {
                if (!$(event.target).hasClass("SiteComboxDijitClass")&&!$(event.target).parents().hasClass("SiteComboxDijitClass")){
                    event.data.thisObj.hideMenu();
                }
            },
            hideMenu: function() {
                popup.close(this._sitePanel);
                this._isShow=false;
                $("body").unbind("mousedown", this.onBodyDown);//这样传参才能解除绑定
            },

            okClick: function () {
                this.siteResult.ssEventid = this._ssEventid;
                this.siteResult.siteEventid = this._siteEventid;
                this.siteResult.siteName = this._siteName;
                this.siteResult.siteStation = this._siteStation;
                this.siteResult.siteOffset = 0;
                this.siteOffsetDiv.value="0";
                this.SiteComboxDiv.setValue(this.siteResult.siteName);
                this.emit("siteComboxChange",this.siteResult);
                this.hideMenu();
            },
            cancelClick: function () {
                this.hideMenu();
            },

            //监听返回后的方法
            rowDblClickGrid:function(e)
            {
                var item=this.grid.getItem(e.rowIndex);
                this._siteEventid=item["id"][0];
                this._siteName=item["n"][0];
                this._siteStation=Number(item["s"][0]);
                this._ssEventid= item["ssid"][0];
                this.siteResult.ssEventid = this._ssEventid;
                this.siteResult.siteEventid = this._siteEventid;
                this.siteResult.siteName = this._siteName;
                this.siteResult.siteStation = this._siteStation;
                this.siteResult.siteOffset =  0;
                this.siteOffsetDiv.value="0";
                this.SiteComboxDiv.setValue(this.siteResult.siteName);
                this.emit("siteComboxChange",this.siteResult);
                this.hideMenu();
            },
            rowClickGrid:function(e)
            {
                var item=this.grid.getItem(e.rowIndex);
                this._siteEventid=item["id"][0];
                this._siteName=item["n"][0];
                this._siteStation=Number(item["s"][0]);
                this._ssEventid= item["ssid"][0];
            },

            siterOffsetChange: function (evt) {
                if(this.siteOffsetDiv.value=="")this.siteOffsetDiv.value="0";
                this.siteOffsetDiv.value=commonUtils.formatNumb(this.siteOffsetDiv.value);
                var siteOffset = Number(this.siteOffsetDiv.value);
                this.siteResult.siteOffset =  siteOffset;
                this.siteResult.siteStation = this._siteStation+this.siteResult.siteOffset;
                this.emit("siteComboxChange",this.siteResult);
            },

            //过滤
            queryChange: function (evt) {
                //var queryText=evt.target.value;
                var queryText=this.queryDiv.value;
                var filterArr=[];
                for(var i = 0; i < this._gridList.length; i++){
                    if(this._gridList[i]["n"].indexOf(queryText)>=0){
                        filterArr.push(this._gridList[i]);
                    }
                }
                this.getData2Grid(filterArr);
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