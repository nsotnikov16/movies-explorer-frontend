import { useLocation, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header className={`header ${location === "/" ? "header_about" : ""}`}>
      <div
        className={`page__container ${
          location === "/movies" || location === "/saved-movies"
            ? "page__container_header-movies"
            : "page__container_about"
        }`}
      >
        <div className="header__container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          {location === "/" ? (
            <ul className="links links_about">
              <li className="links__list links__list_about">
                <Link to="/sign-up" className="link">
                  Регистрация
                </Link>
              </li>
              <li className="links__list links__list_about">
                <Link to="/sign-in" className="link link_login">
                  Войти
                </Link>
              </li>
            </ul>
          ) : (
            <Navigation />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
