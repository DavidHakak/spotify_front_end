import React, { useContext } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import MainContext from "../../context/MainContext";
import "./Popup.css";

function Popup() {
  const { popup, setPopup } = useContext(MainContext);

  const onPlay: YouTubeProps["onPlay"] = (event) => {
    event.target.getCurrentTime();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="popup" onClick={() => setPopup(false)}>
      <div className="innerPopup" onClick={(e) => e.stopPropagation()}>
        <YouTube
          opts={opts}
          videoId={popup}
          onPlay={onPlay}
          iframeClassName="iframe"
          className="iframe"
        />
      </div>
    </div>
  );
}

export default Popup;
