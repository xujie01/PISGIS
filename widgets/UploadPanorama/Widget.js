define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'esri/graphic',
        'dojox/xml/parser',
        'esri/geometry/Point',
        'jimu/dijit/Message',
        'jimu/dijit/LoadingShelter',
        'esri/toolbars/draw','dojo/Deferred',"esri/symbols/PictureMarkerSymbol",'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',"dijit/focus",'jimu/magicgis/util/commonUtils',
        'jimu/dijit/LoadingIndicator',
        "jimu/magicgis/configProject",
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,Graphic,parser,Point,Message,LoadingShelter,
               Draw,Deferred,PictureMarkerSymbol,_WidgetBase,_TemplatedMixin,focusUtil,commonUtils,LoadingIndicator,configProject) {
        var clazz=declare([BaseWidget,_TemplatedMixin, _WidgetsInTemplateMixin],{
            //templateString:template,
            baseClass: 'jimu-widget-uploadpanorama',
            name: 'UploadPanorama',
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
                this.shelter = new LoadingShelter({
                    hidden: true
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();
                this.uploadPicture=configProject.uploadImage;
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
                    lonStr=(evt.geometry.x).toFixed(5);
                    this.lonDegree.value = lonStr;
                    latStr=(evt.geometry.y).toFixed(5);
                    this.latDegree.value = latStr;
                }
                else if(this.map.spatialReference.isWebMercator())
                {
                    lonStr=(commonUtils._MercatorToLon(evt.geometry.x)).toFixed(5);
                    this.lonDegree.value = lonStr;
                    latStr=(commonUtils._MercatorToLat(evt.geometry.y)).toFixed(5);
                    this.latDegree.value = latStr;
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
                this.lonDegree.value="";
                this.attitudez.value="";
            },

            _onOkClick: function () {
                if (this.lonDegree.value==null||this.lonDegree.value=="")
                {
                    this.lonDegree.value="0";
                }
                if(Number(this.lonDegree.value)>180||Number(this.lonDegree.value)<0)
                {
                    layer.msg(this.nls.checkLatLabel);
                    return;
                }
                if (this.latDegree.value==null||this.latDegree.value=="")
                {
                    this.latDegree.value="0";
                }
                if(Number(this.latDegree.value)>90||Number(this.latDegree.value)<0)
                {
                    layer.msg(this.nls.checkLatLabel);
                    return;
                }
                var mapPoint,graphic;
                if(this.map.spatialReference.wkid==4326)
                {
                    mapPoint=new Point(Number(this.lonDegree.value),Number(this.latDegree.value),this.map.spatialReference);
                }
                else if(this.map.spatialReference.isWebMercator())
                {
                    mapPoint=new Point(commonUtils._lonToMercator(Number(this.lonDegree.value)),commonUtils._latToMercator(Number(this.latDegree.value)),this.map.spatialReference);
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
                        this.shelter.show();
                        dojo.xhrPost({
                            url:this.getEXIFPicture,
                            handleAs:"text",
                            content:{pictureName:pictureName},
                            load:lang.hitch(this,function(response){
                                this.shelter.hide();
                                if(response.toString()!="")
                                {
                                    var XYArr=response.toString().split(",");
                                    var latStr=XYArr[0].toString();
                                    var latDegree=latStr.substr(0,latStr.indexOf("°"));
                                    var latFen=latStr.substr(latStr.indexOf("°")+1,latStr.indexOf("'")-latStr.indexOf("°")-1);
                                    var latSec=latStr.substr(latStr.indexOf("'")+1,latStr.indexOf('"')-latStr.indexOf("'")-1);
                                    this.latDegree.value=(Number(latDegree)+Number(latFen)/60+Number(latSec)/3600).toFixed(5);
                                    var lonStr=XYArr[1].toString();
                                    var lonDegree=lonStr.substr(0,lonStr.indexOf("°"));
                                    var lonFen=lonStr.substr(lonStr.indexOf("°")+1,lonStr.indexOf("'")-lonStr.indexOf("°")-1);
                                    var lonSec=lonStr.substr(lonStr.indexOf("'")+1,lonStr.indexOf('"')-lonStr.indexOf("'")-1);
                                    this.lonDegree.value=(Number(lonDegree)+Number(lonFen)/60+Number(lonSec)/3600).toFixed(5);

                                    this._onOkClick();
                                }else if(response.toString()=="")
                                {
                                    layer.msg(this.nls.noGPS);
                                }
                            }),
                            error:lang.hitch(this,function(response){
                                this.shelter.hide();
                                console.log("action failed："+response);
                            }),
                        });
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

            _onUploadClick: function () {
                if(Number(this.lonDegree.value)>180||Number(this.lonDegree.value)<0||this.lonDegree.value==null||this.lonDegree.value=="")
                {
                    layer.msg(this.nls.checkLatLabel);
                    return;
                }
                if(Number(this.latDegree.value)>90||Number(this.latDegree.value)<0||this.latDegree.value==null||this.latDegree.value=="")
                {
                    layer.msg(this.nls.checkLatLabel);
                    return;
                }
                if(Number(this.attitudez.value)>360||Number(this.attitudez.value)<0||this.attitudez.value==null||this.attitudez.value=="")
                {
                    layer.msg("旋转角不正确");
                    return;
                }
                var popup = new Message({
                    message: "是否上传",
                    titleLabel: "提示",
                    autoHeight: true,
                    buttons: [{
                        label: "确定",
                        onClick: lang.hitch(this, function() {
                            //this._onUpload();
                            layer.msg("模拟上传成功");
                            popup.close();
                        })
                    }, {
                        label: "取消"
                    }]
                });
            },

            _onUpload:function () {
                var fileObj = this.picIcon.files[0]; // 获取文件对象
                var FileController = configProject.uploadPicture; // 接收上传文件的后台地址
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
                    form.append("lon", this.lonDegree.value);
                    form.append("lat", this.latDegree.value);
                    form.append("attitudez", this.attitudez.value);
                    this.shelter.show();
                    // XMLHttpRequest 对象
                    var xhr = new XMLHttpRequest();
                    xhr.open("post", FileController, true);
                    xhr.onload = lang.hitch(this,function () {
                        this.shelter.hide();
                        if(event.target.response=="1"){
                            layer.msg("上传成功");
                        }
                    });
                    xhr.send(form);
                }else{
                    layer.msg("上传失败");
                }
            }
        });
        return clazz;
    });