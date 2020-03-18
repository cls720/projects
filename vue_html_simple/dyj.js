var barPercentChartSpeed = {
    controlName: "BarPercentChart",
    controlId: "BarPercentChart_13",
    height: 100,
    isGroupData: true,
    groupBy: "dyjId",
    calcFields: [{
        name: 'speed',
        title: '实时转数'
    }],
    dataset: "ds1",
    minBarVal: 0,
    maxBarVal: 50,
    stepBarVals: [{
            barVal: 34.7,
            startColor: "#E6A23C",
            endColor: "rgba(241,207,156,.7)"
        },
        {
            barVal: 35.2,
            startColor: "#67C23A",
            endColor: "rgba(165,211,131,.7)"
        },
        {
            barVal: 36,
            startColor: "#F56C6C",
            endColor: "rgba(247,142,142,.7)"
        }
    ],
    option: {
        textStyle: {
            color: "#fff"
        },
        yAxis: [{
            axisLabel: {
                show: false
            }
        }],
        series: [{}, {
            label: {
                normal: {
                    show: true,
                    position: "bottom",
                    formatter: function (o) {
                        return o.value.toFixed(2) + " 转/分钟";
                    }
                }
            },
        }]
    }
};

var realtimeChartSpeed = {
    controlName: "RealtimeChart",
    controlId: "LineChart_line33",
    width: "95%",
    height: 100,
    datas: [],
    dataset: "ds1",
    isGroupData: true,
    pointCount: 10,
    groupBy: "inputTime",
    calcFields: [{
        name: 'speed',
        title: '实时转数',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "rgba(242,242,240,0.5)"
        },
        title: {
            text: "实时转数",
            textStyle: {
                color: "rgba(242,242,240,0.7)"
            }
        },
        grid: {
            left: "0%",
            right: "8%",
            bottom: "5%",
            top: "15%",
            containLabel: true
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b} <br/>{a} : {c} 转/分钟",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#283b56"
                }
            }
        },
        xAxis: [{
            type: "category",
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            data: []
        }],
        yAxis: [{
            type: "value",
            min: 20,
            max: 50,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        legend: {
            show: false
        },
        series: [{
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            smooth: true
        }]
    }
}

var barPercentChartTemperature = {
    controlName: "BarPercentChart",
    controlId: "BarPercentChart_2_1",
    height: 80,
    isGroupData: true,
    groupBy: "dyjId",
    calcFields: [{
        name: 'temperature',
        title: '实时温度'
    }],
    dataset: "ds1",
    minBarVal: 20,
    maxBarVal: 50,
    stepBarVals: [{
            barVal: 15,
            startColor: "#E6A23C",
            endColor: "rgba(241,207,156,.7)"
        },
        {
            barVal: 35,
            startColor: "#67C23A",
            endColor: "rgba(165,211,131,.7)"
        },
        {
            barVal: 50,
            startColor: "#F56C6C",
            endColor: "rgba(247,142,142,.7)"
        }
    ],
    option: {
        textStyle: {
            color: "#fff"
        },
        yAxis: [{
            axisLabel: {
                show: false
            }
        }],
        series: [{}, {
            label: {
                normal: {
                    show: true,
                    position: "bottom",
                    formatter: function (o) {
                        return o.value.toFixed(2) + " °C";
                    }
                }
            },
        }]
    }
};

var realtimeChartTemperature = {
    controlName: "RealtimeChart",
    controlId: "LineChart_line_2_2",
    width: "95%",
    height: 80,
    datas: [],
    dataset: "ds1",
    isGroupData: true,
    pointCount: 10,
    groupBy: "inputTime",
    calcFields: [{
        name: 'temperature',
        title: '实时温度',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "rgba(242,242,240,0.5)"
        },
        title: {
            text: "实时温度",
            textStyle: {
                color: "rgba(242,242,240,0.7)"
            }
        },
        grid: {
            left: "0%",
            right: "8%",
            bottom: "5%",
            top: "15%",
            containLabel: true
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b} <br/>{a} : {c} °C",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#283b56"
                }
            }
        },
        xAxis: [{
            type: "category",
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            data: []
        }],
        yAxis: [{
            type: "value",
            min: 20,
            max: 50,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        legend: {
            show: false
        },
        series: [{
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            smooth: true
        }]
    }
}

