/**
 * 对象操作工具类
 * @author cls
 * @date 2020-05-29
 */

/**
 * showdoc
 * @catalog JS工具类/ObjectUtil
 * @title 接口混入
 * @description Js对象实现多接口混入
 * @method static
 * @url import { mix } from '@/funclib/ObjectUtil.js'
 */
export function mix(...mixins) {
  class Mix {
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }

  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if (key !== 'constructor'
      && key !== 'prototype'
      && key !== 'name'
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
