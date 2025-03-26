
import './App.css'
import {useForm} from "react-hook-form";

function App() {
  const { register } = useForm();

  return (
    <>
      <div>
        <h1>Alpacha Fan Club</h1>

        <form>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName'/>
        </form>

      </div>
    </>
  )
}

export default App
