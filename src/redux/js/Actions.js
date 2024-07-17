import {DECREMENT, INCREMENT, SET_VALUE} from "./ActionTypes";

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const setValue = (value) => ({
    type: SET_VALUE,
    payload: value
})