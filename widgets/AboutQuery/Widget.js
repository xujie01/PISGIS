define(['dojo/_base/lang',
        'dojo/_base/declare',
        'jimu/BaseWidget',
        'dojox/grid/DataGrid',
        'dojo/data/ItemFileWriteStore',
        'jimu/dijit/LoadingShelter',
        'dojo/dom-style',
        'dojo/_base/html',
        "jimu/magicgis/configProject"
    ],
    function (lang, declare, BaseWidget,DataGrid,ItemFileWriteStore,LoadingShelter,domStyle,html,configProject) {
        return declare([BaseWidget], {
            //templateString:template,
            baseClass: 'jimu-widget-aboutquery',
            name: 'AboutQuery',
            grid:null,
            queryUserLog:'',

            postCreate: function () {
                this.inherited(arguments);
                this.shelter = new LoadingShelter({
                    hidden: true
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();
            },

            startup: function () {
                this.inherited(arguments);
                this.parseXML();
            },

            parseXML: function () {
                //解析配置文件内容
                //this.queryUserLog = lang.clone(this.config.queryUserLog);
                this.queryUserLog=configProject.queryUserLog;
            },

            getAction:function(){
                //从服务器获取数据来的
                /*dojo.xhrPost({
                    url:this.queryUserLog,
                    handleAs:"text",
                    content:{name:"登陆统计查询"},
                    load:lang.hitch(this,function(response){
                        var dataJson = response;
                        console.log("登陆action成功：");
                        var list= dojo.fromJson(dataJson);

                        this.shelter.hide();
                        domStyle.set(this.logoGrid,"visibility","visible");
                        html.setAttr(this.labelTitle, 'innerHTML', this.nls.normalLabel);

                        this.getData2Grid(list);
                    }),
                    error:lang.hitch(this,function(response){
                        console.log("登陆ction失败："+response);

                        this.shelter.hide();
                        domStyle.set(this.logoGrid,"visibility","visible");
                        if(this.grid) this.grid.setStore(null);
                        html.setAttr(this.labelTitle, 'innerHTML', this.nls.noLabel);
                    }),
                });*/
                console.log("登陆action成功：");
                var list= dojo.fromJson('[{"t":"2017-07-18","count":145,"unit_01":17,"unit_02":1,"unit_03":124,"unit_04":2,"unit_05":1},{"t":"2017-07-17","count":162,"unit_01":23,"unit_02":0,"unit_03":139,"unit_04":0,"unit_05":0},{"t":"2017-07-16","count":101,"unit_01":9,"unit_02":1,"unit_03":91,"unit_04":0,"unit_05":0},{"t":"2017-07-15","count":188,"unit_01":11,"unit_02":0,"unit_03":177,"unit_04":0,"unit_05":0},{"t":"2017-07-14","count":145,"unit_01":21,"unit_02":0,"unit_03":124,"unit_04":0,"unit_05":0},{"t":"2017-07-13","count":139,"unit_01":25,"unit_02":0,"unit_03":110,"unit_04":3,"unit_05":1},{"t":"2017-07-12","count":130,"unit_01":11,"unit_02":0,"unit_03":116,"unit_04":1,"unit_05":2},{"t":"总计","count":1010,"unit_01":117,"unit_02":2,"unit_03":881,"unit_04":6,"unit_05":4}]');

                this.shelter.hide();
                domStyle.set(this.logoGrid,"visibility","visible");
                html.setAttr(this.labelTitle, 'innerHTML', this.nls.normalLabel);

                this.getData2Grid(list);
            },

            getData2Grid:function(list){
                var data={
                    identifier:"id",
                    items:[]
                };
                for(var i= 0,l=list.length;i<l;i++){
                    data.items.push(lang.mixin({id:i+1},list[i%l]));
                }
                var store=new ItemFileWriteStore({data:data});

                var layout=[[
                    {'name':this.nls.dateLabel,'field':'t','width':'85px'},
                    {'name':this.nls.gdgsLabel,'field':'unit_01','width':'70px'},
                    {'name':this.nls.xqdsLabel,'field':'unit_02','width':'70px'},
                    {'name':this.nls.bjtrqLabel,'field':'unit_03','width':'75px'},
                    {'name':this.nls.xbgdLabel,'field':'unit_04','width':'70px'},
                    {'name':this.nls.xngdLabel,'field':'unit_05','width':'70px'},
                    {'name':this.nls.totalLabel,'field':'count','width':'70px'}
                ]];

                if(!this.grid){
                    this.grid=new DataGrid({
                            id:'logoGrid',
                            store:store,
                            structure:layout,
                            rowSelector:'20px',
                            autoWidth:true,
                            autoHeight:true,
                            rowsPerPage:10
                        },
                        this.gridDivNode);
                    this.grid.startup();
                }else{
                    this.grid.setStore(store);
                }

            },

            onOpen: function () {
               domStyle.set(this.logoGrid,"visibility","hidden");//隐藏
                this.shelter.show();
                this.getAction();
            },

            onClose: function () {
            },

            onMinimize: function () {
            },

            onMaximize: function () {
            },

            onSignIn: function (credential) {
            },

            onSingnOut: function () {
            }
        });
    });