import Type from './types';

export const selectWindowType = type => ({
  type: Type.SELECT_WINDOW_TYPE,
  payload: type
});

export const setWindowWidth = width => ({
  type: Type.SET_WINDOW_WIDTH,
  payload: width
});

export const setWindowHeight = height => ({
  type: Type.SET_WINDOW_HEIGHT,
  payload: height
});