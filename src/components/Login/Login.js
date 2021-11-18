import { useState, useCallback } from "react/cjs/react.development";
import AuthForm from "../AuthForm/AuthForm";
import { handleChange } from "../../utils/utils";

const Login = ({ authorization }) => {
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
      setTimeout(() => setError(""), 1500);
      setIsValid(newIsValid);
    },
    [setValues, setErrorsValidation, setIsValid]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    authorization(values.email, values.password, setError, resetForm);
  };

  return (
    <AuthForm
      email={values.email}
      password={values.password}
      hello="Рады видеть!"
      type="login"
      error={error}
      submitForm={handleSubmit}
      setError={setError}
      isValid={isValid}
      errorsValidation={errorsValidation}
      setErrorsValidation={setErrorsValidation}
    >
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
          maxLength="50"
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
          className="auth__input"
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

export default Login;
