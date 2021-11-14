import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader'

import "../Movies/Movies.css";

const SavedMovies = ( {savedMovies, setSavedMovies, isLoading, searchFilms}) => {
  
  return (
    <>
    <Header/>
    <div className="main">
      <section className="movies">
        <div className="page__container page__container_movies">
          <SearchForm setFilms={setSavedMovies} searchFilms={searchFilms}/>
          {isLoading && <Preloader />}
          <MoviesCardList films={savedMovies} />
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default SavedMovies;
