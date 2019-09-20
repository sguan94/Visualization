import React from "react";
import { connect } from "react-redux";
import {setContentHeight, setControllerHeight} from "../../actions/divHeightAction";
import Toolbar from "./ToolBar/Toolbar";
// import BackDrop from "./BackDrop/BackDrop";
import '../../css/MainContainer.css';
import MainContent from "./MainContent/MainContent";
import SortingController from "./SortingController/SortingController";

class MainContainer extends React.Component {

    constructor(){
        super();
        this.vlOnMouseMove = this.vlOnMouseMove.bind(this);
        this.vlOnMouseDown = this.vlOnMouseDown.bind(this);
        this.vlOnMouseUp = this.vlOnMouseUp.bind(this);
    };

    vlOnMouseMove(event){
        let totalHeight = document.getElementById("mainContentDiv").offsetHeight;
        let contentHeight = event.pageY - document.getElementById("codeViewDiv").getBoundingClientRect().y;
        let controllerHeight = totalHeight - contentHeight;
        let x = Math.min(Math.max((contentHeight * 100)/ totalHeight - 1, 6), 98);
        let y = Math.min(Math.max((controllerHeight * 100)/ totalHeight - 1, 6), 98);
        this.props.setContentHeight(`${x}%`);
        this.props.setControllerHeight(`${y}%`);
    };

    vlOnMouseDown(){
        window.addEventListener("mousemove", this.vlOnMouseMove, false);
        window.addEventListener("mouseup", this.vlOnMouseUp, false);
    };

    vlOnMouseUp(){
        window.removeEventListener("mousemove", this.vlOnMouseMove, false);
        window.removeEventListener("mouseup", this.vlOnMouseUp, false);
    };

    render(){

        return (
            <div id="main-container">
                <div className="toolBarDiv">
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                </div>
                <div className="titleDiv">
                    <div>{this.props.sideDrawerButtonReducer.content}</div>
                </div>
                <div id="mainContentDiv">
                    <div id="codeViewDiv" style={{height: this.props.divHeightReducer.contentHeight}}>
                        <MainContent/>
                    </div>
                    <div id="horizontalLine" onMouseDown={this.vlOnMouseDown}></div>
                    <div id="controllerDiv" style={{height: this.props.divHeightReducer.controllerHeight}}>
                        <SortingController/>
                    </div>                    
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return{
        sideDrawerButtonReducer: state.sideDrawerButtonReducer,
        divHeightReducer: state.divHeightReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setContentHeight: (value) => {
            dispatch(setContentHeight(value));
        },
        setControllerHeight: (value) => {
            dispatch(setControllerHeight(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);