//import { useState, useEffect } from 'react'
import React, {Component} from 'react';
//import Logo from './components/Logo';
import TaskEditor from './components/TaskEditor';
import schema from './schema';


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
      optionsAPIData: {},
    }; 
    this.refreshList = this.refreshList.bind(this);
    
  }

  async componentDidMount() {
    await this.refreshList();
  };


  getPeopleNames(apiResponse, objName) {
    let len = apiResponse.length;
    let data = [];
    for (let e = 0; e < len; e++) {
      data[e] = structuredClone(apiResponse[e][objName]);
    }
    let copyData = structuredClone(data);
    return copyData
  }




  async refreshList() {
    try {
      const response = await fetch(`${API_URL}control/1/1/`);
      const responseAPIData = await response.json();
      
      const urlDict = {
        'PersonFullNameId'    :  'people',
        'SituationType'       :  'situations',
        'ITTaskTypeName'      :  'ittasktypename',
        'PriorityColor'       :  'prioritycolor',
        'ProjectName'         :  'projectname',
        'ServiceName'         :  'services',
        'CategoryOfTaskName'  :  'categories'
      }
      // const peopleResp = await fetch(`${API_URL}people/1/1/`);
      // const peopleAPIres = await peopleResp.json();

      let optionsData = {};
      for (let url in urlDict) {
        if (!urlDict.hasOwnProperty(url)) continue;
        const urlResponse = await fetch(`${API_URL}${urlDict[url]}/1/1/`);
        const urlAPIres = await urlResponse.json();
        optionsData[url] = structuredClone(urlAPIres);
      }

      optionsData['ProjectName'].push({"id":-1,"fullTaskName":"Эта задача"})
      // console.log(`App2 refreshList typeof peopleAPIres = ${typeof peopleAPIres}`);
      console.log(`App2 refreshList optionsData = `);
      console.log(optionsData);
      
      // let peopleData = [];
      // peopleData = this.getPeopleNames(peopleAPIres, 'PersonFullName');
      // console.log(`App2 refreshList peopleData = `);
      // console.log(peopleData);
      
      
      
      let preparedAPIData = [];
      let inputDict = {};
      let inputLen = responseAPIData.length;
      for (let elemNumber = 0; elemNumber < inputLen; elemNumber++) {
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
        if ( responseAPIData[elemNumber]['ServiceName'].length > 0) {
          inputDict.ServiceName = responseAPIData[elemNumber]['ServiceName'][0]['ServiceName'];
        } else {
          inputDict.ServiceName = '';
        }

        inputDict.PersonFullNameId = responseAPIData[elemNumber]['PersonFullName'];
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
        // console.log(`App2 refreshList typeof responseAPIData[elemNumber]['PriorityColor'] = `);
        // console.log(typeof responseAPIData[elemNumber]['PriorityColor']);
        // if (typeof responseAPIData[elemNumber]['PriorityColor'] !== 'undefined') {
        //     if ('color' in responseAPIData[elemNumber]['PriorityColor']) {
        //         inputDict.PriorityColor = responseAPIData[elemNumber]['PriorityColor']['color'].toString();
        //     }
        // } else {
        //   inputDict.PriorityColor = '';
        // }
        inputDict.PriorityColor = '';
        if ( Object.keys(responseAPIData[elemNumber]['ProjectName']).length > 0) {
          inputDict.ProjectName = responseAPIData[elemNumber]['ProjectName']['id'];
        } else {
          inputDict.ProjectName = '';
        }
        inputDict.Priority = responseAPIData[elemNumber]['Priority'];
        inputDict.Author = responseAPIData[elemNumber]['Author'];
        inputDict.TaskTypeId = responseAPIData[elemNumber]['TaskTypeId'];
        inputDict.EffortsId = responseAPIData[elemNumber]['EffortsId'];
        
        //const copyDict = JSON.parse(JSON.stringify(inputDict))
        const copyDict = structuredClone(inputDict)
        preparedAPIData[elemNumber] = copyDict;

      }



      this.setState({
        isLoaded: true,
        apiData: responseAPIData,
        dataForRender: preparedAPIData,
        // peopleAPIData: peopleAPIres,
        optionsAPIData: optionsData,
      });
      
      return preparedAPIData;
    } catch(error) {
      console.error(error);
    }
  };


  // toggle() {
  //   return this.setState({ modal: !this.state.modal });
  // };

  render() {
    /*var currentdate = new Date(); 
    var datetime = "App2  Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds() + ":" 
                    + currentdate.getMilliseconds();*/
    const { error, isLoaded, apiData, dataForRender, optionsAPIData} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    /*} else if (!isLoaded) {                defaultApiData
      return <div>Loading...</div>;*/
    } else if (typeof dataForRender !== "undefined") {
      /*console.log(`instanceof Array = ${apiData instanceof Array}`);
      console.log('App2 apiData in render 2');
      console.log(apiDatcurrentdatea);*/
      // console.log('App2 - render - schema');
      // console.log(schema);
      document.title = "Task Manager";
      return (
        <div className="app">
          <div className="app-header">
            Task Manager
          </div>
          <TaskEditor schema={schema} initialData={dataForRender} fullAPIData={apiData} 
            API_URL={API_URL} optionsAPIData={optionsAPIData}/>
        </div>
      );
    } else {
      //console.log(`App2 typeof dataForRender 2 = ${typeof dataForRender}`);
      return <div>dataForRender === "undefined"...</div>;
    }
  }
}

export default App2;

