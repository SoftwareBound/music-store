import React from "react";
import Button from "../common/components/Button";
import { useDispatch } from "react-redux";
import { addNewProductToList } from "../redux/actions/productDetailsActions";

const AddButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      btn_name="+Add"
      btn_type="btn btn-success"
      btn_func={() => {
        dispatch(addNewProductToList());
      }}
    />
  );
};

export default AddButton;
