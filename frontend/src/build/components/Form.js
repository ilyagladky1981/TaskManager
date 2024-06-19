'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.formInputRefs = _react.useRef < Record < string, VALUE >> {};
    _this.state = {
      formData: null
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      var data = {};
      var schema_tmp = this.props.fields;
      console.log("getData - schema_tmp");
      console.log(schema_tmp);
      this.props.fields.forEach(function (field) {
        return data[field.id] = _this2.formInputRefs[field.id].getValue();
      });
      return data;
    }

    // _handleSearch(event) {
    // const term = event.target.value.toLowerCase();
    // setSearchTerm(term);
    //
    // const filtered = data.filter((item) =>
    //   item.toLowerCase().includes(term)
    // );
    // setFilteredData(filtered);
    // };

  }, {
    key: '_handleSearch',
    value: function _handleSearch(listid) {
      // let inputData = {};
      // let schema_tmp = this.props.fields;
      console.log("Excel - _handleSearch - listid ");
      console.log(listid);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      /*let fields_tmp = this.props.fields;
      console.log("render - fields_tmp");
      console.log(fields_tmp);
      console.log("render - this.props.addNewDialog");
      console.log(this.props.addNewDialog);*/
      // // let n = 3;
      // // // let m = this.props.options.length;
      // // let k = Math.floor(m / n);
      // // let p = m % n;
      // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // let n = 2;
      // let m = numbers.length;
      // let k = Math.floor(m / n);
      // let p = m % n;
      // //const parts = numbers.map((number, idx) => getListParts());
      // // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // let newArr = [];
      // let part_size = k + 1;
      // for (let i = 0; i < p*part_size; i = i + part_size) {
      //   newArr.push(numbers.slice(i, i + part_size));
      // }
      // for (let i = p*part_size; i < numbers.length; i = i + part_size - 1) {
      //   newArr.push(numbers.slice(i, i + part_size - 1));
      // }
      // console.log('Form - render - newArr');
      // console.log(newArr);
      return _react2.default.createElement(
        'form',
        { className: 'Form' },
        _react2.default.createElement(
          'table',
          { className: 'FormTable' },
          _react2.default.createElement(
            'tbody',
            null,
            this.props.fields.map(function (field) {
              var prefilled = void 0;
              var value = _this3.props.initialData && _this3.props.initialData[field.id];
              /*console.log("render - value");
              console.log(value);
              console.log("render - field.id");
              console.log(field.id);
              console.log("render - this.props.initialData");
              console.log(this.props.initialData);
              console.log("render - this.props.initialData[field.id]");
              console.log(this.props.initialData[field.id]);*/

              if (_this3.props.addNewDialog) {
                if (field.autoFilling) {
                  prefilled = _this3.props.defaultValue[field.id];
                } else {
                  prefilled = '';
                }
              } else {
                if (value) {
                  prefilled = JSON.parse(JSON.stringify(value));
                } else {
                  prefilled = '';
                }
              }
              /*if (!value && field.autoFilling) {
                prefilled = JSON.parse(JSON.stringify(this.props.initialData[field.id].defaultValue));
              } else {
                prefilled = JSON.parse(JSON.stringify(value));
              }*/
              if (!_this3.props.readonly) {
                if (field.addnew) {
                  return _react2.default.createElement(
                    'tr',
                    { className: 'FormRowShowField', key: field.id },
                    _react2.default.createElement(
                      'td',
                      { className: 'FormTableLabel' },
                      _react2.default.createElement(
                        'label',
                        { className: 'FormLabel',
                          htmlFor: field.id },
                        field.label,
                        ':\xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'FormTableData' },
                      _react2.default.createElement(_FormInput2.default, _extends({}, field, {
                        ref: function ref(element) {
                          return _this3.formInputRefs.current[field.id] = element;
                        },
                        defaultValue: prefilled,
                        fieldid: field.id,
                        objectInputType: field.objectInputType,
                        API_URL: _this3.props.API_URL,
                        objName: field.optionListObjName,
                        optionsAPIData: _this3.props.optionsAPIData,
                        paramName: field.label
                        // showNestedModal={this.props.showNestedModal} 
                      }))
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    'tr',
                    { className: 'FormRowHideField', key: field.id },
                    _react2.default.createElement(
                      'td',
                      { className: 'FormTableLabel' },
                      _react2.default.createElement(
                        'label',
                        { className: 'FormLabel', htmlFor: field.id },
                        field.label,
                        ':\xA0'
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'FormTableData' },
                      _react2.default.createElement(_FormInput2.default, _extends({}, field, {
                        ref: function ref(element) {
                          return formInputRefs.current[field.id] = element;
                        },
                        defaultValue: prefilled }))
                    )
                  );
                }
              }

              if (!prefilled) {
                return null;
              }

              return _react2.default.createElement(
                'tr',
                { className: 'FormRow', key: field.id },
                _react2.default.createElement(
                  'td',
                  { className: 'FormTableLabel' },
                  _react2.default.createElement(
                    'span',
                    { className: 'FormLabel' },
                    field.label,
                    ':'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  { className: 'FormTableData' },
                  field.type === 'rating' ? _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: parseInt(prefilled, 10) }) : _react2.default.createElement(
                    'div',
                    null,
                    prefilled
                  )
                )
              );
            }, this)
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string,
    dataURL: _propTypes2.default.string,
    options: _propTypes2.default.arrayOf(_propTypes2.default.string),
    objectInputType: _propTypes2.default.string.isRequired
  })).isRequired,
  initialData: _propTypes2.default.object,
  readonly: _propTypes2.default.bool,
  addNewDialog: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.object,
  API_URL: _propTypes2.default.string,
  optionsAPIData: _propTypes2.default.object
  // showNestedModal: PropTypes.func,
};

exports.default = Form;