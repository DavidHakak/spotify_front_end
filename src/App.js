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
  const [onSearch, setOnSearch] = useState("ישי ריבו");
  const [songList, setSongList] = useState("");



  return (
    <MainContext.Provider value={{
      popup,
      setPopup,
      onSearch,
      setOnSearch,
      songList,
      setSongList
    }} >
      <UserContext.Provider value={{}}>

        <div className="App" >
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/inLogin/searchSongs' element={<SearchSongs />} />
            <Route path='/inLogin/playPlaylist' element={<UserPlaylistPage />} />
            <Route path='*' element={<NotFuond />} />
          </Routes>
        </div >

      </UserContext.Provider>
    </MainContext.Provider>

  );
}

export default App;
