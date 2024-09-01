
import React, { useState } from "react";
import UploadWidget from "../uploadWidget/UploadWidget";
import "./personalDetails.css"; // Assuming you have this CSS for styling

const PersonalDetails = ({ formData, handleChange }) => {
  const [images, setImages] = useState(formData.images || []);

  return (
    <div className="personal-details-container">
      <div className="left-content">
        <h2>Personal Details</h2>
        <label htmlFor="Name">Name *</label>
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
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          placeholder="Enter Password"
        />
      </div>

      <div className="right-content">
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: 'drvn2upzw',
            uploadPreset: 'hackethon',
            folder: 'posts'
          }}
          setState={setImages}
        />
      </div>
        
      </div>
    </div>
  );
};

export default PersonalDetails;