import { productDetailsActions } from "../actions/actionType";
import { v4 as uniqueID } from "uuid";
import { imageUrls } from "../../common/constants/urls";
import { parseDateToString } from "../../common/functions/dateFunctions";
export function productDetailsReducer(state = {}, action) {
  switch (action.type) {
    case productDetailsActions.DISPLAY_PRODUCT_DETAILS:
      return action.details;
    case productDetailsActions.CHECK_PRODUCT_EXIST:
      return action.products.includes(state) ? state : {};
    case productDetailsActions.ADD_NEW_PRODUCT:
      return {
        id: uniqueID(),
        Name: "",
        Description: "",
        Price: "",
        Creation_Date: parseDateToString(),
        ImageUrl: imageUrls.DEFAULT_IMAGE,
      };
    default:
      return state;
  }
}
