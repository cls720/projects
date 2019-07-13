/**
 * 数据模型
 */
export default class Model {
  constructor(options = {}) {
    this._options = Object.create(options);
    this._initOptions();
    this._initData();
  }
  _initOptions() {
    var that = this;
    this.id = new Date().valueOf() + parseInt(Math.random() * 100000);
    that.store = that._options.store;
    that.fields = that.store.fields
    this._dirty = false;
    this.isNew = that._options.isNew;
  }
  _initData() {
    let that = this, rawdata = Object.assign({}, that._options.data);
    that.rawData = rawdata;

    if (that.isNew) {
      for (let i = 0; i < that.store.sortFields.length; i++) {
        let sField = that.store.sortFields[i];
        let fieldInfo = that.fields[sField]
        let dval = rawdata[sField];
        if (dval == undefined) {
          if (fieldInfo && fieldInfo.default) {
            if (fieldInfo.default.rule == "first" && that.store.sourceData.length > 0) {
              rawdata[sField] = that.store.sourceData[0][sField];
            } else if (fieldInfo.redundant && fieldInfo.default) {
              if (fieldInfo.default.exps) {
                let val = fieldInfo.default.exps.call(that, that);
                rawdata[sField] = val;
                that._setRedundant(sField, val);
              }

            } else {
              if (fieldInfo.default.exps) {
                let val = fieldInfo.default.exps.call(that, that);
                rawdata[sField] = val;
              }
            }
          } else if (fieldInfo && fieldInfo.redundant) {
            rawdata[sField] = that.store.sourceData[0][sField];
          }
        }
      }
    }
    let handler = {
      set: that._set()
    }
    let data = new Proxy(Object.assign({}, rawdata), handler);
    that.data = data;
  }

  //转换有效bool值
  _converBoolVal(val) {
    if (val !== "") {
      if (typeof (val) == "string") {
        //val = Scp.String.trim(val.toLowerCase());// val.toLowerCase().trim();IE用不了
        // WPS输入true时返回的是Y
        if (val == "yes" || val == "是" || val == "1" || val == "true"
          || val == "y") {
          val = true;
        } else
          val = false;
      } else if (val == 1 || val == true) {
        val = true;

      } else
        val = false;
    } else
      val = null;
    return val;
  }
  //更新冗余字段
  _setRedundant(field, value) {
    let sourceData = this.store.sourceData;
    for (let i = 0; i < sourceData.length; i++) {
      sourceData[i][field] = value;
    }
  }
  //计算自动填充触发字段
  _calculateFireField(field, filelink) {
    let filedInfo = this.fields[field];
    if (filedInfo && filedInfo.fireTarget && filedInfo.fireTarget.length > 0) {
      let fireTarget = filedInfo.fireTarget;
      //汇总更新目标字段也要加入
      if (filedInfo.summaryTo && filelink.indexOf(filedInfo.summaryTo) == -1) {
        filelink.push(filedInfo.summaryTo)
        this._calculateFireField(filedInfo.summaryTo, filelink)
      }

      for (let i = 0; i < fireTarget.length; i++) {
        if (filelink.indexOf(fireTarget[i]) == -1) {
          filelink.push(fireTarget[i])
          this._calculateFireField(fireTarget[i], filelink)
        }

      }
    }
    return filelink;
  }
  //设置自动填充默认值
  _setDefault(field) {
    let fieldInfo = this.fields[field];
    if (fieldInfo && fieldInfo.default) {
      if (fieldInfo.default.exps && typeof (fieldInfo.default.exps) == "function") {
        let val = fieldInfo.default.exps.call(this, this);
        this.data[field] = val;
      }
    }
  }
  _set() {
    let that = this
    return (target, field, value, receiver) => {
      let oldValue = target[field]
      let options = { field, oldValue, value };
      if (oldValue === value)
        return true;
      that.cancel = false;
      that.store.emit('beforeChange', that, options);
      if (that.cancel)
        return true;
      let fieldInfo = that.fields[field];
      if (fieldInfo) {
        value = fieldInfo.dbtype == "bool" ? this._converBoolVal(value) : value;
      }
      if (!this._validation(field, value))
        return true;


      //主键约束还没做



      let result = Reflect.set(target, field, value, receiver);
      that.store.emit('afterChange', that, options);
      //处理自动填充
      if (that._autoFilling != true) {
        that._autoFilling = true;
        let fireTarget = [];
        fireTarget = that._calculateFireField(field, fireTarget)
        if (fireTarget.length > 0) {
          for (let i = 0; i < that.store.sortFields.length; i++) {
            var sField = that.store.sortFields[i];
            if (fireTarget.indexOf(sField) != -1)
              that._setDefault(sField);
          }
        }

        that._autoFilling = false;
      }

      //更新从表字段
      // if (that.store.relation){
      //   for(let i=0;i<that.store.relation.length;i++){
      //     let relation = that.store.relation[i];

      //   }
      // }

      //更新冗余字段
      if (fieldInfo && fieldInfo.redundant) {
        that._setRedundant(field, value);
      }

      that.setDirty(true);

      return result;

    }
  }
  _validation(field, value) {
    let fieldinfo = this.fields[field];
    if (!fieldinfo)
      return true;
    let validation = fieldinfo.fieldinfo;
    if (validation && validation.length > 0) {
      for (let i = 0; i < validation.length; i++) {
        valida = validation[i];
        let result = valida.exps.call(this.store, this, value);
        if (result !== true)
          return false;
      }
    }
    return true;
  }
  //获取主键值
  getPrimaryVal() {
    let fields = this.store.primary;
    let result = "";
    for (let i = 0; i < fields.length; i++) {
      result = result + this.data[fields[i]];
    }
    return result;
  }

  //设置数据是否修改过
  setDirty(val, options = {}) {
    this._dirty = val;
    if (val == true)
      this.store.setDirty(val);
  }
  //获取数据是否修改过
  getDirty() {
    return this._dirty === false ? false : true;
  }
  //获取修改数据
  getModify() {
    let raw = this.rawData, data = this.data, result = {};
    for (let field in data) {
      if (data[field] !== raw[field]) {
        result[field] = data[field];
      }
    }
    return result;
  }
  clearUp() {
    if (!this.getDirty())
      return
    //整理新增的数据
    if (this.isNew) {
      delete this.isNew
      this.setDirty(false)
      this.rawData = Object.assign({}, this.data);;
    }
    else {//整理修改的数据
      this.setDirty(false)
      this.rawData = Object.assign({}, this.data);;
    }
  }
  //获取字段值
  get(field) {
    let that = this
    return that.data[field]
  }
  //设置值
  set(data) {
    //that._setOptions=options;
    for (let key of data) {
      this[key] = data[key];
    }
    //delete that._setOptions;
    return true;
  }
}
