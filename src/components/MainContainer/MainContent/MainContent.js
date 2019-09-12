import React from "react";
import { connect } from "react-redux";
import CodeShowcase from "./CodeShowcase/CodeShowcase";
import SortingCode from "./CodeShowcase/SortingCode";
import ViewShowcase from "./ViewShowcase/ViewShowcase";
import '../../../css/MainContent.css';

class MainContent extends React.Component {

    constructor(){
        super();
        this.state = {
            viewWidth: "59%",
            codeWidth: "39%"
        }
        this.vlOnMouseMove = this.vlOnMouseMove.bind(this);
        this.vlOnMouseDown = this.vlOnMouseDown.bind(this);
        this.vlOnMouseUp = this.vlOnMouseUp.bind(this);
    }

    vlOnMouseMove(event){
        let totalWidth = document.getElementById("mainContent").offsetWidth;
        let viewWidth = event.pageX - document.getElementById("mainContent").getBoundingClientRect().x;
        let codeWidth = totalWidth - viewWidth;
        let x = `${(viewWidth * 100 - 1)/ totalWidth}%`;
        let y = `${(codeWidth * 100 - 1)/ totalWidth}%`;
        this.setState({
            viewWidth: x,
            codeWidth: y
        })
    }

    vlOnMouseDown(){
        window.addEventListener("mousemove", this.vlOnMouseMove, false);
        window.addEventListener("mouseup", this.vlOnMouseUp, false);
    }

    vlOnMouseUp(){
        console.log("up");
        window.removeEventListener("mousemove", this.vlOnMouseMove, false);
        window.removeEventListener("mouseup", this.vlOnMouseUp, false);
    }

    render(){

        return (
            <div id="mainContent">
                <div id="viewDiv" style={{width: (this.state.viewWidth)}}>
                    <ViewShowcase/>
                </div>
                <div id="verticalLine" onMouseDown={this.vlOnMouseDown}></div>
                <div id="codeDiv" style={{width: (this.state.codeWidth)}}>
                    <div className="codeShowcaseContainer">
                        <CodeShowcase/>
                    </div>
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

export default connect(mapStateToProps)(MainContent);