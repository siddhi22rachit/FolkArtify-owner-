import "./navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate = useNavigate();

const handleSubmit=()=>{
  navigate('/form');
}

  return (
    <nav>
      <div className="left">
        <a href="/">
          <div className="logo">
            
            <img src="/logo.png" alt="" />
            
            <span>FolkArtify</span>
          </div>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/form">Contact</a>
        <a href="/">Agents</a>
      </div>
      
      <div className="right">
      <button className="button" onClick={handleSubmit}>login</button>
      <button className="button" >sign up</button>

      </div>
    </nav>
  );
};

export default Navbar;
