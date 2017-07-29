define(["dojo/_base/declare", "dijit/Dialog", "dijit/_WidgetBase",
        "dijit/_TemplatedMixin", "esri/layers/TiledMapServiceLayer", "esri/SpatialReference", "esri/geometry/Extent", "esri/layers/TileInfo"],
    function (declare, Dialog, _WidgetBase, _TemplatedMixin, TiledMapServiceLayer, SpatialReference, Extent, TileInfo) {
        return declare("TianDiTuLayer", esri.layers.TiledMapServiceLayer, { // create WMTSLayer by extending esri.layers.TiledMapServiceLayer
            type: "tianditumap",
            _hosts: new Array("t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"),
            constructor: function (type) {
                this.tileMatrixSet=type?type:"c";
                this.spatialReference = this.tileMatrixSet == 'w'?new esri.SpatialReference({wkid: 102100}):new esri.SpatialReference({ wkid:4326});
                this.initialExtent = this.tileMatrixSet == 'w'?new esri.geometry.Extent(-20037508.342787, -20037508.342787, 20037508.342787, 20037508.342787, this.spatialReference):new esri.geometry.Extent(-180, -90, 180, 90, this.spatialReference);
                this.fullExtent = this.tileMatrixSet == 'w'?new esri.geometry.Extent(-20037508.342787, -20037508.342787, 20037508.342787, 20037508.342787, this.spatialReference):new esri.geometry.Extent(-180, -90, 180, 90, this.spatialReference);
                //
                this.tileInfo = new esri.layers.TileInfo({
                    "dpi": "90.71428571427429",
                    "format": "image/png",
                    "compressionQuality": 0,
                    "spatialReference": this.tileMatrixSet == 'w'?{
                            "wkid": "102100"
                        }:{
                            "wkid" : "4326"
                        },
                    "rows": 256,
                    "cols": 256,
                    "origin": this.tileMatrixSet == 'w'?{
                            "x" : -20037508.342787,
                            "y" : 20037508.342787
                        }:{
                            "x": -180,
                            "y": 90
                        },

                    // Scales in DPI 96
                    "lods": this.tileMatrixSet == 'w'?[
                            {"level" : 0, "resolution" : 78271.51696402048, "scale" : 2.958293554545656E8},
                            {"level" : 1, "resolution" : 39135.75848201024, "scale" : 1.479146777272828E8},
                            {"level" : 2, "resolution" : 19567.87924100512, "scale" : 7.39573388636414E7},
                            {"level" : 3, "resolution" : 9783.93962050256, "scale" : 3.69786694318207E7},
                            {"level" : 4, "resolution" : 4891.96981025128, "scale" : 1.848933471591035E7},
                            {"level" : 5, "resolution" : 2445.98490512564, "scale" : 9244667.357955175},
                            {"level" : 6, "resolution" : 1222.99245256282, "scale" : 4622333.678977588},
                            {"level" : 7, "resolution" : 611.49622628141, "scale" : 2311166.839488794},
                            {"level" : 8, "resolution" : 305.748113140705, "scale" : 1155583.419744397},
                            {"level" : 9, "resolution" : 152.8740565703525, "scale" : 577791.7098721985},
                            {"level" : 10, "resolution" : 76.43702828517625, "scale" : 288895.85493609926},
                            {"level" : 11, "resolution" : 38.21851414258813, "scale" : 144447.92746804963},
                            {"level" : 12, "resolution" : 19.109257071294063, "scale" : 72223.96373402482},
                            {"level" : 13, "resolution" : 9.554628535647032, "scale" : 36111.98186701241},
                            {"level" : 14, "resolution" : 4.777314267823516, "scale" : 18055.990933506204},
                            {"level" : 15, "resolution" : 2.388657133911758, "scale" : 9027.995466753102},
                            {"level" : 16, "resolution" : 1.194328566955879, "scale" : 4513.997733376551},
                            {"level" : 17, "resolution" : 0.5971642834779395, "scale" : 2256.998866688275},
                            {"level" : 18, "resolution" : 0.2985821417389698, "scale": 1128.499433344138},
                            {"level" : 19, "resolution" : 0.1492910708694849, "scale": 564.2497166720688}
                        ]:[
                            {
                                "level": 0, "scale": 2.95498e+008, "resolution": 0.703125
                            }, {
                                "level": 1, "scale": 1.47749e+008, "resolution": 0.351563
                            }, {
                                "level": 2, "scale": 7.38744e+007, "resolution": 0.175781
                            }, {
                                "level": 3, "scale": 3.69372e+007, "resolution": 0.0878906
                            }, {
                                "level": 4, "scale": 1.84686e+007, "resolution": 0.0439453
                            }, {
                                "level": 5, "scale": 9.2343e+006, "resolution": 0.0219727
                            }, {
                                "level": 6, "scale": 4.61715e+006, "resolution": 0.0109863
                            }, {
                                "level": 7, "scale": 2.30857e+006, "resolution": 0.00549316
                            }, {
                                "level": 8, "scale": 1.15429e+006, "resolution": 0.00274658
                            }, {
                                "level": 9, "scale": 577144, "resolution": 0.00137329
                            }, {
                                "level": 10, "scale": 288572, "resolution": 0.000686646
                            }, {
                                "level": 11, "scale": 144286, "resolution": 0.000343323
                            }, {
                                "level": 12, "scale": 72143, "resolution": 0.000171661
                            }, {
                                "level": 13, "scale": 36071.5, "resolution": 8.58307e-005
                            }, {
                                "level": 14, "scale": 18035.7, "resolution": 4.29153e-005
                            }, {
                                "level": 15, "scale": 9017.87, "resolution": 2.14577e-005
                            }, {
                                "level": 16, "scale": 4508.9, "resolution": 1.07289e-005
                            }, {
                                "level": 17, "scale": 2254.47, "resolution": 5.36445e-006
                            }
                        ]
                });
                this.loaded = true;
                this.onLoad(this);
            },
            getTileUrl: function (level, row, col) {
                var index = Math.abs(col % 7);
                var host = this._hosts[index];
                var url = "";
                if (this.type == "tianditumap") {
                    url = "http://" + host + ".tianditu.cn/vec_" + this.tileMatrixSet + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=" + this.tileMatrixSet + "&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
                }
                if (this.type == "tianditumapi") {
                    url = "http://" + host + ".tianditu.cn/cva_" + this.tileMatrixSet + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=" + this.tileMatrixSet + "&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
                }
                if (this.type == "tianditutrain") {
                    url = "http://" + host + ".tianditu.cn/ter_" + this.tileMatrixSet + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=" + this.tileMatrixSet + "&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
                }
                if (this.type == "tianditutraini") {
                    url = "http://" + host + ".tianditu.cn/cta_" + this.tileMatrixSet + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=" + this.tileMatrixSet + "&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
                }
                if (this.type == "tiandituimage") {
                    url = "http://" + host + ".tianditu.cn/img_" + this.tileMatrixSet + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=" + this.tileMatrixSet + "&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;

                }
                if (this.type == "tiandituimagei") {
                    url = "http://" + host + ".tianditu.cn/cia_" + this.tileMatrixSet + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=" + this.tileMatrixSet + "&FORMAT=tiles&TILEMATRIX=" + (level + 1) + "&TILECOL=" + col + "&TILEROW=" + row;
                }
                return url;
            },
            setType: function (type) {

            }
        });
    });