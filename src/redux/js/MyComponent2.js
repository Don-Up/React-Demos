import {Provider, useDispatch, useSelector} from "react-redux";
import store1, {decrement, increment, setValue} from "./store1";

const MyComponent2 = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
        </div>
    )
}

export default MyComponent2