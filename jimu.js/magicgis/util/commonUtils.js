///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licLayerInfosenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/lang',
  'dojo/_base/array',
  'dojo/Deferred',
  'dojo/promise/all',
  'exports',
    "esri/symbols/SimpleMarkerSymbol",
    "dojo/_base/Color",
    'esri/symbols/PictureMarkerSymbol',
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "dojox/timing/_base"
], function(
  lang, array,  Deferred, all,
  exports,SimpleMarkerSymbol,Color,PictureMarkerSymbol,SimpleLineSymbol,SimpleFillSymbol
) {
    //经度转墨卡托
      exports._lonToMercator = function(lon){
        var x = lon *20037508.342789/180;
        return x;
      };
    //纬度转墨卡托
      exports._latToMercator=function(lat){
        var y = Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);
        y = y *20037508.34789/180;
        return y;
      };
    //墨卡托转经度
      exports._MercatorToLon=function(mercatorX){
        var x = mercatorX/20037508.34*180;
        return x;
      };
    //墨卡托转纬度
      exports._MercatorToLat=function(mercatorY){
        var y = mercatorY/20037508.34*180;
        y= 180/Math.PI*(2*Math.atan(Math.exp(y*Math.PI/180))-Math.PI/2);
        return y;
      };

    //闪烁
      exports.flashGraphic=function(graphic,graphicLayer,keepGraphic){
          if(graphic){
              var _simpleMarkerSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0]), 2), new dojo.Color("#3DAAA9"));
              var _simpleLineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 3);
              var _simpleFillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]));
              var _simplePicSymbol = new PictureMarkerSymbol("jimu.js/magicgis/images/mapZoom.png", 32, 32);
              var t = new dojox.timing.Timer(500);
              var i;
              var symbol=graphic.symbol;
              graphicLayer.add(graphic);
              t.onTick =lang.hitch(this,function(){
                  console.info("One second elapsed");
                  if(i==6){
                      //graphic.show();
                      graphic.setSymbol(symbol);
                      if(!keepGraphic)graphicLayer.remove(graphic);
                      t.stop();
                  }else if(i%2==1){
                      //graphic.hide();
                      switch(graphic.geometry.type)
                      {
                          case "multipoint":
                          {
                              graphic.setSymbol(_simpleMarkerSymbol);
                              break;
                          }
                          case "point":
                          {
                              graphic.setSymbol(_simplePicSymbol);
                              break;
                          }
                          case "polyline":
                          {
                              graphic.setSymbol(_simpleLineSymbol);
                              break;
                          }
                          case "polygon":
                          {
                              graphic.setSymbol(_simpleFillSymbol);
                              break;
                          }
                          default:
                          {
                              break;
                          }
                      }
                  }else if(i%2==0){
                      //graphic.show();
                      graphic.setSymbol(symbol);
                  }
                  i++;
              })
              t.onStart = function(){
                  console.info("Starting timer");
                  i=0;
              }
              t.start();
          }
      };

    //产生uuid
    exports._creatUUID=function(){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    };

    //十六进制颜色值转RGB
    exports._colorRgb=function(){
        var colorStr= "#"+colorNum.toString(16);
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var sColor = colorStr.toLowerCase();
        if(sColor && reg.test(sColor)){
            if(sColor.length === 4){
                var sColorNew = "#";
                for(var i=1; i<4; i+=1){
                    sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for(var i=1; i<7; i+=2){
                sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
            }
            sColorChange.push(255);
            return sColorChange;
        }else{
            return sColor;
        }
    };

    //计算容差
    exports.pixelTpMapDistanceX=function(pixelX,map){
        var mapExtent=map.extent;
        var xPixel;
        if(map.spatialReference.wkid==4326)
        {
            xPixel=(mapExtent.xmax-mapExtent.xmin)*3600/map.width;
        }
        else if(map.spatialReference.isWebMercator()){
            xPixel=(mapExtent.xmax-mapExtent.xmin)/map.width;
        }
        else
        {
            xPixel=(mapExtent.xmax-mapExtent.xmin)/map.width;
        }
        return xPixel*pixelX;
    };

    //默认样式
    exports.getDefaultSymbol=function(type){
        var graphicSymbol=null;
        var selectionColor = new Color("#00FFFF");
        var defaultPointSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE,
            16, null, selectionColor);
        var defaultLineSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
            selectionColor, 2);
        var defaultFillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
            defaultLineSymbol, selectionColor);

        if (type === 'esriGeometryPoint') {
            graphicSymbol=defaultPointSymbol;
        } else if (type === 'esriGeometryPolyline') {
            graphicSymbol=defaultLineSymbol;
        } else if (type === 'esriGeometryPolygon') {
            graphicSymbol=defaultFillSymbol;
        }
        return graphicSymbol;
    }
    //格式化字符串（只能输入数字只能有一个小数点，小数点不能在开头，不能在结尾，第一位允许添加负号）
    exports.formatNumb=function (numbStr){
        //得到第一个字符是否为负号
        var t = numbStr.charAt(0);
        //先把非数字的都替换掉，除了数字和.
        numbStr = numbStr.replace(/[^\d.]/g,"");
        //必须保证第一个为数字而不是.
        numbStr = numbStr.replace(/^\./g,"");
        //保证只有出现一个.而没有多个.
        numbStr = numbStr.replace(/\.{2,}/g,".");
        //保证.只出现一次，而不能出现两次以上
        numbStr = numbStr.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        //如果第一位是负号，则允许添加
        if(t == '-'){
            numbStr = '-'+numbStr;
        }
        return numbStr;
    },
        // Changes XML to JSON
        exports.xmlToJson=function(xml) {
            // Create the return object
            var obj = {};

            if (xml.nodeType == 1) { // element
                // do attributes
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (var j = 0; j < xml.attributes.length; j++) {
                        var attribute = xml.attributes.item(j);
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            } else if (xml.nodeType == 3) { // text
                obj = xml.nodeValue;
            }

            // do children
            if (xml.hasChildNodes()) {
                for(var i = 0; i < xml.children.length; i++) {
                    var item = xml.children.item(i);
                    var nodeName = item.nodeName;
                    if (typeof(obj[nodeName]) == "undefined") {
                        obj[nodeName] = this.xmlToJson(item);
                    } else {
                        if (typeof(obj[nodeName].length) == "undefined") {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(this.xmlToJson(item));
                    }
                }
                if(xml.children.length==0){
                    obj = xml.innerHTML;
                }
            }
            return obj;
        },

        //将string转换为dom对象
        exports.stringToXmlDoc=function (xmlString) {
            var xmlDoc;
            if (typeof xmlString == "string") {
                //FF字符串转化成dom对象
                if (document.implementation.createDocument) {
                    var parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xmlString, "text/xml");
                } else if (window.ActiveXObject) {
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString);
                }
            }
            else {
                xmlDoc = xmlString;
            }
            return xmlDoc;
        },

      function diaoyongTest() {
      }
});