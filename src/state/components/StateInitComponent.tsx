import React, {useState} from "react";

export const StateInitComponent: React.FC = () => {

    const [state1, setState1] = useState(0)

    const [state2] = useState(() => {
        let num = 0
        for (let i = 0; i < 100; i++) {
            num+=i
        }
        return num
    })

    return (<div>
        <div>state1 is {state1}</div>
        <button onClick={() => setState1(state1 + 1)}>Change state1</button>
        <button onClick={() => setState1(prevState => prevState+2)}>Change state1 using a callback</button>
        <div>state2 is {state2}</div>
    </div>)
}