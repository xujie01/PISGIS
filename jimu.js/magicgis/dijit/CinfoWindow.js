define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'esri/graphic',
        'dojo/_base/array',
        'dojox/xml/parser',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",'esri/Color',
        'dojo/on',
        "esri/config","esri/geometry/normalizeUtils","esri/tasks/GeometryService",
        "esri/tasks/BufferParameters",'jimu/PanelManager','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus","esri/request","dojo/json","jimu/WidgetManager","dijit/Dialog",
        'jimu/magicgis/util/CommonParams',
        'jimu/dijit/LoadingIndicator','dojo/request/xhr',"esri/tasks/FindTask","esri/tasks/FindParameters",'jimu/magicgis/util/commonUtils',
        'dojo/text!./templates/CinfoWindow.html',
        "jimu/magicgis/configProject",
        "dijit/popup",
        "dijit/layout/ContentPane",
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               Graphic,array,parser,
               SimpleLineSymbol,SimpleFillSymbol,Color,on,esriConfig,normalizeUtils,
               GeometryService,BufferParameters,PanelManager,_WidgetBase,_TemplatedMixin,focusUtil,esriRequest,JSON,WidgetManager,
               Dialog,CommonParams,LoadingIndicator,xhr,FindTask,FindParameters,commonUtils,template,configProject,popup,ContentPane) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-cinfowindow',
            name: 'CinfoWindow',
            realDataValues:null,
            resultArr:[],
            startObj:null,
            endObj:null,
            locationGeometry:null,
            urlArray:null,
            apdmSearchByEnvelop:null,//SOE地址
            findTask:null,//属性查询
            /*data:
            * dataValues:要展示的数值信息，Object类型
            * viewsPanel:底部需显示的视图，1：到这里去；2：从这里出发；3：附近查找【可选】
            * location：图形geometry,Goemtry类型【可选，附近查找需要】
            * alianValues:对应的阈值名称,Object类型【可选】
            * imgUrl：图片信息，#格式字符串【可选】
            * */

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
                this.data=params.data;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.monitor;
                this.apdmSearchByEnvelop=configProject.apdmSearchByEnvelop;
            },

            setMap:function(map){
                if(map){
                    this.map = map;
                }
            },

            postCreate:function(){
                this.inherited(arguments);
                this.locationGeometry=this.data.location;
                this.realDataValues=new Object();
                this.urlArray=[];
                //是否显示图片
                if(this.data.imgUrl){
                    html.setStyle(this.imgDiv,"display","inline-block");
                    var imgUrl;
                    var imgUrls=this.data.imgUrl.replace(/\\/g, "/");
                    if(imgUrls.indexOf("#") != -1){
                        this.urlArray = imgUrls.split("#");
                        imgUrl =this.urlArray[0];
                    }else{
                        this.urlArray.push(imgUrls);
                        imgUrl = imgUrls;
                    }
                    this.imgDiv.src="textures"+imgUrl;
                }else{
                    html.setStyle(this.topDiv,"width","100%");
                }
                //是否显示contentDiv
                if(this._getObjectCount(this.data.dataValues)>4&&this.data.imgUrl){
                    html.setStyle(this.contentDiv,"display","block");
                }
                //是否替换阈值
                if(this.data.alianValues){
                    for(var ikey in this.data.alianValues) {//用javascript的for/in循环遍历对象的属性
                        var valueKey=this.data.alianValues[ikey];
                        this.realDataValues[valueKey]=this.data.dataValues[ikey];
                    }
                }else{
                    this.realDataValues=this.data.dataValues;
                }
                //显示底部视图
                if(this.data.viewsPanel){
                    html.setStyle(this.iwFooterContainer,"display","block");
                    var strs= new Array(); //定义一数组
                    strs=this.data.viewsPanel.split(","); //字符分割
                    for (var i=0;i<strs.length ;i++ )
                    {
                        switch(strs[i])
                        {
                            case "1":
                                html.setStyle(this.endBtn,"display","block");
                                break;
                            case "2":
                                html.setStyle(this.startBtn,"display","block");
                                break;
                            case "3":
                                html.setStyle(this.searchBtn,"display","block");
                                //this.classSelect.options=CommonParams.getInstance().featureClass;
                                break;
                            default:
                            //layerInfoTemplateStr+=("<b>"+"${"+ikey+"}</b>"+inspectorData[ikey]);
                        }
                    }
                }
                //显示数据
                if(this.data.imgUrl){
                    var valuesCount=0;
                    for(var dataKey in this.realDataValues) {//用javascript的for/in循环遍历对象的属性
                        valuesCount++;
                        if(valuesCount<5){
                            var topContainerDiv = document.createElement("div");
                            this.topDiv.appendChild(topContainerDiv);
                            var keyTopDiv = document.createElement("div");
                            html.setStyle(keyTopDiv, 'display', 'inline-block');
                            html.setStyle(keyTopDiv, 'margin-bottom', '2px');
                            keyTopDiv.innerHTML=dataKey+":"+this.realDataValues[dataKey];
                            topContainerDiv.appendChild(keyTopDiv);
                        }else{
                            var contentContainerDiv = document.createElement("div");
                            this.contentDiv.appendChild(contentContainerDiv);
                            var keyContentDiv = document.createElement("div");
                            html.setStyle(keyContentDiv, 'display', 'inline-block');
                            html.setStyle(keyContentDiv, 'margin-bottom', '2px');
                            keyContentDiv.innerHTML=dataKey+":"+this.realDataValues[dataKey];
                            contentContainerDiv.appendChild(keyContentDiv);
                        }
                    }
                }else{
                    for(var dataKey in this.realDataValues) {//用javascript的for/in循环遍历对象的属性
                        var topContainerDiv = document.createElement("div");
                        this.topDiv.appendChild(topContainerDiv);
                        var keyTopDiv = document.createElement("div");
                        html.setStyle(keyTopDiv, 'display', 'inline-block');
                        html.setStyle(keyTopDiv, 'margin-bottom', '2px');
                        keyTopDiv.innerHTML=dataKey+":"+this.realDataValues[dataKey];
                        topContainerDiv.appendChild(keyTopDiv);
                    }
                }
            },

            startup: function () {
                this.inherited(arguments);
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(window.jimuConfig.layoutId);

                this.startObj=null;
                this.endObj=null;
                this.findTask = new FindTask("http://10.100.1.162:6080/arcgis/rest/services/PisBaseMap/MapServer");
                if("\v"=="v") {//判断是否IE
                    this.own(on(dojo.byId("startInput"),"propertychange",lang.hitch(this,this._onSearchStart)));
                }else{
                    this.own(on(dojo.byId("startInput"),"input",lang.hitch(this,this._onSearchStart)));
                }
                if("\v"=="v") {//判断是否IE
                    this.own(on(dojo.byId("endInput"),"propertychange",lang.hitch(this,this._onSearchEnd)));
                }else{
                    this.own(on(dojo.byId("endInput"),"input",lang.hitch(this,this._onSearchEnd)));
                }
            },

            endButtonClick:function(){
                this.iwToolBarDiv.setAttribute("class", "iwToolBar setEndTab");
                html.setStyle(this.iwToolBarDiv, 'height', '50px');
            },

            startButtonClick:function(){
                this.iwToolBarDiv.setAttribute("class", "iwToolBar setStartTab");
                html.setStyle(this.iwToolBarDiv, 'height', '50px');
            },

            searchButtonClick:function(){
                this.iwToolBarDiv.setAttribute("class", "iwToolBar setSearchTab");
                html.setStyle(this.iwToolBarDiv, 'height', '80px');
            },

            startCarClick:function(evt){
                this.direction("end","driving");
            },
            startBusClick:function(evt){
                this.direction("end","transit");
            },
            endCarClick:function(evt){
                this.direction("start","driving");
            },
            endBusClick:function(evt){
                this.direction("start","transit");
            },

            _onSearchStart:function(evt){
                this.startObj=null;
                var startInput=evt.target;
                if(startInput.value.length>0)
                {
                    html.setStyle(dojo.byId("uiSuggestWrapUl"), 'display', 'block');
                    var divContent = new ContentPane({
                        content:dojo.byId("uiSuggestWrapUl"),
                        style:"padding:0px"
                    });
                    popup.open({
                        parent:this,
                        popup: divContent,
                        around: dojo.byId("startInput"),
                        orient: ["below"]
                    });
                    $("body").bind("mousedown",{thisObj:this,textDom:startInput},this.onBodyDown);
                    dojo.empty("uiSuggestWrapUl");
                    //this.placeSuggestion(startInput);
                    this._querySearchObj(startInput);
                }else{
                    this.hideMenu();
                }
            },
            _onSearchEnd:function(evt){
                this.endObj=null;
                var endInput=evt.target;
                if(endInput.value.length>0)
                {
                    html.setStyle(dojo.byId("uiSuggestWrapUl"), 'display', 'block');
                    var divContent = new ContentPane({
                        content:dojo.byId("uiSuggestWrapUl"),
                        style:"padding:0px"
                    });
                    html.addClass(divContent, 'cwindowpop');
                    popup.open({
                        parent:this,
                        popup: divContent,
                        around: dojo.byId("endInput"),
                        orient: ["below"]
                    });
                    $("body").bind("mousedown",{thisObj:this,textDom:endInput},this.onBodyDown);
                    dojo.empty("uiSuggestWrapUl");
                    //this.placeSuggestion(endInput);
                    this._querySearchObj(endInput);
                }else{
                    //html.setStyle(this.clearEnd, 'display', 'none');
                    this.hideMenu();
                }
            },
            onBodyDown: function(event) {
                var textDomID=event.data.textDom.id;
                if (!(event.target.id == textDomID || $(event.target).parents("#"+textDomID).length>0||event.target.id == "uiSuggestWrapUl"|| $(event.target).parents("#uiSuggestWrapUl").length>0)){
                    event.data.thisObj.hideMenu();
                    popup.close();
                }
            },
            hideMenu: function() {
                html.setStyle(dojo.byId("uiSuggestWrapUl"), 'display', 'none');
                $("body").unbind("mousedown", this.onBodyDown);//这样传参才能解除绑定
            },

            //查询维抢修队后调用百度Web服务
            _querySearchObj:function(textDom) {
                var findParams = new FindParameters();
                findParams.returnGeometry = true;
                findParams.layerIds = [12, 13, 14];
                findParams.searchFields = ["NAME"];
                findParams.searchText = textDom.value;
                this.resultArr.splice(0,this.resultArr.length);
                this.findTask.execute(findParams, lang.hitch(this,function(findResults){
                    for (var i = 0; i < findResults.length; i++) {
                        var result = findResults[i];
                        this.resultArr.push({name:result.value,
                            geometry:result.feature.geometry,
                            city:"",
                            district:""});
                    }
                    this.placeSuggestion(textDom);
                }));
            },

            //调用百度Web服务关键代码，使用JSONP方式
            //Place Suggestion API,匹配用户输入关键字辅助信息
            placeSuggestion:function(textDom)
            {
                var targetNode = dojo.byId("uiSuggestWrapUl");
                // The parameters to pass to xhrGet, the url, how to handle it, and the callbacks.
                var jsonpArgs = {
                    url: "http://api.map.baidu.com/place/v2/suggestion",
                    callbackParamName: "callback",
                    content: {
                        query: textDom.value,
                        region: "全国",
                        output:"json",
                        ak:"oMvdENGYZmsGBZlo8MFffrQb"
                    },
                    load: lang.hitch(this,function(data){
                        // Set the data from the search into the viewbox in nicely formatted JSON
                        if(data.message=="ok")
                        {
                            /*targetNode.onclick=function(ev){//事件代理
                             var e=event||ev; var obj=e.srcElement||e.target;
                             if(obj.tagName=='LI'){
                             layer.msg( obj.getAttribute("data-key"));
                             }}*/
                            //this.resultArr.splice(0,this.resultArr.length);
                            for (var i = 0; i < data.result.length; i++) {
                                if (data.result[i].location!=undefined) {
                                    this.resultArr.push(data.result[i]);
                                }
                            }
                            for(var j=0;j<this.resultArr.length;j++)
                            {
                                var resultInfo=this.resultArr[j];
                                var name = resultInfo.name;
                                var location = resultInfo.city+resultInfo.district;
                                var li = document.createElement("li");
                                li.setAttribute("class", "ui-suggest-item");
                                li.setAttribute("data-from", "");
                                li.setAttribute("data-type", "sug");
                                li.setAttribute("data-key", name);
                                li.setAttribute("data-location", location);
                                li.setAttribute("data-extra", "");
                                li.setAttribute("style", "width: 225px;");
                                targetNode.appendChild(li);
                                var a = document.createElement("a");
                                li.appendChild(a);
                                var i = document.createElement("i");
                                i.setAttribute("class", "default");
                                i.innerHTML = name;
                                a.appendChild(i);
                                var em = document.createElement("em");
                                em.innerHTML = "  "+location;
                                a.appendChild(em);
                            }
                            var oUl=document.getElementById("uiSuggestWrapUl");
                            var oLis=oUl.getElementsByTagName("li");
                            for(var i=0; i<oLis.length;i++){
                                oLis[i].index=i;
                                oLis[i].onclick=function(thisobj){
                                    return function(){
                                        thisobj._onLocationClick(this.index,textDom);
                                    }
                                }(this);
                            }
                        }
                    }),
                    error: function(error){
                        targetNode.innerHTML = "An unexpected error occurred: " + error;
                    }
                };
                dojo.io.script.get(jsonpArgs);
            },

            _onLocationClick:function(locationIndex,textDom){
                textDom.value=this.resultArr[locationIndex].name;
                if(this.resultArr[locationIndex].geometry){
                    var location=commonUtils._MercatorToLat(this.resultArr[locationIndex].geometry.y)+","+commonUtils._MercatorToLon(this.resultArr[locationIndex].geometry.x);
                    //经纬度获取百度点信息
                    var jsonpArgs = {
                        url: "http://api.map.baidu.com/geocoder/v2/",
                        callbackParamName: "callback",
                        content: {
                            location: location,
                            pois: 0,
                            coordtype:"wgs84ll",
                            output:"json",
                            ak:"oMvdENGYZmsGBZlo8MFffrQb"
                        },
                        load: lang.hitch(this,function(data){
                            // Set the data from the search into the viewbox in nicely formatted JSON
                            if(data.status==0)
                            {
                                var pointObj=data.result;
                                pointObj.name=pointObj.formatted_address;
                                pointObj.city=pointObj.addressComponent.city;
                                if(textDom.id=="startInput"){
                                    this.startObj=pointObj;
                                }else if(textDom.id=="endInput"){
                                    this.endObj=pointObj;
                                }
                            }
                            this.hideMenu();//获取索引后隐藏*/
                        }),
                        error: function(error){
                            alert("An unexpected error occurred: " + error);
                            this.hideMenu();//获取索引后隐藏*/
                        }
                    };
                    dojo.io.script.get(jsonpArgs);
                }else{
                    if(textDom.id=="startInput"){
                        this.startObj=this.resultArr[locationIndex];
                    }else if(textDom.id=="endInput"){
                        this.endObj=this.resultArr[locationIndex];
                    }
                    //layer.msg(locationIndex);
                    this.hideMenu();//获取索引后隐藏
                }
            },

            direction:function(directionType,navType)
            {
                this.navType=navType;
                this.directionType=directionType;
                var lonNumb,latNumb;
                if(this.locationGeometry.spatialReference.wkid==4326){
                    lonNumb=this.locationGeometry.x;//经度
                    latNumb=this.locationGeometry.y;//纬度
                }
                else if(this.locationGeometry.spatialReference.isWebMercator()){
                    lonNumb=this.locationGeometry.x/20037508.34*180;//经度
                    var y = this.locationGeometry.y/20037508.34*180;
                    latNumb= 180/Math.PI*(2*Math.atan(Math.exp(y*Math.PI/180))-Math.PI/2);//纬度
                }
                var jsonpArgs = {
                    url: "http://api.map.baidu.com/geocoder/v2/",
                    callbackParamName: "callback",
                    content: {
                        location: latNumb+","+lonNumb,
                        pois: 0,
                        coordtype:"wgs84ll",
                        output:"json",
                        ak:"oMvdENGYZmsGBZlo8MFffrQb"
                    },
                    load: lang.hitch(this,function(data){
                        // Set the data from the search into the viewbox in nicely formatted JSON
                        if(data.status==0)
                        {
                            var pointObj=data.result;
                            var directionObj=new Object();
                            if(this.directionType=="start"&&this.startObj){
                                var _endObj=pointObj;
                                _endObj.name=pointObj.formatted_address;
                                _endObj.city=pointObj.addressComponent.city;
                                directionObj.startObj=this.startObj;
                                directionObj.endObj=_endObj;
                                directionObj.mode=this.navType;
                                topic.publish('openContainer',"navigation",directionObj);
                            }else if(this.directionType=="end"&&this.endObj){
                                var _startObj=pointObj;
                                _startObj.name=pointObj.formatted_address;
                                _startObj.city=pointObj.addressComponent.city;
                                directionObj.startObj=_startObj;
                                directionObj.endObj=this.endObj;
                                directionObj.mode=this.navType;
                                topic.publish('openContainer',"navigation",directionObj);
                            }
                        }
                    }),
                    error: function(error){
                        targetNode.innerHTML = "An unexpected error occurred: " + error;
                    }
                };
                dojo.io.script.get(jsonpArgs);
                if(directionType=="start"){

                }

            },

            _searchAround:function(){
                if(!this.classSelect||!this.classSelect.value){
                    layer.msg("Type is error");
                }else if(!this.radiusInput||!this.radiusInput.value||isNaN(this.radiusInput.value)){
                    layer.msg("Radius is error");
                }else{
                    this._bufferOperation();
                }
            },

            _bufferOperation:function(){
                /*var graphic=new Graphic(this.locationGeometry);
                if(this.locationGeometry.type=="point"){
                    graphic.symbol=this.pointSymbol;
                }else if(this.geoGeometry.type=="polyline"){
                    graphic.symbol=this.lineSymbol;
                }else if(this.geoGeometry.type=="polygon"){
                    graphic.symbol=this.fillSymbol;
                }
                this.map.graphics.clear();
                this.map.graphics.add(graphic);*/

                //setup the buffer parameters
                var params = new BufferParameters();
                params.distances = [ this.radiusInput.value ];
                params.outSpatialReference = this.map.spatialReference;
                params.unit = GeometryService['UNIT_METER'];
                //normalize the geometry

                this.loading = new LoadingIndicator();
                this.loading.placeAt(window.jimuConfig.layoutId);
                normalizeUtils.normalizeCentralMeridian([this.locationGeometry]).then(lang.hitch(this,function(normalizedGeometries){
                    var normalizedGeometry = normalizedGeometries[0];
                    if (normalizedGeometry.type === "polygon") {
                        //if geometry is a polygon then simplify polygon.  This will make the user drawn polygon topologically correct.
                        esriConfig.defaults.geometryService.simplify([normalizedGeometry], lang.hitch(this,function(geometries) {
                            params.geometries = geometries;
                            esriConfig.defaults.geometryService.buffer(params, lang.hitch(this,this.showBufferOperation),lang.hitch(this,this.errback));
                        }));
                    } else {
                        params.geometries = [normalizedGeometry];
                        esriConfig.defaults.geometryService.buffer(params, lang.hitch(this,this.showBufferOperation),lang.hitch(this,this.errback));
                    }
                }));
            },
            showBufferOperation:function(bufferedGeometries) {
                this.loading.destroy();
                var symbol = new SimpleFillSymbol(
                    SimpleFillSymbol.STYLE_SOLID,
                    new SimpleLineSymbol(
                        SimpleLineSymbol.STYLE_SOLID,
                        new Color([255,0,0,0.65]), 2
                    ),
                    new Color([144,250,91,0.35])
                );

                array.forEach(bufferedGeometries, lang.hitch(this,function(geometry) {
                    var graphic = new Graphic(geometry, symbol);
                    this.map.graphics.add(graphic);
                }));

                this._bufferQueryHandler(bufferedGeometries[0]);
            },
            errback:function(evt) {
                layer.msg(evt);
            },
            _bufferQueryHandler: function (geometry) {
                var content = {
                    'Lang': "zh",
                    'FeatureClass': this.classSelect.value,
                    'Envelop':JSON.stringify(geometry.getExtent()),
                    'UnitEventID':"25c85e40-4b04-4151-903f-a45af2e21e7f",
                    'f': "json"
                };
                var Request = esriRequest({
                    //url:this.apdmSearchByEnvelop,
                    url: this.apdmSearchByEnvelop,
                    content: content,
                    handleAs: "json",
                    callbackParamName: "callback"
                });
                Request.then(
                    lang.hitch(this,function (responses) {
                        if(responses.TaskStatus==1&&responses.AttributeTable&&JSON.parse(responses.AttributeTable)["Rows"].length>=1){
                            topic.publish('openWidget', "widgets_FeatureQuery_Widget");
                            topic.publish('attributeTable',responses.AttributeTable);
                        }else{
                            layer.msg(this.nls.noresult);
                        }
                    }), function(error) {
                        console.log("Error: ", error.message);
                        layer.msg(error.message);
                    });

            },

            _getObjectCount:function(dataObj){
                var key, counter = 0;
                for(key in dataObj) counter++;
                return counter;
            },

            imgMoreClick: function () {
                var imgSrcArr=[];
                for(var i=0;i<this.urlArray.length;i++){
                    var imgData={
                        "alt": this.data.dataValues.DESCRIPTION,
                        "pid": i, //图片id
                        "src": "textures"+this.urlArray[i], //原图地址正式库http://10.30.72.27:8088/imgserver/img
                        "thumb": "" ,//缩略图地址
                        "height":"200px"
                        };
                    imgSrcArr.push(imgData);
                }
                /*var jsonPhoto = {
                    "title": "", //相册标题
                    "id": 123, //相册id
                    "start": 0, //初始显示的图片序号，默认0
                    "data": imgSrcArr//相册包含的图片，数组格式
                };
                layer.photos({
                    photos: jsonPhoto
                    , shift: 5 //0-6的选择，指定弹出图片动画类型，默认随机
                    ,area: [document.documentElement.clientWidth*0.8+'px', 'auto'],
                });*/
                layer.open({
                    type: 1, //page层
                    area: [document.documentElement.clientWidth*0.8+'px', document.documentElement.clientHeight*0.95+'px'],
                    title: false,
                    shade: 0.8, //遮罩透明度
                    moveType: 1, //拖拽风格，0是默认，1是传统拖动
                    shift: 0, //0-6的动画形式，-1不开启
                    skin: 'photo-class',//自定义css
                    content: '<div style="width: 100%; height: 99%">'+
                                '<div style="width: calc(100% - 260px); height: 100%;display: inline-block;background-color: #000000">'+
                                '<div style="width: 100%; height: calc(100% - 80px)">'+
                                '<p class="bigbtnPrev"><span class="big_play_prev"></span></p><div class="bigImgArea">'+
                                /*'<div id="image_xixi-01" class="image" style="opacity: 1; display: block;"><img alt="" src="widgets/BasemapGallery/images/special_a.png" width="100%" height="100%">' +
                                '</div>'+*/
                                function(){
                                    var bigimgStr='<div  class="image" style="opacity: 1; display: block;"><img src="'+imgSrcArr[0].src+'" width="100%" height="100%"></div>';
                                    for(var j=1; j < imgSrcArr.length; j++){
                                        bigimgStr += '<div  class="image" style="opacity: 0; display: none;"><img src="'+imgSrcArr[j].src+'" width="100%" height="100%"></div>';
                                    }
                                    return bigimgStr;
                                }() +
                                '</div><p class="bigbtnNext"><span class="big_play_next"></span></p>' +
                                '<p class="bigImageOperation"><span title="+this.nls.img+" class="big_play_origin"></span></p>' +
                                '</div>'+
                                '<div style="width: 100%;height: 80px;">'+
                                '<div class="thumbsImages">'+
                                '<ul>'+
                                '<li class="btnPrev"><img src="jimu.js/magicgis/images/left.png"></li>'+
                                /*''<li >'+
                                <a id="thumb_xixi-01" href="#" class=""><img src="widgets/BasemapGallery/images/special_a.png" width="76" height="66"></a>'+
                                '</li>'+
                                '<li class="last_img slideshowItem">'+
                                '<a id="thumb_xixi-07" href="#" class=""><img src="widgets/BasemapGallery/images/special_a.png" width="76" height="66"></a>'+
                                '</li>'+*/
                                function(){
                                    var thumbsimgStr='';
                                    for(var j=0; j < imgSrcArr.length; j++){
                                        if(j==0){
                                            thumbsimgStr += '<li><a href="#" class="current"><img src="'+imgSrcArr[j].src+'" width="76" height="66"></a></li>';
                                        }else{
                                            thumbsimgStr += '<li><a href="#" class=""><img src="'+imgSrcArr[j].src+'" width="76" height="66"></a></li>';
                                        }
                                    }
                                    return thumbsimgStr;
                                }() +
                                '<li class="btnNext"><img src="jimu.js/magicgis/images/right.png"></li>'+
                                '</ul></div>' +
                                '</div>' +
                                '</div>'+
                                '<div style="width: 260px; height: 99%;display: inline-block;background-color: #FFFFFF;float: right;padding: 10px;font-size: 15px;">' +
                                lang.hitch(this,function(){
                                    var describ=this.nls.describ+"："+imgSrcArr[0].alt;
                                    return describ;
                                })() +
                                '</div>'+
                            '</div>',
                    success: function(layerE){
                        //切换事件
                        /*var btn = $('.xubox_tabtit').children(), main = $('.xubox_tab_main').children(), close = $('.xubox_tabclose');
                        btn.on('click', function(){
                            var othis = $(this), index = othis.index();
                            othis.addClass('xubox_tabnow').siblings().removeClass('xubox_tabnow');
                            main.eq(index).show().siblings().hide();
                        });
                        //关闭层
                        close.on('click', function(){
                            layer.close(layerE.attr('times'));
                        });*/
                        var index = 0, big_play_prev = $('.bigbtnPrev').children(),big_play_next = $('.bigbtnNext').children(), main = $('.bigImgArea').children(),
                            play_prev = $('.btnPrev').children(),play_next = $('.btnNext').children(),thumbsMain = $('.thumbsImages UL').children(),
                            bigImageOperation=$('.bigImageOperation').children();
                        AutoResizeImage(main.eq(index).width(),main.eq(index).height(),main.children());
                        big_play_prev.on('click', function(){
                            index--;
                            if (index < 0) index=main.length-1;
                            main.eq(index).animate({opacity: 1}, 800).show().siblings().animate({opacity: 0}, 800).hide();
                            thumbsMain.eq(index+1).children().addClass('current');
                            thumbsMain.eq(index+1).siblings().children().removeClass('current');
                            AutoResizeImage(main.eq(index).width(),main.eq(index).height(),main.children());
                        });
                        big_play_next.on('click', function(){
                            index++;
                            if (index > main.length-1) index=0;
                            main.eq(index).animate({opacity: 1}, 800).show().siblings().animate({opacity: 0}, 800).hide();
                            thumbsMain.eq(index+1).children().addClass('current');
                            thumbsMain.eq(index+1).siblings().children().removeClass('current');
                            AutoResizeImage(main.eq(index).width(),main.eq(index).height(),main.children());
                        });
                        play_prev.on('click', function(){
                            index--;
                            if (index < 0) index=main.length-1;
                            main.eq(index).animate({opacity: 1}, 800).show().siblings().animate({opacity: 0}, 800).hide();
                            thumbsMain.eq(index+1).children().addClass('current');
                            thumbsMain.eq(index+1).siblings().children().removeClass('current');
                            AutoResizeImage(main.eq(index).width(),main.eq(index).height(),main.children());
                        });
                        play_next.on('click', function(){
                            index++;
                            if (index > main.length-1) index=0;
                            main.eq(index).animate({opacity: 1}, 800).show().siblings().animate({opacity: 0}, 800).hide();
                            thumbsMain.eq(index+1).children().addClass('current');
                            thumbsMain.eq(index+1).siblings().children().removeClass('current');
                            AutoResizeImage(main.eq(index).width(),main.eq(index).height(),main.children());
                        });
                        $('.thumbsImages UL LI').click(function(){
                                var othis = $(this);
                                if (othis.index() == 0||othis.index() == main.length+1) return;
                                index = othis.index()-1;
                                main.eq(index).animate({opacity: 1}, 800).show().siblings().animate({opacity: 0}, 800).hide();
                                thumbsMain.eq(index+1).children().addClass('current');
                                thumbsMain.eq(index+1).siblings().children().removeClass('current');
                                AutoResizeImage(main.eq(index).width(),main.eq(index).height(),main.children());
                            });
                        function AutoResizeImage(maxWidth,maxHeight,jqueryImg){
                            var img = new Image();
                            img.src = imgSrcArr[index].src;
                            img.onload = function() {
                                var hRatio;
                                var wRatio;
                                var Ratio = 1;
                                var w = img.width;
                                var h = img.height;
                                wRatio = maxWidth / w;
                                hRatio = maxHeight / h;
                                if (maxWidth ==0 && maxHeight==0){
                                    Ratio = 1;
                                }else if (maxWidth==0){//
                                    if (hRatio<1) Ratio = hRatio;
                                }else if (maxHeight==0){
                                    if (wRatio<1) Ratio = wRatio;
                                }else if (wRatio<1 || hRatio<1){
                                    Ratio = (wRatio<=hRatio?wRatio:hRatio);
                                }
                                if (Ratio<1){
                                    w = w * Ratio;
                                    h = h * Ratio;
                                }
                                jqueryImg.height(h);
                                jqueryImg.width(w);
                            }
                        };
                        bigImageOperation.on('click', function(){
                            if(this.className=="big_play_origin"){
                                window.open(imgSrcArr[index].src, "_blank");
                            }else if(this.className=="big_play_load"){

                            }
                        });
                    }
                });
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