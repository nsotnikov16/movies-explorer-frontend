import "./NotFoundPage.css";
import { Link, useHistory } from "react-router-dom";
const NotFoundPage = () => {
  const history = useHistory();
  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__description">
          <h1 className="notfound__title">404</h1>
          <p className="notfound__subtitle">Страница не найдена</p>
        </div>
        <Link onClick={() => history.goBack()} className="link link_notfound">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
