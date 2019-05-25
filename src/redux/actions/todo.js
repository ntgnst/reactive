export const types = {
  TODO_GET_ALL_REQUEST: "TODO_GET_ALL_REQUEST",
  TODO_GET_ALL_SUCCESS: "TODO_GET_ALL_SUCCESS",
  TODO_GET_ALL_FAILED: "TODO_GET_ALL_FAILED",
  TODO_GET_BY_ID_REQUEST: "TODO_GET_BY_ID_REQUEST",
  TODO_GET_BY_ID_SUCCESS: "TODO_GET_BY_ID_SUCCESS",
  TODO_GET_BY_ID_FAILED: "TODO_GET_BY_ID_FAILED"
};
export const getAllTodos = () => ({ type: types.TODO_GET_ALL_REQUEST });
export const getTodosById = id => ({type: types.TODO_GET_BY_ID_REQUEST, id});
