import React from "react";
import {ThemeProvider} from "./ThemeContext";
import {ThemeComponent} from "./ThemeComponent";

export const ContextPage: React.FC = () => {

    return (<ThemeProvider>
        <ThemeComponent/>
    </ThemeProvider>)
}