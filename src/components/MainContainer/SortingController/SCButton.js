import React from "react";
import "../../../css/SCButton.scss";

class SCButton extends React.Component {
    
    render(){
        return (
            <div className="scbuttonDiv" align="center">
                <button className="scbutton" onClick={this.props.onClick} disabled={this.props.disabled}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default SCButton;