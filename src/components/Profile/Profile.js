import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../ValidationForm/ValidationForm";
import MainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = ({ signOut }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [successfully, setSuccessfully] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [error, setError] = useState("");

  const {
    values,
    handleChange,
    errorsValidation,
    isValid,
    setIsValid,
    resetForm,
  } = useFormWithValidation(setError, currentUser);
  const check = isEdit && !isValid;

  const clearMessage = () => {
    setSuccessfully("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(false);
    MainApi.editProfile(values.name, values.email, localStorage.getItem("jwt"))
      .then((res) => {
        if (res.email) {
          setSuccessfully("Данные изменены успешно!");

          setIsEdit(false);
          return setCurrentUser({ name: res.name, email: res.email });
        }
      })
      .catch((err) => setError(err))
      .finally(() => {
        setTimeout(() => clearMessage(), 3000);
        resetForm();
      });
  };
  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__hello">Привет, {currentUser.name}!</h1>
          <form onSubmit={handleSubmit} className="profile__form">
            <ul className="profile__rows">
              <li className="profile__row">
                <label htmlFor="name" className="profile__label">
                  Имя
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  autoComplete="off"
                  id="name"
                  disabled={!isEdit}
                  value={values.name}
                  required
                  minLength="3"
                  maxLength="30"
                  name="name"
                  className="profile__input"
                />
              </li>
              <li className="profile__row">
                <label htmlFor="email" className="profile__label">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  onChange={handleChange}
                  autoComplete="off"
                  id="email"
                  disabled={!isEdit}
                  value={values.email}
                  name="email"
                  minLength="3"
                  maxLength="30"
                  className="profile__input"
                />
              </li>
            </ul>
            {errorsValidation &&
            Object.values(errorsValidation).filter((item) => item !== "")
              .length > 0
              ? Object.entries(errorsValidation).map((item, ind) => {
                  if (item[1] === "") item[0] = "";
                  if (item[0] === "email") item[0] = "Email:";
                  if (item[0] === "name") item[0] = "Имя:";
                  return (
                    <p key={ind} className="profile__error-validation">
                      {`${item[0]} ${item[1]}`}
                    </p>
                  );
                })
              : ""}

            <div className="profile__form-down">
              <p
                className={`profile__message ${
                  error ? "profile__message_error" : ""
                } ${successfully ? "profile__message_successfully" : ""}`}
              >
                {error || successfully}
              </p>

              {isEdit ? (
                <button
                  disabled={!isValid}
                  className={`profile__save submit-btn ${
                    !isValid ? "submit-btn_disabled" : ""
                  }`}
                >
                  Сохранить
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setTimeout(() => {
                      setIsEdit(!isEdit);
                      /*  setIsValid(false); */
                    }, 100);

                    clearMessage();
                  }}
                  className="profile__edit"
                >
                  Редактировать
                </button>
              )}
            </div>
          </form>

          <a
            href="/"
            className={`profile__link  ${
              isEdit && isValid ? "profile__link_hide" : ""
            }`}
            onClick={(e) => {
              if (check) {
                e.preventDefault();

                setIsEdit(false);
                return;
              }
              signOut();
            }}
          >
            {check ? "Отменить" : "Выйти из аккаунта"}
          </a>
        </div>
      </section>
    </>
  );
};

export default Profile;
