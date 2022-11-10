import React from "react";
import "./SongTime.css";

function SongTime(props) {
  return <div className="songTime">{props.time}</div>;
}

export default SongTime;
