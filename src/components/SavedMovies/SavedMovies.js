import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
/* import Preloader from '../Preloader/Preloader' */

import "../Movies/Movies.css";

const SavedMovies = () => {
  
  //Пропс quanity для верстки временный

  return (
    <>
      <section className="movies">
        <div className="page__container page__container_movies">
          <SearchForm />
          {/* <Preloader/> */}
          <MoviesCardList quantity={2} />
        </div>
      </section>
    </>
  );
}

export default SavedMovies;
