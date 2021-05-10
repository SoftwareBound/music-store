import React from "react";
import { ProductItem } from "./index";
import data from "../MockData.json";
import "./style.css";

const ProductItemContainer = () => {
  return (
    <div className="product-item-container">
      <ProductItem product_data={data[0]} />
      <ProductItem product_data={data[1]} />
      <ProductItem product_data={data[2]} />
      <ProductItem product_data={data[3]} />
    </div>
  );
};

export default ProductItemContainer;
