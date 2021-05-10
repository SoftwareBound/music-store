import React from "react";
import { ProductItem } from "./index";
import data from "../MockData.json";
import "./style.css";

const ProductItemContainer = () => {
  return (
    <div className="product-item-container">
      <ProductItem product_data={data[0]} />
      <ProductItem product_data={data[1]} />
    </div>
  );
};

export default ProductItemContainer;
