import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";


const add = ({ handleAddFormChange, handleAddFormSubmit}) => {
    return (
       <form onSubmit={handleAddFormSubmit}>
        <div class='container'>
        <h2>Add a New Branch</h2>
        <hr></hr>
          <div class="container">
            <p>Fill in this form to create a new branch.</p>
            <hr></hr>

            <label for="id"><b>id</b></label>
            <input type="text" placeholder="Enter Branch Id" name="id" id="id" required onChange={handleAddFormChange}></input>

            <label for="Name"><b>Branch Name</b></label>
            <input type="text" placeholder="Enter Branch Name" name="Name" id="Name" required onChange={handleAddFormChange}></input>

            <label for="City"><b>Branch Id</b></label>
            <select type="text" id="City" name="City">
            <option value="" disabled selected required>Select your option</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            </select>
            <button type="submit">Add</button>
          </div>
        </div>
        </form>
    )
}

export default add
