export function setHighlight(value) {
    return {
        type: "SETHIGHLIGHT",
        payload: value
    };
}

export function setMaxLineNum(value) {
    return {
        type: "SETMAXLINENUM",
        payload: value
    }
}