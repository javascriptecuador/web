import React from 'react';
import CommunityDescription from '../community-section/community-description/community-description';
import PropTypes from 'prop-types'
import './hero-section.css'
import SocialNetworks from './social-networks/social-networks';
import javascriptMapWidget from '../../images/widgets/js-ecuador-map.svg'

const HeroSection = ({ title, subtitle }) => (
  <div className="hero-section ec-container ">
    <div className="hero-text">
      <h1 className="hero-title">{title}</h1>
      <h4 className="hero-subtitle">{subtitle}</h4>
      <CommunityDescription />
      <SocialNetworks />
      <img className="widget map" src={javascriptMapWidget}  />
    </div>
  </div>
);

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default HeroSection;
