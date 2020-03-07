#### dataId 对应下发消息的 msgId
```javascript
// 满足EAP3.0条件包格式
var cdion = {
        "dataId": "dyj_WcuFn0RQ",
        "queryCdions": {
            "join": "and",
            "items": [{
                "sign": "eq",
                "name": "dyjId",
                "dataType": "string",
                "value": "条件值",
                "enable": true
            }]
        }
    }
 
this.ws1.webSocket.send(JSON.stringify(cdion));
```