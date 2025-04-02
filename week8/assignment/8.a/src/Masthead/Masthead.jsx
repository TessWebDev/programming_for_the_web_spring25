import MastheadImg from "../assets/Peanuts_Gang_Collection_Banner_SBS.webp";
import './masthead.css';

export default function Masthead() {
    return (
        <div className="masthead">
            <img src={MastheadImg}alt="Favortie Peanuts Characters"/>
            <h1>The Peanuts Gang</h1>
        </div>
    )
}