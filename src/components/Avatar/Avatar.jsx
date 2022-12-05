import React from "react";
import { useNavigate } from "react-router-dom";
import "./Avatar.css";

function Avatar() {
  const navigate = useNavigate();
  return (
    <div
      className="avatar"
      onClick={() => {
        navigate("/inLogin/playPlaylist");
      }}
    ></div>
  );
}

export default Avatar;
