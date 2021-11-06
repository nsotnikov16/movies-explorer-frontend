import { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({ name, email, setShowFooter }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);

  useEffect(() => {
    setShowFooter(false)
  })

  const handleChange = ({ target }) => {
    target.name === "name"
      ? setUserName(target.value)
      : setUserEmail(target.value);
  };
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__hello">Привет, {name}!</h1>
        <form className="profile__form">
          <ul className="profile__rows">
            <li className="profile__row">
              <label htmlFor="name" className="profile__label">
                Имя
              </label>
              <input
                type="text"
                onInput={handleChange}
                autoComplete="off"
                id="name"
                disabled={!isEdit}
                value={userName}
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
                onInput={handleChange}
                autoComplete="off"
                id="email"
                disabled={!isEdit}
                value={userEmail}
                name="email"
                className="profile__input"
              />
            </li>
          </ul>
          {isEdit ? (
            <div className="profile__form-down">
              <p
                className={
                  `profile__error ` /* profile__error_show (для проверки) */
                }
              >
                При обновлении профиля произошла ошибка
              </p>
              <button className="profile__save submit-btn">Сохранить</button>
            </div>
          ) : (
            <button
              onClick={() => setIsEdit(!isEdit)}
              type="button"
              className="profile__edit"
            >
              Редактировать
            </button>
          )}
        </form>
        <a
          href="/"
          className={`profile__link ${isEdit ? "profile__link_hide" : ""}`}
        >
          Выйти из аккаунта
        </a>
      </div>
    </section>
  );
};

export default Profile;
