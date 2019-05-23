import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import photoReducer from './reducers/photoReducer';
import photos from './defaultData/photos';
import todoReducer from './reducers/todoReducer';
import todos from './defaultData/todos';
import logger from './middleware/logger';
import crashReporter from './middleware/crashReporter';

const allEnhancers = compose(
  applyMiddleware(crashReporter, logger, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  combineReducers({ todos: todoReducer, photos: photoReducer }),
  { todos: todos, photos: photos },
  allEnhancers
);

export default store;
