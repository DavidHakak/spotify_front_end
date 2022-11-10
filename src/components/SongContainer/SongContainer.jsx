import React from "react";
import SongDetails from "../SongDetails/SongDetails";
import "./SongContainer.css";

function SongContainer(props) {
  return (
    <div className="songContainer">
      <div className="songImg">
        <img src={props.thumbnail} alt={props.title} className="theImgOfSong" />
      </div>

      <SongDetails
        name={props.title}
        artist={props.artist}
        time={props.duration}
      />
    </div>
  );
}

export default SongContainer;
