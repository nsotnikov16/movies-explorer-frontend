import {
  Route,
  Switch,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [beatfilms, setBeatfilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const history = useHistory();
  const location = useLocation.pathname;

  const authorization = (email, password, setError, resetForm) => {
    localStorage.clear();
    MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          MainApi.checkToken(data.token)
            .then((res) => {
              setCurrentUser({ name: res.name, email: res.email });
            })
            .catch((err) => setError("Что-то пошло не так..."));

          setLoggedIn(true);
          history.push("/movies");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => setError("Что-то пошло не так..."))
      .finally(resetForm);
  };

  const registration = (email, password, name, setError, resetForm) => {
    MainApi.register(email, password, name)
      .then((res) => {
        if (res) return authorization(email, password, setError);
      })
      .catch((err) => setError(err))
      .finally(resetForm);
  };

  const signOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("beatfilms");
    localStorage.removeItem("saved");
    history.push("/");
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser({ name: res.name, email: res.email });
        }
      });
    }
  }, []);

  useEffect(() => {
    let cleanupFunction = false;
    if (!loggedIn) return;
    if (localStorage.saved) {
      setSavedFilms(JSON.parse(localStorage.saved));
    } else if (location === "/movies" || location === "/saved-movies") {
      MainApi.getMovies(localStorage.getItem("jwt")).then((res) => {
        if(!cleanupFunction) setSavedFilms(res);
        localStorage.setItem("saved", JSON.stringify(res));
      });
    }
    return () => cleanupFunction = true;
  }, [loggedIn, location]);

  const filterMovies = (films, value, short, setError) => {
    const ent = (item, value) =>
      Object.entries(item).some(
        (e) =>
          e[0] === "nameRU" &&
          e[1].toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    const filterFilms = films.filter((item) =>
      !short ? ent(item, value) : ent(item, value) && item.duration <= 40
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
          .getMovies(type === "saved" ? localStorage.getItem("jwt") : "")
          .then((res) => {
            localStorage.setItem(nameArrayMovies, JSON.stringify(res));
            setFilms(filterMovies(res, value, short, setError));
          })
          .catch((err) =>
            setError(
              type === "saved"
                ? err
                : "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            )
          )
          .finally(() => setIsLoading(false));
      }
    };

    if (type === "beatfilms") getFilms(MoviesApi);

    if (type === "saved") getFilms(MainApi);
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            searchFilms={searchFilms}
            isLoading={isLoading}
            setBeatfilms={setBeatfilms}
            beatfilms={beatfilms}
            loggedIn={loggedIn}
            setSavedFilms={setSavedFilms}
            savedFilms={savedFilms}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            searchFilms={searchFilms}
            isLoading={isLoading}
            setSavedFilms={setSavedFilms}
            savedFilms={savedFilms}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            signOut={signOut}
          />

          <Route path="/sign-in">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login authorization={authorization} loggedIn={loggedIn} />
            )}
          </Route>
          <Route path="/sign-up">
            <Register registration={registration} />
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
