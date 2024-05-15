'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Excel = require('./Excel');

var _Excel2 = _interopRequireDefault(_Excel);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskEditor = function (_Component) {
  _inherits(TaskEditor, _Component);

  function TaskEditor(props) {
    _classCallCheck(this, TaskEditor);

    var _this = _possibleConstructorReturn(this, (TaskEditor.__proto__ || Object.getPrototypeOf(TaskEditor)).call(this, props));

    _this.state = {
      data: props.initialData,
      fullData: props.fullAPIData,
      addnew: false
    };
    _this._preSearchData = null;
    _this.formRef = _react2.default.createRef();
    return _this;
  }

  _createClass(TaskEditor, [{
    key: '_addNewDialog',
    value: function _addNewDialog() {
      this.setState({ addnew: true });
    }
  }, {
    key: '_addNew',
    value: function _addNew(action) {
      if (action === 'dismiss') {
        this.setState({ addnew: false });
        return;
      }
      var data = Array.from(this.state.data);
      data.unshift(this.formRef.current.getData());
      this.setState({
        addnew: false,
        data: data
      });
      this._commitToStorage(data);
    }
  }, {
    key: '_onExcelDataChange',
    value: function _onExcelDataChange(data) {
      this.setState({ data: data });
      //this._saveData(data);
      //this._commitToStorage(data);
    }

    /*
    async _saveData(data) { 
      try {
        console.log("_saveData - data");
        console.log(data);
        const response = await fetch(`${API_URL}control/1/`,
            { method: 'POST',
              mode: "cors",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data),
            });
        
        const responsePOSTAPIData = await response.json();
        console.log("responsePOSTAPIData");
        console.log(responsePOSTAPIData);
        
        return responsePOSTAPIData;
      } catch(error) {
        console.error(error);
      }
    };*/

    /*_commitToStorage(data) {
      //save to REST
      localStorage.setItem('data', JSON.stringify(data));
    }*/

  }, {
    key: '_startSearching',
    value: function _startSearching() {
      this._preSearchData = this.state.data;
    }
  }, {
    key: '_doneSearching',
    value: function _doneSearching() {
      this.setState({
        data: this._preSearchData
      });
    }
  }, {
    key: '_search',
    value: function _search(e) {
      var needle = e.target.value.toLowerCase();
      if (!needle) {
        this.setState({ data: this._preSearchData });
        return;
      }
      var fields = this.props.schema.map(function (item) {
        return item.id;
      });
      var searchdata = this._preSearchData.filter(function (row) {
        for (var f = 0; f < fields.length; f++) {
          if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
            return true;
          }
        }
        return false;
      });
      this.setState({ data: searchdata });
    }
  }, {
    key: 'render',
    value: function render() {
      /*console.log('this.state.data TaskEditor');
      console.log(this.state.data);*/

      return _react2.default.createElement(
        'div',
        { className: 'TaskEditor' },
        _react2.default.createElement(
          'div',
          { className: 'TaskEditorToolbar' },
          _react2.default.createElement(
            'div',
            { className: 'TaskEditorToolbarAdd' },
            _react2.default.createElement(
              _Button2.default,
              {
                onClick: this._addNewDialog.bind(this),
                className: 'TaskEditorToolbarAddButton' },
              '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'TaskEditorDatagrid' },
          _react2.default.createElement(_Excel2.default, {
            schema: this.props.schema,
            initialData: this.state.data,
            onDataChange: this._onExcelDataChange.bind(this) })
        ),
        this.state.addnew ? _react2.default.createElement(
          _Dialog2.default,
          {
            modal: true,
            header: 'Add new item',
            confirmLabel: 'Add',
            onAction: this._addNew.bind(this)
          },
          _react2.default.createElement(_Form2.default, {
            ref: this.formRef,
            fields: this.props.schema })
        ) : null
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.initialData !== state.prevData) {
        return {
          data: props.initialData,
          prevData: state.prevData
        };
      }
      return null;
    }
  }]);

  return TaskEditor;
}(_react.Component);

TaskEditor.propTypes = {
  schema: _propTypes2.default.arrayOf(_propTypes2.default.object),
  initialData: _propTypes2.default.arrayOf(_propTypes2.default.object),
  fullAPIData: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

exports.default = TaskEditor;