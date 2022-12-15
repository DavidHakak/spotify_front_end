import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login"
import SearchSongs from './pages/SearchSongs/SearchSongs';
import UserPlaylistPage from "./pages/UserPlaylistPage/UserPlaylistPage"
import MainContext from './context/MainContext';
import NotFuond from "./pages/NotFuond/NotFuond"
import './App.css';
import UserContext from './context/UserContext';

function App() {
  const [popup, setPopup] = useState(false);
  const [onSearch, setOnSearch] = useState("נתן גושן");
  const [songList, setSongList] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userFullName, setUserFullName] = useState("");


  return (
    <MainContext.Provider value={{
      popup,
      setPopup,
      onSearch,
      setOnSearch,
      songList,
      setSongList,
      userFullName,
      setUserFullName
    }} >
      <UserContext.Provider value={{ userDetails, setUserDetails, }}>

        <div className="App" >
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/searchSongs' element={<SearchSongs />} />
            <Route path='/playPlaylist' element={<UserPlaylistPage />} />
            <Route path='*' element={<NotFuond />} />
          </Routes>
        </div >

      </UserContext.Provider>
    </MainContext.Provider>

  );
}

export default App;
