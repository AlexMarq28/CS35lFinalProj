import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
  item: itemReducer,
  photo: photoReducer
});
