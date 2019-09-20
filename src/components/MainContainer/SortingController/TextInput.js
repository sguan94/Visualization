import React from "react";
import ReactDom from 'react-dom';
import "../../../css/TextInput.scss";

class TextInput extends React.Component {

    constructor(){
        super();
        this.inputRef = React.createRef();
        this.state = {
            isHovering: false,
            promptDivLeft: 0,
            promptDivTop: 0,
            focusInput: false
        }
    }

    handleClick(){
        let input = document.getElementById("ti").value;
        if(this.checkInputIsArray(input)){
            this.props.handleClick(input);
        }else{

        }
    }

    checkInputIsArray(input){
        if(input === ""){
            return true;
        }
        let tempArr = input.split(",");
        for(let i = 0; i < tempArr.length; i ++){
            if(tempArr[i] === ""){
                return false;
            }
            if(isNaN(tempArr[i])){
                return false;
            }
            if(Number(tempArr[i]) < 0 || Number(tempArr[i]) > 50){
                return false;
            }
        }
        return true;
    }

    handleMouseEnter(){
        document.getElementById("textInput").addEventListener("mousemove", this.handleMouseMove.bind(this));
        this.timer = window.setTimeout(() => {
            this.setupHoverDiv();
        },1500);
    }

    handleMouseMove(event){
        var parent = ReactDom.findDOMNode(this);
        this.setState({
            isHovering: false,
            promptDivLeft: event.clientX - parent.getBoundingClientRect().x + 10,
            promptDivTop: event.clientY - parent.getBoundingClientRect().y
        })
    }

    setupHoverDiv(){
        this.setState({
            ...this.state,
            isHovering: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            ...this.state,
            isHovering: false
        })
        if(this.timer){
            window.clearTimeout(this.timer);
        }
        document.getElementById("textInput").removeEventListener("mousemove", this.handleMouseMove);
    }

    handleFocus(){
        this.setState({
            ...this.state,
            isHovering: false,
            focusInput: true
        })
        document.getElementById("textInput").removeEventListener("mousemove", this.handleMouseMove);
    }

    handleBlur(){
        this.setState({
            ...this.state,
            focusInput: false
        })
    }

    render(){
        return (
            <div id="textInput" onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave} 
            onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}>
                <input id="ti" ref={this.inputRef} placeholder={this.state.focusInput?"":this.props.placeHolder}></input>
                <button id="tiButton" onClick={this.handleClick.bind(this)}>Enter</button>
                {
                    this.state.isHovering &&
                    <div className="promptDiv" style={{top:this.state.promptDivTop, left:this.state.promptDivLeft}}>
                        <p>Please input array in this format:
                            "num1,num2,num3"</p>
                    </div>
                }
            </div>
        );
    }
};

export default TextInput;