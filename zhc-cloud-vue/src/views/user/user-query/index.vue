<template>
  <gp-table :columns="columns" :table-data="tableData" />
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

export default {
  components: {
    GpTable
  },
  data() {
    return {
      tableData: [
        {
          name: '赵伟a',
          tel: '156*****1987',
          hobby: '钢琴、书法、唱歌',
          address: '上海市黄浦区金陵东路569号17楼'
        },
        {
          name: '李伟',
          tel: '182*****1538',
          hobby: '钢琴、书法、唱歌',
          address: '上海市奉贤区南桥镇立新路12号2楼'
        },
        {
          name: '孙伟',
          tel: '161*****0097',
          hobby: '钢琴、书法、唱歌',
          address: '上海市崇明县城桥镇八一路739号'
        },
        {
          name: '周伟',
          tel: '197*****1123',
          hobby: '钢琴、书法、唱歌',
          address: '上海市青浦区青浦镇章浜路24号'
        },
        {
          name: '吴伟',
          tel: '183*****6678',
          hobby: '钢琴、书法、唱歌',
          address: '上海市松江区乐都西路867-871号'
        }
      ],
      columns: [
        {
          field: 'name',
          title: '姓名',
          width: 100,
          titleAlign: 'center',
          columnAlign: 'center'
        },
        {
          field: 'tel',
          title: '手机号码',
          width: 260,
          titleAlign: 'center',
          columnAlign: 'center'
        },
        {
          field: 'hobby',
          title: '爱好',
          width: 330,
          titleAlign: 'center',
          columnAlign: 'center'
        },
        {
          field: 'address',
          title: '地址',
          width: 308,
          titleAlign: 'center',
          columnAlign: 'left'
        }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
