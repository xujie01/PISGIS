define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'esri/request',
    './getLineRouteByXYSoeResult','dojo/_base/json'
], function (declare, lang, esriRequest, getLineRouteByXYSoeResult,dojo) {
    var instance = null, clazz;
    clazz = declare(null, {
        //events
        //linerouteexecuteComplete
        //linerouteexecuteFault

        soeURL: "http://10.30.72.29:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/getLineRouteByXYSOE/",
        languagetype: "zh",

        executeLastResult: getLineRouteByXYSoeResult,

        /**
         * 发送:获取在线点的[站列+里程]调用
         */
        executeGetSsStationByPoint: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'Point': dojo.toJson(SOEParameters.BeginPoint),//点
                'Tolerance': SOEParameters.Tolerance,//容差
                'UnitEventID': SOEParameters.UnitEventID,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getSsStationByPoint";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetSsStationByPoint(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("linerouteexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetSsStationByPoint: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new getLineRouteByXYSoeResult();
            lc_SoeResult.PosType = 1;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态

            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }
            lc_SoeResult.mLineLoopEventID = decodedObject.LineLoopEventID;                          //管网ID
            lc_SoeResult.mBeginStationSeriesEventID = decodedObject.StationSeriesEventID; //站列ID
            lc_SoeResult.mBeginStation = decodedObject.Station;              //里程
            lc_SoeResult.UnitEventID = decodedObject.UnitEventID;          //单位ID
            if (lc_SoeResult.TaskStatus == 1)  //有【最近桩】信息
            {
                lc_SoeResult.mLineLoopName = decodedObject.LineLoopName;                             //管网名称

                lc_SoeResult.mBeginMarkerEventID = decodedObject.MarkerEventID;                      //桩ID
                lc_SoeResult.mBeginMarkerName = decodedObject.MarkerName;                         //桩号
                lc_SoeResult.mBeginMarkerOffset = decodedObject.Offset;

            }
            lc_SoeResult.mLine = null;
            lc_SoeResult.BeginPoint = JSON.parse(decodedObject.OnlinePoint); //在线点
            this.executeLastResult = lc_SoeResult;
            //this.emit("linerouteexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },

        /**
         * 发送:获取从起点到终点的【管段】
         */
        executeGetLinebyPoint2: function (SOEParameters,executeComplete,executeFault) {
            var content =
            {
                'BeginPoint': dojo.toJson(SOEParameters.BeginPoint),//起点
                'EndPoint': dojo.toJson(SOEParameters.EndPoint),//终点
                'Tolerance': SOEParameters.Tolerance,//容差
                'UnitEventID': SOEParameters.UnitEventID,
                'f': "json"
            };
            var soeURLPos = this.soeURL + "getLineByPoint2";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleGetLinebyPoint2(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("linerouteexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleGetLinebyPoint2: function (decodedObject,executeComplete,executeFault) {
            var lc_SoeResult = new getLineRouteByXYSoeResult();
            lc_SoeResult.PosType = 2;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            if (lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("findpositionexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return;
            }
            lc_SoeResult.mLineLoopEventID = decodedObject.LineLoopEventID;                          //管网ID
            lc_SoeResult.mBeginStationSeriesEventID = decodedObject.BeginStationSeriesEventID; //站列ID
            lc_SoeResult.mBeginStation = decodedObject.BeginStation;              //里程
            lc_SoeResult.mEndStationSeriesEventID = decodedObject.EndStationSeriesEventID;   //终止站列ID
            lc_SoeResult.mEndStation = decodedObject.EndStation;                //终止里程
            lc_SoeResult.UnitEventID = decodedObject.UnitEventID;          //单位ID
            if (lc_SoeResult.TaskStatus == 1)  //没有【最近桩】信息
            {
                lc_SoeResult.mLineLoopName = decodedObject.LineLoopName;              //管网名称
                lc_SoeResult.mBeginMarkerEventID = decodedObject.BeginMarkerEventID;        //起点桩ID
                lc_SoeResult.mBeginMarkerName = decodedObject.BeginMarkerName;           //起点桩名称
                lc_SoeResult.mBeginMarkerOffset = decodedObject.BeginOffset;               //起点偏移量

                lc_SoeResult.mEndMarkerEventID = decodedObject.EndMarkerEventID;        //终点桩ID
                lc_SoeResult.mEndMarkerName = decodedObject.EndMarkerName;           //终点桩名称
                lc_SoeResult.mEndMarkerOffset = decodedObject.EndOffset;               //终点偏移量
            }
            if (lc_SoeResult.TaskStatus != 0)  //有【管线坐标】
            {
                lc_SoeResult.mLine = JSON.parse(decodedObject.Geomery);  //线

                lc_SoeResult.BeginPoint = lc_SoeResult.mLine.paths[0][0];       //起点
                var ln_PathCount = lc_SoeResult.mLine.paths.length;
                var lip_EndPath = lc_SoeResult.mLine.paths[ln_PathCount - 1];
                lc_SoeResult.EndPoint = lc_SoeResult.mLine.paths[ln_PathCount - 1][lip_EndPath.length - 1];       //起点
            }
            this.executeLastResult = lc_SoeResult;
            //this.emit("linerouteexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        }
    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        }
        return instance;
    };
    return clazz;
});