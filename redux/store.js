import {createStore, combineReducers, applyMiddleware} from 'redux';

import userReducer from './userReducer';
import taskReducer from './taskReducer';
import projectReducer from './projectReducer';
import dayReducer from './dayReducer';

const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
  projects: projectReducer,
  day: dayReducer,
});

// TODO: Add promise middleware
export const store = createStore(rootReducer);