import React from 'react';

const ProgressBar = ({ step }) => {
  const getProgress = () => {
    switch (step) {
      case 1:
        return "25%";
      case 2:
        return "50%";
      case 3:
        return "75%";
      case 4:
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: getProgress() }}></div>
    </div>
  );
};

export default ProgressBar;
