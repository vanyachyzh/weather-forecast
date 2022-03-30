import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import allReducers from "./redux/allReducers";
import {Provider} from "react-redux";

let width = window.innerWidth;
let height = window.innerHeight;
document.querySelector("body").style.width = width + "px";
document.querySelector("body").style.height = height + "px";

const middleware = store=> next=> action=>{
  if(action.type==="CLICK_SIGN_UP_BUTTON"){console.log("thanks for registration")}
  next(action)
  return next(action)
}
let store = createStore(allReducers, applyMiddleware(middleware))


ReactDOM.render(
  <Provider  store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
)







