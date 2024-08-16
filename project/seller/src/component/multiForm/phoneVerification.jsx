import React, { useState } from 'react';

const PhoneVerification = ({ formData, handleChange, nextStep, setIsVerified }) => {
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Simulate OTP generation
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    alert(`OTP sent: ${otp}`); // In a real application, this would be sent via SMS
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setIsVerified(true); // Update verification status in the parent component
      alert('OTP verified successfully!');
      nextStep(); // Proceed to the next step once verified
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>Phone Verification</h2>
      <input
        type="text"
        name="phone"
        value={formData.phone || ''}
        onChange={handleChange}
        placeholder="Enter Phone Number"
      />
      <button onClick={handleSendOtp}>Send OTP</button>

      {isOtpSent && (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <div className="form-navigation">
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneVerification;
