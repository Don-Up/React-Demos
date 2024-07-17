import {DECREMENT, INCREMENT, SET_VALUE} from "./ActionTypes";

const initialState = {
    count: 0,
    value: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT:
            return {...state, count: state.count+1}
        case DECREMENT:
            return {...state, count: state.count-1}
        case SET_VALUE:
            console.log(action.payload)
            return {...state, count: action.payload}
        default:
            return state
    }
}

export default counterReducer