//import { useState, useEffect } from 'react'
import React, {Component} from 'react';
//import Logo from './components/Logo';
import TaskEditor from './components/TaskEditor';
import schema from './schema';
//import Modal from "./components/Modal";

//import axios from 'axios';

//import './css/app.css';
//import './css/schema.css';
//const Excel = require("./build/components/Excel");




const API_URL='http://45.135.233.68:8000/api/';

/*
while (preparedAPIData.length > 0) {
  preparedAPIData.pop();
}*/

let initialDataApp2 = [
  {
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
    "ServiceName": [
        {
            "id": 15,
            "ServiceName": "Настройка ПК"
        },
        {
            "id": 17,
            "ServiceName": "Пользователи"
        }
    ],
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
    "CategoryOfTaskName": [
        {
            "id": 76,
            "CategoryOfTaskName": "РАБОТА"
        },
        {
            "id": 23,
            "CategoryOfTaskName": "АДМИНИСТРИРОВАНИЕ"
        },
        {
            "id": 47,
            "CategoryOfTaskName": "НАСТРОЙКА_ПК"
        }
    ],
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
        "ServiceName": [
            15,
            17
        ],
        "CategoryOfTaskName": [
            76,
            23,
            47
        ]
    },
    "Priority": null,
    "Author": null,
    "TaskTypeId": null,
    "EffortsId": null
  },
];

class App2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      apiData: [],
      dataForRender: [],
    }; 
    this.refreshList = this.refreshList.bind(this);
    
  }

  async componentDidMount() {
    //console.log("componentDidMount()");
    const response = await this.refreshList();
    
    /*const { error, isLoaded, apiData, dataForRender } = this.state;
    console.log(`error in componentDidMount = ${error} , isLoaded in componentDidMount = ${isLoaded}`);
    console.log('apiData in componentDidMount');
    console.log(apiData);
    
    console.log("componentDidMount - dataForRender");
    console.log(dataForRender);*/

  };

  async refreshList() {
    try {
      const response = await fetch(`${API_URL}control/1/`);
      const responseAPIData = await response.json();

      //preparedAPIData = [];
      let preparedAPIData = [];
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

      let inputDict = {};
      

      let inputLen = responseAPIData.length;

      console.log("App2 refreshList - inputLen");
      console.log(inputLen);
      
      for (let elem_number = 0; elem_number < inputLen; elem_number++) {
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
        if ( responseAPIData[elem_number]['CategoryOfTaskName'].length > 0) {
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
        if ( Object.keys(responseAPIData[elem_number]['ProjectName']).length > 0) {
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
        const copyDict = structuredClone(inputDict)
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
        dataForRender: preparedAPIData,
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
    } catch(error) {
      console.error(error);
    }
  };


  toggle() {
    return this.setState({ modal: !this.state.modal });
  };

  render() {
    /*var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds() + ":" 
                    + currentdate.getMilliseconds();*/
    const { error, isLoaded, apiData, dataForRender} = this.state;
    /*console.log(`error in render = ${error} , isLoaded in render = ${isLoaded}`);
    console.log("render() at " + datetime);
    console.log('apiData in render 1');
    console.log(apiData);*/
    if (error) {
      return <div>Error: {error.message}</div>;
    /*} else if (!isLoaded) {                defaultApiData
      return <div>Loading...</div>;*/
    } else if (typeof dataForRender !== "undefined") {
      /*console.log(`instanceof Array = ${apiData instanceof Array}`);
      console.log('apiData in render 2');
      console.log(apiDatcurrentdatea);
      console.log('apiData#2 in render 3');
      console.log(apiData);*/
      return (
        <div className="app">
          <div className="app-header">
            Task Manager
          </div>
          <TaskEditor schema={schema} initialData={dataForRender} fullAPIData={apiData} />
        </div>
      );
    } else {
      //console.log(`App2 typeof dataForRender 2 = ${typeof dataForRender}`);
      return <div>dataForRender === "undefined"...</div>;
    }
  }
}

export default App2;

