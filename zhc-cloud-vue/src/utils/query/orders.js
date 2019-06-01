
export default class Orders {
    constructor(config) {
        config = config || {};
        this.orderData = [];
        if (config.orderData) {
            this.orderData = config.orderData;
        }

    }

    getOrderItemModel() {
        return {
            name: "",
            desc: "",
            type: "desc"
        };
    }

    addDesc(property, desc) {
        this.addOrder(property, "desc", desc);
    }

    addAsc(property, desc) {
        this.addOrder(property, "asc", desc);
    }

    addOrder(property, type, desc) {
        var orderItem = this.getOrderItemModel();
        orderItem.name = property;
        orderItem.desc = desc;
        orderItem.type = type
        this.orderData.push(orderItem);
    }

    toJSON() {
        return this.orderData;
    }

    toStr() {
        return JSON.stringify(this.orderData);
    }

}