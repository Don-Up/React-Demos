import React, {useReducer} from "react";
import countReducer from "./CountReducer";

export const ReducerPage: React.FC = () => {
    const [state, dispatch] = useReducer(countReducer, {
        count: 0
    })

    return (<div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>)
}