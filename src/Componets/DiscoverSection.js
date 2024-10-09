import React from "react";
import "./DiscoverSection.css";


const topics = [
  {
    title: "Artificial Intelligence",
    description:
      "Explore the advancements and applications of AI in various fields.",
    imageUrl:
      "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/07/13220529/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities-1200x675.jpeg", 
  },
  {
    title: "Climate Change",
    description:
      "Learn about the impact of climate change and sustainable practices.",
    imageUrl:
      "https://uniteforchange.com/images/2022/06/lg/Blog-Images2@2x.jpg", 
  },
  {
    title: "Space Exploration",
    description:
      "Discover the latest missions and discoveries in space science.",
    imageUrl:
      "https://www.ku.ac.ae/wp-content/uploads/2020/11/Dr.-Sean-Innov-Italy-Webinar-Series.jpg", 
  },
];

const DiscoverSection = () => {
  return (
    <div className="width">
      <div className="discover-section">
      <ul className="topic-list">
        {topics.map((topic, index) => (
          <li key={index} className="topic-item">
            <img src={topic.imageUrl} alt={topic.title} className="topic-image" />
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};


export default DiscoverSection;
