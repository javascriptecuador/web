import React from "react";
import CardFactory from "../card/card-factory";
import { generateDistribution } from "./utils";
import { BlogGrid, BlogCard } from "./styles";

// replace this fakeData with Graphql data
const fakeCardsData = [
  {
    id: 1,
    title: "Titulo post",
    subtitle: null,
    url_img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    description_title: "Descripción",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    url_entry: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
    type: "blog",
  },
  {
    id: 2,
    title: "Titulo post",
    subtitle: null,
    url_img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    description_title: "Descripción",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    url_entry: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
    type: "blog",
  },
  {
    id: 3,
    title: "Titulo post",
    subtitle: null,
    url_img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    description_title: "Descripción",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    url_entry: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
    type: "blog",
  },
  {
    id: 4,
    title: "Titulo post",
    subtitle: null,
    url_img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    description_title: "Descripción",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    url_entry: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
    type: "blog",
  },
  {
    id: 5,
    title: "Titulo post",
    subtitle: null,
    url_img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    description_title: "Descripción",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    url_entry: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
    type: "blog",
  },
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

const BlogEntries = () => {
  let subIndex1 = 0,
    subIndex2 = 0,
    subIndex3 = 0;
  const dist = generateDistribution(fakeCardsData.length);
  const cards = fakeCardsData.map((card, index) => {
    let styles = {
      flexDirection: "column",
      paddingLeft: 0,
    };
    let rowStart = 0;
    let rowEnd = 0;

    if (index < dist[0][1] && index >= dist[0][0]) {
      rowStart = 2 * subIndex1 + 1;
      rowEnd = rowStart + 2;
      styles.gridRow = `${rowStart} / ${rowEnd}`;
      styles.gridColumn = "1 / 2";
      subIndex1++;
    }
    if (index < dist[1][1] && index >= dist[1][0]) {
      styles.gridRow = `${subIndex2 + 1} / ${subIndex2 + 2}`;
      styles.gridColumn = "2 / 3";
      styles.flexDirection = "row";
      styles.paddingLeft = 1;
      subIndex2++;
    }
    if (index < dist[2][1] && index >= dist[2][0]) {
      rowStart = 2 * subIndex3 + 1;
      rowEnd = rowStart + 2;
      styles.gridRow = `${rowStart} / ${rowEnd}`;
      styles.gridColumn = "3 / 4";
      subIndex3++;
    }

    return (
      <BlogCard
        gridRow={styles.gridRow}
        gridColumn={styles.gridColumn}
        flexDirection={styles.flexDirection}
        paddingLeft={styles.paddingLeft}
        key={card.id}
      >
        <CardFactory entry={card} />
      </BlogCard>
    );
  });

  return <BlogGrid>{cards}</BlogGrid>;
};

export default BlogEntries;
