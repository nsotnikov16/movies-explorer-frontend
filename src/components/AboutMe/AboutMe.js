import photo from "../../images/myphoto.jpg";
import "./AboutMe.css";

const AboutMe = ({ aboutmeRef }) => {
  return (
    <section ref={aboutmeRef} className="aboutme">
      <div className="page__container">
        <h2 className="title">Студент</h2>
        <div className="aboutme__grid">
          <div className="aboutme__left">
            <div className="aboutme__about">
              <h2 className="aboutme__name">Никита</h2>
              <p className="aboutme__profession">
                Фронтенд-разработчик, 23 года
              </p>
              <p className="aboutme__description">
                Проживаю в Сургуте. По образованию - инженер-энергетик. Холост.
                В веб-разработке с 2021 года. Август 2021 года - ушел с крупной
                компании в области электроэнергетики "Россети". Оперативно
                показал полученные навыки в Я.Практикуме, прошел собеседование и
                устроился в компанию по разработке и продвижению сайтов.
                Дополнительно являюсь преподавателем курса "Создание веб-сайтов"
                в школе программирования для детей от 10 до 17 лет.
              </p>
            </div>
            <ul className="links links_aboutme">
              <li className="links__list links__list_aboutme">
                <a href="https://www.instagram.com/n_stnkv/" className="link">
                  Instagram
                </a>
              </li>
              <li className="links__list links__list_aboutme">
                <a href="https://github.com/nsotnikov16/" className="link">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <img src={photo} alt="Мое фото" className="aboutme__photo" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
