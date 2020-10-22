import React from "react";
import './events.css';
import Carousel from '../UI/carousel/carousel';
import Card from '../UI/card/card';
import eventos from "../../constants/eventos";
import triagle from "../../images/widgets/triangle.svg"
import bracketsWidget from '../../images/widgets/brackets.svg'

const Events = () => {
  return (
    <section className="events-section ec-container">
      <h2 className= "section-title" >Eventos</h2>
      <Carousel>
        {eventos.map(({ id, imagen, titulo, fechaHora, disertantes, resumen, url }) => (
          <Card 
            imgURL={imagen}
            topic={titulo}
            date={fechaHora}
            description={resumen}
            link={url}
            topicFontSize="1rem"
            readMoreColor="#046294"
            key={id}
          />
        ))}
      </Carousel>
      <img className="small-widget triangle" src={triagle} />
      <img className="small-widget event-bracket" src={bracketsWidget} />
    </section >
  )
}

export default Events
