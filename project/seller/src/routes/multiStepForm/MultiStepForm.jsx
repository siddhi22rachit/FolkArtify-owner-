// src/components/MultiStepForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalDetails from '../../component/multiForm/personalDetails';
import PhoneVerification from '../../component/multiForm/phoneVerification';
import ShopDetails from '../../component/multiForm/shopDetails';
import BankDetails from '../../component/multiForm/bankDetails';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    product: '',
    shopAddress: '',
    productDetails: '',
    bankName: '',
    accountNumber: '',
    // Add other fields here as needed
  });
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Step {step}</h2>
      {step === 1 && (
        <PersonalDetails 
          formData={formData}
          handleChange={handleChange}
          nextStep={handleNext}
        />
      )}
      {step === 2 && <PhoneVerification />}
      {step === 3 && (
        <ShopDetails 
          formData={formData}
          handleChange={handleChange}
          nextStep={handleNext}
          prevStep={handleBack}
        />
      )}
      {step === 4 && <BankDetails 
      formData={formData}
      handleChange={handleChange}
      prevStep={handleBack}
      />}
      <div>
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 4 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button>Submit</button>
        )}
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default MultiStepForm;
