const reducer = require('redux');

const reducerFunction = (existingState = {current: 0}, action) => {
    if (action.type === 'inc') return {current: existingState.current + 1}
    else if (action.type === "dec") return {current: existingState.current - 1}
}

const store = reducer.createStore(reducerFunction)

export default store;

