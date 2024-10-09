import React from "react";
import "./Card.css"; 
import discoverIcon from '../Images/loupe.png';

const Card = () => {
  return (
    <div className="card-section">
        <h2 className="discover-header">
        <img src={discoverIcon} alt="Discover icon" className="discover-icon" />
        Discover
      </h2>

      <div className="categories">
        <button>Top</button>
        <button>Tech & Science</button>
        <button>Finance</button>
        <button>Arts & Culture</button>
        <button>Sports</button>
        <button>Entertainment</button>
      </div>
      
    </div>
  );
};

export default Card;
