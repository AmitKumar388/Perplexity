import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    { name: 'Home', icon: 'https://cdn-icons-png.flaticon.com/128/3203/3203071.png' }, 
    { name: 'Discover', icon: 'https://cdn-icons-png.flaticon.com/128/5665/5665227.png' },
    { name: 'Library', icon: 'https://cdn-icons-png.flaticon.com/128/17176/17176376.png' },
  ];

  return (
    <div className="sidebar">
      <h2>Perplexity</h2>
      <div className="search-container">
        <input type="text" placeholder="New Thread  Ctrl [I]" className="search-input" />
      </div>
      <ul className="sidebar-list">
        {categories.map((category, index) => (
          <li key={index} className="sidebar-item">
            <img src={category.icon} alt={`${category.name} icon`} className="sidebar-icon" />
            {category.name}
          </li>
        ))}
      </ul>
      <button className="signup-button">Sign Up</button>
    </div>
  );
};

export default Sidebar;
