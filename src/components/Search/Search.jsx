import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="container">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="input"
      />

      <a href="h" className="btn">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
}

export default Search;
