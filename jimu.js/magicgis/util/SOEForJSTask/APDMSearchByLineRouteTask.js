define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'esri/request',
    './APDMSearchByLineRouteResult','dojo/_base/json'
], function(declare,lang,esriRequest,APDMSearchByLineRouteResult,dojo) {
    return declare(null, {
        //events
        //apdmsearchexecuteComplete
        //apdmsearchexecuteFault

        soeURL :"http://10.30.72.29:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/APDMSearchByLineRouteSOE/",
        languagetype:"zh",

        executeLastResult:APDMSearchByLineRouteResult,

        /**
         * 发送[站列+里程]查询定位请求
         */
        executeApdmSearchPointbySsStation:function(SOEParameters,executeComplete,executeFault)
        {
            var content =
            {
                'FeatureClass':SOEParameters.FeatureClass,//要素类
                'StationSeriesEventID':SOEParameters.BeginSsEventID,//站列
                'UnitEventID':SOEParameters.UnitEventID,//单位
                'Station':SOEParameters.BeginStation,//里程
                'Tolerance':SOEParameters.Tolerance,//容差
                'Lang':this.languagetype,
                'f': "json"
            };
            var soeURLPos =this.soeURL+"ApdmSearchPointbySsStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleApdmSearchPointbySsStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("apdmsearchexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleApdmSearchPointbySsStation:function(decodedObject,executeComplete,executeFault)
        {
            var lc_SoeResult=new APDMSearchByLineRouteResult();
            lc_SoeResult.PosType = 1;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.FeatureClass =decodedObject.FeatureClass ; //点
            lc_SoeResult.UnitEventID = decodedObject.UnitEventID; //单位ID
            lc_SoeResult.BeginSsEventID = decodedObject.StationSeriesEventID;//站列
            lc_SoeResult.BeginStation = decodedObject.Station; //里程

            if(lc_SoeResult.TaskStatus == -1)  //没有【最近桩】信息
            {
                //this.emit("apdmsearchexecuteFault", "TaskStatus:-1");
                executeFault.call(this,"TaskStatus:-1");
                return ;
            }

            lc_SoeResult.LineLoopEventID = decodedObject.LineLoopEventID; //管网ID
            lc_SoeResult.LineLoopName = decodedObject.LineLoopName; //管网名称
            lc_SoeResult.mBeginMarkerEventID  = decodedObject.MarkerEventID; //桩ID
            lc_SoeResult.mBeginMarkerName = decodedObject.MarkerName; //桩号
            lc_SoeResult.mBeginMarkerOffset = decodedObject.Offset; //偏移量
            lc_SoeResult.mPoint  = dojo.toJson(decodedObject.MapPoint); //点

            if(lc_SoeResult.TaskStatus > 0)  //有【管线管理权】
                lc_SoeResult.AttributeTable = decodedObject.AttributeTable; //属性表
            this.executeLastResult = lc_SoeResult;
            //this.emit("apdmsearchexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[起点+终点]查询请求
         */
        executeApdmSearchLinebySsStation:function(SOEParameters,executeComplete,executeFault)
        {
            var content =
            {
                'FeatureClass':SOEParameters.FeatureClass,//要素类
                'BeginStationSeriesEventID':SOEParameters.BeginSsEventID,//起始站列
                'UnitEventID':SOEParameters.UnitEventID,//
                'BeginStation':SOEParameters.BeginStation,//起始里程
                'EndStationSeriesEventID':SOEParameters.EndSsEventID,//终止站列
                'EndStation':SOEParameters.EndStation,//终止里程
                'Lang':this.languagetype,
                'f': "json"
            };
            var soeURLPos =this.soeURL+"ApdmSearchLinebySsStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleApdmSearchLinebySsStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("apdmsearchexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleApdmSearchLinebySsStation:function(decodedObject,executeComplete,executeFault)
        {
            var lc_SoeResult=new APDMSearchByLineRouteResult();
            lc_SoeResult.PosType = 2;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.FeatureClass     = decodedObject.FeatureClass;                                  //要素类
            lc_SoeResult.BeginSsEventID   = decodedObject.BeginStationSeriesEventID;                     //起始站列
            lc_SoeResult.BeginStation     = decodedObject.BeginStation;                                  //起始里程
            lc_SoeResult.EndSsEventID     = decodedObject.EndStationSeriesEventID;                       //终止站列
            lc_SoeResult.EndStation       = decodedObject.EndStation;                                    //终止里程
            lc_SoeResult.UnitEventID      = decodedObject.UnitEventID;                                   //单位ID

            if(lc_SoeResult.TaskStatus == 0)  //没有【最近桩】信息
            {
                //this.emit("apdmsearchexecuteFault", "TaskStatus:0");
                executeFault.call(this,"TaskStatus:0");
                return ;
            }
            if(lc_SoeResult.TaskStatus == 1)  //有【最近桩】信息
            {
                lc_SoeResult.LineLoopEventID        = decodedObject.LineLoopEventID;                    //管网ID
                lc_SoeResult.LineLoopName           = decodedObject.LineLoopName;                       //管网名称
                lc_SoeResult.mBeginMarkerEventID    = decodedObject.BeginMarkerEventID;                 //起始桩ID
                lc_SoeResult.mBeginMarkerName       = decodedObject.BeginMarkerName;                    //起始桩号
                lc_SoeResult.mBeginMarkerOffset     = decodedObject.BeginOffset;                        //起始偏移量
                lc_SoeResult.mEndMarkerEventID    = decodedObject.EndMarkerEventID;                      //起始桩ID
                lc_SoeResult.mEndMarkerName       = decodedObject.EndMarkerName;                         //起始桩号
                lc_SoeResult.mEndMarkerOffset     = decodedObject.EndOffset;                             //起始偏移量
            }
            lc_SoeResult.mLine  = JSON.parse(decodedObject.Polyline);           //线
            lc_SoeResult.BeginPoint = lc_SoeResult.mLine.paths[0][0];
            var ln_PathCount = lc_SoeResult.mLine.paths.length;
            var lip_EndPath =lc_SoeResult.mLine.paths[ln_PathCount - 1];
            lc_SoeResult.EndPoint = lc_SoeResult.mLine.paths[ln_PathCount - 1][lip_EndPath.length - 1];       //起点
            lc_SoeResult.AttributeTable         = decodedObject.AttributeTable;                     //属性表

            this.executeLastResult = lc_SoeResult;
            //this.emit("apdmsearchexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});

        },
        /**
         * 发送[起点+终点]远程查询请求
         */
        executeApdmSearchByLineStation:function(SOEParameters,executeComplete,executeFault)
        {
            var content =
            {
                'FeatureClass':SOEParameters.FeatureClass,//要素类
                'LineLoopEventID':SOEParameters.LineLoopEventID,//管网
                'UnitEventID':SOEParameters.UnitEventID,
                'BeginStation':SOEParameters.BeginStation,//起始里程
                'EndStation':SOEParameters.EndStation,//终止里程
                'Lang':this.languagetype,
                'f': "json"
            };
            var soeURLPos =this.soeURL+"ApdmSearchByLineStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleApdmSearchByLineStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("apdmsearchexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleApdmSearchByLineStation:function(decodedObject,executeComplete,executeFault)
        {
            var lc_SoeResult=new APDMSearchByLineRouteResult();
            lc_SoeResult.PosType = 2;
            lc_SoeResult.TaskStatus    = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.FeatureClass     = decodedObject.FeatureClass;                                  //要素类
            lc_SoeResult.LineLoopEventID  = decodedObject.LineLoopEventID;                               //管网ID
            lc_SoeResult.BeginStation     = decodedObject.BeginStation;                                  //起始里程
            lc_SoeResult.EndStation       = decodedObject.EndStation;                                    //终止里程
            lc_SoeResult.UnitEventID      = decodedObject.UnitEventID;                                   //单位ID

            if(lc_SoeResult.TaskStatus == 0)  //没有【最近桩】信息
            {
                //this.emit("apdmsearchexecuteFault", "TaskStatus:0");
                executeFault.call(this,"TaskStatus:0");
                return ;
            }
            if(lc_SoeResult.TaskStatus == 1)  //有【最近桩】信息
            {
                lc_SoeResult.LineLoopName           = decodedObject.LineLoopName;                       //管网名称
                lc_SoeResult.BeginSsEventID         = decodedObject.BeginStationSeriesEventID;          //起始站列ID
                lc_SoeResult.mBeginMarkerEventID    = decodedObject.BeginMarkerEventID;                 //起始桩ID
                lc_SoeResult.mBeginMarkerName       = decodedObject.BeginMarkerName;                    //起始桩号
                lc_SoeResult.mBeginMarkerOffset     = decodedObject.BeginOffset;                        //起始偏移量
                lc_SoeResult.EndSsEventID         = decodedObject.EndStationSeriesEventID;               //终止站列ID
                lc_SoeResult.mEndMarkerEventID    = decodedObject.EndMarkerEventID;                      //终止桩ID
                lc_SoeResult.mEndMarkerName       = decodedObject.EndMarkerName;                         //终止桩号
                lc_SoeResult.mEndMarkerOffset     = decodedObject.EndOffset;                             //终止偏移量
            }
            lc_SoeResult.mLine          = JSON.parse(decodedObject.Polyline);           //线
            lc_SoeResult.BeginPoint = lc_SoeResult.mLine.paths[0][0];
            var ln_PathCount = lc_SoeResult.mLine.paths.length;
            var lip_EndPath =lc_SoeResult.mLine.paths[ln_PathCount - 1];
            lc_SoeResult.EndPoint = lc_SoeResult.mLine.paths[ln_PathCount - 1][lip_EndPath.length - 1];       //起点
            lc_SoeResult.AttributeTable         = decodedObject.AttributeTable;                     //属性表
            this.executeLastResult = lc_SoeResult;
            //this.emit("apdmsearchexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[矩形框]查询定位请求
         */
        executeApdmSearchbyEnvelop:function(SOEParameters,executeComplete,executeFault)
        {
            var content =
            {
                'FeatureClass': SOEParameters.FeatureClass,//要素类
                'UnitEventID':SOEParameters.UnitEventID,//单位
                'Envelop':dojo.toJson(SOEParameters.Envelop),//矩形
                'Lang':this.languagetype,
                'f': "json"
            };
            var soeURLPos =this.soeURL+"ApdmSearchByEnvelop";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handleApdmSearchByEnvelop(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("apdmsearchexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handleApdmSearchByEnvelop:function(decodedObject,executeComplete,executeFault)
        {
            var lc_SoeResult=new APDMSearchByLineRouteResult();
            lc_SoeResult.PosType = 1;
            lc_SoeResult.TaskStatus    = decodedObject.TaskStatus;  //执行状态

            lc_SoeResult.FeatureClass     = decodedObject.FeatureClass;                       //要素类
            lc_SoeResult.UnitEventID      = decodedObject.UnitEventID;                        //单位ID

            lc_SoeResult.AttributeTable   = decodedObject.AttributeTable;                     //属性表

            this.executeLastResult = lc_SoeResult;
            //this.emit("apdmsearchexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        },
        /**
         * 发送[站列+里程]查询定位请求
         */
        executegetDepthBySsStation:function(SOEParameters,executeComplete,executeFault)
        {
            var content =
            {
                'StationSeriesEventID': SOEParameters.BeginSsEventID,//站列
                'Station':SOEParameters.BeginStation,//里程
                'UnitEventID':SOEParameters.UnitEventID,
                'Lang':this.languagetype,
                'f': "json"
            };
            var soeURLPos =this.soeURL+"getDepthBySsStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handlegetDepthByLineStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("apdmsearchexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        /**
         * 发送[管线+里程]查询定位请求
         */
        executegetDepthByLineStation:function(SOEParameters,executeComplete,executeFault)
        {
            var content =
            {
                'LineLoopEventID': SOEParameters.LineLoopEventID,//管网
                'Station':SOEParameters.BeginStation,//里程
                'UnitEventID':SOEParameters.UnitEventID,
                'Lang':this.languagetype,
                'f': "json"
            };
            var soeURLPos =this.soeURL+"getDepthByLineStation";
            var Request = esriRequest({
                url: soeURLPos,
                content: content,
                handleAs: "json",
                callbackParamName: "callback"
            });
            Request.then(
                lang.hitch(this,function (responses) {
                    this.handlegetDepthByLineStation(responses,executeComplete,executeFault);
                }), function(error) {
                    console.log("Error: ", error.message);
                    //this.emit("apdmsearchexecuteFault", error.message);
                    executeFault.call(this,error.message);
                });
        },
        handlegetDepthByLineStation:function(decodedObject,executeComplete,executeFault) {
            var lc_SoeResult=new APDMSearchByLineRouteResult();
            lc_SoeResult.PosType = 1;
            lc_SoeResult.TaskStatus = decodedObject.TaskStatus;  //执行状态
            lc_SoeResult.mPoint  = dojo.toJson(decodedObject.MapPoint); //点
            lc_SoeResult.BeginSsEventID         = decodedObject.StationSeriesEventID;                     //站列
            lc_SoeResult.BeginStation           = decodedObject.Station;                                  //里程
            lc_SoeResult.UnitEventID            = decodedObject.UnitEventID;                              //单位ID
            lc_SoeResult.BeginStation = decodedObject.BeginStation;                                  //里程
            lc_SoeResult.EndStation = decodedObject.EndStation;

            if(lc_SoeResult.TaskStatus == 1)  //有【最近桩】信息
            {
                lc_SoeResult.LineLoopEventID        = decodedObject.LineLoopEventID;                    //管网ID
                lc_SoeResult.LineLoopName           = decodedObject.LineLoopName;                       //管网名称
                lc_SoeResult.mBeginMarkerEventID    = decodedObject.MarkerEventID;                      //桩ID
                lc_SoeResult.mBeginMarkerName       = decodedObject.MarkerName;                         //桩号
                lc_SoeResult.mBeginMarkerOffset     = decodedObject.Offset;                             //偏移量
            }

            if(lc_SoeResult.TaskStatus >=0)  //有【埋深】信息
            {
                lc_SoeResult.Depth                  = decodedObject.Depth;                              //埋深
                lc_SoeResult.Elevation              = decodedObject.Elevation;                          //高程
            }

            this.executeLastResult = lc_SoeResult;
            //this.emit("apdmsearchexecuteComplete", {mPosSoeResult: this.executeLastResult});
            executeComplete.call(this,{mPosSoeResult: this.executeLastResult});
        }
        });
});