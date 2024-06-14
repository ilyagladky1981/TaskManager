'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _client = require('react-dom/client');

var _client2 = _interopRequireDefault(_client);

require('./css/schema.css');

require('./css/app.css');

require('./css/components/TaskEditor.css');

require('./css/components/InputFieldWithCheckBoxes.css');

require('./css/components/ModalDialog.css');

require('./css/components/Actions.css');

require('./css/components/Logo.css');

require('./css/components/Button.css');

require('./css/components/Dialog.css');

require('./css/components/Excel.css');

require('./css/components/Form.css');

require('./css/components/FormInput.css');

require('./css/components/Rating.css');

require('./css/components/Suggest.css');

require('bootstrap/dist/css/bootstrap.min.css');

var _App = require('./build/App2');

var _App2 = _interopRequireDefault(_App);

var _reportWebVitals = require('./reportWebVitals');

var _reportWebVitals2 = _interopRequireDefault(_reportWebVitals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = _client2.default.createRoot(document.getElementById('root'));
// import './css/components/buttons.scss';

//import './index.css';

root.render(_react2.default.createElement(
  _react2.default.StrictMode,
  null,
  _react2.default.createElement(_App2.default, null)
));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals2.default)();