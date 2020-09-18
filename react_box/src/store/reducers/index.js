import { combineReducers } from 'redux';
import { counter } from './counter';
import { mult } from './mult';

export const rootReducer = combineReducers({
  counter,
  mult,
});
