import React from 'react';

const BankDetails = ({ formData, handleChange, prevStep }) => (
  <div>
    <h2>Bank Details</h2>
    <input
      type="text"
      name="bankName"
      value={formData.bankName}
      onChange={handleChange}
      placeholder="Bank Name"
    />
    <input
      type="text"
      name="accountNo"
      value={formData.accountNo}
      onChange={handleChange}
      placeholder="Account No."
    />
    {/* Other bank details */}
    <button onClick={prevStep}>Back</button>
    <button onClick={() => alert("Form Submitted!")}>Submit</button>
  </div>
);

export default BankDetails;
