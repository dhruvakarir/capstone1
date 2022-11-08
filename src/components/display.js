import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";

import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Display = ({customerDetails,editDetailsId, handleEditFormSubmit, editFormData,handleEditFormChange , handleCancelClick, handleEditClick, handleDeleteClick}) =>
{
  return (
    <div className="app-container">
      <h1 class="header">Customer Details</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table width="70%" height="170px"
        border cellspacing="0">
          <thead>
            <tr>
            <th>id</th>
            <th>Name</th>
            <th>City</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails.map((details) => (
              <Fragment>
                {editDetailsId === details.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    details={details}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Display;
