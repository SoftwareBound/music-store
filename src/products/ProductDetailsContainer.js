import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Textarea from "../common/components/Textarea";
import Input from "../common/components/Input";
import Button from "../common/components/Button";
import {
  isNameValid,
  isPriceValid,
  isDescriptionValid,
} from "../common/functions/detailsValidation";
import { saveNewProductDetails } from "../redux/actions/productActions";
const ProductDetailsContainer = () => {
  const dispatch = useDispatch();
  const productsDetails = useSelector((state) => state.productDetailsReducer);
  const [productDetailsLocal, setProductDetailsLocal] = useState({
    id: "",
    Name: "",
    Description: "",
    Price: "",
    Creation_Date: "",
    imageUrl: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [validationObject, setValidationObject] = useState({
    name: true,
    description: true,
    price: true,
  });
  useEffect(() => {
    if (productsDetails.id !== undefined) {
      setProductDetailsLocal({
        id: productsDetails.id,
        Name: productsDetails.Name,
        Description: productsDetails.Description,
        Price: productsDetails.Price,
        Creation_Date: productsDetails.Creation_Date,
        ImageUrl: productsDetails.ImageUrl,
      });
    }
  }, [productsDetails]);
  useEffect(() => {
    if (Object.values(validationObject).includes(false)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [validationObject]);

  const validateField = (data) => {
    const [field_name, value] = data;
    setValidationObject({ ...validationObject, [field_name]: value });
  };
  const saveData = () => {
    dispatch(saveNewProductDetails(productDetailsLocal));
  };

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
          title="name"
          value={productDetailsLocal.Name}
          change_func={(e) =>
            setProductDetailsLocal({
              ...productDetailsLocal,
              Name: e.target.value,
            })
          }
          valid_func={isNameValid}
          validation={validateField}
        />
      </div>
      <div className=" col-8 details-description">
        <span>Description</span>
        <Textarea
          title="description"
          value={productDetailsLocal.Description}
          change_func={(e) =>
            setProductDetailsLocal({
              ...productDetailsLocal,
              Description: e.target.value,
            })
          }
          valid_func={isDescriptionValid}
          validation={validateField}
        />
      </div>
      <div className="col-6 details-price">
        <span>Price</span>
        <Input
          title="price"
          value={productDetailsLocal.Price}
          change_func={(e) =>
            setProductDetailsLocal({
              ...productDetailsLocal,
              Price: e.target.value,
            })
          }
          valid_func={isPriceValid}
          validation={validateField}
        />
      </div>
      <div className="row details-button">
        <Button
          btn_name="Save"
          btn_type="success"
          isDisabled={!isValid}
          btn_func={saveData}
        />
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
