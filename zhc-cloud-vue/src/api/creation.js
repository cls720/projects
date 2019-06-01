//import request from '@/utils/request'
import request from '@/utils/query/request'
export function queryCreation(param) {
  let modelFile="wdcz"
  return request(param,modelFile);
}