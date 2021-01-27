import MMAPIHome from './mmapi-images/mmapi-home.png';
import MMAPIRest from './mmapi-images/mmapi-rest.png';
import MMAPIGQL from './mmapi-images/mmapi-gql1.png';
import MMAPIGQL2 from './mmapi-images/mmapi-gql2.png';

const desc = `MMAPI is an API for every fight, fighter and event that has ever taken place in the UFC - the worlds largest Mixed Martial Arts promotion company.
It allows users to get this information from our database using either traditional REST API routes or fully customisable GraphQL queries.
There are also comprehensive docs for users and we built a custom GraphQL playground so that people could test out their queries.`;

export default {
  title: 'MMAPI',
  img: [
    { title: 'Demo Video', img: 'https://www.youtube.com/watch?v=itit15pqOjA', video: true },
    { title: 'Home', img: MMAPIHome },
    { title: 'Rest Docs', img: MMAPIRest },
    { title: 'GQL Docs', img: MMAPIGQL },
    { title: 'Query Result', img: MMAPIGQL2 },
  ],
  github: 'https://github.com/ElijahBurke/MMAPI',
  url: 'https://mmapi.netlify.app/',
  desc,
  stack: ['React', 'GraphQL', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'Sequelize'],
};
