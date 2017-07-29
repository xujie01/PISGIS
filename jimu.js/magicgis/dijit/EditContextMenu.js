define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/html',
        'dojox/xml/parser','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'dojo/text!./templates/EditContextMenu.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,html,parser,_WidgetBase,_TemplatedMixin,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-editcontextmenu',
            name: 'EditContextMenu',

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
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
            },

            startup: function () {
                this.inherited(arguments);
            },

            setGraphic:function(graphic){
                if(graphic&&graphic.geometry.type=="point"&&graphic.symbol.declaredClass != "esri.symbol.TextSymbol"){
                    html.addClass(dojo.byId("cmitem_shap"), 'unable');
                    html.addClass(dojo.byId("cmitem_rotate"), 'unable');
                }else{
                    html.removeClass(dojo.byId("cmitem_shap"), 'unable');
                    html.removeClass(dojo.byId("cmitem_rotate"), 'unable');
                }
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