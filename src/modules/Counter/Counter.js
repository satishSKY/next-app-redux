import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    decrementCount,
    incrementCount,
    resetCount
} from 'shared/redux/commonActions/commonActions';

function Counter() {
    const { counter } = useSelector((state) => state?.sharedInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (counter === 0) {
            dispatch(incrementCount());
        }
    });

    const [abc, setAbc] = useState('');

    useEffect(() => {
        if (abc === 'abc') {
            setAbc('ddd');
        }
    });

    var a = 'abc';

    return (
        <div>
            <h1>
                Count: <span>{counter}</span>
            </h1>
            <button onClick={() => dispatch(incrementCount())}>+1</button>
            <button onClick={() => dispatch(decrementCount())}>-1</button>
            <button onClick={() => dispatch(resetCount())}>Reset</button>
        </div>
    );
}

export default Counter;
