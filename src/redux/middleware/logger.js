const logger = store => next => action => {
  console.log(store.getState());
  console.log(action);
  next(action);
};
export default logger;
