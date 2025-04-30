import {Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from "./views/Home";
import { DeckDetail } from "./views/DeckDetail";


function App() { //state variable is anything that might change within your app (based on user event, or behavior), -- 

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":id" element={< DeckDetail/>} />
   </Routes>
  )
}

export default App
