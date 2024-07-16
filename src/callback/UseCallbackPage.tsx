import React, { useState, useCallback } from "react";

// 创建一个简单的子组件
const ChildComponent: React.FC<{ onButtonClick: () => void }> = React.memo(({ onButtonClick }) => {
    console.log("ChildComponent rendered");
    return <button onClick={onButtonClick}>Click me</button>;
});

export const UseCallbackPage: React.FC = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // 使用 useCallback 记住这个回调函数
    const handleButtonClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    // 更新文本的函数
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>useCallback Example</h1>
            <div>
                <label>
                    Text: <input type="text" value={text} onChange={handleTextChange} />
                </label>
            </div>
            <div>
                Count: {count}
            </div>
            <ChildComponent onButtonClick={handleButtonClick} />
        </div>
    );
};
