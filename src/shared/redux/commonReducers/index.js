import { combineReducers } from 'redux';
import { counterReducer } from './commonReducers';

const commonData = {
  counter: counterReducer,
};

export default combineReducers(commonData);
