import React from "react";
import ReactDom from 'react-dom';
import {connect} from "react-redux";
import { setContent } from "../../actions/sideDrawerButtonAction";

import '../../css/SideDrawerButton.css';

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
        console.log(this.props.sideDrawerButtonReducer.content);
    }

    render(){
        return (
            <div className="button_su" onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={() => this.props.setContent(this.props.text)}>
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerButton);