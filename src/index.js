import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";

const initalState = {
    showSideDraw: false,
    num: 1
}

const showSideDrawReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                num: state.num + action.payload
            };
            break;
        case "TOGGLESIDEDRAWER":
                state = {
                    ...state,
                    showSideDraw: !state.showSideDraw
                };
                break;
    }
    return state;
};

const store = createStore(
    combineReducers({showSideDrawReducer}), 
    {}, 
    applyMiddleware(logger)
);

store.dispatch({
    type: "ADD",
    payload: 1
});

store.dispatch({
    type: "ADD",
    payload: 1
});

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    window.document.getElementById("app")
);