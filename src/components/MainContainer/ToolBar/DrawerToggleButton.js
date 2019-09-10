import React from "react";
import '../../../css/DrawerToggleButton.css';
import {connect} from "react-redux";
import {toggleSideDrawer} from "../../../actions/sideDrawerAction";

class DrawerToggleButton extends React.Component {

    render(){

        return(
            <button className="toggle-button" onClick={() => this.props.toggleSideDrawer()}>
                <div className={(!this.props.sideDrawerReducer.showSideDrawer ? 'toggle-button__line1' : 'toggle-button__line1 tlcw')}/>
                <div className={(!this.props.sideDrawerReducer.showSideDrawer ? 'toggle-button__line2' : 'toggle-button__line2 cccw')}/>
                <div className={(!this.props.sideDrawerReducer.showSideDrawer ? 'toggle-button__line3' : 'toggle-button__line3 brcw')}/>
            </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerToggleButton);