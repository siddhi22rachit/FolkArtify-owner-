import "./navbar.css";
import React from "react";

const Navbar = () => {
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
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      
      <div className="right">
      <button className="button" >Start Selling</button>
      </div>
    </nav>
  );
};

export default Navbar;
