import React from 'react';

const BankDetails = ({ formData, handleChange }) => (
  <div>
    <h2>Bank Details</h2>
    <label htmlFor="Name">Bank Name*</label>
    <input
      type="text"
      name="bankName"
      value={formData.bankName}
      onChange={handleChange}
      placeholder="Bank Name"
    />
        <label htmlFor="acc_no">Account no.*</label>

    <input
      type="text"
      name="accountNo"
      value={formData.accountNo}
      onChange={handleChange}
      placeholder="Account No."
    />
    <label htmlFor="ifsc">IFEC code*</label>

<input
      type="text"
      name="ifsc"
      value={formData.ifsc}
      onChange={handleChange}
      placeholder="IFSC code"
    />
  </div>
);

export default BankDetails;
