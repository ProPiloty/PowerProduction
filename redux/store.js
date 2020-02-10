import {createStore, combineReducers, applyMiddleware} from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

// TODO: Add promise middleware
export const store = createStore(rootReducer);