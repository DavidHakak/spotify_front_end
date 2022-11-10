import React from "react";
import SongName from "../SongName/SongName";
import SongArtistName from "../SongArtistName/SongArtistName";
import SongTime from "../SongTime/SongTime";
import "./SongDetails.css";

function SongDetails(props) {
  return (
    <div className="songDetails">
      <SongName name={props.name} />
      <SongTime time={props.time} />
      <SongArtistName artist={props.artist} />
    </div>
  );
}

export default SongDetails;
