import Type from './types';

export const selectWindowType = type => ({
  type: Type.SELECT_WINDOW_TYPE,
  payload: type
});