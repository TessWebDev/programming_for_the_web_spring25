import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/Home';
import { Llamas } from './views/Llamas';
import { Alpaca } from './views/Alpaca';

function App() {


  return (
    <>
    {/* Navigation here */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Llamas">Llamas</Link></li>
      <li><Link to="/Alpaca">Alpaca</Link></li>
    </ul>

    {/* Routes here */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Llamas" element={<Llamas />} />
      <Route path="/Alpaca" element={<Alpaca />} />
    </Routes>
    </>
  )
}

export default App
