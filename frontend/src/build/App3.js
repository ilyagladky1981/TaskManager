'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalExample = function (_Component) {
  _inherits(ModalExample, _Component);

  function ModalExample(props) {
    _classCallCheck(this, ModalExample);

    var _this = _possibleConstructorReturn(this, (ModalExample.__proto__ || Object.getPrototypeOf(ModalExample)).call(this, props));

    _this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };
    return _this;
  }

  _createClass(ModalExample, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ modal: !this.state.modal });
    }
  }, {
    key: 'toggleNested',
    value: function toggleNested() {
      this.setState({ nestedModal: !this.state.nestedModal });
    }
  }, {
    key: 'toggleAll',
    value: function toggleAll() {
      this.setState({
        modal: false,
        nestedModal: false,
        closeAll: !this.state.closeAll
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'danger', onClick: this.toggle.bind(this) },
          'Click Me'
        ),
        _react2.default.createElement(
          _reactstrap.Modal,
          { isOpen: this.state.modal, toggle: this.toggle.bind(this), className: this.props.className },
          _react2.default.createElement(
            _reactstrap.ModalHeader,
            { toggle: this.toggle.bind(this) },
            'Modal title'
          ),
          _react2.default.createElement(
            _reactstrap.ModalBody,
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              { color: 'success', onClick: this.toggleNested.bind(this) },
              'Show Nested Modal'
            ),
            _react2.default.createElement(
              _reactstrap.Modal,
              { isOpen: this.state.nestedModal, toggle: this.toggleNested.bind(this) },
              _react2.default.createElement(
                _reactstrap.ModalHeader,
                null,
                'Nested Modal title'
              ),
              _react2.default.createElement(
                _reactstrap.ModalBody,
                null,
                'Inner Content'
              ),
              _react2.default.createElement(
                _reactstrap.ModalFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', onClick: this.toggleNested.bind(this) },
                  'Done'
                ),
                ' '
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.ModalFooter,
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              { color: 'secondary', onClick: this.toggleAll.bind(this) },
              'All Done'
            )
          )
        )
      );
    }
  }]);

  return ModalExample;
}(_react.Component);

exports.default = ModalExample;