import React from "react";
import { connect } from "react-redux";

import '../../css/SideDrawer.scss';
import SideDrawerButton from "./SideDrawerButton";

class SideDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.buttonList = [
            {text: "Bubble Sort"},
            {text: "Selection Sort"},
            {text: "Insertion Sort"},
            {text: "Merge Sort"},
            {text: "Quick Sort"},
        ];
    };

    render(){
        return (
            <div className="side-drawer">
                <div className="side-drawer-header">
                    Visualizer
                </div>
                <div className="buttonListTitle">
                    <div className="titleContent">
                        <img src="https://img.icons8.com/ultraviolet/480/000000/generic-sorting-2.png"
                        alt=""/>
                        <span>Sorting</span>
                    </div>
                </div>
                <div className="side-drawer-buttonList">
                    {this.buttonList.map((item, key) => <div className="buttonContainer" key={key}><SideDrawerButton text={item.text} key={key}/></div>)}
                </div>
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