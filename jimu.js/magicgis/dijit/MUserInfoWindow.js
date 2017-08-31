define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'dojo/_base/array',
        'dojo/query','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'jimu/dijit/LoadingIndicator',
        "jimu/magicgis/configProject",
        'dojo/text!./templates/MUserInfoWindow.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               array,query,_WidgetBase,_TemplatedMixin,LoadingIndicator,configProject,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-muserinfowindow',
            name: 'MUserInfoWindow',

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
                this.data=params.data;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.monitor;
            },

            setMap:function(map){
                if(map){
                    this.map = map;
                }
            },

            postCreate:function(){
                this.inherited(arguments);
                this.mUSERNAME.innerHTML=this.data.USERNAME+"("+this.data.SEX+")";
                this.mLOCATIONDATE.innerHTML=this.data.LOCATIONDATE;
                this.mSPEED.innerHTML=this.data.SPEED+"km/h";
                this.mBATTERY.innerHTML=this.data.BATTERY+"%";
                this.mPHONE.innerHTML=this.data.PHONE;
                this.mUNITNAME.innerHTML=this.data.UNITNAME;
                this.mUSERTYPE.innerHTML=this.data.USERTYPE;
                this.mDEVTYPE.innerHTML=this.data.DEVTYPE;
                this.mWORKTIME.innerHTML=this.data.WORKTIME;
                this.mSUBLOCATION.innerHTML=this.data.SUBLOCATION;
                this.mALLPOINT.innerHTML=this.data.ALLPOINT;
                this.mOKPOINT.innerHTML=this.data.OKPOINT;
            },

            startup: function () {
                this.inherited(arguments);
                if (!this.loading) {
                    this.loading = new LoadingIndicator({
                        hidden: true
                    });
                }
                this.loading.placeAt(window.jimuConfig.layoutId);
                this._changeStates("NORMAL");
            },

            //短信状态视图切换
            _changeStates:function(geoTypes){
                var items = query('.draw-item', this.domNode);
                items.style('display', 'none');
                array.forEach(items, lang.hitch(this, function(item){
                    var geoType = item.getAttribute('data-geotype');
                    var display = (geoTypes==geoType);
                    html.setStyle(item, 'display', display ? 'block' : 'none');
                }));
            },

            _onOkClick:function(){
                /*dojo.xhrPost({
                    url:configProject.sendMessageGis,
                    handleAs:"text",
                    content:{phonenum:"15030690586",
                        msgcontent:this.mSMS.value
                    },
                    load:lang.hitch(this,function(response){
                        var dataJson = response;
                        if(dataJson.toString()=="sucess")
                        {
                            layer.msg(this.nls.success);
                        }else
                        {
                            layer.msg(this.nls.fail);
                        }
                    }),
                    error:lang.hitch(this,function(response){
                        layer.msg(this.nls.fail+"："+response);
                    }),
                });*/
                layer.msg(this.nls.success);
            },

            _onBackClick:function(){
                this._changeStates("NORMAL");
            },

            _onSMSClick:function(){
                this._changeStates("SMS");
            },

            _onKeyPointClick:function(){
                topic.publish('KeyPointChange',this.data.PERSONID,this.data.selectDate);
            },

            _onTrackClick:function(){
                topic.publish('TrackChange',this.data,"0");
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