import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./Search.css";

function Search() {

  const {setOnSearch} = useContext(MainContext);

  const changeSearchState = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13 || e.keyCode === 114) {
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

      <a href="h" className="btn"  onClick={(e) => changeSearchState(e)}>
        <i className="fas fa-search" ></i>
      </a>
    </div>
  );
}

export default Search;
