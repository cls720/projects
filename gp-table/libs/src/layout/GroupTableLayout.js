/**
 * GroupTableLayout分组网格布局数据重组算法
 * 
 * 命名空间 $.GroupTableLayout 简写 $.gtl
 * 
 * @author cls
 * @modify 2018/11/27
 */

jQuery.GroupTableLayout = jQuery.gtl = {
	/**
	 * 按分组字段值生成 key:[val]格式
	 * 
	 * @param recdsJa
	 *            JSONArray
	 * @param fieldName
	 *            String
	 * @return
	 */
	getGroupFieldKeyValue: function (recdsJa, fieldName) {
		var retuJo = {};
		$.each(recdsJa, function () {
			if (this[fieldName]) {
				var val = this[fieldName] || "NULL";

				if (!retuJo[val]) {
					retuJo[val] = [];
				}
				retuJo[val].push(this);
			}
		})
		return retuJo;
	},
	/**
	 * 获取分组字段依赖字段值列表
	 * 
	 * @param recdsJa
	 *            JSONArray数据源列表
	 * @param groupFieldDependFieldsJa
	 *            JSONArray依赖于分组的计算字段列表 计算类型：distinct(唯一合并)
	 *            {field:"依赖fieldId1",type:"distinct"}
	 * @return
	 */
	getDependFieldsNameValue: function (recdsJa, groupFieldDependFieldsJa) {
		var retuJa = [];
		$.each(groupFieldDependFieldsJa, function () {
			var distinctList = $.ju.getDistinctValues(recdsJa,
				this.field);
			var itemJo = {
				field: this.field,
				type: "distinct",
				values: distinctList
			};
			retuJa.push(itemJo);
		})
		return retuJa;
	},
	/**
	 * 获取字段[{field:"字段名",value:"字段值"},...]格式
	 * 
	 * @param recdJa
	 *            JSONArray待转换记录
	 * @param dataFields
	 *            String[]字段名列表
	 * @param groupFields2
	 *            String[]次分组字段
	 * @return
	 */
	getRecordNameValueFormat: function (recdsJa, dataFields, groupFields2) {
		var alzChildren = [];

		if (dataFields && dataFields.length > 0) {
			for (var i = 0; i < recdsJa.length; i++) {
				var recd = recdsJa[i];
				var rowJa = [];

				// 注：列分组字段要在数组前面，方便数据区截取
				$.each(groupFields2 || [], function () {
					var itemJo = $.gtl.getNameValueJo(this, recd[this]);
					itemJo.isGroup = true;
					rowJa.push(itemJo);
				})
				// 添加数据区字段
				for (var j = 0, l = dataFields.length; j < l; j++) {
					var afn = dataFields[j];
					rowJa.push(this.getNameValueJo(afn, recd[afn]));
				}
				alzChildren.push(rowJa);
			}
		}
		return alzChildren;
	},
	getNameValueJo: function (field, value) {
		return {
			field: field,
			value: value
		};
	},
	/**
	 * 获取分组字段树型格式包
	 * 
	 * @param recdsJa
	 *            JSONArray数据源列表
	 * @param groupFields
	 *            String[] 主分组字段
	 * @param groupFields2
	 *            String[] 次分组字段
	 * @param dependFields
	 *            JSONObject 依赖于分组的计算字段列表 计算类型：distinct(唯一合并)
	 *            {groupField1:[{field:"依赖fieldId1",type:"distinct"}]}
	 * @param dataFields
	 *            String[]数据字段
	 * @param isFirstLevel
	 *            boolean是否初次调用
	 * @return
	 */
	getGroupJsonTree: function (recdsJa, retuJa, groupFields, groupFields2, dependFields,
		dataFields, isFirstLevel) {
		if (groupFields.length > 0) {
			var fn = groupFields[0];
			var cloneGf = [];
			$.extend(cloneGf, groupFields);
			var subGroupFields = cloneGf.splice(1, cloneGf.length);
			var jo = this.getGroupFieldKeyValue(recdsJa, fn);
			var subGroupChildren = [];

			$.each(jo, function (key, ja) {
				var itemJo = {
					field: fn,
					value: key,
					level: groupFields.length
				};
				var children = $.gtl.getGroupJsonTree(ja, retuJa, subGroupFields,
					groupFields2, dependFields, dataFields, false);
				// 添加子分组
				if (children != null) {
					itemJo.children = children;
				}
				// 计算分组字段依赖字段列表值
				if (dependFields && dependFields[fn]) {
					itemJo.dependFields = $.gtl.getDependFieldsNameValue(ja, dependFields[fn]);
				}
				if (isFirstLevel) {
					retuJa.push(itemJo);
				} else {
					subGroupChildren.push(itemJo);
				}
			})
			return subGroupChildren;
		} else {
			return this.getRecordNameValueFormat(recdsJa, dataFields, groupFields2);
		}
	},
	/**
	 * 获取分组字段树型格式包
	 * 
	 * @param recdsJa
	 *            JSONArray数据源列表
	 * @param groupFields
	 *            String[] 主分组字段
	 * @param dependFields
	 *            JSONObject 依赖于分组的计算字段列表 计算类型：distinct(唯一合并)
	 *            {groupField1:[{field:"依赖fieldId1",type:"distinct"}]}
	 * @param dataFields
	 *            String[] 数据字段
	 * @param isFirstLevel
	 *            boolean是否初次调用
	 * @return
	 */
	getGroupAndDependJsonTree: function (recdsJa, retuJa, groupFields,
		dependFields, dataFields, isFirstLevel) {
		if (groupFields.length > 0) {
			var fn = groupFields[0];
			var cloneGf = [];
			$.extend(cloneGf, groupFields);
			var subGroupFields = cloneGf.splice(1, cloneGf.length);
			var jo = this.getGroupFieldKeyValue(recdsJa, fn);
			var subGroupChildren = [];
			$.each(jo, function (key, ja) {
				var itemJo = {
					field: fn,
					value: key,
					level: groupFields.length
				};
				var children = $.gtl.getGroupAndDependJsonTree(ja,
					retuJa, subGroupFields, dependFields,
					dataFields, false);
				if (children != null) {
					itemJo.children = children;
				}
				// 计算分组字段依赖字段列表值
				if (dependFields != null) {
					if (dependFields[fn] != null) {
						itemJo.dependFields = $.gtl
							.getDependFieldsNameValue(ja,
								dependFields[fn]);
					}
				}
				if (isFirstLevel) {
					retuJa.push(itemJo);
				} else {
					subGroupChildren.push(itemJo);
				}
			})
			return subGroupChildren;
		} else {
			return this.getRecordNameValueFormat(recdsJa, dataFields);
		}
	},
	getJsonDoubleValue: function (jo, valKey) {
		var val = jo[valKey];
		if (val == null || "NULL" == val) {
			return 0;
		} else {
			return parseFloat(val);
		}
	},
	/**
	 * 项累计值求和
	 * 
	 * @param itemJo
	 *            JSONObject累计项
	 * @param totalJo
	 *            JSONArray总计项
	 */
	sumGroupSubAndAllItem: function (itemJo, totalJa) {
		var key = itemJo.field;
		var dataFieldJo = $.ju.findByKeyValue(totalJa, "field", key);
		if (dataFieldJo == null) {
			totalJa.add(itemJo);
		} else {
			var val = $.gtl.getJsonDoubleValue(dataFieldJo, "value");
			if (val != null) {
				// ArithUtil.add 大数据精度待解决
				val += $.gtl.getJsonDoubleValue(itemJo, "value");
				var count = 2;
				if (dataFieldJo.count != undefined) {
					count += parseInt(dataFieldJo.count);
				}
				dataFieldJo.value = val;
				dataFieldJo.count = count;
			}
		}
	},
	/**
	 * 小计与总计求和
	 * 
	 * @param ja
	 *            JSONArray
	 * @param totalJo
	 *            JSONObject
	 */
	sumGroupSubAndAllTotal: function (ja, totalJo) {
		if (totalJo != null) {
			for (var i = 0, l = ja.length; i < l; i++) {
				var item = ja[i]; // $.extend(true, {}, ja[i]);
				if (Array.isArray(item)) {
					if (totalJo.children) {
						$.gtl.sumGroupSubAndAllTotal(item, totalJo);
					} else {
						totalJo.children = [];
						if (item.length > 0 && (item[0].isGroup != undefined)) {
							totalJo.children.push(item);
						} else {
							totalJo.children = totalJo.children.concat(item);
						}
					}
				} else {
					if (totalJo.children) {
						if (item.isGroup) {
							var key = item.field;
							var value = item.value;
							var dataFieldJo = $.ju.findJaryByKeyValue(
								totalJo.children, key, value);
							if (dataFieldJo == null) {
								totalJo.children.push(ja);
							} else {
								for (var j = i + 1; j < l; j++) {
									var alzItemJo = ja[j];
									$.gtl.sumGroupSubAndAllItem(alzItemJo,
										dataFieldJo);
								}
							}
							break;
						} else {
							$.gtl.sumGroupSubAndAllItem(item, totalJo.children);
						}
					} else {
						totalJo.children = [];
						totalJo.children = totalJo.children.concat(ja);
						break;
					}
				}
			}
		}
	},
	/**
	 * 添加行列分组小计总计计算
	 * 
	 * @param groupJa
	 *            JSONArray
	 * @param subTotalJo
	 *            JSONObject
	 * @param allTotalJo
	 *            JSONObject
	 */
	calcGroupSubAndAllTotal: function (groupJa, subTotalJo, allTotalJo) {
		var isTop = false;
		if (allTotalJo == null) {
			// 暂时放这
			allTotalJo = this.newAllTotalJo(groupJa[0]);
			isTop = true;
		}
		for (var i = 0; i < groupJa.length; i++) {
			var itemJo = groupJa[i];
			if (itemJo.children) {
				var childrenJa = itemJo.children;
				if (childrenJa.length > 0) {
					var child0 = childrenJa[0];
					if (child0.children) {
						if (childrenJa.length > 1) {
							var calcJo = this.newSubTotalJo(itemJo);
							groupJa.splice(++i, 0, calcJo);
							$.gtl.calcGroupSubAndAllTotal(childrenJa, groupJa[i], allTotalJo);
							if (subTotalJo != null) {
								var totalTypeJa = groupJa[i].children;
								$.gtl.sumGroupSubAndAllTotal(totalTypeJa, subTotalJo);
							}
						} else {
							$.gtl.calcGroupSubAndAllTotal(childrenJa, subTotalJo, allTotalJo);
						}
					} else {
						$.gtl.sumGroupSubAndAllTotal($.extend(true, [], childrenJa), subTotalJo);
						$.gtl.sumGroupSubAndAllTotal($.extend(true, [], childrenJa), allTotalJo);
					}
				}
			} else if (Array.isArray(itemJo) && subTotalJo) {
				$.gtl.sumGroupSubAndAllTotal($.extend(true, [], itemJo), subTotalJo);
				$.gtl.sumGroupSubAndAllTotal($.extend(true, [], itemJo), allTotalJo);
			}
		}
		if (isTop) {
			groupJa.push(allTotalJo);
		}
	},
	/**
	 * 添加一项累计 和
	 * @param {*} itemJo 累加项
	 * @param {*} totalJa 已累计值
	 */
	sumTotalItem: function (itemJo, totalJa) {
		var key = itemJo.field;
		var dataFieldJo = $.ju.findByKeyValue(totalJa, "field", key);
		if (dataFieldJo == null) {
			totalJa.add(itemJo);
		} else {
			var val = $.gtl.getJsonDoubleValue(dataFieldJo, "value");
			if (val != null) {
				// ArithUtil.add 大数据精度待解决
				val += $.gtl.getJsonDoubleValue(itemJo, "value");
				var count = 2;
				if (dataFieldJo.count != undefined) {
					count += parseInt(dataFieldJo.count);
				}
				dataFieldJo.value = val;
				dataFieldJo.count = count;
			}
		}
	},
	/**
	 * 小计求和
	 * 
	 * @param newRcedsJa
	 *            JSONArray 新入累加记录集
	 * @param totalJo
	 *            JSONObject 已累计小计对象
	 */
	sumSubTotal: function (newRcedsJa, totalJo) {
		if (totalJo != null) {
			for (var i = 0, l = newRcedsJa.length; i < l; i++) {
				var item = newRcedsJa[i];
				if (Array.isArray(item)) {
					if (totalJo.children) {
						$.gtl.sumSubTotal(item, totalJo);
					} else {
						totalJo.children = [];
						if (item.length > 0 && (item[0].isGroup != undefined)) {
							totalJo.children.push(item);
						} else {
							totalJo.children = totalJo.children.concat(item);
						}
					}
				} else {
					if (totalJo.children) {
						if (item.isGroup) {
							var key = item.field;
							var value = item.value;
							// var dataFieldJo = $.ju.findJaryByKeyValue(totalJo.children, key, value);
							var dataFieldJo = this.getEqualJaByIsGroup(newRcedsJa, totalJo.children);
							if (dataFieldJo == null) {
								totalJo.children.push(newRcedsJa);
							} else {
								for (var j = i + 1; j < l; j++) {
									if (!newRcedsJa[j].isGroup) {
										$.gtl.sumTotalItem(newRcedsJa[j], dataFieldJo);
									}
								}
							}
							break;
						} else {
							$.gtl.sumTotalItem(item, totalJo.children);
						}
					} else {
						totalJo.children = [];
						totalJo.children = totalJo.children.concat(newRcedsJa);
						break;
					}
				}
			}
		}
	},
	/**
	 * 计算小计
	 * @param {*} treeJa 树型分组数据getGroupRows or getGroupCols 返回值
	 */
	calcSubTotal: function (treeJa, subTotalJo) {
		for (var i = 0; i < treeJa.length; i++) {
			var itemJo = treeJa[i];
			var itemChildren = itemJo.children;

			if (itemChildren && itemChildren.length > 0) {
				var child0 = itemChildren[0];
				if ($.gtl.isSubGroup(child0)) {
					// 判断分组值>1条，添加小计汇总
					if (itemChildren.length > 1) {
						var newSubTotal = this.newSubTotalJo(itemJo);
						treeJa.splice(++i, 0, newSubTotal);
						$.gtl.calcSubTotal(itemChildren, newSubTotal);
						if (subTotalJo != null) {
							var totalTypeJa = treeJa[i].children;
							$.gtl.sumSubTotal($.extend(true, [], totalTypeJa), subTotalJo);
						}
					} else {
						$.gtl.calcSubTotal(itemChildren, subTotalJo);
					}
				} else {
					// 此时itemChildren 二维数组[[行记录1],[{字段列1},{字段列2}],[行记录3]]
					$.gtl.sumSubTotal($.extend(true, [], itemChildren), subTotalJo);
				}
			}
		}
	},
	/**
	 * 计算总计
	 * @param {*} treeJa 树型分组数据getGroupRows or getGroupCols 包含小计返回值
	 * @param {*} allTotalJo 总计对象
	 */
	calcAllTotal: function (treeJa, allTotalJo) {
		if (treeJa && treeJa.length > 0) {
			var isTop = false;
			if (allTotalJo == null) {
				allTotalJo = this.newAllTotalJo(treeJa[0]);
				isTop = true;
			}

			for (var i = 0; i < treeJa.length; i++) {
				var itemJo = treeJa[i];
				var itemChildren = itemJo.children;
				// 累计顶层所有小计
				if (itemJo.type == "subTotal") {
					this.sumSubTotal($.extend(true, [], itemChildren), allTotalJo);
				} else if (itemChildren.length > 0) {
					// 子节点为分组节点，且当前分组值为一条，向下累计
					let child0 = itemChildren[0];
					if (this.isSubGroup(child0)) {
						if (itemChildren.length == 1) {
							this.calcAllTotal(itemChildren, allTotalJo);
						}
					} else if (Array.isArray(child0)) {
						this.sumSubTotal($.extend(true, [], itemChildren), allTotalJo);
					}
				}
			}

			if (isTop) {
				treeJa.push(allTotalJo);
			}
		}
	},
	/**
	 * 新增小计对象
	 * @param {*} groupRecd 其中一组分组数据
	 */
	newSubTotalJo: function (groupRecd) {
		let subTotalJo = {
			field: groupRecd.field,
			value: "小计", //groupRecd.value,
			span: groupRecd.level,
			type: "subTotal"
		}
		return subTotalJo;
	},
	/**
	 * 新增总计对象
	 * @param {*} groupFirstRecd 树型分组数据第一条记录
	 */
	newAllTotalJo: function (groupFirstRecd) {
		let allTotalJo = {
			field: groupFirstRecd.field,
			value: "总计",
			type: "allTotal",
			span: groupFirstRecd.level
		};
		return allTotalJo;
	},
	/**
	 * 判断是否为子分组, 判断子节点是json对象，包含children说明是子分组，否则为二维数组是数据区字段值
	 * @param {*} childrenItem0 
	 */
	isSubGroup: function (childrenItem0) {
		if (childrenItem0.children) {
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 在被查找列表中获取分组值相等的项，可能存在多分组 isGroup=true
	 * @param {*} recdJa 
	 * @param {*} beFindJa 
	 */
	getEqualJaByIsGroup(recdJa, beFindJa) {
		let dataFieldJo;
		let scope = this;
		$.each(recdJa, function (i) {			
			if (!this.isGroup) return false;
			if (i == 0) {
				dataFieldJo = scope.getEqual2JaByFieldAndValue(beFindJa, this);
			} else {
				dataFieldJo = scope.getEqual2JaByFieldAndValue(dataFieldJo, this);
			}
			if (!dataFieldJo || dataFieldJo.length == 0) {
				return false;
			}
		})
		if (dataFieldJo && dataFieldJo.length > 0) {
			return dataFieldJo[0];
		}
		return null;
	},
	getEqual2JaByFieldAndValue(beFindJa, recdItem) {
		var retuAry = [];
		for (var i = 0, l = beFindJa.length; i < l; i++) {
			let beFindJaItem = beFindJa[i];
			for (var j = 0, m = beFindJaItem.length; j < m; j++) {
				let curtItem = beFindJaItem[j];
				if ((curtItem.field == recdItem.field) && (curtItem.value == recdItem.value)) {
					retuAry.push(beFindJaItem);
				}
			}
		}
		return retuAry;
	},
	/**
	 * 获取已折叠需展开的行集合
	 * 
	 * @param {}
	 *            $tb 行所在表格
	 * @param {}
	 *            axis 行坐标
	 * @param {}
	 *            level 行分组层级
	 * @param {}
	 *            closeIcon 折叠按钮样式
	 */
	getRowExpendTrs: function ($tb, axis, closeIcon) {
		var $trs = $tb.find("tbody").find("tr[axis^='" + axis + "']");
		var subCloseA = $(closeIcon, $tb).filter("i[axis^='" + axis + "_']");

		if (subCloseA.length > 0) {
			for (var i = 0, l = subCloseA.length; i < l; i++) {
				var $domA = $(subCloseA[i]);
				var subAxis = $domA.attr("axis");
				// 删除子节点折叠行
				$trs = $trs.not("tr[axis^='" + subAxis + "']");

				var parentAxis = $.gtl.getParentAxis(subAxis);
				// 判断是否存在父折叠，不存在添加該折叠行
				if (subCloseA.filter("i[axis=" + parentAxis + "]").length == 0) {
					var trAxis = $domA.parents("tr").first().attr("axis");
					$trs = $trs.add($tb.find("tbody").find("tr[axis='" + trAxis + "']"));
				};
			}
		}
		return $trs;
	},
	/**
	 * 分配分组坐标，字母代表层级，数字代表同层级下分组值顺序 D0_C0_B1_A2
	 * 
	 * @param {}
	 *            parentAxis 父坐标
	 * @param {}
	 *            level 当前分组层级
	 * @param {}
	 *            index 同级分组数组下标
	 * @return {}
	 */
	getAxis: function (parentAxis, level, index) {
		return (parentAxis ? parentAxis + "_" : "") +
			String.fromCharCode(64 + level) + index;
	},
	/**
	 * 获取父分组坐标 D0_C0_B1_A2
	 * 
	 * @param {}
	 *            axis 字母代表层级从A开始(A=1),数字代表同层级下分组值顺序(从0开始)
	 */
	getParentAxis: function (axis) {
		return axis.substring(0, axis.lastIndexOf("_"));
	},
	/**
	 * 计算children子节点个数，获取跨行列值
	 * 
	 * @param childrenJa
	 *            [{field:"字段名",value:"值",span:5},{field:"字段名",value:"值",type:"subTotal",...},{field:"字段名",value:"值"}...]
	 *            子节点列表
	 * @param spanKey  span类型[span, rowspan, colspan]
	 * @return
	 */
	getChildrenSpan: function (childrenJa, spanKey) {
		spanKey = spanKey || "span";
		var span = 0;
		$.each(childrenJa, function () {
			if (this.type) {
				span++;
			} else if (this[spanKey]) {
				span += this[spanKey];
			} else {
				span++;
			}
		});
		return span;
	},
	/**
	 * 获取字段格式化值
	 * 
	 * @param {}
	 *            bizField 字段配置
	 * @param {}
	 *            value 值
	 * @return {}
	 */
	getFormatValue: function (bizField, value) {
		var format = bizField && bizField.format;
		if (format) {
			return Scp.Number.format(value, format);
		} else {
			return value;
		}
	},
	/**
	 * 获取数据策略依赖字段配置
	 * {week:[{field:'FWNUM',title:'周任务',width:200,col:4}],month:[{field:'FMNUM',title:'月任务',width:200,col:5}],fjd:[{field:'FQNUM',title:'季任务',width:200,col:6}],year:[{field:'FYNUM',title:'年任务',width:200,col:7}]}
	 * 
	 * @param {}
	 *            policy.dependFields
	 * @param {}
	 *            groupFieldName
	 * @return {}
	 */
	getDependFields: function (policy, groupFieldName) {
		if (policy.dependFields) {
			return policy.dependFields[groupFieldName];
		}
	},
	/**
	 * 获取列合计值
	 * 
	 * @param {}
	 *            analyseFields
	 * @param {}
	 *            alzChildren
	 * @param {}
	 *            count
	 * @param {}
	 *            type
	 * @return {}
	 */
	getColSum: function (analyseFields, alzChildren, count, type) {
		var sumFields = {};
		$.each(alzChildren, function () {
			if (this.value) {
				var fn = this.field.replace(this.axis || "", "");
				var val = sumFields[fn] || 0;
				val += this.value;
				sumFields[fn] = val;
			}
		})
		var retuJa = [];
		$.each(analyseFields, function () {
			var item = {
				field: this.field,
				value: sumFields[this.field] || 0,
				count: count,
				type: type
			}
			retuJa.push(item);
		})
		return retuJa;
	},
	/**
	 * 获取包含列分组下数据列集合
	 * 
	 * @param {}
	 *            colsJa 按列分组的原数据
	 * @param {}
	 *            rowsJa 按行分组的原数据
	 * @param {}
	 *            colGroupFields 列区分组字段列表
	 * @param {}
	 *            analyseFields 数据区字段字段
	 * @param {}  
	 * 			  retuRecd 返回列分组下数据区字段集合
	 * @return {}
	 */
	getGroupColRecd: function (colsJa, rowsJa, colGroupFields, analyseFields, retuRecd) {
		if (retuRecd == undefined) {
			retuRecd = [];
		}
		// 这样写暂时只支持1个列分组字段
		$.each(colsJa, function () {
			let axis = this.axis;
			if (this.type == "allColTotal") {
				// 添加列总计
				var colTotalJa = $.gtl.getColSum(analyseFields, retuRecd, colsJa.length, "allColTotal");
				$.each(colTotalJa, function (i) {
					this.field = this.field + axis + "_" + i;
				})
				retuRecd = retuRecd.concat(colTotalJa);
			} else {
				var ji = $.ju.find2JaryByKeyValue(rowsJa, "value", this.value);
				if (this.level > 1) {
					retuRecd = $.gtl.getGroupColRecd(this.children, ji, colGroupFields, analyseFields, retuRecd);
				} else {
					if (ji) {
						let subAlz = [];
						// 二维数组截取数据区字段
						$.each(ji, function () {
							subAlz = subAlz.concat(this.splice(colGroupFields.length), this.length);
						});
						let sumAlz = $.gtl.getColSum(analyseFields, subAlz, 1, "");
						$.each(sumAlz, function (i) {
							this.field = this.field + axis + "_" + i;
							// getColSum 计算汇总值使用
							this.axis = axis + "_" + i;
						})
						retuRecd = retuRecd.concat(sumAlz);

					} else {
						$.each(analyseFields, function () {
							retuRecd.push({});
						})
					}
				}
			}
		});

		// 格式化列数据
		$.each(retuRecd, function () {
			// this.field 存在下标取不到字段配置
			var bizField = $.ju.findByKeyValue(analyseFields, "field", this.field);
			this.value = $.gtl.getFormatValue(bizField, this.value);
		});
		return retuRecd;
	},
	/**
	 * 计算分组数据跨行值 span
	 * 
	 * @param {}
	 *            jsonTreeJa 被计算树型数组
	 * @param {}
	 *            isGroup2 是否二维分组（同时包含行列分组)
	 */
	calcRowSpan: function (jsonTreeJa, isGroup2) {
		$.each(jsonTreeJa, function () {
			if (this.children && !this.type) {
				if (this.children.length > 0) {
					if (this.children[0] instanceof Array) {
						this.span = isGroup2 ? 1 : this.children.length;
					} else {
						$.gtl.calcRowSpan(this.children, isGroup2);
						this.span = $.gtl.getChildrenSpan(this.children) || 1;
					}
				}
			}
		})
	},
	/**
	 * 计算分组数据跨列值 span
	 * 
	 * @param {}
	 *            jsonTreeJa 被计算树型数组
	 * @param {}
	 * 			  dataFieldLen 数据区字段个数
	 * @param {}
	 * 			  axis 列字段坐标
	 */
	calcColSpan: function (jsonTreeJa, dataFieldLen, axis) {
		if (axis == undefined) {
			axis = "";
		}
		$.each(jsonTreeJa, function (i) {
			if (this.children && !this.type) {
				this.axis = axis + "_" + i;
				if (this.level > 1) {
					$.gtl.calcColSpan(this.children, dataFieldLen, this.axis);
					this.colspan = $.gtl.getChildrenSpan(this.children, "colspan") || 1;
				} else {
					this.colspan = dataFieldLen;
				}
			}
		})
	},
	/**
	 * 获取(小计，总计)分组行统计Json
	 * 
	 * @param {}
	 *            rowItem 树行分组Json其中一条记录
	 * @param {}
	 *            newRecd 组装成TBody的其中一行
	 * @param {}
	 *            colsJa 列分组数据
	 * @param {}
	 *            groupFields2 列分组字段名列表
	 * @param {}
	 *            analyseFields 数据字段列表
	 * @param {}
	 *            axis TBody -> newRecd当前行坐标
	 */
	calcGroupRowSummaryJson: function (rowItem, newRecd, colsJa, groupFields2,
		analyseFields, axis) {
		var recdItem = {
			field: rowItem.field,
			value: rowItem.value,
			type: rowItem.type,
			axis: axis
		};
		if (rowItem.span) {
			recdItem.span = rowItem.span;
		}
		newRecd.push(recdItem);
		var childrenJa = rowItem.children;
		if (childrenJa && childrenJa.length > 0) {
			if (childrenJa[0] instanceof Array) {
				// 子节点为列分组数据处理
				var alzChildren = $.gtl.getGroupColRecd(colsJa, childrenJa,
					groupFields2, analyseFields);
				newRecd = newRecd.concat(alzChildren);
			} else {
				// 格式化列数据
				$.each(childrenJa, function () {
					var bizField = $.ju.findByKeyValue(
						analyseFields, "field", this.field);
					this.value = $.gtl.getFormatValue(bizField,
						this.value);
				});
				newRecd = newRecd.concat(childrenJa);
			}
		}
		return newRecd;
	},
	/**
	 * 添加分组字段Td
	 * 
	 * @param {}
	 *            rowsJaItem
	 * @param {}
	 *            newRecd
	 * @param {}
	 *            parentAxis
	 * @param {}
	 *            policy
	 */
	rowAddGroupTd: function (rowsJaItem, newRecd, axis, policy) {
		var bizField = $.ju.findByKeyValue(policy.rowGroupFields, "field",
			rowsJaItem.field);
		var gTd = {
			field: rowsJaItem.field,
			value: $.gtl.getFormatValue(bizField, rowsJaItem.value),
			span: rowsJaItem.span || 1,
			level: rowsJaItem.level || 0,
			col: bizField.col || 0,
			axis: axis
		}
		$.ju.instObjToArrayByKeyOrder(newRecd, gTd, "col");

		// 添加分组字段依赖列
		var dependFields = $.gtl.getDependFields(policy, rowsJaItem.field);
		if (dependFields) {
			$.each(dependFields, function (i, dItem) {
				var dItemData = $.ju.findByKeyValue(
					rowsJaItem.dependFields, "field", dItem.field);
				var instObj = {
					value: dItemData.values.join(dItem.split || "，"),
					span: rowsJaItem.span || 1,
					axis: axis
				};
				if (rowsJaItem.level) {
					instObj.dlevel = rowsJaItem.level;
				}
				$.extend(instObj, dItem);
				$.ju.instObjToArrayByKeyOrder(newRecd, instObj, "col");
			})
		}
	},

	/**
	 * 计算树型分组转换成网格二维数组配置
	 * 
	 * @param {}
	 *            rowsJa
	 *            行分组数据，[{field:"年",value:"2018",children:[{field:"季度",value:"第1季度",children:[{},{}]},{},{}]}],
	 *            最后一层叶节点为二维数据 {children:[[{数据字段1},{数据字段2}],[{数据字段1},{数据字段2}]]}
	 * @param {}
	 *            colsJa 列分组数据
	 * @param {}
	 *            retuJa 返回Tbody引用变量
	 *            [[{field:"td1",value:"v1"},{field:"td2",value:"v2"}]]
	 * @param {}
	 *            curtRow 递归存储当前行对象
	 * @param {}
	 *            policy 分组策略配置
	 * @param {}
	 *            parentAxis 父节点坐标
	 */
	calcTreeJa2TbodyJa: function (rowsJa, colsJa, retuJa, curtRow, policy,
		parentAxis) {
		var colGroupFields = policy.colGroupFields;
		var analyseFields = policy.dataFields;
		var newRecd = null;
		// $.each(rowsJa, function (i, rowsJaItem) {
		// if (i==0) return true;
		for (var i = 0, l = rowsJa.length; i < l; i++) {
			let rowsJaItem = rowsJa[i];
			newRecd = (i == 0 && curtRow != null) ? curtRow : [];
			if (!Array.isArray(rowsJaItem)) { // 非数组代表分组层级节点 this 等价于 rowsJaItem
				if (rowsJaItem.type) { // 是否是小计，总计统计行
					var axis = $.gtl.getAxis(parentAxis, rowsJaItem.span || 1, i - 1);
					newRecd = $.gtl.calcGroupRowSummaryJson(rowsJaItem, newRecd, colsJa,
						colGroupFields, analyseFields, axis);
					// 添加分组统计行
					retuJa.push(newRecd);
				} else if (rowsJaItem.children) { // 当前为分组项，下有子节点
					var axis = $.gtl.getAxis(parentAxis, rowsJaItem.level || 1, i);
					$.gtl.rowAddGroupTd(rowsJaItem, newRecd, axis, policy);

					var childrenJa = rowsJaItem.children;
					if (childrenJa && childrenJa.length > 0) {
						$.gtl.calcTreeJa2TbodyJa(childrenJa, colsJa, retuJa,
							newRecd, policy, axis);
					} else {
						// 当没有数据字段直接添加分组记录
						retuJa.push(newRecd);
					}
				} else {
					retuJa.push(rowsJaItem);
				}
			} else {
				if (colGroupFields != null && colGroupFields.length > 0) {
					var alzChildren = $.gtl.getGroupColRecd(colsJa, rowsJa,
						colGroupFields, analyseFields);
					newRecd = newRecd.concat(alzChildren);
					retuJa.push(newRecd);
					break;
					// return false;
				} else {
					// 格式化列数据
					$.each(rowsJaItem, function () {
						var bizField = $.ju.findByKeyValue(analyseFields, "field", this.field);
						this.value = $.gtl.getFormatValue(bizField, this.value);
					});
					newRecd = newRecd.concat(rowsJaItem);
					retuJa.push(newRecd);
				}
			}
		}
		// })
		return 0;
	}

};

export default jQuery.GroupTableLayout