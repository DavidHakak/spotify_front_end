import React from "react";
import SongDetails from "../SongDetails/SongDetails";
import "./SongContainer.css";

function SongContainer({ song, setPopup }) {
  return (
    <div
      className="songContainer"
      onClick={() => {
        setPopup(song.id);
      }}
    >
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
