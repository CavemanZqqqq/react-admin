/*
    app entrance
*/
import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import './assets/css/reset.css'
import 'antd/dist/antd.min.css'

const root = document.querySelector('#root');

ReactDOM.render(
        <App/>,
    root
);