import {
    GET_PHOTOS,
    ADD_PHOTO,
    DELETE_PHOTO,
    PHOTOS_LOADING,
  } from "../actions/types";
  
  const initialState = {
    photos: [],
    loading: false,
  };
  
  //DELETE_PHOTO adjusts the photoss in the state of the Photo Frame
  //  and filters them so that if the photo id is not equal to the id we click on will be passed on
  //  meaning that the one that has the same id will be deleted from the UI
  // We will also delete the photo from the database separately
  
  export default function reduce(state = initialState, action) {
    switch (action.type) {
      case GET_PHOTOS:
        return {
          ...state,
          photos: action.payload,
          loading: false,
        };
      case DELETE_PHOTO:
        return {
          ...state,
          photos: state.photos.filter((photo) => photo._id !== action.payload),
        };
      case ADD_PHOTO:
        return {
          ...state,
          photos: [action.payload, ...state.photos],
        };
      case PHOTOS_LOADING:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  }
  