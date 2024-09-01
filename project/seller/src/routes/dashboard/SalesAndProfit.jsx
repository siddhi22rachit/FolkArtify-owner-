import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import './salesAndProfit.css';
import dummyData from '../../lib/dummydata';

// Register chart plugins
Chart.register(...registerables, zoomPlugin);

const SalesAndProfit = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalEarn, setTotalEarn] = useState(0);
  const [dailyData, setDailyData] = useState({
    labels: [],
    datasets: [
      { label: 'Daily Sales', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: 'Daily Earn', data: [], backgroundColor: 'rgba(153, 102, 255, 0.6)' }
    ]
  });

  // State for paginated view
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of days to display at a time

  useEffect(() => {
    let totalSales = 0;
    let totalEarn = 0;
    const dailySales = {};
    const dailyEarn = {};

    dummyData.forEach(({ date, orders }) => {
      const dailyTotalEarn= orders.reduce((sum, order) => sum + (order.quantity * order.price), 0);
      const dailyTotalSales = orders.reduce((sum, order) => sum + (order.quantity ), 0);; // Assuming earnings equal sales for simplicity

      totalSales += dailyTotalSales;
      totalEarn += dailyTotalEarn;

      dailySales[date] = dailyTotalSales;
      dailyEarn[date] = dailyTotalEarn;
    });

    setTotalSales(totalSales);
    setTotalEarn(totalEarn);

    const labels = Object.keys(dailySales);
    const salesData = Object.values(dailySales);
    const earnData = Object.values(dailyEarn);

    setDailyData({
      labels,
      datasets: [
        { label: 'Daily Sales', data: salesData, backgroundColor: 'rgba(75, 192, 192, 0.6)' },
        { label: 'Daily Earn', data: earnData, backgroundColor: 'rgba(153, 102, 255, 0.6)' }
      ]
    });
  }, []);

  const pieData = {
    labels: ['Total Sales', 'Total Earn'],
    datasets: [
      {
        data: [totalSales, totalEarn],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  // Determine the visible data based on the currentIndex and itemsPerPage
  const visibleLabels = dailyData.labels.slice(currentIndex, currentIndex + itemsPerPage);
  const visibleSalesData = dailyData.datasets[0].data.slice(currentIndex, currentIndex + itemsPerPage);
  const visibleEarnData = dailyData.datasets[1].data.slice(currentIndex, currentIndex + itemsPerPage);

  const barData = {
    labels: visibleLabels,
    datasets: [
      {
        label: 'Sales',
        data: visibleSalesData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Earn',
        data: visibleEarnData,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          suggestedMin: 0,
          suggestedMax: Math.max(...dailyData.datasets[0].data) + 100,
        },
      },
    },
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNextClick = () => {
    if (currentIndex + itemsPerPage < dailyData.labels.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  return (
    <div className="sales-profit-container">
      <div className="summary-section">
        <div className="summary-box">
          <div className="summary-item">
            <h3>Total Sales</h3>
            <p><span className="symbol">🛒</span>{totalSales}</p>
          </div>
          <div className="summary-item">
            <h3>Total Earn</h3>
            <p><span className="symbol">💵</span>${totalEarn.toFixed(2)}</p>
          </div>
        </div>

        <div className="monthly-summary">
          <div className="summary-item">
            <h3>Monthly Total Sales</h3>
            <p><span className="symbol">📈</span>{totalSales}</p>
          </div>
          <div className="summary-item">
            <h3>Monthly Total Earn</h3>
            <p><span className="symbol">📊</span>${totalEarn.toFixed(2)}</p>
          </div>         
        </div>
        <div className="pie-chart">
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
      </div>

      <div className="chart-navigation">
        <button onClick={handlePrevClick} disabled={currentIndex === 0}>←</button>
        <button onClick={handleNextClick} disabled={currentIndex + itemsPerPage >= dailyData.labels.length}>→</button>
      </div>

      <div className="bar-chart">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default SalesAndProfit;
