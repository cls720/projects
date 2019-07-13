export default function (Vue) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    Vue.mixin({ beforeCreate: DataSetInit })
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init
        ? [DataSetInit].concat(options.init)
        : DataSetInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function DataSetInit() {
    const options = this.$options
    // store injection
    if (options.dataset) {
      this.$dataset = typeof options.dataset === 'function'
        ? options.dataset()
        : options.dataset
      this.$dataset.context = this;
    } else if (options.parent && options.parent.$dataset) {
      this.$dataset = options.parent.$dataset
    }
  }
}
