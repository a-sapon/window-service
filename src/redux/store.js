import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  menuReducer,
  windowReducer,
  modalReducer,
  responseReducer,
  spinnerReducer,
} from './reducers';

const rootReducer = combineReducers({
  menuOnMobileOpen: menuReducer,
  window: windowReducer,
  modal: modalReducer,
  response: responseReducer,
  spinner: spinnerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());