import MMAPIImg from './screenshot-mmapi.png';

const desc = `MMAPI is an API for every fight, fighter and event that has ever taken place in the UFC - the worlds largest Mixed Martial Arts promotion company.
It allows users to get this information from our database using either traditional REST API routes or fully customisable GraphQL queries.
There are also comprehensive docs for users and we built a custom GraphQL playground so that people could test out their queries.`;

export default {
  title: 'MMAPI',
  img: [{ title: 'Demo Video', img: 'https://www.youtube.com/watch?v=itit15pqOjA', video: true }, { title: 'Docs', img: MMAPIImg }],
  github: 'https://github.com/ElijahBurke/MMAPI',
  url: 'https://mmapi.netlify.app/',
  desc,
  stack: ['React', 'GraphQL', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'Sequelize'],
};
