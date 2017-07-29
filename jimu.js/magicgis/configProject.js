define({
    DGIS:"http://47.92.7.213:8080/GIS3D/index.html",//3DGIS网址
    RedisPIS:"http://10.30.72.12/PIF",//控件缓存服务地址
    inspectionInfoSearch:"http://10.100.1.173:8080/cxfWebService/webservice/GetInspectionInfoData",//巡检信息服务
    pipeInfoTableData:"http://10.100.1.173:8080/cxfWebService/webservice/GetPipeInfoTableData",//应急支持服务
    getTableData:"http://10.100.1.173:8080/cxfWebService/webservice/GetTableData",//查询要素类别服务
    apdmSearch:"http://10.100.1.173:8080/cxfWebService/webservice/ApdmSearch",//属性查询改造SOE至WebService服务
    historyPoints:"http://10.100.1.173:8080/cxfWebService/webservice/HistoryPoints",//巡检专题的巡检信息统计以及人员轨迹服务
    alarmReport:"http://10.100.1.173:8080/cxfWebService/webservice/AlarmReport",//紧急上报服务
    keyPoints:"http://10.100.1.173:8080/cxfWebService/webservice/KeyPoints",//关键点服务
    eventReport:"http://10.100.1.173:8080/cxfWebService/webservice/EventReport",//巡检专题的事项上报服务

    gpsMarkerInfo:"http://10.100.1.171:8080/pismap/page/util/gpsmarkerinfo/gpsmarkerinfo.do?method=queryList",//数据采集服务
    gpsMarkerDepth:"http://10.100.1.171:8080/pismap/page/util/gpsmarkerinfo/gpsmarkerinfo.do?method=queryDepthList",//数据采集服务
    createGisFile:"http://10.100.1.171:8080/pismap/servlet/CreateGisFile",//下载应急方案服务
    sendMessageGis:"http://10.100.1.171:8080/pismap/servlet/SendMessageGis",//发送信息服务
    uploadImage:"http://10.100.1.171:8080/pismap/page/util/uploadimage/uploadimage.do?method=uploadImage",//上传图片服务(分析图片)
    uploadPicture:"http://10.100.1.171:8080/pismap/page/util/uploadimage/uploadimage.do?method=uploadPicture",//上传图片服务
    queryPictures:"http://10.100.1.171:8080/pismap/page/util/uploadimage/uploadimage.do?method=queryList",//查询上传图片服务
    getEXIFPicture:"http://10.100.1.171:8080/pismap/page/util/uploadimage/uploadimage.do?method=getEXIFPicture",//分析图片信息服务
    queryUserLog: "http://10.100.1.171:8080/pismap/page/sys/loginlogs/loginlogs.do?method=queryUserLog",//查询登陆次数服务
    mediumTypeStatistic:"http://10.100.1.171:8080/pismap/page/sys/mediumtypestatistic/mediumtypestatistic.do?method=mediumTypeStatistic",//管线介质年度投产长度统计
    mediumChart:"http://10.100.1.171:8080/pismap/page/sys/mediumtypestatistic/mediumtypestatistic.do?method=mediumChart",//管线介质行政区划数量统计

    /*地图标绘服务地址*/
    mapFeatureInsert:"http://10.100.1.171:8080/pismap/page/util/mapfeature/mapfeature.do?method=insert_js",
    mapFeatureUpdate:"http://10.100.1.171:8080/pismap/page/util/mapfeature/mapfeature.do?method=update_js",
    mapFeatureDelete:"http://10.100.1.171:8080/pismap/page/util/mapfeature/mapfeature.do?method=delete_js",
    mapFeatureUpdateAuditFlag:"http://10.100.1.171:8080/pismap/page/util/mapfeature/mapfeature.do?method=updateAuditFlag_js",
    mapFeatureQueryList:"http://10.100.1.171:8080/pismap/page/util/mapfeature/mapfeature.do?method=queryList_js",

    /*SOE服务地址*/
    apdmSearchByEnvelop:"http://10.30.72.29:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/APDMSearchByLineRouteSOE/ApdmSearchByEnvelop",
    findPostionByLineRouteSOE:"http://10.30.72.29:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/FindPostionByLineRouteSOE/",
    getLineRouteByXYSOE:"http://10.30.72.29:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/getLineRouteByXYSOE/",
    apdmSearchByLineRouteSOE:"http://10.30.72.29:6080/arcgis/rest/services/PisBaseMap/MapServer/exts/APDMSearchByLineRouteSOE/",

    baseUrl:"http://10.100.1.171:8080/",//里程图服务地址
    charConfigUrl:"pismap/servlet/getchartConfigXMLJS?chartId=mainChart",
    charQueryDatUrl:"pismap/servlet/QueryChartData",
    stationSeriesUrl:"pismap/servlet/queryLineStationseries",
    equipmentDataURL:"pismap/servlet/queryEquipServlet",
    getlineloopPoints:"pismap/lineloopPoints.xml",
    savelineloopPoints:"pismap/servlet/lineLoopPointsServlet",
    lineloopTree:"pismap/servlet/lineLoopTreeServlet",
    emergencyfileexport:"pismap/servlet/CreateGisFile",
    equipmentsite:"type=point&tableName=site&name=站&level=1&style=legend&legendId=Id39&height=20&width=20&mouseOnLabelField=sitename&baseLabelField=sitename",
    equipmentmarker:"type=point&tableName=marker&name=桩&level=2&style=legend&legendId=Id41&height=20&width=7&mouseOnLabelField=name&baseLabelField=name",
    equipmentpipesegment:"type=line&tableName=PIPESEGMENT&name=管段&level=2&lineHeight=20&lineColor=0xff0000&borderColor=0&mouseOnLabelField=''&baseLabelField=''"
});