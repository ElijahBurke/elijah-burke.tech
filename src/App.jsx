import React, { useState } from 'react';
import './App.scss';
import Hero from './Components/Hero/Hero';
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import FullPageDisplay from './Components/Projects/CardBack/FullPageDisplay/FullPageDisplay';
import GetScreenWidth from './Helpers/GetWidth';

function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({});
  const width = GetScreenWidth();
  return (
    <>
      { width > 900 ? (
        <div className="App">
          <Hero dark={dark} setDark={setDark} />
          <Profile />
          <Skills />
          <Projects setOpen={() => setOpen(true)} setProject={setProject} />
          <Contact />
        </div>
      )
        : (
          <div className="__small">
            <div>
              This website is not suitable for small devices, please view on a larger screen
            </div>
          </div>
        )}
      { open
      && (
      <FullPageDisplay
        cb={() => setOpen(false)}
        project={project}
      />
      )}
    </>
  );
}

export default App;
