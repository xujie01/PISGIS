/*var ptFeatures = [
    { "geometry": { x: 116.711, y: 39.520 }, "attributes": { url: '20170412123625pano', attitudez: 55.289144260282690 } },
    { "geometry": { x: 116.508920823701940, y: 39.781302035780023 }, "attributes": { url: 'posed000001.jpg', attitudez: 55.246842316635963 } },
    { "geometry": { x: 116.508949641533680, y: 39.781316209547128 }, "attributes": { url: 'posed000002.jpg', attitudez: 55.874884884498464 } },
    { "geometry": { x: 116.508981190043740, y: 39.781332084527953 }, "attributes": { url: 'posed000003.jpg', attitudez: 55.913043217177162 } },
    { "geometry": { x: 116.509015177998340, y: 39.781349308774409 }, "attributes": { url: 'posed000004.jpg', attitudez: 56.079101007834431 } },
    { "geometry": { x: 116.509051284301580, y: 39.781367598279552 }, "attributes": { url: 'posed000005.jpg', attitudez: 56.166601018622252 } },
    { "geometry": { x: 116.509089316013540, y: 39.781386712481641 }, "attributes": { url: 'posed000006.jpg', attitudez: 56.531510400582995 } },
    { "geometry": { x: 116.509128535098780, y: 39.781406157656114 }, "attributes": { url: 'posed000007.jpg', attitudez: 56.638851227636252 } },
    { "geometry": { x: 116.509168238755590, y: 39.781425642076314 }, "attributes": { url: 'posed000008.jpg', attitudez: 57.943444060464728 } },
    { "geometry": { x: 116.509207440508520, y: 39.781444951733938 }, "attributes": { url: 'posed000009.jpg', attitudez: 57.924252013995300 } }
];*/
var ptFeatures = [];

require(['dojo/_base/declare',"esri/map", "esri/layers/WMTSLayer", "esri/layers/WMTSLayerInfo",
    "esri/geometry/Extent", "esri/layers/TileInfo", "esri/SpatialReference", "esri/layers/GraphicsLayer",
    "esri/renderers/SimpleRenderer", "esri/symbols/PictureMarkerSymbol", "esri/graphic",
    "dojo/parser", "esri/Color", "dojo/dom-construct", "dojo/dom-style",
    'jimu/magicgis/util/layers/A4MapLayer',
    'dojo/_base/lang',
    "jimu/magicgis/configProject",
    'jimu/dijit/LoadingIndicator',
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"
], function (declare,Map, WMTSLayer, WMTSLayerInfo,
    Extent, TileInfo, SpatialReference, GraphicsLayer, SimpleRenderer, PictureMarkerSymbol, Graphic,
    parser, Color, domConstruct, domStyle,A4MapLayer,lang,configProject,LoadingIndicator
    ) {
    parser.parse();

    var params= window.location.search;//params:?x,y,url,attitudez
    var arr = params.substring(1).split(",");
    var x = arr[0];
    var y = arr[1];
    var url = arr[2];
    var attitudez = arr[3];
    var map = new Map("mapDiv", {
        center: [x, y],
        zoom: 18
    });

    var layer=new A4MapLayer();
    layer.type="a4map";
    layer.id = "A4地图";
    layer.visible = "true";
    map.addLayer(layer);

    var ptLayer = new GraphicsLayer({ id: "streetViewLayer" });
    /*for (var i = 0, m = ptFeatures.length; i < m; i++) {
        var graphics = new Graphic(ptFeatures[i]);
        ptLayer.add(graphics);
    }*/
    var symbol = new PictureMarkerSymbol({
        'angle': 0, 'xoffset': 0, 'yoffset': 1,
        'type': 'esriPMS', 'url': 'images/blue-dot-small.png',
        'contentType': 'image/png', 'width': 12, 'height': 12
    });
    ptLayer.renderer = new SimpleRenderer(symbol);

    dojo.connect(ptLayer, "onClick", onShowStreetScape);
    map.addLayer(ptLayer);

    initializeScene();

    var graphic = new Graphic({ "geometry": { x: x, y: y }, "attributes": { url: url, attitudez: attitudez } });
    ptLayer.add(graphic);

    //从服务器获取数据来的
    /*dojo.xhrPost({
        url:configProject.queryPictures,
        handleAs:"text",
        content:{"auditFlag":"0"},
        load:lang.hitch(this,function(response){
            var dataJson = response;
            console.log("查询上传图片服务成功：");
            var list= dojo.fromJson(dataJson);
            //this.loading.hide();
            if (list.topics && list.topics.length > 0 && list.totalCount != 0) {
                for (var i = 0, m = list.topics.length; i < m; i++) {
                    var geometry = { x: Number(list.topics[i].LON), y: Number(list.topics[i].LAT) };
                    var attributes = {url: list.topics[i].URL, attitudez: Number(list.topics[i].ATTITUDEZ)};
                    var ptFeature = { "geometry": geometry, "attributes": attributes }
                    ptFeatures.push(ptFeature);
                }
                draw(graphic);
                showStreetScape(graphic);
            }else{
                alert("查询上传图片服务失败");
            }
        }),
        error:lang.hitch(this,function(response){
            console.log("查询上传图片服务失败："+response);
            alert("查询上传图片服务失败："+response);
            //this.loading.hide();
        }),
    });*/
    for (var i = 0, m = this.ptFeatures.length; i < m; i++) {
        var ptFeature = new Graphic(this.ptFeatures[i]);
        ptFeatures.push(ptFeature);
    }
    draw(graphic);
    showStreetScape(graphic);
    /*draw(graphic);
    showStreetScape(graphic);*/

    // 由二维地图进入街景视图
    function showStreetScape(graphic) {
        var mapUrl = graphic.attributes["url"];
        draw(graphic);

        var contentDiv = document.getElementById("mapDiv_container");
        contentDiv.style.animation = "3s linear 0s normal forwards 1 fadeOut";

        var skyImage = document.getElementById("skyImage");
        skyImage.style.animation = "3s linear 0s normal forwards 1 slideIn";

        setTimeout(function () {
            domStyle.set("threeDiv", "display", "block");
            domStyle.set("mapDiv", "display", "none");

            contentDiv.style.animation = "";
            skyImage.style.animation = "";
        }, 3000);
    }

    function onShowStreetScape(evt) {
        var mapUrl = evt.graphic.attributes["url"];
        draw(evt.graphic);

        var contentDiv = document.getElementById("mapDiv_container");
        contentDiv.style.animation = "3s linear 0s normal forwards 1 fadeOut";

        var skyImage = document.getElementById("skyImage");
        skyImage.style.animation = "3s linear 0s normal forwards 1 slideIn";

        setTimeout(function () {
            domStyle.set("threeDiv", "display", "block");
            domStyle.set("mapDiv", "display", "none");

            contentDiv.style.animation = "";
            skyImage.style.animation = "";
        }, 3000);
    }
});