var _dropdown = require('./src/dropdown.vue');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

_dropdown2.default.install = function (Vue) {
  Vue.component(_dropdown2.default.name, _dropdown2.default);
};

export default _dropdown2.default;
