import { useParams} from "react-router-dom";

export function DeckDetail({data}) {
    const {id} = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id +++id);
    console.log("deck", selectedDeck);
    return (
        <h1>Deck Detail</h1>
    )
}