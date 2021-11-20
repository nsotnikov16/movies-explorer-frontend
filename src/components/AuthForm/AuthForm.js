import "./AuthForm.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const AuthForm = ({
  children,
  type,
  hello,
  submitForm,
  error,
  isValid,
  errorsValidation,
}) => {
  const check = type === "register";

  return (
    <section className="auth">
      <div className="auth__container">
        <Link className="logo_auth" to="/">
          <img src={logo} alt="Logo" className="logo " />
        </Link>
        <h1 className="auth__title">{hello}</h1>
        <form onSubmit={submitForm} className="auth__form">
          <ul className="auth__rows">{children}</ul>
          {error && <p className="auth__error">{error}</p>}
          {errorsValidation &&
          Object.values(errorsValidation).filter((item) => item !== "").length >
            0
            ? Object.entries(errorsValidation).map((item, ind) => {
                if (item[1] === "") item[0] = "";
                if (item[0] === "password") item[0] = "Пароль:";
                if (item[0] === "email") item[0] = "Email:";
                if (item[0] === "name") item[0] = "Имя:";
                return (
                  <p key={ind} className="auth__error">
                    {`${item[0]} ${item[1]}`}
                  </p>
                );
              })
            : ""}
          <button
            disabled={!isValid}
            className={`auth__button submit-btn ${
              !isValid ? "submit-btn_disabled" : ""
            }`}
          >
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
