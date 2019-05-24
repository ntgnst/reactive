import { put, takeEvery, call, all } from 'redux-saga/effects';
import { types } from '../actions/album';

function* fetchAlbums(action) {
  try {
    const res = yield call(fetch, 'https://jsonplaceholderrrr.typicode.com/albums', { method: 'GET' });
    const data = yield res.json();
    yield put({ type: types.ALBUM_GET_ALL_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: types.ALBUM_GET_ALL_FAILED, payload: err });
    throw Error(err);
  }
}

function* fetchAlbumsById(actions) {
  const data = yield call(() => fetch('https://jsonplaceholder.typicode.com/albums/' + actions.id).then(data => data.json()));
  yield put({ type: types.ALBUM_GET_BY_ID_SUCCES, payload: data });
}

function* watchFetchAlbums() {
  yield takeEvery(types.ALBUM_GET_ALL, fetchAlbums);
}

function* watchFetchAlbumsById() {
  yield takeEvery(types.ALBUM_GET_BY_ID, fetchAlbumsById);
}

function errorHandler(err) {
  console.group('CRASH LOG LAYER: ');
  console.log(err);
  console.groupEnd();
}

function* watchError() {
  yield takeEvery(action => /^.+_FAILED/.test(action.type), errorHandler);
}

export default function* rootSaga() {
  yield all([watchError(), watchFetchAlbums(), watchFetchAlbumsById()]);
}
