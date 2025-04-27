import {useForm} from "react-hook-form";
import "./NewCharacterForm.css";

export function NewCharacterForm(props) {
    const {addCharacterFn} = props;
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    function handleSubmitJob(data) {
        addCharacterFn(data);
        reset();
    }

    return (
        <div className="form-wrapper">
            <h4> Add Your Favorite Character!</h4>
        <form onSubmit= {handleSubmit(addCharacterFn)}>
          <div className="form-group">
            <label htmlFor="characterName">Character's Name</label>
            <input id="characterName" {...register("character", {required: true})} />
          </div>

          <div className="form-group">
            <label htmlFor="characterImage">Image</label>
            <input {...register("image", {required: true})} />
            {errors.image && (<p className='error'>An Image is required</p>)}
          </div>

          <div className="form-group">
            <label htmlFor="characterPersonality">Personality</label>
            <input {...register("personality", {required: true})} />
          </div>

          <div className="form-group">
            <label htmlFor="characterInterests">Interests</label>
            <input {...register("interests", {required: true})} />
          </div>
       
        <div className="special-checkboxes">
        
            <div className="form-group">
            <p> Baseball Winner</p>
                <label htmlFor="baseballWinner"></label><input id="baseballWinner" type="checkbox" {...register("baseballWinner")}/>
            </div>

            <div className="form-group">
                <p> Character Colors</p>
                <label ><input value="yellow" type="checkbox" {...register("colors")}/>Yellow</label>
                <label ><input value="brown" type="checkbox" {...register("colors")}/>Brown</label>
                <label ><input value="blue" type="checkbox" {...register("colors")}/>Blue</label>
                <label ><input value="red" type="checkbox" {...register("colors")}/>Red</label>
                <label ><input value="green" type="checkbox" {...register("colors")}/>Green</label>
                <label ><input value="pink" type="checkbox" {...register("colors")}/>Pink</label>
            </div>
        </div>
          
          <button type="submit">Add Character</button>
        </form>
      </div>
    )
}