import './App.css'
import {useState} from "react"; //part of the react library -- use state is a HOOK -- a function that can be used inside a react component or inside another hook. It always has to be top level (cannot used in a nested function.)


function App() {
  // const [emotion, setEmotion] = useState("whatever"); //don't update variable with react // emotion=whatever
  const [scoreObj, setScoreObj] = useState({left: 0, right:0});
  function incrementRightScore () {
    const newScore = {
      left: scoreObj.left,
      right: scoreObj.right + 1
    }
    setScoreObj(newScore);
  }

  const [camelImage, setCamelImage] = useState();

  return (
    <>
      <h1>Llamas OR Alpacas</h1>
      <h2>You Choose!</h2>
      
      <div className="button">
        
        <button onClick={() => {
          setScoreObj({...scoreObj, left: scoreObj.left + 1});
          setCamelImage('./cutellamas.jpg')
        }}> Llamas </button>
      
      </div>

      <div className="button">
        
        <button onClick={() => {
          setScoreObj({...scoreObj, right: scoreObj.right + 1});
          setCamelImage('./alpaca.jpg')
        }}> Alpacas </button>
      
      </div>
      
      
      <div className="displayimage">
        <img src={camelImage}></img>
      </div>
      
      <div>
        <h2>Score</h2>
        Llamas {scoreObj.left} | Alpachas {scoreObj.right}
      </div>
      
       
    </>
  )
}

export default App
