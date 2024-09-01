import React from "react";
import{Link} from "react-router-dom";
import "./card.css"
function Card({ item }) {
  if (!item) {
    return null; // or return a placeholder/error message
  }
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src= {item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h3 className="title">
        <Link to={`/${item.id}`}>
         {item.title}
      </Link>
        </h3>
        <p className="description">
          <span>{item.desc}</span>
        </p>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/shop.jpeg" alt="" />
              <span>{item.address}</span>
            </div>
            <div className="feature">
            <img src="/rating.png" alt="" />
            <span>{item.rate}</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.webp" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
