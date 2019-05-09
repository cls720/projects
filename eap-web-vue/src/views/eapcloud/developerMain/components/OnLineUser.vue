<template>
  <!-- --boxHeight为外层盒子高度变量，等于盒子高度。--boxScrollSpeed为每秒滚动像素 -->
  <div id="am_table_box" class="am_table_box" :style="styleObj">
    <table class="am_table_main" style cellspacing="0" cellpadding="0">
      <colgroup>
        <col>
        <col>
        <col style="width:168px;min-width:111px;" col="2">
        <col>
      </colgroup>
      <tbody>
        <tr>
          <td>
            <div>上海</div>
          </td>
          <td>
            <div>淘宝</div>
          </td>
          <td>
            <div>王女士购买了A产品</div>
          </td>
          <td>
            <div>1000</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>南京</div>
          </td>
          <td>
            <div>京东</div>
          </td>
          <td>
            <div>陈先生购买了B产品</div>
          </td>
          <td>
            <div>1200</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>无锡</div>
          </td>
          <td>
            <div>天猫</div>
          </td>
          <td>
            <div>刘女士购买了C产品</div>
          </td>
          <td>
            <div>800</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>苏州</div>
          </td>
          <td>
            <div>淘宝</div>
          </td>
          <td>
            <div>张先生购买了A产品</div>
          </td>
          <td>
            <div>1600</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>南昌</div>
          </td>
          <td>
            <div>京东</div>
          </td>
          <td>
            <div>杨女士购买了B产品</div>
          </td>
          <td>
            <div>500</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>北京</div>
          </td>
          <td>
            <div>天猫</div>
          </td>
          <td>
            <div>徐先生购买了C产品</div>
          </td>
          <td>
            <div>1800</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>广州</div>
          </td>
          <td>
            <div>淘宝</div>
          </td>
          <td>
            <div>周女士购买了A产品</div>
          </td>
          <td>
            <div>1400</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>西安</div>
          </td>
          <td>
            <div>线下</div>
          </td>
          <td>
            <div>王先生购买了B产品</div>
          </td>
          <td>
            <div>800</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>深圳</div>
          </td>
          <td>
            <div>天猫</div>
          </td>
          <td>
            <div>徐先生购买了C产品</div>
          </td>
          <td>
            <div>700</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>成都</div>
          </td>
          <td>
            <div>京东</div>
          </td>
          <td>
            <div>陶女士购买了A产品</div>
          </td>
          <td>
            <div>900</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>杭州</div>
          </td>
          <td>
            <div>线下</div>
          </td>
          <td>
            <div>许先生购买了B产品</div>
          </td>
          <td>
            <div>1300</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>上海</div>
          </td>
          <td>
            <div>天猫</div>
          </td>
          <td>
            <div>杨女士购买了A产品</div>
          </td>
          <td>
            <div>1400</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>南京</div>
          </td>
          <td>
            <div>京东</div>
          </td>
          <td>
            <div>周女士购买了B产品</div>
          </td>
          <td>
            <div>500</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>深圳</div>
          </td>
          <td>
            <div>天猫</div>
          </td>
          <td>
            <div>陈先生购买了C产品</div>
          </td>
          <td>
            <div>1800</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { debounce } from "@/utils";

const animationDuration = 6000;

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: Number,
      default: "200"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  computed: {
    styleObj() {
      return {
        height: this.height + "px",
        "--boxHeight": this.height,
        "--boxScrollSpeed": 50
      };
    }
  },
  mounted() {    
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {}
};
</script>

<style scoped>
.am_table_box {
  overflow: hidden;
  position: relative;
  width: 394px;
}
.am_table_main {
  padding: 70px 0;
  table-layout: fixed;
  width: 100%;
  position: relative;
  animation: tableScoll calc(var(--tableHeight) / var(--boxScrollSpeed) * 1s)
    linear infinite;
}
.am_table_main:hover {
  animation-play-state: paused;
  cursor: pointer;
}
.am_table_main colgroup col {
  width: 80px;
  min-width: 41px;
}
.am_table_main tbody tr {
  height: 26px;
}
.am_table_main tbody td {
  color: #ccc;
}
/*滚动动画*/
@keyframes tableScoll {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(calc(-100% + calc(var(--boxHeight) * 1px)));
  }
}
</style>
