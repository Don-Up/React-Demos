import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setValue} from "./Actions";

const MyComponent = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(setValue(12))}>Set Value</button>
        </div>
    )
}

export default MyComponent