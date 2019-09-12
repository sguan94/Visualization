import React from "react";
import CodeLine from "./CodeLine";
import {connect} from "react-redux";
import shortid from "shortid";
import '../../../../css/CodeShowcase.css';

class CodeShowcase extends React.Component {

    getKey = () => {
        const key = shortid.generate();
        return key;
      };
    

    render(){
        let codeLines = this.props.sideDrawerButtonReducer.code.split("\n");
        return (
            <div className="codeShowcase">
                {codeLines.map((item, key) => <CodeLine code={item} index={key} key={this.getKey()}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerButtonReducer: state.sideDrawerButtonReducer
    };
};

export default connect(mapStateToProps)(CodeShowcase);