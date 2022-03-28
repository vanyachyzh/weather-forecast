import { combineReducers } from "redux";
import mainContentReducer from "./mainContentReducer";
import headerReducer from "./headerReducer";

const allReducers = combineReducers({
  mainContentReducer: mainContentReducer,
  headerReducer: headerReducer
})

export default allReducers;

