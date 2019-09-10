import React from "react";
import { connect } from "react-redux";
import Toolbar from "./ToolBar/Toolbar";
// import BackDrop from "./BackDrop/BackDrop";
import '../../css/MainContainer.css';
import MainContent from "./MainContent/MainContent";

class MainContainer extends React.Component {

    render(){

        return (
            <div className="main-container">
                <div className="toolBarDiv">
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                </div>
                <div className="titleDiv">
                    <div>{this.props.sideDrawerButtonReducer.content}</div>
                </div>
                <div className="mainContentDiv">
                    <MainContent/>
                </div>
                <div className="controllerDiv">
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerReducer: state.sideDrawerReducer,
        sideDrawerButtonReducer: state.sideDrawerButtonReducer
    };
};

export default connect(mapStateToProps)(MainContainer);