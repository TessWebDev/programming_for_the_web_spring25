import "./camelid";
function camelid({name, lifeSpan, Weight, Height}) {   // ({}) -- is a parameter
    console.log(name)
    return ( //return is something you have to do with every component
        <div className="camelidsFacts">
            <h1>{name}</h1>
            <p>{lifeSpan}</p>
            <div style={{
                width: "25px",
                height: "25px",
                backgroundColor: hex
            }}></div> 
        </div>
    ) 
}

export default camelid;