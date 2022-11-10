import React from "react";
import "./SongName.css";
function SongName(props) {
  return <div className="songName">{props.name}</div>;
}

export default SongName;
