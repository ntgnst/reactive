export const types = {
  TODO_GET_ALL: 'TODO_GET_ALL',
  TODO_GET_BY_ID: 'TODO_GET_BY_ID'
};
export const getAllTodos = dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(data => {
      dispatch({
        type: types.TODO_GET_ALL,
        payload: data
      });
    });
};
export const getTodosById = id => dispatch => {
  setTimeout(() => {
    fetch('https://jsonplaceholderrr.typicode.com/todos/' + id)
      .then(data => data.json())
      .then(data =>
        dispatch({
          type: types.TODO_GET_BY_ID,
          payload: data
        })
      )
      .catch(err => {
        throw Error(err);
      });
  }, 5000);
};
