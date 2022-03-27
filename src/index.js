import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import { combineReducers } from "redux";
import {Provider} from "react-redux"

function reducer(state=[{"one":1}], action){
  switch(action.type){
    case "CLICK_BUTTON":
      return [{
        ...state,
        "one": state[0].one +1
      }]
    default:
      return state
  }

}

const allReducers = combineReducers({
  reducer: reducer
})

let store = createStore(allReducers)






ReactDOM.render(
  <Provider  store={store}>
    <App></App>
  </Provider>,
  
  document.getElementById("root")
)







