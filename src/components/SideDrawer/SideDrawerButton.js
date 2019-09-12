import React from "react";
import ReactDom from 'react-dom';
import {connect} from "react-redux";
import { setContent, setAlgorithm, setCode } from "../../actions/sideDrawerButtonAction";
import SortingCode from "../MainContainer/MainContent/CodeShowcase/SortingCode";

import '../../css/SideDrawerButton.scss';

class SideDrawerButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            enter: false,
            leave: false,
        }
    }

    mouseEnter = (e) => {
        var parent = ReactDom.findDOMNode(this);
        this.setState({
            ...this.state,
            enter: true,
            leave: false,
            relX: e.pageX - parent.getBoundingClientRect().x,
            relY: e.pageY - parent.getBoundingClientRect().y
        })
    }

    mouseLeave = (e) => {
        var parent = ReactDom.findDOMNode(this);
        this.setState({
            ...this.state,
            enter: false,
            leave: true,
            relX: e.pageX - parent.getBoundingClientRect().x,
            relY: e.pageY - parent.getBoundingClientRect().y
        })
    }

    handleClick(){
        this.props.setContent(this.props.text);
        switch (this.props.text){
            case "Bubble Sort":
                this.props.setCode(SortingCode.bubbleSort);
                this.props.setAlgorithm("bubbleSort");
                break;
            case "Selection Sort":
                this.props.setCode(SortingCode.selectionSort);
                this.props.setAlgorithm("selectionSort");
                break;
            case "Insertion Sort":
                this.props.setCode(SortingCode.insertionSort);
                this.props.setAlgorithm("insertionSort");
                break;
            case "Merge Sort":
                this.props.setCode(SortingCode.mergeSort);
                this.props.setAlgorithm("mergeSort");
                break;
            case "Quick Sort":
                this.props.setCode(SortingCode.quickSort);
                this.props.setAlgorithm("quickSort");
                break;
            default:

        }
    }

    render(){
        return (
            <div className="button_su" onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={() => this.handleClick()}>
                <span className={
                            "su_button_circle " + 
                            (this.state.enter ? 'explode-circle' : '') + 
                            (this.state.leave ? 'desplode-circle' : '')}
                      style={{left: this.state.relX, top: this.state.relY}}></span>
                <a href="#" className="button_su_inner">
                    <span className="button_text_container">{this.props.text}</span>
                </a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerButtonReducer: state.sideDrawerButtonReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setContent: (value) => {
            dispatch(setContent(value));
        },
        setAlgorithm: (value) => {
            dispatch(setAlgorithm(value));
        },
        setCode: (value) => {
            dispatch(setCode(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerButton);