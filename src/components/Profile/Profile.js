import { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState('')
  const [successfully, setSuccessfully] = useState('')
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser]);

  const handleChange = ({ target }) => {
    target.name === "name"
      ? setUserName(target.value)
      : setUserEmail(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    MainApi.editProfile(userName, userEmail, localStorage.getItem("jwt")).then(res => {
      console.log(res)
      if(res.email) {
        setIsEdit(false)
        setSuccessfully('Данные изменены успешно!')
        return setCurrentUser({name: res.name, email: res.email})
      }
    }).catch(err => setError(err));
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
                onChange={handleChange}
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
                  `profile__message ${error ? 'profile__message_error' : ''} ${successfully ? 'profile__message_successfully' : ''}`
                }
              >
                {error || successfully}
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
    </>
  );
};

export default Profile;
