import { Link } from "react-router-dom";
import "./MovieCard.scss";
import star from "../../assets/img/star.webp";

export const MovieCard = ({ data }) => {
  return (
    <div className="card" key={data.id}>
      <Link to={`movie/${data.id}`}>
        <img
          className="card__image"
          alt="movie Poster"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
      </Link>
      <div className="card__content">
        <Link to={`movie/${data.id}`}>
          <h1 className="card__title">{data.title}</h1>
        </Link>

        <div className="card__ratingWrapper">
          <img className="card__star" src={star} alt="star" />
          <p>{data.vote_average} / 10</p>
        </div>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};
