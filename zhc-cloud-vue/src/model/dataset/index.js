/**
 * 数据仓库
 * @description  存放数据集的集合
 */
import applyMixin from "./mixin";
import Collection from "./collection";
let Vue;
export class DataSet {
    constructor(Vue,options = []) {
       
        this._Vue =  Vue
        // Auto install if it is not done yet and `window` has `Vue`.
        // To allow users to avoid auto-installation in some cases,
        // this code should be placed here. See #731

        // if (!Vue && typeof window !== "undefined" && window.Vue) {
        //     install(window.Vue);
        // }

        // if (!Vue.http) {
        //   throw "you need vue-resource to support http request!";
        // }

        //数据集，集合
        //this._storeArr = [];
        this._storeMap = Object.create(null);
        //创建属性监听器(备用--方法有$watch、$set)
        //this._watcherVM = new Vue();
        if (Array.isArray(options)) {
            options.forEach(element => {
                this.createDataStore(element);
            });
        } else
            this.createDataStore(options);

    }
    /**
     * 创建数据集
     *
     * @param {*} [options={}]
     * @memberof DataSet
     */
    createDataStore(options = {}) {
        var store = new Collection(options, this.context,this._Vue);
        this._storeMap[store.id] = store;
        return store;
        //this._storeArr.push(store);
    }
    /**
     *删除数据集
     *
     * @param {string} [dataSetId=""]
     * @memberof DataSet
     */
    removeDataStore(dataSetId = "") {
        delete this._storeMap[dataSetId]
    }

    /**
     * 返回数据集 实例对象
     *
     * @param {string} [dataSetId=""]
     * @memberof DataSet
     */
    getDataStore(dataSetId = "") {
        return this._storeMap[dataSetId];
    }
}

export function install(_Vue) {
    if (Vue && _Vue === Vue) {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          "[DataSet] already installed. Vue.use(DataSet) should be called only once."
        );
      }
      return;
    }
    Vue = _Vue;

   

    applyMixin(_Vue);
}

export default{
    DataSet,
    install
}