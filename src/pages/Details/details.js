import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../utils/fetch";
import star from "../../assets/img/star.webp";

import "./details.scss";

export const Details = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovie(setMovie, movieId, setLoading, loading);
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const {
    original_title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
  } = movie;
  return (
    <div className="detail">
      <img
        className="detail__background"
        alt={original_title + " alternative poster"}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />

      <div className="detail__content">
        <img
          className="detail__content__cover"
          alt={original_title + " poster"}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
        <div className="detail__content__info">
          <h1>{original_title}</h1>
          <div className="detail__content__info__ratingWrapper">
            <img className="card__star" src={star} alt="star" />
            <p>{vote_average} / 10</p>
          </div>
          <p>{overview}</p>
          <p>{release_date}</p>
        </div>
      </div>
    </div>
  );
};
