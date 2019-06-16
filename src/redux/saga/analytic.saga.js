import { call, takeEvery, put } from "redux-saga/effects";
import { types } from "../actions/analytic";

function* sendAnalytics(action) {
  try {
    yield put({
      type: types.ANALYTIC_SUCCESS,
      payload: { id: 2, test: 3, ada: 4 }
    });
  } catch (error) {
    throw Error(error);
  }
}
export function* watchAlbums() {
    yield takeEvery(types.ANALYTIC_REQUEST, sendAnalytics);
  }
