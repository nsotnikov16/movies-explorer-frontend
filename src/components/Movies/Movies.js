import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const Movies = ({
  beatfilms,
  setBeatfilms,
  isLoading,
  searchFilms,
  setSavedFilms,
  savedFilms,
  loggedIn,
}) => {
  useEffect(() => {
    const beatfilmsLocal = localStorage.getItem("beatfilms");
    if (
      beatfilmsLocal &&
      beatfilmsLocal !== "undefined" &&
      JSON.parse(beatfilmsLocal).length > 0
    ) {
      setBeatfilms(JSON.parse(beatfilmsLocal));
    }
  }, [setBeatfilms]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="main">
        <section className="movies">
          <div className="page__container page__container_movies">
            <SearchForm
              films={beatfilms}
              setFilms={setBeatfilms}
              searchFilms={searchFilms}
            />
            {isLoading && <Preloader />}
            <MoviesCardList
              setSavedFilms={setSavedFilms}
              savedFilms={savedFilms}
              setFilms={setBeatfilms}
              films={beatfilms}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
