import { useState } from "react/cjs/react.development";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({authorization}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === "email") setEmail(target.value);
    if (target.name === "password") setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    authorization(email, password, setError);
  };


  return (
    <AuthForm
      email={email}
      password={password}
      hello="Рады видеть!"
      type="login"
      error={error}
      submitForm={handleSubmit}
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
          className="auth__input"
          value={password}
          onChange={handleChange}
        />
      </li>
    </AuthForm>
  );
};

export default Login;
