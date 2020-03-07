### Attributes 属性

| 名称        | 说明                                                          | 类型    | 可选值                  |    默认值    |
|-------------|---------------------------------------------------------------|---------|-------------------------|:------------:|
| controlName | 类名                                                          | string  | -                       | BirtWorkBook |
| controlId   | 控件ID,唯一值                                                 | string  | -                       |      -       |
| showToolBar | 是否显示报表工具条,true显示                                   | boolean | [true,false]            |     true     |
| totalPage   | 报表渲染总页数,配合Sheet.pageIndex开始页下标使用              | int     | -                       |      -       |
| renderType  | 报表渲染方式,页面与选项卡方式                                 | string  | [pages,tabs]            |    pages     |
| tabPosition | 选项卡位置,当前renderType="tabs"有效                          | string  | [top,right,bottom,left] |     top      |
| dataSources | 数据源配置列表,如 [WebSocketConection](#/websocket-conection) | json    | -                       |      -       |
