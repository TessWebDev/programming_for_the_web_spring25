 import "./characterRow.css";
 
 export function characterRow({character, colors, personality, interests, baseballWinner, image, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td>{character}</td>
            <td>{colors.join (",")}</td>
            <td>{personality}</td>
            <td>{interests}</td>
            <td>{baseballWinner && "yes"}</td>
            <td><img src={image} alt={character} /></td>
        </tr>
    )
 }