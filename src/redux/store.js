import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { windowReducer, modalReducer, responseReducer } from './reducers';

const rootReducer = combineReducers({
  window: windowReducer,
  modal: modalReducer,
  response: responseReducer
});

export const store = createStore(rootReducer, composeWithDevTools());