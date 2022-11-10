import React from "react";
import "./SongArtistName.css";

function SongArtistName(props) {
  return <div className="songArtistName">{props.artist}</div>;
}

export default SongArtistName;
