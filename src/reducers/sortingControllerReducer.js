const sortingControllerReducer = (state = {
    highlightLine: 0,
    maxLineNum: 0
}, action) => {
    switch (action.type) {
        case "SETHIGHLIGHT":
            state = {
                ...state,
                highlightLine: action.payload
            };
            break;
        case "SETMAXLINENUM":
            state = {
                ...state,
                maxLineNum: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default sortingControllerReducer;