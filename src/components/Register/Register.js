const Register = () => {
  return (
    <>
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
        />
      </li>
    </>
  );
};

export default Register;
