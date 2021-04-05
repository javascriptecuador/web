import React from "react";
import Card from "../UI/card/card";
import Carousel from "../UI/carousel/carousel";
import bracketsWidget from "../../images/widgets/brackets.svg";
import timesYellowWidget from "../../images/widgets/times-yellow.svg";
import timesPurpleWidget from "../../images/widgets/times-purple.svg";
import styles from "./cities-section.module.css";
import cities from "../../constants/cities";

const CitiesSection = () => {
  return (
    <section className={`ec-container ${styles.cities}`}>
      <img
        className={`small-widget ${styles.widget__timesYellow}`}
        src={timesYellowWidget}
      />
      <h2 className={`section-title ${styles.cities__title}`}>Ciudades</h2>
      <Carousel>
        {cities.map(({ imgURL, topic, description, link }) => (
          <Card
            imgURL={imgURL}
            topic={topic}
            description={description}
            link={link}
            key={topic}
          />
        ))}
      </Carousel>
      <img
        className={`small-widget ${styles.widget__bracket}`}
        src={bracketsWidget}
      />
      <img
        className={`small-widget ${styles.widget__timesPurple}`}
        src={timesPurpleWidget}
      />
    </section>
  );
};

export default CitiesSection;
