/* eslint-disable react/prop-types */
import React, { useLayoutEffect, useState } from 'react';
import DisplayImgForSlider from '../DisplayImgForSlider/DisplayImgForSlider';
import './DisplayImgContainer.scss';

function DisplayImgContainer({ imgs }) {
  const [currIndex, setCurrIndex] = useState(0);
  const addAnimation = (i) => {
    const img = document.querySelector(`#image__${i}`);
    const copyImg = img.cloneNode(true);
    copyImg.id = `image__${i + imgs.length}`;
    const slider = document.querySelector('.skills__carousel');
    slider.append(copyImg);
    img.style.animation = `startMove ${8 * (24 / 124)}s linear`;
    img.onanimationend = () => {
      img.style.animation = `endMove ${8 * (100 / 124)}s linear`;
      setCurrIndex(((curr) => curr + 1));
      img.onanimationend = () => {
        img.remove();
      };
    };
  };

  useLayoutEffect(() => {
    addAnimation(currIndex);
  }, [currIndex]);
  return (
    <div className="skills__carousel">
      {imgs.map((img, i) => <DisplayImgForSlider key={img} i={i} img={img} />)}
    </div>
  );
}

export default DisplayImgContainer;
