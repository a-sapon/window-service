import Type from './types';

export const toggleMenuOnMobile = () => ({
  type: Type.TOGGLE_MENU_ON_MOBILE,
});

export const selectWindowType = (type) => ({
  type: Type.SELECT_WINDOW_TYPE,
  payload: type,
});

export const setWindowWidth = (width) => ({
  type: Type.SET_WINDOW_WIDTH,
  payload: width,
});

export const setWindowHeight = (height) => ({
  type: Type.SET_WINDOW_HEIGHT,
  payload: height,
});

export const setSashesNumber = (num) => ({
  type: Type.SET_SASHES_NUMBER,
  payload: Number(num),
});

export const setPrice = (price) => ({
  type: Type.SET_PRICE,
  payload: price,
});

export const openPriceModal = () => ({
  type: Type.OPEN_PRICE_MODAL,
});

export const closePriceModal = () => ({
  type: Type.CLOSE_PRICE_MODAL,
});

export const openResponseModal = () => ({
  type: Type.OPEN_RESPONSE_MODAL,
});

export const closeResponseModal = () => ({
  type: Type.CLOSE_RESPONSE_MODAL,
});

export const setResponse = (response) => ({
  type: Type.SET_RESPONSE,
  payload: response,
});

export const spinnerON = () => ({
  type: Type.SPINNER_ON,
});

export const spinnerOFF = () => ({
  type: Type.SPINNER_OFF,
});
