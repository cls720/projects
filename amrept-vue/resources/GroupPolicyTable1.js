/**
 * 分组策略表格
 * 
 * @author cls
 * @date 2016/07/18
 */

(function($) {
	$.GroupPolicyTable = function(props) {
		var settings = {
			HEAD_TH : '<th {isLock} rowspan="{rowspan}" colspan="{colspan}" style="{style}">{desc}</th>',
			A_BTN: '<a href="javascript:void(0);" class="buttonTag white glyphicon {ICON_OPEN}" level="{level}"></a>',			
			ICON_OPEN: 'glyphicon-minus',
			ICON_CLOSE: 'glyphicon-plus',
			A_HAVING:'<a href="{href}" data-param=\'${params}\' data-toggle="dialog" data-width="{dlgWidth}" data-height="{dlgHeight}" ' +
					'data-resizable="false" data-id="dialog-mask" data-mask="true" title="添加结果集过滤条件" data-title="添加结果集过滤条件" ' +
					'style="float:right;text-decoration:none"><i class="glyphicon glyphicon-filter"></i></a>'
		};
		$.extend(this, settings, props);
		var that = this;
		var policy = props.groupPolicy;
		if (typeof policy == "string") {
			policy = $.fn.jsonEval(policy);
		}
		this.isGroup2 = policy.colGroupFields.length > 0;

		// 定义私有方法
		var m = {
			getTableHeadHtml : function(policy) {
				var rowGroupFields = policy.rowGroupFields;
				var colGroupFields = policy.colGroupFields;
				var dataFiedls = policy.dataFields;
				var groupCols = policy.groupCols;

				var rowspan = colGroupFields.length + 1;
				var headHtml = '<tr><th isLock="true" width="40" rowspan="'
						+ rowspan + '"></th>';
				var gfLen = rowGroupFields.length;
				$.each(rowGroupFields || [], function(i) {
					var thTextStyle = "";
					if (Scp.data.Types.isNumberType(this.dataType)) {
						thTextStyle = "text-align: right;"
					}
					if (this.isColumnLock) {
						headHtml += '<th isLeaf="true" isLock="true" style="'
								+ thTextStyle + '" width="'
								+ (this.width || 100) + '"';
						headHtml += ' rowspan="' + rowspan + '">';
					} else {
						headHtml += '<th isLeaf="true" isLock="false" style="'
								+ thTextStyle + '" width="'
								+ (this.width || 100) + '"';
						headHtml += ' rowspan="' + rowspan + '">';
					}

					var level = gfLen - i;

					if (level > 1 && rowGroupFields[i].isRowFold) {
						headHtml += btnTag = '<a href="javascript:void(0);" class="buttonTag white glyphicon glyphicon-minus" level="'
								+ level + '"></a>'
					}
					headHtml += this.desc;
					headHtml += '</th>';
				});
				var isCloseTr = false;
				var len = (groupCols || []).length || 1;
				$.each(groupCols || [], function() {
							headHtml += '<th colspan="'
									+ (dataFiedls.length || 1) + '">';
							headHtml += getValue(this.value);
							headHtml += '</th>';
							isCloseTr = true;
						});

				if (isCloseTr) {
					headHtml += '<th colspan="' + (dataFiedls.length || 1)
							+ '">总计</th>';
					headHtml += "</tr><tr>";
					len++;
				}

				for (var i = 0; i < len; i++) {
					$.each(dataFiedls || [], function() {
						var thTextStyle = "";
						if (Scp.data.Types.isNumberType(this.dataType)) {
							thTextStyle = "text-align: right;"
						}
						headHtml += '<th isLeaf="true" style="' + thTextStyle
								+ '" width="' + (this.width || 100) + '">';
						headHtml += this.desc;
						if (i == 0) {
							param = {
								"form" : props.form,
								"name" : this.name,
								"desc" : this.desc
							};
							headHtml += '<a href="'
									+ _SYS.havingCdionUrl
									+ '" data-param=\''
									+ $.fn.obj2str(param)
									+ '\' data-toggle="dialog" data-width="400" data-height="220" data-resizable="false" data-id="dialog-mask" data-mask="true" title="添加结果集过滤条件" data-title="添加结果集过滤条件" style="float:right;text-decoration:none"><i class="glyphicon glyphicon-filter"></i></a>';
						}
						headHtml += '</th>';
					});
				}
				// 添加分组字段依赖字段
				if (policy.dependFields) {
					$.each(policy.dependFields, function(key, itemJa) {
								$.each(itemJa || [], function() {
											headHtml += '<th isLeaf="true" width="'
													+ (this.width || 100)
													+ '">';
											headHtml += this.desc;
											headHtml += '</th>';
										})
							})
				}
				headHtml += "</tr>";
				return headHtml;

			}
		};
		/**
		 * 渲染决策分析网格
		 */
		this.render = function() {
			var policy = this.groupPolicy;
			var retuTBody = [];
			$.gtl.calcTreeJa2TbodyJa(policy.groupRows, policy.groupCols,
					retuTBody, null, policy);

			$queryForm = $("form[name=" + this.form + "]");
			$inputQc = $("input[name=queryConfigStr]", $queryForm);
			$inputQc.bind("change", {
						policy : policy,
						retuTBody : retuTBody
					}, drawHighlight);
			var queryConfig = $.fn.jsonEval($inputQc.val() || "{}");
			var rowExpr = [];
			var colExpr = [];
			var dataExpr = [];
			initHighlightExprs(queryConfig, rowExpr, colExpr, dataExpr);

			console.log(m.getTableHeadHtml(policy));
			var theadHtml = getTableHeadHtml(policy);
			var tbodyHtml = getTableBodyHtml(retuTBody,
					policy.rowGroupFields.length, dataExpr.concat(rowExpr),
					policy);

			$table = $("#" + this.renderTo);
			var layoutH = parseInt($table.attr("layoutH") || 0);
			policy.layoutH = layoutH;
			$table.removeAttr("layoutH");
			$table.find("thead").html(theadHtml);
			$table.find("tbody").html(tbodyHtml);

			var fixLength = 0;
			for (var fixi = 0; fixi < policy.rowGroupFields.length; fixi++) {
				if (policy.rowGroupFields[fixi].isColumnLock) {
					fixLength++;
				}
			}

			$table.fxdHdrCol({
						fixedCols : fixLength + 1,
						width : "100%",
						height : "100%",
						isMultiTh : true,
						layoutH : layoutH
					});

			var havingCdions = queryConfig.havingCdions || {};
			if (havingCdions.items) {
				$(".glyphicon-filter", $(".ft_r", $table.parent().parent()))
						.each(function() {
							var param = $(this).attr("param") || "{}";
							param = $.fn.jsonEval(param);
							var hvItem = jsonUtil_findByKeyValue(
									havingCdions.items, "name", param.name);
							if (hvItem && hvItem.enabled) {
								$(this).addClass("selColor");
							}

						});
			}

			$(".ft_rc", $table.parent().parent()).find("thead a")
					.click(onGroupRowAllClose);
			$tableLock = $(".ft_c", $table.parent().parent());
			$tableLock.find("tbody").find("a").click(onGroupRowClose);
		}
		/**
		 * 加载标准数据集查询结果数据集合
		 * 
		 * @param {}
		 *            datas [{f1:"v1",f2:"v2"},{f1:"v3",f2:"v4"}]
		 */
		this.loadDatas = function(datas) {
			debugger;
			var retuJa = [];
			var policy = this.groupPolicy;
			var rgfs = $.ju.getJaFieldValues(policy.rowGroupFields, "name");
			$.gtl.getGroupAndDependJsonTree(datas, retuJa, rgfs,
					policy.dependFields, policy.dataFields, true)

			$.gtl.calcSpan(retuJa, this.isGroup2);
			policy.groupRows = retuJa;
			this.render();
		}

		if (this.datas) {
			this.loadDatas(this.datas);
		} else {
			$.gtl.calcSpan(policy.groupRows, this.isGroup2);
			this.render();
		}

		function drawHighlight(param) {

			var policy = param.data.policy;
			var queryConfig = $.fn.jsonEval($(this).val() || "{}");
			var rowExpr = [];
			var colExpr = [];
			var dataExpr = [];
			initHighlightExprs(queryConfig, rowExpr, colExpr, dataExpr);
			// var reTheadHtml = getTableHeadHtml(policy);
			var reTbodyHtml = getTableBodyHtml(param.data.retuTBody,
					policy.rowGroupFields.length, dataExpr.concat(rowExpr),
					policy);
			$table.find("tbody").html(reTbodyHtml);
			var $tableClone = $table.clone();
			var fixLength = 0;
			for (var fixi = 0; fixi < policy.rowGroupFields.length; fixi++) {
				if (policy.rowGroupFields[fixi].isColumnLock) {
					fixLength++;
				}
			}
			$tableClone.fxdHdrCol({
						fixedCols : fixLength + 1,
						width : "100%",
						height : "100%",
						isMultiTh : true,
						layoutH : policy.layoutH
					});
			$tableLock2 = $(".ft_c", $tableClone.parent().parent());
			$tableLock.html($tableLock2.html());
			$tableLock.find("tbody").find("a").click(onGroupRowClose);
			$tableClone.parents(".ft_container").remove();
		}

		function initHighlightExprs(queryConfig, rowExpr, colExpr, dataExpr) {
			$.each(queryConfig.highlight || [], function() {
						if (this.enabled) {
							var item = {
								color : this.color
							};
							if (this.items) {
								if (this.items.length > 0) {
									var it = this.items[0];
									item.name = it.name;
									item.expr = $.fn.getEvalExpr(it);
									item.fontType = "row";
								}
							} else {
								item.name = this.name;
								item.expr = $.fn.getEvalExpr(this);
								item.fontType = this.fontType || "color";
							}
							if (jsonUtil_findByKeyValue(policy.dataFields,
									"name", item.name)) {
								dataExpr.push(item);
							} else if (jsonUtil_findByKeyValue(
									policy.rowGroupFields, "name", item.name)) {
								rowExpr.push(item);
							} else if (jsonUtil_findByKeyValue(
									policy.colGroupFields, "name", item.name)) {
								colExpr.push(item);
							}
						}
					});
		}

		function getTableHeadHtml(policy) {
			var rowGroupFields = policy.rowGroupFields;
			var colGroupFields = policy.colGroupFields;
			var dataFiedls = policy.dataFields;
			var groupCols = policy.groupCols;

			var rowspan = colGroupFields.length + 1;
			var headHtml = '<tr><th isLeaf="true" isLock="true" width="40" rowspan="'
					+ rowspan + '"></th>';
			var gfLen = rowGroupFields.length;
			$.each(rowGroupFields || [], function(i) {
				var thTextStyle = "";
				if (Scp.data.Types.isNumberType(this.dataType)) {
					thTextStyle = "text-align: right;"
				}
				if (this.isColumnLock) {
					headHtml += '<th isLeaf="true" isLock="true" style="'
							+ thTextStyle + '" width="' + (this.width || 100)
							+ '"';
					headHtml += ' rowspan="' + rowspan + '">';
				} else {
					headHtml += '<th isLeaf="true" isLock="false" style="'
							+ thTextStyle + '" width="' + (this.width || 100)
							+ '"';
					headHtml += ' rowspan="' + rowspan + '">';
				}

				/*
				 * headHtml += '<th isLeaf="true" isLock="true" width="' +
				 * (this.width || 100) + '"'; headHtml += ' rowspan="' + rowspan +
				 * '">';
				 */
				var level = gfLen - i;

				if (level > 1 && rowGroupFields[i].isRowFold) {
					headHtml += btnTag = '<a href="javascript:void(0);" class="buttonTag white glyphicon glyphicon-minus" level="'
							+ level + '"></a>'
				}
				headHtml += this.desc;
				headHtml += '</th>';
			});
			var isCloseTr = false;
			var len = (groupCols || []).length || 1;
			$.each(groupCols || [], function() {
						headHtml += '<th colspan="' + (dataFiedls.length || 1)
								+ '">';
						headHtml += getValue(this.value);
						headHtml += '</th>';
						isCloseTr = true;
					});

			if (isCloseTr) {
				headHtml += '<th colspan="' + (dataFiedls.length || 1)
						+ '">总计</th>';
				headHtml += "</tr><tr>";
				len++;
			}

			for (var i = 0; i < len; i++) {
				$.each(dataFiedls || [], function() {
					var thTextStyle = "";
					if (Scp.data.Types.isNumberType(this.dataType)) {
						thTextStyle = "text-align: right;"
					}
					headHtml += '<th isLeaf="true" style="' + thTextStyle
							+ '" width="' + (this.width || 100) + '">';
					headHtml += this.desc;
					if (i == 0) {
						param = {
							"form" : props.form,
							"name" : this.name,
							"desc" : this.desc
						};
						// headHtml += '<a target="dialog" href="'+
						// _SYS.havingCdionUrl +'" class="glyphicon
						// glyphicon-filter"'
						// headHtml += "param='"+ $.fn.obj2str(param) + "'";
						// headHtml += 'mask="true" title="添加结果集过滤条件"
						// width="400" height="220"
						// style="float:right;text-decoration:none">'
						// headHtml += '</a>'
						headHtml += '<a href="'
								+ _SYS.havingCdionUrl
								+ '" data-param=\''
								+ $.fn.obj2str(param)
								+ '\' data-toggle="dialog" data-width="400" data-height="220" data-resizable="false" data-id="dialog-mask" data-mask="true" title="添加结果集过滤条件" data-title="添加结果集过滤条件" style="float:right;text-decoration:none"><i class="glyphicon glyphicon-filter"></i></a>';
					}
					headHtml += '</th>';
				});
			}
			// 添加分组字段依赖字段
			if (policy.dependFields) {
				$.each(policy.dependFields, function(key, itemJa) {
							$.each(itemJa || [], function() {
										headHtml += '<th isLeaf="true" width="'
												+ (this.width || 100) + '">';
										headHtml += this.desc;
										headHtml += '</th>';
									})
						})
			}
			headHtml += "</tr>";
			return headHtml;

		}

		function getTableBodyHtml(bodyDatas, rgLen, hlExprs, policyLock) {

			var bodyHtml = "";
			var lastSpan = 0;
			var rowStyle = "";
			var i = 1;
			var dataFiedls = policyLock.dataFields;
			$.each(bodyDatas, function() {
				bodyHtml += '<tr axis="' + this[0].axis + '"><td isLock=true>'
						+ i + '</td>';
				var classCss = "";
				var enumType = "";
				var isType = false;
				lastSpan--;
				if (lastSpan <= 0) {
					rowStyle = "";
				}
				$.each(this, function() {
					var span = "rowspan";
					var spanVal = this.span || 1;
					var name = this.name;
					var value = this.value;
					var style = "";

					if (this.type) {
						span = "colspan";
						value += ((this.type == "subTotal") ? "  小计" : "");
						classCss = ' class="' + this.type + '" ';
						enumType = ' enumtype="' + this.type + '" ';
						isType = true;

					} else if (!isType && (hlExprs.length > 0)) {
						$.each(hlExprs, function() {
									if (name == this.name) {
										var jsExpr = $.format(this.expr, value);
										if (eval(jsExpr)) {
											if (this.fontType == "row") {
												rowStyle = $.format(
														'background:{0}',
														this.color);
												lastSpan = spanVal;
											} else {
												style = $.format('{0}:{1}',
														this.fontType,
														this.color);
												return false;
											}
										}
									}
								})
					} else if (name && dataFiedls.length > 0) {
						$.each(dataFiedls, function() {
									if (name == this.name) {
										style += "text-align: right";
									}
								});
					}

					var spanVal;
					var isLock, isLockVal, dataType;

					if (this.level <= policyLock.rowGroupFields.length) {
						isLockVal = policyLock.rowGroupFields[policyLock.rowGroupFields.length
								- this.level].isColumnLock;
						dataType = policyLock.rowGroupFields[policyLock.rowGroupFields.length
								- this.level].dataType;
					} else {
						isLockVal = this.type == "subTotal";
					}

					if (Scp.data.Types.isNumberType(dataType)) {
						style += "text-align: right";
					}
					if (!isLock && (this.type == "allColTotal")) {
						style += "text-align: right";
					}
					if (style || rowStyle) {
						style = $.format(' style="{0};{1}"', style, rowStyle);
					}
					if (this.type == "allTotal") {
						spanVal = rgLen;
						isLock = " isLock=true";
					} else {
						spanVal = this.span || 1;
						isLock = this.span ? " isLock=" + isLockVal + "" : "";
					}

					var btnTag = "";
					if (this.level > 1 && !this.type
							&& this.level <= policyLock.rowGroupFields.length) {
						if (policyLock.rowGroupFields[policyLock.rowGroupFields.length
								- this.level].isRowFold) {
							btnTag = '<a href="javascript:void(0);"class="buttonTag white glyphicon glyphicon-minus" axis="'
									+ this.axis
									+ '" level="'
									+ this.level
									+ '"></a>'
						}
					}

					bodyHtml += '<td ' + style + span + '="' + spanVal + '"'
							+ isLock + enumType;
					if (this.level) {
						bodyHtml += ' level="' + this.level + '"';
					}
					if (this.dlevel) {
						bodyHtml += ' dlevel="' + this.dlevel + '"';
					}
					if (!isLock && classCss) {
						bodyHtml += classCss;
					}
					if (spanVal > 1) {
						bodyHtml += ' valign="top"';
					}
					bodyHtml += '>';
					bodyHtml += btnTag + (value || "");
					bodyHtml += '</td>';
				});
				bodyHtml += '</tr>';
				i++;
			});
			return bodyHtml;
		}

		function getValue(val) {
			if (val == "NULL") {
				return "";
			} else {
				return val;
			}
		}

		function onGroupRowAllClose() {

			var level = $(this).attr("level");
			$tableLock.find("tbody").find("a[level=" + level + "]").each(
					function() {
						if ($(this).hasClass("glyphicon-minus")) {
							$(this).click();
						}
					})
			changeIcon($(this), true);
			$(this).unbind("click");
			$(this).click(onGroupRowAllExpend);
		}

		function onGroupRowAllExpend() {

			var level = $(this).attr("level");
			$tableLock.find("tbody").find("a[level=" + level + "]").each(
					function() {
						var axis = $(this).attr("axis");
						doExpendParent($tableLock, axis);
						if ($(this).hasClass("glyphicon-plus")) {
							$(this).click();
						}
					})
			changeIcon($(this), false);
			$(this).unbind("click");
			$(this).click(onGroupRowAllClose);
		}

		function doExpendParent($tb, axis) {
			while (axis.lastIndexOf("_") > 0) {
				axis = axis.substring(0, axis.lastIndexOf("_"));
				var $a = $tb.find("tbody").find("a[axis='" + axis + "']");
				if ($a.hasClass("glyphicon-plus")) {
					$a.click();
				}
			}
		}

		function onGroupRowClose() {

			var axis = $(this).attr("axis");
			var level = $(this).attr("level");
			var $td = $(this).parent();
			var $trs = $tableLock.find("tbody")
					.find("tr[axis^='" + axis + "']");

			doRowClose($tableLock, $trs, $td, axis, level);
			changeIcon($(this), true);

			$(this).unbind("click");
			$(this).click(onGroupRowExpend);

			var tdPTrH = doDataRowClose($table, axis);
			$td.parent().height(tdPTrH);
		}

		function doDataRowClose($tb, axis) {

			var $a = $tb.find("tbody").find("a[axis='" + axis + "']");;
			var $td = $a.parent();
			var $trs = $tb.find("tbody").find("tr[axis^='" + axis + "']");
			var rowspan = parseInt($td.attr("rowspan"));
			var level = $a.attr("level");

			doRowClose($tb, $trs, $td, axis, level);
			if (rowspan > 1) {
				var tds1 = $td.nextAll("td").not("td[isLock]");
				var tds2 = $trs.last().find("td").not("td[isLock]");
				$.each(tds1, function(i) {
							var val1 = $(this).text();
							var val2 = $(tds2[i]).text();
							if (!$(this).attr("oldVal")) {
								$(this).attr("oldVal", val1);
							}
							$(this).text(val2);
							$(this).css("background-color",
									$(tds2[i]).css("background-color"));
						});
			}

			changeIcon($a, true);
			return $td.parent().height();
		}

		function onGroupRowExpend() {

			var axis = $(this).attr("axis");
			var $td = $(this).parent();
			var $trs = $tableLock.find("tbody")
					.find("tr[axis^='" + axis + "']");
			doRowExpend($tableLock, $trs, $td, axis);
			changeIcon($(this), false);

			$(this).unbind("click");
			$(this).click(onGroupRowClose);

			var tdPTrH = doDataRowExpend($table, axis);
			$td.parent().height(tdPTrH);
		}

		function doDataRowExpend($tb, axis) {

			var $a = $tb.find("tbody").find("a[axis='" + axis + "']");;
			var $td = $a.parent();
			var $trs = $tb.find("tbody").find("tr[axis^='" + axis + "']");

			doRowExpend($tb, $trs, $td, axis);

			var $aCloses = $(".glyphicon-plus", $td.parent());
			if ($aCloses.size() > 1) {
				var $a2 = $($aCloses.get(1));
				var axis2 = $a2.attr("axis");
				var $tr2 = $tb.find("tbody").find("tr[axis='" + axis2
						+ "']:last");

				if ($tr2.size() == 0) {
					resetOldValue($td)
				} else {
					var nextTds = $tr2.find("td").not("td[isLock]");
					$td.nextAll("td[oldval]").each(function(i) {
								var val = $(nextTds[i]).text();
								$(this).text(val);
							})
				}
			} else {
				resetOldValue($td);
			}

			changeIcon($a, false);
			return $td.parent().height();
		}

		function doRowClose($tb, $trs, $td, axis, level) {
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

		function doRowExpend($tb, $trs1, $td, axis) {
			// var subCloseA = $(".glyphicon-plus", $trs).filter("a[axis^='"
			// + axis + "_']");
			// if (subCloseA.length > 0) {
			// for (var i = 0, l = subCloseA.length; i < l; i++) {
			// var $domA = $(subCloseA[i]);
			// var subAxis = $domA.attr("axis");
			// $trs = $trs.not("tr[axis^='" + subAxis + "']");
			// var pTr = $domA.parent().parent();
			// if (subCloseA.filter("a[axis=" + $(pTr).attr("axis") +
			// "]").length == 0) {
			// $trs = $trs.add(pTr);
			// };
			// }
			// }
			var $trs = $.gtl.getRowExpendTrs($tb, axis, ".glyphicon-plus");
			var hiddenTrCount = $trs.filter(":hidden").length;
			$trs.show();
			$td.nextAll("td[islock]").each(function() {
						$(this).show();
						if ($(".glyphicon-plus", $(this)).size() > 0) {
							return false;
						}
					});

			$td.removeAttr("colspan");
			$td.height("auto");

			var rowspan = $trs.size();
			if (rowspan > 1) {
				// var firstAxis = $trs.first().attr("axis");
				// var lastAxis = $trs.last().attr("axis");
				// if ((axis == firstAxis) && (axis == lastAxis)) {
				// rowspan -= 1;
				// }
				$td.attr("rowspan", hiddenTrCount + 1);
				updateParentTdRowspan($tb, -hiddenTrCount, axis);
				// 更新同行单元格后所有依赖字段展开多行
				// $.each($td.nextAll("td[oldrowspan]"), function() {
				// var r = parseInt($(this).attr("oldrowspan"));
				// $(this).attr("rowspan", r);
				// })
				$.each($td.nextAll("td[level]"), function() {
							var tdAxis = $(this).find("a").attr("axis");
							if (tdAxis) {
								var r = $trs.filter("tr[axis^=" + tdAxis + "]").length
										+ 1;
								$(this).attr("rowspan", r);
							}
						})

				$.each($td.nextAll("td[dlevel]"), function() {
							var dlevel = $(this).attr("dlevel");
							var $dependTd = $(this).parent().find("td[level="
									+ dlevel + "]");
							var r = $dependTd.attr("rowspan") || 1;
							$(this).attr("rowspan", r);
						})
			}
		}

		function changeIcon($a, isToClose) {
			if (isToClose) {
				$a.removeClass("glyphicon-minus");
				$a.addClass("glyphicon-plus");
			} else {
				$a.removeClass("glyphicon-plus");
				$a.addClass("glyphicon-minus");
			}
		}

		function resetOldValue($td) {
			$td.nextAll("td[oldval]").each(function() {
						var val = $(this).attr("oldVal");
						$(this).removeAttr("oldVal");
						$(this).text(val);
						var bgColor = $(this).prev().css("background-color");
						$(this).css("background-color", bgColor);
					})
		}

		function updateParentTdRowspan($tb, rspan, axis) {
			while (axis.lastIndexOf("_") > 0) {
				axis = axis.substring(0, axis.lastIndexOf("_"));
				var $ptd = $tb.find("tbody").find("a[axis='" + axis + "']")
						.parent();
				var span = parseInt($ptd.attr("rowspan") || 1);
				var newspan = span - rspan;
				$ptd.attr("rowspan", newspan);
				$ptd.parent().find("td[dlevel=" + $ptd.attr("level") + "]")
						.attr("rowspan", newspan);
			}
		}
	};
})(jQuery);