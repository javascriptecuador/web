import React from "react";
import "./community-hero-section.css";
import CardSection from "./card-section/card-section";

const communityHeroSection = () => {
  const cards = [
    {
      title: "Organizar un Meetup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus accumsan sapien a elementum. Vestibulum nibh nisi, semper sit amet egestas non, blandit id turpis. Nam accumsan lectus et ultrices lacinia. In vehicula, odio eu molestie pretium, eros eros hendrerit arcu, ut efficitur quam dolor id diam. Nam sed massa scelerisque, dictum quam vel, egestas metus.",
      txtButton: "Llenar formulario para organizar un Meetup",
      descriptionExample:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus accumsan sapien a elementum. Vestibulum nibh nisi, semper sit amet egestas non, blandit id turpis. Nam accumsan lectus et ultrices lacinia. In vehicula, odio eu molestie pretium.",
    },
    {
      title: "Impartir una charla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus accumsan sapien a elementum. Vestibulum nibh nisi, semper sit amet egestas non, blandit id turpis. Nam accumsan lectus et ultrices lacinia. In vehicula, odio eu molestie pretium, eros eros hendrerit arcu, ut efficitur quam dolor id diam. Nam sed massa scelerisque, dictum quam vel, egestas metus.",
      txtButton: "Llenar formulario para impartir charla",
      descriptionExample:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus accumsan sapien a elementum. Vestibulum nibh nisi, semper sit amet egestas non, blandit id turpis. Nam accumsan lectus et ultrices lacinia. In vehicula, odio eu molestie pretium.",
    },
    {
      title: "Escribir / Traducir un Artículo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus accumsan sapien a elementum. Vestibulum nibh nisi, semper sit amet egestas non, blandit id turpis. Nam accumsan lectus et ultrices lacinia. In vehicula, odio eu molestie pretium, eros eros hendrerit arcu, ut efficitur quam dolor id diam. Nam sed massa scelerisque, dictum quam vel, egestas metus.",
      txtButton: "Llenar formulario para escribir un artículo",
      descriptionExample:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus accumsan sapien a elementum. Vestibulum nibh nisi, semper sit amet egestas non, blandit id turpis. Nam accumsan lectus et ultrices lacinia. In vehicula, odio eu molestie pretium.",
    },
  ];
  return (
    <div className="community-hero-section">
      <div className="ec-container">
        <h3 className="section__title">¿Cómo ayudar?</h3>
        {cards.map((card, idx) => (
          <CardSection
            title={card.title}
            description={card.description}
            txtButton={card.txtButton}
            descriptionExample={card.descriptionExample}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default communityHeroSection;
