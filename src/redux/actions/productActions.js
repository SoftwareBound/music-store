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
