import React from "react";
import YouTube from "react-youtube";
import "./Popup.css";

function Popup({ popup, setPopup }) {
  return (
    <div className="popup" onClick={() => setPopup(false)}>
      <div className="innerPopup" onClick={(e) => e.stopPropagation()}>
        <YouTube
          videoId={popup}
          iframeClassName="iframe"
          className="iframe"
        />
      </div>
    </div>
  );
}
export default Popup;
