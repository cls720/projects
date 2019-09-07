/**
 * 通用对象配置查询接口
 */
import request from '@/utils/request'
import SYSCONST from "@/utils/sysconst"

export function getConfigObjInfo(ctName) {
  let reqData = {
    controlName: ctName
  }
  return request({    
    url: '/web/' + SYSCONST.PROJECT_NAME + '/coInfo',
    method: 'post',
    data: reqData
  })
}
