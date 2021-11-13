import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import AuthForm from "../AuthForm/AuthForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MoviesApi from "../../utils/MoviesApi";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import { useState } from "react/cjs/react.development";

function App() {
  const [beatfilms, setBeatfilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  const filterMovies = (films, value, short, setError) => {
    const filterFilms = films.filter((item) =>
      !short
        ? Object.entries(item).some(
            (e) =>
              e[0] === "nameRU" &&
              e[1].toLowerCase().indexOf(value.toLowerCase()) > -1
          )
        : Object.entries(item).some(
            (e) =>
              e[0] === "nameRU" &&
              e[1].toLowerCase().indexOf(value.toLowerCase()) > -1
          ) && item.duration <= 40
    );
    return filterFilms.length > 0
      ? filterFilms
      : setError("По вашему запросу ничего не найдено");
  };

  const searchFilms = (type, value, short, setError) => {
    setIsLoading(true);

    const getFilms = (api) => {
      const nameArrayMovies = api === MoviesApi ? "beatfilms" : "saved";
      const setFilms = api === MoviesApi ? setBeatfilms : setSavedFilms;
      if (localStorage.getItem(nameArrayMovies)) {
        setIsLoading(false);
        setFilms(
          filterMovies(
            JSON.parse(localStorage.getItem(nameArrayMovies)),
            value,
            short,
            setError
          )
        );
      } else {
        api
          .getMovies()
          .then((films) => {
            localStorage.setItem(nameArrayMovies, JSON.stringify(films));
            setFilms(filterMovies(films, value, short, setError));
          })
          .catch((err) =>
            err
              ? setError(
                  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
                )
              : ""
          )
          .finally(() => setIsLoading(false));
      }
    };

    if (type === "beatfilms") getFilms(MoviesApi);
    /* if(type === 'saved') getFilms(MainApi) */
  };

  return (
      <CurrentUserContext.Provider
        value={
          {
            /* aboutmeRef, projectRef, techsRef */
          }
        }
      >
        <div className="page">
          <Switch>
            <Route exact path="/">
              <Header />
              <Main />
              <Footer />
            </Route>
            <Route path="/movies">
              <Header />
              <Movies
                searchFilms={searchFilms}
                isLoading={isLoading}
                setBeatfilms={setBeatfilms}
                beatfilms={beatfilms}
              />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header />
              <SavedMovies
                searchFilms={searchFilms}
                isLoading={isLoading}
                setSavedFilms={setSavedFilms}
                savedFilms={savedFilms}
              />
              <Footer />
            </Route>
            <Route path="/profile">
              <Header />
              <Profile name="Никита" email="pochta@yandex.ru" />
            </Route>
            <Route path="/sign-in">
              <AuthForm hello="Рады видеть!" type="login">
                <Login />
              </AuthForm>
            </Route>
            <Route path="/sign-up">
              <AuthForm hello="Добро пожаловать!" type="register">
                <Register />
              </AuthForm>
            </Route>
            <Route path="/*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
