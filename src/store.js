import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import sideDrawerReducer from "./reducers/sideDrawerReducer";
import sideDrawerButtonReducer from "./reducers/sideDrawerButtonReducer";

export default createStore(
    combineReducers({sideDrawerReducer, sideDrawerButtonReducer}), 
    {}, 
    applyMiddleware(logger)
);