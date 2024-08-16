import React from "react";

const PersonalDetails = ({ formData, handleChange }) => (
  <div>
    <h2>Personal Details</h2>
    <label htmlFor="Name">Name  *</label>
    <input
      type="text"
      name="name"
      value={formData.name || ""}
      onChange={handleChange}
      placeholder="ABC"
    />
    <label htmlFor="Phone No.">Phone No. *</label>
    <input
      type="number"
      name="phone"
      value={formData.phone || ""}
      onChange={handleChange}
      placeholder="72086*****"
    />
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email || ""}
      onChange={handleChange}
      placeholder="Abc@xyz.com"
    />
    <label htmlFor="Address">Address </label>
    <input
      type="text"
      name="address"
      value={formData.address || ""}
      onChange={handleChange}
    />
  </div>
);

export default PersonalDetails;
