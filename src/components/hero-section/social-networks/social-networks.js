import React from 'react';
import githubSVG from '../../../images/icons/github.svg';
import telegramSVG from '../../../images/icons/telegram.svg';
import twitterSVG from '../../../images/icons/twitter.svg';
import eventbriteSVG from '../../../images/icons/eventbrite.png';
import './social-networks.css'

const SocialNetworks = () => (
  <div className="social-networks">
    Siguenos en:
    <div>
      <a href="https://github.com/javascriptecuador/web" target="_blank">
        <img src={githubSVG} alt="imagen github" />
      </a>
      <a href="#">
        <img src={telegramSVG} alt="imagen github" />
      </a>
      <a href="#">
        <img src={twitterSVG} alt="imagen github" />
      </a>
      <a href="#">
        <img src={eventbriteSVG} alt="imagen github" />
      </a>
    </div>
  </div>
);

export default SocialNetworks;
