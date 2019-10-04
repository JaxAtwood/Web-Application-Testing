import React, { Component } from "react";
import Dashboard from "./Dashboard";
import { Disp } from "./Styles";
class Display extends Component {
    constructor() {
        super();
        this.state = {
           item: "", 
        };
    }
    render() {
        return (
            <Disp>
                <h2>DISPLAY JS COMPONENT</h2>
                <Dashboard />
            </Disp>
        );
    }
}
export default Display;