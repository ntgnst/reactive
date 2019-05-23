import { types } from '../actions/photo';

export default (state = [], action) => {
  switch (action.type) {
    case types.PHOTO_GET_ALL:
      return action.payload;
    case types.PHOTO_GET_LESS:
      return action.payload;
    case types.PHOTO_GET_BY_ID:
      return state.filter(item => item.id === action.id);
    default:
      return state;
  }
};
