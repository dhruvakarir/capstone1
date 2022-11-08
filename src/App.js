import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Display from "./components/display"
import data from "./components/mock-data.json"
import React, { useState, Fragment } from "react"
import Add from "./components/add"
import { nanoid } from "nanoid"
import "./App.css";

function App() {

const [customerDetails, setCustomerDetails] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: '',
  Name: '',
  City: '',
  });

  const [editFormData, setEditFormData] = useState({
    id: '',
  Name: '',
  City: '',
  });

  const [editDetailsId, setEditDetailsId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const select = document.querySelector("select");
const value = select.options[select.selectedIndex].value;
const text = select.options[select.selectedIndex].text;

    const newCustomerDetails = {
      id: nanoid(),
      Name: addFormData.Name,
      City: text,
    };



    const newDetails = [...customerDetails, newCustomerDetails];
    setCustomerDetails(newDetails);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedDetails = {
      id: editDetailsId,
      Name: editFormData.Name,
      City: editFormData.City,
    };

    const newDetails = [...customerDetails];

    const index = customerDetails.findIndex((details) => details.id === editDetailsId);

    newDetails[index] = editedDetails;

    setCustomerDetails(newDetails);
    setEditDetailsId(null);
  };

  const handleEditClick = (event, details) => {
    event.preventDefault();
    setEditDetailsId(details.id);

    const formValues = {
      id: details.id,
    Name: details.Name,
    City: details.City,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditDetailsId(null);
  };

  const handleDeleteClick = (detailsId) => {
    const newDetails = [...customerDetails];

    const index = customerDetails.findIndex((details) => details.id === detailsId);

    newDetails.splice(index, 1);

    setCustomerDetails(newDetails);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="display" element={ <Display customerDetails={customerDetails}
              editDetailsId={editDetailsId}
              handleEditFormSubmit={handleEditFormSubmit}
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}/> } />
      <Route path="add" element={ <Add  customerDetails={customerDetails}
              handleAddFormChange={handleAddFormChange}
              handleAddFormSubmit={handleAddFormSubmit}/> } />
      </Routes>
    </div>
  )
}

export default App
