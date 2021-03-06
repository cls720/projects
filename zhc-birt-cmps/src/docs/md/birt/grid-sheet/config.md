### Attributes 属性

| 名称        | 说明                        | 类型                | 可选值 |    默认值     |
|-------------|-----------------------------|---------------------|--------|:-------------:|
| controlName | 类名                        | string              | -      | BirtFormSheet |
| controlId   | 控件ID,唯一值               | string              | -      |       -       |
| style       | 自定义样式                  | string              | -      |       -       |
| width       | 宽度                        | int,string,function | -      |       -       |
| height      | 高度                        | int,string,function | -      |       -       |
| rows        | 渲染行集合{r1:{},r2:{},...} | json                | -      |       -       |
| cols        | 列数组[{},{},...]           | JsonArray           | -      |       -       |

#### rows.r1 行

| 名称      | 说明                          | 类型   | 可选值 | 默认值 |
|-----------|-------------------------------|--------|--------|:------:|
| rowHeight | 行高                          | int    | -      |   -    |
| tds       | 单元格td集合{A1:{},B1:{},...} | json   | -      |   -    |
| style     | 自定义样式                    | string | -      |   -    |

#### rows.r1.tds 单元格

| 名称    | 说明       | 类型   | 可选值 | 默认值 |
|---------|------------|--------|--------|:------:|
| value   | 单元格值   | string | -      |   -    |
| rowspan | 跨行数     | int    | -      |   1    |
| colspan | 跨列数     | int    | -      |   1    |
| style   | 自定义样式 | string | -      |   -    |

#### cols[0] 列

| 名称     | 说明 | 类型 | 可选值 | 默认值 |
|----------|------|------|--------|:------:|
| colWidth | 列宽 | int  | -      |   -    |