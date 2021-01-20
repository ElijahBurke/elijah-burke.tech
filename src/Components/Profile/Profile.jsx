/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import './Profile.scss';
import Me from './me.png';
import InScroll from '../../Helpers/InScroll';

function Profile() {
  const imgRef = useRef();
  const imgInScroll = InScroll(imgRef);

  return (
    <section className="Profile__profile">
      <div className="profile__title">
        Profile
      </div>
      <div className="profile__container">
        <div className="container__left">
          <div className="left__title">
            Full stack software engineer and clean code enthusiast
            with a passion for anything JavaScript or TypeScript.
          </div>
          <div className="left__second">
            With a degree in Accounting & Finance, I have a particular interest in the flourishing
            Fintech scene in London.
          </div>
        </div>
        <div className="container__right">
          <div className={`img__container ${imgInScroll ? 'inscroll' : ''}`}>
            <img src={Me} alt="" ref={imgRef} />
          </div>
        </div>
      </div>
      <div className="profile__background1" />
      <div className="profile__background2" />
    </section>
  );
}

export default Profile;
