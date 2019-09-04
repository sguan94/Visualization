const sideDrawerReducer = (state = {
    showSideDrawer: false,
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
    }
    return state;
};

export default sideDrawerReducer;