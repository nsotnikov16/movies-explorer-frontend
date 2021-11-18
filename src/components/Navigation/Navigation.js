import "./Navigation.css";
import Burger from "../Burger/Burger";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav className={`header__nav ${isOpenMenu ? "header__nav_open" : ""}`}>
      <Burger
        isOpen={isOpenMenu}
        toggleMenu={() => setIsOpenMenu(!isOpenMenu)}
      />
      <div className="header__links">
        <ul className="links links_movies">
          <li className="links__list links__list_movies">
            <NavLink to="/" className="link link_main">
              Главная
            </NavLink>
          </li>
          <li className="links__list links__list_movies">
            <NavLink
              to="/movies"
              activeClassName="link_active"
              className="link"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="links__list links__list_movies">
            <NavLink
              to="/saved-movies"
              activeClassName="link_active"
              className="link"
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="/profile" className="link link_account">
          Аккаунт
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
