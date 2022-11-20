import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Logo />

      <Search setOnSearch={props.setOnSearch} />

      <Avatar />
    </div>
  );
}

export default Header;
