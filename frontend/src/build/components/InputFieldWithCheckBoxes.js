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

// import Dialog from './Dialog';
// import Form from './Form';


var InputFieldWithCheckBoxes = function (_Component) {
  _inherits(InputFieldWithCheckBoxes, _Component);

  function InputFieldWithCheckBoxes(props) {
    _classCallCheck(this, InputFieldWithCheckBoxes);

    var _this = _possibleConstructorReturn(this, (InputFieldWithCheckBoxes.__proto__ || Object.getPrototypeOf(InputFieldWithCheckBoxes)).call(this, props));

    _this.state = {
      value: props.defaultValue,
      datalist: []
    };
    _this.formRef2 = _react2.default.createRef();
    return _this;
  }

  _createClass(InputFieldWithCheckBoxes, [{
    key: 'getValue',
    value: function getValue() {
      return this.state.datalist;
    }

    // _selectValuesDialog() {
    //   console.log("InputFieldWithCheckBoxes - _selectValuesDialog - button click = ok");
    //   alert('Функция _selectValuesDialog вызвана!');
    //   // this.setState({showSelectValueDialog: true});
    //   // e.stopPropagation();
    // }

    // _addNew(action) {
    //   console.log("InputFieldWithCheckBoxes - _addNew - !!! - unexpected");
    //   // if (action === 'dismiss') {
    //   //   this.setState({showSelectValueDialog: false});
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
      if (!Array.isArray(this.props.options)) {
        // console.log("ListOptions - render - (dataURL !!! undefined) - !Array = ");
        // console.log(this.props.options);
        // console.log("typeof this.props.options");
        // console.log(typeof this.props.options);
        return _react2.default.createElement('input', {
          defaultValue: this.props.defaultValue
          // onChange={e => this.setState({value: e.target.value})}
          , id: this.props.id });
      } else {
        // console.log("ListOptions - render - (options === isArray) - this.props.options = ");
        // console.log(this.props.options);(e) => this._selectValuesDialog.bind(this, e)
        // console.log("typeof this.props.options");
        // console.log(typeof this.props.options);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              defaultValue: this.props.defaultValue,
              onChange: function onChange(e) {
                return _this2.setState({ value: e.target.value, datalist: e.target.dataid });
              },
              id: this.props.id,
              dataid: [1] }),
            _react2.default.createElement(
              'button',
              { onClick: this.props.showSelectValueDialog },
              '\u0412\u044B\u0431\u0440\u0430\u0442\u044C'
            )
          )
        );
      }
    }
  }]);

  return InputFieldWithCheckBoxes;
}(_react.Component);

/*  {this.state.showSelectValueDialog
            ? <Dialog
              modal={true}
              header="Добавить новую задачу"
              confirmLabel="Добавить"
              onAction={this._addNew.bind(this)}
            >
              <Form
                ref={this.formRef2}
                fields={this.props.schema}
                addNewDialog={true}
                API_URL={this.props.API_URL}
                optionsAPIData={this.props.optionsAPIData} />
            </Dialog>
            : null}*/


InputFieldWithCheckBoxes.propTypes = {
  id: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  listid: _propTypes2.default.string,
  objName: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  showSelectValueDialog: _propTypes2.default.func,
  onDataChange: _propTypes2.default.func
};

exports.default = InputFieldWithCheckBoxes;