import React from "react";
import CardFactory from "../card/card-factory";
import { getStyles } from "./utils";
import { BlogGrid, BlogCard } from "./styles";

// TODO: Fake city & event cards
const fakeCardsData = [
  // {
  //   id: 5,
  //   title: "Trabajo Remoto",
  //   subtitle: "Enero 16 - 17:00",
  //   url_img:
  //     "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
  //   description_title: "Disertantes",
  //   description: "Crysfel Villa, Freddy Santacruz",
  //   url_entry: "!#",
  //   type: "event",
  // },
  // {
  //   id: 6,
  //   title: "Guayaquil.js",
  //   subtitle: null,
  //   url_img:
  //     "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
  //   description_title: "Descripción",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
  //   url_entry: "!#",
  //   author: "Crysfel Villa, Freddy Santacruz",
  //   type: "city",
  // },
];

const BlogEntries = ({ data }) => {
  const styles = getStyles(data.length);
  const cards = data.map((card, index) => {
    console.log(card);
    const {
      gridRow,
      widthImg,
      gridColumn,
      flexDirection,
      paddingLeftContent,
      paddingTopContent,
      paddingBottomTitle,
      paddingBlockFooter,
    } = styles[index];

    return (
      <BlogCard
        gridRow={gridRow}
        widthImg={widthImg}
        gridColumn={gridColumn}
        flexDirection={flexDirection}
        paddingLeftContent={paddingLeftContent}
        paddingTopContent={paddingTopContent}
        paddingBottomTitle={paddingBottomTitle}
        paddingBlockFooter={paddingBlockFooter}
        key={card.id}
      >
        <CardFactory entry={card} />
      </BlogCard>
    );
  });

  return <BlogGrid>{cards}</BlogGrid>;
};

export default BlogEntries;
