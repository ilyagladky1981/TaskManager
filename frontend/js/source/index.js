import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './css/schema.css';
import './css/app.css';
import './css/components/TaskEditor.css';
import './css/components/ModalDialog.css';
import './css/components/Actions.css'
import './css/components/Logo.css'
import './css/components/Button.css'
import './css/components/Dialog.css'
import './css/components/Excel.css'
import './css/components/Form.css'
import './css/components/FormInput.css'
import './css/components/Rating.css'
import './css/components/Suggest.css'
import App2 from './build/App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
