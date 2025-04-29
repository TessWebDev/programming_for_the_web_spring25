import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Song } from "./views/Song";
import './App.css'; 
import musicData from "./assets/music-list.json"

function App() {
  

  return (
    <>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Song data={musicData}/>} />
    </Routes>
    </>
  )
}

export default App
