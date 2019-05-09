<template>
  <div>
    <table class="am_table_hd" cellspacing="0" cellpadding="0">
      <colgroup>
        <col>
        <col style="width:30%;min-width:111px;">
        <col>
        <col>
      </colgroup>
      <tbody>
        <tr>
          <td>地区</td>
          <td>姓名</td>
          <td>登录时间</td>
          <td>在线小时</td>
        </tr>
      </tbody>
    </table>
    <!-- --boxHeight为外层盒子高度变量，等于盒子高度。--boxScrollSpeed为每秒滚动像素 -->
    <div id="am_table_box" ref="tableBox" :style="styleObj" class="am_table_box">
      <table ref="onlineUserList" class="am_table_main" style cellspacing="0" cellpadding="0">
        <colgroup>
          <col>
          <col style="width:30%;min-width:111px;">
          <col>
          <col>
        </colgroup>
        <tbody>
          <tr v-for="user in storeZxyh">
            <td>
              <div>{{ user.userCity }}</div>
            </td>
            <td>
              <div>{{ user.userXm }}</div>
            </td>
            <td>
              <div>{{ user.loginTime }}</div>
            </td>
            <td>
              <div>{{ user.onLineHour }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: Number,
      default: 200
    },
    storeZxyh: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      __timer: null
    }
  },
  computed: {
    styleObj() {
      return {
        height: this.height - 26 + 'px'
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.__resizeHandler)
    this.__mouseoutHandler()
    this.$refs.tableBox.addEventListener('mouseover', this.__mouseoverHandler)
    this.$refs.tableBox.addEventListener('mouseout', this.__mouseoutHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHandler);
    this.__stopScroll();
  },
  methods: {
    __mouseoverHandler() {
      this.__stopScroll()
    },
    __mouseoutHandler() {
      this.__stopScroll()
      this.__timer = setInterval(this.__startScroll, 16)
    },
    __startScroll() {
      const speed = 25
      const tableHeight = this.$refs.onlineUserList.offsetHeight
      const boxH = this.height - 30
      let moveVal = this.$refs.onlineUserList.style.transform.match(/\d+\.{0,1}\d*/g)
      moveVal = moveVal ? moveVal[0] - '' : 0
      const newMoveVal = moveVal + speed / 60
      if (tableHeight > boxH && moveVal > (tableHeight - boxH)) {
        this.$refs.onlineUserList.style.transform = 'translateY(0)'
      } else {
        this.$refs.onlineUserList.style.transform = 'translateY(-' + newMoveVal + 'px)'
      }
    },
    __stopScroll() {
      clearInterval(this.__timer)
    }
  }
}
</script>

<style scoped>
.am_table_box {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0 10px;
  font-size: 12px;
}
.am_table_box,
.am_table_box * {
  box-sizing: border-box;
}
.am_table_main,.am_table_hd{
  padding: 50px 0;
  table-layout: fixed;
  width: 100%;
  position: relative;
}
.am_table_hd{
  padding:0;
  position:relative;
  top:2px;
  background-color:#0C1D3B;
  z-index:99;
  width:calc(100% - 4px);
  margin:0 2px;
  padding:0 8px;
  font-size:12px;
}
.am_table_main colgroup col,.am_table_hd colgroup col{
  width: 20%;
  min-width: 41px;
}
.am_table_main tbody tr,.am_table_hd tbody tr{
  height: 26px;
}
.am_table_main tbody td,.am_table_hd tbody td{
  color: #ccc;
  text-align: center;
}
.am_table_hd tbody td{
  color:#3cc;
}
</style>
