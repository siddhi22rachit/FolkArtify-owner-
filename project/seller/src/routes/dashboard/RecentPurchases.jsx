import React, { useState, useEffect } from 'react';
import './recentPurchases.css';
import dummyData from '../../lib/dummydata'; // Adjust path as necessary

const RecentPurchases = () => {
  // Initialize purchases from local storage or default to dummyData
  const [purchases, setPurchases] = useState(
    () => JSON.parse(localStorage.getItem('pendingPurchases')) || dummyData.flatMap(day => day.orders)
  );

  const [acceptedPurchases, setAcceptedPurchases] = useState(
    () => JSON.parse(localStorage.getItem('acceptedPurchases')) || []
  );

  const [rejectedPurchases, setRejectedPurchases] = useState(
    () => JSON.parse(localStorage.getItem('rejectedPurchases')) || []
  );

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('pendingPurchases', JSON.stringify(purchases));
  }, [purchases]);

  useEffect(() => {
    localStorage.setItem('acceptedPurchases', JSON.stringify(acceptedPurchases));
  }, [acceptedPurchases]);

  useEffect(() => {
    localStorage.setItem('rejectedPurchases', JSON.stringify(rejectedPurchases));
  }, [rejectedPurchases]);

  const handleAccept = (id) => {
    const updatedPurchases = purchases.filter(purchase => purchase?.orderId !== id);
    const acceptedPurchase = purchases.find(purchase => purchase?.orderId === id);

    if (acceptedPurchase) {
      setAcceptedPurchases([acceptedPurchase, ...acceptedPurchases]);
      setPurchases(updatedPurchases);
    }
  };

  const handleReject = (id) => {
    const updatedAcceptedPurchases = acceptedPurchases.filter(purchase => purchase?.orderId !== id);
    const rejectedPurchaseFromAccepted = acceptedPurchases.find(purchase => purchase?.orderId === id);

    if (rejectedPurchaseFromAccepted) {
      setRejectedPurchases([rejectedPurchaseFromAccepted, ...rejectedPurchases]);
      setAcceptedPurchases(updatedAcceptedPurchases);
    } else {
      const updatedPurchases = purchases.filter(purchase => purchase?.orderId !== id);
      const rejectedPurchase = purchases.find(purchase => purchase?.orderId === id);

      if (rejectedPurchase) {
        setRejectedPurchases([rejectedPurchase, ...rejectedPurchases]);
        setPurchases(updatedPurchases);
      }
    }
  };

  const handleUndoReject = (id) => {
    const updatedRejectedPurchases = rejectedPurchases.filter(purchase => purchase?.orderId !== id);
    const undonePurchase = rejectedPurchases.find(purchase => purchase?.orderId === id);

    if (undonePurchase) {
      setPurchases([undonePurchase, ...purchases]); // Add back to pending
      setRejectedPurchases(updatedRejectedPurchases); // Update rejected list
    }
  };

  return (
    <div className="recent-purchases-container">
      <h2>Recent Purchases</h2>

      <div className="accepted-section">
        <h3>Accepted</h3>
        {acceptedPurchases.map(purchase => (
          purchase && (
            <div className="purchase-item" key={purchase.orderId}>
              <img src={purchase.img || 'https://via.placeholder.com/80'} alt={purchase.productName} className="product-image" />
              <div className="purchase-details">
                <span className="product-name">{purchase.productName}</span>
                <span className="customer-name">{purchase.userName}</span>
                <span className="price">${purchase.price.toFixed(2)}</span>
              </div>
              <div className="purchase-actions">
                <button onClick={() => handleReject(purchase.orderId)}>Reject</button>
              </div>
            </div>
          )
        ))}
      </div>

      <div className="rejected-section">
        <h3>Rejected</h3>
        {rejectedPurchases.map(purchase => (
          purchase && (
            <div className="purchase-item rejected" key={purchase.orderId}>
              <img src={purchase.img || 'https://via.placeholder.com/80'} alt={purchase.productName} className="product-image" />
              <div className="purchase-details">
                <span className="product-name">{purchase.productName}</span>
                <span className="customer-name">{purchase.userName}</span>
                <span className="price">${purchase.price.toFixed(2)}</span>
              </div>
              <div className="purchase-actions">
                <button onClick={() => handleUndoReject(purchase.orderId)}>Undo</button>
              </div>
            </div>
          )
        ))}
      </div>

      <div className="pending-section">
        <h3>Pending</h3>
        {purchases.map(purchase => (
          purchase && (
            <div className="purchase-item" key={purchase.orderId}>
              <img src={purchase.img || 'https://via.placeholder.com/80'} alt={purchase.productName} className="product-image" />
              <div className="purchase-details">
                <span className="product-name">{purchase.productName}</span>
                <span className="customer-name">{purchase.userName}</span>
                <span className="price">${purchase.price.toFixed(2)}</span>
              </div>
              <div className="purchase-actions">
                <button onClick={() => handleAccept(purchase.orderId)}>Accept</button>
                <button onClick={() => handleReject(purchase.orderId)}>Reject</button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default RecentPurchases;
