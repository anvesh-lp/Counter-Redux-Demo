// const reducer = require('redux');
import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true}

const counterSlcie = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incement(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter = action.payload + state.counter
        },
        decreaseBy(state, action) {
            state.counter = action.payload - state.counter
        },
        toggleGroup(state) {
            state.showCounter = !state.showCounter
        }
    }
})

/*
    const reducerFunction = (existingState = {counter: 0, showCounter: true}, action) => {
    if (action.type === 'inc') return {counter: existingState.counter + 1, showCounter: existingState.showCounter}
    else if (action.type === "dec") return {counter: existingState.counter - 1, showCounter: existingState.showCounter}
    else if (action.type === "incr") return {
        counter: existingState.counter + action.amount,
        showCounter: existingState.counter
    }
    else if (action.type === 'toggle') return {showCounter: !existingState.showCounter, counter: existingState.counter}
    else if (action.type === "decr") return {
        counter: existingState.counter - action.amount,
        showCounter: existingState.showCounter
    }
    return existingState;
}

const store = createStore(reducerFunction)

*/


const store = configureStore({
    reducer: counterSlcie.reducer
})

export const actions = counterSlcie.actions
export default store;

