const logger = store => next => action => {
  //store.dispatch();
  console.log(store.getState());
  console.log(action);
  next(action);
};
export default logger;
