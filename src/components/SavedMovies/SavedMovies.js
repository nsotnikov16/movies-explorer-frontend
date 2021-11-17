import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import "../Movies/Movies.css";

const SavedMovies = ({ savedFilms, setSavedFilms, isLoading, searchFilms }) => {
  

  return (
    <>
      <Header />
      <div className="main">
        <section className="movies">
          <div className="page__container page__container_movies">
            <SearchForm setFilms={setSavedFilms} searchFilms={searchFilms} />
            {isLoading && <Preloader />}
            <MoviesCardList setSavedFilms={setSavedFilms} setFilms={setSavedFilms} films={savedFilms} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SavedMovies;
