export function setViewWidth(width) {
    return {
        type: "SETVIEWWIDTH",
        viewLength: width
    };
}

export function setCodeWidth(width) {
    return {
        type: "SETCODEWIDTH",
        codeLength: width
    };
}