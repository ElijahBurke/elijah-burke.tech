/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import './FlipCard.scss';

const FlipCard = (Component1, Component2) => function Flip({ setProject, setOpen, project }) {
  return (
    <div className="card">
      <div className="front">
        <Component1 project={project} />
      </div>
      <div className="back">
        <Component2 setProject={setProject} setOpen={setOpen} project={project} />
      </div>
    </div>
  );
};

export default FlipCard;
