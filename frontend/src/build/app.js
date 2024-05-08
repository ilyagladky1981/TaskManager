'use strict';

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TaskEditor = require('./components/TaskEditor');

var _TaskEditor2 = _interopRequireDefault(_TaskEditor);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = JSON.parse(localStorage.getItem('data'));

// default example data, read from the schema
if (!data) {
  data = {};
  _schema2.default.forEach(function (item) {
    return data[item.id] = item.sample;
  });
  data = [data];
}

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'div',
    { className: 'app-header' },
    _react2.default.createElement(_Logo2.default, null),
    ' Task Editor'
  ),
  _react2.default.createElement(_TaskEditor2.default, { schema: _schema2.default, initialData: data })
), document.getElementById('app'));