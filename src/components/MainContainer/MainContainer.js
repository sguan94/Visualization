import React from "react";
import { connect } from "react-redux";
import Toolbar from "./ToolBar/Toolbar";
import BackDrop from "./BackDrop/BackDrop";
import '../../css/MainContainer.css';

class MainContainer extends React.Component {

    render(){
        let mainContainerClassName;
        if(!this.props.sideDrawerReducer.showSideDrawer){
            mainContainerClassName = "main-container shrink";
        }else{
            mainContainerClassName = "main-container";
        }

        return (
            <div className={mainContainerClassName}>
                <BackDrop />
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                
                <main style={{marginTop: '64px'}}>
                    <p>{this.props.sideDrawerButtonReducer.content}</p>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        sideDrawerReducer: state.sideDrawerReducer,
        sideDrawerButtonReducer: state.sideDrawerButtonReducer
    };
};

export default connect(mapStateToProps)(MainContainer);