import React from "react";
import { useNavigate } from "react-router-dom";
import "./Avatar.css";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

function Avatar() {
  const { userFullName } = useContext(MainContext);

  const navigate = useNavigate();

  return (
    <div
      className="avatar"
      onClick={() => {
        navigate("/playPlaylist");
      }}
    >
      <span className="hello">Hello</span>
      <span className="avatar-full-name">{userFullName}</span>  
    </div>
  );
}

export default Avatar;
