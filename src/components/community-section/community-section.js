import React from "react";
import Button from "../UI/button/button";
import CommunityDescription from "./community-description/community-description";
import PhotoSlider from "./photo-slider/photo-slider";
import circleWidget from "../../images/widgets/circle.svg";
import squareWidget from "../../images/widgets/square.svg";
import photos from "../../constants/slider";
import "./community-section.css";

const CommunitySection = () => (
  <section className="community-section ec-container">
    <div className="section-block slider">
      <PhotoSlider photos={photos} />
    </div>
    <div className="section-block info">
      <ul className="headings">
        <li className="heading-item-title">
          <h3 className="heading title">Comunidad</h3>
        </li>
        <li className="heading-item-subtitle">
          <h4 className="heading subtitle">Javascript del Ecuador</h4>
        </li>
      </ul>
      <CommunityDescription />
      <div className="call-to-action">
        <Button type="secondary">Conocer a la Comunidad</Button>
        <Button type="secondary">Cómo ayudar?</Button>
        <Button type="primary">Código de Conducta</Button>
      </div>
    </div>
    <img className="widget circle" src={circleWidget} />
    <img className="widget square" src={squareWidget} />
  </section>
);

export default CommunitySection;
