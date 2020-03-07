## 快速上手




```css
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">    
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <!-- 引入Vue -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <!-- 引入element组件 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <!-- 引入图表组件 -->
    <script src="http://hieap.cn/amrept-web/deploy/eaptpl/zxzy/resdir/echarts.min.js"></script>
    <script src="http://hieap.cn/amrept-web/deploy/eaptpl/zxzy/resdir/map/china.js"></script>
    <script src="http://hieap.cn/amrept-web/deploy/eaptpl/zxzy/resdir/map/provinceall.js"></script>
    <!-- 引入报表组件 -->
    <script src="http://hieap.cn/amrept-web/deploy/eaptpl/zxzy/resdir/zhc-birt-cmps.js"></script>
</head>

<body>
    <div id="app">
        <hc-text-label :conf="hcTextLabelConf"></hc-text-label> 
    </div>
</body>

<script>
    debugger;
    Vue.prototype.$HCBIRT.tabHeight = 20;
    new Vue({
        el: '#app',
        data: function () {
            return {
                hcTextLabelConf: {
                    controlName: "HcTextLabel",
                    controlId: "HcTextLabel_01",                  
                    title: "Hello zhc-birt-cmps",
                    style: "text-align: center;font-size: 16px;font-weight: bold;color: #32d3eb;"
                }
            }
        }
    })
</script>
</html>
```


