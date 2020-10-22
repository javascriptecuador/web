import React from 'react';
import './cities-section.css';
import Card from '../UI/card/card';
import ambatoImg from '../../images/cities/ambato.jpg';
import cuencaImg from '../../images/cities/cuenca.jpg';
import guayaquilImg from '../../images/cities/guayaquil.jpg';
import latacungaImg from '../../images/cities/latacunga.jpg';
import lojaImg from '../../images/cities/loja.jpg';
import quitoImg from '../../images/cities/quito.jpg';
import riobambaImg from '../../images/cities/riobamba.jpg';
import Carousel from '../UI/carousel/carousel';
import bracketsWidget from '../../images/widgets/brackets.svg'
import timesYellowWidget from '../../images/widgets/times-yellow.svg'
import timesPurpleWidget from '../../images/widgets/times-purple.svg'

const CitiesSection = () => {
  const cities = [
    {
      imgURL: quitoImg,
      topic: 'Quito.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
    {
      imgURL: guayaquilImg,
      topic: 'Guayaquil.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
    {
      imgURL: cuencaImg,
      topic: 'Cuenca.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
    {
      imgURL: lojaImg,
      topic: 'Loja.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
    {
      imgURL: riobambaImg,
      topic: 'Riobamba.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
    {
      imgURL: ambatoImg,
      topic: 'Ambato.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
    {
      imgURL: latacungaImg,
      topic: 'Latacunga.js',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem repellat molestias quod repudiandae quo atque, nobis saepe ducimus, consectetur voluptates pariatur animi.',
      link: '#',
    },
  ];
  return (
    <section className="cities-section ec-container">
      <img className="small-widget times-yellow" src={timesYellowWidget} />
      <h2 className="section-title">Ciudades</h2>
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
      <img className="small-widget bracket" src={bracketsWidget} />
      <img className="small-widget times-purple" src={timesPurpleWidget} />
    </section>
  );
};

export default CitiesSection;
