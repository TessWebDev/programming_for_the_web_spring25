function App () {
  const superHeros = [
    {name: "superman", colors: ["blue", "red"]},
    {name: "batman", colors: ["blue", "red"]},
    {name: "Thor", colors: ["blue", "red"]},
    {name: "Captain America", colors: ["blue", "red"]},
    {name: "Iron Man", colors: ["blue", "red"]},
    {name: "Wolverine", colors: ["blue", "red"]}
  ]
    

return (
  <div>
    <h1> Rendering Lists</h1>
    {
      superHeroes.map((hero) => {
        return (
          <div key={hero.name}>
              <h3>{hero.name}</h3>
              <ul>
                {hero.colors.map((color) => {
                  return (
                    <li key={color} style={{backgroundColor: color}} />
                  )
                })}
              </ul>
          </div>
        )
      })
    }
  </div> 
)

}

export default App