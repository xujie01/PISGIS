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
         * 单位ID
         */
        UnitEventID: null,

        /**
         * 管网ID
         */
        mLineLoopEventID: null,

        /**
         * 管网名称
         */
        mLineLoopName: null,

        /**
         * 起始站列ID
         */
        mBeginStationSeriesEventID: null,

        /**
         * 起始里程
         */
        mBeginStation: null,

        /**
         * 终止站列ID
         */
        mEndStationSeriesEventID: null,
        /**
         * 终止里程
         */
        mEndStation: null,

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

        /**
         * 起点
         */
        BeginPoint: null,

        /**
         * 终点
         */
        EndPoint: null,

        /**
         * 线
         */
        mLine: null

    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        }
        return instance;
    };
    return clazz;
});