import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import sharedInfoReducers from './commonReducers';
import { STORE_NAME } from './constants';
import storage from './persistStorage';

// COMBINED REDUCERS
const reducers = {
  sharedInfo: sharedInfoReducers,
};

const persistConfig = {
  key: STORE_NAME,
  storage,
  whitelist: ['sharedInfo'], // place to select which state you want to persist
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);
export default persistedReducer;
