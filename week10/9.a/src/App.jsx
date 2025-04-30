import {Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from "./views/Home";
import { DeckDetail } from "./views/DeckDetail";
import deckData from "./assets/deck-data.json";


function App() { //state variable is anything that might change within your app (based on user event, or behavior), -- 

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":id" element={< DeckDetail data={deckData}/>} />
   </Routes>
  )
}

export default App
