import PropTypes from "prop-types";
import './ItemCard.css';
import clsx from "clsx";
import baseballbat from "../assets/baseballbat.png";
import trash from "../assets/woodstock trash.png";
import copy from "../assets/snoopy copy.png";

export default function ItemCard({
        
    character,
    colors,
    personality,
    interests,
    baseballWinner,
    image,
    id,
    deleteFn,
    duplicateFn       
}) {
    return (
        <div className="characterCard">
            {baseballWinner && <div className="baseballWinner"> <img src={baseballbat} title="Homerun Hitter" /></div>}
        
            <div className="cardImg">
                <img src={image} alt={character} />
            </div>
            <div className="cardTitle">{character}</div>
            <div className="cardFacts">{personality}</div>
            <div className="cardBody">{interests}</div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}>
                <img src={trash} /></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}>
                <img src={copy} /></a>
            </div>
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
    id: PropTypes.string,  
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}