'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalForm = require('./ModalForm');

var _ModalForm2 = _interopRequireDefault(_ModalForm);

var _CheckBoxForm = require('./CheckBoxForm');

var _CheckBoxForm2 = _interopRequireDefault(_CheckBoxForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import bootstrap from 'bootstrap'
// import Button from 'react-bootstrap/Button';


// import Dialog from './Dialog';
// import Form from './Form';


var InputFieldWithCheckBoxes = function (_Component) {
  _inherits(InputFieldWithCheckBoxes, _Component);

  function InputFieldWithCheckBoxes(props) {
    _classCallCheck(this, InputFieldWithCheckBoxes);

    var _this = _possibleConstructorReturn(this, (InputFieldWithCheckBoxes.__proto__ || Object.getPrototypeOf(InputFieldWithCheckBoxes)).call(this, props));

    _this.state = {
      value: props.defaultValue,
      datalist: [],
      showNestedModalForm: false
    };
    _this.checkBoxFormRef = _react2.default.createRef();
    return _this;
  }

  _createClass(InputFieldWithCheckBoxes, [{
    key: 'getValue',
    value: function getValue() {
      return this.state.datalist;
    }
  }, {
    key: 'openNestedModal',
    value: function openNestedModal() {
      this.setState({ showNestedModalForm: true });
    }
  }, {
    key: 'closeNestedModal',
    value: function closeNestedModal() {
      this.setState({ showNestedModalForm: false });
    }
  }, {
    key: '_fillFieldData',
    value: function _fillFieldData() {
      var data = [];
      // let schema_tmp = this.props.fields;
      // console.log("getData - schema_tmp");
      // console.log(schema_tmp);
      // this.props.fields.forEach((field, fieldidx) => 
      //   data[field.id] = this.formInputRefs.current[fieldidx].getValue()
      // );


      data = this.checkBoxFormRef.current.getData();
      this.closeNestedModal();
      this.setState({ datalist: data });
    }

    // _selectValuesDialog() {
    //   console.log("InputFieldWithCheckBoxes - _selectValuesDialog - button click = ok");
    //   alert('Функция _selectValuesDialog вызвана!');
    //   // this.setState({showNestedModalForm: true});
    //   // e.stopPropagation();
    // }

    // _addNew(action) {
    //   console.log("InputFieldWithCheckBoxes - _addNew - !!! - unexpected");
    //   // if (action === 'dismiss') {
    //   //   this.setState({showNestedModalForm: false});
    //   //   return;
    //   // }
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log("ListOptions - render - this.props.listid =");
      // console.log("schema = " + typeof this.props.schema);
      // console.log("schema[listid] = " + typeof typeof this.props.schema[this.props.listid]);
      // console.log("schema[listid].dataURL = " + typeof this.props.schema[this.props.listid].dataURL);
      // if (typeof this.props.dataURL === 'undefined') {
      //       console.log("ListOptions - render - (dataURL === undefined) => listid = " + this.props.listid);
      //       return (
      //         <input 
      //           defaultValue={this.props.defaultValue}
      //           //onChange={e => this.setState({value: e.target.value})}
      //           id={this.props.id} />
      //       )
      // } else {
      // console.log("ListOptions - render - this.props.schema[this.props.listid].dataURL =");
      // console.log(typeof this.props.schema[this.props.listid].dataURL);
      // console.log("ListOptions - render - (dataURL !!! undefined) => listid = " + this.props.listid);
      // console.log("ListOptions - render - (dataURL !!! undefined) === " + this.props.dataURL);
      // let n = 2;
      // let m = this.props.options.length;
      // let k = Math.floor(m / n);
      // let p = m % n;
      // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // m = numbers.length;
      // k = m / n;
      // p = m % n;
      // //const parts = numbers.map((number, idx) => getListParts());
      // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //  n = 2;
      // let newArr = [];
      // for (let i = 0; i < array.length + 1; i = i + n) {
      //   newArr.push(array.slice(i, i + n));
      // }
      // // console.log(newArr);
      if (!Array.isArray(this.props.options)) {
        // console.log("InputFieldWithCheckBoxes - render - (dataURL !!! undefined) - !Array = ");
        // console.log(this.props.options);
        // console.log("typeof this.props.options");
        // console.log(typeof this.props.options);
        return _react2.default.createElement(
          'table',
          { className: 'IFWCB' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              { className: 'rowFWCB' },
              _react2.default.createElement(
                'td',
                { className: 'max' },
                _react2.default.createElement('input', {
                  className: 'CommonFormInput',
                  defaultValue: this.props.defaultValue
                  // onChange={e => this.setState({value: e.target.value})}
                  , id: this.props.id })
              ),
              _react2.default.createElement(
                'td',
                { className: 'min' },
                _react2.default.createElement(
                  'a',
                  {
                    onClick: this.openNestedModal.bind(this),
                    className: 'btn btn-primary btn-sm',
                    href: '#',
                    role: 'button' },
                  '\u0412\u044B\u0431\u0440\u0430\u0442\u044C'
                )
              )
            )
          )
        );
      } else {
        // console.log("ListOptions - render - (options === isArray) - this.props.options = ");
        // console.log(this.props.options);(e) => this._selectValuesDialog.bind(this, e)
        // console.log("typeof this.props.options");
        // console.log(typeof this.props.options);
        return _react2.default.createElement(
          'table',
          { className: 'IFWCB' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              { className: 'rowFWCB' },
              _react2.default.createElement(
                'td',
                { className: 'max' },
                _react2.default.createElement('input', {
                  className: 'CommonFormInput',
                  defaultValue: this.state.datalist.toString(),
                  onChange: function onChange(e) {
                    return _this2.setState({ value: e.target.value });
                  },
                  id: this.props.id,
                  dataid: [1] })
              ),
              _react2.default.createElement(
                'td',
                { className: 'min' },
                _react2.default.createElement(
                  'a',
                  {
                    onClick: this.openNestedModal.bind(this),
                    className: 'button' },
                  '\u0412\u044B\u0431\u0440\u0430\u0442\u044C'
                ),
                this.state.showNestedModalForm && _react2.default.createElement(
                  _ModalForm2.default,
                  {
                    onClose: this.closeNestedModal.bind(this),
                    formClassName: 'nestedmodal',
                    formContentClassName: 'nestedmodal__content',
                    onApply: this._fillFieldData.bind(this)
                    // fillFieldData={this._fillFieldData.bind(this)}
                    // options={this.props.options}
                  },
                  _react2.default.createElement(_CheckBoxForm2.default, {
                    ref: this.checkBoxFormRef,
                    paramName: this.props.paramName,
                    columnNumber: 3,
                    options: this.props.options,
                    objName: this.props.objName
                  })
                )
              )
            )
          )
        );
      }
    }
  }]);

  return InputFieldWithCheckBoxes;
}(_react.Component);

InputFieldWithCheckBoxes.propTypes = {
  id: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  listid: _propTypes2.default.string,
  objName: _propTypes2.default.string,
  paramName: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  // showSelectValueDialog: PropTypes.func,
  onDataChange: _propTypes2.default.func
};

exports.default = InputFieldWithCheckBoxes;