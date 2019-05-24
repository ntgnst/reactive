import { types } from '../actions/album';

export default (state = [], action) => {
  switch (action.type) {
    case types.ALBUM_GET_ALL:
      return action.payload;
    case types.ALBUM_GET_BY_ID:
      return state.filter(item => item.id === action.id);
    default:
      return state;
  }
};
