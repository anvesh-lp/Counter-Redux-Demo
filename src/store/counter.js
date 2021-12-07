const reducer = require('redux');

const reducerFunction = (existingState = {counter: 0}, action) => {
    if (action.type === 'inc') return {counter: existingState.counter + 1}
    else if (action.type === "dec") return {counter: existingState.counter - 1}
    return existingState;
}

const store = reducer.createStore(reducerFunction)

export default store;

