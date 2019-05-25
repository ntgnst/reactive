import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import albumReducer from "./reducers/albumReducer";
import albums from "./defaultData/albums";
import crashReporter from "./middleware/crashReporter";
import logger from "./middleware/logger";
import photoReducer from "./reducers/photoReducer";
import photos from "./defaultData/photos";
import { rootSaga } from "./saga/index.saga";
import todoReducer from "./reducers/todoReducer";
import todos from "./defaultData/todos";

const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    console.group("SAGA ERROR HANDLER");
    console.error(error);
    console.groupEnd();
  }
});

const allEnhancers = composeWithDevTools(
  applyMiddleware(crashReporter, logger, thunk, sagaMiddleware)
);

const store = createStore(
  combineReducers({
    todos: todoReducer,
    photos: photoReducer,
    albums: albumReducer
  }),
  { todos: todos, photos: photos, albums: albums },
  allEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
