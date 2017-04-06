import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses // ES6 short hand property name
});

export default rootReducer;
