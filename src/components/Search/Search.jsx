import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./Search.css";

function Search() {
  const { setOnSearch } = useContext(MainContext);

  const changeSearchState = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13 || e.keyCode === 114) {
      setOnSearch(e.target.value);
    }
  };

  return (
    <div className="searchContainer">
      <input
        onKeyDown={(e) => changeSearchState(e)}
        name="search"
        type="search"
        placeholder="Search..."
        className="input-search"
      />
      <i className="fas fa-search" onClick={(e) => changeSearchState(e)}></i>
    </div>
  );
}

export default Search;
