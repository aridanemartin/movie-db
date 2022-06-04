import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/pageTransitions";
import { useMovie } from "../../hooks/useMovie/useMovie";
import star from "../../assets/img/star.webp";

import "./details.scss";
import { NavBar } from "../../Components/NavBar";

export const Details = () => {
  const { movieId } = useParams();
  const { getMovie, loading, movie } = useMovie();

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const { original_title, overview, poster_path, backdrop_path, vote_average } =
    movie;
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="detail"
    >
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
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
