import axios from "axios";
import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import MainContext from "../../context/MainContext";
import Popup from '../Popup/Popup';
function Layout() {
const {onSearch, setSongList, popup} = useContext(MainContext)


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
  }, [onSearch]);

  return (
    <div className="layout">
      <Header  />
      <Main  />
      <SideBar />
      {popup && <Popup />}
    </div>
  );
}

export default Layout;
