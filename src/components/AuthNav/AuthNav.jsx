import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Styles/AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={style.authNavList}>
      <li className={style.authNavItem}>
        <NavLink to="login">Login</NavLink>
      </li>

      <li className={style.authNavItem}>
        <NavLink to="register ">Registration</NavLink>
      </li>
    </ul>
  );
};
