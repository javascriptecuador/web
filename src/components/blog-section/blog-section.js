import React from "react";
import CardFactory from "../UI/card/card-factory";
import { generateDistribution } from "./utils";
import {
  BlogWrapper,
  BlogGrid,
  BlogTitle,
  BlogCard,
  BlogMore,
  BlogLink,
} from "./styles";

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

const BlogSection = () => {
  const dist = generateDistribution(fakeCardsData.length);
  const cards = dist.map(([start, end], pos) => {
    return fakeCardsData.slice(start, end).map((card, index) => {
      let rowStart = 2 * index + 1;
      let rowEnd = rowStart + 2;
      let gridColumn = null;
      let gridRow = `${rowStart} / ${rowEnd}`;
      let direction = 'column';
      let paddingLeft = 0;

      if (pos === 0) {
        gridColumn = "1 / 2";
      }
      if (pos === 1) {
        gridRow = `${index + 1} / ${index + 2}`;
        gridColumn = "2 / 3";
        direction = 'row';
        paddingLeft = 1;
      }
      if (pos === 2) {
        gridColumn = "3 / 4";
      }
      return (
        <BlogCard
          gridRow={gridRow}
          gridColumn={gridColumn}
          flexDirection={direction}
          paddingLeft={paddingLeft}
          key={card.id}
        >
          <CardFactory entry={card} />
        </BlogCard>
      );
    });
  });

  return (
    <BlogWrapper id="blog-section" className={`ec-container`}>
      <BlogTitle className={`section-title `}>Blog</BlogTitle>
      <BlogGrid>
        {cards}
      </BlogGrid>
        <BlogMore>
          <BlogLink to="/blog">Leer más</BlogLink>
        </BlogMore>
    </BlogWrapper>
  );
};

export default BlogSection;
