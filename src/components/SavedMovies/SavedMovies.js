import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import MainApi from "../../utils/MainApi";

import "../Movies/Movies.css";

const SavedMovies = ({ savedFilms, setSavedFilms, isLoading, searchFilms }) => {
  useEffect(() => {
    const saved = localStorage.getItem("saved");
    console.log(saved);
    if(saved) {
      setSavedFilms(JSON.parse(saved))
    } else {
      MainApi.getMovies(localStorage.getItem("jwt")).then((res) => {
        setSavedFilms(res);
        localStorage.setItem("saved", JSON.stringify(res));
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <section className="movies">
          <div className="page__container page__container_movies">
            <SearchForm setFilms={setSavedFilms} searchFilms={searchFilms} />
            {isLoading && <Preloader />}
            <MoviesCardList films={savedFilms} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SavedMovies;
