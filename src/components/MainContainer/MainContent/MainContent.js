import React from "react";
import { connect } from "react-redux";
import CodeShowcase from "./CodeShowcase/CodeShowcase";
import SortingCode from "./CodeShowcase/SortingCode";
import ViewShowcase from "./ViewShowcase/ViewShowcase";
import {setCodeWidth, setViewWidth} from "../../../actions/divWidthAction";
import '../../../css/MainContent.css';

class MainContent extends React.Component {

    constructor(){
        super();
        this.vlOnMouseMove = this.vlOnMouseMove.bind(this);
        this.vlOnMouseDown = this.vlOnMouseDown.bind(this);
        this.vlOnMouseUp = this.vlOnMouseUp.bind(this);
    }

    vlOnMouseMove(event){
        let totalWidth = document.getElementById("mainContent").offsetWidth;
        let viewWidth = event.pageX - document.getElementById("mainContent").getBoundingClientRect().x;
        let codeWidth = totalWidth - viewWidth;
        let x = Math.min(Math.max((viewWidth * 100 - 1)/ totalWidth, 0), 98);
        let y = Math.min(Math.max((codeWidth * 100 - 1)/ totalWidth, 0), 98);

        this.props.setViewWidth(`${y}%`);
        this.props.setCodeWidth(`${x}%`);
        console.log(this.props.divWidthReducer.viewWidth + "   " + this.props.divWidthReducer.codeWidth);
    }

    vlOnMouseDown(){
        window.addEventListener("mousemove", this.vlOnMouseMove, false);
        window.addEventListener("mouseup", this.vlOnMouseUp, false);
    }

    vlOnMouseUp(){
        console.log("up");
        window.removeEventListener("mousemove", this.vlOnMouseMove, false);
        window.removeEventListener("mouseup", this.vlOnMouseUp, false);
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
                        <CodeShowcase/>
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