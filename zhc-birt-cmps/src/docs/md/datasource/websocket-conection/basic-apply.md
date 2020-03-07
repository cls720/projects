

:::demo  通用webSocketUrl地址配置，建立websocket连接，实时接收下推消息，设置到目标target数据集列表

```html
<template>    
    {{JSON.stringify(ds1.curRecord)}}    
</template>

<script>    
    import WebSocketConection from "@/components/DataSource/WebSocketConection"
    import JsWebSocketDataSet from "@/components/DataSource/JsWebSocketDataSet" 

    export default{        
        data() {
            return {
                dataSource: {
                    controlName: "WebSocketConection",
                    controlId: "wsc1",
                    webSocketUrl: "ws://114.118.97.228:8080/amrept-web/dyj/sktcloud/admin.do",
                    target: {
                        dyj_WcuFn0RQ: {
                        datasetId: "ds1"
                        }
                    }
                },
                dataSet:{
                    controlName: "JsWebSocketDataSet",
                    controlId: "ds1",
                    datas: []
                },
                ws1:function(){
                    return {};
                },
                ds1:function(){
                    return {};
                }
            }
        },
        mounted(){
            this.ds1 = new JsWebSocketDataSet(this.dataSet);
            this.ws1 = new WebSocketConection(this.dataSource);            
        },
        methods:{
        }
    }
</script>
```
:::

