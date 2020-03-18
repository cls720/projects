<template>
  <div style="padding:20px;">
    <h4>1. 基础应用</h4>
    <hc-input-filter :conf="hcInputFilterConf" :filter-datas="datas" style="width:300px;"></hc-input-filter>

    <el-table
      :data="dsResources2.data"
      style="width: 100%;margin-bottom: 20px;"
      row-key="resId"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="name" label="功能名称" sortable width="220"></el-table-column>
      <el-table-column prop="type" label="类型" sortable width="90"></el-table-column>
      <el-table-column label="数据权限分配">
        <el-table-column label="个人">
          <el-radio slot="header" v-model="radioAllPerson" label="1">个人</el-radio>
          <template slot-scope="{row}">
            <el-radio
              v-if="row.daPower && row.daPower.schemes.personalScheme"
              v-model="row.daPower.value"
              :label="row.daPower.schemes.personalScheme.value"
            >个人</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="团队">
          <el-radio slot="header" v-model="radioAllTeam" label="1">团队</el-radio>
          <template slot-scope="{row}">
            <el-radio
              v-if="row.daPower && row.daPower.schemes.groupScheme"
              v-model="row.daPower.value"
              :label="row.daPower.schemes.groupScheme.value"
            >团队</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="企业">
          <template slot-scope="{row}">
            <el-radio
              v-if="row.daPower && row.daPower.schemes.businessScheme"
              v-model="row.daPower.value"
              :label="row.daPower.schemes.businessScheme.value"
            >企业</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="其它">
          <template v-if="row.daPower" slot-scope="{row}">
            <el-radio
              v-for="(da,i) in getDaPowerOther(row)"
              :key="da.value + i"
              v-model="row.daPower.value"
              :label="da.value"
            >{{da.name}}</el-radio>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="操作权限分配">
        <el-table-column label="添加" align="center">
          <el-checkbox slot="header" v-model="checkAllAdd" @change="onCheckAllAddChange">添加</el-checkbox>
          <template slot-scope="{row}">
            <el-checkbox v-if="row.opPower && row.opPower.add" v-model="row.opPower.add.value">添加</el-checkbox>
            <span v-else>—</span>
          </template>
        </el-table-column>
        <el-table-column label="修改">
          <el-checkbox slot="header" v-model="checkAllEdit">修改</el-checkbox>
          <template slot-scope="{row}">
            <el-checkbox v-if="row.opPower && row.opPower.edit" v-model="row.opPower.edit.value">修改</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="删除">
          <el-checkbox slot="header" v-model="checkAllDelete">删除</el-checkbox>
          <template slot-scope="{row}">
            <el-checkbox
              v-if="row.opPower && row.opPower.delete"
              v-model="row.opPower.delete.value"
            >删除</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label>
          <el-checkbox slot="header" v-model="checkAllExport">导出</el-checkbox>
          <template slot-scope="{row}">
            <el-checkbox
              v-if="row.opPower && row.opPower.export"
              v-model="row.opPower.export.value"
            >导出</el-checkbox>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import JsWebSocketDataSet from "@/components/DataSource/JsWebSocketDataSet";
import request from "@/utils/request";
import DsContainer from "zhc-dataset/src";
import sysResources from "./sys_resources";
import { convertToTreeData } from "@/funclib/DataTree.js";

