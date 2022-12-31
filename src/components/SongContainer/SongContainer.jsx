import React from "react";
import SongDetails from "../SongDetails/SongDetails";
import AddToPlaylist from "../AddToPlaylist/AddToPlaylist";
import "./SongContainer.css";

function SongContainer({ song, setPopup }) {
  return (
    <div className="songContainer">
      <button
        id="playPauseButton"
        onClick={() => {
          setPopup(song.id);
        }}
      ></button>
      <AddToPlaylist />
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
