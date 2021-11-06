import { Route, Switch } from "react-router-dom";
import { useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import AuthForm from "../AuthForm/AuthForm";
import Login from "../Login/Login";
import Register from "../Register/Register";

import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { PageContext } from "../../contexts/PageContext";

import "./App.css";

function App() {
  const projectRef = useRef();
  const techsRef = useRef();
  const aboutmeRef = useRef();

  return (
    <PageContext.Provider value={{ aboutmeRef, projectRef, techsRef }}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <SavedMovies />
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
    </PageContext.Provider>
  );
}

export default App;
