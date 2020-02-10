import {createStore, combineReducers, applyMiddleware} from 'redux';

import userReducer from './userReducer';
import taskReducer from './taskReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
  projects: projectReducer,
});

// TODO: Add promise middleware
export const store = createStore(rootReducer);