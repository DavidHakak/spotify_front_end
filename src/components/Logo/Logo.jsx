import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logo.css";

function Logo() {
  const navigate = useNavigate();
  return (
    <div
      className="logo"
      onClick={() => {
        navigate("/App/SearchSongs");
      }}
    >
      <img src="/image/logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
