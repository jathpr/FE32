import { createStore, applyMiddleware } from 'redux';
import {  devToolsEnhancer } from 'redux-devtools-extension';
import { counter } from './reducers/counter';

export const store = createStore(counter, devToolsEnhancer());
