define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'esri/graphic',
        'dojox/xml/parser',
        'esri/geometry/Point',
        'esri/geometry/Polyline',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        'esri/toolbars/draw','esri/Color',
        'dojo/on',"esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol",
        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus",'jimu/magicgis/util/commonUtils',
        'jimu/dijit/LoadingIndicator',"esri/tasks/FindTask","esri/tasks/FindParameters",
        'jimu/WidgetManager',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               Graphic,parser,Point,Polyline,
               SimpleLineSymbol,SimpleFillSymbol,
               Draw,Color,on,SimpleMarkerSymbol,PictureMarkerSymbol,_WidgetBase,_TemplatedMixin,focusUtil,commonUtils,LoadingIndicator,
               FindTask,FindParameters,WidgetManager) {
        var clazz=declare([BaseWidget, _WidgetsInTemplateMixin],{
            baseClass: 'jimu-widget-navigation',
            name: 'Navigation',
            resultArr:[],
            startObj:null,
            endObj:null,
            partPathGraphic:new Graphic(null,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([204, 0, 0]),5)),//分段路径
            isPartPathClick:false,//是否点击分段路径
            modeStr:"driving",
            map:null,
            getPointObjType:null,
            focusHandle:null,//监听焦点发生变化的事件
            clickTarget:null,//判断点击的是否为map
            containerHeigth:null,//判断点击的是否为map
            findTask:null,//属性查询

            pointSymbol:new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10,
                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([79, 129, 189]), 2),new Color([255,255,0,0.25])),
            lineSymbol:new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([0, 139, 0]),5),
            fillSymbol:new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                new Color([79, 129, 189]),2),new Color([255,255,0,0.25])),
            picMarker:new PictureMarkerSymbol("jimu.js/magicgis/images/locationPt.png", 32, 32),


            postCreate:function(){
                this.inherited(arguments);
                this.inherited(arguments);
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(window.jimuConfig.layoutId);
                this.picMarker.setOffset(0, 16);
                topic.subscribe("openContainer", lang.hitch(this, this.openContainer));

            },

            startup: function () {
                this.findTask = new FindTask("http://10.100.1.162:6080/arcgis/rest/services/PisBaseMap/MapServer");
                this.drawTool=new Draw(this.map,{
                    tooltipOffset:20,
                    drawTime:90
                });
                //this.drawTool.setMarkerSymbol(this.picMarker);
                this.drawTool.on("draw-complete",lang.hitch(this,this._drawEnd));
                this.own(on(this.bus,"click",lang.hitch(this,this._onBusClick)));
                this.own(on(this.drive,"click",lang.hitch(this,this._onDriveClick)));
                this.own(on(this.walk,"click",lang.hitch(this,this._onWalkClick)));
                this.own(on(this.bike,"click",lang.hitch(this,this._onBikeClick)));
                this.own(on(this.clearStart,"click",lang.hitch(this,this._onClearStartClick)));
                this.own(on(this.clearEnd,"click",lang.hitch(this,this._onClearEndClick)));
                this.own(on(this.navSearchBtn,"click",lang.hitch(this,this._onSearchClick)));

                var element = document.getElementById("mytext");
                if("\v"=="v") {//判断是否IE
                    this.own(on(this.textStart,"propertychange",lang.hitch(this,this._onSearchStart)));
                    this.own(on(this.textSEnd,"propertychange",lang.hitch(this,this._onSearchEnd)));
                }else{
                    this.own(on(this.textStart,"input",lang.hitch(this,this._onSearchStart)));
                    this.own(on(this.textEnd,"input",lang.hitch(this,this._onSearchEnd)));
                }
                this.focusHandle = focusUtil.watch("curNode", lang.hitch(this,function(name, oldValue, newValue){
                    console.log("Focused node was", oldValue, "now is", newValue);
                    if(newValue&&newValue.id=="textStart"){
                        this.getPointObjType="getStartPoint";
                        this.drawTool.activate(Draw.POINT);
                        $("body").bind("mousedown",{thisObj:this,textDom:{"id":"startDrawTool"}},this.onBodyDown);
                    }else if(newValue&&newValue.id=="textEnd"){
                        this.getPointObjType="getEndPoint";
                        this.drawTool.activate(Draw.POINT);
                        $("body").bind("mousedown",{thisObj:this,textDom:{"id":"endDrawTool"}},this.onBodyDown);
                    }else if(newValue==null||(newValue.id!="textStart"&&newValue.id!="textEnd")){
                        if(this.clickTarget!="map")this.drawTool.deactivate();
                    }
                }));

                this._onDriveClick();
            },

            onOpen: function () {
            },

            onClose:function(){
            },

            /*destroy:function(){
             this.inherited(arguments);
             },*/

            openContainer:function(commontype,directionObj){
                if(commontype === 'navigation'){
                    topic.publish('openWidget', this.id);
                    this.modeStr=directionObj.mode;
                    this._removeRoutBtnClass();
                    if(this.modeStr=="driving"){
                        html.addClass(this.routeSearchboxContent,'drive');
                    }else if(this.modeStr=="transit"){
                        html.addClass(this.routeSearchboxContent,'bus');
                    }

                    this.textStart.value=directionObj.startObj.name;
                    this.textEnd.value=directionObj.endObj.name;

                    this.startObj=directionObj.startObj;
                    this.endObj=directionObj.endObj;
                    this._onSearchClick();
                }
            },

            _drawEnd:function(evtObj){
                this.drawTool.deactivate();
                var geometry = evtObj.geometry;
                var graphic = new Graphic(geometry, this.picMarker);
                this.map.graphics.add(graphic);
                var lonNumb,latNumb;
                if(this.map.spatialReference.wkid==4326)
                {
                    lonNumb=geometry.x;
                    latNumb=geometry.y;
                }
                else if(this.map.spatialReference.isWebMercator())
                {
                    lonNumb=commonUtils._MercatorToLon(geometry.x);
                    latNumb=commonUtils._MercatorToLat(geometry.y);
                }
                //经纬度获取百度点信息
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
                            pointObj.name=pointObj.formatted_address;
                            pointObj.city=pointObj.addressComponent.city;
                            if(this.getPointObjType=="getStartPoint"){
                                this.startObj=pointObj;
                                this.textStart.value=pointObj.name;
                            }else if(this.getPointObjType=="getEndPoint"){
                                this.endObj=pointObj;
                                this.textEnd.value=pointObj.name;
                            }
                        }
                    }),
                    error: function(error){
                        layer.msg("An unexpected error occurred: " + error);
                    }
                };
                dojo.io.script.get(jsonpArgs);
            },

            _onSearchStart:function(evt){
                this.startObj=null;
                var startText=evt.target.value;
                if(startText.length>0)
                {
                    html.setStyle(this.clearStart, 'display', 'block');
                    html.setStyle(this.ui3SuggestWrap, 'display', 'block');
                    $("body").bind("mousedown",{thisObj:this,textDom:this.textStart},this.onBodyDown);
                    dojo.empty("ui3SuggestWrapUl");
                    //this.placeSuggestion(this.textStart);
                    this._querySearchObj(this.textStart);
                }else{
                    html.setStyle(this.clearStart, 'display', 'none');
                    this.hideMenu();
                }
            },
            _onSearchEnd:function(evt){
                this.endObj=null;
                var endText=evt.target.value;
                if(endText.length>0)
                {
                    html.setStyle(this.clearEnd, 'display', 'block');
                    html.setStyle(this.ui3SuggestWrap, 'display', 'block');
                    $("body").bind("mousedown",{thisObj:this,textDom:this.textEnd},this.onBodyDown);
                    dojo.empty("ui3SuggestWrapUl");
                    //this.placeSuggestion(this.textEnd);
                    this._querySearchObj(this.textEnd);
                }else{
                    html.setStyle(this.clearEnd, 'display', 'none');
                    this.hideMenu();
                }
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
                var targetNode = this.ui3SuggestWrapUl;
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
                            /*targetNode.onclick=function(evt){//事件代理
                             var e=event||evt; var obj=e.srcElement||e.target;
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
                                li.setAttribute("class", "ui3-suggest-item");
                                li.setAttribute("data-from", "");
                                li.setAttribute("data-type", "sug");
                                li.setAttribute("data-key", name);
                                li.setAttribute("data-location", location);
                                li.setAttribute("data-extra", "");
                                li.setAttribute("style", "width: 330px;");
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
                            var oUl=document.getElementById("ui3SuggestWrapUl");
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
                                if(textDom.id=="textStart"){
                                    this.startObj=pointObj;
                                }else if(textDom.id=="textEnd"){
                                    this.endObj=pointObj;
                                }
                            }
                            this.hideMenu();//获取索引后隐藏*/
                        }),
                        error: function(error){
                            layer.msg("An unexpected error occurred: " + error);
                            this.hideMenu();//获取索引后隐藏*/
                        }
                    };
                    dojo.io.script.get(jsonpArgs);
                }else{
                    if(textDom.id=="textStart"){
                        this.startObj=this.resultArr[locationIndex];
                    }else if(textDom.id=="textEnd"){
                        this.endObj=this.resultArr[locationIndex];
                    }
                    this.hideMenu();//获取索引后隐藏
                }
            },

            onBodyDown: function(event) {
                var textDomID=event.data.textDom.id;
                if (!(event.target.id == textDomID || $(event.target).parents("#"+textDomID).length>0||event.target.id == "ui3SuggestWrapUl"|| $(event.target).parents("#ui3SuggestWrapUl").length>0)){
                    event.data.thisObj.hideMenu();
                }
                event.data.thisObj.clickTarget=null;
                if((textDomID=="startDrawTool"||textDomID=="endDrawTool")&&event.target.id =="map_gc"){
                    event.data.thisObj.clickTarget="map";
                    event.data.thisObj.hideMenu();
                }
            },

            hideMenu: function() {
                html.setStyle(this.ui3SuggestWrap, 'display', 'none');
                $("body").unbind("mousedown", this.onBodyDown);//这样传参才能解除绑定
            },

            _onClearStartClick:function(){
                this.startObj=null;
                this.textStart.value="";
                html.setStyle(this.clearStart, 'display', 'none');
                this.hideMenu();
            },

            _onClearEndClick:function(){
                this.endObj=null;
                this.textEnd.value="";
                html.setStyle(this.clearEnd, 'display', 'none');
                this.hideMenu();
            },

            _onSearchClick:function(){
                html.setStyle(this.nav_container, 'max-height', (document.documentElement.clientHeight-260)+'px');
                html.setStyle(this.nav_container, 'display', 'none');
                dojo.empty(this.nav_routes);
                if(this.startObj==null){
                    layer.msg("Satrt input is error");
                }else if(this.endObj==null){
                    layer.msg("End input is error");
                }else{
                    var jsonpArgs = {
                        url: "http://api.map.baidu.com/direction/v1",
                        callbackParamName: "callback",
                        content: {
                            output:"json",
                            mode:this.modeStr,
                            origin: this.startObj.name+"|"+this.startObj.location.lat+","+this.startObj.location.lng,
                            destination:this.endObj.name+"|"+this.endObj.location.lat+","+this.endObj.location.lng,
                            origin_region: this.startObj.city+"",
                            destination_region:this.endObj.city+"",
                            ak:"oMvdENGYZmsGBZlo8MFffrQb"
                        },
                        load: lang.hitch(this,function(data){
                            if(data.message=="ok")
                            {
                                if(this.modeStr=="transit"&&!data.result.routes){
                                    layer.msg("Query no result");
                                    return;
                                }
                                html.setStyle(this.nav_container, 'display', 'block');
                                var routesArr=data.result.routes;
                                for(var i=0;i<routesArr.length;i++){
                                    var routeObj=routesArr[i];
                                    if (this.modeStr=="transit")
                                    {
                                        routeObj=data.result.routes[i].scheme[0];
                                    }
                                    var viewDiv = document.createElement("div");
                                    viewDiv.setAttribute("class", "navtrans-navlist-view   navtrans-type-nav");
                                    viewDiv.setAttribute("data-index", i+"");
                                    this.nav_routes.appendChild(viewDiv);
                                    var titleDiv = document.createElement("div");
                                    titleDiv.setAttribute("class", "navtrans-navlist-title");
                                    viewDiv.appendChild(titleDiv);
                                    titleDiv.onclick=function(thisobj,thisViewDiv,routesItem){
                                        return function(){
                                            thisobj._activeViewDiv(thisViewDiv,thisViewDiv.classList.contains("active"),routesItem);
                                        }
                                    }(this,viewDiv,routeObj);
                                    if(i==0)this._activeViewDiv(viewDiv,false,routeObj);//默认打开方案1
                                    var titleStr=(i==0)?this.nls.hot:(this.nls.schedule+(i+1));
                                    var durationStr;
                                    var hNum=(parseInt(routeObj.duration)/3600).toFixed(0);
                                    var hStr=hNum>=1?(hNum+this.nls.hour):"";
                                    var mNum=(parseInt(routeObj.duration)/60-hNum*60).toFixed(0);
                                    var mStr=mNum>0?(mNum+this.nls.minute):"";
                                    durationStr=hStr+mStr;
                                    var distanceStr;
                                    if(parseInt(routeObj.distance)>1000){
                                        distanceStr=(parseInt(routeObj.distance)/1000).toFixed(1)+this.nls.mile;
                                    }else if(parseInt(routeObj.distance)<1000){
                                        distanceStr=(routeObj.distance).toFixed(1)+this.nls.mi;
                                    }
                                    titleDiv.innerHTML='<div class="navtrans-navlist-label">' +titleStr+'</div>'+
                                        '<span class="navtrans-navlist-arrow"></span>'+
                                        '<p class="navtrans-navlist-title-p title-info"><span>'+durationStr+'</span><span class="">'+distanceStr+'</span></p>';
                                    if(data.result.taxi){
                                        var priceStr=this.nls.taxi+data.result.taxi.detail[0].total_price+this.nls.yuan;
                                        titleDiv.innerHTML+=('<p class="navtrans-navlist-title-p"><span class="">'+priceStr+'</span> </p>');
                                    }
                                    //构造content
                                    var contentDiv = document.createElement("div");
                                    contentDiv.setAttribute("class", "navtrans-navlist-content");
                                    viewDiv.appendChild(contentDiv);
                                    var contentStr='<div class="navtrans-navlist-actions" style="display:none"></div>'+
                                        '<ul class="navtrans-navlist-list">';
                                    for(var m=0;m<routeObj.steps.length;m++){
                                        var pathItem=routeObj.steps[m];
                                        var classStr;
                                        switch(m)
                                        {
                                            case 0:
                                                classStr='<li class="list-start" data-stopindex="0">';
                                                break;
                                            case (routeObj.steps.length-1):
                                                classStr='<li class="list-end" data-stopindex="1">';
                                                break;
                                            default:
                                                classStr='<li class="navlist-item" data-sectionindex="0" data-index="'+ m.toString()+'">';
                                        }
                                        contentStr+=(classStr+
                                        '<span class="navtrans-navlist-icon nav-st"></span>'+
                                        '<div class="navtrans-navlist-list-content">'+((this.modeStr=="transit")?pathItem[0].stepInstruction:pathItem.instructions)+'</div>'+
                                        '</li>');
                                    }
                                    contentStr+='</ul>';
                                    contentDiv.innerHTML=contentStr;
                                    var oLis=contentDiv.getElementsByTagName("li");
                                    for(var j=0; j<oLis.length;j++){
                                        oLis[j].index=j;
                                        oLis[j].onclick=function(thisobj,routesItem){
                                            return function(){
                                                thisobj._onRouteItemClick(this.index,routesItem);
                                            }
                                        }(this,routeObj);
                                    }
                                }
                                //html.setStyle(this.ui3SuggestWrap, 'display', 'none');
                            }
                        }),
                        error: function(error){
                            targetNode.innerHTML = "An unexpected error occurred: " + error;
                        }
                    };
                    dojo.io.script.get(jsonpArgs);
                }
            },

            _onRouteItemClick:function(itemIndex,routesItem){
                var partPointsStr;
                if (this.modeStr=="transit")
                {
                    partPointsStr=routesItem.steps[itemIndex][0].path;
                }else{
                    partPointsStr=routesItem.steps[itemIndex].path;
                }
                this.mapGPSPointsArr=[];
                var pathParts = partPointsStr.split(";");
                for(var i=0;i<pathParts.length;i++)
                {
                    var pointStr=pathParts[i];
                    var pointParts = pointStr.split(",");
                    var mapGPSPoints=new Point(Number(pointParts[0]),Number(pointParts[1]));
                    this.mapGPSPointsArr.push(mapGPSPoints);
                }
                this.isPartPathClick=true;
                this.BDToGPS(partPointsStr);
            },
            _activeViewDiv:function(thisViewDiv,actived,routesItem){
                this._removeViewDivClass();
                if(!actived){
                    html.addClass(thisViewDiv,'active');
                    html.addClass(thisViewDiv,'expand');
                    this._addBDPathToMap(routesItem);
                }
            },
            _removeViewDivClass:function(){
                /*var oUl=document.getElementById("nav_routes");
                 var oLis=oUl.getElementsByTagName("div");
                 for(var i=0; i<oLis.length;i++){
                 html.removeClass(oLis[i],'active');
                 html.removeClass(oLis[i],'expand');
                 }*/
                $("#nav_routes >div").each(function(){//遍历子DIV
                    $(this).removeClass("active");
                    $(this).removeClass("expand");
                });

            },
            _addBDPathToMap:function(routesItem){
                this.map.graphics.clear();
                this._addSEPointsToMap(routesItem);//画起点、终点(包含百度坐标转WGS84坐标)
                this._addPathsToMap(routesItem);//画导航路径(包含百度坐标转WGS84坐标)
            },
            //画起点、终点(包含百度坐标转WGS84坐标)
            originGPSPt:null,
            destinationGPSPt:null,
            _addSEPointsToMap:function(routesItem){
                var coords=routesItem.originLocation.lng+","+routesItem.originLocation.lat+";"
                    +routesItem.destinationLocation.lng+","+routesItem.destinationLocation.lat;
                originGPSPt=new Point(routesItem.originLocation.lng,routesItem.originLocation.lat);
                destinationGPSPt=new Point(routesItem.destinationLocation.lng,routesItem.destinationLocation.lat);
                var jsonpArgs = {
                    url: "http://api.map.baidu.com/geoconv/v1/",
                    callbackParamName: "callback",
                    content: {
                        output:"json",
                        coords:coords,
                        from: "1",//GPS设备获取的角度坐标，wgs84坐标
                        to:"5",//bd09ll(百度经纬度坐标)
                        ak:"oMvdENGYZmsGBZlo8MFffrQb"
                    },
                    load: lang.hitch(this,function(data){
                        if(data.status==0)
                        {
                            var originPt;
                            var destinationPt;
                            var originBDPoins;
                            var destinationBDPoint;
                            var rowsArr=data.result;
                            if(rowsArr.length>=1)
                            {
                                originBDPoins=new Point(rowsArr[0].x,rowsArr[0].y,this.map.spatialReference);
                                destinationBDPoint=new Point(rowsArr[1].x,rowsArr[1].y,this.map.spatialReference);
                            }
                            if(this.map.spatialReference.wkid==4326)
                            {
                                originPt=new Point((originGPSPt.x*2-originBDPoins.x),(originGPSPt.y*2-originBDPoins.y),this.map.spatialReference);
                                destinationPt=new Point((destinationGPSPt.x-destinationBDPoint.x),(destinationGPSPt.y*2-destinationBDPoint.y),this.map.spatialReference);
                            }
                            else if(this.map.spatialReference.isWebMercator())
                            {
                                originPt=new Point(commonUtils._lonToMercator(originGPSPt.x*2-originBDPoins.x),commonUtils._latToMercator(originGPSPt.y*2-originBDPoins.y),this.map.spatialReference);
                                destinationPt=new Point(commonUtils._lonToMercator(destinationGPSPt.x*2-destinationBDPoint.x),commonUtils._latToMercator(destinationGPSPt.y*2-destinationBDPoint.y),this.map.spatialReference);
                            }
                            var startSymbol=new PictureMarkerSymbol("jimu.js/magicgis/images/start_g.png",32,32);
                            var endSymbol=new PictureMarkerSymbol("jimu.js/magicgis/images/end_g.png",32,32);
                            startSymbol.setOffset(0, 16);
                            endSymbol.setOffset(0, 16);
                            var startGraphic=new Graphic(originPt,startSymbol);
                            var endGraphic=new Graphic(destinationPt,endSymbol);
                            this.map.graphics.add(startGraphic);
                            this.map.graphics.add(endGraphic);
                        }
                    }),
                    error: function(error){
                        targetNode.innerHTML = "An unexpected error occurred: " + error;
                    }
                };
                dojo.io.script.get(jsonpArgs);
            },

            //画导航路径(包含百度坐标转WGS84坐标)
            _addPathsToMap:function(routesItem){
                var contentsArr=routesItem.steps;
                var allPointsStr="";//总点String
                this.mapGPSPointsArr=[];//总原WGS84坐标点Array
                for (var i = 0; i < contentsArr.length; i++)
                {
                    var path="";//path分段点String
                    if (this.modeStr=="transit")
                    {
                        var partItemArr=contentsArr[i];
                        for (var m = 0; m < partItemArr.length; m++)
                        {
                            var itemPath=partItemArr[m].path;
                            if(m==partItemArr.length-1)
                            {
                                path+=itemPath;//path分段点String
                            }else
                            {
                                path+=(itemPath+";");
                            }
                        }
                    }
                    else{
                        path=contentsArr[i].path;

                    }
                    if(i==contentsArr.length-1)
                    {
                        allPointsStr+=path;
                    }else
                    {
                        allPointsStr+=(path+";");
                    }
                    var pathParts = path.split(";");
                    for (var j = 0; j < pathParts.length; j++)
                    {
                        var pointStr=pathParts[j];
                        var pointParts = pointStr.split(",");
                        var mapGPSPoints=new Point(Number(pointParts[0]),Number(pointParts[1]));
                        this.mapGPSPointsArr.push(mapGPSPoints);
                    }
                }
                this.lineSymbol.setColor(new Color([0, 139, 0]));
                this.isPartPathClick=false;
                this.BDToGPS(allPointsStr);
            },
            //百度坐标字符串转为WGS84并画线定位
            mapGPSPointsArr:null,//原WGS84坐标点数组
            mapBDPointsArr:null,//百度坐标点数组
            partsGroupArr:null,//点坐标分组(每次只能转100个点)
            partsGroupArrIndex:0,//分组索引
            BDToGPS:function(coords){
                this.mapBDPointsArr=[];
                var pathParts = coords.split(";");
                this.partsGroupArr=[];
                var partsGroupStr="";
                for (var j = 1; j <= pathParts.length; j++)
                {
                    if(j%100==0)
                    {
                        partsGroupStr+=pathParts[j-1].toString();
                        this.partsGroupArr.push(partsGroupStr);
                        partsGroupStr="";
                    }else
                    {
                        if(j == pathParts.length)
                        {
                            partsGroupStr+=pathParts[j-1].toString();
                            this.partsGroupArr.push(partsGroupStr);
                            partsGroupStr="";
                        }else
                        {
                            partsGroupStr+=(pathParts[j-1].toString()+";");
                        }
                    }
                }
                this.loading.show();
                this._coordsChange(); //递归查询
            },
            _coordsChange:function(){
                if(this.partsGroupArrIndex<this.partsGroupArr.length)
                {
                    var jsonpArgs = {
                        url: "http://api.map.baidu.com/geoconv/v1/",
                        callbackParamName: "callback",
                        content: {
                            output:"json",
                            coords:this.partsGroupArr[this.partsGroupArrIndex],
                            from: "1",//GPS设备获取的角度坐标，wgs84坐标
                            to:"5",//bd09ll(百度经纬度坐标)
                            ak:"oMvdENGYZmsGBZlo8MFffrQb"
                        },
                        load: lang.hitch(this,function(data){
                            if(data.status==0)
                            {
                                var rowsArr=data.result;
                                if(rowsArr.length>=1)
                                {
                                    if(rowsArr.length>=1)
                                    {
                                        for (var j = 0; j < rowsArr.length; j++)
                                        {
                                            var rowsObj=rowsArr[j];
                                            var lon=Number(rowsObj.x);
                                            var lat=Number(rowsObj.y);
                                            var mapBDPoints=new Point(lon,lat);
                                            this.mapBDPointsArr.push(mapBDPoints);
                                        }
                                    }
                                    this.partsGroupArrIndex++;
                                    this._coordsChange();
                                }
                            }
                        }),
                        error: function(error){
                            targetNode.innerHTML = "An unexpected error occurred: " + error;
                            this.loading.hide();
                        }
                    };
                    dojo.io.script.get(jsonpArgs);
                }else
                {
                    this.partsGroupArrIndex=0;
                    var pointsRing=[];
                    var pathsRing=[];
                    var lineGeometry=null;
                    var lineGraphic=null;
                    for (var i = 0; i < this.mapBDPointsArr.length; i++)
                    {
                        var mapPoint;
                        if(this.map.spatialReference.wkid==4326)
                        {
                            mapPoint=[(this.mapGPSPointsArr[i].x*2-this.mapBDPointsArr[i].x),(this.mapGPSPointsArr[i].y*2-this.mapBDPointsArr[i].y)];
                        }
                        else if(this.map.spatialReference.isWebMercator())
                        {
                            mapPoint=[commonUtils._lonToMercator((this.mapGPSPointsArr[i].x*2-this.mapBDPointsArr[i].x)),commonUtils._latToMercator((this.mapGPSPointsArr[i].y*2-this.mapBDPointsArr[i].y))];
                        }
                        pointsRing.push(mapPoint);
                    }
                    pathsRing.push(pointsRing);
                    lineGeometry=new Polyline(pathsRing);
                    lineGeometry.spatialReference=this.map.spatialReference;
                    this.map.setExtent(lineGeometry.getExtent());
                    //this.map.setLevel(this.map.getLevel()-1);
                    if(this.isPartPathClick){
                        this.partPathGraphic.setGeometry(lineGeometry);
                        this.map.graphics.add(this.partPathGraphic);
                    }else{
                        lineGraphic=new Graphic(lineGeometry,this.lineSymbol);
                        this.map.graphics.add(lineGraphic);
                    }
                    this.loading.hide();
                    return;
                }
            },

            _onBusClick:function(){
                this.modeStr="transit";
                this._removeRoutBtnClass();
                html.addClass(this.routeSearchboxContent,'bus');
            },
            _onDriveClick:function(){
                this.modeStr="driving";
                this._removeRoutBtnClass();
                html.addClass(this.routeSearchboxContent,'drive');
            },
            _onWalkClick:function(){
                this.modeStr="walking";
                this._removeRoutBtnClass();
                html.addClass(this.routeSearchboxContent,'walk');
            },
            _onBikeClick:function(){
                this.modeStr="riding";
                this._removeRoutBtnClass();
                html.addClass(this.routeSearchboxContent,'bike');
            },
            _removeRoutBtnClass:function(){
                html.removeClass(this.routeSearchboxContent,'bus');
                html.removeClass(this.routeSearchboxContent,'drive');
                html.removeClass(this.routeSearchboxContent,'walk');
                html.removeClass(this.routeSearchboxContent,'bike');
            },

            removeFocusUtil:function(){
                this.focusHandle.remove();
            },

            _onSwitchClick:function(){
                var tempStartObj = lang.clone(this.startObj);
                var tempEndObj = lang.clone(this.endObj);
                this.startObj=tempEndObj;
                this.endObj=tempStartObj;
                this.textStart.value=this.startObj?this.startObj.name:null;
                this.textEnd.value=this.endObj?this.endObj.name:null;
            }
        });
        return clazz;
    });