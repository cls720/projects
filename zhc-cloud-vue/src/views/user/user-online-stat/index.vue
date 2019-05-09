<template>
  <div class="user-online-stat">
    <el-row>
      <el-col :span="12">
        <el-form :inline="true" :model="userLogin" label-width="80px">
          <el-form-item label="登录时间">
            <div class="block">
              <el-date-picker
                ref="loginTime"
                v-model="userLogin.loginTime"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                @change="onLoginTimeChange"
              />
            </div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-radio-group v-model="onlineScheme" style="float:right;">
          <el-radio-button label="today">今日在线</el-radio-button>
          <el-radio-button label="week">本周在线</el-radio-button>
          <el-radio-button label="month">本月在线</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <gp-table
      is-horizontal-resize
      is-vertical-resize
      column-width-drag
      style="width:100%"
      :height="500"
      ref="gptable"
      :is-show-sub-total="true"
      :row-no="rowNo"
      :policy="policy"
      :datas="datas"
      even-bg-color="#f4f4f4"
      row-click-color="#edf7ff"
    />
  </div>
</template>

<script>
import NProgress from 'nprogress' // Progress 进度条
// Progress 进度条 样式
import 'nprogress/nprogress.css'
// highlight theme
import 'highlight.js/styles/color-brewer.css'

import '@/components/ZhcGpTable/css/index.css'
import '@/components/ZhcGpTable/css/custom.css'

import '@/components/ZhcGpTable/css/themes-base/index.css'

import GpTable from '@/components/ZhcGpTable/gp-table.vue'
import { loginLog } from '@/api/login-log'

// let userLoginLogs = []
// new Promise((resolve, reject) => {
//   loginLog({})
//     .then(response => {
//       const { data } = response
//       userLoginLogs = data.dataPack.rows
//       resolve()
//     })
//     .catch(error => {
//       reject(error)
//     })
// })

export default {
  name: 'FrozenTitleColumns',
  components: {
    GpTable
  },
  data() {
    return {
      onlineScheme: 'today',
      userLogin: { loginTime: '' },
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      policy: {
        rowGroupFields: [
          {
            field: 'userProvince',
            width: 200,
            isFrozen: true,
            isFold: true,
            title: '省份',
            col: 0,
            isFilter: true,
            filterMultiple: true
          },
          {
            field: 'userCity',
            width: 200,
            isFrozen: true,
            isFold: true,
            title: '城市',
            col: 0,
            isFilter: true,
            filterMultiple: true
          },
          {
            field: 'userXm',
            width: 200,
            isFrozen: true,
            title: '姓名',
            col: 1,
            filterMultiple: true
          }
        ],
        colGroupFields: [],
        dataFields: [
          { field: 'loginCount', width: 120, title: '登录次数' },
          {
            field: 'onlineHour',
            width: 120,
            title: '在线小时',
            formatter: function(rowData, index) {
              const val = rowData.value
              if (!rowData.type) {
                if (val <= 2) {
                  return (
                    '<span style="color:red;font-weight: bold;">' +
                    val +
                    '</span>'
                  )
                } else if (val >= 4) {
                  return (
                    '<span style="color:blue;font-weight: bold;">' +
                    val +
                    '</span>'
                  )
                }
              }
              return val
            }
          }
        ]
      },
      rowNo: { isShow: true, width: 40 },
      datas: []
    }
  },
  watch: {
    onlineScheme() {
      this.userLogin.loginTime = []
      const end = new Date()
      const start = new Date()
      if (this.onlineScheme === 'today') {
      } else if (this.onlineScheme === 'week') {
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      } else if (this.onlineScheme === 'month') {
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      }
      this.userLogin.loginTime.push(start)
      this.userLogin.loginTime.push(end)
      this.onLoginTimeChange()
    }
  },
  mounted() {
    const me = this
    loginLog({})
      .then(response => {
        const { data } = response
        me.datas = data.rows
        
        //gptable
      
      })
      
  },
  methods: {
    onLoginTimeChange() {
      alert('根据时间条件过滤数据 ==> ' + this.userLogin.loginTime)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.user-online-stat {
  padding: 10px;
}
</style>

