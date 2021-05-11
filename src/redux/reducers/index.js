import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { productDetailsReducer } from "./productDetailsReducer";

export default combineReducers({
  productReducer,
  productDetailsReducer,
});
