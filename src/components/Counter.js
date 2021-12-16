import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {


    const counter = useSelector(store => store.counter);
    const showCounter = useSelector(store => store.showCounter);
    const dispatcher = useDispatch();

    const incrementHandler = () => {
        dispatcher({type: 'inc'})
    }

    const decrementhandler = () => {
        dispatcher({type: 'dec'})
    }

    const toggleCounterHandler = () => {
        dispatcher({type: "toggle"})
    };

    function increaseHandler() {
        dispatcher({type: 'incr', amount: 5})
    }

    function decreasehandler() {
        dispatcher({type: 'decr', amount: 5})

    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementhandler}>Decrement</button>
            </div>
            <div>
                <button onClick={increaseHandler}>Increase By 5</button>
                <button onClick={decreasehandler}>Decrease By 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
