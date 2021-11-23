import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useFormWithValidation(setError, currentUser) {
  const [values, setValues] = useState(
    currentUser
      ? { name: currentUser.name, email: currentUser.email }
      : { name: "", email: "", password: "" }
  );
  const [errorsValidation, setErrorsValidation] = useState({});
  const [isValid, setIsValid] = useState(false);
  const location = useLocation().pathname;

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrorsValidation({
      ...errorsValidation,
      [name]: target.validationMessage,
    });
    setIsValid(target.closest("form").checkValidity());
  };

  useEffect(() => {
    if (
      currentUser &&
      values.name === currentUser.name &&
      values.email === currentUser.email
    )
      setIsValid(false);
  }, [values, currentUser, setIsValid]);

  const resetForm = useCallback(
    (
      newValues = { name: "", email: "", password: "" },
      newErrors = {},
      newIsValid = false
    ) => {
      if (!location === "/profile") setValues(newValues);
      setErrorsValidation(newErrors);
      setTimeout(() => setError(""), 1500);
      setIsValid(newIsValid);
    },
    [setValues, setErrorsValidation, setIsValid, setError, location]
  );

  return {
    values,
    setValues,
    handleChange,
    setErrorsValidation,
    errorsValidation,
    isValid,
    resetForm,
    setIsValid,
  };
}
