// Avatar.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ username }) => {
  
  const formattedUsername = username.replace(/\s+/g, '_');

  return (
    <div className="avatar-container">
      <img
        src={`/images/${formattedUsername}.png`} // Adjust the path based on your folder structure
        alt={`Avatar for ${username}`}
        className="avatar-image"
      />
    </div>
  );
};

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Avatar;

