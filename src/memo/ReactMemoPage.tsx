import React, {useState} from "react";

const ChildComponent: React.FC<{count: number}> = ({count})=> {
    console.log("ChildComponent rendered")
    return <div>Count: {count}</div>
}

const MemoizedChildComponent = React.memo(ChildComponent)

export const ReactMemoPage: React.FC = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const incrementCount = () => {
        setCount(count+1)
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (<div>
        <h1>React.memo Example</h1>
        <button onClick={incrementCount}>Increment Count</button>
        <input type={"text"} value={text} onChange={handleTextChange} placeholder={"type something"}/>
        <MemoizedChildComponent count={count}/>
    </div>)
}