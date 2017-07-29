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
        'esri/geometry/Polyline',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        'dijit/Menu','dijit/MenuItem','dijit/MenuSeparator',
        'esri/toolbars/draw','esri/Color',
        'esri/geometry/geodesicUtils','esri/units','esri/geometry/webMercatorUtils',
        'dojo/on','dojo/Deferred','jimu/SpatialReference/wkidUtils','esri/units','esri/symbols/Font',
        'jimu/utils','esri/symbols/TextSymbol','dojo/query',"esri/symbols/SimpleMarkerSymbol","esri/symbols/PictureMarkerSymbol",
        "esri/config","esri/geometry/normalizeUtils","esri/tasks/GeometryService",
        "esri/tasks/BufferParameters",'jimu/PanelManager','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus",'jimu/magicgis/util/commonUtils',"jimu/magicgis/dijit/CinfoWindow",
        'jimu/dijit/LoadingIndicator',
        'esri/InfoTemplate',
        "dijit/layout/ContentPane",
        'dojo/text!./templates/MatterItem.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               GraphicsLayer,Graphic,array,parser,Point,Polygon,Polyline,
               SimpleLineSymbol,SimpleFillSymbol,Menu,MenuItem,MenuSeparator,
               Draw,Color,GeodesicUtils,Units,WebMercatorUtils,on,Deferred,wkidUtils,esriUnits,
               Font,jimuUtils,TextSymbol,query,SimpleMarkerSymbol,PictureMarkerSymbol,esriConfig,normalizeUtils,
               GeometryService,BufferParameters,PanelManager,_WidgetBase,_TemplatedMixin,focusUtil,commonUtils,CinfoWindow,
               LoadingIndicator,InfoTemplate,ContentPane,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-matteritem',
            name: 'MatterItem',
            matterType:null,
            urlArray:null,

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
                this.data=params.data;
                this.matterType=params.matterType;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.location;
            },

            setMap:function(map){
                if(map){
                    this.map = map;
                }
            },

            postCreate:function(){
                this.inherited(arguments);
                if(this.matterType=="alarm"){
                    this.itemName1.innerHTML=this.data.TYPE;
                    this.itemName2.innerHTML=this.data.OCCURRENCETIME!=null?this.data.OCCURRENCETIME:'';
                    this.itemName3.innerHTML="报警人员："+this.data.PERSON;
                }else if(this.matterType=="matter"){
                    this.itemName1.innerHTML=this.data.NAME;
                    this.itemName2.innerHTML="电话："+this.data.PHONE;
                    this.itemName3.innerHTML="时间："+(this.data.OCCURRENCETIME!=null?this.data.OCCURRENCETIME:'');
                }
                this.urlArray=[];
                //显示图片
                if(this.data.ISIMAGE){
                    var imgUrls=this.data.ISIMAGE.replace(/\\/g, "/");
                    if(imgUrls.indexOf("#") != -1){
                        this.urlArray = imgUrls.split("#");
                    }else{
                        this.urlArray.push(imgUrls);
                    }
                }else{
                    html.setStyle(this.imgIconDiv,"display","none");
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

            },

            _onMoreClick:function(){
                var xc = commonUtils._lonToMercator(Number(this.data.LON));
                var yc = commonUtils._latToMercator(Number(this.data.LAT));
                if(this.data.LON!="" && this.data.LON!=0 && this.data.LON!=null){
                    var mp = new Point(xc,yc,this.map.spatialReference);
                    var infoTitle="";
                    var alianValues;
                    if(this.matterType=="alarm"){
                        alianValues={
                            TYPE:"报警类型",
                            PERSON:"报警人",
                            PHONE:"联系电话",
                            LON:"经度",
                            LAT:"纬度",
                            OCCURRENCETIME:"发生时间",
                            ADDRESS:"发生地点"
                        };
                        this.map.infoWindow.setTitle("紧急报警");
                        infoTitle="紧急报警";
                    }else if(this.matterType=="matter"){
                        alianValues={
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
                        this.map.infoWindow.setTitle("事项信息");
                        infoTitle="事项信息";
                    }
                    var cinfoData={
                        dataValues:this.data,
                        alianValues:alianValues,
                        location:mp,
                        viewsPanel:"1,2,3",
                        imgUrl:this.data.ISIMAGE
                    };
                    var cinfoWindow=new CinfoWindow({
                        map:this.map,
                        data:cinfoData
                    });
                    /*this.map.infoWindow.setContent(cinfoWindow.domNode);
                    this.map.infoWindow.show(mp);*/
                    var windowContent= function() {
                        var divContent = new ContentPane({
                            content:cinfoWindow.domNode,
                            style:"padding:0px"
                        });
                        return cinfoWindow.domNode;
                    };
                    var layerInfoTemplate =new InfoTemplate(infoTitle,windowContent);//自定义地图info内容
                    var infoGraphics=[new Graphic(mp, null, null, layerInfoTemplate)];
                    this.map.infoWindow.setFeatures(infoGraphics);
                    this.map.infoWindow.show(mp);

                    this.map.centerAt(mp);
                }else{
                    alert("没有坐标点，无法定位");
                }
            },

            _onPicClick:function(){
                var imgSrcArr=[];
                for(var i=0;i<this.urlArray.length;i++){
                    var imgData={
                        "alt": this.data.DESCRIPTION,
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
                    '<p class="bigImageOperation"><span title="原图" class="big_play_origin"></span></p>' +
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
                    function(){
                        var describ="描述："+imgSrcArr[0].alt;
                        return describ;
                    }() +
                    '</div>'+
                    '</div>',
                    success: function(layerE){
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