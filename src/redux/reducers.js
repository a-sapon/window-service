import Type from './types';

export const menuReducer = (state = false, { type }) => {
  switch (type) {
    case Type.TOGGLE_MENU_ON_MOBILE:
      return !state;

    case Type.CLOSE_MENU_ON_SWIPE:
      return false;

    default:
      return state;
  }
};

const WINDOW_STATE = {
  windowType: '',
  width: 1400,
  height: 1300,
  sashes: 0, // колличество створок
  price: '4 067,70 грн.',
};

export const windowReducer = (state = WINDOW_STATE, { type, payload }) => {
  switch (type) {
    case Type.SELECT_WINDOW_TYPE:
      return { ...state, windowType: payload };

    case Type.SET_WINDOW_WIDTH:
      return { ...state, width: payload };

    case Type.SET_WINDOW_HEIGHT:
      return { ...state, height: payload };

    case Type.SET_SASHES_NUMBER:
      return { ...state, sashes: payload };

    case Type.SET_PRICE:
      return { ...state, price: payload };

    default:
      return state;
  }
};

const MODAL_STATE = {
  priceModalOpen: false,
  formResponseModalOpen: false,
};

export const modalReducer = (state = MODAL_STATE, { type }) => {
  switch (type) {
    case Type.OPEN_PRICE_MODAL:
      return { ...state, priceModalOpen: true };

    case Type.CLOSE_PRICE_MODAL:
      return { ...state, priceModalOpen: false };

    case Type.OPEN_RESPONSE_MODAL:
      return { ...state, formResponseModalOpen: true };

    case Type.CLOSE_RESPONSE_MODAL:
      return { ...state, formResponseModalOpen: false };

    default:
      return state;
  }
};

export const responseReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.SET_RESPONSE:
      return payload;

    default:
      return state;
  }
};

export const spinnerReducer = (state = false, { type }) => {
  switch (type) {
    case Type.SPINNER_ON:
      return true;

    case Type.SPINNER_OFF:
      return false;

    default:
      return state;
  }
};
