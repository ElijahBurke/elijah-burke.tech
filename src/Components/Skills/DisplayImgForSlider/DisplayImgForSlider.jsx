/* eslint-disable react/prop-types */
import React from 'react';
import './DisplayImgForSlider.scss';

function DisplayImgForSlider({ img, i }) {
  return (
    <div className="sliding__container" id={`image__${i}`}>
      <img className="slider__image" src={img} alt="" />
    </div>
  );
}

export default DisplayImgForSlider;
