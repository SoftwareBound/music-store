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
    case productActions.SORT_LIST_BY_NAME:
      return [...state].sort(function (a, b) {
        var nameA = a.Name.toUpperCase();
        var nameB = b.Name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    case productActions.SORT_LIST_BY_DATE:
      return [...state].sort(function (a, b) {
        var nameA = a.Creation_Date.toUpperCase();
        var nameB = b.Creation_Date.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    default:
      return state;
  }
}
