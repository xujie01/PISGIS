define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/on','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        "dijit/popup", "dijit/Tree","dijit/tree/ObjectStoreModel",'dojo/store/Memory',
        "dojox/grid/DataGrid",
        "dojo/data/ItemFileWriteStore",
        "dojo/store/Observable",
        "dijit/layout/ContentPane",
        'jimu/dijit/LoadingIndicator',
        'jimu/magicgis/util/commonUtils',
        'dojo/text!./templates/MarkerComboxDijit.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,on,_WidgetBase,_TemplatedMixin,popup,Tree,ObjectStoreModel,
               Memory,DataGrid,ItemFileWriteStore,Observable,ContentPane,LoadingIndicator,commonUtils,template,Evented) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin,Evented],{
            templateString:template,
            baseClass: 'jimu-widget-markercomboxdijit',
            name: 'MarkerComboxDijit',
            _isShow:null,//是否弹出
            _markerPanel:null,//弹出面板
            _dataJsonObj:null,//返回总的JSON对象
            _gridList:[],
            _markerEventid:null,
            _markerName:null,
            _markerStation:null,//偏移量变化前的里程值
            //_ssEventid:null,

            dataServerUrl:null,//数据缓存服务器的URL
            unitEventid:null,//管网所属的单位单位EVNETID
            lineLoopEventid:null,//桩数据的管网EVENTID
            lineLoopName:null,//桩数据的管网名称
            markerType:"marker",//桩类型
            filterStr:"",
            languageType:"zh",
            markerResult:null,
            //发出结果unitEventid,lineloopEventid,lineloopName,markerEventid,markerName,markerOffset,ssEventid站列id,makerStation

            /**请求数据
             * unitEventid:管网所属的单位单位EVNETID
             * markerType:桩类型
             *            markerType桩类型
             *            marker选择桩
             *            checkMS验证桩加偏移量是否超出站列里程范围
             *            getMarkerRm
             * lineLoopEventid:桩数据的管网EVENTID获取桩回显数据
             * filterStr:过滤条件
             * languageType:语言类型
             * isToJson：是否转JSON
             */
            /**
             返回结果：
             id:桩id,n:桩号,s:里程,t:类型,sid:id
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

            //初始化控件值(未管网联动,在setMarkerComboxValue里)
            initMarkerComboxValue: function(params){
                this.dataServerUrl = params.dataServerUrl;
                this.unitEventid = params.unitEventid;
                this.markerType = params.markerType?params.markerType:this.markerType;
                this.filterStr = params.filterStr?params.filterStr:this.filterStr;
                this.languageType = params.languageType?params.languageType:this.languageType;
            },

            /**
             * 设置桩控件的值
             * param unitEventid 单位eventid
             * param lineloopEventid 管网eventid
             * param lineloopName 管网name
             * param markerEventid 桩号的EVENTID
             * param markerName 桩号名称
             * param markerOffset 桩偏移
             * param ssEventid 站列id
             * param makerStation 管网里程
             * param isEmited 是否发送事件
             */
            setMarkerComboxValue: function (params,isEmited) {
                if(params.markerName){
                    this.MarkerComboxDiv.setValue(params.markerName);
                }else if(params.markerEventid&&this._dataJsonObj!=null&&this._dataJsonObj[params.markerEventid]["n"]){
                    this.MarkerComboxDiv.setValue(this._dataJsonObj[params.markerEventid]["id"]);
                    params.markerName=this._dataJsonObj[params.markerEventid]["n"];
                }else{
                    this.MarkerComboxDiv.setValue("");
                }
                this.markerOffsetDiv.value=params.markerOffset;

                this.markerResult.unitEventid = params.unitEventid;
                this.markerResult.lineloopEventid = params.lineloopEventid;
                this.markerResult.lineloopName = params.lineloopName;
                this.markerResult.markerEventid = params.markerEventid;
                this.markerResult.markerName = params.markerName;
                this.markerResult.markerOffset = params.markerOffset;
                this.markerResult.ssEventid = params.ssEventid;
                this.markerResult.makerStation = params.makerStation;

                //更新管网联动
                this.unitEventid = params.unitEventid;
                this.lineLoopEventid = params.lineloopEventid;
                this.lineLoopName = params.lineloopName;
                if(this.lineLoopEventid){
                    this.createGrid();
                }else{
                    this._gridList=[];
                }
                if(isEmited)this.emit("markerComboxChange",this.markerResult);
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.pipedijit;
            },

            postCreate:function(){
                this.inherited(arguments);

                this.markerResult=new Object();
                this._markerPanel = new ContentPane({
                    content:this.MarkerPanelDiv,
                    style:"padding:0px"
                });
                popup.close(this._markerPanel);
                this._isShow=false;

                if("\v"=="v") {//判断是否IE
                    this.own(on(this.markerOffsetDiv,"propertychange",lang.hitch(this,this.markerOffsetChange)));
                }else{
                    this.own(on(this.markerOffsetDiv,"input",lang.hitch(this,this.markerOffsetChange)));
                }
            },

            startup: function () {
                this.inherited(arguments);
            },

            createGrid:function()
            {
                dojo.empty(this.gridDivNode);
                $.ajax({
                    url: this.dataServerUrl+"/getdataMarker?actionFrom="+this.markerType+"&unitEventid="+this.unitEventid+
                    "&lineLoopEventid="+this.lineLoopEventid+"&isToJson=n&filterStr="+this.filterStr+"&languageType="+this.languageType,
                    type:'POST',
                    dataType:'json',
                    success: lang.hitch(this,function(data){
                        this._gridList=data;
                        //this.getData2Grid(this._gridList);
                    }),
                    error: lang.hitch(this,function() {
                        this._gridList=[];
                        //this.getData2Grid(this._gridList);
                        layer.msg('getdataMarker action error');
                    })
                });
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
                    {'name':this.nls.markername,'field':'n','width':'100px'},
                    {'name':this.nls.station,'field':'s','width':'85px'},
                    {'name':this.nls.type,'field':'t','width':'50px'}
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

            _popupMarkerPanel:function()
            {
                if(!this._isShow)
                {
                    popup.open({
                        parent:this,
                        popup: this._markerPanel,
                        around: this.MarkerComboxDiv.domNode
                    });
                    this._isShow=true;
                    $("body").bind("mousedown",{thisObj:this},this.onBodyDown);
                }
                else {
                    popup.close(this._markerPanel);
                    this._isShow=false;
                    $("body").unbind("mousedown", this.onBodyDown);
                }
                this.getData2Grid(this._gridList);//必须在弹出后再初始化对象

            },
            onBodyDown: function(event) {
                if (!$(event.target).hasClass("MarkerComboxDijitClass")&&!$(event.target).parents().hasClass("MarkerComboxDijitClass")){
                    event.data.thisObj.hideMenu();
                }
            },
            hideMenu: function() {
                popup.close(this._markerPanel);
                this._isShow=false;
                $("body").unbind("mousedown", this.onBodyDown);//这样传参才能解除绑定
            },

            okClick: function () {
                this.markerResult.ssEventid = this._ssEventid;
                this.markerResult.markerEventid = this._markerEventid;
                this.markerResult.markerName = this._markerName;
                this.markerResult.makerStation = this._markerStation;
                this.markerResult.markerOffset = 0;
                this.markerOffsetDiv.value="0";
                this.MarkerComboxDiv.setValue(this.markerResult.markerName);
                this.emit("markerComboxChange",this.markerResult);
                this.hideMenu();
            },
            cancelClick: function () {
                this.hideMenu();
            },

            //监听返回后的方法
            rowDblClickGrid:function(e)
            {
                var item=this.grid.getItem(e.rowIndex);
                this._markerEventid=item["id"][0];
                this._markerName=item["n"][0];
                this._markerStation=Number(item["s"][0]);
                //this._ssEventid= item["sid"][0];
                this.markerResult.ssEventid = this._ssEventid;
                this.markerResult.markerEventid = this._markerEventid;
                this.markerResult.markerName = this._markerName;
                this.markerResult.makerStation = this._markerStation;
                this.markerResult.markerOffset =  0;
                this.markerOffsetDiv.value="0";
                this.MarkerComboxDiv.setValue(this.markerResult.markerName);
                this.emit("markerComboxChange",this.markerResult);
                this.hideMenu();
            },
            rowClickGrid:function(e)
            {
                var item=this.grid.getItem(e.rowIndex);
                this._markerEventid=item["id"][0];
                this._markerName=item["n"][0];
                this._markerStation=Number(item["s"][0]);
                //this._ssEventid= item["sid"][0];
            },

            markerOffsetChange: function (evt) {
                if(this.markerOffsetDiv.value=="")this.markerOffsetDiv.value="0";
                this.markerOffsetDiv.value=commonUtils.formatNumb(this.markerOffsetDiv.value);
                var markerOffset = Number(this.markerOffsetDiv.value);
                this.markerResult.markerOffset =  markerOffset;
                this.markerResult.makerStation = this._markerStation+this.markerResult.markerOffset;
                this.emit("markerComboxChange",this.markerResult);
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