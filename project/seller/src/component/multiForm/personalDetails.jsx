import React from 'react';

const PersonalDetails = ({ formData, handleChange, nextStep }) => (
  <div>
    <h2>Personal Details</h2>
    <input
      type="text"
      name="name"
      value={formData.name || ''}
      onChange={handleChange}
      placeholder="Name"
    />
    <input
      type="text"
      name="phone"
      value={formData.phone || ''}
      onChange={handleChange}
      placeholder="Phone"
    />
    <input
      type="email"
      name="email"
      value={formData.email || ''}
      onChange={handleChange}
      placeholder="Email"
    />
    <input
      type="text"
      name="address"
      value={formData.address || ''}
      onChange={handleChange}
      placeholder="Address"
    />
    <button onClick={nextStep}>Next</button>
  </div>
);

export default PersonalDetails;
