/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import './Skills.scss';
import InScroll from '../../Helpers/InScroll';

function Skills() {
  const skillsRef = useRef();
  const imgInScroll = InScroll(skillsRef);
  return (
    <section className="Skills__skills">
      <div className="skills__title">
        Skills
      </div>
      <div className="skills__container">
        <div className={`container__left ${imgInScroll ? 'inscroll' : ''}`} ref={skillsRef}>
          <img alt="React" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
          <img alt="TypeScript" src="https://iconape.com/wp-content/files/fh/110909/png/typescript.png" />
          <img alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" />
          <img alt="ExpressJS" src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" />
          <img alt="PostgreSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" />
          <img alt="MongoDB" src="https://img.icons8.com/color/452/mongodb.png" />
        </div>
        <div className="container__right">
          <div className="left__title">
            I love working on projects on both the frontend
            and backend with a variety of frameworks.
          </div>
          <div className="left__second">
            These include React, GraphQL, Angular, JavaScript, TypeScript, PostgreSQL,
            Sequelize, NodeJS, MongoDB & Mongoose and I love learning new ones!
          </div>
        </div>
      </div>
      <div className="skills__background1" />
      <div className="skills__background2" />
    </section>
  );
}

export default Skills;
