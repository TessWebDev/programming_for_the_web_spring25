

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
        <fieldset>
          <legend>Personal Data</legend>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName" {...register("firstName")}
            />
            </div>

            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lasttName"
              type="text"
              name="lastName" {...register("lastName")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="streetName">Street Address</label>
            <input
              id="streettName"
              type="text"
              name="streettName" {...register("streetName")}
            />
          </div>

          <div className='form-group'>
            <label htmlFor="">State</label>
            <select>
              <option value="TX">Texas</option>
              <option value="IL">Illinois</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
            </select>  
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              name="country" {...register("country")}
            />
          </div>

        </fieldset>

        <fieldset>
                <legend>Alpaca Preference</legend>
              <div className="form-group">
                  <p>Favortie Alpaca Colors</p>
                  <label>Brown <input type="checkbox" value="brown" {...register("favColor")}/> </label>
                  <label>White <input type="checkbox" value="White" {...register("favColor")}/> </label>
                  <label>Caramel <input type="checkbox" value="Caramel" {...register("favColor")}/> </label>
                  <label>Black <input type="checkbox" value="Black" {...register("favColor")}/> </label>
              </div>

              <div className="form-group">
                  <label htmlFor="">Tell me your favorite Alpaca quality!</label>
                  <textarea rows="4" cols="50" {...register("alpacaEssay")}></textarea>
            
              </div>
          
        </fieldset>
    <button type="submit"> Submit </button>
      
      </form>
    </div>
       
    </>
  )
}

export default App
