

import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  function getFormData(data) {
    console.log("form data", data);
  }
  
  return (
    <>
    <div>
      <h1>Alpaca Fan Club</h1>
      <form onSubmit={handleSubmit(getFormData)}>
      <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName" {...register("firstName")}
          />
    <button type="submit"> Submit </button>
      
      </form>
    </div>
       
    </>
  )
}

export default App
