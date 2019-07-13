/**
 * 数据集合
 * @description 存放数据模型 的数据 集合
 */
import SavePackHelper from "@/utils/savePackHelper";
import queryParam from "@/utils/query";
import request from "@/utils/query/request"
import Model from "./model";
import { date as dateUtil } from '@/utils/DateUtil'
import emitter from "event-emitter"
export default class Collection {
  constructor(options = {}, context) {
    this.emitter = emitter();
    this.context = context;
    this._options = Object.create(options);
    this.modelFile = this._options.modelFile;
    this.returnTotal = this._options.returnTotal !=undefined ? this._options.returnTotal : true
    //原始数据
    this.rawData = [];
    //搜索后的数据
    this.data = [];
    //当前所有数据
    this.sourceData = [];
    //从数据集
    this.children = {};
    //数据map
    this.mapDataRecs = new Map();
    //主键map
    this.mapPriRecs = new Map();
    //外键数据map
    this.mapForeignRecs = new Map();
    //外键状态map
    this.mapForeignState = new Map();
    //删除的数据
    this.removed = [];
    this._dirty = false;
    this._initOptions();
    this._initHandler();
    this._initFields(this._options.fields);
    this._initParentRelation();
    this.clearCurrentRecord()
    if (this._options.data) {
      this.setData(this._options.data);
    }
    //this._arrayToPatch();


    //this.relation = [];
    this.total = -1;
    this.pageIndex = 1;
    this.pageSize = 10;
    //主数据集的当前记录
    this.parent = null;
    this.response = Object.create({
      statusName: "status",
      statusCode: 200,
      msgName: "msg",
      countName: "pageTotal",
      dataName: "rows"
    });

    this.request = Object.create({
      pageName: "pageIndex",
      limitName: "pageSize"
    });



  }

  _initOptions() {
    this.id = this._options.id || new Date().valueOf() + parseInt(Math.random() * 100000);;
    this.url = this._options.url || "";
    this.primary = this._options.primary || [];
    this.sortFields = this._options.sortFields;
    this.parentRelation = this._options.parentRelation;
    //this.relation = this._options.relation;


  }
  _initParentRelation() {
    if (!this.parentRelation)
      return;

    let that = this, pRelation = that.parentRelation, mainStore = that.context.$dataset.get(pRelation.storeid)//that._dataset.get(pRelation.storeid);
    that.mainStore = mainStore;
    that.mainStore.children[that.id] = that;
    that.parent = mainStore.curRecord;
    //主数据集当前记录改变
    mainStore.on("recordChange", (main, rec) => {

      that.parent = main.getModel(rec);
      let data = that.mapForeignRecs.get(that.parent.id);
      that.data = data ? [...data] : [];
      that.sourceData = data ? [...data] : [];
    })
    //主数据集字段修改时本数据集跟着改
    mainStore.on("afterChange", (model, options) => {

      //改到关系字段
      if (pRelation.parentField.indexOf(options.field) != -1) {
        let selfField = pRelation.selfField[pRelation.parentField.indexOf(options.field)];
        let foreignRecs = that.mapForeignRecs.get(model.id) || [];
        for (let i = 0; i < foreignRecs.length; i++) {
          foreignRecs[i][selfField] = options.value;
        }
        //that.batchSetField(selfField, options.value)
      }
    })


  }
  _initFields(fields) {
    let _fields = {};
    this.sortFields = this.sortFields || [];
    if (Array.isArray(fields)) {//将数组转成对象
      for (let i = 0; i < fields.length; i++) {
        _fields[fields[i]] = fields[i];
      }
    } else
      _fields = fields;
    //字段对象并初始化
    for (let field in _fields) {
      _fields[field] = this._setDefField(_fields[field])
      if (this.sortFields.indexOf(field) == -1)
        this.sortFields.push(field)
      if (this.primary.length > 0)
        this.primary.push(field)
    }

    this.fields = _fields;
  }
  _setDefField(fieldCfg) {
    if (typeof fieldCfg == 'string')
      fieldCfg = { name: fieldCfg };
    fieldCfg.name = fieldCfg.name || fieldCfg.id;
    fieldCfg.desc = fieldCfg.desc || fieldCfg.name;
    let defField = {
      name: '',
      desc: '',
      dbtype: 'string',
      fileType: 'db',
      length: 50,
      decimal: 6,
      hidden: false,
      readOnly: false,
      required: false,
      redundant: false,
      operate: 'def'
    }
    return Object.assign(defField, fieldCfg);
  }
  _initHandler() {
    var evt = null;
    for (let evtName in this._options.handler) {
      evt = this._options.handler[evtName]
      this.on(evtName, evt);
    }

  }
  _createModel(data = {}, options) {
    if (this.mainStore && !this.parent) {
      console.log(this.id + "的主数据集没找到当前记录，添加失败");
      return null;
    }
    let that = this;
    let _options = {
      store: that,
      data: data
    }
    _options = Object.assign(_options, options);
    let model = new Model(_options);
    if (!_options.isNew && !_options.reset)
      this.rawData.push(JSON.parse(JSON.stringify(data)));
    this.data.push(model.data);
    this.sourceData.push(model.data);
    //添加主键map
    this.mapPriRecs.set(model.getPrimaryVal(), model);
    //添加数据map
    this.mapDataRecs.set(model.data, model);
    //添加外键map
    if (this.parent) {
      if (!this.mapForeignRecs.has(this.parent.id))
        this.mapForeignRecs.set(this.parent.id, []);
      this.mapForeignRecs.get(this.parent.id).push(model.data);
    }


    return model;
  }
  _arrayToPatch() {

    let that = this, push = this.data.push
    this.data.push = (...args) => {
      push.apply(this.data, args);
    }
  }
  //设置数据是否修改过
  setDirty(val, options = {}) {
    if (val != this._dirty) {
      this._dirty = val;
      this.emitter.emit('dirtyChange', this, val);
    }

  }
  getDirty() {
    return this._dirty;
  }
  //触发事件
  emit(eventName) {

    let args = [...arguments]
    //delete args[eventName];
    args.shift();
    this.emitter.emit(eventName, ...args)
  }
  on(eventName, callback) {
    this.emitter.on(eventName, callback)
  }

