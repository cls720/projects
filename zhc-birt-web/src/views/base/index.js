import bus from "@/utils/bus";
import { constantRoutes } from "@/router";
const PUSHKEY = "__push"
import {
  PushDataParser
} from "@/utils/push";

export default {

  methods: {
    close() {
      let visitedViews = this.$store.state.tagsView.visitedViews
      let currentView;
      for (let i = 0; i < visitedViews.length; i++) {
        let view = visitedViews[i]
        if (view.path === this.$route.path)
          currentView = view
      }
      this.$root.$tags.closeSelectedTag(currentView)
    },
    _beforeclose(tags, view) {
      if (this.$route.name == view.name)
        this.beforeclose(tags, view)

    },
    beforeclose(tags, view) {

    },
    __getCurrView() {
      let visitedViews = this.$store.state.tagsView.visitedViews;
      let currView = null;
      if (visitedViews) {
        for (let i = 0; i < visitedViews.length; i++) {
          if (visitedViews[i].path == this.$route.path && visitedViews[i].target == (this.$route.query.__target || "")) {
            currView = visitedViews[i];
            break;
          }
        }
      }
      return currView;
    },
    getPushData() {
      let cruuView = this.__getCurrView();
      if (!cruuView)
        return null;
      let pushData = cruuView.params[PUSHKEY];
      if (!pushData)
        return null;
      let pushDataParser = new PushDataParser(pushData)
      return pushDataParser;
    },
    push(pushData, query, name, { title, target } = {}) {
      let pushParam = pushData.getPushData();
      pushParam.title = title;
      this.open(name, {
        [PUSHKEY]: pushParam
      }, query, { title, target })
    },
    open(name, query, params, { title, target } = {}) {
      function _getRouteName(routers, parentPath = "") {
        for (let i = 0; i < routers.length; i++) {
          let router = routers[i]

          let currentPath
          if (router.path.startsWith("/") || parentPath.endsWith("/")) {
            if (parentPath == "/" && router.path.startsWith("/"))
              currentPath = router.path
            else
              currentPath = parentPath + router.path
          }
          else
            currentPath = parentPath + "/" + router.path
          if (router.name == name || currentPath == name)
            return router.name;
          if (router.children) {

            let routerName = _getRouteName(router.children, currentPath)
            if (routerName)
              return routerName;
          }
        }
      }      
      let routerName = _getRouteName(constantRoutes);
      if (!routerName) {
        throw new Error(`没找到${name}路由名称或路径`)
        return;
      }
      this.openByName(routerName, query, params, { title, target } = {})

    },
    openByName(name, query, params, { title, target } = {}) {

      let queryT = {}
      Object.assign(queryT, query || {})
      if (title)
        queryT.__title = title;
      if (target) {
        target = target === '_blank' ? (new Date()).valueOf() : target
        queryT.__target = target;
      }


      this.$router.push({
        name,
        params,
        query: queryT
      })
    },
    openByPath(path, query, { title, target } = {}) {
      query = query || {};
      let queryT = {}
      Object.assign(queryT, query || {});

      if (title)
        queryT.__title = title;
      if (target) {
        target = target === '_blank' ? (new Date()).valueOf() : target
        queryT.__target = target;
      }



      this.$router.push({
        path,
        query: queryT
      })
    },
    getParam(name) {
      let cruuView = this.__getCurrView();
      if (!cruuView)
        return null;
      if (!cruuView.params)
        return null;
      if (!name)
        return cruuView.params
      return cruuView.params[name]
    }
  },
  mounted() {

    // let pushData = this.$route.params[PUSHKEY];
    // if (pushData){
    //     let pushDataParser = new PushDataParser(pushData)
    //     let id = pushDataParser.getTargetDs();
    //     let dataset = this.$dataset.getDataStore(id)
    // }


    bus.$on("beforetagclose", this._beforeclose);
  },
  destroyed() {
    bus.$off("beforetagclose", this.dirtychange);
  }
}

