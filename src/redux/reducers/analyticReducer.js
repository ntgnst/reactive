import { types } from "../actions/analytic";

export default (state = [], action) => {
  switch (action.type) {
    case types.ANALYTIC_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};