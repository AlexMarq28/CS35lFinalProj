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
        cards: action.payload,
        loading: false,
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card._id !== action.payload),
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [action.payload, ...state.cards],
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
