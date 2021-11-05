import "./Burger.css"

const Burger = ({isOpen, toggleMenu}) =>  {
  return (
    <div onClick={toggleMenu} className={`burger ${isOpen ? 'burger_open' : ''}`}>
      <span className="burger__span"></span>
      <span className="burger__span"></span>
      <span className="burger__span"></span>
    </div>
  );
}

export default Burger;
