import axios from "axios";
import { GET_PHOTOS, ADD_PHOTO, DELETE_PHOTO, PHOTOS_LOADING } from "./types";

//dispatch is where a thunk comes in, asychronous request
export const getPhotos = () => (dispatch) => {
  dispatch(setPhotosLoading());
  axios.get("/api/photos").then((res) =>
    dispatch({
      type: GET_PHOTOS,
      payload: res.data,
    })
  );
};

export const addPhoto = (photo) => (dispatch) => {
  axios.post("/api/photos", photo).then((res) =>
    dispatch({
      type: ADD_PHOTO,
      payload: res.data,
    })
  );
};

export const deletePhoto = (id) => (dispatch) => {
  axios.delete(`/api/photos/${id}`).then((Res) =>
    dispatch({
      type: DELETE_PHOTO,
      payload: id,
    })
  );
};

export const setPhotosLoading = () => {
  return {
    type: PHOTOS_LOADING,
  };
};
