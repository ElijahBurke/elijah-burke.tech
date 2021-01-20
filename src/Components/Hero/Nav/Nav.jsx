import React from 'react';
import './Nav.scss';
import ThemeSwitch from '../../ThemeSwitch/ThemeSwitch';
import LinkedIn from '../LinkedIn.svg';
import GitHub from '../GitHub.svg';
import scrollToEl from '../../../Helpers/ScrollToEl';

// eslint-disable-next-line react/prop-types
function Nav({ dark, setDark }) {
  return (
    <div className="Nav__nav">
      <div className="nav__left">
        <ThemeSwitch dark={dark} setDark={setDark} />
        <div className="left__contact">
          <a href="https://github.com/ElijahBurke" rel="noreferrer" target="_blank">
            <img src={GitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/elijahburke/" rel="noreferrer" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="nav__right">
        <button type="button" className="right__borderless" onClick={() => scrollToEl('.Profile__profile')}>Profile</button>
        <button type="button" className="right__borderless" onClick={() => scrollToEl('.Skills__skills')}>Skills</button>
        <button type="button" className="right__borderless" onClick={() => scrollToEl('.Projects__projects')}>Projects</button>
        <button type="button" className="right__contact" onClick={() => scrollToEl('.Contact__contact')}>Contact</button>
      </div>
    </div>
  );
}

export default Nav;
