import $ from 'jquery'
import GroupTableLayout from '../../src/layout/GroupTableLayout.js'

export default {
    props: {
        // 折叠图标样式
        closeIcon: {
            type: String,
            default: "v-icon-plus-squared-alt"
        },
        openIcon: {
            type: String,
            default: "v-icon-minus-squared-alt"
        }
    },
    methods: {
        /**
         * 表头行分组折叠展开
         */
        headRowCloseOpen() {
            debugger
            var $icon = $(event.srcElement);
            var fold = $icon.attr("fold");
            // 防止点到span标签
            if (fold == undefined) {
                $icon = $icon.find("i").first();
                fold = $icon.attr("fold");
            }
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
            this.$frozenTable.find("i[level=" + level + "]").each(
                function () {
                    if ($(this).attr("fold") == "open") {
                        $(this).click();
                    }
                }
            )
            var scope = this;
            var $td = $icon.parents("td").first();
            $td.nextAll("td").each(function () {
                var $openIcons = $(this).find("i[fold=open]");                
                $openIcons.attr("fold", "close");
                scope.changeIcon($openIcons, true);                
            });
        },
        /**
         *  行分组字段批量展开         
         */
        headRowOpen($icon) {
            var scope = this;
            var level = $icon.attr("level");
            this.$frozenTable.find("i[level=" + level + "]").each(
                function () {
                    var axis = $(this).attr("axis");
                    scope.bodyRowOpenParent(axis);
                    if ($(this).attr("fold") == "close") {
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
            // 防止点到span标签
            if (fold == undefined) {
                $icon = $icon.find("i").first();
                fold = $icon.attr("fold");
            }
            if (fold == "open") {
                this.bodyRowClose($icon);
                $icon.attr("fold", "close");
                this.changeIcon($icon, true);
            } else {
                this.bodyRowOpen($icon);
                $icon.attr("fold", "open");
                this.changeIcon($icon, false);
            }
        },
        /**
         * 子节点操作展开保证父节点先展开
         * @param {* } axis 
         */
        bodyRowOpenParent(axis) {
            while (axis.lastIndexOf("_") > 0) {
                axis = axis.substring(0, axis.lastIndexOf("_"));
                var $i = this.$frozenTable.find("tbody").find("i[axis='" + axis + "']");
                if ($i.attr("fold") == "close") {
                    $i.click();
                }
            }
        },
        /**
         * 行分组字段折叠
         * @param {* 折叠图标按钮} $icon
         */
        bodyRowClose($icon) {
            debugger;
            var axis = $icon.attr("axis");            
            var $td = $icon.parents("td").first();
            var $trs = this.$bodyTable.find("tr[axis^='" + axis + "']");

            $trs.filter(function (i) {
                return axis != $(this).attr("axis");
            }).hide();

            var $nextLockTds = $td.nextAll("td");
            $nextLockTds.hide();
            let colspan = $nextLockTds.length + 1
            $td.attr("colspan", colspan); // level
            this.updateTdDivCellWidth($td, colspan);

            var rowspan = parseInt($td.attr("rowspan"));
            if (rowspan > 1) {
                $td.attr("rowspan", 1);
                this.updateTdDivCellHeight($td, 1);
                var hasSubTotalTr = $trs.last().attr("axis") == axis;
                rowspan -= (hasSubTotalTr ? 0 : 1);
                // 更新父级分组跨行值
                this.updateParentTdRowspan(this.$frozenTable, rowspan, axis);
                // 折叠同行单元格后所有依赖字段跨行值
                this.updateDependTdRowspan($td, rowspan);
            }
        },
        /**
         * 行分组字段展开
         * @param {* 展开图标按钮} $icon 
         */
        bodyRowOpen($icon) {
            debugger;
            var axis = $icon.attr("axis");
            var $td = $icon.parents("td").first();            
            var $trs = GroupTableLayout.getRowExpendTrs(this.$bodyTable, axis, "." + this.closeIcon);
            var hiddenTrCount = $trs.filter(":hidden").length / 2;
            $trs.show();
            $td.nextAll("td").each(function () {
                $(this).show();
                // 遇到子集单元格存在折叠跳出,不显示子集折叠内单元格
                if ($("." + this.closeIcon, $(this)).length > 0) {
                    return false;
                }
            });
            $td.removeAttr("colspan");
            this.updateTdDivCellWidth($td, 1);

            var rowspan = $trs.length / 2;
            if (rowspan > 1) {
                $td.attr("rowspan", hiddenTrCount + 1);
                this.updateTdDivCellHeight($td, hiddenTrCount + 1);
                // 更新父级分组跨行值
                this.updateParentTdRowspan(this.$frozenTable, -hiddenTrCount, axis);               
                // 展开同行单元格后所有依赖字段跨行值
                this.updateDependTdRowspan($td, -hiddenTrCount);
            }
        },
        doRowClose($tb, $trs, $td, axis) {
            $trs.filter(function (i) {
                return axis != $(this).attr("axis");
            }).hide();

            var $nextLockTds = $td.nextAll("td");
            $nextLockTds.hide();
            let colspan = $nextLockTds.length + 1
            $td.attr("colspan", colspan); // level
            this.updateTdDivCellWidth($td, colspan);

            var rowspan = parseInt($td.attr("rowspan"));
            if (rowspan > 1) {
                $td.attr("rowspan", 1);
                this.updateTdDivCellHeight($td, 1);
                var hasSubTotalTr = $trs.last().attr("axis") == axis;
                rowspan -= (hasSubTotalTr ? 0 : 1);
                // 更新父级分组跨行值
                this.updateParentTdRowspan($tb, rowspan, axis);
                // 折叠同行单元格后所有依赖字段跨行值
                this.updateDependTdRowspan($td, rowspan);
            }
        },
        doRowOpen($tb, $trs1, $td, axis) {
            debugger;
            var $trs = GroupTableLayout.getRowExpendTrs(this.$bodyTable, axis, "." + this.closeIcon);
            var hiddenTrCount = $trs.filter(":hidden").length / 2;
            $trs.show();
            $td.nextAll("td").each(function () {
                $(this).show();
                // 遇到子集单元格存在折叠跳出,不显示子集折叠内单元格
                if ($("." + this.closeIcon, $(this)).length > 0) {
                    return false;
                }
            });
            $td.removeAttr("colspan");
            this.updateTdDivCellWidth($td, 1);
            // $td.height("auto");

            var rowspan = $trs.length / 2;
            if (rowspan > 1) {
                $td.attr("rowspan", hiddenTrCount + 1);
                this.updateTdDivCellHeight($td, hiddenTrCount + 1);
                // 更新父级分组跨行值
                this.updateParentTdRowspan($tb, -hiddenTrCount, axis);
                // 更新展开单元格后含折叠按钮单元格跨行值
                // var scope = this;
                // $.each($td.nextAll("td[level]"), function () {
                //     var tdAxis = $(this).find("i").attr("axis");
                //     if (tdAxis) {
                //         var r = $trs.filter("tr[axis^=" + tdAxis + "]").length / 2 + 1;
                //         $(this).attr("rowspan", r);
                //         scope.updateTdDivCellHeight($td, hiddenTrCount + 1);
                //     }
                // })
                // 展开同行单元格后所有依赖字段跨行值
                this.updateDependTdRowspan($td, -hiddenTrCount);
            }
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
        /**
         * 更新子节点行折叠展开后父格跨行值
         * @param {*} $tb 
         * @param {*} rspan 
         * @param {*} axis 
         */
        updateParentTdRowspan($tb, rspan, axis) {
            while (axis.lastIndexOf("_") > 0) {
                axis = axis.substring(0, axis.lastIndexOf("_"));
                var $ptd = $tb.find("tbody").find("i[axis='" + axis + "']").parents("td").first();
                var span = parseInt($ptd.attr("rowspan") || 1);
                var newspan = span - rspan;
                $ptd.attr("rowspan", newspan);
                this.updateTdDivCellHeight($ptd, newspan);

                // 更新同行单元格依赖字段            
                var trAxis = $ptd.parent().attr("axis");
                var $dataAreaTr = this.$dataTable.find("tr[axis='" + trAxis + "']");
                var $dataAreaTd = $dataAreaTr.find("td[dlevel=" + $ptd.attr("level") + "]");
                if ($dataAreaTd.length > 0) {
                    $dataAreaTd.attr("rowspan", newspan);
                    this.updateTdDivCellHeight($dataAreaTd, newspan);
                }
            }
        },
        /**
         * 更新同行单元格后所有依赖字段跨行值=折叠单元格跨行值
         * @param {* 当前折叠展开单元格} $td 
         * @param {* 预折叠展开行数} rowspan 正值：折叠，负值：展开
         */
        updateDependTdRowspan($td, rowspan) {
            var level = $td.attr("level");
            var $tr = $td.parent();
            var trAxis = $tr.attr("axis");
            var $dataAreaTr = this.$dataTable.find("tr[axis='" + trAxis + "']");
            var scope = this;

            var $dataAreaTds = $dataAreaTr.find("td").filter(function () {
                var dlevel = $(this).attr("dlevel");
                return (dlevel > 1) && (dlevel <= level);
            })

            $.each($dataAreaTds, function () {
                var dlevel = $(this).attr("dlevel");
                var $dependTd = $tr.find("td[level=" + dlevel + "]");
                var r = $dependTd.attr("rowspan") || 1;
                if ($dependTd.is(':hidden')) {
                    r = 1;
                }
                $(this).attr("rowspan", r);
                scope.updateTdDivCellHeight($(this), r);

                // var r = parseInt($(this).attr("rowspan"));
                // r = r - rowspan;
                // if (r <= 0) {
                //     r = 1;
                // }
                // $(this).attr("rowspan", r);                
            })
        },
        /**
         * 切换按钮折叠展开图标
         * @param {* 图标按钮} $icon 
         * @param {* 是否折叠状态} isClose 
         */
        changeIcon($icon, isClose) {
            if (isClose) {
                $icon.removeClass(this.openIcon);
                $icon.addClass(this.closeIcon);
            } else {
                $icon.removeClass(this.closeIcon);
                $icon.addClass(this.openIcon);
            }
        }
    }
}