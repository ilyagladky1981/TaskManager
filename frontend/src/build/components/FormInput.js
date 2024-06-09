'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Suggest = require('./Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _ListOptions = require('./ListOptions');

var _ListOptions2 = _interopRequireDefault(_ListOptions);

var _InputFieldWithCheckBoxes = require('./InputFieldWithCheckBoxes');

var _InputFieldWithCheckBoxes2 = _interopRequireDefault(_InputFieldWithCheckBoxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput(props) {
    _classCallCheck(this, FormInput);

    var _this = _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call(this, props));

    _this.inputRef = _react2.default.createRef();
    //this.formRef = React.createRef();
    return _this;
  }

  _createClass(FormInput, [{
    key: 'getValue',
    value: function getValue() {
      return 'value' in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
    }
  }, {
    key: 'render',
    value: function render() {
      var common = {
        id: this.props.id,
        ref: 'input',
        defaultValue: this.props.defaultValue
      };
      // console.log("FormInput - render - this.props.objectInputType =");
      // console.log(this.props.objectInputType);
      switch (this.props.objectInputType) {
        case 'year':
          return _react2.default.createElement('input', _extends({}, common, {
            type: 'number',
            defaultValue: this.props.defaultValue || new Date().getFullYear() }));
        case 'suggest':
          return _react2.default.createElement(_Suggest2.default, _extends({}, common, { options: this.props.options }));
        case 'rating':
          return _react2.default.createElement(_Rating2.default, _extends({}, common, {
            defaultValue: parseInt(this.props.defaultValue, 10) }));
        case 'datetime':
          return _react2.default.createElement(_Rating2.default, _extends({}, common, {
            defaultValue: parseInt(this.props.defaultValue, 10) }));
        case 'text':
          return _react2.default.createElement('textarea', common);
        case 'InputFieldWithCheckBoxes':
          {
            // console.log("FormInput - render - case=ListOptions - this.props.fieldid =");
            // console.log(this.props.fieldid);
            if (typeof this.props.fieldid !== "undefined" & this.props.objName !== "id") {
              // console.log("FormInput - render - case ListOptions - objName = " + this.props.objName);
              // console.log("FormInput - render - case ListOptions - listid = " + this.props.fieldid);
              // console.log(this.props.fieldid + "=== undefined");
              return _react2.default.createElement(_InputFieldWithCheckBoxes2.default, _extends({}, common, {
                listid: this.props.fieldid,
                objName: this.props.objName,
                options: this.props.optionsAPIData[this.props.fieldid]
              }));
            } else {
              // console.log("FormInput - render - case ListOptions - this.props.fieldid = " + this.props.fieldid);
              return _react2.default.createElement('input', _extends({}, common, { type: 'text' }));
            }
          };
        case 'ListOptions':
          {
            // console.log("FormInput - render - case=ListOptions - this.props.fieldid =");
            // console.log(this.props.fieldid);
            if (typeof this.props.fieldid !== "undefined" & this.props.objName !== "id") {
              // console.log("FormInput - render - case ListOptions - objName = " + this.props.objName);
              // console.log("FormInput - render - case ListOptions - listid = " + this.props.fieldid);
              // console.log(this.props.fieldid + "=== undefined");
              return _react2.default.createElement(_ListOptions2.default, _extends({}, common, {
                listid: this.props.fieldid,
                objName: this.props.objName,
                options: this.props.optionsAPIData[this.props.fieldid]
              }));
            } else {
              // console.log("FormInput - render - case ListOptions - this.props.fieldid = " + this.props.fieldid);
              return _react2.default.createElement('input', _extends({}, common, { type: 'text' }));
            }
          };
        case 'input':
          return _react2.default.createElement('input', _extends({}, common, { type: 'text' }));
        default:
          return _react2.default.createElement('input', _extends({}, common, { type: 'text' }));
      }
    }
  }]);

  return FormInput;
}(_react.Component);

FormInput.propTypes = {
  type: _propTypes2.default.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: _propTypes2.default.string,
  options: _propTypes2.default.array,
  defaultValue: _propTypes2.default.any,
  fieldid: _propTypes2.default.string,
  API_URL: _propTypes2.default.string,
  objName: _propTypes2.default.string,
  optionsAPIData: _propTypes2.default.object,
  objectInputType: _propTypes2.default.oneOf(['year', 'suggest', 'rating', 'text', 'input', 'ListOptions', 'datetime', 'InputFieldWithCheckBoxes', 'ColorList'])
};

exports.default = FormInput;