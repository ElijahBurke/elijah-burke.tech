import React, { useEffect, useState, useRef } from 'react';
import './Hero.scss';
import gsap from 'gsap';
import randomStar from './randomStar';
import Nav from './Nav/Nav';
import Trees from './trees.svg';
import Moon from './Moon.svg';
import Sun from './Sun.svg';
import scrollToEl from '../../Helpers/ScrollToEl';

// eslint-disable-next-line react/prop-types
function Hero({ dark, setDark }) {
  const heroRef = useRef();
  const [SunTL, setSunTL] = useState(null);
  const [currInt, setCurrInt] = useState(false);
  useEffect(() => {
    if (!SunTL) {
      setSunTL(() => gsap.timeline({ paused: true })
        .to('.hero__sun', { clipPath: 'circle(0%)', duration: 0.7 })
        .to('.hero__moon', { clipPath: 'circle(50%)', duration: 0.7 }));
    }
    if (dark && SunTL) {
      SunTL.play();
      setCurrInt(setInterval(() => randomStar(heroRef), 1800));
    } else if (!dark && SunTL) {
      SunTL.reverse();
      if (currInt) clearInterval(currInt);
    }
    return () => { clearInterval(currInt); };
  }, [dark, SunTL]);
  return (
    <section className="Hero__hero" ref={heroRef}>
      <Nav dark={dark} setDark={setDark} />
      <div className="hero__main">
        <div className="main__left-container">
          <h1>
            ELIJAH BURKE
          </h1>
          <h3>
            FULL STACK DEVELOPER
          </h3>
          <div className="left-container__button">
            <button type="submit" onClick={() => scrollToEl('.Contact__contact')}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <img className="hero__svg" src={Trees} alt="" />
      <img className="hero__moon" src={Moon} alt="" />
      <img className="hero__sun" src={Sun} alt="" />
      <div className="hero__background" />
    </section>
  );
}

export default Hero;
