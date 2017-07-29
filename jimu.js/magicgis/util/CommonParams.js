/**
 * 公共参数类
 * @param unitId 过滤字段显示
 */
define([
    'dojo/_base/declare',
], function (declare) {
    var instance = null, clazz;
    clazz = declare(null, {
        /*lang:window.requestParams.lang,
        unitEventid:window.requestParams.unitEventid,
        unitId:window.requestParams.unitId,
        unitName:window.requestParams.unitName,*/
        lang:"zh",
        unitId:"",//过滤字段显示
    });
    clazz.getInstance = function () {
        if (instance === null) {
            instance = new clazz();
        }
        return instance;
    };
    return clazz;
});