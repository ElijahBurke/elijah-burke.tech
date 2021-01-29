/* eslint-disable react/prop-types */
import React from 'react';
import './Skills.scss';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';

const imgs = [
  'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
  'https://cdn.worldvectorlogo.com/logos/redux.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png',
  'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png',
  'https://iconape.com/wp-content/files/fh/110909/png/typescript.png',
  'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  'https://www.nextontop.com/assets/img/services/web/expressjs.svg',
  'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
  'https://cdn.worldvectorlogo.com/logos/sequelize.svg',
  'https://img.icons8.com/color/452/mongodb.png',
  'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png',
];
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
