import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./Search.css";

function Search() {

  const {setOnSearch} = useContext(MainContext);

  const changeSearchState = (e) => {
    if (e.key === "Enter") {
      setOnSearch(e.target.value);
    }
  };

  return (
    <div className="searchContainer">
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
