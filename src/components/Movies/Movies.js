import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader'
import "./Movies.css";

const Movies = ({beatfilms, setBeatfilms, isLoading, searchFilms}) => {
  
  //Пропс quanity для проверки верстки временный
  return (
    <div className="main">
      <section className="movies">
        <div className="page__container page__container_movies">
          <SearchForm setFilms={setBeatfilms} searchFilms={searchFilms}/>
          {isLoading && <Preloader/>}
          <MoviesCardList films={beatfilms}/>
        </div>
      </section>
    </div>
  );
}

export default Movies;
