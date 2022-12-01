import { useState } from 'react';
import Layout from './components/Layout/Layout';

import Login from "./pages/Login/Login"
import MainContext from './context/MainContext';
import './App.css';

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
      <div className="App" >
        <Layout  />
        {/* <Login/> */}
        

      </div >
    </MainContext.Provider>

  );
}

export default App;
