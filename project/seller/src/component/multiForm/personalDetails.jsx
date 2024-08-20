import React, { useState } from "react";
import UploadWidget from "../uploadWidget/UploadWidget";
import "./personalDetails.css"; // Assuming you have this CSS for styling

const PersonalDetails = ({ formData, handleChange }) => {
  const [images, setImages] = useState(formData.images || []);

  // Function to handle image upload and update formData
  const handleImageUpload = (uploadedImages) => {
    const imageUrls = uploadedImages.map((image) => image.secure_url); // Extracting the secure_url from each image
  
    console.log('Uploaded Images:', imageUrls); // Check the array of URLs
    setImages(imageUrls);
    handleChange({ target: { name: "images", value: imageUrls } }); // Update formData with the array of URLs
  };
  

  return (
    <div className="personal-details-container">
      <div className="left-content">
        <h2>Personal Details</h2>
        {/* Other form fields */}
      </div>

      <div className="right-content">
        <div className="image-preview">
          {images.map((image, index) => (
            <img src={image} key={index} alt="Uploaded" />
          ))}
        </div>
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "drvn2upzw",
            uploadPreset: "e-commerce",
            folder: "posts",
          }}
          setState={handleImageUpload} // Pass the handleImageUpload function here
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
