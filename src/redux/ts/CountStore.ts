import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import logger from "./middleware/logger";

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        setValue(state, action:PayloadAction<number>){
            state.count = action.payload
        }
    }
})

export const {increment, decrement, setValue} = slice.actions

const store2 = configureStore({
    reducer: {counter: slice.reducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
})

export default store2