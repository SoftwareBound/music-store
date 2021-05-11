import React from "react";
import { ProductItem } from "./index";
import data from "../MockData.json";
import "./style.css";
import { useSelector } from "react-redux";

const ProductItemContainer = () => {
  const productsList = useSelector((state) => state.productReducer);
  return (
    <div className="product-item-container">
      {productsList.map((product) => (
        <ProductItem product_data={product} />
      ))}
      {/* <ProductItem product_data={productsList[0]} />
      <ProductItem product_data={productsList[1]} />
      <ProductItem product_data={productsList[2]} />
      <ProductItem product_data={productsList[3]} /> */}
    </div>
  );
};

export default ProductItemContainer;
