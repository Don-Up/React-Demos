import React from "react";
import {useTheme} from "./ThemeContext";

export const ThemeComponent: React.FC = () => {
    const {theme, toggleTheme} = useTheme()
    return (<div style={{background: theme === "light" ? "white" : "black"}}>
        <button onClick={toggleTheme} style={{color: theme === "light" ? "black" : "white"}}>
            Toggle Theme
        </button>
    </div>)
}