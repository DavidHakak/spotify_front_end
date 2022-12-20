import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import "./Header.css";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Header() {
  const { isSearch } = useContext(MainContext);
  return (
    <div className="header">
      <Logo />
      {isSearch ? <Search /> : ""}

      <Avatar />
    </div>
  );
}

export default Header;
