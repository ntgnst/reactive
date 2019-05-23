export const types = {
  PHOTO_GET_ALL: 'PHOTO_GET_ALL',
  PHOTO_GET_LESS: 'PHOTO_GET_LESS',
  PHOTO_GET_BY_ID: 'PHOTO_GET_BY_ID'
};

export const getLessPhoto = count => (dispatch, getState) => {
  dispatch({ type: types.PHOTO_GET_LESS, payload: getState().photos.slice(count) });
};

export const getAllPhoto = () => async dispatch => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let data = await response.json();
    dispatch({ type: types.PHOTO_GET_ALL, payload: data.slice(1000) });
  } catch (err) {}
};

export const getPhotoById = id => ({ type: types.PHOTO_GET_BY_ID, id });
