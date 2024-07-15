import React from "react";
import {StateInitComponent} from "./components/StateInitComponent";
import {StateUpdateComponent} from "./components/StateUpdateComponent";

export const StatePage: React.FC = () => {
    
    return (<div>
        <StateInitComponent/>
        <hr/>
        <StateUpdateComponent/>
    </div>)
}