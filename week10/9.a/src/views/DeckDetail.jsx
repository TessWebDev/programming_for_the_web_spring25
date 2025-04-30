import clsx from "clsx";
import PropTypes from "prop-types";
import {useParams, Link} from "react-router-dom";
export function DeckDetail({data}) {
    const {id} = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log("deck", selectedDeck);
    
    return (
        <>
        <Link to="/">Return to Character List</Link>
         <h1>{selectedDeck.character}</h1>
         <img src={selectedDeck.image} alt={selectedDeck.character} /> 
         <p>
            {selectedDeck.personality}
         </p>
         <p>
            {selectedDeck.interests}
         </p>

         {selectedDeck.baseballWinner && (<p>Baseball Winner!</p>)}

         {selectedDeck.colors.map((color) => {
            return (<div key={color} className={clsx(["colorBlock", color])}>{color}</div>)
         })}
        </>
       
    )
}

DeckDetail.propTypes = {
    data: PropTypes.array
};