import React from "react";
import './SideDrawerButton.css';

class SideDrawerButton extends React.Component {
    render(){
        return (
            <div className="sidedrawer-button">
                <a href="/">{this.props.text}</a>
            </div>
        );
    }
}

export default SideDrawerButton;