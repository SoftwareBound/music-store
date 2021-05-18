import React from "react";
import Dropdown from "../common/components/Dropdown";
import { useDispatch } from "react-redux";
import {
  sortListByName,
  sortListByDate,
} from "../redux/actions/productActions";
const FilterDropdown = () => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-4">Sort By</div>
      <div className="col-6">
        <Dropdown
          dispatch={dispatch}
          actions={[sortListByName, sortListByDate]}
        />
      </div>
    </div>
  );
};

export default FilterDropdown;
