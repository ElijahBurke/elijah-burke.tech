/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './FullPageDisplay.scss';
import FullPageModal from '../../../FullPageModal/FullPageModal';

function FullPageDisplay({ project }) {
  const [currIndex, setCurrIndex] = useState(0);
  const incrIndex = () => {
    setCurrIndex((curr) => (curr + 1 === project.img.length ? 0 : ++curr));
  };
  const decrIndex = () => {
    setCurrIndex((curr) => (curr === 0 ? project.img.length - 1 : --curr));
  };
  return (
    <div className="FullPageDisplay__display">
      <div className="display__title">
        {project.img[currIndex].title}
      </div>
      <div className="display__slider">
        { project.img[currIndex].video
          ? (
            <div className="iframe__container">
              <iframe
                src={project.img[currIndex].img.replace('watch?v=', 'embed/')}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="video"
                width="1000px"
              />
            </div>
          )
          : <img src={project.img[currIndex].img} alt="" />}
      </div>
      {project.img.length > 1
      && (
      <div className="display__controls">
        <button type="button" onClick={decrIndex}>
          {'<'}
        </button>
        <button type="button" onClick={incrIndex}>
          {'>'}
        </button>
      </div>
      )}
    </div>
  );
}

export default FullPageModal(FullPageDisplay);
