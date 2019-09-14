import React from "react";
import CodeLine from "./CodeLine";
import {connect} from "react-redux";
import shortid from "shortid";
import '../../../../css/CodeShowcase.css';

class CodeShowcase extends React.Component {

    constructor(){
        super();
        this.codeWidth = 0;
        this.getLength.bind(this);
    }

    getKey = () => {
        const key = shortid.generate();
        return key;
    };

    getLength = (value) => {
        if(this.codeWidth < value){
            this.codeWidth = value;
        }
    }

    componentWillReceiveProps(){
        this.codeWidth = 0;
    }

    componentDidUpdate(){
        this.props.setWidth(this.codeWidth);
    }

    render(){
        let codeLines = this.props.sideDrawerButtonReducer.code.split("\n");
        return (
            <div className="codeShowcase">
                {codeLines.map((item, key) => <CodeLine code={item} index={key} key={this.getKey()} getLength={this.getLength}/>)}
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