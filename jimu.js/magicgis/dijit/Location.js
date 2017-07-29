define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'esri/graphic',
        'dojox/xml/parser',
        'esri/geometry/Point',
        'esri/toolbars/draw','dojo/Deferred',"esri/symbols/PictureMarkerSymbol",'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus",'jimu/magicgis/util/commonUtils',
        'jimu/dijit/LoadingIndicator','dojo/request/xhr',
        'dojo/text!./templates/Location.html',
        "jimu/magicgis/configProject",
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,Graphic,parser,Point,
               Draw,Deferred,PictureMarkerSymbol,_WidgetBase,_TemplatedMixin,focusUtil,commonUtils,LoadingIndicator,xhr,template,configProject) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-location',
            name: 'Location',
            picMarker:new PictureMarkerSymbol("jimu.js/images/EsriBluePinCircle26.png", 26, 26),
            tb:null,
            uploadPicture:null,
            getEXIFPicture:null,

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
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
                this.uploadPicture=configProject.uploadPicture;
                this.getEXIFPicture=configProject.getEXIFPicture;
                this.tb = new Draw(this.map);
                this.tb.on("draw-end", lang.hitch(this,this.addGraphic));
            },

            addGraphic:function(evt){
                //deactivate the toolbar and clear existing graphics
                this.tb.deactivate();
                this.map.graphics.clear();
                this.map.graphics.add(new Graphic(evt.geometry, this.picMarker));
                html.removeClass(this.pointIcon,'active');
                var lonStr,lonminuteStr,lonsecondStr,latStr,latminuteStr,latsecondStr;
                if(this.map.spatialReference.wkid==4326)
                {
                    lonStr=(evt.geometry.x).toFixed(10);
                    this.lonDegree.value = lonStr.substr(0,lonStr.indexOf("."));
                    lonminuteStr=(Number(lonStr.substr(lonStr.indexOf(".")))*60).toString();
                    this.lonFen.value = lonminuteStr.substr(0,lonminuteStr.indexOf("."));
                    lonsecondStr=(Number(lonminuteStr.substr(lonminuteStr.indexOf(".")))*60).toString();
                    this.lonSec.value = lonsecondStr.substr(0,lonsecondStr.indexOf("."));
                    latStr=(evt.geometry.y).toFixed(10);
                    this.latDegree.value = latStr.substr(0,latStr.indexOf("."));
                    latminuteStr=(Number(latStr.substr(latStr.indexOf(".")))*60).toString();
                    this.latFen.value = latminuteStr.substr(0,latminuteStr.indexOf("."));
                    latsecondStr=(Number(latminuteStr.substr(latminuteStr.indexOf(".")))*60).toString();
                    this.latSec.value = latsecondStr.substr(0,latsecondStr.indexOf("."));
                }
                else if(this.map.spatialReference.isWebMercator())
                {
                    lonStr=(commonUtils._MercatorToLon(evt.geometry.x)).toFixed(10);
                    this.lonDegree.value = lonStr.substr(0,lonStr.indexOf("."));
                    lonminuteStr=(Number(lonStr.substr(lonStr.indexOf(".")))*60).toString();
                    this.lonFen.value = lonminuteStr.substr(0,lonminuteStr.indexOf("."));
                    lonsecondStr=(Number(lonminuteStr.substr(lonminuteStr.indexOf(".")))*60).toString();
                    this.lonSec.value = lonsecondStr.substr(0,lonsecondStr.indexOf("."));
                    latStr=(commonUtils._MercatorToLat(evt.geometry.y)).toFixed(10);
                    this.latDegree.value = latStr.substr(0,latStr.indexOf("."));
                    latminuteStr=(Number(latStr.substr(latStr.indexOf(".")))*60).toString();
                    this.latFen.value = latminuteStr.substr(0,latminuteStr.indexOf("."));
                    latsecondStr=(Number(latminuteStr.substr(latminuteStr.indexOf(".")))*60).toString();
                    this.latSec.value = latsecondStr.substr(0,latsecondStr.indexOf("."));
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

            onOpen: function () {
            },

            onClose:function(){

            },

            /*destroy:function(){
                this.inherited(arguments);
            },*/

            _onResetClick: function () {
                html.setStyle(this.localImag, 'display', 'none');
                this.latDegree.value="";
                this.latFen.value="";
                this.latSec.value="";
                this.lonDegree.value="";
                this.lonFen.value="";
                this.lonSec.value="";
            },

            _onOkClick: function () {
                if (this.lonDegree.value==null||this.lonDegree.value=="")
                {
                    this.lonDegree.value="0";
                }
                if(this.lonFen.value==null||this.lonFen.value=="")
                {
                    this.lonFen.value="0";
                }
                if(this.lonSec.value==null||this.lonSec.value=="")
                {
                    this.lonSec.value="0";
                }
                if(Number(this.lonDegree.value)>180||Number(this.lonDegree.value)<0||Number(this.lonFen.value)>60||Number(this.lonFen.value)<0||Number(this.lonSec.value)>60||Number(this.lonSec.value)<0)
                {
                    layer.msg(this.nls.checkLatLabel);
                    return;
                }
                if (this.latDegree.value==null||this.latDegree.value=="")
                {
                    this.latDegree.value="0";
                }
                if(this.latFen.value==null||this.latFen.value=="")
                {
                    this.latFen.value="0";
                }
                if(this.latSec.value==null||this.latSec.value=="")
                {
                    this.latSec.value="0";
                }
                if(Number(this.latDegree.value)>90||Number(this.latDegree.value)<0||Number(this.latFen.value)>60||Number(this.latFen.value)<0||Number(this.latSec.value)>60||Number(this.latSec.value)<0)
                {
                    layer.msg(this.nls.checkLatLabel);
                    return;
                }
                var mapPoint,graphic;
                if(this.map.spatialReference.wkid==4326)
                {
                    mapPoint=new Point(Number(this.lonDegree.value)+Number(this.lonFen.value)/60+Number(this.lonSec.value.text)/3600,Number(this.latDegree.value)+Number(this.latFen.value)/60+Number(this.latSec.value)/3600,this.map.spatialReference);
                }
                else if(this.map.spatialReference.isWebMercator())
                {
                    mapPoint=new Point(commonUtils._lonToMercator(Number(this.lonDegree.value)+Number(this.lonFen.value)/60+Number(this.lonSec.value)/3600),commonUtils._latToMercator(Number(this.latDegree.value)+Number(this.latFen.value)/60+Number(this.latSec.value)/3600),this.map.spatialReference);
                }
                graphic=new Graphic(mapPoint,this.picMarker);
                this.map.centerAt(mapPoint);
                this.map.graphics.clear();
                this.map.graphics.add(graphic);
            },

            _onLocation: function (event) {
                var target = event.target || event.srcElement;
                var isSelected = html.hasClass(target, 'active');

                //toggle tools on and off
                if(isSelected){
                    html.removeClass(this.pointIcon,'active');
                    if(this.tb){
                        this.tb.deactivate();
                    }
                }else{
                    html.addClass(this.pointIcon, 'active');
                    this.tb.activate(Draw.POINT);
                }
            },

            _onPicture: function () {
                var fileObj = this.picIcon.files[0]; // 获取文件对象
                var FileController = this.uploadPicture; // 接收上传文件的后台地址
                var f=this.picIcon.value;
                if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(f))
                {
                    layer.msg(this.nls.imgType)
                    return false;
                }

                if(fileObj){
                    html.setStyle(this.localImag, 'display', 'block');
                    this.localPreview.src = window.URL.createObjectURL(fileObj);
                    // FormData 对象
                    var form = new FormData();
                    form.append("file", fileObj);// 文件对象

                    // XMLHttpRequest 对象
                    var xhr = new XMLHttpRequest();
                    xhr.open("post", FileController, true);
                    xhr.onload = lang.hitch(this,function () {
                        //layer.msg(xhr.responseText);
                        var pictureName = this.picIcon.value.substr(this.picIcon.value.lastIndexOf('\\')+1,this.picIcon.value.length-1);
                        /*dojo.xhrPost({
                            url:this.getEXIFPicture,
                            handleAs:"text",
                            content:{pictureName:pictureName},
                            load:lang.hitch(this,function(response){
                                if(response.toString()!="")
                                {
                                    var XYArr=response.toString().split(",");
                                    var latStr=XYArr[0].toString();
                                    this.latDegree.value=latStr.substr(0,latStr.indexOf("°"));
                                    this.latFen.value=latStr.substr(latStr.indexOf("°")+1,latStr.indexOf("'")-latStr.indexOf("°")-1);
                                    this.latSec.value=latStr.substr(latStr.indexOf("'")+1,latStr.indexOf('"')-latStr.indexOf("'")-1);
                                    var lonStr=XYArr[1].toString();
                                    this.lonDegree.value=lonStr.substr(0,lonStr.indexOf("°"));
                                    this.lonFen.value=lonStr.substr(lonStr.indexOf("°")+1,lonStr.indexOf("'")-lonStr.indexOf("°")-1);
                                    this.lonSec.value=lonStr.substr(lonStr.indexOf("'")+1,lonStr.indexOf('"')-lonStr.indexOf("'")-1);

                                    this._onOkClick();
                                }else if(response.toString()=="")
                                {
                                    layer.msg(this.nls.noGPS);
                                }
                            }),
                            error:lang.hitch(this,function(response){
                                console.log("action failed："+response);
                            }),
                        });*/
                        layer.msg("模拟提取成功。");
                    });
                    xhr.send(form);
                }else{
                    layer.msg(this.nls.noImg);
                }
            },

            setMaxHeight:function(maxHeight){
                /*html.setStyle(this.nav_container, 'max-height', (document.documentElement.clientHeight-310)+'px');*/
                /*html.setStyle(this.h_groupGrid, 'height', (maxHeight+70)+'px');
                if(this.grid)this.grid.resize();*/
            },
        });
        return clazz;
    });