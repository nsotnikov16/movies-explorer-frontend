import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainApi from "../../utils/MainApi";
function MoviesCard({
  data,
  counter,
  number,
  src,
  films,
  setFilms,
  savedFilms,
  setSavedFilms,
}) {
  const location = useLocation().pathname;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    savedFilms && savedFilms.some((item) => item.nameRU === data.nameRU)
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [savedFilms, data.nameRU]);

  const handleLikeCard = () => {
    const jwt = localStorage.getItem("jwt");
    if (!isLiked)
      MainApi.saveMovie(jwt, data).then((res) => {
        setSavedFilms([res, ...savedFilms]);
        setIsLiked(true);
      });

    if (isLiked) {
      const currentMovie = savedFilms.find((item) => item.movieId === data.id);
      MainApi.deleteMovie(currentMovie._id, jwt)
        .then((res) => {
          if(res) setSavedFilms(savedFilms.filter((item) => item !== currentMovie));
        })
        .catch((err) => console.log(err));
    }
  };
  const deleteCard = () => {
    const jwt = localStorage.getItem("jwt");
    console.log(data._id);
    MainApi.deleteMovie(data._id, jwt)
      .then((res) => {
        if (res) {
          setFilms(films.filter((film) => film._id !== data._id));
          localStorage.setItem("saved", JSON.stringify(films));
        }
      })
      .catch((err) => console.log(err));
  };

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins < 60) return minutes + "м";
    if (mins % 60 === 0) return hours + "ч ";
    return hours + "ч " + minutes + "м";
  }

  return (
    <li
      className={`movies__card ${number <= counter ? "" : "movies__card_hide"}`}
    >
      <a target="_blank" href={data.trailerLink} rel="noreferrer">
        <img src={src} alt="Movie" className="movies__img" />
      </a>
      <div className="movies__description">
        <a target="_blank" href={data.trailerLink} rel="noreferrer">
          <p className="movies__name">{data.nameRU}</p>
        </a>
        <div
          onClick={location !== "/saved-movies" ? handleLikeCard : deleteCard}
          className={
            location === "/saved-movies"
              ? "movies__trash"
              : `movies__like` + (isLiked ? ` movies__like_liked` : "")
          }
        ></div>
      </div>
      <p className="movies__duration">{getTimeFromMins(data.duration)}</p>
    </li>
  );
}

export default MoviesCard;
