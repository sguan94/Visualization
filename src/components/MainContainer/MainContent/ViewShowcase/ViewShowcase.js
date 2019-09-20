import React from "react";
import {connect} from "react-redux";
import '../../../../css/ViewShowcase.css';

class ViewShowcase extends React.Component {

    constructor(){
        super();
        this.containerRef = React.createRef();
        this.unitHeight = 0;
    }

    shouldComponentUpdate(nextProps){
        if(typeof nextProps.theArray[0] === NaN){
            return false;
        }
        let max = parseInt(nextProps.theArray[0]);
        for(let i = 0; i < nextProps.theArray.length; i ++){
            if(max < parseInt(nextProps.theArray[i])){
                max = parseInt(nextProps.theArray[i]);
            }
        }
        console.log(max);
        this.unitHeight = this.containerRef.current.offsetHeight / max;
        return true;
    }

    render(){

        return (
            <div className="viewShowcase">
                <div className="unitContainer" ref={this.containerRef}>
                    {this.props.theArray.map((item, key) => {
                        console.log(this.containerRef.current);
                        return <div className="unit" key={key} style={{height: `${this.unitHeight * item}px`}}></div>
                    })}
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