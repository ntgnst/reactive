import { types } from '../actions/todo';

export default (state = [], action) => {
  switch (action.type) {
    case types.TODO_GET_ALL_SUCCESS:
      return action.payload;
    case types.TODO_GET_BY_ID_SUCCESS:
      return [action.payload];
    default:
      return state;
  }
};
