import React from "react";
import {connect} from "react-redux";
import {setHighlight} from "../../../actions/sortingControllerAction";

class SortingController extends React.Component {

    constructor(){
        super();
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

    render(){
        return (
            <div id="sortingController">
                <button onClick={this.prev.bind(this)}>prev</button>
                <button onClick={this.next.bind(this)}>next</button>
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingController);