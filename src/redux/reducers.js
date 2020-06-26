import Type from './types';

const WINDOW_STATE = {
  windowType: '',
  width: 1400,
  height: 1300,
  sashes: 0, // колличество створок
  price: 0,
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