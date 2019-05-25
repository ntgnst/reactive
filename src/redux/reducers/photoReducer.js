import { types } from '../actions/photo';

export default (state = [], action) => {
  switch (action.type) {
    case types.PHOTO_GET_ALL_SUCCESS:
      return action.payload;
    case types.PHOTO_GET_LESS_SUCCESS:
      return action.payload;
    case types.PHOTO_GET_BY_ID_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
