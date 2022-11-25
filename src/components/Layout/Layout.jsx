import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

function Layout({setPopup}) {
  const [onSearch, setOnSearch] = useState("ישי ריבו");
  const [response, setResponse] = useState("");

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
        setResponse(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [onSearch]);

  return (
    <div className="layout">
      <Header setOnSearch={setOnSearch} />
      <Main songList={response.data} setPopup={setPopup}/>
    </div>
  );
}

export default Layout;
