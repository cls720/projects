import $ from 'jquery'
import JsonUtil from '@/components/ZhcGpTable/utils/JsonUtil.js'
import GroupTableLayout from '@/components/ZhcGpTable/layout/GroupTableLayout.js'

export default {
  props: {
    // 是否显示小计
    isShowSubTotal: true,
    // 是否显示总计
    isShowAllTotal: {
      type: Boolean,
      default: true
    },
    subTotalClass: {
      type: String,
      default: 'gp-table-sub-total'
    },
    allTotalClass: {
      type: String,
      default: 'gp-table-all-total'
    },
    // 行号配置
    rowNo: {
      type: Object,
      default: function () {
        return {
          isShow: false
        }
      }
    },
    // 网格默认列宽
    colWidth: {
      type: [Number, String],
      default: 100
    },
    // 分组策略配置
    policy: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 表格数据
    datas: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    /**
     * 返回锁定区网格 表头
     */
    $frozenHeadTable() {
      return $(this.$el).find('.v-table-leftview').find('.v-table-htable')
    },
    /**
     * 返回锁定区网格 tbody dom
     */
    $frozenTable() {
      return $(this.$el).find('.v-table-leftview').find('.v-table-btable')
    },
    /**
     * 返回数据区网格 tbody dom
     */
    $dataTable() {
      return $(this.$el).find('.v-table-rightview').find('.v-table-btable')
    },
    /**
     * 返回锁定区与数据区 tbody dom
     */
    $bodyTable() {
      return $(this.$el).find('.v-table-btable')
    },
    isGroup2: function () {
      return this.colGroupFields.length > 0
    },
    rowNoDefault: {
      get: function () {
        return $.extend({
          field: 'rowNo',
          width: 50,
          titleAlign: 'center',
          columnAlign: 'center',
          isFrozen: true
        }, this.rowNo)
      }
    },
    // 行分组字段列表
    rowGroupFields: {
      get: function () {
        return this.policy.rowGroupFields || []
      },
      set: function (rgFields) {
        this.policy.rowGroupFields = rgFields
      }
    },
    // 列分组字段列表
    colGroupFields: {
      get: function () {
        return this.policy.colGroupFields || []
      },
      set: function (cgFields) {
        this.policy.colGroupFields = cgFields
      }
    },
    /**
     * 获取按列分组树型JsonAry数据
     */
    getGroupCols: {
      get: function () {
        var retuJa = []
        if (this.colGroupFields.length > 0) {
          var g1Ary = $.ju.getJaFieldValues(this.colGroupFields, 'field')
          $.gtl.getGroupJsonTree(this.datas, retuJa, g1Ary, [], [], this.dependDatas, this.dependFields, true)
          $.gtl.calcColSpan(retuJa, this.dataFields.length)
          // 是否显示总计
          if (this.isShowAllTotal) {
            const firstGroupColFN = this.colGroupFields[0].field
            retuJa.push({
              field: firstGroupColFN,
              type: 'allColTotal',
              value: '总计',
              axis: '_' + retuJa.length,
              rowspan: this.colGroupFields.length,
              colspan: this.dataFields.length
            })
          }
        }
        return retuJa
      }
    },
    // 数据字段列表
    dataFields: {
      get: function () {
        return this.policy.dataFields || []
      },
      set: function (dFields) {
        this.policy.dataFields = dFields
      }
    },
    // 依赖数据列表
    dependDatas() {
      debugger
      let dependDatas = {}
      this.policy.rowGroupFields.forEach(f => {
        if (f.dependDatas) {
          dependDatas[f.field] = f.dependDatas
        }
      })
      this.policy.colGroupFields.forEach(f => {
        if (f.dependDatas) {
          dependDatas[f.field] = f.dependDatas
        }
      })
      this.policy.dataFields.forEach(f => {
        if (f.dependDatas) {
          dependDatas[f.field] = f.dependDatas
        }
      })
      return dependDatas
    },
    // 依赖字段列表
    dependFields: {
      get: function () {
        return this.policy.dependFields || {}
      },
      set: function (dpFields) {
        this.policy.dependFields = dpFields
      }
    },
    columns: {
      get: function () {
        var columns = []
        // 添加行号
        if (this.rowNo.isShow) {
          columns.push(this.rowNoDefault)
        }
        // 添加行分组列
        columns = columns.concat(this.getRowGroupColumns())
        // 添加列分组列
        if (this.colGroupFields.length > 0) {
          const gCols = this.getColGroupColumns(this.getGroupCols)
          columns = columns.concat(gCols)
          // 添加列分组下数据区列
          gCols.map(gColItem => {
            if (gColItem.isLeaf) {
              columns = columns.concat(this.getDataColumns(gColItem.axis))
            }
          })
        } else if (this.dataFields.length > 0) {
          // 添加没有列表分组下的数据区列
          columns = columns.concat(this.getDataColumns())
        }

        // 初始化默认过滤项数据
        columns.map(col => {
          this.initColumnsDefalutFilters(col)
        })
        return columns
      }
    },
    // 特殊表头
    titleRows: {
      get: function () {
        let multiHeader = []
        const gCols = this.getGroupCols
        if (gCols.length > 0) {
          const gColItem0 = gCols[0]
          const level = gColItem0.level
          const rowspan = level + 1
          let header0 = []
          // 添加行号
          if (this.rowNo.isShow) {
            const hRowNo = this.rowNoDefault
            hRowNo.rowspan = rowspan
            hRowNo.fields = [hRowNo.field]
            header0.push(hRowNo)
          }
          // 添加行分组列
          const hRowColumns = this.getRowGroupColumns()
          for (var i = 0, l = hRowColumns.length; i < l; i++) {
            const hrci = $.extend({}, hRowColumns[i])
            hrci.rowspan = rowspan
            hrci.fields = [hrci.field]
            header0.push(hrci)
          }

          // 添加列分组列
          const hColColumns = this.getColGroupMultiHeader(gCols)
          const hcFirst = hColColumns[0]
          const hcLast = hColColumns[hColColumns.length - 1]

          // 添加数据区列
          const headerData = this.getDataMultiHeader(hColColumns)
          // for (var i = 0, l = hcLast.length; i < l; i++) {
          //     let gcLeafItem = hcLast[i];
          //     let dataColumns = this.getDataColumns(gcLeafItem.axis, true);

          //     headerData = headerData.concat(dataColumns);
          //     gcLeafItem.fields = $.ju.getJaFieldValues(dataColumns, "field");
          // }

          if (hColColumns.length > 1) {
            header0 = header0.concat(hcFirst)
          } else {
            header0 = header0.concat(hcLast)
          }

          multiHeader.push(header0)
          multiHeader = multiHeader.concat(hColColumns.splice(1, hColColumns.length))
          multiHeader.push(headerData)
        }
        return multiHeader
      }
    },
    tableData: {
      get: function () {
        return this.datas
      }
    },
    theadTrs: function () {
      var trs = []
      var tr = []
      var rowspan = this.colGroupFields.length + 1
      tr.push({
        isFrozen: true,
        width: 40,
        rowspan: rowspan
      })
      var gfLen = this.rowGroupFields.length

      // 添加行分组字段列
      var rowGroupFieldsTh = this.getRowGroupFieldsTh(rowspan, gfLen - i)
      tr = tr.concat(rowGroupFieldsTh)

      // 添加列分组字段列
      var groupCols = this.getGroupCols || []
      var len = groupCols.length || 1
      if (groupCols.length > 0) {
        for (var i = 0, l = groupCols.length; i < l; i++) {
          var cItem = groupCols[i]
          var th = {
            colspan: this.dataFields.length || 1,
            value: this.getValue(cItem.value)
          }
          tr.push(th)
        }
        if (this.isShowAllTotal) {
          tr.push({
            colspan: this.dataFields.length || 1,
            value: '总计'
          })
          var ntr = tr.concat()
          trs.push(ntr)
          tr = []
          len++
        }
      }

      // 添加数据字段
      for (var i = 0; i < len; i++) {
        $.each(this.dataFields || [], function () {
          var th = {
            isLeaf: true,
            width: this.width || 100,
            value: this.value
          }
          // if (Scp.data.Types.isNumberType(this.dataType)) {
          // 	th.style = "text-align: right;"
          // }
          if (i == 0) {
            param = {
              'form': props.form,
              'field': this.field,
              'value': this.value
            }
            th.havingCdionUrl = _SYS.havingCdionUrl
            th.param = $.fn.obj2str(param)
          }
          tr.push(th)
        })
      }

      // 添加分组字段依赖字段
      if (this.dependFields) {
        $.each(this.dependFields, function (key, itemJa) {
          $.each(itemJa || [], function () {
            var th = {
              isLeaf: true,
              width: this.width || 100,
              value: this.value
            }
            tr.push(th)
          })
        })
      }

      trs.push(tr)
      return trs
    },
    tbodyTrs: function () {
      var trs = []
      var bodyDatas = this.getTBodyJa()      
      debugger
      var rgLen = this.rowGroupFields.length
      var hlExprs = []

      var lastSpan = 0
      var rowStyle = ''
      for (var i = 0, l = bodyDatas.length; i < l; i++) {
        var tr = {
          axis: '',
          frozenTds: [],
          tds: []
        }
        var rda = bodyDatas[i]
        if (rda.length > 0) {
          tr.axis = rda[0].axis
          tr.type = rda[0].type || ''
        }
        // 添加序号td
        if (this.rowNo.isShow) {
          tr.frozenTds.push({
            field: 'rowNo',
            value: i + 1
          })
        }
        var isType = false
        lastSpan--
        if (lastSpan <= 0) {
          rowStyle = ''
        }
        // 添加一行tds
        for (var j = 0, m = rda.length; j < m; j++) {
          var rdaItem = rda[j]
          var td = {
            field: rdaItem.field,
            rowspan: rdaItem.span || 1,
            type: rdaItem.type || rda[0].type || ''
          }

          if (rdaItem.type) {
            td.colspan = td.rowspan
            delete td.rowspan
            td.value = rdaItem.value + ((this.type == 'subTotal') ? '  小计' : '')
            isType = true
          } else if (!isType && (hlExprs.length > 0)) {
            $.each(hlExprs, function () {
              if (rdaItem.field == this.field) {
                var jsExpr = $.format(this.expr, rdaItem.value)
                if (eval(jsExpr)) {
                  if (this.fontType == 'row') {
                    rowStyle = $.format(
                      'background:{0};',
                      this.color)
                    lastSpan = spanVal
                  } else {
                    td.style = $.format('{0}:{1};',
                      this.fontType,
                      this.color)
                    return false
                  }
                }
              }
            })
          } else if (rdaItem.field && this.dataFields.length > 0) {
            $.each(this.dataFields, function () {
              if (rdaItem.field == this.field) {
                td.style += 'text-align: right;'
              }
            })
          }

          var dataType
          if (rdaItem.level <= this.rowGroupFields.length) {
            td.isFrozen = this.rowGroupFields[this.rowGroupFields.length - rdaItem.level].isFrozen
            dataType = this.rowGroupFields[this.rowGroupFields.length - rdaItem.level].dataType
          } else {
            td.isFrozen = rdaItem.type == 'subTotal'
          }

          // if (Scp.data.Types.isNumberType(dataType)) {
          // 	td.style += "text-align: right;";
          // }
          if (rdaItem.type == 'allColTotal') {
            td.style += 'text-align: right;'
          }
          if (rowStyle) {
            td.style += rowStyle
          }
          if (rdaItem.type == 'allTotal') {
            td.spanVal = rgLen
            td.isFrozen = true
          } else {
            td.spanVal = rdaItem.span || 1
          }

          if (rdaItem.level > 1 && !rdaItem.type && rdaItem.level <= this.rowGroupFields.length) {
            if (this.rowGroupFields[this.rowGroupFields.length - rdaItem.level].isFold) {
              td.isFold = true
              td.axis = rdaItem.axis
              td.level = rdaItem.level
            }
          }

          if (rdaItem.level) {
            td.level = rdaItem.level
          }
          if (rdaItem.dlevel) {
            td.dlevel = rdaItem.dlevel
          }
          if (td.spanVal > 1) {
            td.valign = 'top'
          }
          td.value = rdaItem.value
          td.dependDatas = rdaItem.dependDatas
          if (td.isFrozen) {
            tr.frozenTds.push(td)
          } else {
            tr.tds.push(td)
          }
        }
        trs.push(tr)
      }
      return trs
    }
  },
  methods: {

    /**
     * 获取按行分组树型JsonAry数据
     */
    getGroupRows: function () {
      var retuJa = []
      var g1Ary = $.ju.getJaFieldValues(this.rowGroupFields, 'field')
      var g2Ary = $.ju.getJaFieldValues(this.colGroupFields, 'field')
      var dAry = $.ju.getJaFieldValues(this.dataFields, 'field')
      $.gtl.getGroupJsonTree(this.internalTableData, retuJa, g1Ary, g2Ary, dAry,
        this.dependDatas, this.dependFields, true)            
      if (this.dataFields.length > 0) {
        // $.gtl.calcGroupSubAndAllTotal(retuJa);
        if (this.isShowSubTotal) {
          $.gtl.calcSubTotal(retuJa)
        }
        if (this.isShowAllTotal) {
          if (this.isShowSubTotal) {
            $.gtl.calcAllTotal(retuJa)
          } else {
            const cloneRetuJa = $.extend(true, [], retuJa)
            $.gtl.calcSubTotal(cloneRetuJa)
            $.gtl.calcAllTotal(cloneRetuJa)
            retuJa.push(cloneRetuJa[cloneRetuJa.length - 1])
          }
        }
      }
      $.gtl.calcRowSpan(retuJa, this.isGroup2)
      return retuJa
    },
    /**
     * 获取表格TBody rows模型定义
     */
    getTBodyJa: function () {
      var retuTBody = []
      // 添加深度克隆，删除小计数据项异常未找到引用
      $.gtl.calcTreeJa2TbodyJa($.extend(true, [], this.getGroupRows()), this.getGroupCols,
        retuTBody, null, this.policy)
      return retuTBody
    },
    /**
     * 返回行分组字段表头th集合
     */
    getRowGroupFieldsTh: function (rowspan, level) {
      var ths = []
      var scope = this
      $.each(this.rowGroupFields || [], function (i, rgItem) {
        var th = {
          isLeaf: true,
          width: scope.getColWidth(rgItem.width),
          rowspan: rowspan,
          isFrozen: rgItem.isFrozen,
          title: rgItem.title
        }
        // if (Scp.data.Types.isNumberType(rgItem.dataType)) {
        // 	th.style = "text-align: right;"
        // }
        if (level > 1 && rgItem.isFold) {
          th.isFold = true
          th.level = level
        }
        ths.push(th)
      })
      return ths
    },
    getColWidth: function (w) {
      return w || this.colWidth
    },
    getValue: function (val) {
      if (val == 'NULL') {
        return ''
      } else {
        return val
      }
    },
    // 获取行分组区字段列
    getRowGroupColumns() {
      var ra = [].concat(this.policy.rowGroupFields)
      for (var i = 0, l = ra.length; i < l; i++) {
        var raItem = ra[i]
        var dfs = this.getFieldDependFields(raItem.field)
        $.each(dfs || [], function (i, dfsItem) {
          JsonUtil.instObjToArrayByKeyOrder(ra, dfsItem, 'col')
        })
      }
      return ra
    },
    /**
     * 获取列分组区字段列
     * @param {*} gColsAry 列分组树型Ja
     * @param {*} gcolumns 返回的列集合数组（一维）
     */
    getColGroupColumns(gColsAry, gcolumns) {
      if (gcolumns == undefined) {
        gcolumns = []
      }
      const scope = this
      $.each(gColsAry, function (i, item) {
        const bizField = scope.getPolicyField(item.field)
        const bizField2 = $.extend({}, bizField)
        bizField2.field = bizField2.field + item.axis
        bizField2.isLeaf = !item.children || (item.children.length == 0)
        bizField2.axis = item.axis
        gcolumns.push(bizField2)
        if (!bizField2.isLeaf) {
          scope.getColGroupColumns(item.children, gcolumns)
        }
      })
      return gcolumns
    },
    /**
     * 获取列分组区多表头
     * @param {*} gColsAry
     * @param {*} colHeaders
     * @param {*} level 多表头层级
     */
    getColGroupMultiHeader(gColsAry, colHeaders, level) {
      if (colHeaders == undefined) {
        level = 1
        colHeaders = []
      }
      const scope = this
      let rowHead
      if (level <= colHeaders.length) {
        rowHead = colHeaders[level - 1]
      } else {
        rowHead = []
        colHeaders.push(rowHead)
      }

      $.each(gColsAry, function (i, item) {
        const hd = {
          fields: scope.getMultiHeaderFields(item),
          title: item.value,
          axis: item.axis,
          colspan: item.colspan || 1,
          rowspan: item.rowspan || 1,
          level: item.level
        }
        if (item.type) {
          hd.type = item.type
        }
        rowHead.push(hd)
      })

      $.each(gColsAry, function (i, item) {
        if (item.children && item.children.length > 0) {
          scope.getColGroupMultiHeader(item.children, colHeaders, item.level)
        }
      })
      return colHeaders
    },
    /**
     * 添加数据区多表头
     * @param {*} colGroupMultiHeaders 列分组多表头数据getColGroupMultiHeader()返回值
     */
    getDataMultiHeader(colGroupMultiHeaders) {
      const hcLen = colGroupMultiHeaders.length
      const hcLastIndex = hcLen - 1
      let headerData = []

      for (var i = hcLastIndex; i >= 0; i--) {
        const hcRow = colGroupMultiHeaders[i]
        for (var j = 0, m = hcRow.length; j < m; j++) {
          const hcRowItem = hcRow[j]
          if (i == hcLastIndex) {
            const dataColumns = this.getDataColumns(hcRowItem.axis, true)
            headerData = headerData.concat(dataColumns)
            hcRowItem.fields = $.ju.getJaFieldValues(dataColumns, 'field')
          } else {
            // 当前跨行数=多表头数据长度说明是叶节点
            if (hcRowItem.rowspan == hcLen) {
              let instIndex = this.getDataHeaderInstIndex(hcRowItem, headerData)
              const dataColumns = this.getDataColumns(hcRowItem.axis, true)
              $.each(dataColumns, function () {
                headerData.splice(instIndex++, 0, this)
              })
              hcRowItem.fields = $.ju.getJaFieldValues(dataColumns, 'field')
            }
          }
        }
      }
      return headerData
    },
    /**
     * 获取数据区表头插入下标
     * @param {*} instItem 预插入表头项
     * @param {*} dataHeaders 已存在表头列表
     */
    getDataHeaderInstIndex(instItem, dataHeaders) {
      let instIndex = dataHeaders.length
      $.each(dataHeaders, function (i) {
        if (this.axis > instItem.axis) {
          instIndex = i
          return false
        }
      })
      return instIndex
    },
    /**
     * 获取多表头子字段fields属性数组
     * @param {*} groupColsRecd
     * @param {*} fields 子字段列表
     */
    getMultiHeaderFields(groupColsRecd, fields) {
      if (fields == undefined) {
        fields = []
      }
      if (groupColsRecd.children && groupColsRecd.children.length > 0) {
        const scope = this
        $.each(groupColsRecd.children, function () {
          scope.getMultiHeaderFields(this, fields)
        })
      } else {
        $.each(this.dataFields, function (i) {
          fields.push(this.field + groupColsRecd.axis + '_' + i)
        })
      }
      return fields
    },
    /**
     * 添加数据区字段列
     * @param {*} axis 列分组下数据字段坐标
     * @param {*} isMuitiHead 是否多表头列
     */
    getDataColumns(axis, isMuitiHead) {
      const dataColumns = []
      for (var j = 0, m = this.dataFields.length; j < m; j++) {
        const dColItem = $.extend({}, this.dataFields[j])
        if (axis) {
          dColItem.field += axis + '_' + j
        }
        if (isMuitiHead) {
          dColItem.fields = [dColItem.field]
        }
        dataColumns.push(dColItem)
      }
      return dataColumns
    },
    getFieldDependFields(fieldName) {
      return this.dependFields[fieldName]
    },
    /**
     * 获取策略字段配置
     * @param {* 字段名} fieldName
     * @param {* 被查找数组,选填} fieldsAry
     */
    getPolicyField(fieldName, fieldsAry) {
      if (fieldsAry && fieldsAry.length > 0) {
        return JsonUtil.findByKeyValue(fieldsAry, 'field', fieldName)
      } else {
        let field
        field = JsonUtil.findByKeyValue(this.rowGroupFields, 'field', fieldName)
        if (field) return field
        field = JsonUtil.findByKeyValue(this.colGroupFields, 'field', fieldName)
        if (field) return field
        field = JsonUtil.findByKeyValue(this.dataFields, 'field', fieldName)
        if (field) return field
      }
    },
    // 获取列分组字段配置
    colField(field) {
      return JsonUtil.findByKeyValue(this.internalColumns, 'field', field) || {}
    },
    /**
     * 获取分组字段层级
     * @param {分组字段} fieldJo
     */
    getLevel(fieldJo) {
      var i = JsonUtil.findIndexByKeyValue(this.rowGroupFields, 'field', fieldJo.field)
      return this.rowGroupFields.length - i
    },
    /**
     * 获取字段跨列宽度
     * @param {*} field
     * @param {*} colspan
     */
    getFieldColspanWidth(field, colspan) {
      colspan = colspan || 1
      let endPosX;
      let startPosX;
      let totalWidth = 0
      const columnsFields = this.getColumnsFields

      startPosX = columnsFields.indexOf(field)
      endPosX = startPosX + colspan - 1

      for (var i = startPosX; i <= endPosX; i++) {
        this.internalColumns.forEach(x => {
          if (columnsFields[i] === x.field) {
            totalWidth += x.width
          }
        })
      }
      return totalWidth
    },
    /**
     * 获取字段跨行高度
     * @param {* 分组字段名} field
     * @param {* 跨行值} rowspan
     */
    getFieldRowspanHeight(field, rowspan) {
      rowspan = rowspan || 1
      return this.rowHeight * rowspan
    },
    /**
     * 根据单元格类型获取相应样式
     * @param {* } tdType
     */
    getTdTypeClass(tdType) {
      if ($.gtl.isSubTotal(tdType)) {
        return this.subTotalClass
      } else if ($.gtl.isAllTotal(tdType)) {
        return this.allTotalClass
      }
      return ''
    },
    /**
     * 判断当前记录是否折叠
     * @param {*} curtRecd
     */
    isFold(curtRecd) {
      const colFieldJa = this.colField(curtRecd.field)
      if (colFieldJa) {
        // curtRecd.class = subTotal,allTotal 小计，总计样式
        return colFieldJa.isFold && !curtRecd.type
      }
      return false
    }
  }
}
