import React, {useState} from "react";
import {ExpensiveComponent} from "./ExpensiveComponent";

export const UseMemoPage: React.FC = () => {
    const [count, setCount] = useState(0)

    const [a, setA] = useState(1)
    const [b, setB] = useState(2)

    return (<div>
        <ExpensiveComponent a={a} b={b}/>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setA(a + 1)}>Increment A</button>
        <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>)
}