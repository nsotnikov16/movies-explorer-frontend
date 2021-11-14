import { useState } from "react/cjs/react.development";
import AuthForm from "../AuthForm/AuthForm";

const Register = ({ registration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    if (target.name === "email") setEmail(target.value);
    if (target.name === "password") setPassword(target.value);
    if (target.name === "name") setName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      return;
    }
    registration(email, password, name, setError);
  };

  return (
    <AuthForm
      submitForm={handleSubmit}
      hello="Добро пожаловать!"
      type="register"
      error={error}
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
          maxLength="15"
          className="auth__input"
          value={name}
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
          maxLength="15"
          className="auth__input"
          value={email}
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
          className="auth__input auth__input_error"
          value={password}
          onChange={handleChange}
        />
      </li>
    </AuthForm>
  );
};

export default Register;
