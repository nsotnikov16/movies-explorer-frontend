import search from "../../images/search.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search ">
        <form className="search__form">
          <div className="search__container">
            <img src={search} alt="Поиск" className="search__icon" />
            <input
              type="text"
              name="search"
              minLength="3"
              maxLength="25"
              autoComplete="off"
              placeholder="Фильм"
              className="search__input"
            />
            <button type="button" className="search__button"></button>
          </div>
          <FilterCheckbox />
        </form>
    </div>
  );
}

export default SearchForm;
