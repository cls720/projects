import $ from 'jquery'

export default {   
    methods: {
        /**
         * 行分组字段折叠
         */
        onGroupRowClose(col){
            debugger;
            var axis = $(event.srcElement).attr("axis");
			var level = $(event.srcElement).attr("level");
			var $td = $(event.srcElement).parents("td").first();
            var $trs;
            if(axis){
                $trs = $(this.$el).find(".v-table-btable").find("tr[axis^='" + axis + "']");
            }else{
                $trs = $(this.$el).find(".v-table-btable").find("tr");
            }        
             
            alert($trs.length);

			// doRowClose($(event.srcElement), $trs, $td, axis, level);
			// changeIcon($(this), true);

			// $(event.srcElement).unbind("click");
			// $(event.srcElement).click(onGroupRowExpend);

			// var tdPTrH = doDataRowClose($table, axis);
            // $td.parent().height(tdPTrH);
            
            
            //.find(".v-table-leftview")
                            
        }
    },
    /**
     * 执行行折叠操作
     * @param {*} $tb 
     * @param {*} $trs 
     * @param {*} $td 
     * @param {*} axis 
     * @param {*} level 
     */
    doRowClose($tb, $trs, $td, axis, level) {
        $trs.filter(function(i) {
                    if (i == 0) {
                        return axis != $(this).attr("axis");
                    }
                    return i > 0;
                }).hide();
        var $nextLockTds = $td.nextAll("td[islock=true]");
        $nextLockTds.hide();
        $td.attr("colspan", $nextLockTds.length + 1); // level
        if ($td.parents(".ft_cwrapper").length == 0) {
            $td.height($($("a[axis=" + axis + "]")[0]).parents("td")
                    .height());
        }

        var rowspan = parseInt($td.attr("rowspan"));
        if (rowspan > 1) {
            $td.attr("rowspan", 1);
            var hasSubTotalTr = $trs.last().attr("axis") == axis;
            rowspan -= (hasSubTotalTr ? 0 : 1);
            updateParentTdRowspan($tb, rowspan, axis);
            // 更新同行单元格后所有依赖字段合并成一行
            $.each($td.nextAll("td"), function() {
                        var r = parseInt($(this).attr("rowspan"));
                        if (r > 1) {
                            r = r - rowspan;
                            if (r <= 0) {
                                r = 1;
                            }
                            $(this).attr("rowspan", r);
                        }
                    })
        }
    }
}