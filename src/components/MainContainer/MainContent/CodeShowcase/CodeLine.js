import React from "react";
import CodeSpan from "./CodeSpan";
import "../../../../css/CodeLine.scss"

class CodeLine extends React.Component {


    // componentWillUpdate(){
    //     const myNode = document.getElementsByClassName("foo");
    //     while (myNode.firstChild) {
    //       myNode.removeChild(myNode.firstChild);
    //     }
    // }

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
                <div className="index">{this.props.index}</div>
                {codeText}
            </div>
        )
    }
}

export default CodeLine;