import {connect} from "react-redux";
import {decrement, increment, setValue} from "./Actions";

const MyComponent1 = ({count, increment, decrement, setValue}) => {
    return (<div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setValue(12)}>Set Value</button>
    </div>)
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = {
    increment, decrement, setValue
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent1)