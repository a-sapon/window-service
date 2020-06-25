import Type from './types';

const INITIAL_STATE = {
  windowType: '',
  width: 0,
  height: 0
};

export const windowReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Type.SELECT_WINDOW_TYPE:
      return {
        ...state,
        windowType: payload
      }

    default:
      return state;
  }
};