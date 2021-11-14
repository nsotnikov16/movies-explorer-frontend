import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = ({ beatfilms, setBeatfilms, isLoading, searchFilms }) => {
  return (
    <>
      <Header />
      <div className="main">
        <section className="movies">
          <div className="page__container page__container_movies">
            <SearchForm setFilms={setBeatfilms} searchFilms={searchFilms} />
            {isLoading && <Preloader />}
            <MoviesCardList films={beatfilms} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
