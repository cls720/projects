import $ from 'jquery'

export default {
    methods: {
        /**
         * 表头行分组折叠展开
         */
        headRowCloseOpen() {
            var $icon = $(event.srcElement);
            var fold = $icon.attr("fold");
            if (fold == "open") {
                this.headRowClose($icon);
                $icon.attr("fold", "close");
                this.changeIcon($icon, true);
            } else {
                this.headRowOpen($icon);
                $icon.attr("fold", "open");
                this.changeIcon($icon, false);
            }
        },
        /**
         *  行分组字段批量折叠         
         */
        headRowClose($icon) {            
            var level = $icon.attr("level");
            this.$bodyTable.find("i[level=" + level + "]").each(
                function () {
                    if ($(this).attr("fold")) {
                        $(this).click();
                    }
                })
        },
        /**
         *  行分组字段批量展开         
         */
        headRowOpen($icon) {            
            var level = $icon.attr("level");
            this.$bodyTable.find("i[level=" + level + "]").each(
                function () {
                    var axis = $(this).attr("axis");
                    doExpendParent($tableLock, axis);
                    if ($(this).hasClass("glyphicon-plus")) {
                        $(this).click();
                    }
                })
        },
        /**
         * 表体分组值折叠展开
         */
        bodyRowCloseOpen() {            
            var $icon = $(event.srcElement);
            var fold = $icon.attr("fold");
            if (fold == "open") {
                this.onGroupRowClose($icon);
                $icon.attr("fold", "close");
                this.changeIcon($icon, true);
            } else {
                this.onGroupRowExpend($icon);
                $icon.attr("fold", "open");
                this.changeIcon($icon, false);
            }
        },
        /**
         * 行分组字段折叠
         */
        onGroupRowClose($icon) {
            debugger;
            var axis = $icon.attr("axis");
            var level = $icon.attr("level");
            var $td = $icon.parents("td").first();
            var $trs = this.$bodyTable.find("tr[axis^='" + axis + "']");

            this.doRowClose(this.$frozenTable, $trs, $td, axis, level);
            // var tdPTrH = this.doDataRowClose(this.$dataTable, axis);
            //$td.parent().height(tdPTrH);

        },
        doRowClose($tb, $trs, $td, axis, level) {            
            $trs.filter(function (i) {
                return axis != $(this).attr("axis");
            }).hide();
            
            var $nextLockTds = $td.nextAll("td");
            $nextLockTds.hide();
            let colspan = $nextLockTds.length + 1
            $td.attr("colspan", colspan); // level
            this.updateTdDivCellWidth($td, colspan);
            // if ($td.parents(".ft_cwrapper").length == 0) {
            //     $td.height($($("a[axis=" + axis + "]")[0]).parents("td")
            //         .height());
            // }

            var rowspan = parseInt($td.attr("rowspan"));
            if (rowspan > 1) {
                $td.attr("rowspan", 1);
                this.updateTdDivCellHeight($td, 1);
                var hasSubTotalTr = $trs.last().attr("axis") == axis;
                rowspan -= (hasSubTotalTr ? 0 : 1);
                this.updateParentTdRowspan($tb, rowspan, axis);

                // 更新同行单元格后所有依赖字段合并成一行
                var trAxis = $td.parent().attr("axis");
                var $dataAreaTr = this.$dataTable.find("tr[axis='" + trAxis + "']");
                var scope = this;
                $.each($dataAreaTr.find("td"), function () {
                    var r = parseInt($(this).attr("rowspan"));
                    if (r > 1) {
                        r = r - rowspan;
                        if (r <= 0) {
                            r = 1;
                        }
                        $(this).attr("rowspan", r);
                        scope.updateTdDivCellHeight($(this), r);
                    }
                })
            }
        },
        doDataRowClose($tb, axis) {
            debugger;
            var $icon = $tb.find("tbody").find("i[axis='" + axis + "']");
            var level = $icon.attr("level");            
            var $td = $icon.parents("td").first();
            var rowspan = parseInt($td.attr("rowspan"));    
            var $trs = $tb.find("tr[axis^='" + axis + "']");
                                    
            doRowClose($tb, $trs, $td, axis, level);
            if (rowspan > 1) {
                var tds1 = $td.nextAll("td").not("td[isLock]");
                var tds2 = $trs.last().find("td").not("td[isLock]");
                $.each(tds1, function (i) {
                    var val1 = $(this).text();
                    var val2 = $(tds2[i]).text();
                    if (!$(this).attr("oldVal")) {
                        $(this).attr("oldVal", val1);
                    }
                    $(this).text(val2);
                    $(this).css("background-color", $(tds2[i]).css("background-color"));
                });
            }           
            return $td.parent().height();
        },
        onGroupRowExpend($icon) {

            var axis = $icon.attr("axis");
            var $td = $icon.parents("td").first();
            var $trs = $(this.$el).find(".v-table-btable").find("tr[axis^='" + axis + "']");
            alert($trs.length);
            // doRowExpend($tableLock, $trs, $td, axis);

            // var tdPTrH = doDataRowExpend($table, axis);
            // $td.parent().height(tdPTrH);
        },

        /**
         * 更新折叠展开后单元格div宽度
         * @param {* 当前操作单元格} $td  
         * @param {* 当前跨列值} colSpan 
         */
        updateTdDivCellWidth($td, colSpan) {
            var $div = $td.find("div").first();
            var field = $td.attr("field");
            var w = this.getFieldColspanWidth(field, colSpan);
            $div.outerWidth(w);
        },
        /**
         * 更新折叠展开后单元格div高度
         * @param {* 当前操作单元格} $td 
         * @param {* 当前跨行值} rowspan 
         */
        updateTdDivCellHeight($td, rowspan) {
            var $div = $td.find("div").first();
            var field = $td.attr("field");
            var h = this.getFieldRowspanHeight(field, rowspan);
            $div.outerHeight(h);
        },
        updateParentTdRowspan($tb, rspan, axis) {
            while (axis.lastIndexOf("_") > 0) {
                axis = axis.substring(0, axis.lastIndexOf("_"));
                var $ptd = $tb.find("tbody").find("i[axis='" + axis + "']").parents("td").first();
                var span = parseInt($ptd.attr("rowspan") || 1);
                var newspan = span - rspan;
                $ptd.attr("rowspan", newspan);
                this.updateTdDivCellHeight($ptd, newspan);
                
                // 更新同行单元格依赖字段                
                var $dataAreaTr = this.$dataTable.find("tr[axis='" + axis + "']");
                var $dataAreaTd = $dataAreaTr.find("td[dlevel=" + $ptd.attr("level") + "]");
                if ($dataAreaTd.length > 0){
                    $dataAreaTd.attr("rowspan", newspan);
                    this.updateTdDivCellHeight($dataAreaTd, newspan);
                }                
            }
        },
        /**
         * 切换按钮折叠展开图标
         * @param {*} $icon 
         * @param {*} isToClose 
         */
        changeIcon($icon, isToClose) {
            if (isToClose) {
                $icon.removeClass("v-icon-minus-squared-alt");
                $icon.addClass("v-icon-plus-squared-alt");
            } else {
                $icon.removeClass("v-icon-plus-squared-alt");
                $icon.addClass("v-icon-minus-squared-alt");
            }
        }
    }
}