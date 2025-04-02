import { useState } from 'react'

import './App.css';
import ItemCard from './ItemCard/ItemCard';
import Masthead from './Masthead/Masthead';

function App() { //state variable is anything that might change within your app (based on user event, or behavior), -- 
  const [decks, setDecks] = useState([
    {
    character: "Charlie Brown, Gang Leader",
    colors: ["yellow", "black"],
    personality: "The Loser",
    interests: "The Litte Red-Haired Girl",
    baseballWinner: false,
    image: "/cb-color.avif",
    id: "1"
    },
    {
    character: "Linus Van Pelt, Lucy's Little Brother",
    colors: ["red strpes", "blue blanket"],
    personality: "Philosopher",
    interests: "His Blanket",
    baseballWinner: true,
    image: "/li-color.avif",
    id: "2"
    },
    {
    character: "Lucy Van Pelt, The Queen",
    colors: ["blue", "white"],
    personality: "Being Bossy",
    interests: "Psychiatry",
    baseballWinner: true,
    image: "/lu-color.avif",
    id: "3"
    },
    {
    character: "Peppermint Patty, Tom-Boy",
    colors: ["green", "brown"],
    personality: "The Athlete",
    interests: "Skating",
    baseballWinner: true,
    image: "/pp-color.avif",
    id: "4"
    },
    {
    character: "Snoopy, Charlie Brown's Beagle",
    colors: ["white", "black"],
    personality: "Joe Cool",
    interests: "Suppertime",
    baseballWinner: false,
    image: "/sn-color.avif",
    id: "5"
    },
    {
    character: "Schroeder, Musician",
    colors: ["red", "blue"],
    personality: "Moody Musical Genius",
    interests: "Playing Piano, Hockey",
    baseballWinner: true,
    image: "/sc-color_1.avif",
    id: "6"
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
