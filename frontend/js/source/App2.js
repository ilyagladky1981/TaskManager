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

      /*console.log("App2 refreshList - inputLen");
      console.log(inputLen);*/
      
      for (let elemNumber = 0; elemNumber < inputLen; elemNumber++) {
        inputDict = {};
        /* 
        
        НЕ  УДАЛЯТЬ !!! ДЛЯ РЕФАКТОРИНГА!

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

        */
        
        /*console.log("refreshList - elemNumber");
        console.log(elemNumber);*/
        inputDict.id = responseAPIData[elemNumber]['id'];
        inputDict.CompanyName = responseAPIData[elemNumber]['CompanyId']['ShortName'];
        inputDict.TaskId = responseAPIData[elemNumber]['TaskId'];
        inputDict.TaskName = responseAPIData[elemNumber]['TaskName'];
        inputDict.DateRegistration = responseAPIData[elemNumber]['DateRegistration'];
        inputDict.SituationType = responseAPIData[elemNumber]['SituationType']['SituationType'];
        inputDict.ServiceName = responseAPIData[elemNumber]['ServiceName'][0]['ServiceName'];
        inputDict.PersonFullNameId = responseAPIData[elemNumber]['PersonFullNameId']['PersonFullName'];
        inputDict.ITTaskTypeName = responseAPIData[elemNumber]['ITTaskTypeName']['ITTaskTypeName'];
        inputDict.TypeOfActionName = responseAPIData[elemNumber]['TypeOfActionName']['TypeOfActionName'];
        inputDict.Description = responseAPIData[elemNumber]['Description'];
        if ( responseAPIData[elemNumber]['CategoryOfTaskName'].length > 0) {
          inputDict.CategoryOfTaskName = responseAPIData[elemNumber]['CategoryOfTaskName'][0]['CategoryOfTaskName'];
        } else {
          inputDict.CategoryOfTaskName = '';
        }
        inputDict.ResultOfTaskName = responseAPIData[elemNumber]['ResultOfTaskName']['Name'];
        inputDict.DateOfDone = responseAPIData[elemNumber]['DateOfDone'];
        inputDict.Comments = responseAPIData[elemNumber]['Comments'];
        inputDict.manual_selection = responseAPIData[elemNumber]['manual_selection'];
        inputDict.manual_sort = responseAPIData[elemNumber]['manual_sort'];
        inputDict.PriorityColor = responseAPIData[elemNumber]['PriorityColor'].toString();
        if ( Object.keys(responseAPIData[elemNumber]['ProjectName']).length > 0) {
          inputDict.ProjectName = responseAPIData[elemNumber]['ProjectName']['id'];
        } else {
          inputDict.ProjectName = '';
        }
        inputDict.Priority = responseAPIData[elemNumber]['Priority'];
        inputDict.Author = responseAPIData[elemNumber]['Author'];
        inputDict.TaskTypeId = responseAPIData[elemNumber]['TaskTypeId'];
        inputDict.EffortsId = responseAPIData[elemNumber]['EffortsId'];

        /*console.log("refreshList - inputDict");
        console.log(inputDict);*/
        
        //const copyDict = JSON.parse(JSON.stringify(inputDict))
        const copyDict = structuredClone(inputDict)
        preparedAPIData[elemNumber] = copyDict;

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

