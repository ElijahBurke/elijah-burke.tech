import OngakuImg from './screenshot-ongaku.png';

const desc = `Ongaku is a music sharing community. Users can create, save and discover posts by other users, navigate through the whole Discogs (worlds largest music
database and marketplace) API with an emphasis on discovering music that they would not normally be exposed to. They can also access their Discogs wantlist and collections, interacting with them through our app.`;

export default {
  title: 'Ongaku',
  img: [{ title: 'Demo Video', img: 'https://www.youtube.com/embed/KVgAz-cXcDc', video: true }, { title: 'Ongaku Poster', img: OngakuImg }],
  github: 'https://github.com/ElijahBurke/ongaku',
  url: undefined,
  desc,
  stack: ['React', 'TypeScript', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'Sequelize'],
};
