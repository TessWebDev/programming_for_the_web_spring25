import { useState } from 'react'

import './App.css'

function App() {
    // DO THIS OR SEE BELOW
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    // OR  -- for single handler. See video two in week9 around 19 min
    // const [textInputs, setTextInputs] = useState({
    //     firstName: "",
    //     lastName: "",
    //     password: ""
    // })
    // function handleTextChange(evt)
    const [pets, setPets] = useState(true);

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log({firstName, lastName, password, pets})
    }

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <fieldset>
            <legend>Personal Information</legend>
            <div>
                <label htmlFor="firstName">
                    First Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(event) => {
                        setFirstName(event.target.value)
                    }}
                />
            </div>
            <div>
                <label htmlFor="lastName">
                    Last Name
                </label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => {
                        setLastName(event.target.value)
                    }}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
                />
            </div>
            <div>
                <label htmlFor="likesPets">Likes Pets</label>
                <input 
                type="checkbox" 
                name="likesPets"
                id="likesPets" 
                checked={pets} 
                value={pets}
                onChange={(event) => {
                    setPets(!pets)
                }}
                />
            </div>
        </fieldset>
        <fieldset>
            <legend>RadioGroup</legend>
            <div>
                <label htmlFor="pepsi">Pepsi
                    <input 
                    type="radio" 
                    name="soda" 
                    id="pepsi" 
                    />
                </label>
            </div>
        </fieldset>
        <fieldset>
            <legend>Select</legend>
            <select name="playerType" id="playerType" >
                <option value="aggro">Aggro</option>
                <option value="aggro">Aggro</option>
                <option value="aggro">Aggro</option>
                <option value="aggro">Aggro</option>
            </select>
        </fieldset>
        <button type="submit"> Submit </button>
      </form>
    </>
  )
}

export default App
