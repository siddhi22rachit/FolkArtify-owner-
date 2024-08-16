// ProgressBar.jsx
import React from 'react';
import './progressBar.css';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-container">
      <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
      <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
      <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
      <div className={`circle ${step >= 4 ? 'active' : ''}`}>4</div>
      <div className={`progress-line ${step > 1 ? 'active' : ''}`} style={{ width: `${(step - 1) * 33.3}%` }}></div>
    </div>
  );
};

export default ProgressBar;
