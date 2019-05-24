import { put, takeEvery, call, all, takeLatest } from 'redux-saga/effects';
import { types } from '../actions/album';

function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* fetchAlbums() {
  console.log('================================ geldi get all ========================================');
  const data = yield call(fetch('https://jsonplaceholder.typicode.com/albums').then(data => data.json()));
  yield put({ type: types.ALBUM_GET_ALL, payload: data });
}

export function* fetchAlbumsById(actions) {
  console.log('================================ geldi byid ========================================');
  yield put({ type: types.ALBUM_GET_BY_ID });
}

export function* watchFetchAlbums() {
  yield takeEvery(types.ALBUM_GET_ALL, fetchAlbums);
}

export function* watchFetchAlbumsById() {
  yield takeEvery(types.ALBUM_GET_BY_ID, fetchAlbumsById);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchFetchAlbums(), watchFetchAlbumsById()]);
}
