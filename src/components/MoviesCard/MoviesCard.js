import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import movieImg from "../../images/movie.png";
import { useState } from "react";
function MoviesCard({ duration, name }) {
  const location = useLocation().pathname;
  const [isLiked, setIsLiked] = useState(false)
  
  const handleLikeCard = () => setIsLiked(!isLiked)

  //На следующий этап :)
  const deleteCard = () => {
    
  }

  return (
    <li className="movies__card">
      <img src={movieImg} alt="Movie" className="movies__img" />
      <div className="movies__description">
        <p className="movies__name">{name}</p>
        <div onClick={location !== "/saved-movies" ? handleLikeCard : deleteCard}
          className={
            location === "/saved-movies"
              ? "movies__trash"
              : `movies__like` + (isLiked ? ` movies__like_liked` : "")
          }
        ></div>
      </div>
      <p className="movies__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
