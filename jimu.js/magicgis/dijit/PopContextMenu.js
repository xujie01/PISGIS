define([ 'dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'dojo/_base/html',
        'dojox/xml/parser','dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'dojo/text!./templates/PopContextMenu.html',
        'dojo/Evented'
    ],
    function ( lang,_WidgetsInTemplateMixin,declare,html,parser,_WidgetBase,_TemplatedMixin,template) {
        var clazz=declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin],{
            templateString:template,
            baseClass: 'jimu-widget-popcontextmenu',
            name: 'PopContextMenu',

            constructor: function(/*graphicsLayer, deletedGraphics*/ params){
                this.map = params.map;
            },

            postMixInProperties:function(){
                this.nls = window.jimuNls.mappipeline;
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