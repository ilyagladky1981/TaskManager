'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _ExcelFormInput = require('./ExcelFormInput');

var _ExcelFormInput2 = _interopRequireDefault(_ExcelFormInput);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Excel = function (_Component) {
  _inherits(Excel, _Component);

  function Excel(props) {
    _classCallCheck(this, Excel);

    var _this = _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).call(this, props));

    _this.inputRef = _react2.default.createRef();
    _this.formRef = _react2.default.createRef();
    _this.state = {
      data: _this.props.initialData,
      sortby: null, // schema.id
      descending: false,
      edit: null, // [row index, schema.id],
      dialog: null // {type, idx}
    };
    return _this;
  }

  _createClass(Excel, [{
    key: '_saveRow',
    value: async function _saveRow(taskId, thisRow) {
      try {
        var response = await fetch(this.props.API_URL + 'tasks/1/' + taskId + '/', { method: 'PATCH',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(thisRow)
        });

        var responsePOSTAPIData = await response.json();

        return responsePOSTAPIData;
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: '_fireDataChange',


    // _handleSearch(event) {
    //   // const term = event.target.value.toLowerCase();
    //   // setSearchTerm(term);
    //   //
    //   // const filtered = data.filter((item) =>
    //   //   item.toLowerCase().includes(term)
    //   // );
    //   // setFilteredData(filtered);
    //   console.log("Excel - _handleSearch - ----");
    //   console.log(event);

    // };


    value: function _fireDataChange(data) {
      this.props.onDataChange(data);
    }
  }, {
    key: '_sort',
    value: function _sort(key) {
      var data = Array.from(this.state.data);
      var descending = this.state.sortby === key && !this.state.descending;
      data.sort(function (a, b) {
        return descending ? a[key] < b[key] ? 1 : -1 : a[key] > b[key] ? 1 : -1;
      });
      this.setState({
        data: data,
        sortby: key,
        descending: descending
      });
      this._fireDataChange(data);
    }
  }, {
    key: '_showEditor',
    value: function _showEditor(e) {
      this.setState({ edit: {
          row: parseInt(e.target.dataset.row, 10),
          key: e.target.dataset.key
        } });
    }
  }, {
    key: '_save',
    value: function _save(e) {
      e.preventDefault();
      var value = this.inputRef.current.getValue();
      var data = Array.from(this.state.data);
      var rowId = this.state.edit.row;

      data[rowId][this.state.edit.key] = value;

      this.setState({
        edit: null,
        data: data
      });
      this._fireDataChange(data);

      /*
      ==========================================
      Saving data of currently changed row
      этот код нужен и будет здесь работать
      для быстрого комментирования задач
      ==========================================
      const value = this.inputRef.current.getValue();
      let data = Array.from(this.state.data);
      let rowId = this.state.edit.row;
      let taskId = data[rowId]['id'];
      //console.log("taskId = ", taskId);
      let thisRow = {};
       const thisSchema = this.props.schema;
      data[rowId][this.state.edit.key] = value;
       for (let schema of thisSchema) {
        thisRow[schema.id] = data[rowId][schema.id];
      }
       console.log("thisRow 3 - ");
      console.log(thisRow);
       this._saveRow(taskId, thisRow);
      this.setState({
        edit: null,
        data: data,
      });
      this._fireDataChange(data);*/
    }
  }, {
    key: '_actionClick',
    value: function _actionClick(rowidx, action) {
      this.setState({ dialog: { type: action, idx: rowidx } });
    }
  }, {
    key: '_deleteConfirmationClick',
    value: function _deleteConfirmationClick(action) {
      if (action === 'dismiss') {
        this._closeDialog();
        return;
      }
      var data = Array.from(this.state.data);
      data.splice(this.state.dialog.idx, 1);
      this.setState({
        dialog: null,
        data: data
      });
      this._fireDataChange(data);
    }
  }, {
    key: '_closeDialog',
    value: function _closeDialog() {
      this.setState({ dialog: null });
    }
  }, {
    key: '_saveDataDialog',
    value: function _saveDataDialog(action) {
      if (action === 'dismiss') {
        this._closeDialog();
        return;
      }
      var data = Array.from(this.state.data);
      data[this.state.dialog.idx] = this.formRef.current.getData();
      this.setState({
        dialog: null,
        data: data
      });
      this._fireDataChange(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Excel' },
        this._renderTable(),
        this._renderDialog()
      );
    }
  }, {
    key: '_renderDialog',
    value: function _renderDialog() {
      if (!this.state.dialog) {
        return null;
      }
      switch (this.state.dialog.type) {
        case 'close':
          return this._renderCloseDialog();
        case 'edit':
          return this._renderFormDialog();
        default:
          throw Error('Unexpected dialog type ' + this.state.dialog.type);
      }
    }
  }, {
    key: '_renderCloseDialog',
    value: function _renderCloseDialog() {
      var first = this.state.data[this.state.dialog.idx];
      var nameguess = first[Object.keys(first)[0]];
      return _react2.default.createElement(
        _Dialog2.default,
        {
          modal: true,
          header: 'Confirm closing',
          confirmLabel: 'Close',
          onAction: this._deleteConfirmationClick.bind(this)
        },
        'Are you sure you want to close "' + nameguess + '"?'
      );
    }
  }, {
    key: '_renderFormDialog',
    value: function _renderFormDialog(readonly) {
      return _react2.default.createElement(
        _Dialog2.default,
        {
          modal: true,
          header: readonly ? 'Item info' : 'Изменить задачу',
          confirmLabel: readonly ? 'ok' : 'Сохранить',
          hasCancel: !readonly,
          onAction: this._saveDataDialog.bind(this)
        },
        _react2.default.createElement(_Form2.default, {
          ref: this.formRef,
          fields: this.props.schema,
          initialData: this.state.data[this.state.dialog.idx],
          readonly: readonly,
          addNewDialog: false })
      );
    }
  }, {
    key: '_renderTable',
    value: function _renderTable() {
      var _this2 = this;

      /*console.log('Excel this.state.data');
      console.log(this.state.data);*/
      return _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            this.props.schema.map(function (item) {
              if (!item.show) {
                return null;
              }
              var title = item.label;
              if (_this2.state.sortby === item.id) {
                title += _this2.state.descending ? ' \u2191' : ' \u2193';
              }
              return _react2.default.createElement(
                'th',
                {
                  className: 'schema-' + item.id,
                  key: item.id,
                  onClick: _this2._sort.bind(_this2, item.id)
                },
                title
              );
            }, this),
            _react2.default.createElement(
              'th',
              { className: 'ExcelNotSortable' },
              'Actions'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          { onDoubleClick: this._showEditor.bind(this) },
          this.state.data.map(function (row, rowidx) {
            return _react2.default.createElement(
              'tr',
              { key: rowidx },
              Object.keys(row).map(function (cell, idx) {
                var _classNames;

                var schema = _this2.props.schema[idx];
                /*console.log("Excel _renderTable tbody -------------------");
                console.log(`Excel rowidx = ${rowidx}`);
                console.log(`Excel idx = ${idx}`);
                console.log(`Excel cell = ${cell}`);*/
                if (!schema || !schema.show) {
                  /*if (!schema) {
                    return null;
                  } else {
                    console.log(`Excel schema.id = ${schema.id}`);
                    console.log(`Excel schema.show = ${schema.show}`);
                  }*/

                  return null;
                }
                var isRating = schema.type === 'rating';
                var edit = _this2.state.edit;
                var content = row[cell];

                /*console.log(`Excel content = ${content}`);
                console.log(`Excel schema.id = ${schema.id}`);*/

                if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
                  content = _react2.default.createElement(
                    'form',
                    { onSubmit: _this2._save.bind(_this2) },
                    _react2.default.createElement(_ExcelFormInput2.default, _extends({ ref: _this2.inputRef }, schema, { defaultValue: content }))
                  );
                } else if (isRating) {
                  content = _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: Number(content) });
                }
                return _react2.default.createElement(
                  'td',
                  {
                    className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'schema-' + schema.id, true), _defineProperty(_classNames, 'ExcelEditable', !isRating), _defineProperty(_classNames, 'ExcelDataLeft', schema.align === 'left'), _defineProperty(_classNames, 'ExcelDataRight', schema.align === 'right'), _defineProperty(_classNames, 'ExcelDataCenter', schema.align !== 'left' && schema.align !== 'right'), _classNames)),
                    key: idx,
                    'data-row': rowidx,
                    'data-key': schema.id },
                  content
                );
              }, _this2),
              _react2.default.createElement(
                'td',
                { className: 'ExcelDataCenter' },
                _react2.default.createElement(_Actions2.default, { onAction: _this2._actionClick.bind(_this2, rowidx) })
              )
            );
          }, this)
        )
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

  return Excel;
}(_react.Component);

Excel.propTypes = {
  schema: _propTypes2.default.arrayOf(_propTypes2.default.object),
  initialData: _propTypes2.default.arrayOf(_propTypes2.default.object),
  API_URL: _propTypes2.default.string,
  onDataChange: _propTypes2.default.func
};

exports.default = Excel;