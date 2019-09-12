import React from "react";
import "../../../../css/CodeSpan.css"

class CodeSpan extends React.Component {

    getColor(text){
        const variableType = [
            "boolean", "int", "double", "long", 
            "byte", "char", "float", "short", "void", "null"
        ];
        const operator = [
            "+", "-", "*", "/", "=", "<", ">", "&"
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
        ];
        const punctuation = [
            ";", ","
        ];
        if(variableType.includes(text)){
            // this.setState({
            //     ...this.state,
            //     color: "rgb(200, 200, 200)"
            // });
            return "variableType";
        }else if(operator.includes(text)){
            // this.setState({
            //     ...this.state,
            //     color: "tomato"
            // });
            return "operator";
        }else if(accessSpecifier.includes(text)){
            // this.setState({
            //     ...this.state,
            //     color: "yellow"
            // });
            return "accessSpecifier";
        }else if(keyWord.includes(text)){
            // this.setState({
            //     ...this.state,
            //     color: "yellow"
            // });
            return "keyWord";
        }else if(bracket.includes(text)){
            // this.setState({
            //     ...this.state,
            //     marginLeft: "0.2vw",
            //     marginRight: "0.2vw",
            //     color: "rgb(240, 240, 240)",
            // });
            return "bracket";
        }else if(!isNaN(text)){
            // this.setState({
            //     ...this.state,
            //     color: "rgb(150, 200, 50)"
            // });
            return "number";
        }else if(funcName.includes(text)){
            // this.setState({
            //     ...this.state,
            //     color: "orange"
            // });
            return "funcName";
        }else if (punctuation.includes(text)){
            return "else";
        }else{
            return "variable";
        }
    };

    render(){
        let text = this.props.code;
        let color = this.getColor(text);
        return (
            <span className={"codeSpan "+ color}>
                {text}
            </span>
        )
    };
}

export default CodeSpan;