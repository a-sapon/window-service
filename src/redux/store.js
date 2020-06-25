import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { windowReducer } from './reducers';

export const store = createStore(windowReducer, composeWithDevTools());