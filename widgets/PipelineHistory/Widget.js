define(['dojo/_base/lang',
        'dijit/_WidgetsInTemplateMixin',
        'dojo/_base/declare',
        'jimu/BaseWidget',
        'jimu/dijit/LoadingShelter',
        "jimu/magicgis/configProject",
        'jimu/magicgis/lib/echarts'
    ],
    function (lang,_WidgetsInTemplateMixin, declare, BaseWidget,LoadingShelter,
              configProject,echarts) {
        return declare([BaseWidget, _WidgetsInTemplateMixin], {
            //templateString:template,
            baseClass: 'jimu-widget-pipelinehistory',
            name: 'PipelineHistory',
            ws:null,
            pipelineHistoryEchart:null,

            postCreate: function () {
                this.inherited(arguments);
                this.shelter = new LoadingShelter({
                    hidden: true
                });
                this.shelter.placeAt(this.domNode);
                this.shelter.startup();
                //var dom = document.getElementById("emergencySupportEchartDiv");
                this.pipelineHistoryEchart = echarts.init(this.pipelineHistoryEchartDiv);
            },

            startup: function () {
                this.inherited(arguments);
                this.connect(this, "resize", function () {
                    this.pipelineHistoryEchart.resize('auto','auto');
                });
            },

            onOpen: function () {
                this.queryHistory();
            },

            queryHistory:function(){
                var timeData = new Array();
                var xAxisData = new Array();
                var optionsData = new Array();
                var queryChartUrl=configProject.mediumTypeStatistic;
                /*$.ajax({
                    type : "post",
                    async : false, //false同步执行,true为异步
                    url :queryChartUrl ,
                    data : {},
                    dataType : "json", //返回数据形式为json
                    success : lang.hitch(this,function(result) {
                        if (result&&result.length>0) {
                            this.pipelineHistoryEchart.resize('auto','auto');
                            var dataPI={};
                            var dataMap = {dataPI:dataPI};
                            for(var i= 0;i<result.length;i++){
                                var yearKey;
                                var yeayObj=new Array();
                                for(var ikeys in result[i]){
                                    switch(ikeys){
                                        case "YEAR":
                                            yearKey = result[i][ikeys];
                                            if(yearKey=="1973"){
                                                timeData.push({
                                                    value: yearKey,
                                                    tooltip: {
                                                        formatter: '{b} 管道里程达到一个高度'
                                                    },
                                                    symbol: 'diamond',
                                                    symbolSize: 16
                                                });
                                            }else if(yearKey=="2013"){
                                                timeData.push({
                                                    value: yearKey,
                                                    tooltip: {
                                                        formatter: function (params) {
                                                            return params.name + '管道里程达到又一个高度';
                                                        }
                                                    },
                                                    symbol: 'diamond',
                                                    symbolSize: 18
                                                });
                                            }else{
                                                timeData.push(yearKey);
                                            }
                                            break;
                                        /!*case "ALL":
                                            yeayObj.push({name:'总长度',value:Number(result[i][ikeys])});
                                            break;*!/
                                        case "TRQ":
                                            yeayObj.push({name:'天然气',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                            break;
                                        case "YY":
                                            yeayObj.push({name:'原油',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                            break;
                                        case "CPY":
                                            yeayObj.push({name:'成品油',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                            break;
                                        /!*case "YHSYQ":
                                            yeayObj.push({name:'液化石油气',value:Number(result[i][ikeys])});
                                            break;*!/
                                        case "SHUI":
                                            yeayObj.push({name:'水',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                            break;
                                        case "QT":
                                            yeayObj.push({name:'其它',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                dataPI[yearKey]=yeayObj;
                                optionsData.push({
                                    title: {text: yearKey+'年 中石油管道里程'},
                                    series: [
                                        {data: dataMap.dataPI[yearKey]}
                                    ]
                                });
                            }
                            for(var i=0;i<dataPI["1971"].length;i++){
                                if(i%2){
                                    xAxisData.push('\n'+dataPI["1971"][i].name);
                                }else{
                                    xAxisData.push(dataPI["1971"][i].name);
                                }
                            }
                        }

                        var option = {
                            baseOption: {
                                timeline: {
                                    // y: 0,
                                    axisType: 'category',
                                    // realtime: false,
                                    // loop: false,
                                    autoPlay: true,
                                    // currentIndex: 2,
                                    playInterval: 1000,
                                    // controlStyle: {
                                    //     position: 'left'
                                    // },
                                    data: timeData,
                                    label: {
                                        formatter : function(s) {
                                            return (new Date(s)).getFullYear();
                                        }
                                    }
                                },
                                title: {
                                    subtext: '数据来自PIS管道完整性系统'
                                },
                                tooltip: {},
                                calculable : true,
                                grid: {
                                    top: 80,
                                    bottom: 100
                                },
                                xAxis: [
                                    {
                                        'type':'category',
                                        'axisLabel':{'interval':0},
                                        'data':xAxisData,
                                        splitLine: {show: false}
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value',
                                        name: '公里（km）'
                                    }
                                ],
                                series: [
                                    {name: '管道里程', type: 'bar'}
                                ]
                            },
                            options: optionsData
                        };
                        if (option && typeof option === "object") {
                            this.pipelineHistoryEchart.setOption(option, true);
                        }
                    }),
                    error : lang.hitch(this,function(errorMsg) {
                        layer.msg("Query MediumType error:"+errorMsg);
                        var option = {
                            /!*title: {
                             text: '某楼盘销售情况',
                             subtext: '纯属虚构'
                             },*!/
                            tooltip: {
                                trigger: 'axis'
                            },
                            /!*legend: {
                             data:['意向','预购','成交']
                             },*!/
                            toolbox: {
                                show: true,
                                feature: {
                                    magicType: {show: true, type: ['stack', 'tiled']},
                                    saveAsImage: {show: true}
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: xAxisData
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{name: '管道里程', type: 'bar'}]
                        };
                        if (option && typeof option === "object") {
                            this.pipelineHistoryEchart.setOption(option, true);
                        }
                    })
                });*/
                var result = JSON.parse('[{"YHSYQ":"100000","YY":"2850112","TRQ":"266500.37","QT":"100000","YEAR":"1989","SHUI":"125043","ALL":"3353175","CPY":"115200"},{"YHSYQ":"100000","YY":"3094466","TRQ":"266500","QT":"100000","YEAR":"1991","SHUI":"125043","ALL":"3597529","CPY":"16520"},{"YHSYQ":"100000","YY":"3286256","TRQ":"266500","QT":"100000","YEAR":"1992","SHUI":"145043","ALL":"3789319","CPY":"21520"},{"YHSYQ":"100000","YY":"3447781","TRQ":"767468","QT":"100000","YEAR":"1996","SHUI":"145043","ALL":"4737112.76","CPY":"196820"},{"YHSYQ":"100000","YY":"4220417","TRQ":"1378132","QT":"100000","YEAR":"1997","SHUI":"145043","ALL":"6420412","CPY":"246820"},{"YHSYQ":"100000","YY":"3220417","TRQ":"1609513","QT":"100000","YEAR":"1998","SHUI":"133043","ALL":"7331793","CPY":"256820.06"},{"YHSYQ":"100000","YY":"4225132","TRQ":"1728540","QT":"100000","YEAR":"1999","SHUI":"165043","ALL":"7455535","CPY":"276820"},{"YHSYQ":"100000","YY":"3236192","TRQ":"2228834","QT":"100000","YEAR":"2000","SHUI":"166043","ALL":"7526889","CPY":"226820"},{"YHSYQ":"100000","YY":"4448878","TRQ":"3016441","QT":"100000","YEAR":"2001","SHUI":"225043","ALL":"8867182","CPY":"276820"},{"YHSYQ":"100000","YY":"4348878","TRQ":"3297705","QT":"8720","YEAR":"2002","SHUI":"165043","ALL":"16548340","CPY":"1468594"},{"YHSYQ":"100000","YY":"4348878","TRQ":"3543297","QT":"18780.","YEAR":"2003","SHUI":"165043","ALL":"18814592","CPY":"1368594"},{"YHSYQ":"100000","YY":"4826855","TRQ":"8712904","QT":"38480","YEAR":"2004","SHUI":"155043","ALL":"12208377","CPY":"1095094"},{"YHSYQ":"100000","YY":"4993111","TRQ":"13374305","QT":"38480","YEAR":"2005","SHUI":"166043","ALL":"13321533","CPY":"1180594"},{"YHSYQ":"100000","YY":"5251567","TRQ":"15517893","QT":"175580","YEAR":"2006","SHUI":"225043","ALL":"13278249","CPY":"3078166"},{"YHSYQ":"100000","YY":"7129920","TRQ":"15678455","QT":"165580","YEAR":"2007","SHUI":"175043","ALL":"11851578","CPY":"3812580"},{"YHSYQ":"100000","YY":"7139955","TRQ":"15531212","QT":"135580","YEAR":"2008","SHUI":"175043","ALL":"16914371","CPY":"2812580"},{"YHSYQ":"100000","YY":"6325981","TRQ":"12311668","QT":"144580","YEAR":"2009","SHUI":"177043","ALL":"10442913","CPY":"6474640"},{"YHSYQ":"100000","YY":"7782782","TRQ":"12267436","QT":"110000","YEAR":"2010","SHUI":"100643.00","ALL":"23506314","CPY":"6711652"},{"YHSYQ":"100000","YY":"8720878","TRQ":"14123630","QT":"122800","YEAR":"2011","SHUI":"100643","ALL":"32133902","CPY":"7044950"},{"YHSYQ":"100000","YY":"13381668","TRQ":"18039460","QT":"111800","YEAR":"2012","SHUI":"197643","ALL":"37632523","CPY":"7066950"},{"YHSYQ":"100000","YY":"10170543","TRQ":"24794020","QT":"177800","YEAR":"2013","SHUI":"100643","ALL":"46402557","CPY":"7193550"},{"YHSYQ":"100000","YY":"13385332","TRQ":"26101643","QT":"136800","YEAR":"2014","SHUI":"144643","ALL":"48830626","CPY":"7899208"},{"YHSYQ":"100000","YY":"12290772","TRQ":"27581193","QT":"100800","YEAR":"2015","SHUI":"120043","ALL":"51015618","CPY":"7899208"},{"YHSYQ":"100000","YY":"11290772","TRQ":"32463113","QT":"86800","YEAR":"2016","SHUI":"97643","ALL":"56272517","CPY":"8274188"},{"YHSYQ":"100000","YY":"10054000","TRQ":"32463113","QT":"96800","YEAR":"2017","SHUI":"97643","ALL":"46935745","CPY":"7274188"}]');
                if (result&&result.length>0) {
                    this.pipelineHistoryEchart.resize('auto','auto');
                    var dataPI={};
                    var dataMap = {dataPI:dataPI};
                    for(var i= 0;i<result.length;i++){
                        var yearKey;
                        var yeayObj=new Array();
                        for(var ikeys in result[i]){
                            switch(ikeys){
                                case "YEAR":
                                    yearKey = result[i][ikeys];
                                    if(yearKey=="2013"){
                                        timeData.push({
                                            value: yearKey,
                                            tooltip: {
                                                formatter: function (params) {
                                                    return params.name + '管道里程达到一个高度';
                                                }
                                            },
                                            symbol: 'diamond',
                                            symbolSize: 18
                                        });
                                    }else{
                                        timeData.push(yearKey);
                                    }
                                    break;
                                /*case "ALL":
                                 yeayObj.push({name:'总长度',value:Number(result[i][ikeys])});
                                 break;*/
                                case "TRQ":
                                    yeayObj.push({name:'天然气',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                    break;
                                case "YY":
                                    yeayObj.push({name:'原油',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                    break;
                                case "CPY":
                                    yeayObj.push({name:'成品油',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                    break;
                                /*case "YHSYQ":
                                 yeayObj.push({name:'液化石油气',value:Number(result[i][ikeys])});
                                 break;*/
                                case "SHUI":
                                    yeayObj.push({name:'水',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                    break;
                                case "QT":
                                    yeayObj.push({name:'其它',value:(Number(result[i][ikeys])/1000).toFixed(3)});
                                    break;
                                default:
                                    break;
                            }
                        }
                        dataPI[yearKey]=yeayObj;
                        optionsData.push({
                            title: {text: yearKey+'年 管道里程'},
                            series: [
                                {data: dataMap.dataPI[yearKey]}
                            ]
                        });
                    }
                    for(var i=0;i<dataPI["1989"].length;i++){
                        if(i%2){
                            xAxisData.push('\n'+dataPI["1989"][i].name);
                        }else{
                            xAxisData.push(dataPI["1989"][i].name);
                        }
                    }
                }

                var option = {
                    baseOption: {
                        timeline: {
                            // y: 0,
                            axisType: 'category',
                            // realtime: false,
                            // loop: false,
                            autoPlay: true,
                            // currentIndex: 2,
                            playInterval: 1000,
                            // controlStyle: {
                            //     position: 'left'
                            // },
                            data: timeData,
                            label: {
                                formatter : function(s) {
                                    return (new Date(s)).getFullYear();
                                }
                            }
                        },
                        title: {
                            subtext: '数据来自虚拟互联网'
                        },
                        tooltip: {},
                        calculable : true,
                        grid: {
                            top: 80,
                            bottom: 100
                        },
                        xAxis: [
                            {
                                'type':'category',
                                'axisLabel':{'interval':0},
                                'data':xAxisData,
                                splitLine: {show: false}
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '公里（km）'
                            }
                        ],
                        series: [
                            {name: '管道里程', type: 'bar'}
                        ]
                    },
                    options: optionsData
                };
                if (option && typeof option === "object") {
                    this.pipelineHistoryEchart.setOption(option, true);
                }
            },

            onClose: function () {
            },

            onMinimize: function () {
            },

            onMaximize: function () {
            },

            onSignIn: function (credential) {
            },

            onSingnOut: function () {
            }
        });
    });