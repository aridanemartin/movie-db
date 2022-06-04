import { useState } from "react";
import { fetchData, fetchMovie } from "../../utils/fetch";

export const useMovie = () => {
  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualPage, setActualPage] = useState(1);

  const getMovies = async () => {
    await fetchData(setMovies, setLoading, actualPage, setActualPage);
  };

  const getMovie = async (movieId) => {
    await fetchMovie(setMovie, movieId, setLoading, loading);
  };

  return {
    actualPage,
    getMovie,
    getMovies,
    loading,
    movie,
    movies,
    setActualPage,
  };
};
