import "./NavTab.css";
import { PageContext } from "../../contexts/PageContext";
import { useContext } from "react";

const NavTab = ({ refs }) => {
  const {aboutmeRef, projectRef, techsRef} = useContext(PageContext)
  
  const scroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="tabs">
      <div className="page__container">
        <div className="tabs__container">
          <ul className="tabs__lists">
            <li onClick={() => scroll(projectRef)} className="tabs__list">
              О проекте
            </li>
            <li onClick={() => scroll(techsRef)} className="tabs__list">
              Технологии
            </li>
            <li onClick={() => scroll(aboutmeRef)} className="tabs__list">
              Студент
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavTab;
