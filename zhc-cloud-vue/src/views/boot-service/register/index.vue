<template>
  <div class="detail">
    <el-card class="card">
      <div>
        <el-form :model="dataset.curRecord" label-width="100px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="服务名称">
                <lookup v-model="service" :props="serviceLookUpProps"></lookup>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="供应商">
                <el-input v-model="dataset.curRecord.appProviderId" readonly></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="第三方公司">
                <lookup v-model="company" :props="companyLookUpProps"></lookup>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="注册时间">
                <el-input v-model="regdate" readonly></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="截止日期">
                <el-date-picker
                  v-model="dataset.curRecord.appCodeEndDate"
                  type="date"
                  format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="调用次数">
                <el-input-number
                  v-model="dataset.curRecord.appCount"
                  :min="1"
                  :max="10000"
                  label="调用次数"
                ></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="注册人">
                <el-input v-model="reguser" readonly></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item>
            <el-button type="primary" @click="save">提 交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { queryMarketCustomer } from "@/api/market";
import queryParam from "@/utils/query";
import push from "@/utils/push";
import { debuglog } from "util";
import {
  appauthModel,
  serviceModel,
  appcompanyModel,
  appproviderModel
} from "@/model";
import request from "@/utils/query/request";
import { constants } from "crypto";
import lookup from "@/components/lookup";
import dateHelper from "@/utils/dateHelper";
import baseView from "@/views/base";
export default {
  name: "servicedetail",
  components: { lookup },
  mixins: [push],
  extends: baseView,
  data() {
    let gridparam = new queryParam.Param();
    gridparam.where.eq("type", "service");
    let gridFilter = gridparam;

    let treeparam = new queryParam.Param();
    treeparam.where.eq("type", "dir");
    let greeFilter = treeparam;

    return {
      regdate: dateHelper.format(new Date(), "yyyy-MM-dd"),
      reguser: this.$store.getters.userid,
      service: {
        // prvdName: "",
        // prvdId: ""
      },
      company: {},
      provider: {},

      companyLookUpProps: {
        grid: {
          model: appcompanyModel,
          fileds: ["coName", "linkMan", "linkPhone"]
        },
        queryFields: ["coName"],
        viewField: "coName"
      },
      serviceLookUpProps: {
        tree: {
          model: serviceModel,
          filter: treeparam,
          relevance: [
            {
              source: "svcId",
              target: "svcpid",
              operator: "eq"
            }
          ],

          rootVal: "-1",
          idField: "svcId",
          pidField: "svcPid",
          labelField: "svcName"
        },
        grid: {
          model: serviceModel,
          fileds: ["svcName", "svcUrl"],
          filter: gridFilter
        },
        queryFields: ["svcName"],
        viewField: "svcName"
      },
      serviceModel: serviceModel,
      path: [],
      serverDir: [],
      dataset: this.$dataset.createDataStore(appauthModel),
      form: {}
    };
  },
  model: {
    prop: "value",
    event: "valuechange"
  },
  props: {
    value: {
      type: Object
    }
  },

  computed: {},
  watch: {
    service(val) {
      this.dataset.curRecord.appProviderId = val.prvdId;
    },
    path(val) {
      this.dataset.curRecord.path = val.join("/");
      if (val.length > 0) this.dataset.curRecord.svcPid = val[val.length - 1];
      else this.dataset.curRecord.svcPid = "-1";
    }
  },
  methods: {
    save() {
      this.dataset.save().then(() => {
        this.$alert("注册成功", { type: "success" }).then(() => {
          this.close();
        });
      });
    },
    beforeclose(tags, view) {
      if (this.dataset.getDirty()) {
        tags.cancel = true;
        this.$confirm("数据未保存，是否要关闭?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            tags.delView(view);
          })
          .catch(() => {});
      }
    },
    initServerDir() {
      //加载类别
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;
      param.where = where;
      param.where.eq("type", "dir");
      request(param, this.dataset.modelFile).then(response => {
        let data = response.dataPack.rows;
        data.forEach(element => {
          if (element.svcPid == "-1") {
            this.serverDir.push(element);
            findChildren(element);
          }
        });
        function findChildren(parent) {
          let children = [];
          for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.svcPid == parent.svcId) {
              children.push(item);
              findChildren(item);
            }
          }
          if (children.length > 0) parent.children = children;
        }
      });
    },
    recordChange(dataset, rec) {
      this.path = rec.path.split("/");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.detail {
  .card {
    margin: 5px 5px;
  }
}
</style>

