/**
 * 字符操作工具类
 * @author cls
 * @date 2019-05-17
 */

/**
 * showdoc
 * @catalog JS工具类/StringUtil
 * @title 获取随机字符串
 * @description 根据传入字符串长度,获取随机字符串id
 * @method static
 * @url import { randomString } from '@/utils/StringUtil.js'
 * @param len 可选 随机字符长度
 * @return String 随机字符 
 */
export function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678';
    var maxPos = $chars.length;
    var str = '';
    for (var i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}
