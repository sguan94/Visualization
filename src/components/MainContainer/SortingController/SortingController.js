import React from "react";
import {connect} from "react-redux";
import {setHighlight, setTheArray, clearTheArray} from "../../../actions/sortingControllerAction";
import SCButton from "./SCButton";
import ArrayInput from "./ArrayInput";
import "../../../css/SortingController.scss"

class SortingController extends React.Component {

    constructor(){
        super();
        this.placeHolder = "";
    }

    generateArray(){
        console.log(Math.random(100));
    }

    next(){
        if(this.props.sortingControllerReducer.highlightLine <= this.props.sortingControllerReducer.maxLineNum){
            this.props.setHighlight(++this.props.sortingControllerReducer.highlightLine);
        }
    }

    prev(){
        if(this.props.sortingControllerReducer.highlightLine > 0){
            this.props.setHighlight(--this.props.sortingControllerReducer.highlightLine);
        }
    }

    submitArray(array){
        let tempArr = array.split(',');
        if(tempArr[0] === ""){
            this.props.clearTheArray();
        }else{
            this.props.setTheArray(tempArr);
        }
    }

    render(){
        if(this.props.sortingControllerReducer.theArray.length === 0){
            this.placeHolder = "Input array here...";
        }else{
            this.placeHolder = this.props.sortingControllerReducer.theArray.join();
        }
        
        // this.placeHolder=(this.props.sortingControllerReducer.theArray===[]?"Input array here...":this.props.sortingControllerReducer.theArray.join());
        // console.log(this.placeHolder);
        return (
            <div id="sortingController">
                
                <ArrayInput handleClick={this.submitArray.bind(this)} placeHolder={this.placeHolder}/>
                <div className="buttonList">
                    {/* <button onClick={this.prev.bind(this)}>prev</button>
                    <button onClick={this.next.bind(this)}>next</button> */}
                    {/* <SCButton onClick={this.generateArray}>Generate Array</SCButton> */}
                </div>
             </div>
        );
    }
};

const mapStateToProps = (state) => {
    return{
        sortingControllerReducer: state.sortingControllerReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setHighlight: (value) => {
            dispatch(setHighlight(value));
        },
        setTheArray: (value) => {
            dispatch(setTheArray(value));
        },
        clearTheArray: () => {
            dispatch(clearTheArray());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingController);