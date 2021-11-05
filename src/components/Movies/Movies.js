import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
/* import Preloader from '../Preloader/Preloader' */
import "./Movies.css";

const Movies = () => {
  
  //Пропс quanity для проверки верстки временный
  return (
    <>
      <section className="movies">
        <div className="page__container page__container_movies">
          <SearchForm />
          {/* <Preloader/> */}
          <MoviesCardList quantity={16}/>
        </div>
      </section>
    </>
  );
}

export default Movies;
