//放一个数组放置回调函数
let callbacks = [];

//检测脚本是否加载好的方法 如果tinymce加载好了，window对象上会有tinymce属性 若要加载其它脚本只需要将此判断改一下即可
function loadedTinymce() {    
    return window.tinymce
}

const dynamicLoadScript = (src, callback) => {
    const existingScript = document.getElementById(src);//获取script标签元素
    const cb = callback || function () { };//拿到回调函数

    if (!existingScript) {//若没有这个脚本的script标签
        const script = document.createElement('script');//创建一个script标签
        script.src = src // src url for the third-party library being loaded.
        script.id = src
        document.body.appendChild(script)
        callbacks.push(cb);//将回调函数加到callbacks数组中
        const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd;//若是标准浏览器 有onload属性 若是ie浏览器 没有onload属性
        onEnd(script)
    }

    if (existingScript && cb) {//若此script标签存在 并且有回调函数
        if (loadedTinymce()) {//检测是否有tinymce属性
            cb(null, existingScript);//若有tinymce对象，则执行回调函数
        } else {
            callbacks.push(cb);//若没有tinymce对象，则将回调函数加到回调函数数组内
        }
    }

    function stdOnEnd(script) {//标准浏览器加载好脚本后
        script.onload = function () {//脚本加载成功后
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;//将script标签的onload和onerror属性置空
            for (const cb of callbacks) {//执行回调函数 之所以用数组放置回调函数是应对 我仍然事件的发生
                cb(null, script)
            }
            callbacks = null;//将callbacks置空
        }
        script.onerror = function () {//脚本加载失败后
            this.onerror = this.onload = null;//将script标签的onload和onerror置空 覆盖原生的onload事件和nerror事件
            cb(new Error('Failed to load ' + src), script);//脚本加载错误后执行回调函数，返回报错信息
        }
    }

    function ieOnEnd(script) {//若是ie浏览器 
        script.onreadystatechange = function () {//脚本加载成功后
            if (this.readyState !== 'complete' && this.readyState !== 'loaded') return;//脚本没加载好则不执行回调函数 ie浏览器会自动报错
            this.onreadystatechange = null;//若 加载成功
            for (const cb of callbacks) {//执行回调函数
                cb(null, script) // there is no way to catch loading errors in IE8
            }
            callbacks = null;//置空callbacks
        }
    }
}
//暴露出动态加载脚本的方法
export default dynamicLoadScript;