var barPercentChartHumidity = {
    controlName: "BarPercentChart",
    controlId: "BarPercentChart_3_1",
    height: 80,
    isGroupData: true,
    groupBy: "dyjId",
    calcFields: [{
        name: 'humidity',
        title: '实时湿度'
    }],
    dataset: "ds1",
    minBarVal: 30,
    maxBarVal: 90,
    stepBarVals: [{
            barVal: 30,
            startColor: "#E6A23C",
            endColor: "rgba(241,207,156,.7)"
        },
        {
            barVal: 75,
            startColor: "#67C23A",
            endColor: "rgba(165,211,131,.7)"
        },
        {
            barVal: 90,
            startColor: "#F56C6C",
            endColor: "rgba(247,142,142,.7)"
        }
    ],
    option: {
        textStyle: {
            color: "#fff"
        },
        yAxis: [{
            axisLabel: {
                show: false
            }
        }],
        series: [{}, {
            label: {
                normal: {
                    show: true,
                    position: "bottom",
                    formatter: function (o) {
                        return o.value.toFixed(2) + " %rh";
                    }
                }
            },
        }]
    }
};

var realtimeChartHumidity = {
    controlName: "RealtimeChart",
    controlId: "LineChart_line_3_2",
    width: "95%",
    height: 80,
    datas: [],
    dataset: "ds1",
    isGroupData: true,
    pointCount: 10,
    groupBy: "inputTime",
    calcFields: [{
        name: 'humidity',
        title: '实时湿度',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "rgba(242,242,240,0.5)"
        },
        title: {
            text: "实时湿度",
            textStyle: {
                color: "rgba(242,242,240,0.7)"
            }
        },
        grid: {
            left: "0%",
            right: "8%",
            bottom: "5%",
            top: "15%",
            containLabel: true
        },
        tooltip: {
            trigger: "axis",
            formatter: "{b} <br/>{a} : {c} %rh",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#283b56"
                }
            }
        },
        xAxis: [{
            type: "category",
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            data: []
        }],
        yAxis: [{
            type: "value",
            min: 30,
            max: 90,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        legend: {
            show: false
        },
        series: [{
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            smooth: true
        }]
    }
}

var chinaMapChartConf = {
    controlName: "ChinaMapChart",
    controlId: "ChinaMapChart_21",
    height: "100%",
    style: "background-color: rgba(1, 5, 61, 0.2);",
    isGroupData: true,
    dataset: "dsChina",
    groupBy: "runAddr",
    calcFields: [{
        name: 'state',
        title: '正常生产',
        filterExpr: 'this.state === 1',
        gpsAddr: "runAddr",
        gpsEast: "gpsEast",
        gpsNorth: "gpsNorth",
        summaryType: 'sum'
    }, {
        name: 'state',
        title: '中危生产',
        filterExpr: 'this.state === 2',
        gpsAddr: "runAddr",
        gpsEast: "gpsEast",
        gpsNorth: "gpsNorth",
        summaryType: 'sum'
    }, {
        name: 'state',
        title: '高危生产',
        filterExpr: 'this.state === 3',
        gpsAddr: "runAddr",
        gpsEast: "gpsEast",
        gpsNorth: "gpsNorth",
        summaryType: 'sum'
    }, {
        name: 'state',
        title: '故障停机',
        filterExpr: 'this.state === 4',
        gpsAddr: "runAddr",
        gpsEast: "gpsEast",
        gpsNorth: "gpsNorth",
        summaryType: 'sum'
    }, {
        name: 'state',
        title: '关机状态',
        filterExpr: 'this.state === 5',
        gpsAddr: "runAddr",
        gpsEast: "gpsEast",
        gpsNorth: "gpsNorth",
        summaryType: 'sum'
    }],
    option: {
        tooltip: {
            formatter: "{b} <br/>{a}",
        },
        legend: {
            x: "left",
            y: "bottom",
            textStyle: {
                color: "#fff"
            },
            padding: 20
        },
        series: [{
            itemStyle: {
                normal: {
                    color: "#6CC142"
                }
            },
            zlevel: 2
        }, {
            itemStyle: {
                normal: {
                    color: "#FFF260"
                }
            },
            zlevel: 3
        }, {
            type: "effectScatter",
            symbolSize: 15,
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke"
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: "#FD6A01",
                    shadowBlur: 10,
                    shadowColor: "#333"
                }
            },
            zlevel: 4
        }, {
            zlevel: 5
        }, {
            zlevel: 1
        }]
    },
    events: {
        click: function (param) {
            if (param.data) { //点击数据                
            } else {
                this.initProvinceChart(param, function (d) {
                    return d.runProvince == param.name
                });
            }
        }
    }
};

var hcTimeline = {
    controlName: "HcTimeline",
    controlId: "HcTimeline_1",    
    style: "padding-top:10px;",
    dataset: "dsWarning",
    content: "exceptionMessage",
    timestamp: "exceptionTime",
    type: "messageType"
}