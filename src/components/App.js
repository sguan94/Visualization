import React from "react";
import SideDrawer from './SideDrawer/SideDrawer';
import MainContainer from "./MainContainer/MainContainer";
import {connect} from "react-redux";
import "./App.css"

class App extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="appContainer">
                <SideDrawer/>
                <MainContainer/>
                <button onClick={() => this.props.toggleSideDrawer()}/>
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
            dispatch({
                type: "TOGGLESIDEDRAWER"
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);