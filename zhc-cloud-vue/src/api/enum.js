//import request from '@/utils/request'
import request from '@/utils/query/request'
export function queryEnmu(param) {
  let modelFile="xlmj"
  return request(param,modelFile);
}
