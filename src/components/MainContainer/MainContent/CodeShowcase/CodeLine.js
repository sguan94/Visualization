import React from "react";
import CodeSpan from "./CodeSpan";
import "../../../../css/CodeLine.scss"

class CodeLine extends React.Component {

    render(){
        let spans = this.props.code.split(/([\W+/])/);
        const codeText = (        
        <div className="codeText">
        {
            spans.map((item, key) => { if(item!==""){return<CodeSpan code={item} key={key}/>}else{return null} } )
        }
        </div>
        );

        return (
            <div className="codeLine">
                <div className="index">{this.props.index + 1}</div>
                {codeText}
            </div>
        )
    }
}

export default CodeLine;