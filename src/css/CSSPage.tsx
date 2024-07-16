import React, {useState} from "react";
import "./style.css"
import styles from "./style.module.css"
import "./styles.scss"
import classNames from "classnames";

export const CSSPage: React.FC<{isActive?: boolean}> = ({isActive = false}) => {

    const divClass = classNames("bg", {active: isActive})

    return (<div>
        {/*demo using css files, css modules, inline styles*/}
        <div
            className={`container ${styles.container}`}
            style={{fontSize: 30}}>
            Hello World
        </div>

        {/*demo using SCSS*/}
        <div className={"bg"}>Hello SCSS</div>

        {/*demo dynamic styles*/}
        <div className={divClass}>Dynamic Styles</div>
    </div>)
}