import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = 'http://react-back.test/api';
axios.defaults.headers.common['Authorization'] ='Bearer '+localStorage.getItem('token')

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
