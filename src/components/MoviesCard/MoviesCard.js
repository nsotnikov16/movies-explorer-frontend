import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import  MainApi  from "../../utils/MainApi";
function MoviesCard({ data, counter, number, src }) {
  const location = useLocation().pathname;
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeCard = () => {
    console.log(data)
    if(!isLiked) MainApi.saveMovie(localStorage.getItem('jwt'), data).then(res => console.log(res))
    setIsLiked(!isLiked)
  };
  const deleteCard = () => {
    const jwt = localStorage.getItem('jwt');
    const saved = localStorage.getItem('saved');

    /* const deleteCardInLocalStorage = (data) */
    /* console.log(data) */
    //MainApi.deleteMovie(data._id, jwt).then(res => res ? saved).catch(err => alert(err))
  };

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins < 60) return minutes + "м";
    if (mins % 60 === 0) return hours + "ч ";
    return hours + "ч " + minutes + "м";
  }

  return (
    <li className={`movies__card ${number <= counter ? "" : 'movies__card_hide'}`}>
      
      <a target="_blank" href={data.trailerLink} rel="noreferrer"><img src={src} alt="Movie" className="movies__img" /></a>
        <div className="movies__description">
        <a target="_blank" href={data.trailerLink} rel="noreferrer"><p className="movies__name">{data.nameRU}</p></a>
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
