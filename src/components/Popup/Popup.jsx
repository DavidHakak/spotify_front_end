import React, { useContext } from "react";
import YouTube from "react-youtube";
import MainContext from "../../context/MainContext";
import "./Popup.css";

function Popup() {
  const { popup, setPopup } = useContext(MainContext)
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
