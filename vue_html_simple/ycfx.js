var lineChartSpeed = {
    controlName: "LineChart",
    controlId: "LineChart_speed",
    height: function (parentHeight) {
        return (parentHeight - 200) / 2;
    },
    dataset: "dsSpeed",
    isGroupData: false,
    groupBy: "speed",
    calcFields: [{
        name: 'exCount',
        title: '断针',
        filterExpr: 'this.exceptionType == 1',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '断线',
        filterExpr: 'this.exceptionType == 2',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '缺润滑油',
        filterExpr: 'this.exceptionType == 3',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "#DEEAF2"
        },
        title: {
            text: "大圆机转速分析",
            textStyle: {
                color: "#DEEAF2"
            }
        },
        legend: {
            left: 'right',
            padding: 10,
            textStyle: {
                color: "#DEEAF2"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#333'
                }
            }
        },
        backgroundColor: 'rgba(17,54,98,0.3)'
    }
}

var lineChartTemperature = {
    controlName: "LineChart",
    controlId: "LineChart_temperature",
    height: function (parentHeight) {
        return (parentHeight - 200) / 2;
    },
    dataset: "dsTemperature",
    isGroupData: false,
    groupBy: "temperature",
    calcFields: [{
        name: 'exCount',
        title: '断针',
        filterExpr: 'this.exceptionType == 1',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '断线',
        filterExpr: 'this.exceptionType == 2',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '缺润滑油',
        filterExpr: 'this.exceptionType == 3',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "#DEEAF2"
        },
        title: {
            text: "大圆机温度分析",
            textStyle: {
                color: "#DEEAF2"
            }
        },
        legend: {
            left: 'right',
            padding: 10,
            textStyle: {
                color: "#DEEAF2"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#333'
                }
            }
        },
        backgroundColor: 'rgba(17,54,98,0.3)'
    }
}

var lineChartTension = {
    controlName: "LineChart",
    controlId: "LineChart_tension",
    height: function (parentHeight) {
        return (parentHeight - 200) / 2;
    },
    dataset: "dsTension",
    isGroupData: false,
    groupBy: "tension",
    calcFields: [{
        name: 'exCount',
        title: '断针',
        filterExpr: 'this.exceptionType == 1',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '断线',
        filterExpr: 'this.exceptionType == 2',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '缺润滑油',
        filterExpr: 'this.exceptionType == 3',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "#DEEAF2"
        },
        title: {
            text: "大圆机线张力分析",
            textStyle: {
                color: "#DEEAF2"
            }
        },
        legend: {
            left: 'right',
            padding: 10,
            textStyle: {
                color: "#DEEAF2"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#333'
                }
            }
        },
        backgroundColor: 'rgba(17,54,98,0.3)'
    }
}

var lineChartHumidity = {
    controlName: "LineChart",
    controlId: "LineChart_humidity",
    height: function (parentHeight) {
        return (parentHeight - 200) / 2;
    },
    dataset: "dsHumidity",
    isGroupData: false,
    groupBy: "humidity",
    calcFields: [{
        name: 'exCount',
        title: '断针',
        filterExpr: 'this.exceptionType == 1',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '断线',
        filterExpr: 'this.exceptionType == 2',
        summaryType: 'sum'
    }, {
        name: 'exCount',
        title: '缺润滑油',
        filterExpr: 'this.exceptionType == 3',
        summaryType: 'sum'
    }],
    option: {
        textStyle: {
            color: "#DEEAF2"
        },
        title: {
            text: "大圆机湿度分析",
            textStyle: {
                color: "#DEEAF2"
            }
        },
        legend: {
            left: 'right',
            padding: 10,
            textStyle: {
                color: "#DEEAF2"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#333'
                }
            }
        },
        backgroundColor: 'rgba(17,54,98,0.3)'
    }
}