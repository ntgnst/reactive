const crashReporter = store => next => action => {
  try {
    next(action);
  } catch (err) {
    console.log('write crash err anywhere: ' + err);
  }
};
export default crashReporter;
