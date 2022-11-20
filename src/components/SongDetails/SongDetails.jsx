import React from "react";

import "./SongDetails.css";

function SongDetails(props) {
  return (
    <div className="songDetails">
      <div className="songName">{props.name}</div>
      <div className="songTime">{props.time}</div>
      <div className="songArtistName">{props.artist}</div>
    </div>
  );
}

export default SongDetails;
