import React from "react";
import MyComponent from "./js/MyComponent";
import MyComponent1 from "./js/MyComponent1";
import MyComponent2 from "./js/MyComponent2";
import CountComponent from "./ts/CountComponent";
import {Provider} from "react-redux";
import store1 from "./js/store1";

export const ReduxPage: React.FC = () => {
    return (<div>
        <MyComponent/>
        <MyComponent1/>
        <Provider store={store1}>
            <MyComponent2/>
        </Provider>
        <CountComponent/>
    </div>)
}