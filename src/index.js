import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import { Provider } from "react-redux";
import {BrowserRouter, Link} from "react-router-dom"
import configRotateStore from "./Component/Redux/Store";

// const root = ReactDOM.createRoot(document.getElementById('mymap'));
const root = document.getElementById('mymap');
console.log("rooot", root)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/test/rbuild/'>
    <Provider store={configRotateStore()}>
      <Routes />
    </Provider>
    <>
        <h4>
          This is the params which are passed
          <ul>
            <li>{(root.dataset && root.dataset.db) ? root.dataset.db : null}</li>
            <li>{(root.dataset && root.dataset.storecode) ? root.dataset.storecode : null}</li>
            <li>{(root.dataset && root.dataset.db) ? root.dataset.setting : null}</li>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/demo">Demo</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </h4>
      </>
    </BrowserRouter>
    
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
