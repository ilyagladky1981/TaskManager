'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      apiData: [],
      dataForRender: [],
      optionsAPIData: {}
    };
    _this.refreshList = _this.refreshList.bind(_this);

    return _this;
  }

  _createClass(App2, [{
    key: 'componentDidMount',
    value: async function componentDidMount() {
      //console.log("componentDidMount()");
      await this.refreshList();

      /*const { error, isLoaded, apiData, dataForRender } = this.state;
      console.log(`App2 error in componentDidMount = ${error} , isLoaded in componentDidMount = ${isLoaded}`);
      console.log('App2 apiData in componentDidMount');
      console.log(apiData);
      
      console.log("App2 componentDidMount - dataForRender");
      console.log(dataForRender);*/
    }
  }, {
    key: 'getPeopleNames',
    value: function getPeopleNames(apiResponse, objName) {
      var len = apiResponse.length;
      var data = [];
      for (var e = 0; e < len; e++) {
        data[e] = structuredClone(apiResponse[e][objName]);
      }
      var copyData = structuredClone(data);
      return copyData;
    }
  }, {
    key: 'refreshList',
    value: async function refreshList() {
      try {
        var response = await fetch(API_URL + 'control/1/1/');
        var responseAPIData = await response.json();

        var urlDict = {
          'PersonFullNameId': 'people',
          'SituationType': 'situations',
          'ITTaskTypeName': 'ittasktypename',
          'PriorityColor': 'prioritycolor',
          'ProjectName': 'projectname'
          // const peopleResp = await fetch(`${API_URL}people/1/1/`);
          // const peopleAPIres = await peopleResp.json();

        };var optionsData = {};
        for (var url in urlDict) {
          if (!urlDict.hasOwnProperty(url)) continue;
          var urlResponse = await fetch('' + API_URL + urlDict[url] + '/1/1/');
          var urlAPIres = await urlResponse.json();
          optionsData[url] = structuredClone(urlAPIres);
        }

        optionsData['ProjectName'].push({ "id": -1, "fullTaskName": "Эта задача" });
        // console.log(`App2 refreshList typeof peopleAPIres = ${typeof peopleAPIres}`);
        console.log('App2 refreshList optionsData = ');
        console.log(optionsData);

        // let peopleData = [];
        // peopleData = this.getPeopleNames(peopleAPIres, 'PersonFullName');
        // console.log(`App2 refreshList peopleData = `);
        // console.log(peopleData);


        var preparedAPIData = [];
        var inputDict = {};
        var inputLen = responseAPIData.length;
        for (var elemNumber = 0; elemNumber < inputLen; elemNumber++) {
          inputDict = {};
          /* 
          
          НЕ  УДАЛЯТЬ !!! ДЛЯ РЕФАКТОРИНГА! !!!
            for (let schemaElem in schema) {
            let pathJSON = schemaElem.pathJSON.split('.');
            let nextLevel = structuredClone(responseAPIData[elemNumber]);
            for (let level in pathJSON) {
              if (level === '[]') {
                if ( nextLevel.length > 0) {
                  // Array of Elem => TODO
                  for 
                    inputDict[schemaElem] = responseAPIData[elemNumber]['CategoryOfTaskName'][0]['CategoryOfTaskName'];
                } else {
                  // Empty Array stop walk through levels
                  inputDict.CategoryOfTaskName = '';
                  break; 
                }
              } else {
                nextLevel = structuredClone(nextLevel[level])
              }
              
            }
          }
            НЕ  УДАЛЯТЬ !!! ДЛЯ РЕФАКТОРИНГА! !!!
            */

          inputDict.id = responseAPIData[elemNumber]['id'];
          inputDict.CompanyName = responseAPIData[elemNumber]['CompanyId']['ShortName'];
          inputDict.TaskId = responseAPIData[elemNumber]['TaskId'];
          inputDict.TaskName = responseAPIData[elemNumber]['TaskName'];
          inputDict.DateRegistration = responseAPIData[elemNumber]['DateRegistration'];
          inputDict.SituationType = responseAPIData[elemNumber]['SituationType']['SituationType'];
          if (responseAPIData[elemNumber]['ServiceName'].length > 0) {
            inputDict.ServiceName = responseAPIData[elemNumber]['ServiceName'][0]['ServiceName'];
          } else {
            inputDict.ServiceName = '';
          }

          inputDict.PersonFullNameId = responseAPIData[elemNumber]['PersonFullName'];
          inputDict.ITTaskTypeName = responseAPIData[elemNumber]['ITTaskTypeName']['ITTaskTypeName'];
          inputDict.TypeOfActionName = responseAPIData[elemNumber]['TypeOfActionName']['TypeOfActionName'];
          inputDict.Description = responseAPIData[elemNumber]['Description'];
          if (responseAPIData[elemNumber]['CategoryOfTaskName'].length > 0) {
            inputDict.CategoryOfTaskName = responseAPIData[elemNumber]['CategoryOfTaskName'][0]['CategoryOfTaskName'];
          } else {
            inputDict.CategoryOfTaskName = '';
          }
          inputDict.ResultOfTaskName = responseAPIData[elemNumber]['ResultOfTaskName']['Name'];
          inputDict.DateOfDone = responseAPIData[elemNumber]['DateOfDone'];
          inputDict.Comments = responseAPIData[elemNumber]['Comments'];
          inputDict.manual_selection = responseAPIData[elemNumber]['manual_selection'];
          inputDict.manual_sort = responseAPIData[elemNumber]['manual_sort'];
          // console.log(`App2 refreshList typeof responseAPIData[elemNumber]['PriorityColor'] = `);
          // console.log(typeof responseAPIData[elemNumber]['PriorityColor']);
          if (typeof responseAPIData[elemNumber]['PriorityColor'] !== 'undefined') {
            if ('color' in responseAPIData[elemNumber]['PriorityColor']) {
              inputDict.PriorityColor = responseAPIData[elemNumber]['PriorityColor']['color'].toString();
            }
          } else {
            inputDict.PriorityColor = '';
          }
          if (Object.keys(responseAPIData[elemNumber]['ProjectName']).length > 0) {
            inputDict.ProjectName = responseAPIData[elemNumber]['ProjectName']['id'];
          } else {
            inputDict.ProjectName = '';
          }
          inputDict.Priority = responseAPIData[elemNumber]['Priority'];
          inputDict.Author = responseAPIData[elemNumber]['Author'];
          inputDict.TaskTypeId = responseAPIData[elemNumber]['TaskTypeId'];
          inputDict.EffortsId = responseAPIData[elemNumber]['EffortsId'];

          //const copyDict = JSON.parse(JSON.stringify(inputDict))
          var copyDict = structuredClone(inputDict);
          preparedAPIData[elemNumber] = copyDict;
        }

        this.setState({
          isLoaded: true,
          apiData: responseAPIData,
          dataForRender: preparedAPIData,
          // peopleAPIData: peopleAPIres,
          optionsAPIData: optionsData
        });

        return preparedAPIData;
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
      var datetime = "App2  Last Sync: " + currentdate.getDate() + "/"
                      + (currentdate.getMonth()+1)  + "/" 
                      + currentdate.getFullYear() + " @ "  
                      + currentdate.getHours() + ":"  
                      + currentdate.getMinutes() + ":" 
                      + currentdate.getSeconds() + ":" 
                      + currentdate.getMilliseconds();*/
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          apiData = _state.apiData,
          dataForRender = _state.dataForRender,
          optionsAPIData = _state.optionsAPIData;
      /*console.log(`App2 error in render = ${error} , isLoaded in render = ${isLoaded}`);
      console.log("App2 render() at " + datetime);
      console.log('App2 apiData in render 1');
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
      } else if (typeof dataForRender !== "undefined") {
        /*console.log(`instanceof Array = ${apiData instanceof Array}`);
        console.log('App2 apiData in render 2');
        console.log(apiDatcurrentdatea);
        console.log('App2 apiData#2 in render 3');
        console.log(apiData);*/
        document.title = "Task Manager";
        return _react2.default.createElement(
          'div',
          { className: 'app' },
          _react2.default.createElement(
            'div',
            { className: 'app-header' },
            'Task Manager'
          ),
          _react2.default.createElement(_TaskEditor2.default, { schema: _schema2.default, initialData: dataForRender, fullAPIData: apiData,
            API_URL: API_URL, optionsAPIData: optionsAPIData })
        );
      } else {
        //console.log(`App2 typeof dataForRender 2 = ${typeof dataForRender}`);
        return _react2.default.createElement(
          'div',
          null,
          'dataForRender === "undefined"...'
        );
      }
    }
  }]);

  return App2;
}(_react.Component);

exports.default = App2;