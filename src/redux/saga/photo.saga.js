import { call, takeEvery, takeLatest, put, select } from "redux-saga/effects";
import { types } from "../actions/photo";

const getState = state => state;

function* getAllPhotos(action) {
  try {
    const res = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/photos"
    );
    const data = yield res.json();
    yield put({ type: types.PHOTO_GET_ALL_SUCCESS, payload: data.slice(1000) });
  } catch (err) {
    yield put({ type: types.PHOTO_GET_ALL_FAILED, payload: err });
  }
}

function* getLessPhoto(action) {
  try {
    const state = yield select(getState);
    yield put({
      type: types.PHOTO_GET_LESS_SUCCESS,
      payload: state.photos.slice(action.count)
    });
  } catch (error) {
    yield put({ type: types.PHOTO_GET_LESS_FAILED, payload: error });
    throw error;
  }
}

function* getPhotoById(action) {
  try {
    const state = yield select(getState);
    yield put({
      type: types.PHOTO_GET_BY_ID_SUCCESS,
      payload: state.photos.filter(item => item.id === action.id)
    });
  } catch (error) {
    yield put({ type: types.PHOTO_GET_BY_ID_FAILED, payload: error });
    throw error;
  }
}

export function* watchPhotos() {
  yield takeLatest(types.PHOTO_GET_ALL_REQUEST, getAllPhotos);
  yield takeEvery(types.PHOTO_GET_LESS_REQUEST, getLessPhoto);
  yield takeEvery(types.PHOTO_GET_BY_ID_REQUEST, getPhotoById);
}
