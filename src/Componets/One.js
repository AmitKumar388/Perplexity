import React from 'react';
import "./One.css";

const topics = [
    {
      title: "Artificial Intelligence",
      description:
        "Explore the advancements and applications of AI in various fields.",
      imageUrl:
        "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/07/13220529/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities-1200x675.jpeg", // Replace with an actual image URL
    },
];

const One = () => {
    return (
      <div className="One-section">
        <ul className="One-topic-list">
          {topics.map((topic, index) => (
            <li key={index} className="One-topic-item">
              <img src={topic.imageUrl} alt={topic.title} className="One-topic-image" />
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default One;