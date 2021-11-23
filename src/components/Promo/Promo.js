import promo from "../../images/promo__logo.png";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="page__container">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки
          </h1>
          <img src={promo} alt="Баннер" className="promo__logo" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
