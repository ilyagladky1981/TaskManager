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

var CheckBoxForm = function (_Component) {
  _inherits(CheckBoxForm, _Component);

  function CheckBoxForm(props) {
    _classCallCheck(this, CheckBoxForm);

    var _this = _possibleConstructorReturn(this, (CheckBoxForm.__proto__ || Object.getPrototypeOf(CheckBoxForm)).call(this, props));

    _this.formInputRefs = _react.useRef < Record < string, VALUE >> {};
    _this.state = {
      formData: null
    };
    return _this;
  }

  _createClass(CheckBoxForm, [{
    key: 'getData',
    value: function getData() {}
    // let data = {};
    // let schema_tmp = this.props.fields;
    // console.log("getData - schema_tmp");
    // console.log(schema_tmp);
    // this.props.fields.forEach(field => 
    //   data[field.id] = this.refs[field.id].getValue()
    // );
    // return data;


    // _handleSearch(event) {
    // const term = event.target.value.toLowerCase();
    // setSearchTerm(term);
    //
    // const filtered = data.filter((item) =>
    //   item.toLowerCase().includes(term)
    // );
    // setFilteredData(filtered);
    // };

    // _handleSearch(listid) {
    //   // let inputData = {};
    //   // let schema_tmp = this.props.fields;
    //   // console.log("Excel - _handleSearch - listid ");
    //   // console.log(listid);
    // }


  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      /*let fields_tmp = this.props.fields;
      console.log("render - fields_tmp");
      console.log(fields_tmp);
      console.log("render - this.props.addNewDialog");
      console.log(this.props.addNewDialog);*/
      // let n = this.props.columnNumber;
      // // let m = this.props.options.length;
      // let k = Math.floor(m / n);
      // let p = m % n;
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      var n = this.props.columnNumber;
      var m = numbers.length;
      var k = Math.floor(m / n);
      var p = m % n;
      var parts = [];
      var part_size = k + 1;
      for (var i = 0; i < p * part_size; i = i + part_size) {
        parts.push(numbers.slice(i, i + part_size));
      }
      for (var _i = p * part_size; _i < numbers.length; _i = _i + part_size - 1) {
        parts.push(numbers.slice(_i, _i + part_size - 1));
      }
      console.log('CheckBoxForm - render - parts');
      console.log(parts);

      //parts = 
      return _react2.default.createElement(
        'form',
        { className: 'Form' },
        _react2.default.createElement(
          'div',
          { 'class': 'CheckBoxFormHeader' },
          this.props.paramName
        ),
        _react2.default.createElement(
          'table',
          { className: 'FormTable' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,

              //this.props.
              parts.map(function (part, pid) {
                return _react2.default.createElement(
                  'td',
                  { className: 'checkboxForm' },
                  part.map(function (elem, idx) {
                    return _react2.default.createElement(
                      'div',
                      { className: 'checkboxForm' },
                      _react2.default.createElement('input', {
                        type: 'checkbox',
                        id: "checkbox" + (pid * part.length + idx),
                        name: "checkbox" + (pid * part.length + idx),
                        ref: function ref(element) {
                          return _this2.formInputRefs.current[idx] = element;
                        },
                        dataid: pid * part.length + idx,
                        value: elem,
                        key: pid * part.length + idx }),
                      _react2.default.createElement(
                        'label',
                        {
                          'for': "checkbox" + (pid * part.length + idx) },
                        elem
                      ),
                      _react2.default.createElement('br', null)
                    );
                  }, _this2)
                );
              }, this)
            )
          )
        )
      );
    }
  }]);

  return CheckBoxForm;
}(_react.Component);

CheckBoxForm.propTypes = {
  columnNumber: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  paramName: _propTypes2.default.string,
  objName: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

exports.default = CheckBoxForm;