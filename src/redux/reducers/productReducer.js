import data from "../../MockData.json";
import { productActions } from "../actions/actionType";
export function productReducer(state = data, action) {
  switch (action.type) {
    case productActions.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product);

    default:
      return state;
  }
}
