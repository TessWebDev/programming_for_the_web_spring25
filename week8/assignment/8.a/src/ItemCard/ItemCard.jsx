import './ItemCard.css';
import PropTypes from "prop-types";

export default function ItemCard({
        
    character,
    colors,
    personality,
    interests,
    baseballWinner,
    image,
    id       
}) {
    return (
        <div className="characterCard">
            Item Card
        </div>
    )
}
ItemCard.propTypes = {
    character: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    personality: PropTypes.string,
    interests: PropTypes.bool,
    baseballWinner: PropTypes.bool,
    image: PropTypes.string,
    id: PropTypes.any([PropTypes.string, PropTypes.number])
}