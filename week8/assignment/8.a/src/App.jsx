import { useState } from 'react'

import './App.css'

function App() { //state variable is anything that might change within your app (based on user event, or behavior), -- 
  const [decks, setDecks] = useState([
    {
    character: "Charlie Brown, gang leader",
    colors: ["yellow", "black"],
    personality: "The Loser",
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
    
  ]);

  return (
    <div className="page">
     {/* Masthead goes here*/}
     <div className="collection">
      {/* deck map goes here */}
      {/* use ItemCard component in loop */}
     </div>
    </div>
  )
}

export default App
