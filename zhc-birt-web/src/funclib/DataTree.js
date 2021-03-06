/**
 * Js树型数据转换工具类
 * @author cls
 * @date 2019-07-01
 */

import {
  dataGroupKey
} from "@/funclib/DataGroup.js";

/**
 * showdoc
 * @catalog JS工具类/DataTree
 * @title 根据分组字段配置，转换成两层树型数据
 * @description 根据传入对象数组，树型配置转换成树结构数据
 * @method static
 * @url import { groupToTreeData } from '@/utils/DataTree.js'
 * @param datas 必选 [{},{}] 记录集对象,树分组字段值冗余
 * @param tree 必选 {groupBy:['f1','f2'],childNodeKeyField:'methodName',childrenKey:'children'} 树型配置
 * @param tree.groupBy 必选 groupBy:['f1','f2'] 树分组字段
 * @param tree.childNodeKeyField 必选 'methodName' 子节点拼接id唯一值
 * @param tree.parentLabelField 必选 'labelFieldName' 树父节点标签绑定字段
 * @param tree.childLabelField 必选 'labelFieldName' 树子节点标签绑定字段
 * @param tree.childrenKey 可选 'children' 字节点key值
 * @param tree.nodeKey 可选 'treeId' 树节点唯一标识Id字段
 * @return [{'f1':'v1','f2':'v2'}]
 * @return_param f1 string 记录字段名
 * @return_param v1 object 记录字段名对应值
 * @remark 测试用例
 *  groupToTreeData(
 *    [{"methodName":"abs","className":"MathFunc","classNameCn":"数学函数","methodNameCn":"取绝对值","refClassImport":"com.zhc.eap.funclib"},{"methodName":"directSuperiors","className":"OrgFunc","classNameCn":"组织机构函数","methodNameCn":"直属上级","refClassImport":"com.zhc.eap.funclib"},{"methodName":"curtOperator","className":"OrgFunc","classNameCn":"组织机构函数","methodNameCn":"当前操作者","refClassImport":"com.zhc.eap.funclib"},{"methodName":"plus","className":"MathFunc","classNameCn":"数学函数","methodNameCn":"浮点数相加","refClassImport":"com.zhc.eap.funclib"},{"methodName":"curtDate","className":"DateFunc","classNameCn":"日期函数","methodNameCn":"当前日期","refClassImport":"com.zhc.eap.funclib"},{"methodName":"curtDateTime","className":"DateFunc","classNameCn":"日期函数","methodNameCn":"当前日期时间","refClassImport":"com.zhc.eap.funclib"}],
 *    {groupBy:["refClassImport","className"],parentLabelField:'classNameCn',childLabelField:'methodNameCn',childrenKey:"children"}
 *  )
 *  返回==>
 *  [{"methodName":"abs","className":"MathFunc","classNameCn":"数学函数","methodNameCn":"取绝对值","refClassImport":"com.zhc.eap.funclib","label":"数学函数","children":[{"methodName":"abs","className":"MathFunc","classNameCn":"数学函数","methodNameCn":"取绝对值","refClassImport":"com.zhc.eap.funclib","label":"取绝对值"},{"methodName":"plus","className":"MathFunc","classNameCn":"数学函数","methodNameCn":"浮点数相加","refClassImport":"com.zhc.eap.funclib","label":"浮点数相加"}]},{"methodName":"directSuperiors","className":"OrgFunc","classNameCn":"组织机构函数","methodNameCn":"直属上级","refClassImport":"com.zhc.eap.funclib","label":"组织机构函数","children":[{"methodName":"directSuperiors","className":"OrgFunc","classNameCn":"组织机构函数","methodNameCn":"直属上级","refClassImport":"com.zhc.eap.funclib","label":"直属上级"},{"methodName":"curtOperator","className":"OrgFunc","classNameCn":"组织机构函数","methodNameCn":"当前操作者","refClassImport":"com.zhc.eap.funclib","label":"当前操作者"}]},{"methodName":"curtDate","className":"DateFunc","classNameCn":"日期函数","methodNameCn":"当前日期","refClassImport":"com.zhc.eap.funclib","label":"日期函数","children":[{"methodName":"curtDate","className":"DateFunc","classNameCn":"日期函数","methodNameCn":"当前日期","refClassImport":"com.zhc.eap.funclib","label":"当前日期"},{"methodName":"curtDateTime","className":"DateFunc","classNameCn":"日期函数","methodNameCn":"当前日期时间","refClassImport":"com.zhc.eap.funclib","label":"当前日期时间"}]}]
 */
export function groupToTreeData(datas, tree) {  
  let nodeKey = tree.nodeKey || "treeId"
  let childrenKey = tree.childrenKey || "children";
  var groupJson = {};
  datas.forEach(data => {
    const groupKey = dataGroupKey(data, tree.groupBy, ".")
    if (!groupJson[groupKey]) {
      groupJson[groupKey] = {};
      groupJson[groupKey][childrenKey] = [];
    }

    let treeNode = {
      label: data[tree.childLabelField]
    }
    treeNode[nodeKey] = groupKey + "." + data[tree.childNodeKeyField];
    treeNode = {
      ...treeNode,
      ...data
    };
    groupJson[groupKey][childrenKey].push(treeNode)
  })

  var treeRecds = []
  for (var gKey in groupJson) {
    var groupRecd = groupJson[gKey];
    var firstChild = groupJson[gKey][childrenKey][0];
    let treeNode = {
      label: firstChild[tree.parentLabelField]
    }
    treeNode[nodeKey] = gKey;

    var recd = {
      ...firstChild,
      ...treeNode,
      ...groupRecd
    }
    treeRecds.push(recd)
  }
  return treeRecds
}

function getElGroupTreeNode(data, tree, node) {
  tree.groupBy.forEach(f => {
    node[f] = data[f]
  })
  return node;
}
