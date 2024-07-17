// MyComponent2.tsx
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store1, { increment, decrement, setValue } from "../ts/CountStore";

const MyComponent = () => {
    // `useDispatch` and `useSelector` must be used within `Provider
    const dispatch = useDispatch();
    const count = useSelector((state:{counter:{count:number}}) => state.counter.count)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
        </div>
    );
};

const CountComponent = () => {
    return (
        <Provider store={store1}>
            <MyComponent />
        </Provider>
    );
};

export default CountComponent;
