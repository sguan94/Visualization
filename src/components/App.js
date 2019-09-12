import React from "react";
import SideDrawer from './SideDrawer/SideDrawer';
import MainContainer from "./MainContainer/MainContainer";
import {connect} from "react-redux";
import {toggleSideDrawer} from "../actions/sideDrawerAction";
import "../css/App.css"

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            width: 100,
            height: 100
        }
    }

    updateDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        let sideDrawerDivClassName;
        let mainContainerDivClassName;
        if(this.props.sideDrawerReducer.showSideDrawer){
            sideDrawerDivClassName = "sideDrawerDiv";
            mainContainerDivClassName = "mainContainerDiv shrink";
        }else{
            sideDrawerDivClassName = "sideDrawerDiv hide";
            mainContainerDivClassName = "mainContainerDiv";
        }

        return (
            <div className="appContainer" style={{width: this.state.width, height: this.state.height}}>
                <div className={sideDrawerDivClassName}><SideDrawer/></div>
                <div className={mainContainerDivClassName}><MainContainer/></div>
            </div>
            // <div className="a">
            //     sdfdsfsa
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerReducer: state.sideDrawerReducer
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