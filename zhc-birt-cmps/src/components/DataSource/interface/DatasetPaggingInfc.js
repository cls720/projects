
export default class DatasetPaggingInfc {
    // 是否启用分页
    _isPagging() {
        return this._infcPagging ? true : false;
    }

    // 获取分页大小
    getPageSize() {
        return this._infcPagging && this._infcPagging.pageSize || 10;
    }

    // 获取当前第几页
    getPageNum() {
        return this._infcPagging && this._infcPagging.pageNum || 1;
    }
}