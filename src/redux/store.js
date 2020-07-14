import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

let middleWares = [thunk];

let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleWares)));
export {store};