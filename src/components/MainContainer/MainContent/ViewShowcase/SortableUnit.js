import React from "react";
import "../../../../css/SortableUnit.scss";

class SortableUnit extends React.Component {

    render(){
        return (
            <div className="sortableUnit" style={{
                    width:`${this.props.unitWidth}px`,
                    marginRight:`${this.props.unitWidth * 0.1}px`,
                    marginLeft:`${this.props.unitWidth * 0.1}px`,
                }}>
                    {console.log(this.props.index)}
                <div className="rectIndex">{this.props.index}</div>
                <div className="rect" style={{height: `${this.props.unitHeight * this.props.item}px`}}></div>
                <div className="numLabel">{this.props.item}</div>
            </div>
        );
    }
}

export default SortableUnit;