import { Route, Switch } from "react-router-dom";
import { useRef, useState } from "react";
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

  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <PageContext.Provider value={{ aboutmeRef, projectRef, techsRef }}>
      <div className="page">
        {showHeader && <Header />}
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
              <Profile
                setShowFooter={setShowFooter}
                name="Никита"
                email="pochta@yandex.ru"
              />
            </Route>
            <Route path="/sign-in">
              <AuthForm
                setShowFooter={setShowFooter}
                setShowHeader={setShowHeader}
                type="login"
              >
                <Login />
              </AuthForm>
            </Route>
            <Route path="/sign-up">
              <AuthForm
                setShowFooter={setShowFooter}
                setShowHeader={setShowHeader}
                type="register"
              >
                <Register />
              </AuthForm>
            </Route>
            <Route path="/*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>

        {showFooter && <Footer />}
      </div>
    </PageContext.Provider>
  );
}

export default App;