  clearCurrentRecord() {
    //创建空数据
    let emptyData = { __temp: true }
    for (let field in this.fields) {
      emptyData[field] = null
    }
    let me = this
    this.curRecord = new Proxy(emptyData, {

      set: (target, key, value, receiver) => {
        if (value != undefined) {
          let data = {}
          data[key] = value
          me.add(data)
        }
        return Reflect.set(target, key, value, receiver);
      }
    });
  }
  //当前记录是否为空
  curRecordIsNull() {
    return _.isEmpty(this.curRecord) || this.curRecord.__temp == true;
  }
  //设置当前记录
  setCurRecord(rec) {
    if (rec == this.curRecord)
      return;
    this.curRecord = rec;
    this.emitter.emit('recordChange', this, rec);
  }
  //批量更新字段
  batchSetField(field, val, start, end) {
    start = start || 0;
    end = end || this.sourceData.length;
    for (let i = start; i < end; i++) {
      let data = this.sourceData[i];
      data[field] = val;
    }
  }
  //设置数据
  setData(data, options = {}) {
    let that = this;
    if (options.append) {

    } else {
      //this.rawData = [];
      this.clear()
    }
    data.forEach((item, index) => {
      that._createModel(item)
    })


  }
  getCount() {
    return this.data.length;
  }
  //获取第一条数据
  first() {
    if (this.data.length > 0)
      return this.data[0];
    return null;
  }
  //获取最后一条数据
  last() {
    if (this.data.length > 0)
      return this.data[this.data.length - 1];
    return null;
  }
  //根据主键/数据获取模型
  getModel(key) {
    let result = this.mapDataRecs.get(key);
    if (!result)
      result = this.mapPriRecs.get(key);
    return result
  }
  //获取数据下标
  indexOf(rec) {
    if (this.data) {
      return this.data.findIndex(rec);
    }
    return -1;
  }
  //创建默认参数
  _createQueryDefParam(param) {
    let paramInstance;
    if (!param)
      paramInstance = new queryParam.Param()
    else {
      if (param.className == "Params") {
        paramInstance = param
      } else if (param.className == "Where") {
        paramInstance = new queryParam.Param()
        paramInstance.where = param
      } else {
        paramInstance = new queryParam.Param()
        let where = paramInstance.where;
        let fields = this.fields
        for (let field in param) {
          let bizFiled = fields[field];
          let val = param[field]
          if (val != null && val != "" && val != undefined) {
            if (bizFiled) {
              where[bizFiled.operate](field, val)
            } else {
              if (_.isArray(val)) {
                if (_.isDate(val[0])) {
                  where.between(field, dateUtil.format(val[0], "yyyy-MM-dd hh:mm:ss") + '到' + dateUtil.format(val[1], "yyyy-MM-dd hh:mm:ss"))
                } else
                  where.in(field, val)
              }
              else
                where.def(field, val)
            }

          }
        }
      }
    }
    if (!paramInstance.where.isPaging())
      paramInstance.where.setPage(1, 20)
    paramInstance.returnTotal = paramInstance.returnTotal || this.returnTotal;
    return paramInstance;
  }
  //加载数据
  load(param, options = {}) {
    let that = this;
    that.cancel = false;

    let promise = request(this._createQueryDefParam(param), this.modelFile)
    this.emitter.emit('beginload', param);
    promise.then(response => {
      this.lastParam = param
      const data = response.dataPack.rows;
      that.setData(data, options)
      this.emitter.emit("afterload", response, data)
      let last = that.last()
      if (that.curRecordIsNull() && last)
        this.setCurRecord(last);
    })
    return promise
  }
  //翻页
  turnPage(pageIndex, pageSize) {
    let param
    if (this.lastParam)
      param = this.lastParam;
    else {
      param = new queryParam.Param()
      param.where = new queryParam.Where()
    }
    if (!pageSize) {
      pageSize = param.getPageSize() || 20
    }
    param.where.setPage(pageIndex, pageSize)
    this.load(param)
  }
  //添加数据
  add(data = []) {
    let that = this;
    if (!Array.isArray(data)) {
      data = [data];
    }
    that.cancel = false;
    that.emitter.emit('beforeadd', data, that);
    if (that.cancel)
      return
    for (let i = 0; i < data.length; i++) {
      that._createModel(data[i], { isNew: true })
    }
    that.setDirty(true);
    if (that.curRecordIsNull())
      that.setCurRecord(this.last());
    that.emitter.emit('afteradd', data, that);
  }
  //删除数据
  remove(data = []) {
    let that = this;
    if (!Array.isArray(data)) {
      data = [data];
    }
    that.emitter.emit('beforeRemove', data, that);
    for (let i = 0; i < data.length; i++) {
      this.data.splice(this.data.findIndex(item => data[i] === item), 1)
      this.sourceData.splice(this.sourceData.findIndex(item => data[i] === item), 1)
      let model = this.mapDataRecs.get(data[i])
      if (model && !model.isNew)
        this.removed.push(data[i])
      //删除Data数据
      this.mapDataRecs.delete(data[i]);
      //删除主键数据
      this.mapPriRecs.delete(model.getPrimaryVal(), model);
      //删除外键数据
      if (this.mainStore) {
        let foreignRecs = this.mapForeignRecs.get(this.parent.id);
        foreignRecs.splice(foreignRecs.findIndex(item => data[i] === item), 1)
      }

    }
    that.emitter.emit('afterRemove', data, that);
  }
  //清空数据
  clear() {
    this.data = [];
    this.sourceData = [];
    this.removed = [];
    this.mapDataRecs.clear();
    this.mapPriRecs.clear();
    this.clearCurrentRecord()
    this.rawData = []
    this.emitter.emit('clear', this);
  }
  //还原数据
  reset() {
    this.data = [];
    this.sourceData = [];
    this.removed = [];
    this.mapDataRecs.clear();
    this.mapPriRecs.clear();
    for (let i = 0; i < this.rawData.length; i++) {
      this._createModel(this.rawData[i], { reset: true })
    }
    this.setCurRecord(this.first());
    this.emitter.emit('reset', this);
  }
  //整理数据，使数据变干净
  clearUp() {
    for (let i = 0; i < this.sourceData.length; i++) {
      let rec = this.sourceData[i], model = this.getModel(rec);
      model.clearUp()
    }
    this.removed = []
    this.setDirty(false)
  }
  //同步服务端返回的结果
  syncResult(result) {

  }
  _toValueTypeJson(json) {
    let result = {}
    for (let k in json) {
      let val = json[k]
      if (val instanceof Date) {
        result[k] = dateUtil.format(val, 'yyyy-MM-dd hh:mm:ss')
      } else
        result[k] = val;
    }
    return result;
  }
  //获取修改过的数据（含增、删、改）
  getSavePack() {
    let savePackHelper = new SavePackHelper(this.modelFile);
    for (let i = 0; i < this.sourceData.length; i++) {
      let rec = this.sourceData[i], model = this.getModel(rec);
      //整理新增的数据
      if (model.isNew) {
        savePackHelper.add(Object.assign({}, this._toValueTypeJson(model.data), { $index: i }))
      }
      else if (model.getDirty()) {//整理修改的数据
        savePackHelper.update(model.rawData, Object.assign({}, model.getModify(), { $index: i }))
      }
    }
    //整理删除的数据
    for (let i = 0; i < this.removed.length; i++) {
      let rec = this.removed[i]
      savePackHelper.remove(rec)
    }
    return savePackHelper
  }
  afterSave(response) {
    this.clearUp()
  }
  save(options = {}) {
    let savePackHelper = this.getSavePack()
    let promise = savePackHelper.save();
    let me = this;
    promise.then((response => {
      me.afterSave(response)
    }))
    return promise
  }

}
