export const editCounter = (width, setCounter, counter) => {
  if (width > 768) setCounter((counter += 4));
  if (width <= 768 && width > 480) setCounter((counter += 2));
  if (width <= 480) setCounter((counter += 2));
};

export const handleCounter = (width, setCounter) => {
  if (width > 768) setCounter(12);
  if (width <= 768 && width > 480) setCounter(8);
  if (width <= 480) setCounter(5);
};

export const handleChange = (
  { target },
  errorsValidation,
  setErrorsValidation,
  setIsValid,
  values,
  setValues
) => {
  const quantityInputs = target
    .closest("form")
    .querySelectorAll("input").length;

  const checkValidity =
    Object.keys(errorsValidation).length === quantityInputs &&
    Object.values(errorsValidation).every((item) => item === "") &&
    target.value.length >= 3;

  checkValidity ? setIsValid(true) : setIsValid(false);
  setValues({ ...values, [target.name]: target.value });

  setErrorsValidation({
    ...errorsValidation,
    [target.name]: target.validationMessage,
  });

  checkValidity ? setIsValid(true) : setIsValid(false);
};
