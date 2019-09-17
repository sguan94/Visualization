import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";

import sideDrawerReducer from "./reducers/sideDrawerReducer";
import sideDrawerButtonReducer from "./reducers/sideDrawerButtonReducer";
import divWidthReducer from "./reducers/divWidthReducer";
import divHeightReducer from "./reducers/divHeightReducer";
import sortingControllerReducer from "./reducers/sortingControllerReducer";

export default createStore(
    combineReducers({sideDrawerReducer, sideDrawerButtonReducer, divWidthReducer, divHeightReducer, sortingControllerReducer}), 
    {}, 
    applyMiddleware()
);