import "./NotFoundPage.css";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__description">
          <h1 className="notfound__title">404</h1>
          <p className="notfound__subtitle">Страница не найдена</p>
        </div>
        <Link to="/" className="link link_notfound">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
