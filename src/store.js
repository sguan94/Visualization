import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";

import sideDrawerReducer from "./reducers/sideDrawerReducer";
import sideDrawerButtonReducer from "./reducers/sideDrawerButtonReducer";
import divWidthReducer from "./reducers/divWidthReducer";
import divHeightReducer from "./reducers/divHeightReducer";

export default createStore(
    combineReducers({sideDrawerReducer, sideDrawerButtonReducer, divWidthReducer, divHeightReducer}), 
    {}, 
    applyMiddleware()
);