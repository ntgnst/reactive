import { put, takeEvery, call, all, fork } from 'redux-saga/effects';
import { types } from '../actions/album';

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* fetchAlbums(action) {
  const data = yield call(fetch('https://jsonplaceholder.typicode.com/albums').then(data => data.json()));
  yield put({ type: types.ALBUM_GET_ALL, payload: data });
}

function* fetchAlbumsById(action) {
  console.log('geldi');
  yield put({ type: types.ALBUM_GET_BY_ID });
}

function* watchFetchAlbums() {
  yield takeEvery(types.ALBUM_GET_ALL, fetchAlbums);
}

function* watchFetchAlbumsById() {
  yield takeEvery(types.ALBUM_GET_BY_ID, fetchAlbumsById);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchFetchAlbums()]);
}
