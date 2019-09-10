import React from "react";
import CodeSpan from "./CodeSpan";
import "../../../../css/CodeLine.less"

class CodeLine extends React.Component {

    render(){
        let spans = this.props.code.split(/([[\];(). +-])/);
        return (
            <div className="codeLine">
                <div className="index">{this.props.index}</div>
                <div className="codeText">{
                    spans.map((item, key) => { if(item!==""){return<CodeSpan code={item} key={key}/>}else{return null} } )
                }</div>
            </div>
        )
    }
}

export default CodeLine;