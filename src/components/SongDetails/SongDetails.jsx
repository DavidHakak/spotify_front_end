import React from "react";

import "./SongDetails.css";

function SongDetails({ name, artist, time, channelImg }) {
  return (
    <div className="songDetails">
      <div className="divSongDetails">
        <h3 className="songName fonts">{name}</h3>
        <div className="divSongTimeAndArtist">
          <div className="songTime fonts">{time}</div>
          <div className="songArtistName fonts">{artist}</div>
        </div>
      </div>
      <img className="channelImg" src={channelImg} alt={artist} />
    </div>
  );
}

export default SongDetails;
