import React, { useState } from "react";
import { useContext } from "react";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import MainContext from "../../context/MainContext";

import "./AddToPlaylist.css";

function AddToPlaylist() {
  const { playlistList } = useContext(MainContext);
  const [open, setOpen] = useState(false);

  return (
    // <div
    //   className="addToPlaylist"
    //   onClick={() => {
    //     setAddToPlaylist(!addToPlaylist);
    //   }}
    //   onMouseLeave={() => {
    //     setAddToPlaylist(false);
    //   }}
    // >
    //   ...
    //   {addToPlaylist ? (
    //     <div class="dropup">
    //       <button class={addToPlaylist ? "dropbtn" : "dropup-active"}>
    //         Add to playlist
    //       </button>
    //       <ul class="dropup-content">
    //         {playlistList.map((playlist) => (
    //           <li id={playlist._id}> {playlist.playlistName}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     ""
    //   )}
    // </div>



    
    function DropDirectioExample() {
      return (
        <>
          <div className="mb-2">
            {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
              (direction) => (
                <DropdownButton
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={` Drop ${direction} `}
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              ),
            )}
          </div>
    
          <div>
            {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
              (direction) => (
                <SplitButton
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Drop ${direction}`}
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              ),
            )}
          </div>
        </>
      );
    }
    
   
  );
}

export default AddToPlaylist;
