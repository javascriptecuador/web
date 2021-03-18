import React from "react";
import { Link } from "gatsby";
import styles from "./blog-section.module.css";
import BlogCard from "../UI/blog-card/blog-card";

const fakeCardsData = [
  {
    title: "Titulo post",
    img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    descriptionTitle: "Descripción:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    link: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
  },
  {
    title: "Titulo post",
    img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    descriptionTitle: "Descripción:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    link: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
  },
  {
    title: "Titulo post",
    img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    descriptionTitle: "Descripción:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    link: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
  },
  {
    title: "Titulo post",
    img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    descriptionTitle: "Descripción:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    link: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
  },
  {
    title: "Titulo post",
    img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    descriptionTitle: "Descripción:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    link: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
  },
  {
    title: "Titulo post",
    img:
      "https://javascriptecuador.netlify.app/static/quito-605ac9d2e0009a60014111b3bedf73c9.jpg",
    descriptionTitle: "Descripción:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Aperiam cumque minus eius itaque odio ullam quam repudiandae delectus. Totam, eveniet deserunt. Nobis, mollitia natus! Architecto alias asperiores rerum.",
    link: "!#",
    author: "Jerson Morocho",
    date: "Marzo 17, 2021",
    timeago: "5 min. Lectura",
  },
];

const BlogSection = () => {
  const GRID_LEFT = "1 / 1 / 3 / 2";
  const GRID_RIGHT = "1 / 3 / 3 / 4";

  const largeView = fakeCardsData.slice(0, 5).map((el, index) => {
    let position = {};
    el.orientation = "v";

    // TODO: Actualmente no es ampliable. Solo soporta 5 items
    // A futuro debe recibir un array de dos dimesiones: [[],[],[]]
    // Cada sub array representa una columna
    // En cada sub array se indicarán los indices de cada elemento a mostrarse
    if ([0].includes(index)) {
      position.gridArea = GRID_LEFT;
    } else if ([1, 2, 3].includes(index)) {
      position.gridArea = `${index} / 2 / ${index + 1} / 3`;
      // identificar cuando cambia el tamaño de pantalla
      // d
      el.orientation = "h";
    } else if ([4].includes(index)) {
      position.gridArea = GRID_RIGHT;
    }

    return (
      <div style={position} key={index}>
        <BlogCard
          title={el.title}
          imgUrl={el.img}
          descriptionTitle={el.descriptionTitle}
          description={el.description}
          link={el.link}
          author={el.author}
          date={el.date}
          timeago={el.timeago}
          orientation={el.orientation}
        />
      </div>
    );
  });

  return (
    <section id="blog-section" className={`ec-container ${styles.blogSection}`}>
      <h2 className={`section-title ${styles.blogSection__title}`}>Blog</h2>
      <div className={styles.blogContainer}>
        {largeView}
        {/* FIXME: Hay un bug, el link debe ir posicionandose conforme crecen los elementos */}
        <div className={styles.blogContainer__more}>
          <Link className={styles.blogContainer__more__link} to="/blog">
            Leer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
