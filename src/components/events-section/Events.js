import React from "react";
import styles from "./events.module.css";
import Carousel from "../UI/carousel/carousel";
import Card from "../UI/card/card";
import eventos from "../../constants/eventos";
import triangle from "../../images/widgets/triangle.svg";
import bracketsWidget from "../../images/widgets/brackets2.svg";

const Events = () => {
  return (
    <section className={`${styles.events} ec-container`}>
      <h2 className={styles.events__title}>Eventos</h2>
      <Carousel>
        {eventos.map(
          ({ id, imagen, titulo, fechaHora, disertantes, resumen, url }) => (
            <Card
              imgURL={imagen}
              topic={titulo}
              dateTime={fechaHora}
              description={resumen}
              descriptionTitle="Disertantes"
              link={url}
              topicFontSize="1rem"
              readMoreColor="#046294"
              viewportHeight="246px"
              textSpacing="0"
              lineHeight="1.1"
              key={id}
            />
          )
        )}
      </Carousel>
      <img
        className={`small-widget ${styles.events__triangle}`}
        src={triangle}
      />
      <img
        className={`small-widget ${styles.events__bracket}`}
        src={bracketsWidget}
      />
    </section>
  );
};

export default Events;
