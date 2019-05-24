import { types } from '../actions/album';

export default (state = [], action) => {
  switch (action.type) {
    case types.ALBUM_GET_ALL_SUCCESS:
      return action.payload;
    case types.ALBUM_GET_BY_ID_SUCCES:
      return [action.payload];
    default:
      return state;
  }
};
