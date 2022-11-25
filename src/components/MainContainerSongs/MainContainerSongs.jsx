import React from "react";
import SongContainer from "../SongContainer/SongContainer";
import "./MainContainerSongs.css";

function MainContainerSongs({ songList, setPopup }) {
  return (
    <div className="mainContainerSongs">
      {songList ? (
        songList.results.map((song) => (
          <SongContainer key={song.title} song={song} setPopup={setPopup} />
        ))
      ) : (
        <div class="lds-hourglass"></div>
      )}
    </div>
  );
}

export default MainContainerSongs;