export default {
  data() {
    return {
      radioAllPerson: "1",
      radioAllTeam: "0",
      checkAllAdd: true,
      checkAllEdit: 0,
      checkAllDelete: 0,
      checkAllExport: 0,
      datas: [
        {
          resId: "9964B5C9-E606-2F7C-CF87-53E8F69096EC",
          name: "编制管理",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/bzManage/funcdir/bzgl.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "2F738A4E-3EE1-FF50-0C95-2166A92E5EED",
          name: "部门管理",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/deptManage/funcdir/bmgl.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BMP" },
              groupScheme: { name: "团队", value: "AccessPlan_BMG" },
              businessScheme: { name: "企业", value: "AccessPlan_BMB" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "E1989F3F-00CC-A7CE-DC77-F77D129CE23E",
          name: "测试",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "flow",
          resUrl: "/systemplate/dgcs/dhwh2/flowdir/cs.flow"
        },
        {
          resId: "19B9866D-B3CF-A37A-2345-A97BB34A7169",
          name: "测试菜单",
          parentId: "-1",
          type: "dir",
          resUrl: ""
        },
        {
          resId: "31418B1A-5253-31A2-77F6-B5F18198ABE2",
          name: "测试功能",
          parentId: "19B9866D-B3CF-A37A-2345-A97BB34A7169",
          type: "func",
          resUrl: "/systemplate/csgn/csgn/funcdir/csgn1.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "23DF68DC-EEA7-41E5-0288-02AB9909CB8F",
          name: "测试流程",
          parentId: "19B9866D-B3CF-A37A-2345-A97BB34A7169",
          type: "flow",
          resUrl: "/systemplate/csgn/csgn/flowdir/cslc.flow"
        },
        {
          resId: "D4A11656-0318-B283-4F9C-17D0974D67C0",
          name: "单号维护",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/dhwh/funcdir/dhwhBsg.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理1",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "D4B13E05-932E-C3D4-A78F-4EFEFE85851E",
          name: "单号维护2",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/dgcs/dhwh2/funcdir/dhwhBsgOAk.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "4A3AACDF-781F-3CE7-5AED-252F6A17E4EE",
          name: "单号维护流程",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "flow",
          resUrl: "/systemplate/ptpz/xtgn/dhwh/flowdir/lc.flow"
        },
        {
          resId: "8B60A86E-7DB6-C2AC-19BA-0E2A7775C06E",
          name: "岗位管理",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/roleManage/funcdir/gwgl.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "projectTree",
          name: "工程树",
          parentId: "-2",
          type: "do",
          resUrl: "/amreport/designer/tree/design.do"
        },
        {
          resId: "AA8CE6D9-8DD7-F9D5-D94B-69574B825713",
          name: "工程树管理",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgj/gcsgl/funcdir/gcsgl.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "8008D1F0-E4AE-5DD1-FE19-C41A491C67FE",
          name: "功能权限查找",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/gnqxcz/func/gnqxcz.func",
          daPower: {
            value: "",
            schemes: {
              personalScheme: { name: "个人", value: "AccessPlan_BZP" },
              groupScheme: { name: "团队", value: "AccessPlan_BZG" },
              businessScheme: { name: "企业", value: "AccessPlan_BZQ" },
              AccessPlan_CW: {
                name: "财务经理",
                value: "AccessPlan_CW",
                isOther: 1
              }
            }
          },
          opPower: {
            add: { value: 0 },
            edit: { value: 0 },
            delete: { value: 0 },
            export: { value: 0 }
          }
        },
        {
          resId: "833AE18C-0825-BA78-119B-8B55BB2E4648",
          name: "功能权限管理",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/authority/funcdir/authority.func"
        },
        {
          resId: "E665996A-B2FC-E9F1-F0C9-375BD6EB0E99",
          name: "功能权限管理(新)(单选)",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/authority2/funcdir/qxgl.func"
        },
        {
          resId: "90EB5D7A-420F-AFC5-FD50-44DEC8A483BA",
          name: "功能权限管理(新)(多选)",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/authority2/funcdir/dx.func"
        },
        {
          resId: "93E08EAD-CB5B-4BC6-A5D6-F2AE89761370",
          name: "任务中心",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "link",
          resUrl: "/bg/taskCenter/main.do"
        },
        {
          resId: "7B87C0D2-0237-C601-1240-AC3769828CC4",
          name: "添加菜单",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/cdgl1/func/tjcd.func"
        },
        {
          resId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          name: "系统管理",
          parentId: "-1",
          type: "dir",
          resUrl: ""
        },
        {
          resId: "135EC9F0-3792-EFDC-AAB8-7AC0E212C77D",
          name: "用户管理",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/UserMangement/funcdir/yhgl.func"
        },
        {
          resId: "C18FCA1F-045D-8DB7-4CEB-6D3F28FA0A0E",
          name: "用户管理(不含编制)",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/UserMangement/funcdir/yhgl2.func"
        },
        {
          resId: "EEAEF109-737A-4738-43AC-B7EF19FE0701",
          name: "组织机构",
          parentId: "64E78B09-52F1-0A98-E729-E24BEA9CBE13",
          type: "func",
          resUrl: "/systemplate/ptpz/xtgn/zzjggl/func/zzjg.func"
        }
      ],
      treeData: [],
      dataSet: {
        controlName: "JsWebSocketDataSet",
        controlId: "dsResources",
        datas: []
      },
      dsResources: function() {
        return {};
      },
      dsResources2: {},
      hcInputFilterConf: {
        controlName: "HcInputFilter",
        controlId: "HcInputFilter_01",
        size: "medium",
        keys: [
          {
            name: "name",
            weight: 1
          }
        ],
        events: {
          filterChange: this.onFilterChange
        },
        children: [
          {
            controlName: "HcButton",
            controlId: "HcButton_1",
            title: "",
            icon: "el-icon-edit",
            events: {
              click: function(e) {
                alert("click:" + e);
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.dsResources = new JsWebSocketDataSet(this.dataSet);
    this.dsResources.setData(this.datas);

    this.treeData = convertToTreeData(this.datas, {
      id: "resId",
      parentId: "parentId",
      rootValue: "-1"
    });
    console.log(JSON.stringify(this.treeData));
    debugger;
    // this.dsContainer = new DsContainer({ request: request, queryUrl, saveUrl });
    // this.dsResources2 = this.dsContainer.createDataSet(sysResources);
    // this.dsResources2.setData(this.treeData);
  },
  methods: {
    onFilterChange(datas, isClearFilter) {
      debugger;
      this.dsResources.setData(datas);
      alert("fiterChange" + isClearFilter);
    },
    getDaPowerOther(row) {
      let other = {};
      if (row.daPower) {
        for (var k in row.daPower.schemes) {
          let da = row.daPower.schemes[k];
          if (da.isOther) {
            other[k] = da;
          }
        }
      }
      return other;
    },
    onCheckAllAddChange(val) {
      debugger;
      alert(this.checkAllAdd);
    }
  }
};
</script>