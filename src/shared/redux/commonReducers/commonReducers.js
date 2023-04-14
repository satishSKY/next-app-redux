const initialState = {
  counter: 0,
};

// COUNTER REDUCER
export const counterReducer = (state = initialState.counter, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};
