import { Route, useLocation, Switch } from "react-router-dom";
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
import {PageContext} from '../../contexts/PageContext'

import "./App.css";

function App() {
  const location = useLocation().pathname;

  const projectRef = useRef()
  const techsRef = useRef()
  const aboutmeRef = useRef()


  const showHeader = () => {
    const pages = ["/", "/movies", "/saved-movies", "/profile"];
    return pages.map((page) => location === page && <Header key={page} />);
  };

  const showFooter = () => {
    const pages = ["/", "/movies", "/saved-movies"];
    return pages.map((page) => location === page && <Footer key={page} />);
  };

  return (
     <PageContext.Provider value={{aboutmeRef, projectRef, techsRef}}>

    <div className="page">
      {showHeader()}
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile name="Никита" email="pochta@yandex.ru" />
          </Route>
          <Route path="/sign-in">
            <AuthForm type="login">
              <Login />
            </AuthForm>
          </Route>
          <Route path="/sign-up">
            <AuthForm type="register">
              <Register />
            </AuthForm>
          </Route>
          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>

      {showFooter()}
    </div>

    </PageContext.Provider>
  );
}

export default App;
