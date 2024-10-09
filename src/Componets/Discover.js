import React from 'react';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
  const navigate = useNavigate(); // Function to programmatically navigate

  const handleDivClick = () => {
    navigate('/details'); // Navigate to the details page on click
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div
        style={{ padding: '20px', backgroundColor: '#ccc', cursor: 'pointer' }}
        onClick={handleDivClick}
      >
        <h2>Click Here to View Details</h2>
      </div>
    </div>
  );
};

export default Discover;
