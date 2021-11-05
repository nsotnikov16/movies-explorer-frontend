import "./AboutProject.css";
import { PageContext } from "../../contexts/PageContext";
import { useContext } from "react";

const AboutProject = () => {
  const {projectRef} = useContext(PageContext)
  return (
    <section ref={projectRef} className="about ">
      <div className="page__container">
        <h2 className="title">О проекте</h2>
        <div className="about__description">
          <div className="about__block">
            <p className="about__paragraph about__paragraph_period">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__block">
            <p className="about__paragraph about__paragraph_period">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <ul className="about__lists about__lists_period">
          <li className="about__list">
            <p className="about__list-paragraph about__list-paragraph_blue">
              1 неделя
            </p>
          </li>
          <li className="about__list">
            <p className="about__list-paragraph">4 недели</p>
          </li>
        </ul>
        <ul className="about__lists about__lists_direction">
          <li className="about__list">
            <p className="about__list-paragraph">Back-end</p>
          </li>
          <li className="about__list">
            <p className="about__list-paragraph">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
