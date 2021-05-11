import React, { useEffect } from "react";
import { ProductItem } from "./index";
import { checkProductExistInList } from "../redux/actions/productDetailsActions";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

const ProductItemContainer = () => {
  const productsList = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(checkProductExistInList(productsList));
  }, [productsList, dispatch]);

  return (
    <div className="product-item-container">
      {productsList.map((product) => (
        <ProductItem key={product.id} product_data={product} />
      ))}
    </div>
  );
};

export default ProductItemContainer;
