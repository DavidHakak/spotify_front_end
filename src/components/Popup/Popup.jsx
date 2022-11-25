import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./Popup.css";

function Popup({ popup, setPopup }) {
    //console.log(popup);

  
    return (
      <div className="popup" onClick={() => setPopup(false)}>
        <div className="innerPopup" onClick={(e) => e.stopPropagation()}>
          <button className="buttonClose" onClick={() => setPopup(false)}>
            X
          </button>
       
        </div>
      </div>
    );
  }
export default Popup;
