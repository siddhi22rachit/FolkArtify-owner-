import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar">
        <Link to="/dashboard/sales">Sales & Profit</Link>
        <Link to="/dashboard/recent-purchases">Recent Purchases</Link>
        <Link to="/dashboard/product-stats">Product Stats</Link>
        <Link to="/dashboard/qna">Q&A</Link>
      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
