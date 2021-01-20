/* eslint-disable react/prop-types */
import React from 'react';
import './Projects.scss';
import ProjectsArr from './Projs';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';
import FlipCard from '../FlipCard/FlipCard';

function Projects({ setOpen, setProject }) {
  const ProjFlipCard = FlipCard(CardFront, CardBack);
  const displayCard = (project) => (
    <ProjFlipCard
      key={project.title}
      setOpen={setOpen}
      setProject={setProject}
      project={project}
    />
  );
  return (
    <section className="Projects__projects">
      <div className="project__title">
        Project Portfolio
      </div>
      <div className="project__container">
        {ProjectsArr.map(displayCard)}
      </div>
      <div className="projects__background1" />
      <div className="projects__background2" />
    </section>
  );
}

export default Projects;
