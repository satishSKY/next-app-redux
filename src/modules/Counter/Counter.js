import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    decrementCount,
    incrementCount,
    resetCount
} from 'shared/redux/commonActions/commonActions';

import variables from './Counter.module.scss';

function Counter() {
    const { counter } = useSelector((state) => state?.sharedInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (counter === 0) {
            dispatch(incrementCount());
        }
    });

    const handleIncrementCount = () => {
        dispatch(incrementCount());
    };
    const handleDecrementCount = () => {
        dispatch(decrementCount());
    };
    const handleResetCount = () => {
        dispatch(resetCount());
    };
    return (
        <div>
            <h1 className={variables.heading}>
                Count: <span>{counter}</span>
            </h1>
            <button onClick={handleIncrementCount}>+1</button>
            <button onClick={handleDecrementCount}>-1</button>
            <button onClick={handleResetCount}>Reset</button>
        </div>
    );
}

export default Counter;
