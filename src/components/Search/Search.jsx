import React from "react";
import "./Search.css";

function Search(props) {
  const changeSearchState = (e) => {
    if (e.key === "Enter") {
      props.setOnSearch(e.target.value);
    }
  };
  return (
    <div className="container">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="input"
        onKeyDown={(e) => changeSearchState(e)}
      />

      <a href="h" className="btn">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
}

export default Search;
