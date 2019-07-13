//import request from '@/utils/request'
import request from '@/utils/query/request'
export function queryMarket(param) {
  let modelFile="scgl"
  return request(param,modelFile);
}

export function queryMarketStat(param) {
  let modelFile="sctj"
  return request(param,modelFile)
}

export function queryMarketSellStat(param) {
  let modelFile="xstj"
  return request(param,modelFile)
}

export function queryMarketHotProd(param) {
  let modelFile="rmcp"
  return request(param,modelFile)
}

//客户管理
export function queryMarketCustomer(param) {
  let modelFile="khgl"
  return request(param,modelFile)
}
//供应商管理
export function queryMarketSupplier(param) {
  let modelFile="gysgl"
  return request(param,modelFile)
}
//订单管理
export function queryMarketOrder(param) {
  let modelFile="ddgl"
  return request(param,modelFile)
}