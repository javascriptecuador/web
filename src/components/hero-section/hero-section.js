import React from 'react';
import CommunityDescription from '../community-description/community-description';
import PropTypes from 'prop-types'
import './hero-section.css'

const HeroSection = ({ title, subtitle }) => (
  <div className='hero-section'>
    <h1 className='hero-title'>{title}</h1>
    <h4 className='hero-subtitle'>{subtitle}</h4>
    <CommunityDescription />
  </div>
);

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default HeroSection;
