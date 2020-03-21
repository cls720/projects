<script>
/**
 * 所有控件基类
 */
import ref from "@/components/mixins/ref";
import { execVueExpr } from "@/funclib/ExprUtil.js";

export default {
  name: "hc-cmpt",
  mixins: [ref],
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    },
    scope: Object
  },
  methods: {
    expr(value) {
      if (value && value.indexOf("}}") > 0 && this.scope) {
        debugger;
        return execVueExpr(value, this.scope);
      } else {
        return value;
      }
    }
  }
};
</script>

