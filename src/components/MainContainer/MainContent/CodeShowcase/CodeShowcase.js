import React from "react";
import CodeLine from "./CodeLine";
import '../../../../css/CodeShowcase.css';

class CodeShowcase extends React.Component {

    render(){
        let codeLines = this.props.code.split("\n");
        return (
            <div className="codeShowcase">
                {codeLines.map((item, key) => <CodeLine code={item} index={key} key={key}/>)}
            </div>
        );
    }
}

export default CodeShowcase;