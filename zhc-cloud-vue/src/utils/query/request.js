import request from "../request";
import queryParam from "./index"
export default (param, modelFile) => {
  let data = {
    "queryCdion": "{}"
  }
  if (param) {
    let paramInstance
    if (param.className != "Params") {
      paramInstance = new queryParam.Param()
      paramInstance.where = param
    }
    else
      paramInstance = param

    data = paramInstance.toStringWithKey()
  }
  //data.modeFilePath = modelFile;
  return request({
    url: `/web/data/query/${modelFile}`,//process.env.NODE_ENV === 'development' ? `/${modelFile}` : `web/data/query/${modelFile}`,
    method: 'post',
    data: data
  })
}