import React from 'react';

const ShopDetails = ({ formData, handleChange, nextStep, prevStep }) => (
  <div>
    <h2>Shop Details</h2>
    <input
      type="text"
      name="product"
      value={formData.product || ''}
      onChange={handleChange}
      placeholder="Product"
    />
    <input
      type="text"
      name="shopAddress"
      value={formData.shopAddress || ''}
      onChange={handleChange}
      placeholder="Shop Address"
    />
    <textarea
      name="productDetails"
      value={formData.productDetails || ''}
      onChange={handleChange}
      placeholder="Product Details"
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default ShopDetails;
