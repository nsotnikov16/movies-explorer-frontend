import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation().pathname;
  return (
    <footer className="footer">
      <div
        className={`page__container ${
          location === "/movies" || location === "/saved-movies"
            ? "page__container_movies"
            : ""
        }`}
      >
        <div className="footer__top">
          <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
        </div>
        <div className="footer__down">
          <p className="footer__copyright">© 2021</p>
          <ul className="links links_footer">
            <li className="links__list links__list_footer">
              <a
                href="https://practicum.yandex.ru"
                target="_blank"
                className="link link_footer"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="links__list links__list_footer">
              <a
                href="https://github.com/nsotnikov16"
                className="link link_footer"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="links__list links__list_footer">
              <a
                href="https://www.instagram.com/n_stnkv/"
                target="_blank"
                className="link link_footer"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
