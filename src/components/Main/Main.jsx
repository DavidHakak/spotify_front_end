import React from "react";
import MainContainerSongs from "../MainContainerSongs/MainContainerSongs";
import SideBar from "../SideBar/SideBar";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <MainContainerSongs />
      <SideBar />
    </div>
  );
}

export default Main;