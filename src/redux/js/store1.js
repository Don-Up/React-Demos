import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        setValue(state, action) {
            state.count = action.payload
        }
    }
})

export const {increment, decrement, setValue} = slice.actions

const store1
    = configureStore({reducer: {counter: slice.reducer}})

export default store1