import types from "./types"
import keys from "./keys"

const defOperate = "="
export class WhereCondition {
    constructor(config) {
        config = config || {};
        this.className = 'WhereCondition'
        this.enabled = null,// 新添加的
            this.sign = null,// 操作符
            this.name = null,// 属性
            this.dataType = null,// 数据类型
            this.desc = null,// 描述
            this.value = null,// 值
            this.vtype = null,
            this.enabled = true,
            this.tablefilter = null,

            this.setValue(config.name, config.value, config.dataType,
                config.sign, config.vtype, config.tablefilter,
                config.desc);
    }
    setValue(property, value, dataType, operator, vtype,
        tablefilter, desc) {
        this.sign = operator || "=";
        this.name = property || "";
        // this.vtype = vtype;
        this.desc = desc || "";
        this.dataType = dataType || types.string;
        var val = (value === "" || value === null || value === undefined)
            ? ""
            : value;

        if (["in", "notin"].indexOf(operator) > -1
            && (!(val instanceof Array) && val.split)) {
            val = val.split(",");
        }
        this.value = val;
        this.enabled = true;
        // this.tablefilter = tablefilter == undefined ? false :
        // tablefilter;
    }
    getValue() {
        return {
            sign: this.sign,
            name: this.name,
            desc: this.desc,
            dataType: this.dataType,
            // vtype : this.vtype,
            value: this.value,
            enabled: true
            // tablefilter : this.tablefilter
        };
    }

};


export class Where {

    constructor(config) {
        config = config || {};
        this.className = 'Where'
        this.join = null
        this.items = null
        // _.extend(this, config);
        if (config.junction)
            config.join = config.junction;
        if (!config.join)
            config.join = "and";

        if (config.criterionData == null) {
            if (!config.join)
                config.join = "and";
            this.setWhereData(config.join, []);
        } else {
            var paramsDataType = typeof (config.criterionData);
            var objParamsData = {};
            switch (paramsDataType) {
                case "string":
                    objParamsData = $.parseJSON(config.criterionData);
                    break;
                case "object":
                    objParamsData = config.criterionData;
                    break;
            }
            this.setCriterionData(objParamsData);
        }
    }

    setValue(join, items) {
        this.setWhereData(join, items);
    }

    setWhereData(join, items) {
        this.join = join || "and";
        this.items = items || [];
    }
    // 

    setCriterionData(criterionData) {
        this.join = criterionData.join || "and";
        this.items = [];
        this.recursiveSetCriteria(this, criterionData.items);
    }
    recursiveSetCriteria(where, items) {
        var me = this;
        if (items == null || items.length == 0) {
            where.items = [];
            return;
        }
        var subLen = items.length;
        for (var i = 0; i < subLen; i++) {
            var subItem = items[i];
            if (subItem.join) {
                var whereItem = new Where({
                    join: subItem.join
                });
                this.recursiveSetCriteria(whereItem, subItem.items);
                where.addConditions(whereItem);
            } else {
                if (subItem.sign) {
                    var fieldName = subItem.name.replace("&[", "").replace("]",
                        "");
                    fieldName = fieldName.replace("this.get('", "").replace(
                        "')", "");
                    if (typeof subItem.value == "object"
                        && subItem.value.jsExpr) {
                        var tempVal = me.filterValue(subItem.value)
                        where.addCondition(fieldName, subItem.dataType,
                            tempVal, subItem.sign, subItem.vtype, false,
                            subItem.tablefilter, subItem.desc);
                    } else
                        where.addCondition(fieldName, subItem.dataType,
                            subItem.value, subItem.sign, subItem.vtype,
                            false, subItem.tablefilter, subItem.desc);
                }

            }
        }
    }
    // 过滤表达式
    filterValue(valueExpress) {
        var me = this, val;
        if (typeof (valueExpress.jsExpr) == "string") {
            var func = valueExpress.jsExpr.replace("!!", "").replace("!!", "");
            eval('func = ' + func);
            val = func.call();
        } else {
            val = valueExpress.jsExpr.call()
        }
        return val;

    }


    addConditions(where) {
        // 
        if (where) {
            this.items.push(where);
        }
    }

