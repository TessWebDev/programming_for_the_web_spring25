import "./colors.css";
function Color({name, desc, hex}) {   // ({}) -- is a parameter
    console.log(name)
    return ( //return is something you have to do with every component
        <div className="colorCard">
            <h1>{name}</h1>
            <p>{desc}</p>
            <div style={{
                width: "25px",
                height: "25px",
                backgroundColor: hex
            }}></div> 
        </div>
    ) 
}

export default Color;