import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {

    const counter = useSelector(store => store.counter);
    const dispatcher = useDispatch();

    const incrementHandler = () => {
        dispatcher({type: 'inc'})
    }
    const decrementhandler = () => {
        dispatcher({type: 'dec'})
    }


    const toggleCounterHandler = () => {
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementhandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
