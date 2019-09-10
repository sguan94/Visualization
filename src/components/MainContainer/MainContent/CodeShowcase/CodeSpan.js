import React from "react";

class CodeSpan extends React.Component {

    getStyle(text){
        const variableType = [
            "boolean", "int", "double", "long", 
            "byte", "char", "float", "short", "void", "null"
        ];
        const operator = [
            "+", "-", "*", "/", "=", "<", ">"
        ];
        const accessSpecifier = [
            "private", "public", "protected"
        ];
        const keyWord = [
            "abstract", "assert", "break", "case", "catch", "class", "continue",
            "default", "do", "default", "else", "enum", "extends", "final", "finally",
            "for", "if", "implements", "import", "instanceof", "interface", "native", 
            "new", "package", "return", "static", "super", "switch", "synchronized",
            "this", "throw", "throws", "transient", "try", "volatile", "while"
        ];
        const bracket = [
            "(", ")", "[", "]", "{", "}", "<", ">"
        ];
        const funcName = [
            "bubbleSort", "selectionSort", "insertionSort", "merge", "sort", "partition"
        ]
        if(variableType.includes(text)){
            return {
                color: "rgb(200, 200, 200)",
            };
        }else if(operator.includes(text)){
            return {
                color: "rgb(220, 220, 220)",
            };
        }else if(accessSpecifier.includes(text)){
            return {
                color: "yellow",
            };
        }else if(keyWord.includes(text)){
            return {
                color: "yellow",
            };
        }else if(bracket.includes(text)){
            return {
                marginLeft: "0.2vw",
                marginRight: "0.2vw",
                color: "rgb(240, 240, 240)",
            };
        }else if(!isNaN(text)){
            return {
                color: "pink",
            };
        }else if(funcName.includes(text)){
            return {
                color: "orange",
            };
        }else{
            return {
                color: "rgb(150, 200, 100)",
            };
        }
    };

    render(){
        let text = this.props.code;
        let spanStyle = this.getStyle(text);

        return (
            <span style={spanStyle}>
                {text}
            </span>
        )
    };
}

export default CodeSpan;