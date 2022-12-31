import React from "react";
import { useNavigate } from "react-router-dom";
import "./Avatar.css";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Avatar() {
  const navigate = useNavigate();

  return (
    <div
      className="avatar"
      onClick={() => {
        navigate("/App/UserPlaylist");
      }}
    >
      <span className="hello">Hello</span>
      <span className="avatar-full-name">{JSON.parse(localStorage.userName)}</span>  
    </div>
  );
}

export default Avatar;
