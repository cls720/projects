import request from "../request";
import queryParam from "./index"
import SYSCONST from "@/utils/sysconst"
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
  let projectName = SYSCONST.PROJECT_NAME
  //data.modeFilePath = modelFile;
  return request({
    url: `/web/${projectName}/data/query/${modelFile}`,//process.env.NODE_ENV === 'development' ? `/${modelFile}` : `web/data/query/${modelFile}`,
    method: 'post',
    data: data
  })
}