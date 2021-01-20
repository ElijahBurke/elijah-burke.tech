import EWSBImg from './screenshot-ewsb.png';

const desc = `Web Sockets Boilerplate is a package that if you run it on the command line,
installs the entire architecture for a socket based application with in built database support of
your choice. When running the command, you're prompted to choose a database and input your database
name. Providing the database already exists, the app comes out the box with a running mock front end
with a socket back end and integrated database support.`;

export default {
  title: 'EWSB',
  img: [{ title: 'Folder Structure', img: EWSBImg }],
  github: 'https://github.com/ElijahBurke/express-socket-io-boilerplate',
  url: undefined,
  desc,
  stack: ['Jest', 'MongoDB', 'ExpressJS', 'PostgreSQL', 'Sequelize', 'Mongoose'],
};
