/**
 * 报表模型数据返回接口
 */
import { treeLookup } from "./lookup/tree-lookup.js";

export function getBirtModel(birtUrl, params) {
  return new Promise((resolve, reject) => {
    let result = {
      data: {}
    }
    if (birtUrl === "/birt/lookup/tree-lookup") {
      result.data = treeLookup;
    }
    resolve(result)
  })
}
