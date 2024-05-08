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
let data=false;

// default example data, read from the schema
if (!data) {
  data = {};
  schema.forEach((item) => data[item.id] = item.sample);
  data = [data];
}*/

//let apiData=[];

let defaultApiData =[

{
    "id": 1425,
    "CompanyName": 1,
    "TaskId": "_01439",
    "TaskName": "_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.",
    "DateRegistration": "2023-03-29T00:00:00+03:00"
},
{
    "id": 1513,
    "CompanyName": 1,
    "TaskId": "_01527",
    "TaskName": "34 Закупить и установить новые камеры на ФСО - Соиной",
    "DateRegistration": "2023-04-26T00:00:00+03:00"
},
{
    "id": 1589,
    "CompanyName": 1,
    "TaskId": "_01603",
    "TaskName": "_12 Перенести СФЕРА Коннектор на другой ПК.",
    "DateRegistration": "2023-06-05T00:00:00+03:00"
},
{
    "id": 1632,
    "CompanyName": 1,
    "TaskId": "_01646",
    "TaskName": "76 Появляется ошибка в 1С у Седельниковой",
    "DateRegistration": "2023-06-29T00:00:00+03:00"
},
{
    "id": 1679,
    "CompanyName": 1,
    "TaskId": "_01693",
    "TaskName": "_16 Не включается Asystem7",
    "DateRegistration": "2023-07-21T00:00:00+03:00"
},
{
    "id": 1702,
    "CompanyName": 1,
    "TaskId": "_01716",
    "TaskName": "32 Перед отпуском Андрея сделать копию Erricson",
    "DateRegistration": "2023-07-31T00:00:00+03:00"
},

];




/*
let initialData=[];

async function fetchInitialData() {
  //console.log('VITE_API_URL = ' + VITE_API_URL)
  try {
    const response = await fetch(`${API_URL}control/1/`)
    console.log('response.ok', response.ok);
    //console.log();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    };
    const result = await response.json();
    //console.log(result);
    initialData = result;
    
    
  } catch(error) {
    console.error('Error fetching data:', error);
  }
}


fetchInitialData();
*/
/*
let size = data.length;
console.log('size = ' + size);
*/

//data.forEach((item) => console.log(data[item]));

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
    //this.refreshList = this.refreshList.bind(this);
    //this.toggle = this.toggle.bind(this);
  }
  
  componentDidMount() {
    console.log("componentDidMount()");
    this.refreshList();
    
    const { error, isLoaded, apiData } = this.state;
    console.log(`error in componentDidMount = ${error} , isLoaded in componentDidMount = ${isLoaded}`);
    console.log('apiData in componentDidMount');
    console.log(apiData);
    /*console.log('defaultApiData');
    console.log(defaultApiData);*/

    /*
    //async function fetchData() {
    function fetchData() {
      //console.log('VITE_API_URL = ' + VITE_API_URL)
      //this.setState({apiData: defaultApiData});
      try {
        //const response = await fetch(`${API_URL}control/1/`)
        const response = fetch(`${API_URL}control/1/`)
        console.log('response.ok', response.ok);
        //console.log();

        if (!response.ok) {
          throw new Error('Network response was not ok');
        };
        //const result = await response.json();
        const result = response.json();
        //console.log(result);
        this.setState({apiData: result});
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();*/
    
    //console.log('data');
    //console.log(data);, {method: 'GET'}
  };

  refreshList() {
    fetch(`${API_URL}control/1/`)
      .then(result => {
        console.log('result1 in refreshList');
        console.log(result.clone().json().items);
        return result.clone().json();
      })
      .then(
        (result) => {
          console.log('result2.items in refreshList');
          console.log(result.items);
          return this.setState({
            isLoaded: true,
            apiData: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

/*
  refreshList() {
    axios.get(`http://192.168.11.37:8000/api/control/1/`)
        .then(response => this.setState({ apiData: response.data }))
        .catch(err => console.log(err));
  };*/

         /*res => {
          console.log('res');
          console.log(res);
          return this.setState({ apiData: res.data });
        })*/


  
  toggle() {
    return this.setState({ modal: !this.state.modal });
  };

  render() {
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds() + ":" 
                    + currentdate.getMilliseconds();
    const { error, isLoaded, apiData } = this.state;
    console.log(`error in render = ${error} , isLoaded in render = ${isLoaded}`);
    console.log("render() at " + datetime);
    console.log('apiData in render 1');
    console.log(apiData);
    if (error) {
      return <div>Error: {error.message}</div>;
    /*} else if (!isLoaded) {                defaultApiData
      return <div>Loading...</div>;*/
    } else if (typeof apiData !== "undefined") {
      console.log(`instanceof Array = ${apiData instanceof Array}`);
      console.log('apiData in render 2');
      console.log(apiData);
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

/*
function App2() {
  const [apiData, setApiData] = useState([]);
  
  useEffect(()=> {
    async function fetchData() {
      //console.log('VITE_API_URL = ' + VITE_API_URL)
      try {
        const response = await fetch(`${API_URL}control/1/`)
        console.log('response.ok', response.ok);
        //console.log();
        if (!response.ok) {
          throw new Error('Network response was not ok');
        };
        const result = await response.json();
        //console.log(result);
        setApiData(result);
        
        
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }

    setApiData(initialData);
    fetchData();
    console.log('apiData');
    console.log(apiData);
    console.log('data');
    console.log(data);/*
    data = {};
    schema.forEach((item) => data[item.id] = item.sample);
    data = [data];*//*

  }, []);
  *//*
  function _log(methodName, args) {
    console.log(methodName, args);
  };

  componentWillUpdate() {
    this._log('componentWillUpdate', arguments);
  };

  componentDidUpdate() {
    this._log('componentDidUpdate', arguments);
  };

  componentWillMount() {
    this._log('componentWillMount', arguments);
  };

  componentDidMount() {
    this._log('componentDidMount', arguments);
  };
    
  componentWillUnmount() {
    this._log('componentWillUnmount', arguments);
  };  
  *//*


  return (
    <div className="app">
      <div className="app-header">
        <Logo />Task Manager
      </div>
      <TaskEditor schema={schema} initialData={apiData} />
    </div>
  );
}*/

export default App2;

