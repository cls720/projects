import Mock from 'mockjs'
import SYSCONST from "../src/utils/sysconst"
Mock.Random.extend({
    nearMinutesTime: function () {
        return nearMinutesTimeData.shift()
    },
    hyType: function () {
        return this.pick(['ERP','电商','MES','矿业','锂电']);
    },
    kinds: function () {
        return this.pick(['模型算法','项目','功能模块','工业APP','工业组件','标准组件']);
    }
})
const data=Mock.mock({
    
    'list|100': [{
        "FNAME":"@ctitle(5, 8)",
        "FSORT":"@hyType",
        "FTYPE":"@kinds",
        "FCOUNTSEE":"@integer(300, 5000)",
        "FCOUNTBUY":"@integer(300, 5000)",
        "FOPERATOR":"@cname",
    }]
})
export default [
    
    {
      url: '/scgl',
      type: 'post',
      response: config => {
        return {
          [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
          data: {
            rows: data.list
          }
        }
      }
    },
    {
      url: '/sctj',
      type: 'post',
      response: config => {
        return {
          [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
          data: {
            rows: data.list
          }
        }
      }
    }
  ]
  