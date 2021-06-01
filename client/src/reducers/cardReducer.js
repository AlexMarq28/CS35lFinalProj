import {
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  CARDS_LOADING,
} from "../actions/types";

const initialState = {
  cards: [],
  loading: false,
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_CARD:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_CARD:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case CARDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
