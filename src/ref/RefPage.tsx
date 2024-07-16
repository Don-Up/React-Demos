import React, {useEffect, useRef, useState} from "react";

export const RefPage: React.FC = () => {

    // Access DOM elements
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef?.current?.focus()
    }, []);

    // State persistent
    const [count, setCount] = useState(0)
    const countRef = useRef(count);

    const handleAlertClick = () => {
        setTimeout(() => {
            alert("Count is: "+countRef.current)
        })
    }

    // Save instance variable
    const renderCount = useRef(0);
    renderCount.current+=1

    return (<div>
        <input ref={inputRef}/>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={handleAlertClick}>Show Alert</button>
        <div>Render count: {renderCount.current}</div>
    </div>)
}