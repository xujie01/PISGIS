define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/connect',
        'jimu/BaseWidget',
        'dojo/_base/html',
        'dojo/dom-construct',
        "dojo/topic",
        'dojo/_base/array',
        'dojox/xml/parser','dojo/query','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'jimu/dijit/LoadingIndicator',
        'dojo/text!./templates/EditInfoWindow.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare, connect,BaseWidget,html,domConstruct,topic,
               array,parser,query,_WidgetBase,_TemplatedMixin,LoadingIndicator,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-editinfowindow',
            name: 'EditInfoWindow',
            map:null,
            graphic:null,
            visibleRange:null,
            featureType:null,

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
                this.graphic=params.graphic;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.editinfo;
            },

            setMap:function(map){
                if(map){
                    this.map = map;
                }
            },

            postCreate:function(){
                this.inherited(arguments);
                this._initSelect();
                this.nameNode.value=this.graphic.attributes.MAPFEATURENAME;
                this.typeNode.setValue(this.graphic.attributes.MAPFEATURETYPE);
                this.departmentNode.value=this.graphic.attributes.DEPARTMENTNAME;
                this.describNode.value=this.graphic.attributes.MAPFEATUREDESCRIB;
                this.visibleNode.setValue(this.graphic.attributes.VISIBLERANGE);
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

            _initSelect:function(){
                this.visibleRange=[
                    {value:0,label:this.nls.nosee},
                    {value:1,label:this.nls.see}
                ];
                for(var i=0;i<this.visibleRange.length;i++){
                    var option = {
                        value:this.visibleRange[i].value,
                        label:this.visibleRange[i].label
                    };
                    this.visibleNode.addOption(option);
                };
                this.featureType=[
                    {value:"0",label:this.nls.featureType0},
                    {value:"1",label:this.nls.featureType1},
                    {value:"2",label:this.nls.featureType2},
                    {value:"3",label:this.nls.featureType3},
                    {value:"4",label:this.nls.featureType4}
                ];
                for(var j=0;j<this.featureType.length;j++){
                    var option = {
                        value:this.featureType[j].value,
                        label:this.featureType[j].label
                    };
                    this.typeNode.addOption(option);
                };
            },

            _onSaveClick:function(){
                this.graphic.attributes.MAPFEATURENAME=this.nameNode.value;
                this.graphic.attributes.MAPFEATURETYPE=this.typeNode.value;
                this.graphic.attributes.DEPARTMENTNAME=this.departmentNode.value;
                this.graphic.attributes.MAPFEATUREDESCRIB=this.describNode.value;
                this.graphic.attributes.VISIBLERANGE=this.visibleNode.value;
                topic.publish("edit-completed",this.graphic)
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