/* eslint-disable react/prop-types */
import React from 'react';
import './Contact.scss';
import GitHub from '../Hero/GitHub.svg';
import LinkedIn from '../Hero/LinkedIn.svg';
import Email from './Email.svg';
import Starry from './starry-window.svg';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <section className="Contact__contact">
      <div className="contact__title">
        Contact
      </div>
      <div className="contact__container">
        <div className="container__left">
          <div className="left-container__links">
            <div className="links__title">
              You can contact me via:
            </div>
            <a className="links__email" href="mailto:elijah_burke@hotmail.com">
              <img src={Email} alt="email svg" />
              Elijah_Burke@hotmail.co.uk
            </a>
            <a className="links__git" href="https://www.github.com/elijahburke" rel="noreferrer" target="_blank">
              <img src={GitHub} alt="github link" />
              GitHub
            </a>
            <a className="links__linked-in" href="https://www.linkedin.com/in/elijahburke" rel="noreferrer" target="_blank">
              <img src={LinkedIn} alt="linked in svg" />
              Linked In
            </a>
          </div>
        </div>
        <div className="container__right">
          <img src={Starry} alt="" />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
