<template>
  <div class="detail">
    <el-card class="card">
      <div>
        <el-form :model="dataset.curRecord" label-width="100px" :disabled="isView">
          <el-row>
            <el-col :span="12">
              <el-form-item label="服务名称" style="width:100%;">
                <el-input v-model="dataset.curRecord.svcName" style="width:100%;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="关键字">
                <el-input v-model="dataset.curRecord.svcKey"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="接口地址">
                <el-input v-model="dataset.curRecord.svcUrl"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="目录">
                <!-- v-model="dataset.curRecord.svcPid"  -->
                <el-cascader
                  :options="serverDir"
                  v-model="path"
                  :props="{value:'svcId', label:'svcName'}"
                ></el-cascader>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="排序">
                <el-input-number v-model="dataset.curRecord.orderIndex" :min="1"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="图标颜色">
                <el-color-picker v-model="dataset.curRecord.iconColor"></el-color-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="供应商">
                <lookup v-model="pprovider" :props="providerLookUpProps"></lookup>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="是否启用">
                <el-checkbox v-model="dataset.curRecord.isEnable"></el-checkbox>
              </el-form-item>
              <!-- <el-form-item label="是否显示">
                <el-checkbox v-model="dataset.curRecord.isShow"></el-checkbox>
              </el-form-item>-->
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="dataset.curRecord.note" :rows="15"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button v-show="!isView" type="primary" @click="save">提 交</el-button>
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
import { serviceModel, appproviderModel } from "@/model";
import request from "@/utils/query/request";
import { constants } from "crypto";
import lookup from "@/components/lookup";
import bus from "@/utils/bus";
import baseView from "@/views/base";
export default {
  name: "servicedetail",
  components: { lookup },
  mixins: [push],
  extends: baseView,
  data() {
    return {
      path: [],
      serverDir: [],
      pprovider: { prvdName: "" },
      dataset: this.$dataset.createDataStore(serviceModel),
      form: {},
      providerLookUpProps: {
        grid: {
          model: appproviderModel,
          fileds: ["prvdName", "linkMan", "linkPhone"]
        },
        queryFields: ["prvdName"],
        viewField: "prvdName"
      }
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

  computed: {
    isView() {
      return this.$route.query.op == "view";
    }
  },
  watch: {
    pprovider(val) {
      this.dataset.curRecord.prvdId = val.prvdId;
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
        this.$alert("保存成功", { type: "success" }).then(() => {
          this.close();
        });
      });
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

      this.pprovider.prvdName = rec.prvdName;
      console.log(this.path);
    },
    beforeclose(tags, view) {
      if (this.dataset.getDirty()) {
        tags.cancel = true;
        this.$confirm("数据未保存，是否要关闭?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          tags.delView(view);
        }).catch();
      }
    }
  },
  mounted() {
    console.log("当前的mounted")
    //加载数据
    if (this.$route.query.svcid) {
      let param = new queryParam.Param();
      let where = new queryParam.Where();
      param.returnTotal = true;
      param.where = where;
      param.where.eq("svcId", this.$route.query.svcid);
      this.dataset.load(param);
      this.dataset.on("recordChange", this.recordChange);
    }
    this.dataset.on("afteradd", (data, store) => {
      store.curRecord.type = "service";
    });
    this.initServerDir();
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.detail {
  .card {
    margin: 5px 5px;
  }
  .detailitem {
    float: left;
    width: 50%;
  }
}
</style>

