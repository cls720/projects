import { Where } from "./where"
import keys from "./keys"
export default class Params {

    constructor(config) {
        config = config || {};
        this.orders = null
        this.className = 'Params'
        this.paramKey = "queryParam"
        // _.extend(this, config);
        this.where = config.where
        this.returnTotal = config.returnTotal || false;

        this.orders = config.orders;
        if (config.paramsData || config.paramsData == "null") {
            this.setJsonParamsData(config.paramsData);
        }
        if (config.whereData || config.whereData == "null") {
            this.setJsonWhereData(config.whereData);
        }
    }
    setJsonWhereData(whereData) {
        // 判断传入的值是否字符
        if (!whereData)
            return;
        this.where = new Where({
            criterionData: whereData
        });
    }
    
    setJsonParamsData(paramsData) {
        // 判断传入的值是否字符
        if (!paramsData)
            return;
        var paramsDataType = typeof (paramsData);
        var objParamsData = {};
        switch (paramsDataType) {
            case "string":
                objParamsData = $.parseJSON(paramsData);
                break;
            case "object":
                objParamsData = paramsData;
                break;
        }
        if (objParamsData.queryCdions) {
            this.where = new Where({
                criterionData: objParamsData.queryCdions
            });
        }
        // if (objParamsData.orders) {
        //     this.orders = Scp.create('Scp.query.Orders', {
        //         orderData: objParamsData.orders
        //     });
        // }
        if (objParamsData.having) {
            this.having = new Where({
                criterionData: objParamsData.having.criterion
            });
        }
        if (objParamsData.groupBy) {
            this.groupBy = objParamsData.groupBy
        }
    }
    setGroup(groupFields) {
        this.groupBy = groupFields;
    }
    getGroup() {
        return this.groupBy;
    }
    getWhere() {
        return this.where;
    }
    setWhere(where) {
        this.where = where;
    } setHaving(where) {
        this.having = where;
    } getHaving() {
        return this.having;
    } getOrders() {
        return this.orders;
    } setOrders(orders) {
        this.orders = orders;
    } toJSON() {
        var params = {};
        // params.having = {};
        if (this.where) {
            var mycriterion = this.where.toJSON();
            if (mycriterion) {
                params.queryCdions = this.where.toJSON();
            }
        }
        /*
         * // if (this.having) { // var mycriterion = this.having.toJSON(); //
         * if (mycriterion) { // // params.having.criterion =
         * this.having.toJSON(); // } // }
         */
        if (this.groupBy) {
            params.groupBy = this.groupBy;
        }
        if (this.orders) {
            params.orderBy = this.orders.toJSON();
        }
        return params;
    } decodeStr(s) {
        return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
    } toStringWithKey() {
        var json = {}, param = {};
        // param[this.paramKey] = this.toJSON()
        json[keys.body] = JSON.stringify(this.toJSON());
        json[keys.pageIndex] = this.where[keys.pageIndex];
        json[keys.pageSize] = this.where[keys.pageSize];
        json[keys.returnTotal] = this.returnTotal;
        return json;// this.toJSON();
    } toStr() {
        return JSON.stringify(this.toJSON());
    } toPost() {
        // 
    } toGet() {
        // 
    }
}