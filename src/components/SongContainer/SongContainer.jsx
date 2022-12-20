import React from "react";
import { useState } from "react";
import SongDetails from "../SongDetails/SongDetails";
import "./SongContainer.css";

function SongContainer({ song, setPopup }) {
  const [isOption, setIsOption] = useState(true);

  return (
    <div className="songContainer">
      <button
        id="playPauseButton"
        onClick={() => {
          setPopup(song.id);
        }}
      ></button>
      <span
        class="material-symbols-outlined"
        onClick={() => {
          setIsOption(!isOption);
        }}
      >
        more_vert
        <div id="myDropdown" className= {isOption ? "dropdown-content":"show"}>
          <div>הוסף לפלייליסט</div>
          <div>הסר מפלייליסט</div>
        </div>
      </span>
     
      <img
        src={song.thumbnail.url}
        alt={song.thumbnail.title}
        className="songImg"
      />

      <SongDetails
        name={song.title}
        artist={song.channel.name}
        time={song.duration_formatted}
        channelImg={song.channel.icon}
      />
    </div>
  );
}

export default SongContainer;
