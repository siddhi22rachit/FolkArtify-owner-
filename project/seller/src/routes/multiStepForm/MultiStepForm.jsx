import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalDetails from '../../component/multiForm/personalDetails';
import PhoneVerification from '../../component/multiForm/phoneVerification';
import ShopDetails from '../../component/multiForm/shopDetails';
import BankDetails from '../../component/multiForm/bankDetails';
import './MultiStepForm.css';
import ProgressBar from '../../component/multiForm/progressBar';
import apiRequest from '../../lib/apiRequest';
import Success from '../succes/success';

function MultiStepForm() {
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('currentStep');
    return savedStep ? parseInt(savedStep) : 1;
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    password:'',
    product: '',
    shopAddress: '',
    productDetails: '',
    bankName: '',
    accountNo: '',
    ifsc: '',
  });

  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission
    setError("");
    setIsLoading(true);
  
    try {
      // Send the formData directly to the server
      const res = await apiRequest.post("/auth/register", formData);
      navigate("/success");
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.phone )) {
      alert('Please fill in all fields');
      return;
    }
    
    if (step === 3 && (!formData.product || !formData.shopAddress )) {
      alert('Please fill in all fields');
      return;
    }
    if (step === 4 && (!formData.bankName || !formData.accountNo || !formData.bankDetails)) {
      alert('Please fill in all fields');
      return;
    }
    setStep(step + 1);
    localStorage.setItem('currentStep', step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    localStorage.setItem('currentStep', step - 1);
  };

  const handleCancel = () => {
    localStorage.removeItem('currentStep');
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="multi-step-form">
      <ProgressBar step={step} />
      <h2>Step {step}</h2>
      {step === 1 && (
        <PersonalDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={handleNext}
        />
      )}
      {step === 2 && (
        <PhoneVerification
          formData={formData}
          handleChange={handleChange}
          nextStep={handleNext}
          setIsVerified={setIsVerified}  // Pass setIsVerified to PhoneVerification
        />
      )}
      {step === 3 && (
        <ShopDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={handleNext}
          prevStep={handleBack}
        />
      )}
      {step === 4 && (
        <BankDetails
          formData={formData}
          handleChange={handleChange}
          prevStep={handleBack}
        />
      )}
      <div className="form-navigation">
      <button onClick={handleCancel}>Cancel</button>
        {step > 1 && <button onClick={handleBack}>Back</button>}
        {step < 4 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit} disabled={isLoading}>Submit</button>
        )}
                  {error && <span>{error}</span>}

      </div>
    </div>
  );
}

export default MultiStepForm;
