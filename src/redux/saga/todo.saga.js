import { call, takeEvery, put } from "redux-saga/effects";
import { types } from "../actions/todo";

function* getAllTodos(action) {
  try {
    const res = yield call(fetch, "https://jsonplaceholder.typicode.com/todos");
    const data = yield res.json();
    yield put({
      type: types.TODO_GET_ALL_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({ type: types.TODO_GET_ALL_FAILED, payload: error });
    throw Error(error);
  }
}
function* getTodosById(action) {
  try {
    const res = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/todos/" + action.id
    );
    const data = yield res.json();
    yield put({
      type: types.TODO_GET_BY_ID_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: types.TODO_GET_BY_ID_FAILED,
      payload: error
    });
    throw error;
  }
}

export function* watchTodos() {
  yield takeEvery(types.TODO_GET_ALL_REQUEST, getAllTodos);
  yield takeEvery(types.TODO_GET_BY_ID_REQUEST, getTodosById);
}
