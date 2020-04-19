<template>
  <hc-sub-menu v-if="conf.controlName=='HcSubMenu'" :conf="conf"></hc-sub-menu>
  <hc-menu-item v-else-if="conf.controlName=='HcMenuItem'" :conf="conf"></hc-menu-item>
  <hc-menu-item-group v-else-if="conf.controlName=='HcMenuItemGroup'" :conf="conf"></hc-menu-item-group>
</template>

<script>
import HcSubMenu from "./SubMenu";
import HcMenuItem from "./MenuItem";
import HcMenuItemGroup from "./MenuItemGroup";

export default {
  name: "hc-menu-child",
  components: {
    HcSubMenu,
    HcMenuItem,
    HcMenuItemGroup
  },
  props: {
    conf: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>