    addCondition(property, value, dataType, operator, vtype,
        isCover, tablefilter, desc) {
        operator = operator == "=" ? "eq" : operator;
        if (isCover)
            for (var i = 0; i < this.items.length; i++) {
                if (property == this.items[i].name) {
                    this.items[i].value = value;
                    this.items[i].desc = desc;
                    this.items[i].vtype = vtype;
                    this.items[i].dataType = dataType || types.string;
                    this.items[i].sign = operator;
                    this.items[i].tablefilter = tablefilter;
                    return;
                }
            }
        var condition = new WhereCondition({
            name: property,
            desc: desc,
            value: value,
            vtype: vtype == undefined ? "normal" : vtype,
            sign: operator,
            dataType: dataType || types.string,
            tablefilter: tablefilter == undefined
                ? false
                : tablefilter
        });

        this.items.push(condition);
    }

    add(property, value, dataType, vtype, isCover, tablefilter, desc) {
        this.addEqual(property, value, dataType, vtype, isCover, tablefilter,
            desc)
    }

    addDefault(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, defOperate,
            vtype, isCover, tablefilter, desc);
    }
    // isCover是否覆盖原来的值
    def(property, value, dataType, vtype, isCover, tablefilter, desc) {

        this.addDefault(property, value, dataType, vtype, isCover, tablefilter,
            desc)
    }

    addEqual(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "eq", vtype, isCover,
            tablefilter, desc);
    }

    equal(property, value, dataType, vtype, isCover, tablefilter,
        desc) {

        this.addEqual(property, value, dataType, vtype, isCover, tablefilter,
            desc)
    }
    eq(property, value, dataType, vtype, isCover, tablefilter, desc) {

        this.addEqual(property, value, dataType, vtype, isCover, tablefilter,
            desc)
    }

    addArray(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        if (!(value instanceof Array) && value.split) {
            value = value.split(",");
        }
        if (value.length != 0)
            this.addCondition(property, value, dataType, "in", vtype, isCover,
                tablefilter, desc);
    }
    in(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        if (!(value instanceof Array) && value.split) {
            value = value.split(",");
        }
        if (value.length != 0)
            this.addCondition(property, value, dataType, "in", vtype, isCover,
                tablefilter, desc);
    }

    addNotIn(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        if (!(value instanceof Array) && value.split) {
            value = value.split(",");
        }
        if (value.length != 0)
            this.addCondition(property, value, dataType, "notIn", vtype,
                isCover, tablefilter, desc);
    }
    notIn(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        if (!(value instanceof Array) && value.split) {
            value = value.split(",");
        }
        if (value.length != 0)
            this.addCondition(property, value, dataType, "notIn", vtype,
                isCover, tablefilter, desc);
    }

    addIsNull(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "isnull", "", isCover,
            tablefilter, desc);

    }

    addIsNotNull(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "isnotnull", "", isCover,
            tablefilter, desc);
    }
    inRange(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "inRange", "", isCover,
            tablefilter, desc);
    }
    outRange(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "outRange", "", isCover,
            tablefilter, desc);
    }
    between(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "between", "", isCover,
            tablefilter, desc);
    }
    inValue(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        if (!(value instanceof Array)) {
            value = value.split(",");
        }
        this.addArray(property, value, dataType, vtype, isCover, tablefilter,
            desc);
    }

    addNotEqual(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "noteq", vtype, isCover,
            tablefilter, desc);
    }
    noteq(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "noteq", vtype, isCover,
            tablefilter, desc);
    }
    notEqualfunction(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addNotEqual(property, value, dataType, vtype, isCover,
            tablefilter, desc)
    }
    addGreaterThan(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "gt", vtype, isCover,
            tablefilter, desc);
    }
    //
    gt(property, value, dataType, vtype, isCover, tablefilter, desc) {
        this.addCondition(property, value, dataType, "gt", vtype, isCover,
            tablefilter, desc);
    }
    // 大于
    greaterThan(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addGreaterThan(property, value, dataType, vtype, isCover,
            tablefilter, desc);
    }
    addGreaterThanAndEqual(property, value, dataType, vtype,
        isCover, tablefilter, desc) {
        this.addCondition(property, value, dataType, "gteq", vtype, isCover,
            tablefilter, desc);
    }
    gteq(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "gteq", vtype, isCover,
            tablefilter, desc);
    }
    // 大于等于
    greaterThanAndEqual(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addGreaterThanAndEqual(property, value, dataType, vtype, isCover,
            tablefilter, desc)
    }
    addLessThan(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "lt", vtype, isCover,
            tablefilter, desc);
    }
    lt(property, value, dataType, vtype, isCover, tablefilter, desc) {
        this.addCondition(property, value, dataType, "lt", vtype, isCover,
            tablefilter, desc);
    }
    // 小于
    lessThan(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addLessThan(property, value, dataType, vtype, isCover,
            tablefilter, desc)
    }
    addLessThanAndEqual(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "lteq", vtype, isCover,
            tablefilter, desc);
    }
    lteq(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "lteq", vtype, isCover,
            tablefilter, desc);
    }
    // 小于等于
    lessThanAndEqual(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addLessThanAndEqual(property, value, dataType, vtype, isCover,
            tablefilter, desc)
    }
    addLike(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addCondition(property, value, dataType, "like", vtype, isCover,
            tablefilter, desc);
    }
    like(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addLike(property, value, dataType, vtype, isCover, tablefilter,
            desc)
    }
    addLeftLike(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "likeLeft", vtype,
            isCover, tablefilter, desc);
    }
    // 左Like
    leftLike(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addLeftLike(property, value, dataType, vtype, isCover,
            tablefilter, desc);

    }
    likeLeft(property, value, dataType, vtype, isCover, tablefilter,
        desc) {
        this.addLeftLike(property, value, dataType, vtype, isCover,
            tablefilter, desc);

    }
    addRightLike(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addCondition(property, value, dataType, "likeRight", vtype,
            isCover, tablefilter, desc);
    }
    // 右Like
    rightLike(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addRightLike(property, value, dataType, vtype, isCover,
            tablefilter, desc);
    }
    likeRight(property, value, dataType, vtype, isCover,
        tablefilter, desc) {
        this.addRightLike(property, value, dataType, vtype, isCover,
            tablefilter, desc);
    }
    getItemByIndex(i) {
        return this.items[i];
    }
    deleteItemByIndex(i) {
        this.items.splice(i, 1);
    }

    getData() {
        var len = this.items.length;
        if (len == 0) {
            return null;
        }
        var whereData = {
            join: this.join,
            items: []
        };
        for (var i = 0; i < len; i++) {
            var item = this.items[i];
            this.recursiveWhereData(whereData, item);
        }
        return whereData;
    }

    recursiveWhereData(whereData, item) {
        if (item.items) {
            var subLen = item.items.length;
            if (subLen > 0) {
                var subWhereData = {
                    join: item.join,
                    items: []
                };
                for (var i = 0; i < subLen; i++) {
                    var subItem = item.items[i];
                    this.recursiveWhereData(subWhereData, subItem);
                }
                whereData.items.push(subWhereData);
            }
        } else {
            var itemCondition = item.getValue();
            whereData.items.push(itemCondition);
        }
    }

    toJSON() {
        return this.getData();
    }
    // 将条件转成字符结果
    toStr() {
        return JSON.stringify(this.getData());
    }

    // 根据字段名称返回该字段条件对象。
    getConditionByKey(key) {
        var len = this.items.length;
        for (var i = 0; i < len; i++) {
            var item = this.items[i];
            if (item.property && item.property == key) {
                return item;
            }
        }
        return null;
    }
    // 应用存储过程
    setCustomWhere(join) {
        var where = new Where({
            join: join || "and"
        });
        var i = 0, len = this.items.length;
        for (; i < len; i++) {
            if (this.items[i].property) {
                where.addCondition(this.items[i].name, this.items[i].desc,
                    this.items[i].value, this.items[i].sign);
            } else
                this._recursionWhere(where, this.items[i].items);
        }
        this.join = where.join;;
        this.items = where.items;
    }
    // 递归where 所有
    _recursionWhere(where, items) {
        var i = 0, len = items.length;
        for (; i < len; i++) {
            if (items[i].property)
                where.addCondition(items[i].name, items[i].desc,
                    items[i].value, items[i].sign);
            else
                this._recursionWhere(where, items[i].items);
        }

    }
    isPaging() {
        var pageIndexKey = keys.pageIndex;
        var pageSizeKey = keys.pageSize;

        if (_.has(this, pageIndexKey) && _.has(this, pageSizeKey))
            return true;
        else
            return false;
    }
    setPage(pageIndex, pageSize) {
        var pageIndexKey = keys.pageIndex;
        var pageSizeKey = keys.pageSize;
        if (pageIndex == -1 || pageSize == -1) {
            pageIndex = -1;
            pageSize = -1;
        }
        this[pageIndexKey] = pageIndex;
        this[pageSizeKey] = pageSize;
        return;

    }
    getPageIndex() {
        var pageIndex = this[keys.pageIndex];
        if (pageIndex == -1)
            return 1;
        return pageIndex;
    }
    getPageSize() {
        var pageSize = this[keys.pageSize];
        if (pageSize == -1)
            return 1000;
        return pageSize;
    }
}