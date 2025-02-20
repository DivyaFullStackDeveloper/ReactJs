import React from "react";
import "./AddForm.css";

export default class AddForm extends React.Component {
    render(){
        return(
            <div> 
            <form>
                <fieldset>
                     <b className="form-title">Movie Information</b>
                     <br/>
                     {/* movie name */}
                    <label For="movieName"></label>
                    <input type="text" placeholder="Movie Name" />
                    <br/>
                    <br/>
                     {/* image */}
                    <label For="imageUrl"></label>
                    <input type="url" placeholder="Image URL" />
                    <br/>
                    <br/>
                     {/* time duration */}
                    <label For="Time-Duration"></label>
                    <input type="text" placeholder="Time Duratin" />
                    <br/>
                    <br/>
                     {/* release date */}
                    <label For="Release-Date"></label>
                    <input type="text" placeholder="Release Date" />
                    <br/>
                    <br/>
                     {/* Submit */}
                    <button className="submit-button" type="submit" placeholder="Submit">Submit</button>
                </fieldset>
            </form>
            </div>
        );
    }
}
