import { productDetailsActions } from "../actions/actionType";

export function productDetailsReducer(state = {}, action) {
  switch (action.type) {
    case productDetailsActions.DISPLAY_PRODUCT_DETAILS:
      return action.details;
    case productDetailsActions.CHECK_PRODUCT_EXIST:
      return action.products.includes(state) ? state : {};

    default:
      return state;
  }
}
