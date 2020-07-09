/**
 * 自适应宽度高度混入
 */

export default {
  computed: {
    width() {
      return this.conf.width;
    },
    height() {
      return this.conf.height;
    },
    confStyle() {
      return `${this.autoSizeStyle()};${this.conf.style};`;
    }
  },
  methods: {
    // 获取依赖父宽度
    getParentWidth() {
      let parent = this.$parent;
      while (parent) {
        if (parent.autoWidth) {
          let parentWidth = parent.autoWidth();
          if (parentWidth)
            return parentWidth;
        }
        parent = parent.$parent;
      }
    },
    // 获取依赖父高度
    getParentHeight() {
      let parent = this.$parent;
      while (parent) {
        if (parent.autoHeight) {
          let parentHeight = parent.autoHeight();
          if (parentHeight)
            return parentHeight;
        }
        parent = parent.$parent;
      }
    },
    // 获取自适应宽度
    autoWidth() {
      let retuW;
      if (typeof this.width === "function") {
        retuW = this.width.call(this, this.getParentWidth());
        if (!retuW) {
          console.error("计算高度函数未配置返回值");
        }
      } else {
        retuW = this.width;
      }
      return retuW;
    },
    // 获取自适应高度
    autoHeight() {
      let retuH;
      if (typeof this.height === "function") {
        retuH = this.height.call(this, this.getParentHeight());
        if (!retuH) {
          console.error("计算高度函数未配置返回值");
        }
      } else {
        retuH = this.height;
      }
      return retuH;
    },
    autoSizeStyle() {
      let retuStyle = "";
      let autoWidth = this.autoWidth();
      let autoHeight = this.autoHeight();
      if (autoWidth) {
        if (typeof retuW === "number") {
          retuStyle += `width:${autoWidth}px;`
        } else {
          retuStyle += `width:${autoWidth};`
        }
      }
      if (autoHeight) {
        if (typeof autoHeight === "number") {
          retuStyle += `height:${autoHeight}px;`
        } else {
          retuStyle += `height:${autoHeight};`
        }
      }
      return retuStyle;
    }
  }
}
