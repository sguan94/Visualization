const divWidthReducer = (state = {
    viewWidth: "70%",
    codeWidth: "30%"
}, action) => {
    switch (action.type) {
        case "SETVIEWWIDTH":
            state = {
                ...state,
                viewWidth: action.viewLength
            };
            break;
        case "SETCODEWIDTH":
            state = {
                ...state,
                codeWidth: action.codeLength
            };
            break;
        default:
            break;
    }
    return state;
};

export default divWidthReducer;