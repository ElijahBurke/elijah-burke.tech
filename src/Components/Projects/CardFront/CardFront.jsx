/* eslint-disable react/prop-types */
import React from 'react';
import './CardFront.scss';
import hover from './hover.svg';

function CardFront({ project }) {
  return (
    <div className="CardFront__front">
      <div className="front__title">
        {project.title}
      </div>
      <div className="front__stack">
        {project.stack.map((framework) => <div key={framework} className="stack__fw">{framework}</div>)}
      </div>
      <div className="front__github">
        <img src={hover} alt="" />
      </div>
    </div>
  );
}

export default CardFront;
