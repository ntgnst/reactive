import { all } from "redux-saga/effects";
import * as albumSaga from "./album.saga";
import * as todoSaga from "./todo.saga";
import * as photoSaga from "./photo.saga";
import * as analyticSaga from "./analytic.saga";

export function* rootSaga() {
  yield all([
    albumSaga.watchAlbums(),
    todoSaga.watchTodos(),
    photoSaga.watchPhotos(),
    analyticSaga.watchAlbums()
  ]);
}
