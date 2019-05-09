[![npm](https://img.shields.io/npm/v/zhc-gp-table.svg)](https://www.npmjs.com/package/zhc-gp-table)
[![npm](https://img.shields.io/npm/l/zhc-gp-table.svg?maxAge=2592000)](http://www.opensource.org/licenses/mit-license.php)

# zhc-gp-table


## 介绍
基于 vue2.x 的table组件

## API & 实例(如果访问不了说明被墙了，我也很无奈......)
[API&实例](http://doc.huangsw.com/zhc-gp-table/app.html#/install)

## 功能
- [x] [自适应，可以随着浏览器窗口改变自动适应](http://doc.huangsw.com/zhc-gp-table/app.html#/table/horizontalResize)
- [x] [固定列，表头固定](http://doc.huangsw.com/zhc-gp-table/app.html#/table/fixedColumnsTitle)  
- [x] [支持列宽拖动](http://doc.huangsw.com/zhc-gp-table/app.html#/table/columnWidthDrag)
- [x] [支持单个字段排序和多个字段排序](http://doc.huangsw.com/zhc-gp-table/app.html#/table/sort)
- [x] [自定义列、自定义单元格样式](http://doc.huangsw.com/zhc-gp-table/app.html#/table/cellStyle)  
- [x] [loading效果、自定义loading 等](http://doc.huangsw.com/zhc-gp-table/app.html#/table/loading)
- [x] [自带分页组件](http://doc.huangsw.com/zhc-gp-table/app.html#/pagination)  
- [x] [单元格编辑](http://doc.huangsw.com/zhc-gp-table/app.html#/table/cellEdit)
- [x] [支持单元格合并 (colSpan and rowSpan)](http://doc.huangsw.com/zhc-gp-table/app.html#/table/cellMerge)
- [x] [支持 checkbox 多选功能](http://doc.huangsw.com/zhc-gp-table/app.html#/table/selection)
- [x] [footer 汇总功能](http://doc.huangsw.com/zhc-gp-table/app.html#/table/footerSummary)
- [x] [添加条件过滤功能](http://doc.huangsw.com/zhc-gp-table/app.html#/table/conditionFilters)  
- [ ] 添加导出 excel 功能  
- [ ] 添加导出 pdf 功能  
- [ ] 添加行展开功能  
- [ ] 纵向整列拖动
   

## 安装

```javascript
npm install zhc-gp-table --save-dev
```

## 使用（[更多](http://doc.huangsw.com/zhc-gp-table/app.html)）


```javascript
// 导入 css
import 'zhc-gp-table/libs/themes-base/index.css'

// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'zhc-gp-table'

// 将组件注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
```

> 你也可以 **[通过 cdn 使用](http://doc.huangsw.com/zhc-gp-table/app.html#/install)**


## 讨论组
通过添加微信进行群组讨论

![weixin](./examples/images/weixin.png)

## License
http://www.opensource.org/licenses/mit-license.php





