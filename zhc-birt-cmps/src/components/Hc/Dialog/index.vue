<template>
  <el-dialog
    v-el-drag-dialog
    :visible.sync="visible"
    :title="conf.title"
    :width="width"
    :fullscreen="conf.fullscreen"
    :top="conf.top || '0'"
    :modal="conf.modal"
    :modal-append-to-body="conf.modalAppendToBody"
    :append-to-body="conf.appendToBody"
    :lock-scroll="conf.lockScroll"
    :custom-class="conf.customClass"
    :close-on-click-modal="conf.closeOnClickModal"
    :close-on-press-escape="conf.closeOnPressEscape"
    :show-close="conf.showClose"
    :before-close="conf.beforeClose"
    :center="conf.center"
    :destroy-on-close="conf.destroyOnClose"
    :style="confStyle"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
  >
    <birt-cell-children
      ref="title"
      slot="title"
      v-if="titleChildren.length > 0"
      :children="titleChildren"
    />
    <birt-cell-children
      ref="content"
      v-if="children.length > 0"
      :children="children"
      :style="contentStyle"
    />
    <birt-cell-children
      ref="footer"
      slot="footer"
      v-if="footerChildren.length > 0"
      :children="footerChildren"
    />
    <span slot="footer" v-if="footer && footer.length > 0" class="dialog-footer">
      <el-button v-if="footer.indexOf('confirm')>=0" type="primary" @click="doConfirm">确 定</el-button>
      <el-button v-if="footer.indexOf('cancel')>=0" @click="visible = false">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import HcCmpt from "@/components/Hc/Cmpt";
import emitter from "@/utils/emitter";
import autosize from "@/components/mixins/autosize";
import events from "@/components/mixins/events";
import elDragDialog from "@/components/directive/el-drag-dialog";

export default {
  name: "hc-dialog",
  extends: HcCmpt,
  mixins: [events, autosize],
  directives: { elDragDialog },
  computed: {
    visible: {
      get() {
        return this.conf.visible;
      },
      set(val) {
        this.conf.visible = val;
      }
    },
    width() {
      return this.conf.width || "75%";
    },
    height() {
      let retuH;
      if (typeof this.conf.height === "function") {
        retuH = this.conf.height.call(this, this.getParentHeight());
      } else {
        retuH = this.conf.height;
      }
      if (!retuH) {
        retuH = Math.floor(this.getParentHeight() * 0.75);
      }
      return retuH;
    },
    footer() {
      return this.conf.footer;
    },
    confStyle() {
      return this.conf.style;
    },
    contentStyle() {
      return `height:${this.autoHeight}px;`;
    },
    children() {
      let rest = [];
      (this.conf.children || []).forEach(child => {
        if (!child.slot) {
          rest.push(child);
        }
      });
      return rest;
    },
    titleChildren() {
      debugger;
      let rest = [];
      (this.conf.children || []).forEach(child => {
        if (child.slot == "title") {
          rest.push(child);
        }
      });
      return rest;
    },
    footerChildren() {
      let rest = [];
      (this.conf.children || []).forEach(child => {
        if (child.slot == "footer") {
          rest.push(child);
        }
      });
      return rest;
    }
  },
  data() {
    return {
      param: {}
    };
  },
  methods: {
    isPropEvent(eventName) {
      return ["open", "opened", "close", "closed"].indexOf(eventName) >= 0;
    },
    getParentHeight() {
      return window.innerHeight;
    },
    autoHeight() {
      let retuH = this.height;
      // 扣除头高
      retuH -= 44;
      // 扣除底工具条
      if (this.footer && this.footer.length > 0) {
        retuH -= 50;
      }
      return retuH;
    },
    setDialogTop() {
      let top = Math.floor((this.getParentHeight() - this.height) / 2);
      this.$el.getElementsByClassName("el-dialog")[0].style.top = top + "px";
    },
    /**
     * 获取注册事件ID
     * @param {*} eventId
     */
    getEventId(eventId) {
      if (eventId === "confirm") {
        return "confirm" + this.conf.controlId;
      }
    },
    getContent() {
      if (this.$refs.content) {
        let children = this.$refs.content.$children;
        let childWorkBook;
        if (children && children.length > 0) {
          childWorkBook = children[0];
        } else {
          childWorkBook = children;
        }
        return childWorkBook;
      }
    },
    // 处理对话框确定返回
    doConfirm() {
      let eventId = this.getEventId("confirm");
      emitter.emit(eventId);
      this.visible = false;
    },
    // 打开对话框,加载下推参数
    doOpen(param) {
      debugger;
      this.visible = true;
      this.param = param;
      this.$nextTick(() => {
        this.doContentReload();
      });
    },
    // 执行对话框内容页加载
    doContentReload() {
      let childContent = this.getContent();
      if (childContent && childContent.reload) {
        childContent.reload.call(childContent, this.param);
      }
    },
    onOpen() {
      this.setDialogTop();
      let openFunc = this.conf.events && this.conf.events.open;
      if (openFunc) {
        openFunc.call(this);
      }
    },
    onOpened() {
      let openedFunc = this.conf.events && this.conf.events.opened;
      if (openedFunc) {
        openedFunc.call(this);
      }
    },
    onClose() {
      let closeFunc = this.conf.events && this.conf.events.close;
      if (closeFunc) {
        closeFunc.call(this);
      }
    },
    onClosed() {
      let closedFunc = this.conf.events && this.conf.events.closed;
      if (closedFunc) {
        closedFunc.call(this);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.el-dialog__wrapper /deep/ {
  overflow: hidden;
  .el-dialog {
    .el-dialog__header {
      padding: 10px 20px 10px;
      .el-dialog__headerbtn {
        top: 10px;
      }
    }
    .el-dialog__body {
      padding: 5px 20px;
    }
    .el-dialog__footer {
      padding: 5px 20px 5px;
    }
  }
}
</style>