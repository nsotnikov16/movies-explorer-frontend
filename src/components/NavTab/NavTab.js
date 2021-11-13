import "./NavTab.css";

const NavTab = ({ refs }) => {
  const scroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="tabs">
      <div className="page__container">
        <div className="tabs__container">
          <ul className="tabs__lists">
            <li onClick={() => scroll(refs.projectRef)} className="tabs__list">
              О проекте
            </li>
            <li onClick={() => scroll(refs.techsRef)} className="tabs__list">
              Технологии
            </li>
            <li onClick={() => scroll(refs.aboutmeRef)} className="tabs__list">
              Студент
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavTab;
