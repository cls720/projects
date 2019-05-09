[![npm](https://img.shields.io/npm/v/zhc-gp-table.svg)](https://www.npmjs.com/package/zhc-gp-table)
[![npm](https://img.shields.io/npm/l/zhc-gp-table.svg?maxAge=2592000)](http://www.opensource.org/licenses/mit-license.php)

# zhc-gp-table


## 介绍
基于 vue2.x 的分组策略网格组件

## API & 实例(如果访问不了说明服务器没启动)
[API&实例](http://192.168.7.22:8098/examples/app.html#/intro)

## 功能
- [x] [自适应，可以随着浏览器窗口改变自动适应]
- [x] [固定列，表头固定]
- [x] [支持列宽拖动]
- [x] [支持单个字段排序和多个字段排序]
- [x] [自定义列、自定义单元格样式]
- [x] [loading效果、自定义loading 等]
- [x] [自带分页组件]
- [x] [单元格编辑]
- [x] [支持单元格合并 (colSpan and rowSpan)]
- [x] [支持 checkbox 多选功能]
- [x] [footer 汇总功能]
- [x] [添加条件过滤功能]
- [ ] 添加导出 excel 功能  
- [ ] 添加导出 pdf 功能  
- [ ] 添加行展开功能  
- [ ] 纵向整列拖动
   

## 安装

```javascript
npm install zhc-gp-table --save-dev
```

```javascript
// 导入 css
import 'zhc-gp-table/libs/themes-base/index.css'

// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'zhc-gp-table'

// 将组件注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
```


## License
http://www.opensource.org/licenses/mit-license.php





