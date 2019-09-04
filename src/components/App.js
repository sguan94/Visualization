import React from "react";
import SideDrawer from './SideDrawer/SideDrawer';
import MainContainer from "./MainContainer/MainContainer";
import {connect} from "react-redux";
import {toggleSideDrawer} from "../actions/sideDrawerAction";
import "../css/App.css"

class App extends React.Component {

    render() {
        return (
            <div className="appContainer">
                <SideDrawer/>
                <MainContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        showSideDrawerReducer: state.showSideDrawReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        toggleSideDrawer: () => {
            dispatch(toggleSideDrawer());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);