import { useState } from 'react'

import './App.css';
import ItemCard from './ItemCard/ItemCard';
import Masthead from './Masthead/Masthead';
import { func } from 'prop-types';
import {nanoid} from "nanoid";
import {useForm} from 'react-hook-form';
import { NewCharacterForm } from './NewCharacterForm/NewCharacterForm';

function App() { //state variable is anything that might change within your app (based on user event, or behavior), -- 
 
  const [decks, setDecks] = useState([
    {
    character: "Charlie Brown - Gang Leader",
    colors: ["yellow", "black"],
    personality: "AKA The Loser",
    interests: "Interests: Litte Red-Haired Girl",
    baseballWinner: false,
    image: "/cb-color.avif",
    id: "1"
    },
    {
    character: "Linus Van Pelt - Lucy's Little Brother",
    colors: ["red strpes", "blue blanket"],
    personality: "AKA Philosopher",
    interests: "Interests: His Blanket",
    baseballWinner: true,
    image: "/li-color.avif",
    id: "2"
    },
    {
    character: "Lucy Van Pelt - The Queen",
    colors: ["blue", "white"],
    personality: "AKA Bossy",
    interests: "Interests: Psychiatry",
    baseballWinner: true,
    image: "/lu-color.avif",
    id: "3"
    },
    {
    character: "Peppermint Patty - Tom-Boy",
    colors: ["green", "brown"],
    personality: "AKA Athlete",
    interests: "Interests: Skating",
    baseballWinner: true,
    image: "/pp-color.avif",
    id: "4"
    },
    {
    character: "Snoopy - Charlie Brown's Beagle",
    colors: ["white", "black"],
    personality: "AKA Joe Cool",
    interests: "Interests: Suppertime",
    baseballWinner: false,
    image: "/sn-color.avif",
    id: "5"
    },
    {
    character: "Schroeder - Musician",
    colors: ["red", "blue, pink"],
    personality: "AKA Moody Musical Genius",
    interests: "Interests: Playing Piano, Hockey",
    baseballWinner: true,
    image: "/sc-color_1.avif",
    id: "6"
    }
    
  ]);

  function addCharacterDeck(data) {
    //do stuff with data to add a character deck
    //taking existing character decks and ...spreading new deck to it.
    console.log("data", data);
    const newId = nanoid (6);
    const newDeck = {...data, id:newId};
    console.log(newDeck);
    setDecks([...decks, newDeck]);
  }
  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = decks.filter((characterDeck) => {
      return characterDeck.id !== id; // will skip item with matching id 
    });
    setDecks(updatedArray)
  }
  function duplicateCard(id) {
    console.log("duplicate me", id);
    const matchingDeck = decks.find((characterDeck) => {
      return characterDeck.id === id
    });
    const updatedDeck = {...matchingDeck, id: nanoid()}
    setDecks([...decks, updatedDeck]);
  }

  return (
    <div className="page">
     {/* Masthead goes here*/}
     <Masthead />
     <div className="collection">
      {/* deck map goes here */}
      {/* use ItemCard component in loop */}
      {decks.map((characterDeck) => {
        return (
          <ItemCard 
          key={characterDeck.id}
          deleteFn={deleteCard}
          duplicateFn={duplicateCard}
          {...characterDeck}/> //...spread operator on reactor commonents
        )
      })}
      
     </div>
      <NewCharacterForm addCharacterFn={addCharacterDeck} />
    </div>
  )
}

export default App
