import React from "react";
import { connect } from "react-redux";

import '../../css/SideDrawer.css';
import SideDrawerButton from "./SideDrawerButton";

class SideDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.buttonList = [
            {text: "1"},
            {text: "2"},
            {text: "3"},
            {text: "4"},
        ];
    };

    render(){
        let sideDrawerClassName;
        if(!this.props.sideDrawerReducer.showSideDrawer){
            sideDrawerClassName = "side-drawer open";
        }else{
            sideDrawerClassName = "side-drawer";
        }

        return (
            <div className={sideDrawerClassName}>
                <div className="side-drawer-header">
                    <span>Visualizer</span>
                </div>
                {this.buttonList.map((item, key) => <SideDrawerButton text={item.text} key={key}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerReducer: state.sideDrawerReducer
    };
};

export default connect(mapStateToProps)(SideDrawer);