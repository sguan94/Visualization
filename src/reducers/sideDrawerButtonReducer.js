const sideDrawerButtonReducer = (state = {
    content: "welcome"
}, action) => {
    switch (action.type) {
        case "SETCONTENT":
            state = {
                ...state,
                content: action.payload
            };
            break;
    }
    return state;
};

export default sideDrawerButtonReducer;