import { useState } from "react";
import { nanoid } from "nanoid";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewCharacterForm } from "../NewCharacterForm/NewCharacterForm";
import deckData from "../assets/deck-data.json"
import { DeckDetail } from "../views/DeckDetail";

export function Home() {
    const [decks, setDecks] = useState(deckData);

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
    return(
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
    );
}