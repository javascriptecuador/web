import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import '../css/photo-slider.css';

const PhotoSlider = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    customPaging: () => <button></button>,
  };
  return (
    <div className='photo-slider'>
      <Slider {...settings}>
        {photos.map((photo, idx) => (
          <img src={photo.photoURL} alt={photo.name} key={idx} />
        ))}
      </Slider>
    </div>
  );
};

PhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      photoURL: PropTypes.string,
    })
  ),
};

export default PhotoSlider;
