export function setContent(value) {
    return {
        type: "SETCONTENT",
        payload: value
    };
}

export function setAlgorithm(value) {
    return {
        type: "SETALGORITHM",
        payload: value
    }
}

export function setCode(value) {
    return {
        type: "SETCODE",
        payload: value
    }
}