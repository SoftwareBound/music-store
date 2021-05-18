import React from "react";

const Dropdown = ({ dispatch, actions }) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sorting Options
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button
            onClick={() => dispatch(actions[0]())}
            className="dropdown-item"
          >
            Name
          </button>
          <button
            onClick={() => dispatch(actions[1]())}
            className="dropdown-item"
          >
            Recently Added
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
