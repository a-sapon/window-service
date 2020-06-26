import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { windowReducer, modalReducer } from './reducers';

const rootReducer = combineReducers({
  window: windowReducer,
  modal: modalReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());