define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojox/xml/parser',
        'dojo/on','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        "dijit/popup", "dijit/Tree","dijit/tree/ObjectStoreModel",'dojo/store/Memory',
        "dojo/store/Observable",
        "dijit/layout/ContentPane",
        'jimu/dijit/LoadingIndicator',
        'dojo/text!./templates/LineloopComboxDijit.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,parser,on,_WidgetBase,_TemplatedMixin,popup,Tree,ObjectStoreModel,
               Memory,Observable,ContentPane,LoadingIndicator,template,Evented) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin,Evented],{
            templateString:template,
            baseClass: 'jimu-widget-lineloopcomboxdijit',
            name: 'LineloopComboxDijit',
            _isShow:null,//是否弹出
            _lineloopPanel:null,//弹出面板
            _dataJsonArr:[],//返回总的JSON数组
            _dataJsonObj:null,//返回总的JSON对象
            _myStore:null,
            _myModel:null,

            dataServerUrl:null,//数据缓存服务器的URL
            unitEventid:null,//当前控件根节点单位的EVENTID
            dataType:"m",//管网业务范围控制,m 显示当前单位管理范围的管网,p 显示当前单位巡检范围内的管网
            lineloopType:"lineLoop",//单位数据类型,lineLoop(选择管网),lineLoopSub(选择管网+子系统),lineLoopJson(选择管网JSON)
            filterStr:"",
            languageType:"zh",
            isOnlyLeafNode:"true",//是否只有叶子节点可选
            lineloopResult:null,//发出结果unitEvntid、lineloopEventid、lineloopName

            /**请求数据
             * unitEventid:单位的EVENTID
             * dataType:管网业务范围控制,
             *          m 显示当前单位管理范围的管网,
             *          p 显示当前单位巡检范围内的管网             *
             * actionFrom:lineLoop,选择管网
             *            lineLoopSub:选择管网+子系统
             *            lineLoopJson:选择管网JSON
             * filterStr:过滤条件
             * languageType:语言类型
             * isToJson：是否转JSON
             */
            /**
             返回结果：
             @l:管网名称,@v:管网eventid,@t:管网类型,@t:管网级别
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
            initLineloopComboxValue: function(params){
                this.dataServerUrl = params.dataServerUrl;
                this.unitEventid = params.unitEventid;
                this.dataType = params.dataType?params.dataType:this.dataType;
                this.lineloopType = params.lineloopType?params.lineloopType:this.lineloopType;
                this.filterStr = params.filterStr?params.filterStr:this.filterStr;
                this.languageType = params.languageType?params.languageType:this.languageType;
                this.isOnlyLeafNode = params.isOnlyLeafNode?params.isOnlyLeafNode:this.isOnlyLeafNode;

                this.createTree();
            },

            /**
             * 设置管网控件的值
             * @param unitEventid 单位eventid
             * @param lineloopEventid 管网eventid[可为空]
             * @param lineloopName 管网name[可为空]
             * @param isEmited 是否发送事件
             */
            setLineloopComboxValue: function (unitEventid,lineloopEventid,lineloopName,isEmited) {
                if(lineloopName){
                    this.LineloopComboxDiv.setValue(lineloopName);
                }else if(lineloopEventid&&this._dataJsonObj[lineloopEventid]){
                    this.LineloopComboxDiv.setValue(this._dataJsonObj[lineloopEventid]["@l"]);
                    lineloopName=this._dataJsonObj[lineloopEventid]["@l"];
                }else{
                    this.LineloopComboxDiv.setValue("");
                }
                this.lineloopResult.unitEventid = unitEventid;
                this.lineloopResult.lineloopEventid = lineloopEventid;
                this.lineloopResult.lineloopName = lineloopName;

                //更新树
                this.unitEventid = unitEventid;
                this.createTree();
                if(isEmited)this.emit("lineloopComboxChange",this.lineloopResult);
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.pipedijit;
            },

            postCreate:function(){
                this.inherited(arguments);

                this.lineloopResult=new Object();
                this._lineloopPanel = new ContentPane({
                    content:this.LineloopPanelDiv,
                    style:"padding:0px"
                });
                popup.close(this._lineloopPanel);
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
                    url: this.dataServerUrl+"/getdataLine?actionFrom="+this.lineloopType+"&unitEventid="+this.unitEventid+"&isToJson=n&dataType=m"+this.dataType+"&filterStr="+this.filterStr+"&languageType="+this.languageType,
                    type:'POST',
                    dataType:'json',
                    success: lang.hitch(this,function(data){
                        this.initData(data);
                    }),
                    error: function() {
                        layer.msg('getdataLine action error');
                    }
                });
            },
            //嵌套JSON转换成平行JSON数组
            xmlObjectToJSONArr:function (xmlObject,parent,eventids){
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
            },
            initData:function(response)
            {
                var dataJson=response;
                //this.LineloopComboxDiv.setValue(dataJson["@l"]);//根节点Name
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

            _popupLineloopPanel:function()
            {
                this.queryDiv.value="";
                if(!this._isShow)
                {
                    popup.open({
                        parent:this,
                        popup: this._lineloopPanel,
                        around: this.LineloopComboxDiv.domNode
                    });
                    this._isShow=true;
                    $("body").bind("mousedown",{thisObj:this},this.onBodyDown);
                }
                else {
                    popup.close(this._lineloopPanel);
                    this._isShow=false;
                    $("body").unbind("mousedown", this.onBodyDown);
                }
                this.queryChange();

            },
            onBodyDown: function(event) {
                if (!$(event.target).hasClass("LineloopComboxDijitClass")&&!$(event.target).parents().hasClass("LineloopComboxDijitClass")){
                    event.data.thisObj.hideMenu();
                }
            },
            hideMenu: function() {
                popup.close(this._lineloopPanel);
                this._isShow=false;
                $("body").unbind("mousedown", this.onBodyDown);//这样传参才能解除绑定
            },

            cancelClick: function () {
                this.hideMenu();
            },

            okClick: function () {
                if(this.lineloopResult.lineloopName){
                    if(this.isOnlyLeafNode=="true"&&this.lineloopResult.leafNode){
                        layer.msg(this.nls.leaftip);
                        return;
                    }
                    this.LineloopComboxDiv.setValue(this.lineloopResult.lineloopName);
                    this.emit("lineloopComboxChange",this.lineloopResult);
                }
                this.hideMenu();
            },

            //监听返回后的方法
            RowClick:function(e)
            {
                //var item=this.tree.getItem(e.rowIndex);
                this.lineloopResult.unitEventid = this.unitEventid;
                this.lineloopResult.lineloopEventid = e["@v"];
                this.lineloopResult.lineloopName = e["@l"];
                this.lineloopResult.leafNode = e["leafNode"];
            },
            //监听返回后的方法
            RowDoubleClick:function(e)
            {
                if(this.isOnlyLeafNode=="true"&&e["leafNode"]){
                    layer.msg(this.nls.leaftip);
                    return;
                }
                this.lineloopResult.unitEventid = this.unitEventid;
                this.lineloopResult.lineloopEventid = this.tree.selectedItem["@v"];
                this.lineloopResult.lineloopName = this.tree.selectedItem["@l"];
                this.LineloopComboxDiv.setValue(this.lineloopResult.lineloopName);
                this.emit("lineloopComboxChange",this.lineloopResult);
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