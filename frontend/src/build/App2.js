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

/*
while (preparedAPIData.length > 0) {
  preparedAPIData.pop();
}*/

var initialDataApp2 = [{
  "id": 1425,
  "CompanyId": {
    "id": 1,
    "FullName": "ЗАО Санкт-Петербургская Образцовая Типография",
    "ShortName": "СПБОТ",
    "Logo": null,
    "Address": "Санкт-Петербург, Мебельная, 3А",
    "Phone": "812-320-19-56",
    "Fax": null
  },
  "TaskId": "_01439",
  "TaskName": "_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.",
  "DateRegistration": "2023-03-29T00:00:00+03:00",
  "SituationType": {
    "id": 2,
    "SituationType": "Штатная ситуация"
  },
  "ServiceName": [{
    "id": 15,
    "ServiceName": "Настройка ПК"
  }, {
    "id": 17,
    "ServiceName": "Пользователи"
  }],
  "PersonFullNameId": {
    "id": 34,
    "Name": "Николай",
    "Surname": "Денисов",
    "Patronymic": "Валерьевич",
    "PersonFullName": "Денисов Николай Валерьевич",
    "WorkPhone": "287",
    "MobilePhone": "",
    "Email": "ndenisov@print.spb.ru",
    "Position": "Руководитель производства одноразовой посуды",
    "DepartmentName": 14,
    "CompanyName": null
  },
  "ITTaskTypeName": {
    "id": 3,
    "ITTaskTypeName": "задача"
  },
  "TypeOfActionName": {
    "id": 3,
    "TypeOfActionName": "настройка"
  },
  "Description": "Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.",
  "CategoryOfTaskName": [{
    "id": 76,
    "CategoryOfTaskName": "РАБОТА"
  }, {
    "id": 23,
    "CategoryOfTaskName": "АДМИНИСТРИРОВАНИЕ"
  }, {
    "id": 47,
    "CategoryOfTaskName": "НАСТРОЙКА_ПК"
  }],
  "ResultOfTaskName": {
    "id": 0,
    "Name": ""
  },
  "DateOfDone": null,
  "Comments": "",
  "manual_selection": 1,
  "manual_sort": 1,
  "PriorityColor": 6,
  "ProjectName": {
    "id": 1425,
    "TaskId": "_01439",
    "TaskName": "_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия. Тест111112222",
    "DateRegistration": "2023-03-29T00:00:00+03:00",
    "Description": "Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.",
    "DateOfDone": null,
    "Comments": "",
    "manual_selection": 1,
    "manual_sort": 1,
    "PriorityColor": 6,
    "CompanyId": 1,
    "SituationType": 2,
    "PersonFullNameId": 34,
    "ITTaskTypeName": 3,
    "TypeOfActionName": 3,
    "ResultOfTaskName": 0,
    "ProjectName": 1425,
    "Priority": null,
    "Author": null,
    "TaskTypeId": null,
    "EffortsId": null,
    "ServiceName": [15, 17],
    "CategoryOfTaskName": [76, 23, 47]
  },
  "Priority": null,
  "Author": null,
  "TaskTypeId": null,
  "EffortsId": null
}];

