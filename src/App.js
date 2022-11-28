import Layout from './components/Layout/Layout';
import './App.css';
import Popup from './components/Popup/Popup';
import { useState } from 'react';

function App() {
  const [popup, setPopup] = useState(false)

  return (
    
    <div className="App">

      <Layout setPopup={setPopup} />
      {popup ? <Popup popup={popup} setPopup={setPopup} /> : false}
    </div>
  );
}

export default App;
