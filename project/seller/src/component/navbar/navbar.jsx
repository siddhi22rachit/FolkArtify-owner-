import "./navbar.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log("Current User:", currentUser);

  const handleSubmit = () => {
    navigate("/register");
  };

  return (
    <nav>
      <div className="left">
        <Link to="/">
          <div className="logo">
            <img src="/logo.png" alt="FolkArtify Logo" />
            <span>FolkArtify</span>
          </div>
        </Link>
        <Link to="/">Home</Link>
        {currentUser ? (
          <>
            <Link to="/dashboard/sales">Dashboard</Link>
            <Link to="/form">List</Link>
            <Link to="/about">About</Link>
          </>
        ) : (
          <>
            <Link to="/about">About</Link>
            <Link to="/form">Contact</Link>
          </>
        )}
      </div>

      <div className="right">
        {currentUser ? (
          <div className="userNav">
             <img
              src={currentUser.avatar}
              alt=""
            />
            <span>{currentUser.name}</span>
            <Link to="/profile" className="profile">
             <button>Profile</button>
            </Link>
          </div>
        ) : (
          <>
            <button className="button" onClick={() => navigate("/login")}>Login</button>
            <button className="button" onClick={handleSubmit}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
