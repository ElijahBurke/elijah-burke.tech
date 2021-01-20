/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './ThemeSwitch.scss';
import Sun from './switch-sun.svg';
import Moon from './switch-moon.svg';

function ThemeSwitch({ dark, setDark }) {
  const changeTheme = () => {
    if (!dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setDark(false);
    }
  };
  return (
    <div className="Switch__switch-container" onClick={changeTheme}>
      <img className="switch-container__sun" style={{ opacity: dark ? '' : '0' }} src={Sun} alt="" />
      <img className="switch-container__moon" style={{ opacity: dark ? '0' : '' }} src={Moon} alt="" />
      <div className={`switch-container__switch ${dark ? 'dark' : ''}`} />
    </div>
  );
}

export default ThemeSwitch;
