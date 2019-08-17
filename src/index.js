import React from "react";
import { render } from "react-dom";
import Toolbar from './components/ToolBar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop'

class App extends React.Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen : !prevState.sideDrawerOpen}
        });
    };

    backDropClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen : false}
        })
    }

    render() {
        let backDrop;
        if(this.state.sideDrawerOpen){
            backDrop = <BackDrop click={this.backDropClickHandler}/>;
        }
        return (
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backDrop}
                <main style={{marginTop: '64px'}}>
                    <p>dfhgfdfsgfnwesgdhesgdgd</p>
                </main>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"));