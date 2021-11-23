import "./FilterCheckbox.css";

function FilterCheckbox({
  checkboxRef,
  filterResult,
  isChecked,
  setIsChecked,
}) {
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
          defaultChecked={isChecked}
          onClick={() => {
            filterResult();
          }}
          onChange={() => setIsChecked(!isChecked)}
          className="filter__input"
        />
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
