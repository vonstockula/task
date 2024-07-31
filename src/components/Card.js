import React from 'react';
import './Card.css'; 

const Card = ({ title, description, imageUrl, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
