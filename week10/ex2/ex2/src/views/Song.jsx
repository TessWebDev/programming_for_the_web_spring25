import {Link, useParams} from "react-router-dom";
import PropTypes from "prop-types";
export function Song ({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedSong = data.find((song) => song.slug === slug)

    return (
        <>
        <nav>
            <Link to="/">Go Back Home</Link>
        </nav>
        <h1>Song</h1>
        </>
       
    )
}