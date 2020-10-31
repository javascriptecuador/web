import React from "react";
import githubSVG from "../../../images/icons/github.svg";
import telegramSVG from "../../../images/icons/telegram.svg";
import twitterSVG from "../../../images/icons/twitter.svg";
import eventbriteSVG from "../../../images/icons/eventbrite.png";
import "./social-networks.css";

const SocialNetworks = () => (
  <div className="social-networks">
    Siguenos en:
    <div>
      <a href="https://github.com/javascriptecuador/web" target="_blank">
        <img src={githubSVG} alt="imagen github" />
      </a>
      <a href="https://t.me/javascriptecuador" target="_blank">
        <img src={telegramSVG} alt="imagen telegram" />
      </a>
      <a href="https://twitter.com/jsecuador_" target="_blank">
        <img src={twitterSVG} alt="imagen twitter" />
      </a>
      <a
        href="https://www.eventbrite.com/o/javascript-ecuador-29109297643?aff=eand"
        target="_blank"
      >
        <img src={eventbriteSVG} alt="imagen eventBrite" />
      </a>
    </div>
  </div>
);

export default SocialNetworks;
