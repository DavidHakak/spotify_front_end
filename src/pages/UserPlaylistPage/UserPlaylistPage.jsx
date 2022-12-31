import React, { useContext } from "react";
import MainContext from "../../context/MainContext";

import "./UserPlaylistPage.css";

function UserPlaylistPage() {
  const { playlistList, setIsSearch } = useContext(MainContext);

  setIsSearch(false);

  return (
    <div className="UserPlaylistPage">
      <div>
        <div className="container-playlist-list">
          {playlistList.map((playlist) => {
            return <div className="playlist-card">{playlist.playlistName}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserPlaylistPage;
