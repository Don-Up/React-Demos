interface CountState{
    count: number
}

type CountAction =
    | { type: "INCREMENT"}
    | { type: "DECREMENT"}
    | { type: "RESET"}

function countReducer(state: CountState, action: CountAction){
    switch (action.type){
        case "INCREMENT":
            return {...state, count: state.count+1}
        case "DECREMENT":
            return {...state, count: state.count-1}
        case "RESET":
            return {...state, count: 0}
        default:
            return state
    }
}

export default countReducer