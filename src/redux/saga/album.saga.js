import { put, takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../actions/album';

function* fetchAlbums(action) {
  try {
    const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/albums', { method: 'GET' });
    const data = yield res.json();
    yield put({ type: types.ALBUM_GET_ALL_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: types.ALBUM_GET_ALL_FAILED, payload: err });
    throw Error(err);
  }
}

function* fetchAlbumsById(action) {
  const res = yield call(fetch,`https://jsonplaceholder.typicode.com/albums/${action.id}`);
  const data = yield res.json();
  yield put({ type: types.ALBUM_GET_BY_ID_SUCCES, payload: data });
}


export function* watchAlbums(){
  yield takeEvery(types.ALBUM_GET_BY_ID_REQUEST, fetchAlbumsById);
  yield takeEvery(types.ALBUM_GET_ALL_REQUEST, fetchAlbums);
  yield takeEvery(action => /^.+_FAILED/.test(action.type), errorHandler);
}

function errorHandler(err) {
  console.group('CRASH LOG LAYER: ');
  console.error(err);
  console.groupEnd();
}

