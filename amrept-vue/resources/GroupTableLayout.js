/**
 * GroupTableLayoutUtil分组网格布局数据重组算法
 * 
 * 命名空间 $.GroupTableLayoutUtil 简写 $.gtlu
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
	getGroupFieldKeyValue : function(recdsJa, fieldName) {
		var retuJo = {};
		$.each(recdsJa, function() {
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
	 *            {name:"依赖fieldId1",type:"distinct"}
	 * @return
	 */
	getDependFieldsNameValue : function(recdsJa, groupFieldDependFieldsJa) {
		var retuJa = [];
		$.each(groupFieldDependFieldsJa, function() {
					var distinctList = $.ju.getDistinctValues(recdsJa,
							this.name);
					var itemJo = {
						name : this.name,
						type : "distinct",
						values : distinctList
					};
					retuJa.push(itemJo);
				})
		return retuJa;
	},
	/**
	 * 获取字段[{name:"字段名",value:"字段值"},...]格式
	 * 
	 * @param recdJa
	 *            JSONArray待转换记录
	 * @param analyseFields
	 *            String[]字段名列表
	 * @param groupFields2
	 *            String[]次分组字段
	 * @return
	 */
	getRecordNameValueFormat : function(recdsJa, analyseFields, groupFields2) {
		var alzChildren = [];

		if (analyseFields && analyseFields.length > 0) {
			for (var i = 0; i < recdsJa.length; i++) {
				var recd = recdsJa[i];
				var rowJa = [];

				for (var j = 0, l = analyseFields.length; j < l; j++) {
					var afn = analyseFields[j];
					rowJa.push(this.getNameValueJo(afn, recd[afn]));
				}

				$.each(groupFields2 || [], function() {
							var itemJo = $.gtl.getNameValueJo(this, recd[this]);
							itemJo.isGroup = true;
							rowJa.push(itemJo);
						})

				alzChildren.push(rowJa);
			}
		}
		return alzChildren;
	},
	getNameValueJo : function(name, value) {
		return {
			name : name,
			value : value
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
	 * @param dataFields
	 *            String[]数据字段
	 * @param isFirstLevel
	 *            boolean是否初次调用
	 * @return
	 */
	getGroupJsonTree : function(recdsJa, retuJa, groupFields, groupFields2,
			dataFields, isFirstLevel) {
		if (groupFields.length > 0) {
			var fn = groupFields[0];
			var cloneGf = [];
			$.extend(cloneGf, groupFields);
			var subGroupFields = cloneGf.splice(1, cloneGf.length);
			var jo = this.getGroupFieldKeyValue(recdsJa, fn);
			var subGroupChildren = [];

			$.each(jo, function(key, ja) {
						var itemJo = {
							name : fn,
							value : key,
							level : groupFields.length
						};
						var children = $.gtl
								.getGroupJsonTree(ja, retuJa, subGroupFields,
										groupFields2, dataFields, false);
						if (children != null) {
							itemJo.children = children;
						}

						if (isFirstLevel) {
							retuJa.push(itemJo);
						} else {
							subGroupChildren.push(itemJo);
						}
					})
			return subGroupChildren;
		} else {
			return this.getRecordNameValueFormat(recdsJa, dataFields,
					groupFields2);
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
	 *            {groupField1:[{name:"依赖fieldId1",type:"distinct"}]}
	 * @param dataFields
	 *            String[] 数据字段
	 * @param isFirstLevel
	 *            boolean是否初次调用
	 * @return
	 */
	getGroupAndDependJsonTree : function(recdsJa, retuJa, groupFields,
			dependFields, dataFields, isFirstLevel) {
		if (groupFields.length > 0) {
			var fn = groupFields[0];
			var cloneGf = [];
			$.extend(cloneGf, groupFields);
			var subGroupFields = cloneGf.splice(1, cloneGf.length);
			var jo = this.getGroupFieldKeyValue(recdsJa, fn);
			var subGroupChildren = [];
			$.each(jo, function(key, ja) {
						var itemJo = {
							name : fn,
							value : key,
							level : groupFields.length
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
	getJsonDoubleValue : function(jo, valKey) {
		var val = jo[valKey];
		if (val == null || "NULL".equals(val)) {
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
	sumGroupSubAndAllItem : function(itemJo, totalJa) {
		var key = itemJo.name;
		var dataFieldJo = $.ju.findByKeyValue(totalJa, "name", key);
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
	sumGroupSubAndAllTotal : function(ja, totalJo) {
		if (totalJo != null) {
			for (var i = 0, l = ja.length; i < l; i++) {
				var item = ja[i];
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
							var key = item.name;
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
							$.gtl.sumGroupSubAndAllItem(itemJo,
									totalJo.children);
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
	calcGroupSubAndAllTotal : function(groupJa, subTotalJo, allTotalJo) {
		var isTop = false;
		if (allTotalJo == null) {
			allTotalJo = {
				name : "allTotal",
				value : "总计",
				type : "allTotal"
			};
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
							var calcJo = {
								name : itemJo.name,
								value : itemJo.value,
								span : itemJo.level,
								type : "subTotal"
							}
							groupJa.push(++i, calcJo);
							$.gtl.calcGroupSubAndAllTotal(childrenJa,
									groupJa[i], allTotalJo);
							if (subTotalJo != null) {
								var totalTypeJa = groupJa[i].children;
								$.gtl.sumGroupSubAndAllTotal(totalTypeJa,
										subTotalJo);
							}
						} else {
							$.gtl.calcGroupSubAndAllTotal(childrenJa,
									subTotalJo, allTotalJo);
						}
					} else {
						$.gtl.sumGroupSubAndAllTotal(childrenJa, subTotalJo);
						$.gtl.sumGroupSubAndAllTotal(childrenJa, allTotalJo);
					}
				}
			} else if (Array.isArray(itemJo) && subTotalJo) {
				$.gtl.sumGroupSubAndAllTotal(itemJo, subTotalJo);
				$.gtl.sumGroupSubAndAllTotal(itemJo, allTotalJo);
			}
		}
		if (isTop) {
			groupJa.push(allTotalJo);
		}
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
	getRowExpendTrs : function($tb, axis, closeIcon) {
		var $trs = $tb.find("tbody").find("tr[axis^='" + axis + "']");
		var subCloseA = $(closeIcon, $tb).filter("a[axis^='" + axis + "_']");

		if (subCloseA.length > 0) {
			for (var i = 0, l = subCloseA.length; i < l; i++) {
				var $domA = $(subCloseA[i]);
				var subAxis = $domA.attr("axis");
				// 删除子节点折叠行
				$trs = $trs.not("tr[axis^='" + subAxis + "']");

				var parentAxis = $.gtl.getParentAxis(subAxis);
				// 判断是否存在父折叠，不存在添加該折叠行
				if (subCloseA.filter("a[axis=" + parentAxis + "]").length == 0) {
					$trs = $trs.add($domA.parent().parent());
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
	getAxis : function(parentAxis, level, index) {
		return (parentAxis ? parentAxis + "_" : "")
				+ String.fromCharCode(64 + level) + index;
	},
	/**
	 * 获取父分组坐标 D0_C0_B1_A2
	 * 
	 * @param {}
	 *            axis 字母代表层级从A开始(A=1),数字代表同层级下分组值顺序(从0开始)
	 */
	getParentAxis : function(axis) {
		return axis.substring(0, axis.lastIndexOf("_"));
	},
	/**
	 * 计算children子节点个数，获取跨行列值
	 * 
	 * @param childrenJa
	 *            [{name:"字段名",value:"值",span:5},{name:"字段名",value:"值",type:"subTotal",...},{name:"字段名",value:"值"}...]
	 *            子节点列表
	 * @return
	 */
	getChildrenSpan : function(childrenJa) {
		var span = 0;
		$.each(childrenJa, function() {
					if (this.type) {
						span++;
					} else if (this.span) {
						span += this.span;
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
	getFormatValue : function(bizField, value) {
		var format = bizField && bizField.format;
		if (format) {
			return Scp.Number.format(value, format);
		} else {
			return value;
		}
	},
	/**
	 * 获取数据策略依赖字段配置
	 * {week:[{name:'FWNUM',desc:'周任务',width:200,col:4}],month:[{name:'FMNUM',desc:'月任务',width:200,col:5}],fjd:[{name:'FQNUM',desc:'季任务',width:200,col:6}],year:[{name:'FYNUM',desc:'年任务',width:200,col:7}]}
	 * 
	 * @param {}
	 *            policy.dependFields
	 * @param {}
	 *            groupFieldName
	 * @return {}
	 */
	getDependFields : function(policy, groupFieldName) {
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
	getColSum : function(analyseFields, alzChildren, count, type) {
		var sumFields = {};
		$.each(alzChildren, function() {
					if (this.value) {
						var val = sumFields[this.name] || 0;
						val += this.value;
						sumFields[this.name] = val;
					}
				})
		var retuJa = [];
		$.each(analyseFields, function() {
					var item = {
						name : this.name,
						value : sumFields[this.name] || 0,
						count : count,
						type : type
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
	 * @return {}
	 */
	getGroupColRecd : function(colsJa, rowsJa, colGroupFields, analyseFields) {
		var alzChildren = [];
		$.each(colsJa, function() {
					var ji = $.ju.findJaryByKeyValue(rowsJa, "value",
							this.value);
					if (ji) {
						alzChildren = alzChildren.concat(ji.slice(
								colGroupFields.length, ji.length));
					} else {
						$.each(analyseFields, function() {
									alzChildren.push({});
								})
					}
				});
		var colTotalJa = $.gtl.getColSum(analyseFields, alzChildren,
				colsJa.length, "allColTotal");
		alzChildren = alzChildren.concat(colTotalJa);
		// 格式化列数据
		$.each(alzChildren, function() {
					var bizField = $.ju.findByKeyValue(analyseFields,
							"name", this.name);
					this.value = $.gtl.getFormatValue(bizField, this.value);
				});
		return alzChildren;
	},
	/**
	 * 计算分组数据跨行跨列值 span
	 * 
	 * @param {}
	 *            jsonTreeJa 被计算树型数组
	 * @param {}
	 *            isGroup2 是否二维分组（同时包含行列分组)
	 */
	calcSpan : function(jsonTreeJa, isGroup2) {
		$.each(jsonTreeJa, function() {
					if (this.children && !this.type) {
						if (this.children.length > 0) {
							if (this.children[0] instanceof Array) {
								this.span = isGroup2 ? 1 : this.children.length;
							} else {
								$.gtl.calcSpan(this.children, isGroup2);
								this.span = $.gtl
										.getChildrenSpan(this.children)
										|| 1;
							}
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
	calcGroupRowSummaryJson : function(rowItem, newRecd, colsJa, groupFields2,
			analyseFields, axis) {
		var recdItem = {
			name : rowItem.name,
			value : rowItem.value,
			type : rowItem.type,
			axis : axis
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
				$.each(childrenJa, function() {
							var bizField = $.ju.findByKeyValue(
									analyseFields, "name", this.name);
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
	rowAddGroupTd : function(rowsJaItem, newRecd, axis, policy) {
		var bizField = $.ju.findByKeyValue(policy.rowGroupFields, "name",
				rowsJaItem.name);
		var gTd = {
			name : rowsJaItem.name,
			value : $.gtl.getFormatValue(bizField, rowsJaItem.value),
			span : rowsJaItem.span || 1,
			level : rowsJaItem.level || 0,
			col : bizField.col || 0,
			axis : axis
		}
		$.ju.instObjToArrayByKeyOrder(newRecd, gTd, "col");

		// 添加分组字段依赖列
		var dependFields = $.gtl.getDependFields(policy, rowsJaItem.name);
		if (dependFields) {
			$.each(dependFields, function(i, dItem) {
						var dItemData = $.ju.findByKeyValue(
								rowsJaItem.dependFields, "name", dItem.name);
						var instObj = {
							value : dItemData.values.join(dItem.split || "，"),
							span : rowsJaItem.span || 1,
							axis : axis
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
	 *            行分组数据，[{name:"年",value:"2018",children:[{name:"季度",value:"第1季度",children:[{},{}]},{},{}]}],
	 *            最后一层叶节点为二维数据 {children:[[{数据字段1},{数据字段2}],[{数据字段1},{数据字段2}]]}
	 * @param {}
	 *            colsJa 列分组数据
	 * @param {}
	 *            retuJa 返回Tbody引用变量
	 *            [[{name:"td1",value:"v1"},{name:"td2",value:"v2"}]]
	 * @param {}
	 *            curtRow 递归存储当前行对象
	 * @param {}
	 *            policy 分组策略配置
	 * @param {}
	 *            parentAxis 父节点坐标
	 */
	calcTreeJa2TbodyJa : function(rowsJa, colsJa, retuJa, curtRow, policy,
			parentAxis) {
		var colGroupFields = policy.colGroupFields;
		var analyseFields = policy.dataFields;
		var newRecd = null;
		$.each(rowsJa, function(i, rowsJaItem) {
			newRecd = (i == 0 && curtRow != null) ? curtRow : [];
			if (!Array.isArray(this)) { // 非数组代表分组层级节点 this 等价于 rowsJaItem
				if (this.type) { // 是否是小计，总计统计行
					var axis = $.gtl.getAxis(parentAxis, this.span || 1, i - 1);
					newRecd = $.gtl.calcGroupRowSummaryJson(this, newRecd, colsJa,
							colGroupFields, analyseFields, axis);
					// 添加分组统计行
					retuJa.push(newRecd);
				} else if (this.children) { // 当前为分组项，下有子节点
					var axis = $.gtl.getAxis(parentAxis, this.level || 1, i);
					$.gtl.rowAddGroupTd(this, newRecd, axis, policy);

					var childrenJa = this.children;
					if (childrenJa && childrenJa.length > 0) {
						$.gtl.calcTreeJa2TbodyJa(childrenJa, colsJa, retuJa,
								newRecd, policy, axis);
					} else {
						// 当没有数据字段直接添加分组记录
						retuJa.push(newRecd);
					}
				} else {
					retuJa.push(this);
				}
			} else {
				if (colGroupFields != null && colGroupFields.length > 0) {
					var alzChildren = $.gtl.getGroupColRecd(colsJa, rowsJa,
							colGroupFields, analyseFields);
					newRecd = newRecd.concat(alzChildren);
					retuJa.push(newRecd);
					return false;
				} else {
					// 格式化列数据
					$.each(this, function() {
						var bizField = $.ju.findByKeyValue(analyseFields,
								"name", this.name);
						this.value = $.gtl.getFormatValue(bizField, this.value);
					});
					newRecd = newRecd.concat(this);
					retuJa.push(newRecd);
				}
			}

		})
		return 0;
	}

};