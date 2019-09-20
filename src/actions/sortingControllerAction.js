export function setHighlight(value) {
    return {
        type: "SETHIGHLIGHT",
        payload: value
    }
}
export function setMaxLineNum(value) {
    return {
        type: "SETMAXLINENUM",
        payload: value
    }
}
export function setTheArray(value) {
    return {
        type: "SETTHEARRAY",
        payload: value
    }
}
export function clearTheArray() {
    return {
        type: "CLEARTHEARRAY"
    }
}