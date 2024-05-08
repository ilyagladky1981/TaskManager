'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TaskEditor = require('./components/TaskEditor');

var _TaskEditor2 = _interopRequireDefault(_TaskEditor);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import { useState, useEffect } from 'react'

//import Logo from './components/Logo';


//import Modal from "./components/Modal";

//import axios from 'axios';

//import './css/app.css';
//import './css/schema.css';
//const Excel = require("./build/components/Excel");


var API_URL = 'http://45.135.233.68:8000/api/';

var App2 = function (_Component) {
  _inherits(App2, _Component);

  function App2(props) {
    _classCallCheck(this, App2);

    var _this = _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      apiData: [{
        "id": 1425,
        "CompanyName": 1,
        "TaskId": "_01439",
        "TaskName": "_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.",
        "DateRegistration": "2023-03-29T00:00:00+03:00"
      }]
    };
    _this.refreshList = _this.refreshList.bind(_this);

    return _this;
  }

  _createClass(App2, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //console.log("componentDidMount()");
      this.refreshList();
      /*
      const { error, isLoaded, apiData } = this.state;
      console.log(`error in componentDidMount = ${error} , isLoaded in componentDidMount = ${isLoaded}`);
      console.log('apiData in componentDidMount');
      console.log(apiData);
      */
    }
  }, {
    key: 'refreshList',
    value: async function refreshList() {
      try {
        var response = await fetch(API_URL + 'control/1/');
        var responseAPIData = await response.json();
        this.setState({
          isLoaded: true,
          apiData: responseAPIData
        });
        /*console.log("responseAPIData");
        console.log(responseAPIData);*/
        return responseAPIData;
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      return this.setState({ modal: !this.state.modal });
    }
  }, {
    key: 'render',
    value: function render() {
      /*var currentdate = new Date(); 
      var datetime = "Last Sync: " + currentdate.getDate() + "/"
                      + (currentdate.getMonth()+1)  + "/" 
                      + currentdate.getFullYear() + " @ "  
                      + currentdate.getHours() + ":"  
                      + currentdate.getMinutes() + ":" 
                      + currentdate.getSeconds() + ":" 
                      + currentdate.getMilliseconds();*/
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          apiData = _state.apiData;
      /*console.log(`error in render = ${error} , isLoaded in render = ${isLoaded}`);
      console.log("render() at " + datetime);
      console.log('apiData in render 1');
      console.log(apiData);*/

      if (error) {
        return _react2.default.createElement(
          'div',
          null,
          'Error: ',
          error.message
        );
        /*} else if (!isLoaded) {                defaultApiData
          return <div>Loading...</div>;*/
      } else if (typeof apiData !== "undefined") {
        /*console.log(`instanceof Array = ${apiData instanceof Array}`);
        console.log('apiData in render 2');
        console.log(apiDatcurrentdatea);
        console.log('apiData#2 in render 3');
        console.log(apiData);*/
        return _react2.default.createElement(
          'div',
          { className: 'app' },
          _react2.default.createElement(
            'div',
            { className: 'app-header' },
            'Task Manager'
          ),
          _react2.default.createElement(_TaskEditor2.default, { schema: _schema2.default, initialData: apiData })
        );
      } else {
        console.log('typeof apiData 2 = ' + (typeof apiData === 'undefined' ? 'undefined' : _typeof(apiData)));
        return _react2.default.createElement(
          'div',
          null,
          'apiData === "undefined"...'
        );
      }
    }
  }]);

  return App2;
}(_react.Component);

exports.default = App2;