import React, { useState } from "react";
import { useSelector } from "react-redux";
import Textarea from "../common/components/Textarea";
import Input from "../common/components/Input";
import Button from "../common/components/Button";
const ProductDetailsContainer = () => {
  const productsDetails = useSelector((state) => state.productDetailsReducer);
  const [productDetailsLocal, setProductDetailsLocal] = useState({
    id: productsDetails.id,
    Name: productsDetails.Name,
    Description: productsDetails.Description,
    Price: productsDetails.Price,
    Creation_Date: productsDetails.Creation_Date,
    imageUrl: productsDetails.ImageUrl,
  });

  if (!Object.keys(productsDetails).length) {
    return (
      <div>
        Click on any product to see his details <br />
        or add new product to the list{" "}
      </div>
    );
  }
  return (
    <div className="products-details-container">
      <div className="row details-image">
        <img src={productsDetails.ImageUrl} alt={productsDetails.Name} />
      </div>

      <div className=" col-6 details-name">
        <span>Name</span>
        <Input
          value={productDetailsLocal.Name}
          change_func={(e) =>
            setProductDetailsLocal({
              ...productDetailsLocal,
              Name: e.target.value,
            })
          }
        />
      </div>
      <div className=" col-8 details-description">
        <span>Description</span>
        <Textarea default_value={productsDetails.Description} />
      </div>
      <div className="col-6 details-price">
        <span>Price</span>
        <Input default_value={productsDetails.Price} />
      </div>
      <div className="row details-button">
        <Button btn_name="Save" btn_type="success" />
      </div>
      <button onClick={() => console.log(productDetailsLocal)}>Test</button>
    </div>
  );
};

export default ProductDetailsContainer;
