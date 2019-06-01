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
