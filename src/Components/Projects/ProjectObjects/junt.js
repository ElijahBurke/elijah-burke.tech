import homefullsize from './junt-images/Home-full-size.png';
import homeresize from './junt-images/Home-resize.png';
import addtest from './junt-images/add-test.png';
import addapplication from './junt-images/add-application.png';
import addedapplication from './junt-images/added-applications-full.png';
import addapplicationresized from './junt-images/added-applications.png';
import viewtest from './junt-images/view-test.png';
import viewtestresize from './junt-images/view-test-resizable.png';
import viewapp from './junt-images/display-app.png';
import viewappresize from './junt-images/display-app-resizable.png';

const desc = `Junt is your job search dashboard designed to help you find the best approach to your job search.
Using agile methods such as validated learning and A/B testing we help you find your most succesful approach.`;

export default {
  title: 'Junt',
  img: [
    { title: 'Home Page', img: homefullsize },
    { title: 'Home Page', img: homeresize },
    { title: 'Add A Test', img: addtest },
    { title: 'Add An Application', img: addapplication },
    { title: 'Display Tests', img: addedapplication },
    { title: 'Display Tests', img: addapplicationresized },
    { title: 'View Test', img: viewtest },
    { title: 'View Test', img: viewtestresize },
    { title: 'View Application', img: viewapp },
    { title: 'View Application', img: viewappresize },
  ],
  github: 'https://github.com/ElijahBurke/junt-client',
  url: 'https://junt-tool.netlify.app/',
  desc,
  stack: ['React', 'Ramda', 'Redux', 'NodeJS', 'PostgreSQL', 'Sequelize'],
};
