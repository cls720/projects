<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" buffer="none"%>
<%@ include file="/include.inc.jsp"%>
<%@ page import="java.util.*"%>
<%@ page import="com.fd.amrept.configobject.common.Tool"%>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="format-detection" content="telephone=no" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="yes" name="apple-touch-fullscreen" />
    <meta content="telephone=no,email=no" name="format-detection" />
    <meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes" />
    <title>04297Vue</title>
    <meta name="Keywords" content="AmReport" />
    <meta name="Description" content="奥迈报表软件" />

    <link href="/amrept-web/resources/css/themes/css/bootstrap.css" rel="stylesheet" />


    <!-- core - css -->

<link href="/amrept-web/resources/plugins/dwz/themes/css/cls.css" rel="stylesheet" type="text/css" />



    <script src="/amrept-web/resources/min/jquery-1.11.2.min.js"></script>
    <script src="/amrept-web/resources/design/js/min/vue.min.js"></script>
    <script src="/amrept-web/resources/design/js/min/vuex3.0.1.js"></script>
    <script src="/amrept-web/resources/default/js/sources/JsonUtil.js"></script>    
    <script src="/amrept-web/resources/default/js/sources/layout/GroupTableLayout.js"></script>
    <script src="/amrept-web/resources/default/js/sources/components/GroupPolicyTable.js"></script>    
</head>
<body>   
    <div id="app">
        <gp-table 
            v-bind:policy="policy"
            v-bind:datas="datas"
        ></gp-table>
    </div>

</body>
</html>	
<script type="text/javascript">
    $(function() {
        var workbook1 = {
            ds1:{
                datas: ${ds1.datasArray}
            },
            sheet1: {
                "controlName": "WkSheet",
                "pageLayout": "table",
                "rows": {
                    "r0": {
                        "A1": {
                            "row": 0,
                            "col": 0,
                            "type": "const",
                            "value": "年：",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B1": {
                            "row": 0,
                            "col": 1,
                            "type": "group",
                            "dataStyle": "group",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "year",
                            "value": "ds1.year"
                        }
                    },
                    "r1": {
                        "A2": {
                            "row": 1,
                            "col": 0,
                            "type": "const",
                            "value": "季度:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B2": {
                            "row": 1,
                            "col": 1,
                            "type": "group",
                            "dataStyle": "group",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "fjd",
                            "value": "ds1.fjd"
                        }
                    },
                    "r2": {
                        "A3": {
                            "row": 2,
                            "col": 0,
                            "type": "const",
                            "value": "月:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B3": {
                            "row": 2,
                            "col": 1,
                            "type": "group",
                            "dataStyle": "group",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "month",
                            "value": "ds1.month"
                        }
                    },
                    "r3": {
                        "A4": {
                            "row": 3,
                            "col": 0,
                            "type": "const",
                            "value": "周:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B4": {
                            "row": 3,
                            "col": 1,
                            "type": "group",
                            "dataStyle": "group",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "week",
                            "value": "ds1.week"
                        }
                    },
                    "r4": {
                        "A5": {
                            "row": 4,
                            "col": 0,
                            "type": "const",
                            "value": "周度任务:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B5": {
                            "row": 4,
                            "col": 1,
                            "type": "merge",
                            "dataStyle": "list",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "FWNUM",
                            "topPC": "B4",
                            "value": "ds1.FWNUM"
                        }
                    },
                    "r5": {
                        "A6": {
                            "row": 5,
                            "col": 0,
                            "type": "const",
                            "value": "月度任务:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B6": {
                            "row": 5,
                            "col": 1,
                            "type": "merge",
                            "dataStyle": "list",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "FMNUM",
                            "topPC": "B3",
                            "value": "ds1.FMNUM"
                        }
                    },
                    "r6": {
                        "A7": {
                            "row": 6,
                            "col": 0,
                            "type": "const",
                            "value": "季度任务:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B7": {
                            "row": 6,
                            "col": 1,
                            "type": "merge",
                            "dataStyle": "list",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "FQNUM",
                            "topPC": "B2",
                            "value": "ds1.FQNUM"
                        }
                    },
                    "r7": {
                        "A8": {
                            "row": 7,
                            "col": 0,
                            "type": "const",
                            "value": "年度任务:",
                            "style": "border:1px solid #bfbfbf"
                        },
                        "B8": {
                            "row": 7,
                            "col": 1,
                            "type": "merge",
                            "dataStyle": "list",
                            "extendArrow": "right",
                            "dataSource": "ds1",
                            "name": "FYNUM",
                            "topPC": "B1",
                            "value": "ds1.FYNUM"
                        }
                    }
                }
            }            
        }  

        var vm = new Vue({
            el:"#app",
            data:function(){
                return {
                    policy:{
                        rowGroupFields:[
                            {name:'year',width: 150, isColumnLock:true,isRowFold:true,desc:"年", col:0},
                            {name:'fjd',width: 150, isColumnLock:true,isRowFold:true,desc:"季度", col:1},
                            {name:'month',width: 150, isColumnLock:true,isRowFold:true,desc:"月", col:2},
                            {name:'week',width: 150, isColumnLock:false,isRowFold:false,desc:"周", col:3}
                        ],
                        colGroupFields:[],
                        dataFields:[],
                        dependFields:{week:[{name:'FWNUM',desc:'周任务',width:200,col:4}],month:[{name:'FMNUM',desc:'月任务',width:200,col:5}],fjd:[{name:'FQNUM',desc:'季任务',width:200,col:6}],year:[{name:'FYNUM',desc:'年任务',width:200,col:7}]}
                    },                
                    datas: workbook1.ds1.datas
                }
            }
        })
    })   
</script>	
