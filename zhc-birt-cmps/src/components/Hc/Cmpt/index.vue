<script>
/**
 * 所有控件基类
 */
import ref from "@/components/mixins/ref";
import { execVueExpr } from "@/utils/MathUtil.js";

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
    scope: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    expr(value) {     
      if (value && value.indexOf("}}") > 0) {
         debugger;
        return execVueExpr(value, this.scope);
      } else {
        return value;
      }
    }
  }
};
</script>

