import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  windowReducer,
  modalReducer,
  responseReducer,
  spinnerReducer,
} from './reducers';

const rootReducer = combineReducers({
  window: windowReducer,
  modal: modalReducer,
  response: responseReducer,
  spinner: spinnerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());