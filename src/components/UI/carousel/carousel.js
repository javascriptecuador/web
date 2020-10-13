import React, { useState, useRef, useEffect } from "react";
import "./carousel.css";
import leftArrow from "../../../images/icons/chevron-left.svg";
import rightArrow from "../../../images/icons/chevron-right.svg";

const Carousel = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [width, setwidth] = useState(0)
  const carouselRef = useRef(null)
  const cardWidth = 291
  // Card width plus margin
  const cardWidthTotal = cardWidth + 32

  /**
   * Methods to move the carousel
   */
  const goToLeft = () => {
    setCounter((prevCount) => prevCount - 1);
  }
  const goToRight = () => {
    setCounter(prevCount => prevCount + 1)
  }

  let offset = - counter * cardWidthTotal;
  let slideStyle = {transform: `translateX(${offset}px)`};

  let leftButton = (
    <button className="left-arrow" onClick={goToLeft}>
      <img src={leftArrow} />
    </button>
  );

  if (counter === 0) {
    leftButton = null;
  }

  let rightButton = (
    <button className="right-arrow" onClick={goToRight}>
      <img src={rightArrow} />
    </button>
  );

  useEffect(() => {
    setwidth(carouselRef.current.offsetWidth);
    window.addEventListener("resize", handleResize);
  }, [carouselRef, width, cardWidth]);

  const handleResize = () => {
    setwidth(carouselRef.current.offsetWidth);
  }

  const totalCards = children.length
  const minCards = Math.floor(width / cardWidth) >= 1 ? Math.floor(width / cardWidth) : 1
  const cardsShown = minCards + counter;

  // If all cards were shown, don't display next button
  if (cardsShown >= totalCards) {
    rightButton = null
  }

  return (
    <div className="carousel">
      {leftButton}
      <div className="carousel-slide" style={slideStyle} ref={carouselRef}>
        {children}
      </div>
      {rightButton}
    </div>
  );
};


export default Carousel;
