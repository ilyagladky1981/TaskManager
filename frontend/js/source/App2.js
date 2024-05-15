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

var preperatedAPIData = [];


class App2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      apiData: [
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
      ],
    }; 
    this.refreshList = this.refreshList.bind(this);
    
  }

  componentDidMount() {
    //console.log("componentDidMount()");
    this.refreshList();
    /*
    const { error, isLoaded, apiData } = this.state;
    console.log(`error in componentDidMount = ${error} , isLoaded in componentDidMount = ${isLoaded}`);
    console.log('apiData in componentDidMount');
    console.log(apiData);
    */

  };

  async refreshList() {
    try {
      const response = await fetch(`${API_URL}control/1/`);
      const responseAPIData = await response.json();

      // Правильно присвоить apiData
      console.log("responseAPIData");
      console.log(responseAPIData);

      preperatedAPIData['id'] = responseAPIData['id']
      preperatedAPIData['CompanyName'] = responseAPIData['CompanyId']['ShortName']
      preperatedAPIData['TaskId'] = responseAPIData['TaskId']
      preperatedAPIData['TaskName'] = responseAPIData['TaskName']
      preperatedAPIData['DateRegistration'] = responseAPIData['DateRegistration']
      preperatedAPIData['SituationType'] = responseAPIData['SituationType']['SituationType']
      preperatedAPIData['ServiceName'] = responseAPIData['ServiceName'][0]['ServiceName']
      preperatedAPIData['PersonFullNameId'] = responseAPIData['PersonFullNameId']['PersonFullName']
      preperatedAPIData['ITTaskTypeName'] = responseAPIData['ITTaskTypeName']['ITTaskTypeName']
      preperatedAPIData['TypeOfActionName'] = responseAPIData['TypeOfActionName']['TypeOfActionName']
      preperatedAPIData['Description'] = responseAPIData['Description']
      preperatedAPIData['CategoryOfTaskName'] = responseAPIData['CategoryOfTaskName'][0]['CategoryOfTaskName']
      preperatedAPIData['ResultOfTaskName'] = responseAPIData['ResultOfTaskName']['Name']
      preperatedAPIData['DateOfDone'] = responseAPIData['DateOfDone']
      preperatedAPIData['Comments'] = responseAPIData['Comments']
      preperatedAPIData['PriorityColor'] = responseAPIData['PriorityColor']
      preperatedAPIData['ProjectName'] = responseAPIData['ProjectName']['id']
      
      
      this.setState({
        isLoaded: true,
        apiData: responseAPIData,
        dataForRender: preperatedAPIData
      });
      
      return responseAPIData;
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
      console.log(`typeof dataForRender 2 = ${typeof dataForRender}`);
      return <div>dataForRender === "undefined"...</div>;
    }
  }
}

export default App2;

