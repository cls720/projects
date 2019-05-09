var _checkboxGroup = require('./src/checkbox-group.vue');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

_checkboxGroup2.default.install = function (Vue) {
  Vue.component(_checkboxGroup2.default.name, _checkboxGroup2.default);
};

export default _checkboxGroup2.default;
