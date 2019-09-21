import React from "react";
import "../../../../css/SortableUnit.scss";

class SortableUnit extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div className="SortableUnit" className="sortableUnit" style={{
                    width:`${this.props.unitWidth}px`,
                    marginRight:`${this.props.unitWidth * 0.1}px`,
                    marginLeft:`${this.props.unitWidth * 0.1}px`,
                }}>
                <div className="rect" style={{height: `${this.props.unitHeight * this.props.item}px`}}></div>
            </div>
        );
    }
}

export default SortableUnit;