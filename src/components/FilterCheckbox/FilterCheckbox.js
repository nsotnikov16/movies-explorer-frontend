import "./FilterCheckbox.css";
import { useState } from "react";
function FilterCheckbox({ checkboxRef, filterResult }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="filter">
      <label
        htmlFor="filter"
        className={`filter__label ${isChecked ? "filter__label_checked" : ""}`}
      >
        <input
          type="checkbox"
          ref={checkboxRef}
          name="filter"
          id="filter"
          onClick={() => {
            setIsChecked(!isChecked);
            filterResult();
          }}
          className="filter__input"
        />
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
