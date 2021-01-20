import React from 'react';
import './Footer.scss';
import LinkedIn from '../Hero/LinkedIn.svg';
import GitHub from '../Hero/GitHub.svg';

function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <div>
          &#169; 2020 - London, all rights reserved - Elijah Burke.
        </div>
        <div className="footer__contact">
          <a href="https://www.github.com/elijahburke" rel="noreferrer" target="_blank">
            <img src={GitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/elijahburke" rel="noreferrer" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
