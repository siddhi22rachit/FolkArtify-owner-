import React from 'react';

const PhoneVerification = ({ nextStep, prevStep }) => (
  <div>
    <h2>Phone Verification</h2>
    <p>Verify your phone number</p>
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default PhoneVerification;
