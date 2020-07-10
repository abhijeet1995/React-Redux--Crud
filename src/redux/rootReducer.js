import {combineReducers} from "redux";
import {employeeReducer} from "./employee/employeeReducer";
import {alertReducers} from './alert/alertReducers'
let rootReducer = combineReducers({
    employee : employeeReducer,
    alert :alertReducers
});
export {rootReducer};