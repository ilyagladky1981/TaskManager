'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxSum = function (_Component) {
  _inherits(CheckBoxSum, _Component);

  function CheckBoxSum(props) {
    _classCallCheck(this, CheckBoxSum);

    //<HTMLInputElement>
    var _this = _possibleConstructorReturn(this, (CheckBoxSum.__proto__ || Object.getPrototypeOf(CheckBoxSum)).call(this, props));

    _this.checkBoxFormRefs = _react.useRef < HTMLInputElement > [];
    //const [this.checkBoxes, this.setCheckBoxes] = useState(Array(20).fill(false));
    _this.parts = [];
    _this.state = {
      formData: null,
      checkBoxes: Array(20).fill(false)
    };
    return _this;
  }

  _createClass(CheckBoxSum, [{
    key: 'handleCheckBoxChange',
    value: function handleCheckBoxChange(index) {
      var newCheckBoxes = [].concat(_toConsumableArray(checkBoxes));
      newCheckBoxes[index] = !newCheckBoxes[index];
      setCheckBoxes(newCheckBoxes);
    }
  }, {
    key: 'sumCheckedValues',
    value: function sumCheckedValues() {
      var sum = 0;
      for (var i = 0; i < this.state.checkBoxes.length; i++) {
        if (this.state.checkBoxes[i].checked) {
          sum += i + 1; // добавляем 1, так как индексы начинаются с 0
        }
      }
      alert('\u0421\u0443\u043C\u043C\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439: ' + sum);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.state.checkBoxes.map(function (isChecked, index) {
          return _react2.default.createElement(
            'label',
            { key: index },
            _react2.default.createElement('input', {
              type: 'checkbox',
              checked: isChecked,
              onChange: _this2.handleCheckBoxChange(index).bind(_this2)
            }),
            index + 1
          );
        }),
        _react2.default.createElement(
          'button',
          { onClick: this.sumCheckedValues.bind(this) },
          '\u041F\u0440\u043E\u0441\u0443\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C'
        )
      );
    }
  }]);

  return CheckBoxSum;
}(_react.Component);

;

exports.default = CheckBoxSum;