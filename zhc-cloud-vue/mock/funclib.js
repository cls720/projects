/**
 * 函数库模拟数据
 */
import SYSCONST from '../src/utils/sysconst'
const javaLibFiles = [{
  refClassImport: 'com.zhc.eap.funclib',
  refClassName: 'OrgFunc',
  refClassExt: 'groovy',
  classNameCn: '组织机构函数'
},
{
  refClassImport: 'com.zhc.eap.funclib',
  refClassName: 'MathFunc',
  refClassExt: 'groovy',
  classNameCn: '数学函数'
},
{
  refClassImport: 'com.zhc.eap.funclib',
  refClassName: 'DateFunc',
  refClassExt: 'groovy',
  classNameCn: '日期函数'
}
]

const javaFilesMethods = {
  'com.zhc.eap.funclib.OrgFunc': [{
    'showdoc': '/** showdoc /r/n * 当前操作者 /r/n */',
    'refMethodName': 'curtOperator',
    'methodNameCn': '当前操作者',
    'showdocJson': {
      'catalog': '函数库/组织机构函数',
      'title': '当前操作者',
      'return_params': [{
        'name': 'operatorBz',
        'type': 'string',
        'title': '当前操作者编制号'
      }]
    }
  }, {
    'showdoc': '/** showdoc /r/n * 直属上级 /r/n */',
    'refMethodName': 'directSuperior',
    'methodNameCn': '直属上级',
    'showdocJson': {
      'catalog': '函数库/组织机构函数',
      'title': '直属上级',
      'return_params': [{
        'name': 'operatorBz',
        'type': 'string',
        'title': '直属上级编制号'
      }]
    }
  }],
  'com.zhc.eap.funclib.MathFunc': [{
    'showdoc': '/** showdoc /r/n * 浮点数相加 /r/n */',
    'refMethodName': 'plus',
    'methodNameCn': '浮点数相加',
    'showdocJson': {
      'catalog': '函数库/数学函数',
      'title': '浮点数相加',
      'return_params': [{
        'name': 'value',
        'type': 'string',
        'title': '浮点数相加值'
      }]
    }
  }, {
    'showdoc': '/** showdoc /r/n * 取绝对值 /r/n */',
    'refMethodName': 'abs',
    'methodNameCn': '取绝对值',
    'showdocJson': {
      'catalog': '函数库/数学函数',
      'title': '取绝对值',
      'return_params': [{
        'name': 'value',
        'type': 'string',
        'title': '取绝对值'
      }]
    }
  }],
  'com.zhc.eap.funclib.DateFunc': [{
    'showdoc': '/** showdoc /r/n * 当前日期 /r/n */',
    'refMethodName': 'curtDate',
    'methodNameCn': '当前日期',
    'showdocJson': {
      'catalog': '函数库/日期函数',
      'title': '当前日期',
      'return_params': [{
        'name': 'date',
        'type': 'string',
        'title': '当前日期值'
      }]
    }
  }, {
    'showdoc': '/** showdoc /r/n * 当前日期时间 /r/n */',
    'refMethodName': 'curtDateTime',
    'methodNameCn': '当前日期时间',
    'showdocJson': {
      'catalog': '函数库/日期函数',
      'title': '当前日期时间',
      'return_params': [{
        'name': 'datetime',
        'type': 'string',
        'title': '当前日期时间值'
      }]
    }
  }]
}

export default [{
  url: '/source/funclib/java/files',
  type: 'get',
  response: config => {
    return {
      [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
      dataPack: javaLibFiles
    }
  }
},
{
  url: '/source/funclib/java/methods',
  type: 'post',
  response: config => {
    const param = config.body
    return {
      [SYSCONST.STATUS_KEY]: SYSCONST.STATUS_SUCCESS,
      dataPack: javaFilesMethods[param.refClass]
    }
  }
}
]
