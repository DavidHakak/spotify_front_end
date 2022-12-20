import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login"
import MyApp from './pages/MyApp/MyApp';
import MainContext from './context/MainContext';
import NotFuond from "./pages/NotFuond/NotFuond"
import UserContext from './context/UserContext';
import './App.css';

function App() {
  const [popup, setPopup] = useState(false);
  const [onSearch, setOnSearch] = useState("נתן גושן");
  const [songList, setSongList] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userFullName, setUserFullName] = useState("");
  const [playlistList, setPlaylistList] = useState([]);
  const [isSearch, setIsSearch] = useState(true);

  return (
    <MainContext.Provider value={{
      popup,
      setPopup,
      onSearch,
      setOnSearch,
      songList,
      setSongList,
      userFullName,
      setUserFullName,
      playlistList,
      setPlaylistList,
      isSearch,
      setIsSearch,
    }} >
      <UserContext.Provider value={{ userDetails, setUserDetails, }}>

        <div className="App" >
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/app/*' element={<MyApp />} />
            <Route path='*' element={<NotFuond />} />
          </Routes>
        </div >

      </UserContext.Provider>
    </MainContext.Provider>

  );
}

export default App;
