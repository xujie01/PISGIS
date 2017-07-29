define(['dojo/_base/lang',
        'dojo/_base/declare',
        'dijit/Dialog',
        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'esri/layers/GraphicsLayer',
        'dojo/topic',
        "esri/symbols/SimpleMarkerSymbol",
        "dojo/_base/Color",
        "esri/graphic",
        'esri/geometry/Point',
        'jimu/dijit/Popup',
        'dojox/xml/parser',
        'esri/symbols/PictureMarkerSymbol',
        'esri/geometry/Polyline',
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/symbols/Font",
        "esri/symbols/TextSymbol"
    ],
    function (lang, declare, Dialog,_WidgetBase, _TemplatedMixin,GraphicsLayer,topic,SimpleMarkerSymbol,Color,
              Graphic,Point,Popup,parser,PictureMarkerSymbol,Polyline,SimpleLineSymbol,SimpleFillSymbol,Font,TextSymbol) {
        return declare("MeasureGraphicsLayer",esri.layers.GraphicsLayer, {//测量图层
           type:"Measure",
           mySymbol:null,
           graphicsArray:new Array(),//点、标注、删除图标
           graphicsLayer:null,//即动态图层drawlayer
           folderUrl:"",

            constructor: function (folderUrl) {
                this.folderUrl=folderUrl;
                this.mySymbol=new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE,6,new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new dojo.Color([255,0,0]),3),
                    new dojo.Color("#FFFF66"));
                this.on("click",lang.hitch(this,this.clickDeleteSymbol));
            },

            showPoint:function(mp,sierialId){
                var pointGra=new Graphic();
                pointGra.id=sierialId;
                pointGra.geometry=mp;
                pointGra.symbol=this.mySymbol;
                this.add(pointGra);
                this.graphicsArray.push(pointGra);
            },

            showText:function(mp,text,end,sierialId){
              var textSymbol;
                if(end){
                    var font=new Font("12px",Font.STYLE_NORMAL,Font.VARIANT_NORMAL,Font.WEIGHT_BOLD);
                    textSymbol=new TextSymbol(text+"",font,new Color([255,0,0]));
                    textSymbol.setOffset(0,5);
                }
                else{
                    var font=new Font("10px",Font.STYLE_NORMAL,Font.VARIANT_NORMAL,Font.WEIGHT_BOLD);
                    textSymbol=new TextSymbol(text+"",font,new Color([255,123,0]));
                    textSymbol.setOffset(0,5);
                }
                //textGra.symbol=textSymbol;
                var textGra=new Graphic(mp,textSymbol);
                textGra.id=sierialId;
                this.add(textGra);
                this.graphicsArray.push(textGra);
            },

            showDeleteSymbol:function(mp,measureGra,sierialId){
              console.log("添加了DeleteSymbol");
                var sym=new PictureMarkerSymbol(this.folderUrl+"images/cancel_red.png",16,16);
                sym.setOffset(10,-5);
                var graDelete=new Graphic(mp,sym);
                graDelete.id="DeleteSymbol"+sierialId;
                this.add(graDelete);
                this.graphicsArray.push(graDelete);
            },

            clickDeleteSymbol:function(evt){
              console.log("jinleile");
              if(evt.graphic!=undefined&&evt.graphic.id.indexOf("DeleteSymbol")>=0){
                  /*this.graphicsLayer.clear();
                  for(var i=0;i<this.graphicsArray.length;i++){
                      this.remove(this.graphicsArray[i]);
                  }
                  this.graphicsArray=new Array();*/
                  var evtGraphic=evt.graphic;
                  var graphics=this.graphicsLayer.graphics;
                  for(var i=0;i<graphics.length;i++){
                      if(graphics[i].id==evtGraphic.id||("DeleteSymbol"+graphics[i].id)==evtGraphic.id){
                          this.graphicsLayer.remove(graphics[i]);
                      }
                  }
                  for(var i=0;i<this.graphicsArray.length;i++){
                      if(this.graphicsArray[i].id==evtGraphic.id||("DeleteSymbol"+this.graphicsArray[i].id)==evtGraphic.id){
                          this.remove(this.graphicsArray[i]);
                      }
                  }
              }
            }

        });
    });