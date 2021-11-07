import "./FilterCheckbox.css";
import { useState } from "react";
function FilterCheckbox() {

  const [isChecked, setIsChecked] = useState(true)

  const clickCheckbox = () => {
    setIsChecked(!isChecked)
  }


  return (
    <div className="filter">
      <label htmlFor="filter" className={`filter__label ${isChecked ? 'filter__label_checked' : ''}`}>
        <input type="checkbox" name="filter" id="filter" onClick={clickCheckbox} className="filter__input" />
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
