/**
 * APDM操作类
 */
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'esri/request',
    'dojo/_base/json','dojo/on',
    "jimu/magicgis/configProject",
    'jimu/magicgis/util/SOEForJSTask/FindPostionSoeParameters',
    'jimu/magicgis/util/SOEForJSTask/FindPostionSoeTask',
    'jimu/magicgis/util/SOEForJSTask/getLineRouteByXYSoeParameters',
    'jimu/magicgis/util/SOEForJSTask/getLineRouteByXYSoeTask',
    'jimu/magicgis/util/SOEForJSTask/APDMSearchByLineRouteParameters',
    'jimu/magicgis/util/SOEForJSTask/APDMSearchByLineRouteTask'
], function (declare, lang, esriRequest,dojo,on,configProject,
             FindPostionSoeParameters,FindPostionSoeTask,
             getLineRouteByXYSoeParameters,getLineRouteByXYSoeTask,
             APDMSearchByLineRouteParameters,APDMSearchByLineRouteTask) {
    var instance = null, clazz;
    clazz = declare(null, {
        sOEUrl :{findPostionByLineRouteSOE:"",getLineRouteByXYSOE:"",apdmSearchByLineRouteSOE:"",forcastSOE:""},
        languageType: "zh",

        getLineRouteTask:null,
        findPostionSoeTask:null,
        apdmSearchByLineRouteTask:null,
        constructor: function(params) {
            this.map = params && params.map;
            this.sOEUrl.findPostionByLineRouteSOE=configProject.findPostionByLineRouteSOE;
            this.sOEUrl.getLineRouteByXYSOE=configProject.getLineRouteByXYSOE;
            this.sOEUrl.apdmSearchByLineRouteSOE=configProject.apdmSearchByLineRouteSOE;
            this.sOEUrl.forcastSOE=configProject.getforcastSoeTask;

            this.getLineRouteTask=new getLineRouteByXYSoeTask();
            this.getLineRouteTask.soeURL=this.sOEUrl.getLineRouteByXYSOE;
            this.findPostionSoeTask=new FindPostionSoeTask();
            this.findPostionSoeTask.soeURL=this.sOEUrl.findPostionByLineRouteSOE;
            this.apdmSearchByLineRouteTask=new APDMSearchByLineRouteTask();
            this.apdmSearchByLineRouteTask.soeURL=this.sOEUrl.apdmSearchByLineRouteSOE;
        },

        /**
         * [空间点]获取在线点的[站列+里程]【返回点信息】
         * @param mBeginPoint
         * @param Tolerance
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        getPipePointbyPoint: function(mBeginPoint,Tolerance,UnitEventID,executeComplete,executeFault) {
            var parames=new getLineRouteByXYSoeParameters();
            parames.BeginPoint=mBeginPoint;
            parames.Tolerance=Tolerance;
            parames.UnitEventID=UnitEventID;
            this.getLineRouteTask.executeGetSsStationByPoint(parames,executeComplete,executeFault);
        },
        /**
         * [空间起点终点]获取从起点终点的[管段+信息]【返回起点终点信息】
         * @param mBeginPoint
         * @param mEndPoint
         * @param Tolerance
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        getPipePoint2byPoint2: function(mBeginPoint,mEndPoint,Tolerance,UnitEventID,executeComplete,executeFault) {
            var parames=new getLineRouteByXYSoeParameters();
            parames.BeginPoint=mBeginPoint;
            parames.EndPoint=mEndPoint;
            parames.Tolerance=Tolerance;
            parames.UnitEventID=UnitEventID;
            this.getLineRouteTask.executeGetLinebyPoint2(parames,executeComplete,executeFault);
        },
        /**[空间起点终点]获取起点中点终点的[信息]【扩展返回起点终点中点信息】
         * @param mBeginPoint
         * @param mEndPoint
         * @param Tolerance
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        getPipePoint3byPoint2: function(mBeginPoint,mEndPoint,Tolerance,UnitEventID,executeComplete,executeFault) {
            var parames=new getLineRouteByXYSoeParameters();
            parames.BeginPoint=mBeginPoint;
            parames.EndPoint=mEndPoint;
            parames.Tolerance=Tolerance;
            parames.UnitEventID=UnitEventID;
            this.getLineRouteTask.executeGetLinebyPoint2(parames,lang.hitch(this,function(event){
                this.getCenterPoint(event,executeComplete,executeFault)
            }),executeFault);
        },
        getCenterPoint:function(event,executeComplete,executeFault){
            var lc_soeResult=event.mPosSoeResult;
            var parames=new FindPostionSoeParameters();
            parames.LineLoopEventID=lc_soeResult.mLineLoopEventID;
            parames.BeginStation=(lc_soeResult.mEndStation-lc_soeResult.mBeginStation)/2+lc_soeResult.mBeginStation;
            this.findPostionSoeTask.executeGetNearMarkerbyLineStation(parames,lang.hitch(this,function(event){
                executeComplete.call(this,{mPosSoeResult:lc_soeResult, mCenterResult:event.mPosSoeResult});
            }),lang.hitch(this,function(event){executeFault.call(this,event)}));
        },

        /**
         * [管网+里程]获取点[埋深]【返回点信息】
         * @param LineLoopEventID
         * @param BeginStation
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        getDepthByLineStation: function(LineLoopEventID,BeginStation,UnitEventID,executeComplete,executeFault) {
            var parames=new APDMSearchByLineRouteParameters();
            parames.LineLoopEventID=LineLoopEventID;
            parames.BeginStation=BeginStation;
            parames.UnitEventID=UnitEventID;
            this.apdmSearchByLineRouteTask.executegetDepthByLineStation(parames,executeComplete,executeFault);
        },
        /**
         * [站列+里程]获取前后一段范围内的[要素]
         * @param FeatureClass
         * @param BeginSsEventID
         * @param BeginStation
         * @param Tolerance
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        apdmSearchPointbySsStation: function(FeatureClass,BeginSsEventID,BeginStation,Tolerance,UnitEventID,executeComplete,executeFault) {
            var parames=new APDMSearchByLineRouteParameters();
            parames.FeatureClass=FeatureClass;
            parames.BeginSsEventID=BeginSsEventID;
            parames.BeginStation=BeginStation;
            parames.Tolerance=Tolerance;
            parames.UnitEventID=UnitEventID;
            this.apdmSearchByLineRouteTask.executeApdmSearchPointbySsStation(parames,executeComplete,executeFault);
        },
        apdmSearchByLineStation: function(FeatureClass,LineLoopEventID,BeginStation,EndStation,UnitEventID,executeComplete,executeFault) {
            var parames=new APDMSearchByLineRouteParameters();
            parames.FeatureClass=FeatureClass;
            parames.LineLoopEventID=LineLoopEventID;
            parames.BeginStation=BeginStation;
            parames.EndStation=EndStation;
            parames.UnitEventID=UnitEventID;
            this.apdmSearchByLineRouteTask.executeApdmSearchByLineStation(parames,executeComplete,executeFault);
        },
        /**
         * [管网+里程]换算为[桩+偏移量]【取在线点信息】
         * @param LineLoopEventID
         * @param BeginStation
         * @param executeComplete
         * @param executeFault
         */
        getNearMarkerbyLineStation:function(LineLoopEventID,BeginStation,executeComplete,executeFault){
            var parames=new FindPostionSoeParameters();
            parames.LineLoopEventID=LineLoopEventID;
            parames.BeginStation=BeginStation;
            this.findPostionSoeTask.executeGetNearMarkerbyLineStation(parames,executeComplete,executeFault);
        },
        /**
         * [矩形框]获取范围内的[要素]
         * @param Envelop
         * @param FeatureClass
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        apdmSearchbyEnvelop:function(Envelop,FeatureClass,UnitEventID,executeComplete,executeFault){
            var parames=new APDMSearchByLineRouteParameters();
            parames.Envelop=Envelop;
            parames.FeatureClass=FeatureClass;
            parames.UnitEventID=UnitEventID;
            this.apdmSearchByLineRouteTask.executeApdmSearchbyEnvelop(parames,executeComplete,executeFault);
        },
        /**
         * [空间点]获取[三个点信息]
         * @param mBeginPoint
         * @param Tolerance
         * @param UnitEventID
         * @param executeComplete
         * @param executeFault
         */
        getPipePoint3byPoint: function(mBeginPoint,Tolerance,UnitEventID,executeComplete,executeFault) {
            var parames=new getLineRouteByXYSoeParameters();
            parames.BeginPoint=mBeginPoint;
            parames.Tolerance=Tolerance;
            parames.UnitEventID=UnitEventID;
            this.getLineRouteTask.executeGetSsStationByPoint(parames,lang.hitch(this,function(event){
                this.getBeginEndPoint(event,executeComplete,executeFault)
            }),executeFault);
        },
        getBeginEndPoint:function(event,executeComplete,executeFault){
            var lc_soeResult=event.mPosSoeResult;
            var parames=new FindPostionSoeParameters();
            parames.LineLoopEventID=lc_soeResult.mLineLoopEventID;
            parames.BeginStation=(lc_soeResult.mBeginStation-2500)>=0?(lc_soeResult.mBeginStation-2500):0;
            parames.EndStation=lc_soeResult.mBeginStation+2500;
            this.findPostionSoeTask.executeGetLinebyLineStation(parames,lang.hitch(this,function(event){
                executeComplete.call(this,{mCenterResult:lc_soeResult, mPosSoeResult:event.mPosSoeResult});
            }),lang.hitch(this,function(event){executeFault.call(this,event)}));
        },
        /**
         * [起点站列+起点里程+终点站列+终点里程]获取[在线线坐标]【获取2点信息】
         * @param BeginSsEventID
         * @param BeginStation
         * @param EndSsEventID
         * @param EndStation
         * @param executeComplete
         * @param executeFault
         */
        getLinebySsStation:function(BeginSsEventID,BeginStation,EndSsEventID,EndStation,executeComplete,executeFault){
            var parames=new FindPostionSoeParameters();
            parames.BeginSsEventID=BeginSsEventID;
            parames.BeginStation=BeginStation;
            parames.EndSsEventID=EndSsEventID;
            parames.EndStation=EndStation;
            this.findPostionSoeTask.executeGetLinebySsStation(parames,executeComplete,executeFault);
        },
        /**
         * [站列+里程]计算[在线点坐标]【获取点信息】
         * @param BeginSsEventID
         * @param BeginStation
         * @param executeComplete
         * @param executeFault
         */
        getPointbySsStation:function(BeginSsEventID,BeginStation,executeComplete,executeFault){
            var parames=new FindPostionSoeParameters();
            parames.BeginSsEventID=BeginSsEventID;
            parames.BeginStation=BeginStation;
            this.findPostionSoeTask.executeGetPointbySsStation(parames,executeComplete,executeFault);
        },
        /**
         * [管网+起始里程+终止里程]获取[3点信息]
         * @param LineLoopEventID
         * @param BeginStation
         * @param EndStation
         * @param executeComplete
         * @param executeFault
         */
        getPipePoint3byLineStation: function(LineLoopEventID,BeginStation,EndStation,executeComplete,executeFault) {
            var parames=new FindPostionSoeParameters();
            parames.LineLoopEventID=LineLoopEventID;
            parames.BeginStation=BeginStation;
            parames.EndStation=EndStation;
            this.findPostionSoeTask.executeGetLinebyLineStation(parames,lang.hitch(this,function(event){
                var lc_soeResult=event.mPosSoeResult;
                var parames=new FindPostionSoeParameters();
                parames.LineLoopEventID=LineLoopEventID;
                parames.BeginStation=(EndStation-BeginStation)/2+BeginStation;
                this.findPostionSoeTask.executeGetNearMarkerbyLineStation(parames,lang.hitch(this,function(event){
                    executeComplete.call(this,{mPosSoeResult:lc_soeResult, mCenterResult:event.mPosSoeResult});
                }),lang.hitch(this,function(event){executeFault.call(this,event)}));
            }),executeFault);
        },
        /**
         * [管网+起始里程+终止里程+中点里程]获取[3点信息]
         * @param LineLoopEventID
         * @param BeginStation
         * @param EndStation
         * @param CenterStation
         * @param executeComplete
         * @param executeFault
         */
        getPipePoint3byLineStation3: function(LineLoopEventID,BeginStation,EndStation,CenterStation,executeComplete,executeFault) {
            var parames=new FindPostionSoeParameters();
            parames.LineLoopEventID=LineLoopEventID;
            parames.BeginStation=BeginStation;
            parames.EndStation=EndStation;
            this.findPostionSoeTask.executeGetLinebyLineStation(parames,lang.hitch(this,function(event){
                var lc_soeResult=event.mPosSoeResult;
                var parames=new FindPostionSoeParameters();
                parames.LineLoopEventID=LineLoopEventID;
                parames.BeginStation=CenterStation;
                this.findPostionSoeTask.executeGetNearMarkerbyLineStation(parames,lang.hitch(this,function(event){
                    executeComplete.call(this,{mPosSoeResult:lc_soeResult, mCenterResult:event.mPosSoeResult});
                }),lang.hitch(this,function(event){executeFault.call(this,event)}));
            }),executeFault);
        }
    });
    clazz.getInstance = function (params) {
        if (instance === null) {
            instance = new clazz(params);
        }else{
            instance.params = params;
        }
        return instance;
    };
    return clazz;
});