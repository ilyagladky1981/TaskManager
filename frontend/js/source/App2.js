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
      apiData: [
        {
          "id": 1425,
          "CompanyName": 1,
          "TaskId": "_01439",
          "TaskName": "_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.",
          "DateRegistration": "2023-03-29T00:00:00+03:00"
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
      this.setState({
        isLoaded: true,
        apiData: responseAPIData
      });
      /*console.log("responseAPIData");
      console.log(responseAPIData);*/
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
    const { error, isLoaded, apiData } = this.state;
    /*console.log(`error in render = ${error} , isLoaded in render = ${isLoaded}`);
    console.log("render() at " + datetime);
    console.log('apiData in render 1');
    console.log(apiData);*/
    if (error) {
      return <div>Error: {error.message}</div>;
    /*} else if (!isLoaded) {                defaultApiData
      return <div>Loading...</div>;*/
    } else if (typeof apiData !== "undefined") {
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
          <TaskEditor schema={schema} initialData={apiData} />
        </div>
      );
    } else {
      console.log(`typeof apiData 2 = ${typeof apiData}`);
      return <div>apiData === "undefined"...</div>;
    }
  }
}

export default App2;

