/**
 * 地图选中管线状态类
 * @param mUnitEventID 管段所属部门ID
 * @param mUnitName 管段所属部门名称
 * @param mPolyline 管段
 * @param BeginPoint
 *        Point 起点
 *        LineLoopEventID 管网ID
 *        LineLoopName 管网名称
 *        BeginStationSeriesEventID 起始站列ID
 *        BeginStation 起始里程
 *        BeginMarkerEventID 桩ID
 *        BeginMarkerName 桩名称
 *        BeginMarkerOffset 桩偏移
 * @param EndPoint
 *        Point 终点
 *        LineLoopEventID 管网ID
 *        LineLoopName 管网名称
 *        EndStationSeriesEventID 终点站列ID
 *        EndStation 终点里程
 *        EndMarkerEventID 桩ID
 *        EndMarkerName 桩名称
 *        EndMarkerOffset 桩偏移
 * @param CenterPoint
 *        Point 中点
 *        LineLoopEventID 管网ID
 *        LineLoopName 管网名称
 *        CenterStationSeriesEventID 中点站列ID
 *        CenterStation 中点里程
 *        CenterMarkerEventID 桩ID
 *        CenterMarkerName 桩名称
 *        CenterMarkerOffset 桩偏移
 */
define([
    'dojo/_base/declare',
], function (declare) {
    var instance = null, clazz;
    clazz = declare(null, {
        mUnitEventID:null,
        mUnitName:null,
        mPolyline:null,
        BeginPoint:{},
        EndPoint:{},
        CenterPoint:{},

    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        }
        return instance;
    };
    return clazz;
});