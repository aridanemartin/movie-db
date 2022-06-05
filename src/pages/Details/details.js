import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/pageTransitions";
import { useMovie } from "../../hooks/useMovie/useMovie";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import star from "../../assets/img/star.webp";

import "./details.scss";

export const Details = () => {
  const { movieId } = useParams();
  const { getMovie, loading, movie } = useMovie();

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  if (loading) {
    return (
      <div className="loadingPage">
        <ClipLoader
          color="#000000"
          loading={loading}
          size={70}
          speedMultiplier="0.6"
        />
        <p>Your next favourite movie is waiting for you</p>
      </div>
    );
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
