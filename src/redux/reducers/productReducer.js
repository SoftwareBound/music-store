import data from "../../MockData.json";
import { productActions } from "../actions/actionType";
export function productReducer(state = data, action) {
  switch (action.type) {
    case productActions.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product);
    case productActions.SAVE_PRODUCT_DETAILS:
      const updatedList = state.map((product) => {
        if (product.id === action.details.id) {
          return action.details;
        }
        return product;
      });
      return updatedList;
    default:
      return state;
  }
}
