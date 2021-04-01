import React from "react";
import PropTypes from "prop-types";
import { CardDesign } from "./card-design";
import { card } from "../../../constants/card.config";

// For more info, visit the following url:
// https://dev.to/shadid12/react-js-with-factory-pattern-building-complex-ui-with-ease-1ojf
const CardFactory = ({ entry }) => {
  const {
    id,
    img,
    type,
    title,
    subtitle,
    description,
    description_title,
    url_entry,
    direction,
    ...others
  } = entry;
  const dataEntry = {
    id,
    img,
    title,
    subtitle,
    description,
    description_title,
    url_entry,
    direction,
  };

  switch (type) {
    case "blog":
      return (
        <CardDesign data={dataEntry} optionalData={others} styles={card.blog} />
      );
    case "city":
      return (
        <CardDesign data={dataEntry} optionalData={others} styles={card.city} />
      );
    case "event":
      return (
        <CardDesign
          data={dataEntry}
          optionalData={others}
          styles={card.event}
        />
      );
    default:
      return <div>Cargando...</div>;
  }
};

CardFactory.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default CardFactory;
