import React from "react";
import '../../../css/Toolbar.css';
import DrawerToggleButton from "./DrawerToggleButton";

class Toolbar extends React.Component{
    render(){
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <DrawerToggleButton/>
                    <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
                    {/* <div className="toolbar__navigation-items">
                        <ul>
                            <li><a href="/">Product</a></li>
                            <li><a href="/">User</a></li>
                        </ul>
                    </div> */}
                </nav>
            </header>

        );
    }
};

export default Toolbar;