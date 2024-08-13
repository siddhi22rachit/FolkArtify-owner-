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
        <a href="/about">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      
      <div className="right">
      <button className="button" >login</button>
      <button className="button" >sign up</button>

      </div>
    </nav>
  );
};

export default Navbar;
