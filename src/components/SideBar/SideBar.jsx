import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";

import "./SideBar.css";

function SideBar() {
  const PORT = "http://localhost:9999";
  const [visibleList, setVisibleList] = useState(true);
  const { playlistList, setPlaylistList } = useContext(MainContext);

  useEffect(() => {
    getAllPlatlistNames();
  }, []);

  const createPlaylistInServer = (e) => {
    axios
      .post(PORT + "/api/playlist/create", {
        playlistName: e.target[0].value,
        userId: JSON.parse(localStorage._id),
      })
      .then(() => {
        getAllPlatlistNames();
      });
  };

  const getAllPlatlistNames = () => {
    axios
      .post(PORT + "/api/playlist/names", {
        user_Id: JSON.parse(localStorage._id),
      })
      .then((response) => {
        setPlaylistList(response.data);
      });
  };

  async function createNewPlaylist(e) {
    e.preventDefault();

    createPlaylistInServer(e);

    getAllPlatlistNames();

    setVisibleList(true);
  }

  return (
    <div className="sideBar">
      <button
        className="create-new-playlist"
        onClick={() => {
          setVisibleList(false);
        }}
      >
        create new playlist
      </button>
      {visibleList ? (
        <div className="list-playlist">
          {playlistList.map((v) => {
            return (
              <div className="playlist" id={v.id}>
                {v.playlistName}
              </div>
            );
          })}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            createNewPlaylist(e);
          }}
        >
          <div className="form-playlist-name">
            <input
              className="input-playlist-name"
              type="text"
              placeholder="Playlist name:"
            />
            <input className="submit-playlist-name" type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}

export default SideBar;
