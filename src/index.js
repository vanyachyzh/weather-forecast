import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import allReducers from "./redux/allReducers"
import {Provider} from "react-redux"

let store = createStore(allReducers)

ReactDOM.render(
  <Provider  store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
)







