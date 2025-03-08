import Camelid from "./components/camelid"

function App() { 
  const camelids = [  // the parent
    {name: "Llama", img:"./cutellamas.jpg", lifeSpan: "about 15 to 29 years", Weight: "250 to 350 pounds", Height: "36in to 47in at shoulder, 5' to 6'5 at head", trivia: "When one llama is angry at another llama, they will stick their tongues out to express their dislike."},  //desc -- short for description
    {name: "Alpaca", img:"./alpaca.jpg", lifeSpan: "about 15 to 25 years", Weight: "110 to 175 pounds", Height: "32in to 40in at shoulder, 4' to 5' at head", trivia:"Alpacas are thought to have been domesticated more than 6,000 years ago by the Incas, who raised them for their prized fleece."}
]

  return ( // the child

    <div> 
      <h2>Camelids Information</h2>
      <Camelid
      name={camelids[0].name} 
      img={camelids[0].img}
      lifeSpan={camelids[0].lifeSpan} 
      Weight={camelids[0].Weight} 
      Height={camelids[0].Height}
      trivia={camelids[0].trivia} 
      /> 
     <Camelid
      name={camelids[1].name}
      img={camelids[1].img} 
      lifeSpan={camelids[1].lifeSpan} 
      Weight={camelids[1].Weight} 
      Height={camelids[1].Height}
      trivia={camelids[1].trivia}  
      />  
    
    </div>
  )
}

export default App;