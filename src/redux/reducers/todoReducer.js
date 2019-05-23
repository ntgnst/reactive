import { types } from '../actions/todos';

export default (state = [], action) => {
  switch (action.type) {
    case types.TODO_GET_ALL:
      return action.payload;
    case types.TODO_GET_BY_ID:
      return [action.payload];
    default:
      return state;
  }
};
