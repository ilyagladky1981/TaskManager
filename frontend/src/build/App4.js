'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalForm = require('./components/ModalForm');

var _ModalForm2 = _interopRequireDefault(_ModalForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      showModal: false,
      showNestedModal: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ showModal: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'openNestedModal',
    value: function openNestedModal() {
      this.setState({ showNestedModal: true });
    }
  }, {
    key: 'closeNestedModal',
    value: function closeNestedModal() {
      this.setState({ showNestedModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          showModal = _state.showModal,
          showNestedModal = _state.showNestedModal;


      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'h1',
          null,
          'App4 \u041F\u0440\u0438\u043C\u0435\u0440 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u043A\u043D\u043E\u043C'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.openModal.bind(this) },
          '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E'
        ),
        showModal && _react2.default.createElement(
          _ModalForm2.default,
          {
            onClose: this.closeModal.bind(this),
            formClassName: 'modal',
            formContentClassName: 'modal__content' },
          _react2.default.createElement(
            'h2',
            null,
            '\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.openNestedModal.bind(this) },
            '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E'
          ),
          showNestedModal && _react2.default.createElement(
            _ModalForm2.default,
            {
              onClose: this.closeNestedModal.bind(this),
              formClassName: 'nestedmodal',
              formContentClassName: 'nestedmodal__content' },
            _react2.default.createElement(
              'h3',
              null,
              '\u0412\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u042D\u0442\u043E \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;