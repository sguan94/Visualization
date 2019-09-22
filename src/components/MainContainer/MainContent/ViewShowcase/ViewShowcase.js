import React from "react";
import {connect} from "react-redux";
import SortableUnit from "./SortableUnit";
import '../../../../css/ViewShowcase.scss';


class ViewShowcase extends React.Component {

    constructor(){
        super();
        this.unitContainerRef = React.createRef();
        this.unitHeight = 0;
        this.unitWidth = 0;
    }

    shouldComponentUpdate(nextProps){
        if(isNaN(nextProps.theArray[0])){
            return false;
        }
        let max = parseInt(nextProps.theArray[0]);
        for(let i = 0; i < nextProps.theArray.length; i ++){
            if(max < parseInt(nextProps.theArray[i])){
                max = parseInt(nextProps.theArray[i]);
            }
        }
        this.unitHeight = this.unitContainerRef.current.offsetHeight * 0.85 / max;
        this.unitWidth = Math.min(this.unitContainerRef.current.offsetWidth / nextProps.theArray.length, 50);
        return true;
    }

    render(){
        return (
            <div className="viewShowcase">
                <div className="unitContainer" ref={this.unitContainerRef}>
                    {
                    this.props.theArray.map((item, key) => {
                        return <SortableUnit key={key} index={key} item={item} unitHeight={this.unitHeight} unitWidth={this.unitWidth}/>
                    })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        theArray: state.sortingControllerReducer.theArray
    }
}

export default connect(mapStateToProps)(ViewShowcase);