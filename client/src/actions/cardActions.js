import axios from "axios";
import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING } from "./types";
//gets token and puts it in header
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

//dispatch is where a thunk comes in, asychronous request
export const getCards = () => (dispatch) => {
  dispatch(setCardsLoading());
  axios
    .get("/api/cards")
    .then((res) =>
      dispatch({
        type: GET_CARDS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addCard = (card) => (dispatch, getState) => {
  axios
    .post("/api/cards", card, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_CARD,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteCard = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/cards/${id}`, tokenConfig(getState))
    .then((Res) =>
      dispatch({
        type: DELETE_CARD,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setCardsLoading = () => {
  return {
    type: CARDS_LOADING,
  };
};
