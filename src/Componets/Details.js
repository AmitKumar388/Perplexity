import React from 'react';
import './Details.css'; 

const DetailsPage = () => {
  return (
    <div className="details-container">
      <div className="header-section">
        <img src="https://via.placeholder.com/1500x400" alt="Nobel Prize" className="header-image" />
        <div className="header-text">
          <h1>2024 Nobel Prize in Medicine</h1>
          <p className="curated-by">Curated by elymc</p>
        </div>
      </div>

      <div className="introduction">
        <h2>Introduction</h2>
        <p>The 2024 Nobel Prize in Physiology or Medicine was awarded to American scientists...</p>
      </div>

      <div className="content-section">
        <h2>MicroRNA Discovery</h2>
        <div className="content-details">
          <p>A groundbreaking discovery of microRNA emerged from...</p>
          <img src="https://via.placeholder.com/300x150" alt="MicroRNA" className="content-image" />
        </div>
      </div>

      <div className="content-section">
        <h2>Gene Regulation Insights</h2>
        <div className="content-details">
          <p>The discovery of microRNAs by Ambros and Ruvkun revolutionized our understanding...</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
