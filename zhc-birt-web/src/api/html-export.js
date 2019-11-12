/**
 * 网页html导出接口
 */
import request from '@/utils/request'
import SYSCONST from "@/utils/sysconst"

export function exportPdf(url, msec) {
  let reqData = {
    url: url,
    msec: msec || 3000
  }
  return request({
    url: '/web/file/export/pdf',
    method: 'post',
    data: reqData,
    headers: 'application/x-download',
    responseType: 'blob'
  })
}
