<template>
  <v-table
    is-horizontal-resize
    column-width-drag
    style="width:100%"
    :height="400"
    :columns="columns"
    :table-data="tableData"
    :is-show-sub-total="true"
    even-bg-color="#f4f4f4"
    row-hover-color="#eee"
    row-click-color="#edf7ff"
  ></v-table>
</template>

<script>
export default {
  name: "gp-table",
  data() {
    return {};
  },
  props: {
    // 是否显示小计
    isShowSubTotal: true,
    // 是否显示总计
    isShowAllTotal: {
      type: Boolean,
      default: true
    },
    // 网格默认列宽
    colWidth: {
      type: [Number, String],
      default: 100
    },
    // 分组策略配置
    policy: {
      type: Object,
      default: function() {
        return {};
      }
    },
    // 表格数据
    datas: {
      type: Array,
      default: function() {
        return [];
      }
    },
    width: [Number, String],
    minWidth: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      require: false
    },
    minHeight: {
      type: Number,
      default: 50
    },
    titleRowHeight: {
      type: Number,
      default: 38
    },
    // 随着浏览器窗口改变，横向自适应
    isHorizontalResize: {
      type: Boolean,
      default: false
    },
    // 随着浏览器窗口改变，垂直自适应
    isVerticalResize: {
      type: Boolean,
      default: false
    },

    // 垂直自适应偏移量
    verticalResizeOffset: {
      type: Number,
      default: 0
    },

    tableBgColor: {
      type: String,
      default: "#fff"
    },

    // 表头背景颜色
    titleBgColor: {
      type: String,
      default: "#fff"
    },

    // 奇数行颜色
    oddBgColor: {
      type: String,
      default: ""
    },
    // 偶数行颜色
    evenBgColor: {
      type: String,
      default: ""
    },
    // 内容行高
    rowHeight: {
      type: Number,
      default: 40
    },
    // 多列排序
    multipleSort: {
      type: Boolean,
      default: true
    },
    // 只在 升序和倒序切换
    sortAlways: {
      type: Boolean,
      default: false
    },
    // 分页序号
    pagingIndex: Number,
    // 没数据时的html
    errorContent: {
      type: String,
      default: "暂无数据"
    },
    // 没数据时内容区域高度
    errorContentHeight: {
      type: Number,
      default: 50
    },
    // 是否正在加载,为false 则会显示错误信息（如果加载时间较长，最好设置为true,数据返回后设置为false）
    isLoading: {
      type: Boolean,
      default: false
    },
    loadingContent: {
      type: String,
      default:
        '<span><i class="v-icon-spin5 animate-loading-23" style="font-size: 28px;opacity:0.6;"></i></span>'
    },
    // 不设置则没有hover效果
    rowHoverColor: {
      type: String
    },
    rowClickColor: {
      type: String
    },
    showVerticalBorder: {
      type: Boolean,
      default: true
    },
    showHorizontalBorder: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Array,
      default: function() {
        return [];
      }
    },
    footerRowHeight: {
      type: Number,
      default: 40
    },
    columnWidthDrag: {
      type: Boolean,
      default: false
    },
    loadingOpacity: {
      type: Number,
      default: 0.6
    },
    // 表体单元格样式回调
    columnCellClassName: Function,
    // footer单元格样式回调
    footerCellClassName: Function,
    // 行单击回调
    rowClick: Function,
    // 行双击回调
    rowDblclick: Function,
    // 表头单元格单击回调
    titleClick: Function,
    // 表头单元格双击回调
    titleDblclick: Function,
    // 鼠标进入行的回调
    rowMouseEnter: Function,
    // 鼠标离开行的回调
    rowMouseLeave: Function,
    // 单元格编辑完成回调
    cellEditDone: Function,
    // 单元格合并
    cellMerge: Function,
    // select all
    selectAll: Function,
    // 单个checkbox change event
    selectChange: Function,
    // checkbox-group change event
    selectGroupChange: Function,
    // filter event
    filterMethod: Function
  },
  computed: {
    isGroup2: function() {
      return this.colGroupFields.length > 0;
    },
    // 行分组字段列表
    rowGroupFields: {
      get: function() {
        return this.policy.rowGroupFields || [];
      },
      set: function(rgFields) {
        this.policy.rowGroupFields = rgFields;
      }
    },
    // 列分组字段列表
    colGroupFields: {
      get: function() {
        return this.policy.colGroupFields || [];
      },
      set: function(cgFields) {
        this.policy.colGroupFields = cgFields;
      }
    },
    // 数据字段列表
    dataFields: {
      get: function() {
        return this.policy.dataFiedls || [];
      },
      set: function(dFields) {
        this.policy.dataFiedls = dFields;
      }
    },
    // 依赖字段列表
    dependFields: {
      get: function() {
        return this.policy.dependFields || {};
      },
      set: function(dpFields) {
        this.policy.dependFields = dpFields;
      }
    },
    columns: {
      get: function() {
        debugger
        var columns = this.getRowGroupColumns();
        

        return columns;
      }
    },
    // 特殊表头
    titleRows: {
      get: function() {
        return [];
      }
    },
    tableData: {
      get: function() {
        return this.datas;
      }
    }
  },
  methods: {
    getRowGroupColumns() {
      debugger;
      var ra = [].concat(this.policy.rowGroupFields);
      for (var i = 0, l = ra.length; i < l; i++) {
        var raItem = ra[i];
        var dfs = this.getFieldDependFields(raItem.field);
        ra.push(dfs[0]);
        // $.each(dfs || [], function(i, dfsItem) {
        //   $.ju.instObjToArrayByKeyOrder(ra, dfsItem, "col");
        // });
      }
      return ra;
    },
    getFieldDependFields(fieldName) {
      return this.dependFields[fieldName];
    }
  }
};
</script>