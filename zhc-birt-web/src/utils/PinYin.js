/**
 * 中文拼音工具类，引用js-pinyin插件
 * @author cls
 * @date 2019-03-04
 */

// import Pinyin from '@/plugins/js-pinyin/pinyin'

/**
 * 根据传入中文数组获取中文首字母，去重
 * @param {*} zhAry
 */
export function getZhFirstChars(zhAry) {
  const restAry = []
  // 加入中文拼音
  if (zhAry && (zhAry.length > 0)) {
    zhAry.forEach(titleItem => {
      if (typeof titleItem === 'string') {
        // const pyTitle = Pinyin.getCamelChars(titleItem)
        const pyTitle = titleItem
        if (zhAry.indexOf(pyTitle) === -1) {
          restAry.push(pyTitle)
        }
      }
    })
  }
  return restAry
}
