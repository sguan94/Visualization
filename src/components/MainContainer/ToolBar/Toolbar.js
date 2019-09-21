import React from "react";
import '../../../css/Toolbar.scss';
import DrawerToggleButton from "./DrawerToggleButton";

class Toolbar extends React.Component{
    render(){
        return (
            <div className="toolbar">
                <div className="toolbar__navigation">
                    <DrawerToggleButton/>
                </div>
            </div>

        );
    }
};

export default Toolbar;