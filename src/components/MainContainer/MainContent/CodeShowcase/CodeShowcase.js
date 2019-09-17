import React, {createRef} from "react";
import CodeLine from "./CodeLine";
import {connect} from "react-redux";
import shortid from "shortid";
import {setMaxLineNum, setHighlight} from "../../../../actions/sortingControllerAction";
import '../../../../css/CodeShowcase.css';

class CodeShowcase extends React.Component {

    constructor(){
        super();
        this.codeWidth = 0;
        this.getLength.bind(this);
        this.lineNum = -1 ;
        this.thisRef = createRef();
        this.childRef = [];
        this.lineNumInView = 0;
    }

    getKey = () => {
        const key = shortid.generate();
        return key;
    };

    getLength = (value) => {
        if(this.codeWidth < value){
            this.codeWidth = value;
        }
    }

    componentDidMount(){
        this.props.setMaxLineNum(this.lineNum);
        this.lineNumInView = Math.floor(this.thisRef.current.offsetHeight / this.childRef[0].current.offsetHeight);
        console.log(this.lineNumInView);
    }

    componentWillUpdate(){
        this.codeWidth = 0;
    }

    componentWillReceiveProps(nextProps){
        let unitLineHeight = 0;
        if(this.childRef[0].current === null){
            unitLineHeight = this.childRef[1].current.offsetHeight;
        }else{
            unitLineHeight = this.childRef[0].current.offsetHeight;
        }

        let lniv = Math.floor(this.thisRef.current.offsetHeight / unitLineHeight);
        if(lniv !== this.lineNumInView){
            this.lineNumInView = lniv;
        }

        if(this.childRef[0].current === null){
            if(nextProps.highlightLine - Math.floor(this.lineNumInView / 2) < 1){
                this.childRef[1].current.scrollIntoView();
            }else{
                this.childRef[nextProps.highlightLine - Math.floor(this.lineNumInView / 2)].current.scrollIntoView();
            }
        }
    }

    shouldComponentUpdate(nextProps){
        if(this.props.sideDrawerButtonReducer.content !== nextProps.sideDrawerButtonReducer.content){
            return true;
        }else{
            return false;
        }
    }

    componentDidUpdate(){
        this.props.setWidth(this.codeWidth);
        this.props.setMaxLineNum(this.lineNum);
        this.childRef[1].current.scrollIntoView();
        
        this.lineNum = 0;
        this.props.setHighlight(0);
    }


    render(){
        let codeLines = this.props.sideDrawerButtonReducer.code.split("\n");
        return (
            <div className="codeShowcase" ref={this.thisRef}>
                {codeLines.map  ((item, key) => {this.lineNum ++;
                                                this.childRef[this.lineNum] = createRef();
                                                return <CodeLine 
                                                        code={item} 
                                                        index={key} 
                                                        key={this.getKey()} 
                                                        getLength={this.getLength}
                                                        setRef={this.childRef[this.lineNum]}/>
                                                }
                                )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerButtonReducer: state.sideDrawerButtonReducer,
        divHeightReducer: state.divHeightReducer,
        highlightLine: state.sortingControllerReducer.highlightLine
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setHighlight: (value) => {
            dispatch(setHighlight(value));
        },
        setMaxLineNum: (value) => {
            dispatch(setMaxLineNum(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeShowcase);