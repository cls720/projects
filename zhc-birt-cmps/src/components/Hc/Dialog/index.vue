<template>
  <el-dialog
    v-el-drag-dialog
    :visible.sync="visible"
    :title="conf.title"
    :width="width"
    :fullscreen="conf.fullscreen"
    :top="conf.top"
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
    <birt-cell-children ref="content" v-if="children.length > 0" :children="children" />
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
import emitter from "@/utils/emitter";
import events from "@/components/mixins/events";
import elDragDialog from "@/components/directive/el-drag-dialog";

export default {
  name: "hc-dialog",
  mixins: [events],
  directives: { elDragDialog },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
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
      return this.conf.width;
    },
    footer() {
      return this.conf.footer;
    },
    confStyle() {
      debugger;
      return this.conf.style;
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
    doConfirm() {
      debugger;
      let eventId = this.getEventId("confirm");
      emitter.emit(eventId);
      this.visible = false;
    },
    doOpen(param) {
      this.param = param;
      this.visible = true;
    },
    onOpen() {
      let openFunc = this.conf.events && this.conf.events.open;
      if (openFunc) {
        openFunc.call(this);
      }
      debugger;
      let childContent = this.getContent();
      if (childContent && childContent.reload) {
        childContent.reload.call(childContent, this.param);
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