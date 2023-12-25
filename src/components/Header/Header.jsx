import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './header.css';

const Header = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;