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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalForm = function (_Component) {
  _inherits(ModalForm, _Component);

  function ModalForm(props) {
    _classCallCheck(this, ModalForm);

    return _possibleConstructorReturn(this, (ModalForm.__proto__ || Object.getPrototypeOf(ModalForm)).call(this, props));
  }

  _createClass(ModalForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClose = _props.onClose,
          formClassName = _props.formClassName,
          formContentClassName = _props.formContentClassName;

      return _react2.default.createElement(
        'div',
        { className: formClassName },
        _react2.default.createElement(
          'div',
          { className: formContentClassName },
          children,
          _react2.default.createElement(
            'button',
            { onClick: onClose },
            '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
          ),
          _react2.default.createElement('input', { className: 'CheckBoxFormApply', type: 'submit', value: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C', onClick: this.props.onClick })
        )
      );
    }
  }]);

  return ModalForm;
}(_react.Component);

ModalForm.propTypes = {
  formClassName: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  formContentClassName: _propTypes2.default.string
  // fillFieldData: PropTypes.func,
  // paramName: PropTypes.string,
  // options: PropTypes.array,
};

exports.default = ModalForm;