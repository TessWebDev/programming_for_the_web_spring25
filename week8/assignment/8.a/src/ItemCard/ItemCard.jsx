import './ItemCard.css';
import PropTypes from "prop-types";
import clsx from "clsx";
import baseballbat from ".../assets/baseballbat.png"

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
            {baseballWinner && <div className="baseballWinner"> <img src={baseballbat} title="Homerun Hitter" /></div>}
            <div className="cardImg">
                <img src={image} alt={character} />
            </div>
            <div className="cardTitle">{character}</div>
            {colors.map((color) => {
                return <div key={color} className={clsx(["stripe", color])} />
            })}
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
    id: PropTypes.string // id: PropTypes.any([PropTypes.string, PropTypes.number]) 
}