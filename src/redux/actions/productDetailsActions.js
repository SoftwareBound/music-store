import { productDetailsActions } from "./actionType";

export function displayProductDetails(product_details) {
  return {
    type: productDetailsActions.DISPLAY_PRODUCT_DETAILS,
    details: product_details,
  };
}

export function checkProductExistInList(list) {
  return {
    type: productDetailsActions.CHECK_PRODUCT_EXIST,
    products: list,
  };
}
