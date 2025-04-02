import { useState } from 'react'

import './App.css';
import ItemCard from './ItemCard/ItemCard';
import Masthead from './Masthead/Masthead';

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
     <Masthead />
     <div className="collection">
      {/* deck map goes here */}
      {/* use ItemCard component in loop */}
      {decks.map((characterDeck) => {
        return (
          <ItemCard key={characterDeck.id} {...characterDeck}/> //...spread operator on reactor commonents
        )
      })}
     </div>
    </div>
  )
}

export default App
