import React from 'react';

const ShopDetails = ({ formData, handleChange }) => (
  <div>
    <h2>Shop Details</h2>
    <label htmlFor="product">Product Category *</label>
    <input
      type="text"
      name="product"
      value={formData.product || ''}
      onChange={handleChange}
      placeholder="cloth"
    />
        <label htmlFor="shop_address">Shop Address*</label>
    <input
      type="text"
      name="shopAddress"
      value={formData.shopAddress || ''}
      onChange={handleChange}
      placeholder="Shop Address"
    />
        <label htmlFor="details">Product Details</label>
    <textarea
      name="productDetails"
      value={formData.productDetails || ''}
      onChange={handleChange}
      placeholder="Product Details"
    />
  </div>
);

export default ShopDetails;
