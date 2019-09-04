import React from 'react';
import {connect} from "react-redux";
import { toggleSideDrawer } from "../../../actions/sideDrawerAction";
import '../../../css/BackDrop.css'

class BackDrop extends React.Component{

    render(){

        let backDropClassName;
        if(!this.props.sideDrawerReducer.showSideDrawer){
            backDropClassName = "backDrop show";
        }else{
            backDropClassName = "backDrop";
        }

        return (
            <div className={backDropClassName} onClick={this.props.toggleSideDrawer}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);