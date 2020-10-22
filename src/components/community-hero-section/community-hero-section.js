import React from 'react';
import './community-hero-section.css';
import CardSection from './card-section/card-section';

const communityHeroSection = () => {
    const cards = [
        {
            title: 'Organizar un Meetup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.',
            txtButton: 'Llenar formulario para organizar un Meetup',
            descriptionExample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        },
        {
            title: 'Impartir una charla',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.',
            txtButton: 'Llenar formulario para impartir charla',
            descriptionExample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        },
        {
            title: 'Escribir / Traducir un Artículo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.',
            txtButton: 'Llenar formulario para escribir un artículo',
            descriptionExample: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        },
      ];
    return (
        <div className='community-hero-section'>
             <div className="ec-container">
                <h3 className='section__title'>¿Cómo ayudar?</h3>
                {
                    cards.map( card => (
                        <CardSection title={card.title} description={card.description} txtButton={card.txtButton} descriptionExample={card.descriptionExample} />
                    ))
                }                    
             </div>
        </div>
    )
}

export default communityHeroSection;
