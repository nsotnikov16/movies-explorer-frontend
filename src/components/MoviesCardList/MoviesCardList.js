import "./MoviesCardList.css";
import "../MoviesCard/MoviesCard";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ quantity }) => {
  //Для верстки
  function moviesItems() {
    let movies = [];
    for (let i = 1; i <= quantity; i++) {
      movies[i] = i;
    }

    return movies.map((item) => {
      return (
        <MoviesCard
          key={item}
          name="Когда я думаю о Германии ночью"
          duration="2ч 50мин"
        />
      );
    });
  }

  return (
    <>
      <ul className="movies__cards">
        <>{moviesItems()}</>
      </ul>
      <button className="movies__more">Еще</button>
    </>
  );
}

export default MoviesCardList;
