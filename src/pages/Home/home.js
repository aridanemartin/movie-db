import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { MovieCard } from "../../Components/MovieCard";
import { fetchData } from "../../utils/fetch";

import "./home.scss";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actualPage, setPage] = useState(1);

  useEffect(() => {
    fetchData(setMovies, setLoading, actualPage);
  }, []);

  console.log(movies);

  return (
    <div className="home">
      <Layout gridLayout>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} data={movie} />;
        })}
      </Layout>
    </div>
  );
}

export default Home;
