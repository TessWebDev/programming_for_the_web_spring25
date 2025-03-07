function Camelid({name, img, lifeSpan, Weight, Height, trivia}) {

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <p>{lifeSpan}</p>
            <p>{Weight}</p>
            <p>{Height}</p>
            <p>{trivia}</p>
        </div>
    );
}

export default Camelid;