import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import allReducers from "./redux/allReducers"
import {Provider} from "react-redux"

let store = createStore(allReducers)
let width = window.innerWidth;
let height = window.innerHeight;
document.querySelector("body").style.width = width + "px";
document.querySelector("body").style.height = height + "px";

ReactDOM.render(
  <Provider  store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
)







