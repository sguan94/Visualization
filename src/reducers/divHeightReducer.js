const divHeightReducer = (state = {
    contentHeight: "70%",
    controllerHeight: "28%"
}, action) => {
    switch (action.type) {
        case "SETCONTENTHEIGHT":
            state = {
                ...state,
                contentHeight: action.contentHeight
            };
            break;
        case "SETCONTROLLERHEIGHT":
            state = {
                ...state,
                controllerHeight: action.controllerHeight
            };
            break;
        default:
            break;
    }
    return state;
}

export default divHeightReducer;