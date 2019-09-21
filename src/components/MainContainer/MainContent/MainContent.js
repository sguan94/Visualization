import React from "react";
import { connect } from "react-redux";
import CodeShowcase from "./CodeShowcase/CodeShowcase";
import ViewShowcase from "./ViewShowcase/ViewShowcase";
import {setCodeWidth, setViewWidth} from "../../../actions/divWidthAction";
import '../../../css/MainContent.scss';

class MainContent extends React.Component {

    constructor(){
        super();
        this.vlOnMouseMove = this.vlOnMouseMove.bind(this);
        this.vlOnMouseDown = this.vlOnMouseDown.bind(this);
        this.vlOnMouseUp = this.vlOnMouseUp.bind(this);
        this.setWidth.bind(this);
    }

    vlOnMouseMove(event){
        let totalWidth = document.getElementById("mainContent").offsetWidth;
        let viewWidth = event.pageX - document.getElementById("mainContent").getBoundingClientRect().x;
        let codeWidth = totalWidth - viewWidth;
        let x = Math.min(Math.max((viewWidth * 100)/ totalWidth, 0), 100);
        let y = Math.min(Math.max((codeWidth * 100)/ totalWidth, 0), 100);

        this.props.setViewWidth(`${y}%`);
        this.props.setCodeWidth(`${x}%`);
    }

    vlOnMouseDown(){
        window.addEventListener("mousemove", this.vlOnMouseMove, false);
        window.addEventListener("mouseup", this.vlOnMouseUp, false);
    }

    vlOnMouseUp(){
        window.removeEventListener("mousemove", this.vlOnMouseMove, false);
        window.removeEventListener("mouseup", this.vlOnMouseUp, false);
    }

    setWidth = (codeWidth) => {
        let totalWidth = document.getElementById("mainContent").offsetWidth;
        let y = ((codeWidth + 21) * 100)/ totalWidth;
        let x = 100 - y;
        this.props.setViewWidth(`${y}%`);
        this.props.setCodeWidth(`${x}%`);
    }

    render(){
        return (
            <div id="mainContent">
                <div id="viewDiv" style={{width: (this.props.divWidthReducer.viewWidth)}}>
                    <ViewShowcase/>
                </div>
                <div id="verticalLine" onMouseDown={this.vlOnMouseDown}></div>
                <div id="codeDiv" style={{width: (this.props.divWidthReducer.codeWidth)}}>
                    <div className="codeShowcaseContainer">
                        <CodeShowcase setWidth={this.setWidth}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerReducer: state.sideDrawerReducer,
        sideDrawerButtonReducer: state.sideDrawerButtonReducer,
        divWidthReducer: state.divWidthReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setViewWidth: (value) => {
            dispatch(setCodeWidth(value)); 
        },
        setCodeWidth: (value) => {
            dispatch(setViewWidth(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);