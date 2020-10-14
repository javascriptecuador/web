import React from 'react';
import CommunityDescription from '../community-section/community-description/community-description';
import PropTypes from 'prop-types'
import './hero-section.css'
import SocialNetworks from './social-networks/social-networks';
import mapWidget from '../../images/widgets/js-ecuador-map.svg'
import CityMarkers from './city-markers/city-markers';

const HeroSection = ({ title, subtitle }) => (
  <section className="hero-section ec-container ">
    <div className="hero-text">
      <h1 className="hero-title">{title}</h1>
      <h4 className="hero-subtitle">{subtitle}</h4>
      <CommunityDescription />
      <SocialNetworks />
    </div>
    <div className="map-container">
      <img className="ec-map" src={mapWidget}  />
      <CityMarkers />
    </div>
  </section>
);

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default HeroSection;
