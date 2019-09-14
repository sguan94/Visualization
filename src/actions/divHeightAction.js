export function setContentHeight(width) {
    return {
        type: "SETCONTENTHEIGHT",
        contentHeight: width
    };
}

export function setControllerHeight(width) {
    return {
        type: "SETCONTROLLERHEIGHT",
        controllerHeight: width
    };
}