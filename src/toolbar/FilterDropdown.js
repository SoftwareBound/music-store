import React from "react";
import Dropdown from "../common/components/Dropdown";

const FilterDropdown = () => {
  return (
    <div className="row">
      <div className="col-4">Sort By</div>
      <div className="col-6">
        <Dropdown />
      </div>
    </div>
  );
};

export default FilterDropdown;
