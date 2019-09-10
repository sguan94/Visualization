const sideDrawerReducer = (state = {
    showSideDrawer: true,
    num: 1
}, action) => {
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
                    showSideDrawer: !state.showSideDrawer
                };
                break;
        default:
            
    }
    return state;
};

export default sideDrawerReducer;