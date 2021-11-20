import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../ValidationForm/ValidationForm";

const Login = ({ authorization }) => {
  const [error, setError] = useState("");
  const {
    values,
    handleChange,
    errorsValidation,
    setErrorsValidation,
    isValid,
    resetForm,
  } = useFormWithValidation(setError);

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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </li>
    </AuthForm>
  );
};

export default Login;
