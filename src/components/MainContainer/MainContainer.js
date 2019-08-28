import React from "react";
import { connect } from "react-redux";
import Toolbar from "./ToolBar/Toolbar";
import './MainContainer.css';

class MainContainer extends React.Component {

    render(){

        let mainContainerClassName;
        if(!this.props.showSideDrawerReducer.showSideDraw){
            mainContainerClassName = "main-container shrink";
        }else{
            mainContainerClassName = "main-container";
        }

        return (
            <div className={mainContainerClassName}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {/* {backDrop} */}
                <main style={{marginTop: '64px'}}>
                    <p>dfhgfdfsgfnwesgdhesgdgd</p>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        showSideDrawerReducer: state.showSideDrawReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        toggleSideDrawer: () => {
            dispatch({
                type: "TOGGLESIDEDRAWER"
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);