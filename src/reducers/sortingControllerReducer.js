const sortingControllerReducer = (state = {
    highlightLine: 0,
    maxLineNum: 0,
    theArray: []
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
        case "SETTHEARRAY":
            state = {
                ...state,
                theArray: action.payload
            }
            break;
        case "CLEARTHEARRAY":
            state = {
                ...state,
                theArray: []
            }
            break;
        default:
            break;
    }
    return state;
};

export default sortingControllerReducer;