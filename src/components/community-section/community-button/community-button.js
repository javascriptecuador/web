import React from 'react';
import PropTypes from 'prop-types';
import './community-button.css';

const CommunityButton = ({ type, children }) => {
  return <button className={`community-button ${type}`}>{children}</button>;
};

CommunityButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default CommunityButton;
