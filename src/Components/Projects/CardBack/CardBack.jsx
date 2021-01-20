/* eslint-disable react/prop-types */
import React from 'react';
import './CardBack.scss';

function CardBack({ setProject, setOpen, project }) {
  const set = (proj) => () => {
    setProject(proj);
    setOpen();
  };
  return (
    <div className="CardBack__back">
      <div className="back__desc">
        {project.desc.length < 150 ? project.desc.length : `${project.desc.slice(0, 160)}...`}
      </div>
      <div className="back__button">
        {project.url
        && (
        <button type="button">
          <a href={project.url} rel="noreferrer" target="_blank">Visit Site</a>
        </button>
        )}
        {project.img.length > 0
        && (
        <button type="button" onClick={set(project)}>
          View More
        </button>
        )}
      </div>
    </div>
  );
}

export default CardBack;
