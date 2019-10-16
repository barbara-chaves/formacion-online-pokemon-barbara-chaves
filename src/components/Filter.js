import React from "react";
import '../stylesheets/filter.scss';

const Filter = props => {
  return (
    <div className="filter">
      <input
        className="filter_input"
        onChange={props.onInputChange}
        value={props.inputValue}
        placeholder="Search for Pokemon name or type"
      />
      {/* <i class="fas fa-search"></i> */}
    </div>
  );
};

export default Filter;
