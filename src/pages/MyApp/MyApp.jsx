import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import MainContext from "../../context/MainContext";
import Popup from "../../components/Popup/Popup";
import NotFuond from "../NotFuond/NotFuond";
import UserPlaylistPage from "../UserPlaylistPage/UserPlaylistPage";
import MainContainerCearchSongs from "../../components/MainContainerCearchSongs/MainContainerCearchSongs";
import Tests from "../Tests/Tests";
import "./MyApp.css";

function Layout() {
  const { onSearch, setSongList, popup } = useContext(MainContext);
 

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://simple-youtube-search.p.rapidapi.com/search",
      params: { query: onSearch, safesearch: "false" },
      headers: {
        "X-RapidAPI-Key": "bfc7dd588amsh8d9043b2a79be10p1b4cdajsnced66a1c1d60",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSongList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [onSearch, setSongList]);

  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="SearchSongs" element={<MainContainerCearchSongs />} />
        <Route path="UserPlaylist" element={<UserPlaylistPage />} />
        <Route path="tests" element={<Tests />} />
        <Route path="*" element={<NotFuond />} />
      </Routes>
      <SideBar />
      {popup && <Popup />}
    </div>
  );
}

export default Layout;
