import image from "./assets/cutellamas.jpg"
function App() { 
  const camelids = [  // the parent
    {name: "Llama", lifeSpan: "about 15 to 29 years", Weight: "250 to 350 pounds", Height: "36in to 47in at shoulder, 5' to 6'5 at head"},  //desc -- short for description
    {name: "Alpaca", lifeSpan: "about 15 to 25 years", Weight: "110 to 175 pounds", Height: "32in to 40in at shoulder, 4' to 5' at head"}
]

  return ( // the child

    <div> 
      <h2>Camelids Information</h2>
      <camelids 
      name={camelids[0].name} 
      lifeSpan={camelids[0].lifeSpan} 
      Weight={camelids[0].Weight} 
      Height={camelids[0].Height} 
      />  
     <camelids
      name={camelids[1].name} 
      lifeSpan={camelids[1].lifeSpan} 
      Weight={camelids[1].Weight} 
      Height={camelids[1].Height} 
      />    
    
    </div>
  )
}

export default App;