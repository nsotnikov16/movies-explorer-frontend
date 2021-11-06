import "./AuthForm.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AuthForm = ({ children, type, setShowHeader, setShowFooter }) => {
  useEffect(() => {
    setShowHeader(false)
    setShowFooter(false)
  })
  const check = type === "register";
  return (
    <section className="auth">
      <div className="auth__container">
        <Link  className="logo_auth" to="/"><img src={logo} alt="Logo" className="logo " /></Link>
        <h1 className="auth__title">Добро пожаловать!</h1>
        <form className="auth__form">
          <ul className="auth__rows">{children}</ul>
          <p className="auth__error">Что-то пошло не так...</p>
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
