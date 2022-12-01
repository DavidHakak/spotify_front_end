import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import SongContainer from "../SongContainer/SongContainer";
import "./MainContainerCearchSongs.css";

function MainContainerSongs() {
  const {songList, setPopup}=useContext(MainContext);



  return (
    <div className="mainContainerSongs">
      {songList ? (
        
        songList.map((song) => (
          <SongContainer key={song.title} song={song} setPopup={setPopup} />
          ))
          ) : (
            <>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
        </>
      )}
    </div>
  );
}

export default MainContainerSongs;
