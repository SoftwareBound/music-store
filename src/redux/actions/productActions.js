import { productActions } from "./actionType";

export function deleteProduct(productToDelete) {
  return {
    type: productActions.DELETE_PRODUCT,
    product: productToDelete,
  };
}
export function saveNewProductDetails(product) {
  return {
    type: productActions.SAVE_PRODUCT_DETAILS,
    details: product,
  };
}
export function sortListByName() {
  return {
    type: productActions.SORT_LIST_BY_NAME,
  };
}

export function sortListByDate() {
  return {
    type: productActions.SORT_LIST_BY_DATE,
  };
}
