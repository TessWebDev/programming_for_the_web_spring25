import { useState } from 'react'
import './App.css'
import AnimalsComponent from './AnimalsComponent';

function App() {
  const [headline, setHeadline] = useState("Animal Kingdom");  // [headline --state variable, setHeadline -- function that allows to update state variable, ("Animal Kingdom"); -- the intitial value of state variable
  const [animal, setAnimal] = useState(["Dog", "Cat", "Hamster", "Hippo", "Giraffe", "Lion", "Tiger", "Cheetah", "Ostritch", "Llama", "Camel", "Frog", "Bat", "Stork"]);
  
  function deleteAnimal(animalName) {
    const updatedArray = animal.filter((animal) => {
      return animal !== animalName;
    });
    setAnimal(updatedArray);
  }
  function focusAnimal(animalName) {
    setHeadline(animalName)
  }
  
  return (
    <>
    <h1>{`${headline} is the focus`}</h1>
    {animal.map((myAnimal) => {
      return <AnimalsComponent 
        key={myAnimal} 
        animalName={myAnimal}
        deleteFn={deleteAnimal} 
        focusFn={focusAnimal}/>
    })}
    </>
  )
}

export default App
