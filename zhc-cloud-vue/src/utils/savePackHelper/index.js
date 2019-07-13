import request from "../request";
import SYSCONST from "@/utils/sysconst"
const paramKey = {
    root: "__body",
    data: "datas",
    modelFile: "modelFilePath",
    state: "$state",
    old: "$old",
    insertStateVal: "rsInsert",
    updateStateVal: "rsUpdate",
    removeStateVal: "rsDelete",
    overrideStateVal: "rsOverride"

}
export default class SavePackHelper {
    constructor(modelFile) {

        this.modelFile = modelFile;
        this.dataPacks = {};
        this.dataPacks[paramKey.data] = [];
        this.dataPacks[paramKey.modelFile] = this.modelFile;

    }
	/**
	 * @method add
	 * @description 添加
	 * @param data
	 *            {Object} 数据包
	 */
    add(data) {
        var me = this;
        data[paramKey.state] = paramKey.insertStateVal;
        me.dataPacks[paramKey.data].push(data);
    }
	/**
	 * @method update
	 * @description 更新
	 * @param old
	 *            {Object} 旧包
	 * @param data
	 *            {Object} 新数据包
	 */
    update(old, data) {
        var me = this;
        var row = {};
        for (var a in data) {
            if (data[a] == void 0)
                continue;
            row[a] = data[a];
        }
        row[paramKey.state] = paramKey.updateStateVal;
        row[paramKey.old] = old;
        me.dataPacks[paramKey.data].push(row);
    }
    overwirte(old, data) {
        var me = this;
        var row = {};
        for (var a in data) {
            if (data[a] == void 0)
                continue;
            row[a] = data[a];
        }
        row[paramKey.state] = paramKey.overrideStateVal;
        row[paramKey.old] = old;
        me.dataPacks[paramKey.data].push(row);
    }
	/**
	 * @method del
	 * @description 删除
	 * @param data
	 *            {Object} 数据包
	 */
    remove(data) {
        var me = this;
        data[paramKey.state] = paramKey.removeStateVal;
        me.dataPacks[paramKey.data].push(data);
    }
	/**
	 * @method toStr
	 * @description 获取数据包字符串
	 */
    toString() {
        return JSON.stringify(this.dataPacks)
    }
    clear() {
        this.dataPacks = {}
    }
    getDataPack() {
        return this.dataPacks;
    }
    save(options) {
        options = options || {};
        let param = {}
        param[paramKey.root] = JSON.stringify([this.getDataPack()])
        Object.assign(param, options)
        let projectName = SYSCONST.PROJECT_NAME
        return request({
            url: `/web/${projectName}/data/save`,//process.env.NODE_ENV === 'development' ? `/${modelFile}` : `web/data/query/${modelFile}`,
            method: 'post',
            data: param
        })

    }
};