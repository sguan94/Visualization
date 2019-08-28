import React from "react";
import { connect } from "react-redux";

import './SideDrawer.css'
import SideDrawerButton from "./SideDrawerButton";

class SideDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.buttonList = [
            {text: "LinkedList"},
            {text: "ArrayList"},
        ];
    };

    render(){

        const buttonList = this.buttonList.map(
            (item, key) => <SideDrawerButton text={item.text} key={key}/>
        )

        let sideDraweClassName;
        if(!this.props.showSideDrawerReducer.showSideDraw){
            sideDraweClassName = "side-drawer open";
        }else{
            sideDraweClassName = "side-drawer";
        }

        return (
            <div className={sideDraweClassName}>
                {buttonList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        showSideDrawerReducer: state.showSideDrawReducer
    };
};

export default connect(mapStateToProps)(SideDrawer);