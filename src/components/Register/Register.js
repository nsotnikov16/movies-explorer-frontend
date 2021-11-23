import { useState } from "react";
import { useFormWithValidation } from "../ValidationForm/ValidationForm";
import AuthForm from "../AuthForm/AuthForm";

const Register = ({ registration }) => {
  const [error, setError] = useState("");
  const {
    values,
    handleChange,
    errorsValidation,
    setErrorsValidation,
    isValid,
    setIsValid,
    resetForm,
  } = useFormWithValidation(setError);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password || !values.name) {
      return;
    }
    setIsValid(false);
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
          onChange={handleChange}
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
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
          onChange={handleChange}
        />
      </li>
    </AuthForm>
  );
};

export default Register;
