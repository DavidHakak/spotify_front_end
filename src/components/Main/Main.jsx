import React from "react";
import MainContainerSongs from "../MainContainerSongs/MainContainerSongs";
import SideBar from "../SideBar/SideBar";
import "./Main.css";

function Main({songList, setPopup}) {
 
  return (
    <div className="main">
      <MainContainerSongs songList={songList} setPopup={setPopup} />
      <SideBar />
    </div>
  );
}

export default Main;
