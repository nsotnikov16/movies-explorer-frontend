import { useLocation } from "react-router";
import { useState, useRef } from "react/cjs/react.development";
import search from "../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

const SearchForm = ({ searchFilms, setFilms }) => {
  const location = useLocation().pathname;
  const [error, setError] = useState(null);
  const type = location === '/movies' ? 'beatfilms' : 'saved';

  const searchRef = useRef();
  const checkboxRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    setFilms([]);
    setError(null);
    if (searchRef.current.value.length < 1)
      return setError("Нужно ввести ключевое слово");
    searchFilms(
      type,
      searchRef.current.value,
      checkboxRef.current.checked, setError
    );
  };
  return (
    <div className="search ">
      <form onSubmit={submitForm} className="search__form">
        <div className="search__container">
          <img src={search} alt="Поиск" className="search__icon" />
          <input
            type="text"
            name="search"
            maxLength="25"
            autoComplete="off"
            placeholder="Фильм"
            className="search__input"
            ref={searchRef}
          />
          <button className="search__button"></button>
        </div>

        <FilterCheckbox checkboxRef={checkboxRef} />

        {error && <p className="search__error">{error}</p>}
      </form>
    </div>
  );
};

export default SearchForm;
