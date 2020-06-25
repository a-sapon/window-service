import Type from './types';

const INITIAL_STATE = {
  windowType: '',
  width: 1400,
  height: 1300,
};

export const windowReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Type.SELECT_WINDOW_TYPE:
      return {
        ...state, windowType: payload,
      };

    case Type.SET_WINDOW_WIDTH:
      return {
        ...state, width: payload,
      };

    case Type.SET_WINDOW_HEIGHT:
      return {
        ...state, height: payload,
      };

    default:
      return state;
  }
};
