import React from 'react'
import "./homePage.css"

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapperhome">
          <h1 >
            Become a FolkArtify Seller
          </h1>
          <p>Start your selling journey on Amazon.in and become a part of our 14 Lakh+ seller community</p>
          <button className="button" >Start Selling</button>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Sellers Connected with us </h2>
            </div>
          </div>
         
        </div>
      </div>
      <div className="imgContainerhome">
        <img src="/homepage.avif" alt="" />
      </div>
    </div>
  )
}

export default HomePage
