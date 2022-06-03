import { useEffect, useState } from "react";
import { MoviesLayout } from "../../Components/MoviesLayout";
import { MovieCard } from "../../Components/MovieCard";

function Home() {
  const API = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`
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

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movies);

  return (
    <>
      <div className="Home">
        <MoviesLayout>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} data={movie} />;
          })}
        </MoviesLayout>
      </div>
    </>
  );
}

export default Home;
