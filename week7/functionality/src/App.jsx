import "./App.css";
import { characterRow} from "./characterRow"

function App() {
  const characters = [
    {
    character: "Charlie Brown, gang leader",
    colors: ["yellow", "black"],
    personality: "The loser",
    interests: "The Litte Red-Haired Girl",
    baseballWinner: false,
    image: "/cb-color.avif"
    },
    {
    character: "Linus, Lucy's little brother",
    colors: ["red strpes", "blue blanket"],
    personality: "Philosopher",
    interests: "His Blanket",
    baseballWinner: true,
    image: "/li-color.avif"
    },
    {
    character: "Lucy, The Queen",
    colors: ["blue", "white"],
    personality: "Being Bossy",
    interests: "Psychiatry",
    baseballWinner: true,
    image: "/lu-color.avif"
    },
    {
    character: "Peppermint Patty, The Tom-boy",
    colors: ["green", "brown"],
    personality: "The Athlete",
    interests: "Skating",
    baseballWinner: true,
    image: "/pp-color.avif"
    },
    {
    character: "Snoopy, Charlie Brown's beagle",
    colors: ["white", "black"],
    personality: "Joe Cool",
    interests: "Suppertime",
    baseballWinner: false,
    image: "/sn-color.avif"
    }
    
  ];

  return (
    <>
      <h1>The Peanuts Gang Collection</h1>
      <p>A small collection of Charlie Brown and the Gang!</p>
      
      <table className="character-table">
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Colors</th>
            <th>Personality</th>
            <th>Interests</th>
            <th>Baseball Winner</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
         {characters.map((character, index) => {
          return (
          
          <characterRow 
            key={character.image}
            odd={index % 2 === 0}
            character={characters.character} 
            colors={characters.colors}
            personality={characters.personality}
            interests={characters.interests}
            baseballWinner={characters.baseballWinner}
            image={characters.image}
          />
          )
         })}
        </tbody>
      </table>
    
    </>
  )

}

export default App;