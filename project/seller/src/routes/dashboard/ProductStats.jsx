import React, { useState, useEffect } from 'react';
import dummyData from '../../lib/dummydata';

const ProductStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const countMap = {};

    // Aggregate quantities by productId
    dummyData.forEach((item) => {
      if (item.orders) {
        item.orders.forEach((order) => {
          const key = order.productId;

          if (!countMap[key]) {
            countMap[key] = { totalQuantity:0,details: [] };
          }
          countMap[key].totalQuantity += order.quantity;
          countMap[key].details.push(order);
        });
      }
    });

    // Convert object to array and sort by total quantity
    const statsArray = Object.keys(countMap).map((productId) => ({
      productId,
      ...countMap[productId],
    }));

    statsArray.sort((a, b) => b.totalQuantity - a.totalQuantity);

    setStats(statsArray);
  }, []);

  return (
    <div>
      {stats.map((item, index) => (
        <div key={index}>
          <h3>Product ID: {item.productId}</h3>
          <p>Total Quantity: {item.totalQuantity}</p>
          <h4>Details:</h4>
          <ul>
            {item.details.map((order, i) => (
              <div key={i}>
                <div><img src={order.img} alt={order.productName} width="100" /></div>
                <div><p>Product Name: {order.productName}</p>
                <p>Price: ${order.price*item.totalQuantity}</p> </div>
                               
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductStats;
