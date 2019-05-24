export const types = {
  ALBUM_GET_ALL: 'ALBUM_GET_ALL_REQUEST',
  ALBUM_GET_ALL_SUCCESS: 'ALBUM_GET_ALL_SUCCESS',
  ALBUM_GET_ALL_FAILED: 'ALBUM_GET_ALL_FAILED',
  ALBUM_GET_BY_ID: 'ALBUM_GET_BY_ID_REQUEST',
  ALBUM_GET_BY_ID_SUCCES: 'ALBUM_GET_BY_ID_SUCCES',
  ALBUM_GET_BY_ID_FAILED: 'ALBUM_GET_BY_ID_FAILED'
};

export const getAllAlbum = () => ({ type: types.ALBUM_GET_ALL });

/*
export const getAllAlbum = () => async dispatch => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let data = await response.json();
    dispatch({ type: types.ALBUM_GET_ALL, payload: data });
  } catch (err) {}
};
*/
export const getAlbumById = id => ({ type: types.ALBUM_GET_BY_ID, id });
