define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'esri/request',
    './FindPostionSoeResult'
], function (declare, lang, esriRequest, FindPostionSoeResult) {
    return  declare(null, {
        //events
        //findpositionexecuteComplete
        //findpositionexecuteFault

        soeURL: "http://10.30.72.29:6080:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/FindPostionByLineRouteSOE/",
        languagetype: "zh",

        executeLastResult: FindPostionSoeResult,

        /**
         * 发送[子系统]远程定位请求
         */
        executeGetEnvelopbySubID: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'UnitEventID': SOEParameters.UnitEventID,
                'SubSystemEventID': SOEParameters.SubSystemEventID,//子系统
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getRectangbySubID";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleSubGetEnvelop(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleSubGetEnvelop: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 3;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mEnvelop = JSON.parse(decodedObject.Envelope);      //点

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            lc_SoeResult.SubSystemEventID = decodedObject.SubSystemEventID;                          //管网ID
            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[获取单位管理空间矩形范围]远程定位请求
         */
        executeGetEnvelopbyUnitID: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'UnitEventID': SOEParameters.UnitEventID,
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getRectangbyUnitID";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleUnitGetEnvelop(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleUnitGetEnvelop: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 3;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mEnvelop = JSON.parse(decodedObject.Envelope);      //点

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            lc_SoeResult.UnitEventID = decodedObject.UnitEventID;                          //管网ID
            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[管线]远程定位请求
         */
        executeGetEnvelopbyLineLoopID: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'LineLoopEventID': SOEParameters.LineLoopEventID,//管线
                'UnitEventID': SOEParameters.UnitEventID,//单位
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getRectangbyLineUnitID";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetLineEnvelop(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetLineEnvelop: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 3;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mEnvelop = JSON.parse(decodedObject.Envelope);      //点

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            lc_SoeResult.LineLoopEventID = decodedObject.LineLoopEventID;                          //管网ID
            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});

        },
        /**
         * 发送[站列+里程]换算请求
         */
        executeGetNearMarkerbySsStation: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'StationSeriesEventID': SOEParameters.BeginSsEventID,//站列
                'Station': SOEParameters.BeginStation,//里程
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getNearMarkerSsStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetNearMarkerbySsStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        /**
         * 发送[管网+里程]换算请求
         */
        executeGetNearMarkerbyLineStation: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'LineLoopEventID': SOEParameters.LineLoopEventID,//管网
                'Station': SOEParameters.BeginStation,//里程
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getNearMarkerLineStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetNearMarkerbySsStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetNearMarkerbySsStation: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 1;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mPoint = JSON.parse(decodedObject.MapPoint);      //点
            lc_SoeResult.BeginSsEventID = decodedObject.StationSeriesEventID;                     //站列
            lc_SoeResult.BeginStation = decodedObject.Station;                                  //里程

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            lc_SoeResult.LineLoopEventID = decodedObject.LineLoopEventID;                          //管网ID
            lc_SoeResult.LineLoopName = decodedObject.LineLoopName;                             //管网名称
            lc_SoeResult.mBeginMarkerEventID = decodedObject.MarkerEventID;                      //桩ID
            lc_SoeResult.mBeginMarkerName = decodedObject.MarkerName;                         //桩号
            lc_SoeResult.mBeginMarkerOffset = decodedObject.Offset;
            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },

        /**
         * 发送[起点+终点]远程定位请求
         */
        executeGetLinebyLineStation: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'LineLoopEventID': SOEParameters.LineLoopEventID,//管网
                'BeginStation': SOEParameters.BeginStation,//起始里程
                'EndStation': SOEParameters.EndStation,//终止里程
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getLinebyLineStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetLinebyLineStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetLinebyLineStation: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 2;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mLine = JSON.parse(decodedObject.Polyline);      //点
            lc_SoeResult.BeginPoint = lc_SoeResult.mLine.paths[0][0];
            var ln_PathCount = lc_SoeResult.mLine.paths.length;
            var lip_EndPath = lc_SoeResult.mLine.paths[ln_PathCount - 1];
            lc_SoeResult.EndPoint = lc_SoeResult.mLine.paths[ln_PathCount - 1][lip_EndPath.length - 1];       //起点
            lc_SoeResult.LineLoopEventID = decodedObject.LineLoopEventID;

            lc_SoeResult.BeginStation = decodedObject.BeginStation;                                  //里程
            lc_SoeResult.EndStation = decodedObject.EndStation;

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            if (lc_SoeResult.TaskStatus == 1)  //没有【最近桩】信息
            {
                lc_SoeResult.BeginSsEventID = decodedObject.BeginStationSeriesEventID;                     //站列
                //管网ID
                lc_SoeResult.LineLoopName = decodedObject.LineLoopName;                             //管网名称
                lc_SoeResult.mBeginMarkerEventID = decodedObject.BeginMarkerEventID;                      //桩ID
                lc_SoeResult.mBeginMarkerName = decodedObject.BeginMarkerName;                         //桩号
                lc_SoeResult.mBeginMarkerOffset = decodedObject.BeginOffset;
                lc_SoeResult.EndSsEventID = decodedObject.EndStationSeriesEventID;               //终止站列ID
                lc_SoeResult.mEndMarkerEventID = decodedObject.EndMarkerEventID;                      //终止桩ID
                lc_SoeResult.mEndMarkerName = decodedObject.EndMarkerName;                         //终止桩号
                lc_SoeResult.mEndMarkerOffset = decodedObject.EndOffset;                             //终止偏移量
            }
            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[起点+终点]远程定位请求
         */
        executeGetLinebySsStation: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'BeginStationSeriesEventID': SOEParameters.BeginSsEventID,//起始站列
                'BeginStation': SOEParameters.BeginStation,//起始里程
                'EndStationSeriesEventID': SOEParameters.EndSsEventID,//终止站列
                'EndStation': SOEParameters.EndStation,//终止里程
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getLinebySsStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetLinebySsStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetLinebySsStation: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 2;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mLine = JSON.parse(decodedObject.Polyline);      //点
            lc_SoeResult.BeginPoint = lc_SoeResult.mLine.paths[0][0];
            var ln_PathCount = lc_SoeResult.mLine.paths.length;
            var lip_EndPath = lc_SoeResult.mLine.paths[ln_PathCount - 1];
            lc_SoeResult.EndPoint = lc_SoeResult.mLine.paths[ln_PathCount - 1][lip_EndPath.length - 1];       //起点

            lc_SoeResult.BeginSsEventID = decodedObject.BeginStationSeriesEventID;                     //站列
            lc_SoeResult.BeginStation = decodedObject.BeginStation;                                  //里程
            lc_SoeResult.EndSsEventID = decodedObject.EndStationSeriesEventID;               //终止站列ID
            lc_SoeResult.EndStation = decodedObject.EndStation;

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            if (lc_SoeResult.TaskStatus == 1)  //没有【最近桩】信息
            {
                lc_SoeResult.LineLoopEventID = decodedObject.LineLoopEventID;
                //管网ID
                lc_SoeResult.LineLoopName = decodedObject.LineLoopName;                             //管网名称

                lc_SoeResult.mBeginMarkerEventID = decodedObject.BeginMarkerEventID;                      //桩ID
                lc_SoeResult.mBeginMarkerName = decodedObject.BeginMarkerName;                         //桩号
                lc_SoeResult.mBeginMarkerOffset = decodedObject.BeginOffset;

                lc_SoeResult.mEndMarkerEventID = decodedObject.EndMarkerEventID;                      //终止桩ID
                lc_SoeResult.mEndMarkerName = decodedObject.EndMarkerName;                         //终止桩号
                lc_SoeResult.mEndMarkerOffset = decodedObject.EndOffset;                             //终止偏移量
            }

            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[起点+终点]远程定位请求
         */
        executeGetPointbySsStation: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'StationSeriesEventID': SOEParameters.BeginSsEventID,//站列
                'Station': SOEParameters.BeginStation,//里程
                'Lang': this.languagetype,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getPointbySsStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetPointbySsStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("findpositionexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetPointbySsStation: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new FindPostionSoeResult();
            lc_SoeResult.PosType = 1;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态

            lc_SoeResult.mPoint = JSON.parse(decodedObject.MapPoint);      //点

            lc_SoeResult.BeginSsEventID = decodedObject.StationSeriesEventID;                     //站列
            lc_SoeResult.BeginStation = decodedObject.Station;                                  //里程

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }

            if (lc_SoeResult.TaskStatus == 1)  //没有【最近桩】信息
            {
                lc_SoeResult.LineLoopEventID = decodedObject.LineLoopEventID;
                //管网ID
                lc_SoeResult.LineLoopName = decodedObject.LineLoopName;                             //管网名称

                lc_SoeResult.mBeginMarkerEventID = decodedObject.MarkerEventID;                      //桩ID
                lc_SoeResult.mBeginMarkerName = decodedObject.MarkerName;                         //桩号
                lc_SoeResult.mBeginMarkerOffset = decodedObject.Offset;
            }

            this.executeLastResult = lc_SoeResult;
            //this.emit("findpositionexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        }
    });
});