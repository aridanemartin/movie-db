import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../utils/fetch";

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
    <>
      <h1>{original_title}</h1>
      <div>{overview}</div>
      <div>{release_date}</div>
      <div>{vote_average}</div>
      <img
        alt={original_title + " poster"}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
      <img
        alt={original_title + " alternative poster"}
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
      />
    </>
  );
};
