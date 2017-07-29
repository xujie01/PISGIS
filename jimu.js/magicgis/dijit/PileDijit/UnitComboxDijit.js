define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojox/xml/parser','dijit/_WidgetBase',
        'dijit/_TemplatedMixin','dojo/on',
        "dijit/popup", "dijit/Tree","dijit/tree/ObjectStoreModel",'dojo/store/Memory',
        "dojo/store/Observable",
        "dijit/layout/ContentPane",
        'jimu/dijit/LoadingIndicator',
        'dojo/text!./templates/UnitComboxDijit.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,parser,_WidgetBase,_TemplatedMixin,on,popup,Tree,ObjectStoreModel,
               Memory,Observable,ContentPane,LoadingIndicator,template,Evented) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin,Evented],{
            templateString:template,
            baseClass: 'jimu-widget-unitcomboxdijit',
            name: 'UnitComboxDijit',
            _isShow:null,//是否弹出
            _unitPanel:null,//弹出面板
            _dataJsonArr:[],//返回总的JSON数组
            _dataJsonObj:null,//返回总的JSON对象
            _myStore:null,
            _myModel:null,

            dataServerUrl:null,//数据缓存服务器的URL
            unitEventid:null,//当前控件根节点单位的EVENTID
            unitLevel:"4",//显示到第几级单位,3（显示到地区公司级别）4（显示到分公司级别）5（显示到站队级别）6（显示到小站级别）
            unitType:"unitAll",//单位数据类型,unitAll(选单位),unitCp(选单位（分公司级别）),unitRp(选单位+维抢修)dep(选单位+部门)
            filterStr:"t=0",//单位树中展示的单位类型,t=0单位,t=1机关部门,t=2附属单位
            isOnlyLeafNode:"false",//是否只有叶子节点可选
            languageType:"zh",
            unitResult:null,//发出结果unitEvntid、unitName、leafNode

            /**请求数据
             * unitEventid:单位的EVENTID
             * actionFrom:unitAll默认为全部单位,支持属性过滤，如显示到站队级别(选单位)
             *            unitCp:只显示到分公司级别(选单位（分公司级别）)
             *            unitRp:只显示维抢修单位(选单位+维抢修)
             *            dep:(选单位+部门)
             * filterStr:单位树中展示的单位类型
            *            t=0:单位
             *           t=1:机关部门
             *           t=2:附属单位
             * languageType:语言类型
             * isToJson：是否转JSON
             */
            /**
             返回结果：
             @l:单位名称,@v:单位eventid,@p:父单位ID,@t:单位类型,@lv:单位级别,@step:未知
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

            //初始化控件值
            initUnitComboxValue: function(params){
                this.dataServerUrl = params.dataServerUrl;
                this.unitEventid = params.unitEventid;
                this.unitLevel = params.unitLevel?params.unitLevel:this.unitLevel;
                this.unitType = params.unitType?params.unitType:this.unitType;
                this.filterStr = params.filterStr?params.filterStr:this.filterStr;
                this.isOnlyLeafNode = params.isOnlyLeafNode?params.isOnlyLeafNode:this.isOnlyLeafNode;
                this.languageType = params.languageType?params.languageType:this.languageType;

                this.createTree();
            },

            /**
             * 设置单位控件的值
             * @param unitEventid 单位eventid
             * @param unitName 单位name
             * @param isEmited 是否发送事件
             */
            setUnitComboxValue: function (unitEventid,unitName,isEmited) {
                this.unitResult.unitEventid = unitEventid;
                this.unitResult.unitName = unitName;
                this.UnitComboxDiv.setValue(this.unitResult.unitName);

                //更新树
                /*this.unitEventid = unitEventid;
                this.createTree();*/
                if(isEmited)this.emit("unitComboxChange",this.unitResult);
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.pipedijit;
            },

            postCreate:function(){
                this.inherited(arguments);

                this.unitResult=new Object();
                this._unitPanel = new ContentPane({
                    content:this.UnitPanelDiv,
                    style:"padding:0px"
                });
                popup.close(this._unitPanel);
                this._isShow=false;

                if("\v"=="v") {//判断是否IE
                    this.own(on(this.queryDiv,"propertychange",lang.hitch(this,this.queryChange)));
                }else{
                    this.own(on(this.queryDiv,"input",lang.hitch(this,this.queryChange)));
                }
            },

            startup: function () {
                this.inherited(arguments);
            },

            createTree:function()
            {
                dojo.empty(this.treeDiv);
                $.ajax({
                    url: this.dataServerUrl+"/getdataUnit?actionFrom="+this.unitType+"&unitEventid="+this.unitEventid+"&isToJson=n&filterStr="+this.filterStr+"&languageType="+this.languageType,
                    type:'POST',
                    dataType:'json',
                    success: lang.hitch(this,function(data){
                        this.initData(data);
                    }),
                    error: function() {
                        layer.msg('getdataUnit action error');
                    }
                });
            },
            //嵌套JSON转换成平行JSON数组
            xmlObjectToJSONArr:function (xmlObject,parent,eventids){
                if(xmlObject["@lv"]<=this.unitLevel){//过滤单位级别
                    var dataJson=new Object();
                    if(parent)dataJson["parent"]=parent;//父节点标志
                    if(typeof(xmlObject.node)=="object"){//是否叶子节点
                        dataJson["leafNode"]=true;
                    }else{
                        dataJson["leafNode"]=false;
                    }
                    for(var iKey in xmlObject){//用javascript的for/in循环遍历对象的属性
                        if(iKey!="node"){
                            dataJson[iKey]=xmlObject[iKey];
                        }
                    }
                    dataJson.eventids=eventids+","+xmlObject["@v"];//过滤用
                    this._dataJsonArr.push(dataJson);
                    this._dataJsonObj[xmlObject["@v"]]=dataJson;
                    if(xmlObject.node instanceof Array||Object.prototype.toString.call(xmlObject.node)==='[object Array]'){//数组
                        for(var i=0;i<xmlObject.node.length;i++){
                            this.xmlObjectToJSONArr(xmlObject.node[i],xmlObject["@v"],dataJson.eventids);
                        }
                    }else if(typeof(xmlObject.node)=="object") {//object
                        this.xmlObjectToJSONArr(xmlObject.node,xmlObject["@v"],dataJson.eventids);
                    }
                }
            },
            initData:function(response)
            {
                var dataJson=response;
                //this.UnitComboxDiv.setValue(dataJson["@l"]);//根节点Name
                this._dataJsonArr=new Array();
                this._dataJsonObj=new Object();
                this.xmlObjectToJSONArr(dataJson,"","");

                this._myStore = new Memory({
                    data: this._dataJsonArr,
                    index:"@v",
                    idProperty:"@v",
                    getChildren: function(object){
                        return this.query({parent: object["@v"]});
                    }
                });
                this._myStore=new Observable(this._myStore);
                this._myModel = new ObjectStoreModel({
                    store: this._myStore,
                    labelAttr:"@l",
                    query: {'@v': dataJson["@v"]},//根节点EventID
                    mayHaveChildren: function(item){
                        return item["leafNode"];
                    }
                });
                parser.parse();
                this.tree = new Tree({
                    model: this._myModel,
                    autoExpand:true,
                    style:{width:'100%', height:'100%'}
                });
                this.tree.expandAll();
                this.tree.placeAt(this.treeDiv);
                this.tree.set("onClick",lang.hitch(this,this.RowClick));
                this.tree.set("onDblClick",lang.hitch(this,this.RowDoubleClick));
                this.tree.startup();
            },

            //过滤
            queryChange: function (evt) {
                //var queryText=evt.target.value;
                var queryText=this.queryDiv.value;
                var filterEventIDsStr="";
                var allEventIDsArr;//所有过滤后的eventids，包含重复
                for(var i=0;i<this._dataJsonArr.length;i++){
                    if(this._dataJsonArr[i]["@l"].indexOf(queryText)>=0){
                        //filterArr.push(this._dataJsonArr[i]);
                        filterEventIDsStr+=(","+this._dataJsonArr[i]["eventids"]);
                    }
                }
                allEventIDsArr=filterEventIDsStr.split(",");
                //数组去重
                var filterEventIDsArr=[];//去重后eventids
                var filterArr=[];
                var json = {};
                for(var i = 0; i < allEventIDsArr.length; i++){
                    if(!json[allEventIDsArr[i]]&&allEventIDsArr[i]){
                        json[allEventIDsArr[i]] = 1;
                        filterEventIDsArr.push(allEventIDsArr[i]);
                        filterArr.push(this._dataJsonObj[allEventIDsArr[i]]);
                    }
                }
                if(filterArr.length>0)this.filterData(filterArr);
            },
            filterData:function(filterArr)
            {
                dojo.empty(this.treeDiv);
                this._myStore = new Memory({
                    data: filterArr,
                    index:"@v",
                    idProperty:"@v",
                    getChildren: function(object){
                        return this.query({parent: object["@v"]});
                    }
                });
                this._myStore=new Observable(this._myStore);
                this._myModel = new ObjectStoreModel({
                    store: this._myStore,
                    labelAttr:"@l",
                    query: {'@v': filterArr[0]["@v"]},//根节点EventID
                    mayHaveChildren: function(item){
                        return item["leafNode"];
                    }
                });
                parser.parse();
                this.tree = new Tree({
                    model: this._myModel,
                    autoExpand:true,
                    style:{width:'100%', height:'100%'}
                });
                this.tree.expandAll();
                this.tree.placeAt(this.treeDiv);
                this.tree.set("onClick",lang.hitch(this,this.RowClick));
                this.tree.set("onDblClick",lang.hitch(this,this.RowDoubleClick));
                this.tree.startup();
            },

            _popupUnitPanel:function()
            {
                this.queryDiv.value="";
                if(!this._isShow)
                {
                    popup.open({
                        parent:this,
                        popup: this._unitPanel,
                        around: this.UnitComboxDiv.domNode
                    });
                    this._isShow=true;
                    $("body").bind("mousedown",{thisObj:this},this.onBodyDown);
                }
                else {
                    popup.close(this._unitPanel);
                    this._isShow=false;
                    $("body").unbind("mousedown", this.onBodyDown);
                }
                this.queryChange();
            },
            onBodyDown: function(event) {
                if (!$(event.target).hasClass("UnitComboxDijitClass")&&!$(event.target).parents().hasClass("UnitComboxDijitClass")){
                    event.data.thisObj.hideMenu();
                }
            },
            hideMenu: function() {
                popup.close(this._unitPanel);
                this._isShow=false;
                $("body").unbind("mousedown", this.onBodyDown);//这样传参才能解除绑定
            },

            cancelClick: function () {
                this.hideMenu();
            },

            okClick: function () {
                if(this.unitResult.unitName){
                    if(this.isOnlyLeafNode=="true"&&this.unitResult.leafNode){
                        layer.msg(this.nls.leaftip);
                        return;
                    }
                    this.UnitComboxDiv.setValue(this.unitResult.unitName);
                    this.emit("unitComboxChange",this.unitResult);
                }
                this.hideMenu();
            },

            //监听返回后的方法
            RowClick:function(e)
            {
                //var item=this.tree.getItem(e.rowIndex);
                this.unitResult.unitEventid = e["@v"];
                this.unitResult.unitName = e["@l"];
                this.unitResult.leafNode = e["leafNode"];
            },
            //监听返回后的方法
            RowDoubleClick:function(e)
            {
                if(this.isOnlyLeafNode=="true"&&e["leafNode"]){
                    layer.msg(this.nls.leaftip);
                    return;
                }
                this.unitResult.unitEventid = this.tree.selectedItem["@v"];
                this.unitResult.unitName = this.tree.selectedItem["@l"];
                this.UnitComboxDiv.setValue(this.unitResult.unitName);
                this.emit("unitComboxChange",this.unitResult);
                this.hideMenu();
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