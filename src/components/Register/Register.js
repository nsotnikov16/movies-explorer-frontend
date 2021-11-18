import { useState, useCallback } from "react/cjs/react.development";
import AuthForm from "../AuthForm/AuthForm";
import { handleChange } from "../../utils/utils";

const Register = ({ registration }) => {
  const [values, setValues] = useState({ name: "", password: "", email: "" });
  const [error, setError] = useState("");
  const [errorsValidation, setErrorsValidation] = useState({});
  const [isValid, setIsValid] = useState(false);

  const resetForm = useCallback(
    (
      newValues = { name: "", password: "", email: "" },
      newErrors = {},
      newIsValid = false
    ) => {
      setValues(newValues);
      setErrorsValidation(newErrors);
      setTimeout(() => setError(""), 2500);
      setIsValid(newIsValid);
    },
    [setValues, setErrorsValidation, setIsValid]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password || !values.name) {
      return;
    }
    registration(
      values.email,
      values.password,
      values.name,
      setError,
      resetForm
    );
  };

  return (
    <AuthForm
      submitForm={handleSubmit}
      hello="Добро пожаловать!"
      type="register"
      error={error}
      setError={setError}
      isValid={isValid}
      errorsValidation={errorsValidation}
      setErrorsValidation={setErrorsValidation}
    >
      <li className="auth__row">
        <label htmlFor="name" className="auth__label">
          Имя
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          autoComplete="off"
          minLength="3"
          maxLength="30"
          className="auth__input"
          value={values.name}
          onChange={(e) =>
            handleChange(
              e,
              errorsValidation,
              setErrorsValidation,
              setIsValid,
              values,
              setValues
            )
          }
        />
      </li>
      <li className="auth__row">
        <label htmlFor="email" className="auth__label">
          E-mail
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          autoComplete="off"
          minLength="3"
          maxLength="30"
          className="auth__input"
          value={values.email}
          onChange={(e) =>
            handleChange(
              e,
              errorsValidation,
              setErrorsValidation,
              setIsValid,
              values,
              setValues
            )
          }
        />
      </li>
      <li className="auth__row">
        <label htmlFor="password" className="auth__label ">
          Пароль
        </label>
        <input
          type="password"
          required
          id="password"
          name="password"
          autoComplete="off"
          minLength="3"
          maxLength="15"
          className="auth__input auth__input_error"
          value={values.password}
          onChange={(e) =>
            handleChange(
              e,
              errorsValidation,
              setErrorsValidation,
              setIsValid,
              values,
              setValues
            )
          }
        />
      </li>
    </AuthForm>
  );
};

export default Register;
