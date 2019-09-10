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
            viewWidth: "65%",
            codeWidth: "35%"
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
        document.getElementById("mainContent").addEventListener("mousemove", this.vlOnMouseMove, false);
    }

    vlOnMouseUp(){
        document.getElementById("mainContent").removeEventListener("mousemove", this.vlOnMouseMove, false);
    }

    render(){
        let codeName = "";
        switch (this.props.sideDrawerButtonReducer.content) {
            case "Bubble Sort":
                codeName = SortingCode.bubbleSort;
                break;
            case "Selection Sort":
                codeName = SortingCode.selectionSort;
                break;
            case "Insertion Sort":
                codeName = SortingCode.insertionSort;
                break;
            case "Merge Sort":
                codeName = SortingCode.mergeSort;
                break;
            case "Quick Sort":
                codeName = SortingCode.quickSort;
                break;
        }
        return (
            <div id="mainContent">
                <div id="viewDiv" style={{width: (this.state.viewWidth)}}>
                    <ViewShowcase/>
                </div>
                <div id="verticalLine" onMouseDown={this.vlOnMouseDown} onMouseUp={this.vlOnMouseUp}></div>
                <div id="codeDiv" style={{width: (this.state.codeWidth)}}>
                    <CodeShowcase code={codeName}/>
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