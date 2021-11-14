import "./AuthForm.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const AuthForm = ({ children, type, hello, submitForm, error }) => {
  const check = type === "register";

  return (
    <section className="auth">
      <div className="auth__container">
        <Link className="logo_auth" to="/">
          <img src={logo} alt="Logo" className="logo " />
        </Link>
        <h1 className="auth__title">{hello}</h1>
        <form  onSubmit={submitForm} className="auth__form">
          <ul className="auth__rows">{children}</ul>
          {error && <p className="auth__error">{error}</p>}
          <button className="auth__button submit-btn">
            {check ? "Зарегистрироваться" : "Войти"}
          </button>
        </form>
        <p className="auth__bottom">
          {check ? "Уже зарегистрированы? " : "Еще не зарегистрированы? "}
          <Link to={check ? "/sign-in" : "/sign-up"} className="link link_auth">
            {check ? "Войти" : "Регистрация"}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuthForm;
