const sideDrawerButtonReducer = (state = {
    content: "welcome",
    algorithm: "",
    code: ""
}, action) => {
    switch (action.type) {
        case "SETCONTENT":
            state = {
                ...state,
                content: action.payload
            };
            break;
        case "SETALGORITHM":
            state = {
                ...state,
                algorithm: action.payload
            }
            break;
        case "SETCODE":
            state = {
                ...state,
                code: action.payload
            }
        default:
            
    }
    return state;
};

export default sideDrawerButtonReducer;