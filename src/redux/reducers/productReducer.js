import data from "../../MockData.json";
import { productActions } from "../actions/actionType";
import { init } from "../initData";

export function productReducer(state = init(data), action) {
  switch (action.type) {
    case productActions.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product);
    case productActions.SAVE_PRODUCT_DETAILS:
      return state.filter((product) => product.id === action.details.id).length
        ? state.map((product) => {
            if (product.id === action.details.id) {
              return action.details;
            }
            return product;
          })
        : [...state, action.details];

    default:
      return state;
  }
}
