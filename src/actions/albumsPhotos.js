import { get_photos } from '../API/APIphotos';
import { SET_ALBUMS, SET_PHOTOS } from '../reducers/constants';

export function getAlbums() {
  return async dispatch => {
    get_photos()
      .then(albums => {
        dispatch({ type: SET_ALBUMS, payload: albums });
      })
      .catch(e => console.log(e));
  };
}

export function setImages(photos) {
  return async dispatch => {
    dispatch({ type: SET_PHOTOS, payload: photos });
  };
}
