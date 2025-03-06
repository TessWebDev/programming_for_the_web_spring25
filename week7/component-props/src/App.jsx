import Color from "./components/color.jsx";
function App() { 
  const colorData = [  // the parent
    {name: "Royal Blue", hex: "#0000ff", desc: "A calming color"},  //desc -- short for description
    {name: "Mint Green", hex: "#98ff98", desc: "Refreshing"},
    {name: "Olive Drab", hex: "#6b8e23", desc: "I love olives"},
]

  return ( // the child

    <div> 
      <h2>Colors</h2>
      <Color 
      name={colorData[0].name} 
      desc={colorData[0].desc} 
      hex={colorData[0].hex} 
      />  
      <Color 
      name={colorData[1].name} 
      desc={colorData[1].desc} 
      hex={colorData[1].hex} 
      />   
      <Color 
      name={colorData[2].name} 
      desc={colorData[2].desc} 
      hex={colorData[2].hex} 
      />   
    
    </div>
  )
}

export default App;