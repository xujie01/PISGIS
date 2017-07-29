define([
    'dojo/_base/declare'
], function (declare) {
    var instance = null, clazz;
    clazz = declare(null, {
        /**
         * 执行状态
         */
        TaskStatus: null,

        /**
         * 定位模式：1：点  2：线  3：矩形
         */
        PosType: null,

        /**
         * 点
         */
        mPoint: null,

        /**
         * 线
         */
        mLine: null,

        /**
         * 起点
         */
        BeginPoint: null,

        /**
         * 终点
         */
        EndPoint: null,

        /**
         * Enlelop
         */
        mEnvelop: null,

        /**
         * geometries数组
         */
        geometries: null,

        //-----------------------------------------------里程----------------------------------------------//
        BeginSsEventID: null,   //起始站列

        BeginStation: null,   //起始里程

        EndSsEventID: null,     //终止站列

        EndStation: null,     //终止里程

        LineLoopEventID: null,      //管网ID

        LineLoopName: null,      //管网名称

        UnitEventID: null,       //单位ID

        SubSystemEventID: null,   //子系统ID

        //-----------------------------------------------桩----------------------------------------------//

        /**
         * 起始桩ID
         */
        mBeginMarkerEventID: null,

        /**
         * 起始桩名称
         */
        mBeginMarkerName: null,

        /**
         * 距起始桩偏移量
         */
        mBeginMarkerOffset: null,

        /**
         * 终止桩ID
         */
        mEndMarkerEventID: null,

        /**
         * 终止桩名称
         */
        mEndMarkerName: null,

        /**
         * 距终止桩偏移量
         */
        mEndMarkerOffset: null,

        //---------------------------------------------属性------------------------------------------------//

        /**
         * 要素类
         */
        FeatureClass: null,

        /**
         * 属性表
         */
        AttributeTable: null,

        //---------------------------------------------埋深------------------------------------------------//

        /**
         * 埋深
         */
        Depth: null,

        /**
         * 高程
         */
        Elevation: null,
        
        /* setTaskStatus = function(tashstatus) {
         this.TaskStatus = tashstatus;
         };
         getTaskStatus = function() {
         return this.TaskStatus ;
         };

         setPosType = function(postype) {
         this.PosType = postype;
         };
         getPosType = function() {
         return this.PosType ;
         };

         setmPoint = function(mpoint) {
         this.mPoint = mpoint;
         };
         getmPoint = function() {
         return this.mPoint ;
         };

         setmLine = function(mline) {
         this.mLine = mline;
         };
         getmLine = function() {
         return this.mLine ;
         };

         setBeginPoint = function(beginpoint) {
         this.BeginPoint = beginpoint;
         };
         getBeginPoint = function() {
         return this.BeginPoint ;
         };

         setEndPoint = function(endpoint) {
         this.EndPoint = endpoint;
         };
         getEndPoint = function() {
         return this.EndPoint ;
         };

         setmEnvelop = function(menvelop) {
         this.mEnvelop = menvelop;
         };
         getmEnvelop = function() {
         return this.mEnvelop ;
         };

         setgeometries = function(gometties) {
         this.geometries = gometties;
         };
         getgeometries = function() {
         return this.geometries ;
         };

         setBeginSsEventID = function(beginsseventid) {
         this.BeginSsEventID = beginsseventid;
         };
         getBeginSsEventID = function() {
         return this.BeginSsEventID ;
         };

         setBeginStation = function(beginstation) {
         this.BeginStation = beginstation;
         };
         getBeginStation = function() {
         return this.BeginStation ;
         };

         setEndSsEventID = function(endsseventid) {
         this.EndSsEventID = endsseventid;
         };
         getEndSsEventID = function() {
         return this.EndSsEventID ;
         };

         setEndStation = function(endstation) {
         this.EndStation = endstation;
         };
         getEndStation = function() {
         return this.EndStation ;
         };

         setLineLoopEventID = function(lineloopeventid) {
         this.LineLoopEventID = lineloopeventid;
         };
         getLineLoopEventID = function() {
         return this.LineLoopEventID ;
         };

         setLineLoopName = function(lineloopname) {
         this.LineLoopName = lineloopname;
         };
         getLineLoopName = function() {
         return this.LineLoopName ;
         };

         setUnitEventID = function(uniteventid) {
         this.UnitEventID = uniteventid;
         };
         getUnitEventID = function() {
         return this.UnitEventID ;
         };

         setSubSystemEventID = function(subsystenevnetid) {
         this.SubSystemEventID = subsystenevnetid;
         };
         getSubSystemEventID = function() {
         return this.SubSystemEventID ;
         };

         setmBeginMarkerEventID = function(mBeginMarkerEventID) {
         this.mBeginMarkerEventID = mBeginMarkerEventID;
         };
         getmBeginMarkerEventID = function() {
         return this.mBeginMarkerEventID ;
         };

         setmBeginMarkerName = function(mBeginMarkerName) {
         this.mBeginMarkerName = mBeginMarkerName;
         };
         getmBeginMarkerName = function() {
         return this.mBeginMarkerName ;
         };

         setmBeginMarkerOffset = function(mBeginMarkerOffset) {
         this.mBeginMarkerOffset = mBeginMarkerOffset;
         };
         getmBeginMarkerOffset = function() {
         return this.mBeginMarkerOffset ;
         };

         setmEndMarkerEventID = function(mEndMarkerEventID) {
         this.mEndMarkerEventID = mEndMarkerEventID;
         };
         getmEndMarkerEventID = function() {
         return this.mEndMarkerEventID ;
         };

         setmEndMarkerName = function(mEndMarkerName) {
         this.mEndMarkerName = mEndMarkerName;
         };
         getmEndMarkerName = function() {
         return this.mEndMarkerName ;
         };

         setmEndMarkerOffset = function(mEndMarkerOffset) {
         this.mEndMarkerOffset = mEndMarkerOffset;
         };
         getmEndMarkerOffset = function() {
         return this.mEndMarkerOffset ;
         };

         setFeatureClass = function(FeatureClass) {
         this.FeatureClass = FeatureClass;
         };
         getFeatureClass = function() {
         return this.FeatureClass ;
         };

         setAttributeTable = function(AttributeTable) {
         this.AttributeTable = AttributeTable;
         };
         getAttributeTable = function() {
         return this.AttributeTable ;
         };

         setDepth = function(Depth) {
         this.Depth = Depth;
         };
         getDepth = function() {
         return this.Depth ;
         };

         setElevation = function(Elevation) {
         this.Elevation = Elevation;
         };
         getElevation = function() {
         return this.Elevation ;
         };*/
    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        } else {

        }
        return instance;
    };
    return clazz;
});