var App2 = function (_Component) {
  _inherits(App2, _Component);

  function App2(props) {
    _classCallCheck(this, App2);

    var _this = _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      apiData: [],
      dataForRender: []
    };
    _this.refreshList = _this.refreshList.bind(_this);

    return _this;
  }

  _createClass(App2, [{
    key: 'componentDidMount',
    value: async function componentDidMount() {
      //console.log("componentDidMount()");
      var response = await this.refreshList();

      /*const { error, isLoaded, apiData, dataForRender } = this.state;
      console.log(`error in componentDidMount = ${error} , isLoaded in componentDidMount = ${isLoaded}`);
      console.log('apiData in componentDidMount');
      console.log(apiData);
      
      console.log("componentDidMount - dataForRender");
      console.log(dataForRender);*/
    }
  }, {
    key: 'refreshList',
    value: async function refreshList() {
      try {
        var response = await fetch(API_URL + 'control/1/');
        var responseAPIData = await response.json();

        //preparedAPIData = [];
        var preparedAPIData = [];
        /*preparedAPIData.length = 0;
        while (preparedAPIData.length > 0) {
          await preparedAPIData.pop();
        }
        //preparedAPIData.length = 0;
        console.log(`App2 typeof refreshList responseAPIData = ${typeof responseAPIData}`);
        console.log(`App2 typeof refreshList responseAPIData[0] = ${typeof responseAPIData[0]}`);
        console.log("App2 refreshList 1 - responseAPIData[0]");
        console.log(responseAPIData[0]);
        console.log("App2 refreshList 1 - preparedAPIData");
        console.log(preparedAPIData);*/

        var inputDict = {};

        var inputLen = responseAPIData.length;

        /*console.log("App2 refreshList - inputLen");
        console.log(inputLen);*/

        for (var elem_number = 0; elem_number < inputLen; elem_number++) {
          /*console.log("refreshList - elem_number");
          console.log(elem_number);*/
          inputDict.id = responseAPIData[elem_number]['id'];
          inputDict.CompanyName = responseAPIData[elem_number]['CompanyId']['ShortName'];
          inputDict.TaskId = responseAPIData[elem_number]['TaskId'];
          inputDict.TaskName = responseAPIData[elem_number]['TaskName'];
          inputDict.DateRegistration = responseAPIData[elem_number]['DateRegistration'];
          inputDict.SituationType = responseAPIData[elem_number]['SituationType']['SituationType'];
          inputDict.ServiceName = responseAPIData[elem_number]['ServiceName'][0]['ServiceName'];
          inputDict.PersonFullNameId = responseAPIData[elem_number]['PersonFullNameId']['PersonFullName'];
          inputDict.ITTaskTypeName = responseAPIData[elem_number]['ITTaskTypeName']['ITTaskTypeName'];
          inputDict.TypeOfActionName = responseAPIData[elem_number]['TypeOfActionName']['TypeOfActionName'];
          inputDict.Description = responseAPIData[elem_number]['Description'];
          if (responseAPIData[elem_number]['CategoryOfTaskName'].length > 0) {
            inputDict.CategoryOfTaskName = responseAPIData[elem_number]['CategoryOfTaskName'][0]['CategoryOfTaskName'];
          } else {
            inputDict.CategoryOfTaskName = '';
          }
          inputDict.ResultOfTaskName = responseAPIData[elem_number]['ResultOfTaskName']['Name'];
          inputDict.DateOfDone = responseAPIData[elem_number]['DateOfDone'];
          inputDict.Comments = responseAPIData[elem_number]['Comments'];
          inputDict.manual_selection = responseAPIData[elem_number]['manual_selection'];
          inputDict.manual_sort = responseAPIData[elem_number]['manual_sort'];
          inputDict.PriorityColor = responseAPIData[elem_number]['PriorityColor'].toString();
          if (Object.keys(responseAPIData[elem_number]['ProjectName']).length > 0) {
            inputDict.ProjectName = responseAPIData[elem_number]['ProjectName']['id'];
          } else {
            inputDict.ProjectName = '';
          }
          inputDict.Priority = responseAPIData[elem_number]['Priority'];
          inputDict.Author = responseAPIData[elem_number]['Author'];
          inputDict.TaskTypeId = responseAPIData[elem_number]['TaskTypeId'];
          inputDict.EffortsId = responseAPIData[elem_number]['EffortsId'];

          /*console.log("refreshList - inputDict");
          console.log(inputDict);*/

          //const copyDict = JSON.parse(JSON.stringify(inputDict))
          var copyDict = structuredClone(inputDict);
          preparedAPIData[elem_number] = copyDict;

          /*console.log("refreshList - preparedAPIData");
          console.log(preparedAPIData);
          for (let dictKeys in Object.keys(inputDict)) {
            delete inputDict[dictKeys]
          }*/
        }

        /**/

        this.setState({
          isLoaded: true,
          apiData: responseAPIData,
          dataForRender: preparedAPIData
        });

        /*console.log("refreshList 2 -> preparedAPIData");
        console.log(preparedAPIData);
          
        //preparedAPIData.length = 0;
        for (let dictKeys in Object.keys(inputDict)) {
          delete inputDict[dictKeys]
        }
        console.log("refreshList 3 -> preparedAPIData");
        console.log(preparedAPIData);
        console.log("refreshList 3 -> inputDict");
        console.log(inputDict);*/

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
          apiData = _state.apiData,
          dataForRender = _state.dataForRender;
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
      } else if (typeof dataForRender !== "undefined") {
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
          _react2.default.createElement(_TaskEditor2.default, { schema: _schema2.default, initialData: dataForRender, fullAPIData: apiData })
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