import { productActions } from "./actionType";

export function deleteProduct(productToDelete) {
  return {
    type: productActions.DELETE_PRODUCT,
    product: productToDelete,
  };
}
