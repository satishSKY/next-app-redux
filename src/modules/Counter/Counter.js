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

    return (
        <div>
            <h1 className={variables.heading}>
                Count: <span>{counter}</span>
            </h1>
            <button onClick={() => dispatch(incrementCount())}>+1</button>
            <button onClick={() => dispatch(decrementCount())}>-1</button>
            <button onClick={() => dispatch(resetCount())}>Reset</button>
        </div>
    );
}

export default Counter;
