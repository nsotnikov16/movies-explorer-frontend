import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { editCounter, handleCounter } from "../../utils/utils";
import { useState, useEffect } from "react/cjs/react.development";
import { useLocation } from "react-router";

const MoviesCardList = ({ films }) => {
  let [showButtonMore, setShowButtonMore] = useState(false);
  let [counter, setCounter] = useState(null);
  const location = useLocation().pathname;

  const showMoreMovies = (width) => {
    if (counter >= films.length) return setShowButtonMore(false);
    editCounter(width, setCounter, counter);
  };

  useEffect(() => handleCounter(window.innerWidth, setCounter), []);

  useEffect(() => {
    location === "/movies" && films && films.length > counter
      ? setShowButtonMore(true)
      : setShowButtonMore(false);
  }, [location, films, counter]);

  useEffect(() => {
    window.addEventListener("resize", () =>
      handleCounter(window.innerWidth, setCounter)
    );
  });

  if (!films) return null;

  function moviesItems(films) {
    return films.map(({ image, duration, nameRU, trailerLink }, index) => {
      return (
        <MoviesCard
          key={index}
          number={index + 1}
          counter={counter}
          name={nameRU}
          trailerLink={trailerLink}
          duration={duration}
          src={`https://api.nomoreparties.co${image.url}`}
        />
      );
    });
  }

  return (
    <>
      <ul className="movies__cards">
        <>{moviesItems(films)}</>
      </ul>
      {showButtonMore && (
        <button
          onClick={() => showMoreMovies(window.innerWidth)}
          className="movies__more"
        >
          Еще
        </button>
      )}
    </>
  );
};

export default MoviesCardList;
