const API = process.env.REACT_APP_API_KEY;

export const fetchData = async (setMovies, setLoading, actualPage) => {
  try {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${actualPage}`
    );
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const data = await response.json();
    setMovies(data.results);
  } catch (err) {
    setMovies(null);
  } finally {
    setLoading(false);
  }
};

export const fetchMovie = async (setMovie, movieId, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&language=en-US&append_to_response=videos`
    );
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const data = await response.json();
    setMovie(data);
  } catch (err) {
    setMovie(null);
  } finally {
    setLoading(false);
  }
};
