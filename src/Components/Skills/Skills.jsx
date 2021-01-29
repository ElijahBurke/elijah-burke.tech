/* eslint-disable react/prop-types */
import React from 'react';
import './Skills.scss';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import imgs from './SkillImgs/skills';

function Skills() {
  const mapper = (img) => (
    <div className="img__container">
      <img src={img} alt="" />
    </div>
  );
  return (
    <section className="Skills__skills">
      <div className="skills__title">
        Skills
      </div>
      <div className="skills__container">
        <div className="left__title">
          I love working on projects on both the frontend
          and backend with a variety of frameworks.
        </div>
        <div className="left__second">
          These include React, GraphQL, Angular, JavaScript, TypeScript, PostgreSQL,
          Sequelize, NodeJS, MongoDB & Mongoose and I love learning new ones!
        </div>
      </div>
      <div className="scrolling__container">
        <ReactScrolling list={imgs} mapper={mapper} width="150px" time="40s" />
      </div>
      <div className="skills__background1" />
      <div className="skills__background2" />
    </section>
  );
}

export default Skills;
