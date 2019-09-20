import React from "react";
import CodeSpan from "./CodeSpan";
import {connect} from "react-redux";
import "../../../../css/CodeLine.scss"

class CodeLine extends React.Component {

    constructor(){
        super();
        this.indexRef = React.createRef();
        this.codeTextRef = React.createRef();
    }
    
    componentDidMount(){

        // console.log(this.indexRef.current.offsetWidth + this.codeTextRef.current.offsetWidth +
        //     parseInt(window.getComputedStyle(this.codeTextRef.current).getPropertyValue('padding-left'), 10) +
        //     parseInt(window.getComputedStyle(this.indexRef.current).getPropertyValue('padding-right'), 10));

        this.props.getLength(this.indexRef.current.offsetWidth + this.codeTextRef.current.offsetWidth +
            parseInt(window.getComputedStyle(this.codeTextRef.current).getPropertyValue('padding-left'), 10) +
            parseInt(window.getComputedStyle(this.indexRef.current).getPropertyValue('padding-right'), 10));
    }

    render(){
        let spans = this.props.code.split(/([\W+/])/);
        let codeClass = "codeLine";
        if((this.props.index + 1) === this.props.sortingControllerReducer.highlightLine){
            codeClass = "codeLineHightlight";
        }
        return (
            <div className={codeClass} ref={this.props.setRef}>
                <div className="index" ref={this.indexRef}>{this.props.index + 1}</div>
                <div className="codeText" ref={this.codeTextRef}>{
                    spans.map((item, key) => { if(item!==""){return<CodeSpan code={item} key={key}/>}else{return null} } )
                }</div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        sortingControllerReducer: state.sortingControllerReducer
    };
};

export default connect(mapStateToProps)(CodeLine);