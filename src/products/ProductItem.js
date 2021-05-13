import React from "react";
import "./style.css";
import Button from "../common/components/Button";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";
import { displayProductDetails } from "../redux/actions/productDetailsActions";
const ProductItem = ({ product_data }) => {
  const dispatch = useDispatch();

  const removeProductFromList = () => {
    dispatch(deleteProduct(product_data.id));
  };
  const displayDetails = () => {
    dispatch(displayProductDetails(product_data));
  };
  console.log(product_data.ImageUrl);
  return (
    <div className="row product-item">
      <div className="col-2 product-item-img">
        <img
          src={product_data.ImageUrl}
          alt={product_data.Description}
          width="50px"
          height="50px"
        />
      </div>
      <div className="col-7 product-item-body" onClick={() => displayDetails()}>
        <span className="product-item-title"> {product_data.Name}</span>

        <span className="product-item-description">
          {`${product_data.Description.substring(
            0,
            product_data.Description.length / 2
          )}...`}
        </span>
      </div>
      <div className="col-3 product-item-button">
        <Button
          btn_name="Delete"
          btn_type="danger"
          btn_func={removeProductFromList}
        />
      </div>
    </div>
  );
};

export default ProductItem;
