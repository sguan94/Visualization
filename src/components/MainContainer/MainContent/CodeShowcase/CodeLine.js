import React from "react";
import CodeSpan from "./CodeSpan";
import "../../../../css/CodeLine.scss"

class CodeLine extends React.Component {

    constructor(){
        super();
        this.indexRef = React.createRef();
        this.codeTextRef = React.createRef();
    }
    
    componentDidMount(){
        this.props.getLength(this.indexRef.current.offsetWidth + this.codeTextRef.current.offsetWidth);
    }

    render(){
        let spans = this.props.code.split(/([\W+/])/);
        return (
            <div className="codeLine">
                <div className="index" ref={this.indexRef}>{this.props.index + 1}</div>
                <div className="codeText" ref={this.codeTextRef}>{
                    spans.map((item, key) => { if(item!==""){return<CodeSpan code={item} key={key}/>}else{return null} } )
                }</div>
            </div>
        )
    }
}


export default CodeLine;