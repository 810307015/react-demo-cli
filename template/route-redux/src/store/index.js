import { createStore, combineReducers, applyMiddleware } from "redux";

import index from 'Reducers';
import { promiseMiddleware, LoggerMiddleware } from 'Utils/reduxUtil';

const reducers = combineReducers({
  index
});

const store = createStore(
  reducers, 
  applyMiddleware(
    promiseMiddleware, 
    LoggerMiddleware
  )
);

export default store;